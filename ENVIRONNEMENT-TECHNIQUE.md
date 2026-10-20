# Environnement technique de Vériane

**Note de Mathieu Lefort — Architecte intégration, DSI**

Cette note décrit l'environnement du client fictif et les contrats des interfaces de l'exercice. Elle peut être lue directement par ton assistant ou agent.

**Disponibilité dans ce dépôt :** documentation et pièces du dossier uniquement. Aucun serveur, simulateur exécutable, accès réseau ni identifiant n'est fourni. Les chemins HTTP ci-dessous décrivent des interfaces ; ils ne désignent pas des services en ligne accessibles depuis ce dépôt. Pour la démonstration, des fichiers et des doubles locaux peuvent représenter les systèmes concernés, selon le périmètre convenu avec l'intervieweur.

## Applications et accès existants

| Composant | Situation chez le client |
| --- | --- |
| SAP S/4HANA | Hébergé sur site. Les interfaces passent par SAP Integration Suite, administrée par la DSI. |
| Capture des factures | Un module intégré à SAP lit les PDF reçus. La comptabilité vérifie et corrige les données avant enregistrement. |
| Passerelle de fichiers | SFTP en production ; représentation HTTPS dans le contrat de staging décrit ci-dessous. |
| CTMS | Veeva Vault CTMS en SaaS. Une API de consultation permet de lire études, centres et visites. |
| Référentiels | Correspondance fournisseurs–centres et grilles contractuelles, maintenues par les Opérations cliniques. |
| Microsoft 365 | SharePoint, Microsoft Lists, Planner et les connecteurs standard Power Automate sont disponibles. |
| Traitements planifiés | La DSI dispose d'Azure Container Apps Jobs, de Key Vault et de journaux centralisés. |

Les ARC n'ont pas d'accès SAP. La DSI ne prévoit pas de leur créer de comptes. Aucun accès direct à la base SAP n'est disponible.

Une nouvelle interface SAP nécessite un passage en comité des changements et six à huit semaines au minimum ; la file d'attente est pleine jusqu'en février suivant la date du dossier. Les flux de fichiers déjà existants peuvent être réutilisés après déclaration et validation des responsables concernés.

Les identifiants patients sont pseudonymisés. Les interfaces n'ont pas besoin de noms de patients.

## Passerelle et exports SAP

Un export des factures bloquées est déposé chaque nuit vers **02:00**. Les exports des nuits précédentes restent disponibles. Les trois fichiers d'une même nuit portent la même date `AAAAMMJJ`.

| Dossier | Contenu |
| --- | --- |
| `sortant/` | Factures bloquées, lignes de factures et historique des lignes payées |
| `referentiels/` | Correspondance fournisseurs–centres et prix des conventions |
| `entrant/deblocage/` | Fichiers destinés au flux existant de déblocage ou rejet dans SAP |

Le format CSV est **UTF-8 avec BOM**, séparateur **point-virgule**. Les montants utilisent une virgule décimale et peuvent contenir des espaces fines insécables comme séparateurs de milliers, par exemple `1 234,50`. Les dates métier sont au format **JJ.MM.AAAA**. Les champs peuvent être entourés de guillemets selon les règles CSV.

### En-têtes des fichiers

`sortant/FACT_ATTENTE_AAAAMMJJ.csv`

```csv
DOC_SAP;FOURNISSEUR;NOM_FOURNISSEUR;REF_FACTURE;DATE_FACTURE;DATE_RECEPTION;ETUDE;MONTANT_HT;TVA;MONTANT_TTC;DEVISE;STATUT
```

Une ligne par facture bloquée. `DOC_SAP` identifie la pièce SAP, `REF_FACTURE` est la référence écrite par le fournisseur. La devise est `EUR` ; le statut exporté est `BLOQUEE_VALID_CLIN`.

`sortant/FACT_ATTENTE_LIGNES_AAAAMMJJ.csv`

```csv
DOC_SAP;NUM_LIGNE;PATIENT;CODE_PRESTATION;LIBELLE;QUANTITE;PRIX_UNITAIRE_HT;MONTANT_HT
```

Les lignes sont rattachées à leur facture par `DOC_SAP`.

`sortant/FACT_PAYEES_LIGNES_12M_AAAAMMJJ.csv`

```csv
DOC_SAP;FOURNISSEUR;REF_FACTURE;ETUDE;PATIENT;CODE_PRESTATION;MONTANT_HT;DATE_PAIEMENT
```

Cet historique porte sur les douze derniers mois.

`referentiels/CORRESPONDANCE_FOURNISSEURS_CENTRES.csv`

```csv
FOURNISSEUR_SAP;NOM_FOURNISSEUR;CENTRE_CTMS;ETUDES;ARC_REFERENT;EMAIL_ARC
```

Le champ `ETUDES` contient une ou plusieurs études, séparées par des virgules. Ce référentiel est maintenu manuellement ; sa complétude n'est pas garantie.

`referentiels/GRILLES_BUDGETAIRES.csv`

```csv
ETUDE;CENTRE_CTMS;CODE_PRESTATION;LIBELLE;PRIX_UNITAIRE_HT
```

La grille distingue l'étude, le centre et le code de prestation.

### Contrat HTTPS de la passerelle

Authentification : `Authorization: Bearer <jeton>`.

| Requête | Réponse ou effet |
| --- | --- |
| `GET /passerelle/` | Liste des dossiers |
| `GET /passerelle/<dossier>/` | JSON contenant `dossier` et `contenu`, tableau de noms de fichiers ou sous-dossiers |
| `GET /passerelle/<chemin>` | Contenu du fichier |
| `PUT /passerelle/entrant/deblocage/<nom>.csv` | Dépôt du contenu CSV vers SAP |

Un jeton absent ou invalide produit une réponse `401`. Un fichier introuvable produit `404`. Le dépôt ne peut pas écraser un nom existant (`409`).

## Flux existant de déblocage ou rejet

SAP Integration Suite relève les fichiers déposés dans `entrant/deblocage/` toutes les heures en production. Dans le contrat du simulateur de staging, le résultat est disponible dès le dépôt.

En-tête exact :

```csv
DOC_SAP;ACTION;VALIDEUR;DATE_VALIDATION;COMMENTAIRE
```

| Champ | Contrat |
| --- | --- |
| `DOC_SAP` | Pièce SAP concernée |
| `ACTION` | `DEBLOQUER` ou `REJETER` |
| `VALIDEUR` | Adresse e-mail d'une personne habilitée ou compte technique déclaré |
| `DATE_VALIDATION` | Horodatage ISO 8601 |
| `COMMENTAIRE` | Motif lisible ; obligatoire pour un rejet |

La DSI dispose du compte technique fictif `SVC_CTRL_FACT_CLIN` pour un traitement automatique. Son utilisation doit être validée par Isabelle et le contrôle interne ; son existence ne vaut pas accord sur les règles métier.

Le nom de chaque fichier est unique. Le résultat de son traitement se lit à :

```text
GET /passerelle/entrant/deblocage/<nom>.csv.resultat
```

La réponse contient notamment `fichier`, `erreur`, `lignes_acceptees`, `lignes_en_erreur` et `erreurs` (numéro de ligne, pièce SAP et motif). Un fichier peut contenir des lignes acceptées et des lignes en erreur.

Les factures déjà traitées ne peuvent pas être débloquées de nouveau par ce flux. Les motifs de rejet sont transmis à la comptabilité, qui reste l'interlocutrice des centres.

## CTMS : interface de consultation

Le compte de service est en lecture seule.

| Requête | Contrat |
| --- | --- |
| `POST /ctms/api/v1/auth` | Corps JSON ou formulaire contenant `username` et `password`. Retourne `sessionId` et `expires_in`. Session valable 20 minutes. |
| `GET /ctms/api/v1/studies` | Études : `study`, `title`, `therapeutic_area` |
| `GET /ctms/api/v1/sites?study=<étude>` | Centres : `study`, `site`, `name`, `city`, `cra_email` |
| `GET /ctms/api/v1/visits?study=<étude>&site=<centre>` | Visites du centre pour cette étude |

Après authentification, transmettre **`Authorization: <sessionId>`**, sans préfixe `Bearer`.

Les visites acceptent les paramètres facultatifs `subject`, `page` et `page_size`. La première page est `1`, la taille par défaut `25` et le maximum `50`.

Une réponse de visites contient :

```json
{
  "responseStatus": "SUCCESS",
  "data": [
    {
      "study": "VRN-204",
      "site": "FR-01",
      "subject": "204-01-001",
      "visit": "V1",
      "visit_date": "2026-06-15",
      "status": "sdv_complete"
    }
  ],
  "page": 1,
  "page_size": 25,
  "total": 1,
  "has_more": false
}
```

Cet exemple illustre uniquement la structure ; il n'est pas un jeu de données de l'exercice.

Les statuts possibles sont `planned`, `completed`, `sdv_complete`, `missed` et `screen_failure`. `completed` indique une visite réalisée ; `sdv_complete` indique que ses données sources ont été vérifiées.

La limite est **20 appels par tranche de 10 secondes et par session**. Un dépassement retourne `429` avec un en-tête `Retry-After`. Une session absente, invalide ou expirée retourne `401`. Un centre peut temporairement retourner `503` pendant une migration. Une erreur n'est pas une réponse métier vide.

## Outils collaboratifs disponibles

### SharePoint et Microsoft Lists

Les licences standard permettent des listes structurées, une vue tableau par statut et l'historique des modifications. L'accès applicatif nécessite un enregistrement Entra ID avec des droits limités au site concerné.

La DSI a préparé le schéma d'une liste **« Factures des centres »**, site logique `opsclin`, liste `factures-centres`.

Le contrat de staging utilise :

```text
POST /login/<tenant>/oauth2/v2.0/token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials
client_id=<identifiant>
client_secret=<secret>
scope=https://graph.microsoft.com/.default
```

La réponse fournit `access_token`, `token_type` et `expires_in`. Le jeton dure environ une heure et s'utilise dans `Authorization: Bearer <access_token>`.

Racine de l'API :

```text
/graph/v1.0/sites/opsclin/lists/factures-centres
```

| Requête relative à cette racine | Fonction |
| --- | --- |
| `GET /columns` | Schéma des colonnes |
| `GET /items?expand=fields` | Lecture des éléments |
| `GET /items/<id>?expand=fields` | Lecture d'un élément |
| `POST /items` avec `{"fields": {...}}` | Création |
| `PATCH /items/<id>/fields` avec `{...}` | Modification de champs |
| `GET /items/<id>/versions` | Historique : champs, auteur et date de chaque version |

Les listes de résultats utilisent un tableau `value`. La pagination des éléments passe par `@odata.nextLink`, avec 100 éléments au maximum par page. Les paramètres `$top` et `$filter=fields/DocSAP eq '<pièce>'` sont disponibles.

| Champ interne | Type | Contraintes |
| --- | --- | --- |
| `Title` | Texte | Obligatoire |
| `DocSAP` | Texte | Obligatoire, unique |
| `Fournisseur` | Texte | |
| `Centre` | Texte | |
| `Etude` | Texte | |
| `MontantTTC` | Nombre | |
| `Statut` | Choix | Obligatoire |
| `Motifs` | Texte long | |
| `ARC` | Texte | E-mail de l'ARC référent |
| `CommentaireARC` | Texte long | Écriture réservée à l'ARC |
| `DerniereVerification` | Date/heure | |

Choix disponibles pour `Statut` : `À contrôler`, `En attente de SDV`, `À valider par l'ARC`, `Validée par l'ARC`, `Refusée par l'ARC`, `Débloquée`, `À retourner au centre`.

Seul l'ARC référent peut renseigner sa décision et son commentaire. L'application reçoit `403` si elle tente d'écrire les statuts de validation ou refus réservés à l'ARC. Un doublon sur `DocSAP` produit `409`. La suppression d'éléments est interdite : l'historique sert à conserver les décisions.

### Autres possibilités

- **Planner** est disponible, mais sans colonnes métier ni historique complet sans licence Premium.
- **Power Automate** dispose des connecteurs standard. Le déclenchement HTTP Premium n'est pas disponible.
- Un **relais SMTP interne** existe en production, mais n'est pas disponible pour les essais de staging.

Ces outils sont des capacités existantes ; le choix de leur utilisation fait partie de ta proposition.

## Hébergement et exploitation

La DSI peut héberger un conteneur de traitement sur **Azure Container Apps Jobs**. Les secrets vont dans **Key Vault** et les journaux sont centralisés. Un déclenchement vers 03:00, après l'export SAP de 02:00, est compatible avec la plateforme existante.

Les accès de production seront créés après validation. Aucun déploiement cloud ni compte payant n'est demandé dans cet exercice.

## Informations à compléter avec le métier

Cette note décrit les possibilités techniques. Les règles de validation clinique, conditions de paiement, tolérances, priorités, budget et autorisations métier sont à établir à partir du dossier et de l'échange avec les interlocuteurs concernés. Ton agent peut repérer les informations documentées et les questions restantes ; il ne doit pas présenter une hypothèse comme une réponse du client.
