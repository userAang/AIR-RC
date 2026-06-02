import type { MonthCourse } from "@/lib/types";

export const octobre2026: MonthCourse = {
  id: "octobre-2026",
  label: "Octobre 2026",
  shortLabel: "Oct",
  theme: "Pentest applicatif et sécurité pratique",
  description: "Cinquième mois : apprendre les principes de tests de pénétration sûrs, l'analyse des failles et l'utilisation d'outils pour comprendre les risques.",
  monthObjective: "Acquérir les notions de base du pentest, des failles applicatives et des bonnes pratiques d'analyse en environnement sécurisé.",
  available: true,
  weeks: [
    {
      id: "semaine-1",
      number: 1,
      title: "Semaine 1 : Initiation au pentest",
      description: "Découvrir la méthodologie et l'éthique des tests de pénétration.",
      lessons: [
        {
          id: "l1",
          title: "Qu'est-ce que le pentest ?",
          theme: "Notion 1 — Comprendre pourquoi on teste",
          content: `# Pentest : test d'intrusion

Le **pentest** consiste à simuler une attaque contre un système pour trouver ses faiblesses.

## Objectifs
- Trouver des failles
- Mesurer le risque
- Améliorer la sécurité

## Règles importantes
- Toujours travailler avec autorisation
- Ne pas casser le système
- Documenter ce que tu trouves

## Types de pentest
- **Boîte blanche** : tu connais le code et la configuration
- **Boîte noire** : tu n'as aucune information, comme un hacker
- **Boîte grise** : tu as quelques informations

## Pourquoi c'est utile
Les entreprises paient des pentesters pour corriger les failles avant qu'un pirate ne les découvre.`,
        },
        {
          id: "l2",
          title: "Éthique et cadre légal",
          theme: "Notion 2 — Tester sans dépasser",
          content: `# Éthique du pentest

## Ce qui est autorisé
- Tester un système que tu possèdes
- Tester un laboratoire de sécurité
- Tester avec l'autorisation écrite du propriétaire

## Ce qui est interdit
- Attaquer un site sans autorisation
- Voler des données
- Perturber un service en production

## Bonnes pratiques
- Prends des notes claires
- Préviens avant de tester
- Respecte la confidentialité
- Signale les failles sans les exploiter`,
        },
        {
          id: "l3",
          title: "Montage d'un environnement de test",
          theme: "Notion 3 — Travailler en sécurité",
          content: `# Laboratoire de test

Un bon pentest se fait dans un **environnement isolé**.

## Outils simples
- Machine virtuelle (VirtualBox, VMware)
- VM cible (Linux ou Windows)
- VM d'attaque (Kali Linux, Parrot, ou Linux léger)

## Avantages
- Pas de danger pour ton ordinateur principal
- Tu peux réinitialiser rapidement
- Tu peux pratiquer librement

## Exemple de configuration
- Ordinateur hôte : Windows ou Linux
- VM 1 : Kali Linux
- VM 2 : Ubuntu ou Windows vulnérable
- Réseau interne uniquement

## Sécurité
- Ne connecte pas ce laboratoire à Internet en production
- Utilise des instantanés (snapshots)
- Reviens à un état propre après les tests`,
        },
      ],
      questions: [
        {
          id: "q1",
          type: "qcu",
          question: "Quel est le but principal d'un pentest ?",
          options: [
            "Voler des données",
            "Corriger un bug de programmation",
            "Trouver des failles pour améliorer la sécurité",
            "Ralentir un site web",
          ],
          correctAnswers: [2],
          explanation: "Le pentest cherche des failles pour qu'elles soient corrigées, pas pour les exploiter malicieusement.",
        },
        {
          id: "q2",
          type: "qcu",
          question: "Quel type de pentest utilise peu d'informations au départ ?",
          options: ["Boîte blanche", "Boîte noire", "Boîte grise", "Boîte en fer"],
          correctAnswers: [1],
          explanation: "La boîte noire simule un attaquant sans connaissance préalable du système.",
        },
        {
          id: "q3",
          type: "qcm",
          question: "Quelles règles sont essentielles en pentest ? (plusieurs réponses)",
          options: [
            "Avoir une autorisation écrite",
            "Tester n'importe quel système sur Internet",
            "Ne pas détruire les données",
            "Documenter les résultats",
          ],
          correctAnswers: [0, 2, 3],
          explanation: "L'autorisation, la prudence et la documentation sont essentielles. Attaquer sans autorisation est illégal.",
        },
        {
          id: "q4",
          type: "qcu",
          question: "Pourquoi utiliser une machine virtuelle pour les tests ?",
          options: [
            "Pour gagner de la vitesse",
            "Pour isoler l'environnement et éviter les risques",
            "Pour partager l'accès avec tout le monde",
            "Pour éviter d'installer un système d'exploitation",
          ],
          correctAnswers: [1],
          explanation: "Les VM isolées protègent ton ordinateur principal et permettent de revenir à un état propre.",
        },
        {
          id: "q5",
          type: "qcm",
          question: "Qu'est-ce qui fait partie d'un environnement de test sûr ? (plusieurs réponses)",
          options: [
            "Réseau interne uniquement",
            "Snapshots réguliers",
            "Connexion directe à Internet sans contrôle",
            "Attaquer des systèmes de production",
          ],
          correctAnswers: [0, 1],
          explanation: "Un laboratoire sûr est isolé, avec des snapshots. La connexion Internet non contrôlée et les systèmes de production ne doivent pas être attaqués.",
        },
      ],
      miniProject: {
        title: "Mini-projet : Construis ton laboratoire de pentest",
        description: "Préparer un environnement sécurisé pour tester des vulnérabilités.",
        task: "Installe une VM d'attaque et une VM cible sur ton ordinateur. Note leur configuration réseau et prends une capture d'écran de ton tableau de bord VM.",
        submissionInstructions: "Capture d'écran du réseau de VMs et description courte de la configuration.",
      },
    },
    {
      id: "semaine-2",
      number: 2,
      title: "Semaine 2 : Failles web simples",
      description: "Comprendre les failles les plus courantes sur les sites web.",
      lessons: [
        {
          id: "l1",
          title: "Injection SQL",
          theme: "Notion 1 — Comprendre une injection",
          content: `# Injection SQL

L'injection SQL se produit quand un site web accepte du texte que le pirate transforme en commande.

## Exemple simple

Le site attend un identifiant : \`user=alice\`

Le pirate envoie : \`user=' OR '1'='1\`

Le site lit cela comme une commande SQL, ce qui peut donner accès à la base de données.

## Pourquoi c'est dangereux
- Lecteur de données
- Modification de données
- Suppression de données
- Contrôle du serveur

## Bonne défense
- Utiliser des requêtes préparées
- Valider les données reçues
- Ne jamais exécuter de texte directement comme commande`,
        },
        {
          id: "l2",
          title: "Cross-site scripting (XSS)",
          theme: "Notion 2 — Scripts malveillants",
          content: `# Cross-site scripting (XSS)

XSS se produit lorsque le site affiche du texte dangereux comme s'il s'agissait de contenu normal.

## Exemple

Un utilisateur écrit : \`<script>alert('Hello')</script>\`

Si le site n'échappe pas ce texte, il l'affiche dans le navigateur.

## Conséquences
- Vol de cookies
- Redirection vers un site malveillant
- Déploiement de fausses pages

## Prévention
- Échapper les données affichées
- Valider les entrées utilisateurs
- Utiliser des entêtes de sécurité

## XSS réfléchi vs stocké
- **Réfléchi** : le script est renvoyé immédiatement dans la réponse
- **Stocké** : le script est enregistré et servi à d'autres utilisateurs`,
        },
        {
          id: "l3",
          title: "Configuration incorrecte et fuite de données",
          theme: "Notion 3 — Les erreurs de paramétrage",
          content: `# Mauvaise configuration

Beaucoup de failles viennent d'une mauvaise configuration, pas d'un code mauvais.

## Exemples
- Pages d'administration accessibles sans mot de passe
- Fichiers de sauvegarde exposés
- Ports ouverts inutilement
- Paramètres par défaut laissés activés

## Pourquoi c'est critique
Même un site simple peut être compromis si la configuration est mauvaise.

## Défense
- Vérifier les paramètres avant de publier
- Fermer les ports inutiles
- Retirer les comptes de test
- Protéger les pages sensibles

## En pratique
Teste ton propre site en regardant si des pages ou fichiers cachés sont accessibles sans connexion.`,
        },
      ],
      questions: [
        {
          id: "q1",
          type: "qcu",
          question: "Quel type de faille permet d'exécuter du code JavaScript dans le navigateur d'un visiteur ?",
          options: ["Injection SQL", "XSS", "Phishing", "DDoS"],
          correctAnswers: [1],
          explanation: "XSS permet d'exécuter du JavaScript dans le navigateur d'un visiteur.",
        },
        {
          id: "q2",
          type: "qcu",
          question: "Une injection SQL peut permettre de :",
          options: [
            "Voler des données",
            "Éteindre un écran",
            "Augmenter la vitesse du site",
            "Changer la couleur du texte",
          ],
          correctAnswers: [0],
          explanation: "Une injection SQL peut donner accès aux données de la base de données.",
        },
        {
          id: "q3",
          type: "qcm",
          question: "Quelles actions aident à prévenir le XSS ? (plusieurs réponses)",
          options: [
            "Échapper les données utilisateurs",
            "Ignorer les entrées utilisateur",
            "Valider les données côté serveur",
            "Afficher du HTML brut sans contrôle",
          ],
          correctAnswers: [0, 2],
          explanation: "Échapper et valider les entrées sont des protections essentielles. Afficher du HTML brut est dangereux.",
        },
        {
          id: "q4",
          type: "qcu",
          question: "Pourquoi une mauvaise configuration est-elle dangereuse ?",
          options: [
            "Le site est plus lent",
            "Elle peut exposer des zones sensibles sans protection",
            "Elle améliore la sécurité",
            "Elle rend le site plus joli",
          ],
          correctAnswers: [1],
          explanation: "Une mauvaise configuration peut laisser des pages ou fichiers sensibles accessibles à tous.",
        },
        {
          id: "q5",
          type: "qcm",
          question: "Quelles sont des protections contre les failles web ? (plusieurs réponses)",
          options: [
            "Utiliser des requêtes préparées",
            "Laisser des pages de test accessibles",
            "Fermer les ports inutiles",
            "Laisser les paramètres par défaut"],
          correctAnswers: [0, 2],
          explanation: "Les requêtes préparées et la fermeture des ports sont des bonnes défenses. Les pages de test accessibles et paramètres par défaut sont des risques.",
        },
      ],
      miniProject: {
        title: "Mini-projet : Identifier des failles simples",
        description: "Analyse une application web simple et repère les risques visibles.",
        task: "Choisis un site ou une application d'entraînement sécurisé. Liste trois problèmes possibles (ex: formulaire non validé, page admin visible, contenu non échappé).",
        submissionInstructions: "Document texte avec les 3 points trouvés et une capture d'écran si possible.",
      },
    },
    {
      id: "semaine-3",
      number: 3,
      title: "Semaine 3 : Outils de reconnaissance",
      description: "Apprendre à trouver des informations sur une cible sans attaquer.",
      lessons: [
        {
          id: "l1",
          title: "Scan réseau et découverte",
          theme: "Notion 1 — Observer sans agir",
          content: `# Reconnaissance

La reconnaissance permet de collecter des informations avant un test.

## Ce qu'on cherche
- Adresses IP actives
- Services ouverts
- Versions de logiciels
- Pages exposées

## Outils simples
- **Nmap** : scan de ports
- **Whois** : informations de domaine
- **nslookup** ou **dig** : DNS
- **WhatWeb** : détecte un CMS

## Principe
Il ne s'agit pas d'exploiter une faille, mais de mieux comprendre la cible.

## Exemple
1. Scanner un réseau interne
2. Voir quels ports sont ouverts
3. Trouver un serveur web
4. Identifier une version de logiciel obsolète`,
        },
        {
          id: "l2",
          title: "Analyser un site web",
          theme: "Notion 2 — Inspecter les réponses",
          content: `# Analyse d'un site web

Un pentester regarde les réponses du serveur.

## Attentes habituelles
- Pages d'erreur mal configurées
- Headers de sécurité manquants
- Formulaires vulnérables
- Fichiers accessibles (backup, .env)

## Outils du navigateur
- Inspecteur HTML
- Console JavaScript
- Réseau (Network)

## Headers à vérifier
- Content-Security-Policy
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy

## Pourquoi c'est utile
Ces informations montrent si le site protège bien les utilisateurs ou s'il fuit des détails.`,
        },
        {
          id: "l3",
          title: "Scanner une machine cible",
          theme: "Notion 3 — Nmap au quotidien",
          content: `# Nmap

Nmap est un outil de découverte de réseau.

## Exemples d'utilisation
- \`nmap -sS 192.168.1.10\` : scan de ports
- \`nmap -sV 192.168.1.10\` : version des services
- \`nmap --open 192.168.1.0/24\` : machines avec ports ouverts

## Ce qu'on apprend
- Quels services sont actifs
- Quels ports sont ouverts
- Si un service est ancien ou vulnérable

## Attention
Nmap peut déranger certains systèmes. Sur ton laboratoire, c'est parfait. Sur un réseau réel, fais-le seulement avec autorisation.`,
        },
      ],
      questions: [
        {
          id: "q1",
          type: "qcu",
          question: "Quel outil est couramment utilisé pour scanner des ports ?",
          options: ["Photoshop", "Nmap", "Excel", "Chrome"],
          correctAnswers: [1],
          explanation: "Nmap est l'outil classique pour scanner les ports et découvrir les services.",
        },
        {
          id: "q2",
          type: "qcm",
          question: "Quelles informations un scan peut-il donner ? (plusieurs réponses)",
          options: [
            "Ports ouverts",
            "Version d'un service",
            "Mot de passe d'un compte",
            "Système d'exploitation probable",
          ],
          correctAnswers: [0, 1, 3],
          explanation: "Un scan donne des ports, versions et parfois un indice sur le système d'exploitation, mais pas de mot de passe.",
        },
        {
          id: "q3",
          type: "qcu",
          question: "Pourquoi la reconnaissance est-elle utile avant une attaque ?",
          options: [
            "Pour ralentir le système",
            "Pour mieux comprendre la cible",
            "Pour voler des données immédiatement",
            "Pour créer un site web",
          ],
          correctAnswers: [1],
          explanation: "La reconnaissance permet de collecter des informations et de choisir les bons tests sans agir aveuglément.",
        },
        {
          id: "q4",
          type: "qcu",
          question: "Quel header n'est PAS un header de sécurité ?",
          options: [
            "Content-Security-Policy",
            "X-Frame-Options",
            "X-Content-Type-Options",
            "Font-Size-Policy",
          ],
          correctAnswers: [3],
          explanation: "Font-Size-Policy n'est pas un header de sécurité standard.",
        },
        {
          id: "q5",
          type: "qcm",
          question: "Qu'est-ce qu'il faut faire avec Nmap sur un réseau réel ? (plusieurs réponses)",
          options: [
            "Utiliser seulement avec autorisation",
            "Scanner n'importe quel réseau Internet",
            "Scanner ton laboratoire local",
            "Scanner la production sans prévenir",
          ],
          correctAnswers: [0, 2],
          explanation: "Le scan doit être fait avec autorisation sur un réseau réel. Sur ton laboratoire, c'est autorisé.",
        },
      ],
      miniProject: {
        title: "Mini-projet : Reconnaissance contrôlée",
        description: "Collecter des informations sur une cible sécurisée sans l'endommager.",
        task: "Utilise Nmap ou un outil de navigateur pour analyser une machine ou une application dans ton laboratoire. Liste 3 informations utiles que tu as trouvées.",
        submissionInstructions: "Document avec les commandes utilisées et les résultats observés.",
      },
    },
    {
      id: "semaine-4",
      number: 4,
      title: "Semaine 4 : Rapports et recommandations",
      description: "Savoir expliquer les failles et proposer des corrections.",
      lessons: [
        {
          id: "l1",
          title: "Rédiger un rapport simple",
          theme: "Notion 1 — Dire ce que tu as trouvé",
          content: `# Rapports de sécurité

Un rapport de pentest doit être clair et utile.

## Sections importantes
- Contexte : ce qui a été testé
- Résultats : failles trouvées
- Gravité : faible, moyenne, élevée
- Recommandations : ce qu'il faut corriger
- Conclusion : résumé global

## Style
- Simple
- Factuel
- Non alarmiste
- Pas de jargon inutile

## Exemple
- Faible : page de test accessible
- Moyenne : formulaire non validé
- Élevée : injection SQL possible

## Objectif
Aider l'équipe à comprendre et corriger, pas à impressionner.`,
        },
        {
          id: "l2",
          title: "Classer les failles",
          theme: "Notion 2 — Prioriser les correctifs",
          content: `# Prioriser les failles

Toutes les failles ne se valent pas.

## Critères de gravité
- Impact : quelles données sont exposées ?
- Exploitabilité : est-ce facile à attaquer ?
- Fréquence : est-ce courant ?
- Contexte : système critique ou pas

## Exemples
- Injection SQL sur une page de connexion : élevée
- Page de test accessible : faible
- Formulaire sans validation : moyenne

## Pourquoi prioriser
Les équipes ne peuvent pas tout corriger en même temps. On commence par ce qui est le plus dangereux.

## Défense
- Commencer par les failles élevées
- Corriger les failles moyennes ensuite
- Documenter les failles faibles`,
        },
        {
          id: "l3",
          title: "Recommandations pratiques",
          theme: "Notion 3 — Conseiller les bons gestes",
          content: `# Recommandations

Quand tu trouves une faille, propose une correction simple.

## Exemples de corrections
- Injection SQL : utiliser des requêtes préparées
- XSS : échapper les données affichées
- Pages non protégées : ajouter une authentification
- Mauvaise configuration : fermer les ports inutiles

## Structure d'une recommandation
1. Problème identifié
2. Impact potentiel
3. Solution proposée
4. Pourquoi c'est important

## Ton objectif
Aider l'équipe à comprendre et agir rapidement.

## En cybersécurité
La meilleure recommandation est souvent : "Corrige avant qu'un attaquant ne l'exploite."`,
        },
      ],
      questions: [
        {
          id: "q1",
          type: "qcu",
          question: "Quelle section n'est PAS nécessaire dans un rapport de pentest ?",
          options: [
            "Contexte du test",
            "Résultats trouvés",
            "Recommandations",
            "Les résultats du jeu vidéo préféré du pentester",
          ],
          correctAnswers: [3],
          explanation: "Le rapport doit rester professionnel : pas besoin d'informations personnelles ou hors sujet.",
        },
        {
          id: "q2",
          type: "qcm",
          question: "Quelles informations aident à prioriser une faille ? (plusieurs réponses)",
          options: [
            "Impact sur les données",
            "Facilité d'exploitation",
            "Couleur du logo du site",
            "Criticité du système",
          ],
          correctAnswers: [0, 1, 3],
          explanation: "Impact, facilité d'exploitation et criticité du système déterminent la priorité. La couleur du logo n'a rien à voir.",
        },
        {
          id: "q3",
          type: "qcu",
          question: "Quelle est la meilleure première action après un pentest ?",
          options: [
            "Envoyer le rapport à tout le monde",
            "Corriger les failles évaluées élevées en priorité",
            "Publier les failles sur les réseaux sociaux",
            "Ignorer les recommandations",
          ],
          correctAnswers: [1],
          explanation: "Il faut corriger d'abord les failles à haute gravité pour protéger le système rapidement.",
        },
        {
          id: "q4",
          type: "qcu",
          question: "Une recommandation de sécurité doit être :",
          options: [
            "Vague et générale",
            "Claire et actionnable",
            "Longue et technique pour impressionner",
            "Écrite en langage familier sans explication",
          ],
          correctAnswers: [1],
          explanation: "Une bonne recommandation doit être claire et facile à comprendre pour être appliquée.",
        },
        {
          id: "q5",
          type: "qcm",
          question: "Quelles phrases décrivent une recommandation utile ? (plusieurs réponses)",
          options: [
            "Utiliser des requêtes préparées pour éviter l'injection SQL",
            "Laisser le problème tel quel",
            "Fermer les ports inutiles",
            "Changer la couleur du site",
          ],
          correctAnswers: [0, 2],
          explanation: "Les recommandations utiles proposent des actions techniques concrètes. La couleur du site n'est pas pertinente.",
        },
      ],
      miniProject: {
        title: "Mini-projet : Rapport de vulnérabilité",
        description: "Rédiger un petit rapport clair sur une faille trouvée.",
        task: "Choisis une faiblesse de ton laboratoire (page non protégée, formulaire vulnérable) et rédige un court rapport avec l'impact et la correction.",
        submissionInstructions: "Rapport court en texte avec 3 sections : description, impact, recommandation.",
      },
    },
  ],
};
