import type { MonthCourse } from "@/lib/types";

export const decembre2026: MonthCourse = {
  id: "decembre-2026",
  label: "Décembre 2026",
  shortLabel: "Déc",
  theme: "Projet intégrateur et synthèse annuelle",
  description: "Septième mois : consolider les acquis avec une révision pratique et un mini-projet final.",
  monthObjective: "Réviser les connaissances acquises et les appliquer dans un projet simple mais pratique.",
  available: true,
  weeks: [
    {
      id: "semaine-1",
      number: 1,
      title: "Semaine 1 : Révision des fondamentaux",
      description: "Reprendre les notions clés vues depuis juin pour les ancrer.",
      lessons: [
        {
          id: "l1",
          title: "Hardware et software",
          theme: "Notion 1 — Bases de l'ordinateur",
          content: `# Révision : hardware et software

## Hardware
- Processeur
- RAM
- Stockage
- Carte mère
- Périphériques

## Software
- Système d'exploitation
- Applications
- Fichiers

## Pourquoi c'est important
Comprendre la différence aide à diagnostiquer un problème et à savoir comment sécuriser un système.

## En pratique
Quand tu as un problème, vérifie : matériel (physique) ou logiciel (programme) ?`,
        },
        {
          id: "l2",
          title: "Données, comptes et chiffrement",
          theme: "Notion 2 — Protéger l'identité",
          content: `# Révision : données et accès

## Gestion de fichiers
- Organiser ses dossiers
- Utiliser des sauvegardes

## Comptes et mots de passe
- Utiliser des mots de passe forts
- Activer l'authentification à deux facteurs (2FA)
- Ne pas réutiliser le même mot de passe

## Chiffrement
- Chiffrer les données sensibles
- Utiliser BitLocker, VeraCrypt, GPG
- Protéger les sauvegardes`,
        },
        {
          id: "l3",
          title: "Menaces et bonnes pratiques",
          theme: "Notion 3 — Rester vigilant",
          content: `# Révision : menaces usuelles

## Menaces courantes
- Phishing
- Malware
- Ransomware
- Ingénierie sociale

## Bonnes pratiques
- Mettre à jour ses logiciels
- Ne pas ouvrir de fichiers inconnus
- Utiliser un antivirus
- Sauvegarder régulièrement

## Résumé
La meilleure défense est une combinaison : vigilance, outils et habitudes sûres.`,
        },
      ],
      questions: [
        {
          id: "q1",
          type: "qcu",
          question: "Quel élément fait partie du hardware ?",
          options: ["Système d'exploitation", "Processeur", "Application web", "Mot de passe"],
          correctAnswers: [1],
          explanation: "Le processeur est du hardware, un composant physique de l'ordinateur.",
        },
        {
          id: "q2",
          type: "qcm",
          question: "Quelles bonnes pratiques améliorent la sécurité ? (plusieurs réponses)",
          options: [
            "Mots de passe forts",
            "Mises à jour régulières",
            "Télécharger n'importe quoi sur Internet",
            "Sauvegardes régulières",
          ],
          correctAnswers: [0, 1, 3],
          explanation: "Mots de passe forts, mises à jour et sauvegardes sont des pratiques de sécurité essentielles.",
        },
        {
          id: "q3",
          type: "qcu",
          question: "Qu'est-ce que le chiffrement protège ?",
          options: [
            "Les données pour qu'elles restent illisibles sans clé",
            "La vitesse de l'ordinateur",
            "La taille du disque dur",
            "La qualité de l'écran",
          ],
          correctAnswers: [0],
          explanation: "Le chiffrement rend les données illisibles pour ceux qui n'ont pas la clé.",
        },
        {
          id: "q4",
          type: "qcu",
          question: "Quel est un signe d'hameçonnage (phishing) ?",
          options: [
            "Un email demandant tes informations personnelles",
            "Un email d'un ami normal",
            "Un message de confirmation que tu attendais",
            "Une notification de mise à jour système standard",
          ],
          correctAnswers: [0],
          explanation: "Un email demandant des informations personnelles est souvent une tentative de phishing.",
        },
        {
          id: "q5",
          type: "qcm",
          question: "Quelles actions sont utiles contre les malwares ? (plusieurs réponses)",
          options: [
            "Mettre à jour l'antivirus",
            "Ouvrir tous les fichiers reçus par email",
            "Sauvegarder régulièrement",
            "Installer uniquement des logiciels de sources fiables",
          ],
          correctAnswers: [0, 2, 3],
          explanation: "Mettre à jour l'antivirus, sauvegarder et installer des logiciels fiables réduit le risque de malware.",
        },
      ],
      miniProject: {
        title: "Mini-projet : Checklist de sécurité personnelle",
        description: "Créer une liste de contrôle des bonnes habitudes sécurisées.",
        task: "Élabore une checklist avec 5 actions de sécurité que tu peux mettre en place sur ton ordinateur personnel.",
        submissionInstructions: "Checklist en texte avec une courte explication pour chaque action.",
      },
    },
    {
      id: "semaine-2",
      number: 2,
      title: "Semaine 2 : Projet intégré - configuration d'un poste sécurisé",
      description: "Construire une configuration simple et sécurisée pour un poste de travail.",
      lessons: [
        {
          id: "l1",
          title: "Sécuriser le système d'exploitation",
          theme: "Notion 1 — Renforcer l'OS",
          content: `# Sécuriser l'OS

## Actions de base
- Mettre à jour le système
- Activer le pare-feu
- Installer un antivirus
- Configurer la sauvegarde

## Exemple
Sur Windows :
- Activer Windows Update
- Vérifier Defender
- Sauvegarder sur un disque externe

Sur Linux :
- Mettre à jour avec \`sudo apt update && sudo apt upgrade\`
- Activer un firewall simple
- Utiliser des comptes d'utilisateur séparés

## Importance
Un système à jour et bien configuré est la première protection contre une grande partie des attaques.`,
        },
        {
          id: "l2",
          title: "Sécuriser l'accès aux comptes",
          theme: "Notion 2 — Contrôle des accès",
          content: `# Sécuriser les comptes

## Actions clés
- Mots de passe uniques et forts
- Authentification à deux facteurs (2FA)
- Bloquer les comptes inutilisés
- Utiliser un gestionnaire de mots de passe

## Exemple
Ne pas réutiliser le même mot de passe sur plusieurs sites.

## Pourquoi c'est important
Une seule fuite de mot de passe ne doit pas compromettre tous tes comptes.`,
        },
        {
          id: "l3",
          title: "Sécuriser le réseau local",
          theme: "Notion 3 — Protéger sa connexion",
          content: `# Sécuriser le réseau

## Actions simples
- Changer le mot de passe Wi-Fi du routeur
- Utiliser un chiffrement WPA2/WPA3
- Cacher le SSID si possible
- Mettre à jour le firmware du routeur

## Pourquoi c'est utile
Un routeur mal protégé permet à un intrus de se connecter facilement à ton réseau.

## En pratique
Vérifie le mot de passe du Wi-Fi et active un chiffrement fort`,
        },
      ],
      questions: [
        {
          id: "q1",
          type: "qcu",
          question: "Que devrais-tu faire pour sécuriser un compte ?",
          options: [
            "Réutiliser un mot de passe simple",
            "Utiliser un mot de passe fort et unique",
            "Écrire le mot de passe sur un post-it visible",
            "L'envoyer par email à tes amis",
          ],
          correctAnswers: [1],
          explanation: "Un mot de passe fort et unique est la meilleure pratique pour sécuriser un compte.",
        },
        {
          id: "q2",
          type: "qcm",
          question: "Quelles actions renforcent un réseau Wi-Fi ? (plusieurs réponses)",
          options: [
            "Utiliser WPA2/WPA3",
            "Laisser le mot de passe par défaut",
            "Mettre à jour le firmware du routeur",
            "Cacher le SSID",
          ],
          correctAnswers: [0, 2, 3],
          explanation: "WPA2/WPA3, firmware à jour et SSID caché renforcent la sécurité du Wi-Fi.",
        },
        {
          id: "q3",
          type: "qcu",
          question: "Pourquoi un gestionnaire de mots de passe est utile ?",
          options: [
            "Il mémorise des mots de passe forts uniques",
            "Il partage facilement les mots de passe avec tout le monde",
            "Il rend les mots de passe plus mauvais",
            "Il supprime automatiquement tous les mots de passe",
          ],
          correctAnswers: [0],
          explanation: "Un gestionnaire aide à utiliser des mots de passe forts et uniques sans avoir à les retenir.",
        },
        {
          id: "q4",
          type: "qcu",
          question: "Quel chiffrement est recommandé pour le Wi-Fi domestique ?",
          options: ["WEP", "WPA2/WPA3", "Aucun", "HTTP"],
          correctAnswers: [1],
          explanation: "WPA2 ou WPA3 offre une protection beaucoup plus forte que WEP ou aucun chiffrement.",
        },
        {
          id: "q5",
          type: "qcm",
          question: "Quelles sont des mesures de base pour un poste sécurisé ? (plusieurs réponses)",
          options: [
            "Mises à jour régulières",
            "Antivirus activé",
            "Mot de passe fort",
            "Télécharger des fichiers inconnus sans vérification",
          ],
          correctAnswers: [0, 1, 2],
          explanation: "Les mises à jour, un antivirus activé et un mot de passe fort sont des mesures de base. Télécharger des fichiers inconnus est dangereux.",
        },
      ],
      miniProject: {
        title: "Mini-projet : Poste sécurisé",
        description: "Créer une configuration de base sécurisée pour un ordinateur personnel.",
        task: "Décris les 3 étapes que tu ferais pour sécuriser un ordinateur personnel et note les outils ou paramètres utilisés.",
        submissionInstructions: "Liste de 3 étapes avec explications (par exemple, mises à jour, antivirus, mot de passe).",
      },
    },
    {
      id: "semaine-3",
      number: 3,
      title: "Semaine 3 : Projet pratique",
      description: "Mettre en place une mini-sécurité avec des outils réels.",
      lessons: [
        {
          id: "l1",
          title: "Automatiser les sauvegardes",
          theme: "Notion 1 — Protéger les données",
          content: `# Sauvegardes automatiques

## Pourquoi sauvegarder
- En cas de malware
- En cas de panne matérielle
- En cas d'erreur humaine

## Types de sauvegardes
- Externe : disque dur externe
- Cloud : service en ligne
- Local : dossier sur un autre disque

## Bonnes pratiques
- 3-2-1 : 3 copies, 2 types de supports, 1 hors site
- Vérifier que la sauvegarde fonctionne
- Sauvegarder régulièrement`,
        },
        {
          id: "l2",
          title: "Renforcer l'accès à distance",
          theme: "Notion 2 — Contrôler les connexions distantes",
          content: `# Accès à distance sécurisé

## Problèmes
L'accès à distance peut donner un point d'entrée aux intrus.

## Défenses simples
- Désactiver l'accès distant si inutile
- Utiliser un VPN pour y accéder
- Protéger avec des mots de passe forts
- Activer l'authentification multi-facteurs

## Exemple
Sur un routeur ou un NAS, désactive l'accès depuis Internet si tu n'en as pas besoin.`,
        },
        {
          id: "l3",
          title: "Créer un mini-projet final",
          theme: "Notion 3 — Appliquer tout ensemble",
          content: `# Projet intégré

Ce mini-projet réunit plusieurs notions vues durant l'année.

## Exemple de projet
- Préparer un poste sécurisé
- Configurer un utilisateur 
- Activer le pare-feu
- Sauvegarder des données
- Noter les actions de sécurité

## Objectif
Montrer que tu sais à la fois protéger les fichiers, les comptes et le système.

## Réussite
Ton projet doit être simple, clair et bien documenté.`,
        },
      ],
      questions: [
        {
          id: "q1",
          type: "qcu",
          question: "Quelle règle correspond à la stratégie 3-2-1 des sauvegardes ?",
          options: [
            "3 copies, 2 types de support, 1 copie hors site",
            "3 mots de passe, 2 utilisateurs, 1 VPN",
            "3 mises à jour, 2 antivirus, 1 firewall",
            "3 réseaux, 2 bases de données, 1 utilisateur",
          ],
          correctAnswers: [0],
          explanation: "La stratégie 3-2-1 concerne les sauvegardes : 3 copies sur 2 supports différents et 1 hors site.",
        },
        {
          id: "q2",
          type: "qcm",
          question: "Quelles pratiques renforcent l'accès à distance ? (plusieurs réponses)",
          options: [
            "Utiliser un VPN",
            "Désactiver l'accès distant inutile",
            "Utiliser des mots de passe faibles",
            "Activer l'authentification multi-facteurs",
          ],
          correctAnswers: [0, 1, 3],
          explanation: "VPN, désactivation de l'accès inutile et 2FA renforcent l'accès distant.",
        },
        {
          id: "q3",
          type: "qcu",
          question: "Pourquoi documenter ton mini-projet final ?",
          options: [
            "Pour expliquer ce que tu as fait et pourquoi",
            "Pour téléverser plus rapidement",
            "Pour rendre le projet plus compliqué",
            "Pour cacher les failles",
          ],
          correctAnswers: [0],
          explanation: "La documentation permet de montrer clairement les actions et les raisons derrière elles.",
        },
        {
          id: "q4",
          type: "qcu",
          question: "Quel est l'avantage d'un VPN pour l'accès distant ?",
          options: [
            "Chiffrer la connexion",
            "Rendre l'accès plus lent sans bénéfice",
            "Afficher des publicités",
            "Supprimer les sauvegardes",
          ],
          correctAnswers: [0],
          explanation: "Un VPN chiffre la connexion et protège les données lors d'un accès distant.",
        },
        {
          id: "q5",
          type: "qcm",
          question: "Quelles mesures sont bonnes pour un mini-projet de sécurité ? (plusieurs réponses)",
          options: [
            "Documenter les actions",
            "Utiliser des sauvegardes",
            "Ignorer la configuration réseau",
            "Choisir des mots de passe forts",
          ],
          correctAnswers: [0, 1, 3],
          explanation: "Documenter, sauvegarder et utiliser des mots de passe forts sont des mesures de qualité. Ignorer le réseau n'est pas recommandé.",
        },
      ],
      miniProject: {
        title: "Mini-projet : Projet de sécurité pratique",
        description: "Assembler plusieurs bonnes pratiques pour sécuriser un poste ou un petit réseau.",
        task: "Décris un projet simple de sécurité : OS à jour, mots de passe forts, sauvegardes, et réseau sécurisé. Explique chaque étape.",
        submissionInstructions: "Document texte avec les étapes, les outils et les raisons de chaque choix.",
      },
    },
    {
      id: "semaine-4",
      number: 4,
      title: "Semaine 4 : Synthèse et perspectives",
      description: "Revoir les acquis et préparer la suite de l'apprentissage.",
      lessons: [
        {
          id: "l1",
          title: "Résumé des compétences acquises",
          theme: "Notion 1 — Ce que tu sais faire maintenant",
          content: `# Synthèse des acquis

## Ce que tu as appris
- Fonctions d'un ordinateur
- Systèmes d'exploitation
- Gestion des données
- Mots de passe et 2FA
- Menaces courantes
- Réseaux et adresses IP
- Pentest et forensique

## Ce que tu peux faire
- Configurer un poste sécurisé
- Reconnaître un phishing
- Analyser des logs simples
- Travailler dans un laboratoire sécurisé

## Importance
La synthèse te permet de mesurer ta progression et de te préparer à l'étape suivante.`,
        },
        {
          id: "l2",
          title: "Lire des rapports de sécurité",
          theme: "Notion 2 — Comprendre la veille",
          content: `# Suivre l'actualité en cybersécurité

## Pourquoi c'est utile
La cybersécurité évolue vite. Les nouvelles failles apparaissent chaque jour.

## Ce que lire
- Résumés de vulnérabilités
- Articles sur les attaques récentes
- Bulletins de sécurité des logiciels
- Conseils pratiques de sécurité

## Sources simples
- Sites spécialisés
- Blogs de fournisseurs de sécurité
- Forums techniques

## En pratique
Commence par une lecture courte de temps en temps pour rester informé.`,
        },
        {
          id: "l3",
          title: "Prochaines étapes possibles",
          theme: "Notion 3 — Où aller ensuite",
          content: `# Prochaines étapes

## Domaines à explorer
- Administration système
- Réseaux avancés
- Pentest plus profond
- Forensique avancée
- Cloud security

## Conseils
- Pratique régulièrement
- Fais des mini-projets
- Construis un portfolio
- Participe à des laboratoires et exercices

## Conclusion
Tu as une base solide. La suite consiste à approfondir et à pratiquer encore plus.`,
        },
      ],
      questions: [
        {
          id: "q1",
          type: "qcu",
          question: "Pourquoi est-il utile de suivre l'actualité de la cybersécurité ?",
          options: [
            "Parce que les failles changent fréquemment",
            "Parce que les ordinateurs ne changent jamais",
            "Parce que cela remplace la pratique",
            "Parce que c'est inutile",
          ],
          correctAnswers: [0],
          explanation: "La cybersécurité évolue rapidement, il est donc utile de suivre les nouvelles failles et attaques.",
        },
        {
          id: "q2",
          type: "qcm",
          question: "Quelles options sont de bonnes prochaines étapes ? (plusieurs réponses)",
          options: [
            "Pratiquer davantage",
            "Construire un portfolio",
            "Ne plus toucher un ordinateur",
            "Explorer le cloud security",
          ],
          correctAnswers: [0, 1, 3],
          explanation: "Pratiquer, documenter ses projets et explorer de nouveaux domaines sont de bonnes étapes.",
        },
        {
          id: "q3",
          type: "qcu",
          question: "Quel domaine n'est pas mentionné comme prochaine étape ?",
          options: [
            "Administration système",
            "Cloud security",
            "Peinture artistique",
            "Forensique avancée",
          ],
          correctAnswers: [2],
          explanation: "La peinture artistique n'est pas une étape de cybersécurité mentionnée ici.",
        },
        {
          id: "q4",
          type: "qcu",
          question: "Que signifie construire un portfolio ?",
          options: [
            "Montrer tes projets et réalisations",
            "Créer un site web de vente",
            "Installer un nouveau logiciel",
            "Modifier le mot de passe du routeur",
          ],
          correctAnswers: [0],
          explanation: "Un portfolio présente tes projets et compétences à d'autres personnes ou employeurs.",
        },
        {
          id: "q5",
          type: "qcm",
          question: "Quelles sont des attitudes positives pour la suite ? (plusieurs réponses)",
          options: [
            "Curiosité",
            "Pratique régulière",
            "Adopter de bonnes habitudes",
            "Réagir impulsivement à chaque nouveauté"],
          correctAnswers: [0, 1, 2],
          explanation: "La curiosité, la pratique régulière et les bonnes habitudes sont positives. Réagir impulsivement n'est pas une stratégie durable.",
        },
      ],
      miniProject: {
        title: "Mini-projet : Plan de progression personnelle",
        description: "Créer un plan clair pour la suite de l'apprentissage en cybersécurité.",
        task: "Écris les 3 prochaines compétences que tu veux apprendre et comment tu vas les pratiquer.",
        submissionInstructions: "Plan personnel en texte avec 3 objectifs et 3 actions concrètes.",
      },
    },
  ],
};
