# Cas Vériane — Brief candidat

Tu es consultant·e chez **Nautilus by Alcimed**. Les Laboratoires **Vériane** nous sollicitent pour améliorer le traitement des factures des centres investigateurs de leurs essais cliniques.

Julien Fabre, notre commercial, a rencontré Sophie Marchand, directrice des opérations cliniques France. Tu reprends le dossier pour comprendre le besoin, proposer une réponse et construire une première démonstration.

Le cas, les personnes et les données sont fictifs.

## Pour commencer

```bash
git clone https://github.com/kevin-courbet/veriane-candidat.git
cd veriane-candidat
```

Ouvre ensuite **[dossier.html](dossier.html)** dans ton navigateur depuis le dossier cloné, par exemple en double-cliquant sur le fichier. Il fonctionne hors ligne : aucune installation, aucun serveur et aucun compte ne sont nécessaires pour lire les pièces.

Sur GitHub, le fichier HTML s'affiche comme du code : ouvre la copie locale pour lire le dossier mis en page. Tu peux aussi l'imprimer depuis ton navigateur.

La note **[ENVIRONNEMENT-TECHNIQUE.md](ENVIRONNEMENT-TECHNIQUE.md)** contient les informations transmises par Mathieu (DSI) : applications existantes, interfaces, formats de fichiers, contraintes d'accès et hébergement. Ton agent peut lire directement ce fichier pour répondre à tes questions sur l'environnement client.

## Le point de départ

Les factures des hôpitaux mettent trois à quatre mois à être payées. Six attachés de recherche clinique (ARC) passent chacun environ une journée par semaine à les vérifier.

Le CHU de Valmont menace de suspendre de nouvelles inclusions de patients. Un audit interne a également relevé des difficultés de traçabilité et de contrôle.

Lors de la première réunion, un portail fournisseurs, de la lecture automatique de factures et un circuit de validation ont été évoqués. Tu disposes du compte rendu et des pièces transmises par le client pour poursuivre la découverte.

## Ta mission

1. **Prends connaissance du dossier.** Identifie ce que tu comprends et ce que tu dois encore éclaircir.
2. **Mène la découverte à l'oral.** Pose tes questions directement à l'intervieweur, en précisant à quel interlocuteur tu t'adresses.
3. **Propose une réponse.** Décris le processus actuel et le processus cible, ce que tu gardes ou construis, les raisons de tes choix et les exigences à vérifier.
4. **Construis une première démonstration locale.** Conviens de son périmètre avec l'intervieweur avant de coder. Utilise les exemples du dossier et les précisions obtenues pendant l'échange.
5. **Vérifie et présente ton travail.** Explique les résultats, les cas limites, les hypothèses et ce qui reste à faire.

Cette version de l'exercice ne fournit pas de services distants. Les interfaces sont décrites dans la note technique ; tu peux les représenter par des fichiers ou des doubles locaux pour ta démonstration. Conviens du périmètre avec l'intervieweur. Si tu crées des données d'exemple, distingue-les clairement des pièces reçues et n'en déduis pas de nouvelles règles métier.

## Tes interlocuteurs

L'intervieweur représente les personnes suivantes pendant l'échange :

| Interlocuteur | Fonction |
| --- | --- |
| Sophie Marchand | Directrice des opérations cliniques France |
| Isabelle Roche | Responsable de la comptabilité fournisseurs |
| Mathieu Lefort | Architecte intégration, DSI |

Bertrand Joly représente le contrôle interne. Julien Fabre est le commercial qui a rédigé le compte rendu de la première réunion.

Tu peux demander à revenir vers un interlocuteur à tout moment. Pense à voix haute et formule tes questions comme dans un rendez-vous client.

## Pièces du dossier

Le fichier [dossier.html](dossier.html) rassemble :

1. Le compte rendu de la première réunion.
2. La note de chiffrage de Julien.
3. L'e-mail de Sophie.
4. La relance du CHU de Valmont.
5. Un exemple de facture.
6. L'annexe financière de Valmont.
7. Une capture du CTMS.
8. Le suivi des factures de Camille.
9. Le schéma du processus actuel dessiné au tableau blanc.
10. L'extrait du rapport d'audit.
11. Le référentiel fournisseurs–centres.

## Utilisation de ton assistant IA

**L'utilisation d'un agent fait partie de l'exercice.** Tu peux lui demander de lire les documents, d'expliquer l'environnement technique, de retrouver les interfaces disponibles et de t'aider à préparer tes questions. Par exemple : « Lis ENVIRONNEMENT-TECHNIQUE.md et explique-moi les systèmes déjà disponibles chez le client, leurs capacités et leurs contraintes. »

Les informations documentées sont accessibles directement à ton agent. Pour les questions métier non résolues par les pièces, tu mènes toi-même l'échange oral avec l'intervieweur et transmets les réponses utiles à ton agent. Une information absente reste une question ou une hypothèse explicite.

Pour la conception, le développement et la vérification, tu peux utiliser ton assistant habituel. Tu dois pouvoir expliquer tes choix et le code produit.

## Livrables

- Un fichier **PROPOSAL.md** : compréhension du besoin, processus actuel et cible, choix argumentés, exigences, hypothèses et questions ouvertes.
- Le **code de ta démonstration**, dans le langage de ton choix.
- Des **instructions d'exécution** reproductibles et les **vérifications réalisées**, avec leurs résultats et leurs limites.

Travaille dans ton clone local. Les modalités de remise du travail seront précisées pendant l'entretien ; aucun droit d'écriture sur ce dépôt n'est nécessaire.

Privilégie une petite démonstration que tu comprends et sais vérifier.
