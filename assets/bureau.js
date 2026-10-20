(() => {
  // src/documents.json
  var documents_default = [
    {
      id: "commencez",
      titre: "",
      type: "indication",
      largeur: 320,
      x: -370,
      y: 60,
      rotation: -4,
      html: `
      <p>Commence par ici</p>
      <svg viewBox="0 0 200 60" class="fleche-indication" aria-hidden="true">
        <path d="M8 34 C 60 18, 120 46, 178 30" />
        <path d="M160 16 L 182 30 L 162 46" />
      </svg>`
    },
    {
      id: "accueil",
      titre: "Bienvenue",
      type: "carte",
      largeur: 520,
      x: 40,
      y: 40,
      rotation: 0,
      html: `
<h1>Bienvenue chez Nautilus by Alcimed</h1>
<p>Tu es consultant·e chez <strong>Nautilus by Alcimed</strong>. Laboratoires <strong>Vériane</strong> nous a sollicités. Julien Fabre, notre commercial, a rencontré Sophie Marchand, directrice des opérations cliniques. Les pièces qu'il a rapportées sont sur ce bureau.</p>
<h2>Ta mission</h2>
<ol>
<li><strong>Prends connaissance du dossier.</strong> Déplace les feuilles et ouvre-les en grand avec le bouton ⤢ ou un double-clic sur leur en-tête.</li>
<li><strong>Explore avec ton agent.</strong> Il peut lire les pièces et la note <code>ENVIRONNEMENT-TECHNIQUE.md</code> de Mathieu pour expliquer les systèmes du client et préparer tes questions.</li>
<li><strong>Échange avec le client à l'oral.</strong> L'intervieweur représente Sophie, Isabelle et Mathieu. Précise à qui s'adresse chaque question ; transmets les réponses utiles à ton agent.</li>
<li><strong>Propose</strong>, dans <code>PROPOSAL.md</code>, le processus actuel et cible, ce que tu gardes ou construis, pourquoi et avec quelles exigences.</li>
<li><strong>Construis et vérifie</strong> une démonstration locale, avec ton agent, dans le périmètre convenu avec l'intervieweur. Les contrats techniques sont documentés ; aucun service distant n'est fourni.</li>
</ol>
<p class="discret">Pense à voix haute, explique tes choix et distingue les faits des hypothèses.</p>
<p class="discret">Molette : zoom · glisser le fond : se déplacer · double-clic sur le fond : post-it. Tes notes restent dans ce navigateur si le stockage local est disponible.</p>`
    },
    {
      id: "cr-reunion",
      titre: "Compte rendu de la réunion",
      type: "note",
      largeur: 620,
      x: 620,
      y: 40,
      rotation: 0.6,
      html: `
      <div class="doc-marque">Nautilus by Alcimed · Compte rendu</div>
      <h1>Réunion de découverte : Laboratoires Vériane</h1>
      <p class="meta">12 octobre 2026 · Sophie Marchand (Vériane), Julien Fabre (Nautilus by Alcimed) · Rédigé par Julien Fabre</p>
      <h2>Ce que nous avons compris</h2>
      <ul>
        <li>Les hôpitaux (« centres investigateurs ») facturent les visites des patients des études cliniques. Ces
        factures mettent 3 à 4 mois à être payées.</li>
        <li>Les ARC (6 personnes) vérifient chaque facture à la main : « une journée par semaine chacun ».</li>
        <li>Les ARC valident ensuite les factures dans SAP.</li>
        <li>Le CHU de Valmont menace de suspendre les inclusions de patients (voir son e-mail).</li>
        <li>Un audit interne a épinglé le processus (voir l'extrait).</li>
        <li>Volume : « plusieurs centaines de factures par an », à préciser.</li>
      </ul>
      <h2>Pistes évoquées</h2>
      <ul>
        <li>Un portail fournisseurs où les hôpitaux déposent leurs factures et suivent leur paiement.</li>
        <li>De l'IA / OCR pour lire les factures PDF.</li>
        <li>Un circuit de validation.</li>
      </ul>
      <h2>Points ouverts</h2>
      <ul>
        <li>Budget : Sophie parle de « quelques dizaines de k€ ». À confirmer.</li>
        <li>Calendrier : « avant la fin de l'année » ?</li>
        <li>Comptabilité (Isabelle Roche) et DSI (Mathieu Lefort) n'étaient pas présents.</li>
      </ul>
      <h2>Prochaine étape</h2>
      <p>Un consultant de Nautilus by Alcimed reprend la découverte et fait une proposition.</p>`
    },
    {
      id: "note-chiffrage",
      titre: "Note de Julien",
      type: "postit",
      largeur: 290,
      x: 1290,
      y: 70,
      rotation: 3,
      html: `
      <p><strong>Interne, ne pas envoyer au client</strong></p>
      <p>Chiffrage à la louche :<br>portail fournisseurs + OCR/IA + workflow de validation + reporting<br>
      = <strong>90 à 120 j/h, soit 50 à 65 k€</strong>.</p>
      <p>Sophie avait l'air partante pour le portail.</p>
      <p>⚠ À challenger par le consultant !</p>
      <p class="signature">Julien</p>`
    },
    {
      id: "mail-sophie",
      titre: "E-mail de Sophie",
      type: "email",
      largeur: 560,
      x: 1290,
      y: 420,
      rotation: -0.8,
      html: `

  <div class="email-entete">
    <div><span>De</span>Sophie Marchand &lt;sophie.marchand@veriane.example&gt;</div>
    <div><span>À</span>Julien Fabre &lt;julien.fabre@alcimed.example&gt;</div>

    <div><span>Date</span>13 octobre 2026</div>
    <div class="email-objet">Suite à notre échange : factures des centres</div>
  </div>
      <p>Bonjour Julien,</p>
      <p>Merci pour le temps passé hier. Comme promis, voici quelques pièces : un exemple de facture, l'extrait de
      convention de Valmont, une capture du CTMS, le fichier de suivi de Camille, l'extrait de l'audit, notre
      référentiel fournisseurs et le mail du CHU de Valmont.</p>
      <p>Ce qui compte pour moi est simple : que mes ARC arrêtent de passer leurs vendredis sur les factures, et que
      Valmont arrête de menacer de suspendre les inclusions.</p>
      <p>Je vous mets en relation avec Isabelle Roche (comptabilité fournisseurs) et Mathieu Lefort (DSI), ils
      répondront à vos questions sur leurs parties.</p>
      <p>Bien à vous,<br>Sophie</p>`
    },
    {
      id: "mail-chu",
      titre: "Relance du CHU de Valmont",
      type: "email",
      largeur: 600,
      x: 1890,
      y: 60,
      rotation: 1.2,
      html: `

  <div class="email-entete">
    <div><span>De</span>Hélène Vasseur &lt;h.vasseur@chu-valmont.example&gt;</div>
    <div><span>À</span>Sophie Marchand &lt;sophie.marchand@veriane.example&gt;</div>
    <div><span>Cc</span>Trésorerie du CHU de Valmont</div>
    <div><span>Date</span>8 octobre 2026</div>
    <div class="email-objet">Factures impayées, études VRN-204 et VRN-311 : relance n°3</div>
  </div>
      <p>Madame,</p>
      <p>Malgré nos relances, les factures suivantes restent impayées au-delà du délai de 60 jours prévu par la
      convention :</p>
      <table class="compact"><thead><tr><th>Facture</th><th>Date</th><th>Étude</th><th>Montant TTC</th></tr></thead><tbody><tr><td>FV-2026-0195</td><td>20.06.2026</td><td>VRN-311</td><td>1 656,00 €</td></tr><tr><td>FV-2026-0196</td><td>27.06.2026</td><td>VRN-204</td><td>1 488,00 €</td></tr><tr><td>FV-2026-0197</td><td>08.07.2026</td><td>VRN-204</td><td>1 980,00 €</td></tr><tr><td>FV-2026-0198</td><td>26.07.2026</td><td>VRN-204</td><td>1 764,00 €</td></tr></tbody></table>
      <p>Soit un total de <strong>6 888,00 €</strong>. Nous vous avons par ailleurs renvoyé la facture
      FV-2026-0196 le 16.08.2026, restée sans réponse.</p>
      <p>À défaut de règlement sous 30 jours, la Direction de la recherche clinique et de l'innovation suspendra les
      nouvelles inclusions dans l'étude VRN-204.</p>
      <p>Je vous prie d'agréer, Madame, l'expression de mes salutations distinguées.</p>
      <p>Hélène Vasseur<br>Directrice adjointe de la recherche clinique et de l'innovation<br>CHU de Valmont</p>`
    },
    {
      id: "facture",
      titre: "Exemple de facture",
      type: "facture",
      largeur: 640,
      x: 620,
      y: 760,
      rotation: -1.5,
      html: `
      <div class="facture-entete">
        <div><strong>CHU de Valmont</strong><br>Direction de la recherche clinique et de l'innovation<br>
        1, avenue du Professeur Lenoir, 54600 Valmont<br>SIRET 261 400 172 00018</div>
        <div class="facture-titre">FACTURE<br><span>N° FV-2026-0196</span><br><span>du 27.06.2026</span></div>
      </div>
      <div class="facture-client">Laboratoires Vériane<br>Service comptabilité fournisseurs<br>12, quai de Dion-Bouton, 92800 Puteaux</div>
      <p><strong>Objet :</strong> étude VRN-204, convention unique CU-VRN204-FR01, prestations réalisées</p>
      <table class="facture-lignes"><thead><tr><th>Patient</th><th>Prestation</th><th>Date de visite</th><th>Qté</th><th>PU HT</th><th>Montant HT</th></tr></thead><tbody><tr><td>204-01-001</td><td>SCR : Visite de sélection</td><td>21.06.2026</td><td>1</td><td>180,00 €</td><td>180,00 €</td></tr><tr><td>204-01-001</td><td>V1 : Visite d&#39;inclusion (J1)</td><td>05.07.2026</td><td>1</td><td>650,00 €</td><td>650,00 €</td></tr><tr><td>204-01-001</td><td>V2 : Visite de traitement, cycle 2</td><td>26.07.2026</td><td>1</td><td>410,00 €</td><td>410,00 €</td></tr></tbody></table>
      <div class="facture-totaux">
        <div><span>Total HT</span>1 240,00 €</div>
        <div><span>TVA 20 %</span>248,00 €</div>
        <div class="total"><span>Total TTC</span>1 488,00 €</div>
      </div>
      <p class="discret">Paiement à 60 jours à compter de la date de facture, par virement au Trésor public.
      Indemnité forfaitaire pour frais de recouvrement en cas de retard : 40 €.</p>`
    },
    {
      id: "grille",
      titre: "Annexe financière (Valmont)",
      type: "contrat",
      largeur: 560,
      x: 40,
      y: 960,
      rotation: 0.8,
      html: `
      <div class="doc-marque">Convention unique, annexe 2 (extrait)</div>
      <h1>Annexe financière : étude VRN-204, CHU de Valmont</h1>
      <table class="compact"><thead><tr><th>Code</th><th>Prestation</th><th>Prix unitaire HT</th></tr></thead><tbody><tr><td>SCR</td><td>Visite de sélection</td><td>180,00 €</td></tr><tr><td>V1</td><td>Visite d&#39;inclusion (J1)</td><td>650,00 €</td></tr><tr><td>V2</td><td>Visite de traitement, cycle 2</td><td>410,00 €</td></tr><tr><td>V3</td><td>Visite de traitement, cycle 3</td><td>410,00 €</td></tr><tr><td>V4</td><td>Visite de traitement, cycle 4</td><td>410,00 €</td></tr><tr><td>V5</td><td>Visite de traitement, cycle 5</td><td>410,00 €</td></tr><tr><td>V6</td><td>Visite de traitement, cycle 6</td><td>410,00 €</td></tr><tr><td>V7</td><td>Visite de traitement, cycle 7</td><td>410,00 €</td></tr><tr><td>V8</td><td>Visite de traitement, cycle 8</td><td>410,00 €</td></tr><tr><td>EOT</td><td>Visite de fin de traitement</td><td>480,00 €</td></tr><tr><td>FU1</td><td>Visite de suivi à 3 mois</td><td>220,00 €</td></tr><tr><td>ECHEC_SEL</td><td>Échec de sélection</td><td>150,00 €</td></tr><tr><td>FRAIS_DEMARRAGE</td><td>Frais de mise en place de l&#39;étude</td><td>2 500,00 €</td></tr><tr><td>FRAIS_ANNUELS</td><td>Frais de gestion annuels</td><td>900,00 €</td></tr></tbody></table>
      <p><strong>Art. 3.2.</strong> Les prix ci-dessus sont fermes et non révisables pendant la durée de l'étude.
      Toute modification fait l'objet d'un avenant signé par les parties.</p>
      <p><strong>Art. 3.4.</strong> L'échec de sélection est rémunéré lorsque la visite de sélection a été réalisée
      et que le patient n'a pas été inclus.</p>
      <p><strong>Art. 3.5.</strong> Les frais de mise en place sont dus une seule fois. Les frais de gestion annuels sont
      dus une fois par année civile.</p>
      <p><strong>Art. 4.</strong> Le centre facture les prestations réalisées au fil de l'eau. Le promoteur règle les
      factures dans un délai de 60 jours à compter de leur date d'émission.</p>`
    },
    {
      id: "ctms",
      titre: "Capture du CTMS",
      type: "capture",
      largeur: 640,
      x: 1890,
      y: 760,
      rotation: 0,
      html: `
      <div class="vault-barre">Vault CTMS <span>Vériane · Production</span></div>
      <div class="vault-fil">Studies › VRN-204 › Sites › FR-01 CHU de Valmont › Subjects › <strong>204-01-001</strong></div>
      <table class="vault"><thead><tr><th>Visit</th><th>Visit date</th><th>Status</th></tr></thead><tbody><tr><td>SCR</td><td>21.06.2026</td><td><span class="vault-statut sdv_complete">SDV Complete</span></td></tr><tr><td>V1</td><td>05.07.2026</td><td><span class="vault-statut sdv_complete">SDV Complete</span></td></tr><tr><td>V2</td><td>26.07.2026</td><td><span class="vault-statut sdv_complete">SDV Complete</span></td></tr><tr><td>V3</td><td>16.08.2026</td><td><span class="vault-statut missed">Missed</span></td></tr><tr><td>V4</td><td>06.09.2026</td><td><span class="vault-statut sdv_complete">SDV Complete</span></td></tr><tr><td>V5</td><td>27.09.2026</td><td><span class="vault-statut completed">Completed</span></td></tr><tr><td>V6</td><td>18.10.2026</td><td><span class="vault-statut completed">Completed</span></td></tr><tr><td>V7</td><td><em>08.11.2026 (planned)</em></td><td><span class="vault-statut planned">Planned</span></td></tr><tr><td>V8</td><td><em>29.11.2026 (planned)</em></td><td><span class="vault-statut planned">Planned</span></td></tr><tr><td>EOT</td><td><em>20.12.2026 (planned)</em></td><td><span class="vault-statut planned">Planned</span></td></tr><tr><td>FU1</td><td><em>20.03.2027 (planned)</em></td><td><span class="vault-statut planned">Planned</span></td></tr></tbody></table>
      <p class="discret">Capture transmise par Sophie. « Completed » : visite réalisée. « SDV Complete » : données
      sources vérifiées par l'ARC.</p>`
    },
    {
      id: "suivi-arc",
      titre: "Suivi des factures de Camille",
      type: "tableur",
      largeur: 820,
      x: 1290,
      y: 1260,
      rotation: -0.5,
      html: `
      <div class="tableur-barre">suivi_factures_camille_v7_FINAL.xlsx</div>
      <table class="tableur"><thead><tr><th>Reçue le</th><th>Centre</th><th>N° facture</th><th>Montant TTC</th><th>Vérifié ?</th><th>Commentaire</th></tr></thead><tbody><tr><td>24.06.2026</td><td>Valmont</td><td>FV-2026-0195</td><td>1 656,00 €</td><td>oui</td><td>OK, BAP envoyé à Isabelle</td></tr><tr><td>01.07.2026</td><td>Valmont</td><td>FV-2026-0196</td><td>1 488,00 €</td><td>oui</td><td>OK, BAP envoyé à Isabelle</td></tr><tr><td>12.07.2026</td><td>Valmont</td><td>FV-2026-0197</td><td>1 980,00 €</td><td>oui</td><td>OK, BAP envoyé à Isabelle</td></tr><tr><td>30.07.2026</td><td>Valmont</td><td>FV-2026-0198</td><td>1 764,00 €</td><td>en cours</td><td>SDV pas faite, attendre le prochain monitoring</td></tr><tr><td>16.08.2026</td><td>Valmont</td><td>FV 2026 0196</td><td>1 488,00 €</td><td>en cours</td><td>mêmes lignes qu&#39;une autre ??? à vérifier</td></tr><tr><td>20.08.2026</td><td>Valmont</td><td>FV-2026-0199</td><td>983,66 €</td><td>oui</td><td>OK, BAP envoyé à Isabelle</td></tr><tr><td>27.08.2026</td><td>Valmont</td><td>FV-2026-0200</td><td>1 020,00 €</td><td></td><td></td></tr><tr><td>10.09.2026</td><td>Valmont</td><td>FV-2026-0201</td><td>2 472,00 €</td><td></td><td></td></tr><tr><td>17.09.2026</td><td>Valmont</td><td>FV-2026-0202</td><td>849,60 €</td><td>en cours</td><td>prix bizarres, recalculer</td></tr></tbody></table>`
    },
    {
      id: "tableau-blanc",
      titre: "Photo du tableau blanc",
      type: "tableau",
      largeur: 760,
      x: 600,
      y: 1360,
      rotation: 1,
      html: `
      <svg viewBox="0 0 760 420" class="tableau-svg" role="img" aria-label="Schéma du processus actuel dessiné au tableau">
        <defs><marker id="fleche" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#1f2937"/></marker></defs>
        <g class="feutre-noir">
          <rect x="20" y="40" width="130" height="60" rx="8"/><text x="85" y="68">CHU</text><text x="85" y="88" class="petit">PDF par mail</text>
          <rect x="210" y="40" width="160" height="60" rx="8"/><text x="290" y="68">Compta (Isabelle)</text><text x="290" y="88" class="petit">SAP : facture bloquée</text>
          <rect x="430" y="40" width="300" height="110" rx="8"/><text x="580" y="66">ARC</text>
          <text x="580" y="92" class="petit">CTMS : visite faite ? SDV ?</text><text x="580" y="114" class="petit">grille de la convention : prix ?</text><text x="580" y="136" class="petit">déjà payé ? (Excel perso)</text>
          <rect x="430" y="230" width="300" height="60" rx="8"/><text x="580" y="266">mail « bon pour paiement »</text>
          <rect x="210" y="230" width="160" height="60" rx="8"/><text x="290" y="258">Compta débloque</text><text x="290" y="278" class="petit">à la main dans SAP</text>
          <rect x="20" y="230" width="130" height="60" rx="8"/><text x="85" y="258">Paiement</text><text x="85" y="278" class="petit">mardi / vendredi</text>
          <path d="M150 70 L205 70" marker-end="url(#fleche)"/><path d="M370 70 L425 70" marker-end="url(#fleche)"/>
          <path d="M580 150 L580 225" marker-end="url(#fleche)"/><path d="M430 260 L375 260" marker-end="url(#fleche)"/><path d="M210 260 L155 260" marker-end="url(#fleche)"/>
          <text x="395" y="58" class="petit">mail</text>
        </g>
        <g class="feutre-rouge">
          <text x="300" y="340">3 à 4 mois !!</text>
          <text x="610" y="190">1 j / semaine / ARC</text>
          <text x="120" y="160">portail ??</text>
          <text x="120" y="185">IA pour lire les PDF ?</text>
          <text x="640" y="330">doublons !</text>
          <path d="M240 330 C 200 360, 120 350, 90 300" fill="none"/>
        </g>
      </svg>
      <p class="discret">Photo prise par Julien à la fin de la réunion.</p>`
    },
    {
      id: "audit",
      titre: "Extrait du rapport d'audit",
      type: "rapport",
      largeur: 580,
      x: 40,
      y: 1560,
      rotation: -0.7,
      html: `
      <div class="doc-marque">Audit interne · Confidentiel</div>
      <h1>Processus de paiement des essais cliniques, juin 2026</h1>
      <h2>Constat 4.2 : priorité élevée</h2>
      <p>La validation des factures des centres investigateurs se fait par e-mail, sans traçabilité formelle de
      l'auteur, de la date et des contrôles réalisés.</p>
      <p>Sur un échantillon de 60 factures, 7 (12 %) ont été payées avant la vérification des données sources (SDV)
      des visites facturées. Aucun contrôle systématique des doublons n'est en place.</p>
      <h2>Recommandation R4.2</h2>
      <p>Mettre en place un circuit de validation tracé, garantissant qu'aucune visite n'est payée avant sa
      vérification et que chaque facture n'est payée qu'une fois.</p>
      <p><strong>Responsables :</strong> S. Marchand, I. Roche · <strong>Échéance :</strong> 31 mars 2027</p>`
    },
    {
      id: "organigramme",
      titre: "Qui est qui",
      type: "carte",
      largeur: 440,
      x: -480,
      y: 290,
      rotation: -0.5,
      html: `
      <h1>Qui est qui</h1>
      <h2>Laboratoires Vériane</h2>
      <ul class="contacts">
        <li><strong>Sophie Marchand</strong>, directrice des opérations cliniques France. Porte le projet, décide du budget.</li>
        <li><strong>Isabelle Roche</strong>, responsable de la comptabilité fournisseurs.</li>
        <li><strong>Mathieu Lefort</strong>, architecte intégration, DSI.</li>
        <li><strong>Bertrand Joly</strong>, contrôle interne.</li>
        <li><strong>ARC</strong> (équipe de Sophie) : Camille Roux, Nicolas Petit, Léa Benali, Hugo Martin, Inès Garnier, Thomas Lambert.</li>
      </ul>
      <h2>Nautilus by Alcimed</h2>
      <ul class="contacts"><li><strong>Julien Fabre</strong>, commercial.</li><li><strong>Toi</strong>, consultant·e.</li></ul>
      <p class="discret">L'intervieweur représente Sophie, Isabelle et Mathieu à l'oral. La note de Mathieu est disponible avec le bouton « Environnement technique ».</p>`
    },
    {
      id: "correspondance",
      titre: "Référentiel fournisseurs ↔ centres",
      type: "tableur",
      largeur: 760,
      x: 2160,
      y: 1260,
      rotation: 0.4,
      html: `
      <div class="tableur-barre">SharePoint › Opérations cliniques › Référentiels › correspondance_fournisseurs_centres.xlsx · modifié le 12 mars</div>
      <table class="tableur"><thead><tr><th>Fournisseur SAP</th><th>Nom</th><th>Centre CTMS</th><th>Études</th><th>ARC référent</th></tr></thead><tbody><tr><td>F100231</td><td>CHU de Valmont</td><td>FR-01</td><td>VRN-204, VRN-311</td><td>Camille Roux</td></tr><tr><td>F100245</td><td>CHU de Bréville</td><td>FR-02</td><td>VRN-204</td><td>Nicolas Petit</td></tr><tr><td>F100377</td><td>Hôpital Saint-Aubin</td><td>FR-03</td><td>VRN-204</td><td>Léa Benali</td></tr><tr><td>F100412</td><td>Centre hospitalier de Marsac</td><td>FR-04</td><td>VRN-311</td><td>Hugo Martin</td></tr><tr><td>F100503</td><td>Institut de cancérologie Atlantique</td><td>FR-05</td><td>VRN-204</td><td>Inès Garnier</td></tr><tr><td>F100519</td><td>CHU de Montclair</td><td>FR-06</td><td>VRN-311</td><td>Thomas Lambert</td></tr><tr><td>F100702</td><td>Hôpital privé du Parc</td><td>FR-08</td><td>VRN-311</td><td>Hugo Martin</td></tr></tbody></table>`
    },
    {
      id: "technique",
      titre: "Note de Mathieu · Environnement technique",
      type: "email",
      largeur: 620,
      x: 2560,
      y: 620,
      rotation: -0.6,
      html: `<div class="email-entete"><div><span>De</span>Mathieu Lefort · DSI Vériane</div><div><span>À</span>Équipe de mission</div><div class="email-objet">Environnement technique et interfaces existantes</div></div>
<p>Bonjour,</p><p>Vous trouverez dans ma note les informations techniques disponibles pour votre mission :</p>
<ul><li>SAP S/4HANA, capture des factures et passerelle de fichiers ;</li><li>exports nocturnes et formats CSV ;</li><li>flux existant de déblocage ou rejet ;</li><li>API du CTMS et ses contraintes ;</li><li>outils Microsoft 365 et interfaces de listes ;</li><li>hébergement et exploitation.</li></ul>
<p><strong>Ouvre cette feuille en grand (⤢) pour lire la note complète.</strong></p>
<p>Ton agent peut aussi lire directement <code>ENVIRONNEMENT-TECHNIQUE.md</code> dans le dépôt.</p>
<p class="discret">Cette version fournit les contrats des interfaces, sans service distant ni identifiants d'accès.</p><p>Mathieu</p>`,
      lectureHtml: `<h1>Environnement technique de Vériane</h1>
<p><strong>Note de Mathieu Lefort — Architecte intégration, DSI</strong></p>
<p>Cette note décrit l'environnement du client fictif et les contrats des interfaces de l'exercice. Elle peut être lue directement par ton assistant ou agent.</p>
<p><strong>Disponibilité dans ce dépôt :</strong> documentation et pièces du dossier uniquement. Aucun serveur, simulateur exécutable, accès réseau ni identifiant n'est fourni. Les chemins HTTP ci-dessous décrivent des interfaces ; ils ne désignent pas des services en ligne accessibles depuis ce dépôt. Pour la démonstration, des fichiers et des doubles locaux peuvent représenter les systèmes concernés, selon le périmètre convenu avec l'intervieweur.</p>
<h2>Applications et accès existants</h2>
<table>
<thead>
<tr><th>Composant</th><th>Situation chez le client</th></tr>
</thead>
<tbody>
<tr><td>SAP S/4HANA</td><td>Hébergé sur site. Les interfaces passent par SAP Integration Suite, administrée par la DSI.</td></tr>
<tr><td>Capture des factures</td><td>Un module intégré à SAP lit les PDF reçus. La comptabilité vérifie et corrige les données avant enregistrement.</td></tr>
<tr><td>Passerelle de fichiers</td><td>SFTP en production ; représentation HTTPS dans le contrat de staging décrit ci-dessous.</td></tr>
<tr><td>CTMS</td><td>Veeva Vault CTMS en SaaS. Une API de consultation permet de lire études, centres et visites.</td></tr>
<tr><td>Référentiels</td><td>Correspondance fournisseurs–centres et grilles contractuelles, maintenues par les Opérations cliniques.</td></tr>
<tr><td>Microsoft 365</td><td>SharePoint, Microsoft Lists, Planner et les connecteurs standard Power Automate sont disponibles.</td></tr>
<tr><td>Traitements planifiés</td><td>La DSI dispose d'Azure Container Apps Jobs, de Key Vault et de journaux centralisés.</td></tr>
</tbody>
</table>
<p>Les ARC n'ont pas d'accès SAP. La DSI ne prévoit pas de leur créer de comptes. Aucun accès direct à la base SAP n'est disponible.</p>
<p>Une nouvelle interface SAP nécessite un passage en comité des changements et six à huit semaines au minimum ; la file d'attente est pleine jusqu'en février suivant la date du dossier. Les flux de fichiers déjà existants peuvent être réutilisés après déclaration et validation des responsables concernés.</p>
<p>Les identifiants patients sont pseudonymisés. Les interfaces n'ont pas besoin de noms de patients.</p>
<h2>Passerelle et exports SAP</h2>
<p>Un export des factures bloquées est déposé chaque nuit vers <strong>02:00</strong>. Les exports des nuits précédentes restent disponibles. Les trois fichiers d'une même nuit portent la même date <code>AAAAMMJJ</code>.</p>
<table>
<thead>
<tr><th>Dossier</th><th>Contenu</th></tr>
</thead>
<tbody>
<tr><td><code>sortant/</code></td><td>Factures bloquées, lignes de factures et historique des lignes payées</td></tr>
<tr><td><code>referentiels/</code></td><td>Correspondance fournisseurs–centres et prix des conventions</td></tr>
<tr><td><code>entrant/deblocage/</code></td><td>Fichiers destinés au flux existant de déblocage ou rejet dans SAP</td></tr>
</tbody>
</table>
<p>Le format CSV est <strong>UTF-8 avec BOM</strong>, séparateur <strong>point-virgule</strong>. Les montants utilisent une virgule décimale et peuvent contenir des espaces fines insécables comme séparateurs de milliers, par exemple <code>1 234,50</code>. Les dates métier sont au format <strong>JJ.MM.AAAA</strong>. Les champs peuvent être entourés de guillemets selon les règles CSV.</p>
<h3>En-têtes des fichiers</h3>
<p><code>sortant/FACT_ATTENTE_AAAAMMJJ.csv</code></p>
<pre><code class="language-csv">DOC_SAP;FOURNISSEUR;NOM_FOURNISSEUR;REF_FACTURE;DATE_FACTURE;DATE_RECEPTION;ETUDE;MONTANT_HT;TVA;MONTANT_TTC;DEVISE;STATUT
</code></pre>
<p>Une ligne par facture bloquée. <code>DOC_SAP</code> identifie la pièce SAP, <code>REF_FACTURE</code> est la référence écrite par le fournisseur. La devise est <code>EUR</code> ; le statut exporté est <code>BLOQUEE_VALID_CLIN</code>.</p>
<p><code>sortant/FACT_ATTENTE_LIGNES_AAAAMMJJ.csv</code></p>
<pre><code class="language-csv">DOC_SAP;NUM_LIGNE;PATIENT;CODE_PRESTATION;LIBELLE;QUANTITE;PRIX_UNITAIRE_HT;MONTANT_HT
</code></pre>
<p>Les lignes sont rattachées à leur facture par <code>DOC_SAP</code>.</p>
<p><code>sortant/FACT_PAYEES_LIGNES_12M_AAAAMMJJ.csv</code></p>
<pre><code class="language-csv">DOC_SAP;FOURNISSEUR;REF_FACTURE;ETUDE;PATIENT;CODE_PRESTATION;MONTANT_HT;DATE_PAIEMENT
</code></pre>
<p>Cet historique porte sur les douze derniers mois.</p>
<p><code>referentiels/CORRESPONDANCE_FOURNISSEURS_CENTRES.csv</code></p>
<pre><code class="language-csv">FOURNISSEUR_SAP;NOM_FOURNISSEUR;CENTRE_CTMS;ETUDES;ARC_REFERENT;EMAIL_ARC
</code></pre>
<p>Le champ <code>ETUDES</code> contient une ou plusieurs études, séparées par des virgules. Ce référentiel est maintenu manuellement ; sa complétude n'est pas garantie.</p>
<p><code>referentiels/GRILLES_BUDGETAIRES.csv</code></p>
<pre><code class="language-csv">ETUDE;CENTRE_CTMS;CODE_PRESTATION;LIBELLE;PRIX_UNITAIRE_HT
</code></pre>
<p>La grille distingue l'étude, le centre et le code de prestation.</p>
<h3>Contrat HTTPS de la passerelle</h3>
<p>Authentification : <code>Authorization: Bearer &lt;jeton&gt;</code>.</p>
<table>
<thead>
<tr><th>Requête</th><th>Réponse ou effet</th></tr>
</thead>
<tbody>
<tr><td><code>GET /passerelle/</code></td><td>Liste des dossiers</td></tr>
<tr><td><code>GET /passerelle/&lt;dossier&gt;/</code></td><td>JSON contenant <code>dossier</code> et <code>contenu</code>, tableau de noms de fichiers ou sous-dossiers</td></tr>
<tr><td><code>GET /passerelle/&lt;chemin&gt;</code></td><td>Contenu du fichier</td></tr>
<tr><td><code>PUT /passerelle/entrant/deblocage/&lt;nom&gt;.csv</code></td><td>Dépôt du contenu CSV vers SAP</td></tr>
</tbody>
</table>
<p>Un jeton absent ou invalide produit une réponse <code>401</code>. Un fichier introuvable produit <code>404</code>. Le dépôt ne peut pas écraser un nom existant (<code>409</code>).</p>
<h2>Flux existant de déblocage ou rejet</h2>
<p>SAP Integration Suite relève les fichiers déposés dans <code>entrant/deblocage/</code> toutes les heures en production. Dans le contrat du simulateur de staging, le résultat est disponible dès le dépôt.</p>
<p>En-tête exact :</p>
<pre><code class="language-csv">DOC_SAP;ACTION;VALIDEUR;DATE_VALIDATION;COMMENTAIRE
</code></pre>
<table>
<thead>
<tr><th>Champ</th><th>Contrat</th></tr>
</thead>
<tbody>
<tr><td><code>DOC_SAP</code></td><td>Pièce SAP concernée</td></tr>
<tr><td><code>ACTION</code></td><td><code>DEBLOQUER</code> ou <code>REJETER</code></td></tr>
<tr><td><code>VALIDEUR</code></td><td>Adresse e-mail d'une personne habilitée ou compte technique déclaré</td></tr>
<tr><td><code>DATE_VALIDATION</code></td><td>Horodatage ISO 8601</td></tr>
<tr><td><code>COMMENTAIRE</code></td><td>Motif lisible ; obligatoire pour un rejet</td></tr>
</tbody>
</table>
<p>La DSI dispose du compte technique fictif <code>SVC_CTRL_FACT_CLIN</code> pour un traitement automatique. Son utilisation doit être validée par Isabelle et le contrôle interne ; son existence ne vaut pas accord sur les règles métier.</p>
<p>Le nom de chaque fichier est unique. Le résultat de son traitement se lit à :</p>
<pre><code class="language-text">GET /passerelle/entrant/deblocage/&lt;nom&gt;.csv.resultat
</code></pre>
<p>La réponse contient notamment <code>fichier</code>, <code>erreur</code>, <code>lignes_acceptees</code>, <code>lignes_en_erreur</code> et <code>erreurs</code> (numéro de ligne, pièce SAP et motif). Un fichier peut contenir des lignes acceptées et des lignes en erreur.</p>
<p>Les factures déjà traitées ne peuvent pas être débloquées de nouveau par ce flux. Les motifs de rejet sont transmis à la comptabilité, qui reste l'interlocutrice des centres.</p>
<h2>CTMS : interface de consultation</h2>
<p>Le compte de service est en lecture seule.</p>
<table>
<thead>
<tr><th>Requête</th><th>Contrat</th></tr>
</thead>
<tbody>
<tr><td><code>POST /ctms/api/v1/auth</code></td><td>Corps JSON ou formulaire contenant <code>username</code> et <code>password</code>. Retourne <code>sessionId</code> et <code>expires_in</code>. Session valable 20 minutes.</td></tr>
<tr><td><code>GET /ctms/api/v1/studies</code></td><td>Études : <code>study</code>, <code>title</code>, <code>therapeutic_area</code></td></tr>
<tr><td><code>GET /ctms/api/v1/sites?study=&lt;étude&gt;</code></td><td>Centres : <code>study</code>, <code>site</code>, <code>name</code>, <code>city</code>, <code>cra_email</code></td></tr>
<tr><td><code>GET /ctms/api/v1/visits?study=&lt;étude&gt;&amp;site=&lt;centre&gt;</code></td><td>Visites du centre pour cette étude</td></tr>
</tbody>
</table>
<p>Après authentification, transmettre <strong><code>Authorization: &lt;sessionId&gt;</code></strong>, sans préfixe <code>Bearer</code>.</p>
<p>Les visites acceptent les paramètres facultatifs <code>subject</code>, <code>page</code> et <code>page_size</code>. La première page est <code>1</code>, la taille par défaut <code>25</code> et le maximum <code>50</code>.</p>
<p>Une réponse de visites contient :</p>
<pre><code class="language-json">{
  &quot;responseStatus&quot;: &quot;SUCCESS&quot;,
  &quot;data&quot;: [
    {
      &quot;study&quot;: &quot;VRN-204&quot;,
      &quot;site&quot;: &quot;FR-01&quot;,
      &quot;subject&quot;: &quot;204-01-001&quot;,
      &quot;visit&quot;: &quot;V1&quot;,
      &quot;visit_date&quot;: &quot;2026-06-15&quot;,
      &quot;status&quot;: &quot;sdv_complete&quot;
    }
  ],
  &quot;page&quot;: 1,
  &quot;page_size&quot;: 25,
  &quot;total&quot;: 1,
  &quot;has_more&quot;: false
}
</code></pre>
<p>Cet exemple illustre uniquement la structure ; il n'est pas un jeu de données de l'exercice.</p>
<p>Les statuts possibles sont <code>planned</code>, <code>completed</code>, <code>sdv_complete</code>, <code>missed</code> et <code>screen_failure</code>. <code>completed</code> indique une visite réalisée ; <code>sdv_complete</code> indique que ses données sources ont été vérifiées.</p>
<p>La limite est <strong>20 appels par tranche de 10 secondes et par session</strong>. Un dépassement retourne <code>429</code> avec un en-tête <code>Retry-After</code>. Une session absente, invalide ou expirée retourne <code>401</code>. Un centre peut temporairement retourner <code>503</code> pendant une migration. Une erreur n'est pas une réponse métier vide.</p>
<h2>Outils collaboratifs disponibles</h2>
<h3>SharePoint et Microsoft Lists</h3>
<p>Les licences standard permettent des listes structurées, une vue tableau par statut et l'historique des modifications. L'accès applicatif nécessite un enregistrement Entra ID avec des droits limités au site concerné.</p>
<p>La DSI a préparé le schéma d'une liste <strong>« Factures des centres »</strong>, site logique <code>opsclin</code>, liste <code>factures-centres</code>.</p>
<p>Le contrat de staging utilise :</p>
<pre><code class="language-text">POST /login/&lt;tenant&gt;/oauth2/v2.0/token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials
client_id=&lt;identifiant&gt;
client_secret=&lt;secret&gt;
scope=https://graph.microsoft.com/.default
</code></pre>
<p>La réponse fournit <code>access_token</code>, <code>token_type</code> et <code>expires_in</code>. Le jeton dure environ une heure et s'utilise dans <code>Authorization: Bearer &lt;access_token&gt;</code>.</p>
<p>Racine de l'API :</p>
<pre><code class="language-text">/graph/v1.0/sites/opsclin/lists/factures-centres
</code></pre>
<table>
<thead>
<tr><th>Requête relative à cette racine</th><th>Fonction</th></tr>
</thead>
<tbody>
<tr><td><code>GET /columns</code></td><td>Schéma des colonnes</td></tr>
<tr><td><code>GET /items?expand=fields</code></td><td>Lecture des éléments</td></tr>
<tr><td><code>GET /items/&lt;id&gt;?expand=fields</code></td><td>Lecture d'un élément</td></tr>
<tr><td><code>POST /items</code> avec <code>{&quot;fields&quot;: {...}}</code></td><td>Création</td></tr>
<tr><td><code>PATCH /items/&lt;id&gt;/fields</code> avec <code>{...}</code></td><td>Modification de champs</td></tr>
<tr><td><code>GET /items/&lt;id&gt;/versions</code></td><td>Historique : champs, auteur et date de chaque version</td></tr>
</tbody>
</table>
<p>Les listes de résultats utilisent un tableau <code>value</code>. La pagination des éléments passe par <code>@odata.nextLink</code>, avec 100 éléments au maximum par page. Les paramètres <code>$top</code> et <code>$filter=fields/DocSAP eq '&lt;pièce&gt;'</code> sont disponibles.</p>
<table>
<thead>
<tr><th>Champ interne</th><th>Type</th><th>Contraintes</th></tr>
</thead>
<tbody>
<tr><td><code>Title</code></td><td>Texte</td><td>Obligatoire</td></tr>
<tr><td><code>DocSAP</code></td><td>Texte</td><td>Obligatoire, unique</td></tr>
<tr><td><code>Fournisseur</code></td><td>Texte</td><td></td></tr>
<tr><td><code>Centre</code></td><td>Texte</td><td></td></tr>
<tr><td><code>Etude</code></td><td>Texte</td><td></td></tr>
<tr><td><code>MontantTTC</code></td><td>Nombre</td><td></td></tr>
<tr><td><code>Statut</code></td><td>Choix</td><td>Obligatoire</td></tr>
<tr><td><code>Motifs</code></td><td>Texte long</td><td></td></tr>
<tr><td><code>ARC</code></td><td>Texte</td><td>E-mail de l'ARC référent</td></tr>
<tr><td><code>CommentaireARC</code></td><td>Texte long</td><td>Écriture réservée à l'ARC</td></tr>
<tr><td><code>DerniereVerification</code></td><td>Date/heure</td><td></td></tr>
</tbody>
</table>
<p>Choix disponibles pour <code>Statut</code> : <code>À contrôler</code>, <code>En attente de SDV</code>, <code>À valider par l'ARC</code>, <code>Validée par l'ARC</code>, <code>Refusée par l'ARC</code>, <code>Débloquée</code>, <code>À retourner au centre</code>.</p>
<p>Seul l'ARC référent peut renseigner sa décision et son commentaire. L'application reçoit <code>403</code> si elle tente d'écrire les statuts de validation ou refus réservés à l'ARC. Un doublon sur <code>DocSAP</code> produit <code>409</code>. La suppression d'éléments est interdite : l'historique sert à conserver les décisions.</p>
<h3>Autres possibilités</h3>
<ul>
<li><strong>Planner</strong> est disponible, mais sans colonnes métier ni historique complet sans licence Premium.</li>
<li><strong>Power Automate</strong> dispose des connecteurs standard. Le déclenchement HTTP Premium n'est pas disponible.</li>
<li>Un <strong>relais SMTP interne</strong> existe en production, mais n'est pas disponible pour les essais de staging.</li>
</ul>
<p>Ces outils sont des capacités existantes ; le choix de leur utilisation fait partie de ta proposition.</p>
<h2>Hébergement et exploitation</h2>
<p>La DSI peut héberger un conteneur de traitement sur <strong>Azure Container Apps Jobs</strong>. Les secrets vont dans <strong>Key Vault</strong> et les journaux sont centralisés. Un déclenchement vers 03:00, après l'export SAP de 02:00, est compatible avec la plateforme existante.</p>
<p>Les accès de production seront créés après validation. Aucun déploiement cloud ni compte payant n'est demandé dans cet exercice.</p>
<h2>Informations à compléter avec le métier</h2>
<p>Cette note décrit les possibilités techniques. Les règles de validation clinique, conditions de paiement, tolérances, priorités, budget et autorisations métier sont à établir à partir du dossier et de l'échange avec les interlocuteurs concernés. Ton agent peut repérer les informations documentées et les questions restantes ; il ne doit pas présenter une hypothèse comme une réponse du client.</p>
`
    }
  ];

  // src/bureau.ts
  function element(selector) {
    const found = document.querySelector(selector);
    if (!found)
      throw new Error(`Élément du bureau introuvable : ${selector}`);
    return found;
  }
  var vue = element("#vue");
  var monde = element("#monde");
  var niveauZoom = element("#zoom-niveau");
  var documents = documents_default;
  var ZOOM_MIN = 0.15;
  var ZOOM_MAX = 2.5;
  var camera = { x: 40, y: 30, zoom: 0.55 };
  var positions = {};
  var notes = [];
  var zSuivant = 10;
  var cle = (nom) => `veriane:candidate-offline:v1:${nom}`;
  var stockage = {
    lire(nom, defaut) {
      try {
        const value = localStorage.getItem(cle(nom));
        return value === null ? defaut : JSON.parse(value);
      } catch {
        return defaut;
      }
    },
    ecrire(nom, value) {
      try {
        localStorage.setItem(cle(nom), JSON.stringify(value));
      } catch {}
    }
  };
  function estPosition(value) {
    return typeof value === "object" && value !== null && "x" in value && Number.isFinite(value.x) && "y" in value && Number.isFinite(value.y);
  }
  function appliquerCamera() {
    monde.style.transform = `translate(${camera.x}px, ${camera.y}px) scale(${camera.zoom})`;
    const pas = 28 * camera.zoom;
    vue.style.backgroundSize = `${pas}px ${pas}px`;
    vue.style.backgroundPosition = `${camera.x}px ${camera.y}px`;
    niveauZoom.textContent = `${Math.round(camera.zoom * 100)} %`;
    stockage.ecrire("camera", camera);
  }
  function zoomerAutour(clientX, clientY, facteur) {
    const r = vue.getBoundingClientRect();
    const px = clientX - r.left, py = clientY - r.top;
    const zoom = Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, camera.zoom * facteur));
    const k = zoom / camera.zoom;
    camera = { x: px - (px - camera.x) * k, y: py - (py - camera.y) * k, zoom };
    appliquerCamera();
  }
  function zoomerAuCentre(facteur) {
    const r = vue.getBoundingClientRect();
    zoomerAutour(r.left + r.width / 2, r.top + r.height / 2, facteur);
  }
  function versMonde(clientX, clientY) {
    const r = vue.getBoundingClientRect();
    return { x: (clientX - r.left - camera.x) / camera.zoom, y: (clientY - r.top - camera.y) / camera.zoom };
  }
  function cadrer(feuilles) {
    if (feuilles.length === 0)
      return;
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const f of feuilles) {
      minX = Math.min(minX, f.offsetLeft);
      minY = Math.min(minY, f.offsetTop);
      maxX = Math.max(maxX, f.offsetLeft + f.offsetWidth);
      maxY = Math.max(maxY, f.offsetTop + f.offsetHeight);
    }
    const r = vue.getBoundingClientRect(), marge = 40;
    const largeur = Math.max(1, maxX - minX), hauteur = Math.max(1, maxY - minY);
    const zoom = Math.min(1, Math.max(ZOOM_MIN, Math.min((r.width - 2 * marge) / largeur, (r.height - 2 * marge) / hauteur)));
    camera = { zoom, x: marge - minX * zoom + (r.width - 2 * marge - largeur * zoom) / 2, y: marge - minY * zoom };
    appliquerCamera();
  }
  function toutVoir() {
    cadrer(Array.from(monde.children));
  }
  vue.addEventListener("wheel", (e) => {
    e.preventDefault();
    zoomerAutour(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.0015));
  }, { passive: false });
  vue.addEventListener("pointerdown", (e) => {
    if (e.target !== vue && e.target !== monde)
      return;
    const depart = { x: e.clientX, y: e.clientY, cx: camera.x, cy: camera.y };
    vue.setPointerCapture(e.pointerId);
    vue.classList.add("deplacement");
    const bouger = (m) => {
      camera.x = depart.cx + m.clientX - depart.x;
      camera.y = depart.cy + m.clientY - depart.y;
      appliquerCamera();
    };
    const finir = () => {
      vue.classList.remove("deplacement");
      vue.removeEventListener("pointermove", bouger);
      vue.removeEventListener("pointerup", finir);
      vue.removeEventListener("pointercancel", finir);
    };
    vue.addEventListener("pointermove", bouger);
    vue.addEventListener("pointerup", finir);
    vue.addEventListener("pointercancel", finir);
  });
  vue.addEventListener("dblclick", (e) => {
    if (e.target !== vue && e.target !== monde)
      return;
    const p = versMonde(e.clientX, e.clientY);
    const note = { id: `note-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, x: Math.round(p.x - 110), y: Math.round(p.y - 20), texte: "" };
    notes.push(note);
    sauverNotes();
    poserNote(note).querySelector(".contenu").focus();
  });
  element("#zoom-plus").addEventListener("click", () => zoomerAuCentre(1.2));
  element("#zoom-moins").addEventListener("click", () => zoomerAuCentre(1 / 1.2));
  element("#tout-voir").addEventListener("click", toutVoir);
  element("#ranger").addEventListener("click", () => {
    positions = {};
    stockage.ecrire("positions", positions);
    for (const doc of documents) {
      const el = element(`#feuille-${doc.id}`);
      el.style.left = `${doc.x}px`;
      el.style.top = `${doc.y}px`;
    }
    toutVoir();
  });
  function devantTout(el) {
    el.style.zIndex = String(++zSuivant);
  }
  function rendreDeplacable(el, poignee, surDeplacement) {
    poignee.addEventListener("pointerdown", (e) => {
      if (e.target.closest("button, a"))
        return;
      e.preventDefault();
      devantTout(el);
      el.classList.add("saisie-active");
      const depart = { x: e.clientX, y: e.clientY, gauche: el.offsetLeft, haut: el.offsetTop };
      poignee.setPointerCapture(e.pointerId);
      const bouger = (m) => {
        el.style.left = `${Math.round(depart.gauche + (m.clientX - depart.x) / camera.zoom)}px`;
        el.style.top = `${Math.round(depart.haut + (m.clientY - depart.y) / camera.zoom)}px`;
      };
      const finir = () => {
        el.classList.remove("saisie-active");
        poignee.removeEventListener("pointermove", bouger);
        poignee.removeEventListener("pointerup", finir);
        poignee.removeEventListener("pointercancel", finir);
        surDeplacement(el.offsetLeft, el.offsetTop);
      };
      poignee.addEventListener("pointermove", bouger);
      poignee.addEventListener("pointerup", finir);
      poignee.addEventListener("pointercancel", finir);
    });
    el.addEventListener("pointerdown", () => devantTout(el));
  }
  function creerFeuille({ id, titre, type, largeur, x, y, rotation }) {
    const el = document.createElement("article");
    el.className = `feuille type-${type}`;
    el.id = `feuille-${id}`;
    Object.assign(el.style, { left: `${x}px`, top: `${y}px`, width: `${largeur}px`, transform: `rotate(${rotation}deg)`, zIndex: String(++zSuivant) });
    const poignee = document.createElement("div");
    poignee.className = "poignee";
    poignee.title = "Glisser pour déplacer · double-clic pour lire en grand";
    const etiquette = document.createElement("span");
    etiquette.textContent = titre;
    const actions = document.createElement("span");
    actions.className = "actions";
    poignee.append(etiquette, actions);
    const contenu = document.createElement("div");
    contenu.className = "contenu";
    el.append(poignee, contenu);
    return { el, poignee, actions, contenu };
  }
  function bouton(texte, titre, action) {
    const b = document.createElement("button");
    b.type = "button";
    b.textContent = texte;
    b.title = titre;
    b.setAttribute("aria-label", titre);
    b.addEventListener("click", action);
    return b;
  }
  function poserDocument(doc) {
    const place = positions[doc.id] ?? { x: doc.x, y: doc.y };
    const { el, poignee, actions, contenu } = creerFeuille({ ...doc, ...place });
    contenu.innerHTML = doc.html;
    if (doc.type !== "indication") {
      actions.append(bouton("⤢", "Lire en grand", () => ouvrirLecture(doc)));
      poignee.addEventListener("dblclick", () => ouvrirLecture(doc));
    }
    rendreDeplacable(el, poignee, (x, y) => {
      positions[doc.id] = { x, y };
      stockage.ecrire("positions", positions);
    });
    monde.append(el);
  }
  function sauverNotes() {
    stockage.ecrire("notes", notes);
  }
  function poserNote(note) {
    const { el, poignee, actions, contenu } = creerFeuille({ ...note, titre: "Post-it", type: "postit", largeur: 240, rotation: 0 });
    contenu.contentEditable = "true";
    contenu.spellcheck = false;
    contenu.textContent = note.texte;
    contenu.addEventListener("input", () => {
      note.texte = contenu.innerText;
      sauverNotes();
    });
    contenu.addEventListener("paste", (e) => {
      e.preventDefault();
      const text = e.clipboardData?.getData("text/plain") ?? "";
      const selection = window.getSelection();
      if (!selection?.rangeCount)
        return;
      const range = selection.getRangeAt(0);
      if (!contenu.contains(range.commonAncestorContainer))
        return;
      range.deleteContents();
      const node = document.createTextNode(text);
      range.insertNode(node);
      range.setStartAfter(node);
      range.collapse(true);
      selection.removeAllRanges();
      selection.addRange(range);
      note.texte = contenu.innerText;
      sauverNotes();
    });
    actions.append(bouton("✕", "Supprimer le post-it", () => {
      notes = notes.filter((n) => n.id !== note.id);
      sauverNotes();
      el.remove();
    }));
    rendreDeplacable(el, poignee, (x, y) => {
      note.x = x;
      note.y = y;
      sauverNotes();
    });
    monde.append(el);
    return el;
  }
  var lecture = element("#lecture");
  var focusAvantLecture = null;
  function ouvrirLecture(doc) {
    focusAvantLecture = document.activeElement;
    element("#lecture-titre").textContent = doc.titre || "Bienvenue";
    const zone = element("#lecture-contenu");
    zone.replaceChildren();
    const copie = document.createElement("div");
    copie.className = `feuille-lue type-${doc.type}`;
    const contenu = document.createElement("div");
    contenu.className = "contenu";
    contenu.innerHTML = doc.lectureHtml ?? doc.html;
    copie.append(contenu);
    zone.append(copie);
    zone.scrollTop = 0;
    lecture.hidden = false;
    element("#lecture-fermer").focus();
  }
  function fermerLecture() {
    lecture.hidden = true;
    focusAvantLecture?.focus();
  }
  element("#lecture-fermer").addEventListener("click", fermerLecture);
  lecture.addEventListener("click", (e) => {
    if (e.target === lecture)
      fermerLecture();
  });
  document.addEventListener("keydown", (e) => {
    if (lecture.hidden)
      return;
    if (e.key === "Escape")
      fermerLecture();
    if (e.key === "Tab") {
      const focusables = Array.from(lecture.querySelectorAll("button, a[href], [tabindex='0']"));
      const first = focusables[0], last = focusables.at(-1);
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    }
  });
  element("#technique").addEventListener("click", () => {
    const doc = documents.find((d) => d.id === "technique");
    if (doc)
      ouvrirLecture(doc);
  });
  var sauvegarde = stockage.lire("camera", null);
  var cameraValide = estPosition(sauvegarde) && "zoom" in sauvegarde && typeof sauvegarde.zoom === "number" && sauvegarde.zoom >= ZOOM_MIN && sauvegarde.zoom <= ZOOM_MAX;
  if (cameraValide)
    camera = sauvegarde;
  var places = stockage.lire("positions", {});
  if (places && typeof places === "object") {
    for (const [id, place] of Object.entries(places))
      if (estPosition(place))
        positions[id] = place;
  }
  var brouillons = stockage.lire("notes", []);
  if (Array.isArray(brouillons)) {
    notes = brouillons.filter((n) => estPosition(n) && ("id" in n) && typeof n.id === "string" && /^note-[\w-]+$/.test(n.id) && ("texte" in n) && typeof n.texte === "string");
  }
  for (const doc of documents)
    poserDocument(doc);
  for (const note of notes)
    poserNote(note);
  appliquerCamera();
  if (!cameraValide) {
    const accueil = ["commencez", "accueil", "organigramme"].map((id) => element(`#feuille-${id}`));
    cadrer(accueil);
    document.fonts?.ready.then(() => cadrer(accueil));
  }
})();
