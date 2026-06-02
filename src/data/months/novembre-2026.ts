import type { MonthCourse } from "@/lib/types";

export const novembre2026: MonthCourse = {
  id: "novembre-2026",
  label: "Novembre 2026",
  shortLabel: "Nov",
  theme: "Forensique et réponse à incident",
  description: "Sixième mois : apprendre à analyser un incident, recueillir des preuves et comprendre les traces laissées par une attaque.",
  monthObjective: "Acquérir les bases de la forensique numérique, de l'analyse de logs et de la réponse aux incidents.",
  available: true,
  weeks: [
    {
      id: "semaine-1",
      number: 1,
      title: "Semaine 1 : Introduction à la forensique",
      description: "Comprendre l'objectif de la forensique numérique et les principes de base.",
      lessons: [
        {
          id: "l1",
          title: "Qu'est-ce que la forensique ?",
          theme: "Notion 1 — Analyse des traces",
          content: `# Forensique numérique

La forensique consiste à analyser des traces laissées par une attaque ou un incident.

## Objectif
- Comprendre ce qui s'est passé
- Trouver les preuves
- Préparer la réponse

## Différence avec le pentest
- Pentest : tester volontairement un système
- Forensique : analyser après un incident

## Principe
On collecte des données sans les modifier, puis on les analyse.

## Exemples de traces
- Logs
- Historique du navigateur
- Processus en mémoire
- Fichiers modifiés`,
        },
        {
          id: "l2",
          title: "Chaîne de conservation des preuves",
          theme: "Notion 2 — Garder les données intactes",
          content: `# Chaîne de conservation

Pour être utile, une preuve doit être **validable**.

## Règles de base
- Ne pas modifier les données originales
- Noter qui a accédé à la preuve
- Enregistrer la date et l'heure
- Stocker dans un endroit sûr

## Exemple
- Capture d'écran d'un log
- Copie du fichier suspect
- Note : "J'ai copié ce fichier le 02/06/2026 à 10h00"

## Pourquoi c'est important
Si une preuve est modifiée, elle peut perdre sa valeur. Dans un contexte professionnel, on appelle cela la **chaîne de custody**.`,
        },
        {
          id: "l3",
          title: "Outils de base de l'analyse",
          theme: "Notion 3 — Examiner les données",
          content: `# Outils de forensique

## Logs
- Windows Event Viewer
- Fichier /var/log/syslog sur Linux
- Logs de pare-feu et de serveur web

## Outils gratuits
- **Autopsy** : analyse de disque
- **Volatility** : analyse mémoire
- **Wireshark** : capture réseau
- **grep** / **findstr** : rechercher du texte

## Bonnes pratiques
- Toujours travailler sur une copie
- Conserver l'original intact
- Noter chaque étape

## Exemple simple
Copier un log suspect, puis chercher une adresse IP ou une date d'attaque.`,
        },
      ],
      questions: [
        {
          id: "q1",
          type: "qcu",
          question: "Que fait la forensique numérique ?",
          options: [
            "Tester les failles d'un site web",
            "Analyser des traces après un incident",
            "Écrire du code malveillant",
            "Créer des sauvegardes automatiques",
          ],
          correctAnswers: [1],
          explanation: "La forensique analyse les traces après un incident pour en comprendre l'origine.",
        },
        {
          id: "q2",
          type: "qcu",
          question: "Pourquoi ne doit-on pas modifier les preuves ?",
          options: [
            "Pour ne pas perdre la valeur légale ou l'intégrité des données",
            "Parce que c'est plus rapide",
            "Parce qu'on aime copier les fichiers",
            "Pour économiser de l'espace disque",
          ],
          correctAnswers: [0],
          explanation: "Modifier les preuves peut rendre l'analyse invalide et casser la chaîne de conservation.",
        },
        {
          id: "q3",
          type: "qcm",
          question: "Quelles actions font partie de la chaîne de conservation ? (plusieurs réponses)",
          options: [
            "Noter qui a examiné la preuve",
            "Modifier le fichier original",
            "Enregistrer la date et l'heure",
            "Stocker en lieu sûr",
          ],
          correctAnswers: [0, 2, 3],
          explanation: "Il faut noter chaque accès, la date/heure et stocker la preuve de manière sécurisée. Modifier l'original est interdit.",
        },
        {
          id: "q4",
          type: "qcu",
          question: "Quel outil peut analyser la mémoire d'un système ?",
          options: ["Wireshark", "Volatility", "Excel", "Notepad"],
          correctAnswers: [1],
          explanation: "Volatility est un outil spécialisé pour l'analyse de la mémoire vive.",
        },
        {
          id: "q5",
          type: "qcm",
          question: "Quelles données peuvent être des preuves en forensique ? (plusieurs réponses)",
          options: [
            "Logs système",
            "Historique du navigateur",
            "Captures du bureau",
            "Profil Facebook privé",
          ],
          correctAnswers: [0, 1, 2],
          explanation: "Logs, historique et captures d'écran peuvent être des preuves. Le profil Facebook privé n'est pas une preuve technique en soi.",
        },
      ],
      miniProject: {
        title: "Mini-projet : Collecte de traces",
        description: "S'exercer à collecter des preuves sans modifier l'original.",
        task: "Choisis un fichier journal sur ton système, copie-le dans un dossier sécurisé et note la date/heure de la copie.",
        submissionInstructions: "Envoyer le chemin du fichier source, le chemin de la copie et la note de conservation.",
      },
    },
    {
      id: "semaine-2",
      number: 2,
      title: "Semaine 2 : Analyse de logs",
      description: "Apprendre à lire les journaux et en extraire les événements importants.",
      lessons: [
        {
          id: "l1",
          title: "Logs système essentiels",
          theme: "Notion 1 — Ce que racontent les journaux",
          content: `# Logs système

Les logs sont des fichiers qui enregistrent des événements.

## Où les trouver
- Windows : Event Viewer
- Linux : /var/log/syslog, /var/log/auth.log
- Applications : fichiers spécifiques (Apache, nginx)

## Ce qu'on cherche
- Erreurs
- Connexions suspectes
- Tentatives de connexion échouées
- Comportement inhabituel

## Exemple
- 10 échecs de connexion en 1 minute
- Accès à une page d'administration sans connexion
- Redémarrage inattendu

## En cybersécurité
Les logs permettent de retracer une attaque et d'en comprendre la chronologie.`,
        },
        {
          id: "l2",
          title: "Requêtes simples avec grep / findstr",
          theme: "Notion 2 — Trouver une aiguille dans une botte de foin",
          content: `# Rechercher dans les logs

Les fichiers logs peuvent être très longs.

## Outil Linux : grep
~~~
grep 'Failed password' /var/log/auth.log
grep -i 'error' /var/log/syslog
~~~

## Outil Windows : findstr
~~~
findstr /i "error" C:\\Windows\\System32\\winevt\\Logs\\System.evtx
~~~

## Ce qu'on cherche
- Échecs de connexion
- IP suspectes
- Processus lancés
- Fichiers modifiés

## Conseil
Commence par des mots-clés simples, puis affine avec des dates ou des services spécifiques.`,
        },
        {
          id: "l3",
          title: "Identifier une attaque notable",
          theme: "Notion 3 — Comprendre les indices",
          content: `# Identifier une attaque

Une attaque laisse souvent des signes.

## Exemples d'indices
- Plusieurs échecs de connexion suivis d'un succès
- Commandes inhabituelles lancées par un utilisateur
- Fichiers modifiés à des heures bizarres
- Requêtes réseau vers des IP inconnues

## Exemple concret
- 02:10 : échec de connexion admin
- 02:12 : succès de connexion admin
- 02:13 : exécution d'une commande de téléchargement

## Pourquoi c'est important
En comprenant ces indices, tu peux dire : "Oui, il y a probablement eu une intrusion".`,
        },
      ],
      questions: [
        {
          id: "q1",
          type: "qcu",
          question: "Quel type d'information un log peut contenir ?",
          options: [
            "Requêtes réseau",
            "Heure d'une connexion",
            "Erreur d'application",
            "Toutes les réponses précédentes",
          ],
          correctAnswers: [3],
          explanation: "Les logs peuvent contenir des informations réseau, des heures et des erreurs.",
        },
        {
          id: "q2",
          type: "qcu",
          question: "Quel outil Linux permet de rechercher du texte dans un log ?",
          options: ["grep", "mkdir", "sudo", "chmod"],
          correctAnswers: [0],
          explanation: "grep permet de rechercher du texte dans des fichiers sur Linux.",
        },
        {
          id: "q3",
          type: "qcm",
          question: "Quels indices peuvent suggérer une attaque ? (plusieurs réponses)",
          options: [
            "Nombre élevé d'échecs de connexion",
            "Commande normale d'utilisateur",
            "Fichiers modifiés la nuit",
            "URL de réseau inconnu",
          ],
          correctAnswers: [0, 2, 3],
          explanation: "Ces signes sont typiques d'une activité suspecte. Une commande normale ne suffit pas.",
        },
        {
          id: "q4",
          type: "qcu",
          question: "Pourquoi commencer par découvrir des mots-clés dans les logs ?",
          options: [
            "Pour corrompre les données",
            "Pour trouver rapidement les événements importants",
            "Pour supprimer des fichiers",
            "Pour ralentir le système",
          ],
          correctAnswers: [1],
          explanation: "Les mots-clés aident à repérer rapidement des événements importants dans de grands fichiers.",
        },
        {
          id: "q5",
          type: "qcm",
          question: "Quelles actions sont bonnes en analyse de logs ? (plusieurs réponses)",
          options: [
            "Chercher des erreurs",
            "Ignorer complètement les logs",
            "Vérifier les tentatives de connexion",
            "Copier les logs originaux avant analyse",
          ],
          correctAnswers: [0, 2, 3],
          explanation: "Analyser les erreurs, les connexions suspectes et préserver l'original sont de bonnes pratiques.",
        },
      ],
      miniProject: {
        title: "Mini-projet : Analyse d'un log",
        description: "Lire un log et en extraire des événements suspects.",
        task: "Ouvre un log système de test. Recherche 3 entrées suspectes et note pourquoi elles te semblent suspectes.",
        submissionInstructions: "Document texte avec les 3 entrées et tes observations.",
      },
    },
    {
      id: "semaine-3",
      number: 3,
      title: "Semaine 3 : Analyse mémoire légère",
      description: "Découvrir les bases de l'analyse de la mémoire vive.",
      lessons: [
        {
          id: "l1",
          title: "Pourquoi analyser la mémoire ?",
          theme: "Notion 1 — Les traces en RAM",
          content: `# Analyse mémoire

La mémoire vive (RAM) contient les processus en cours et les données temporaires.

## Ce qu'on peut trouver
- Programmes en cours
- Informations de connexion
- Clés de chiffrement temporaires
- Processus malveillants

## Avantage
La RAM contient des informations qui disparaissent à l'arrêt du système.

## Limite
Elle n'est pas persistante. Il faut agir vite.

## Exemple
Un malware peut rester dans la mémoire sans laisser de trace sur le disque.

## En pratique
On prend une image mémoire, puis on l'analyse avec un outil spécialisé.`,
        },
        {
          id: "l2",
          title: "Outils simples de mémoire",
          theme: "Notion 2 — Volatility et captures",
          content: `# Volatility

Volatility est un outil pour analyser une image mémoire.

## Étapes générales
1. Capturer la mémoire (fichier image)
2. Identifier le système d'exploitation
3. Lister les processus
4. Chercher des connexions réseau
5. Analyser les DLL ou modules chargés

## Alternatives
- Autoruns
- Process Explorer
- Outils intégrés Windows

## Attention
Ne fais pas cela sur ta machine principale sans savoir ce que tu fais.

## Utilité
La mémoire peut révéler un programme malveillant actif qui n'est pas encore enregistré sur le disque.`,
        },
        {
          id: "l3",
          title: "Identifier un processus suspect",
          theme: "Notion 3 — Les signes d'un malware actif",
          content: `# Processus suspects

Un processus suspect peut être un programme malveillant.

## Ce qu'on observe
- Nom étrange ou inconnu
- Utilisation anormale du CPU
- Connexions réseau vers des IP inconnues
- Fichier exécutable dans un dossier inhabituel

## Exemple
Un processus nommé \`cmd.exe\` lancé depuis un dossier temporaire peut être suspect.

## Que faire ?
- Chercher le chemin du fichier
- Vérifier la signature numérique
- Comparer avec un processus légitime
- Ne pas tuer immédiatement sans comprendre

## En cybersécurité
Analyser les processus aide à identifier un attaquant actif sur le système.`,
        },
      ],
      questions: [
        {
          id: "q1",
          type: "qcu",
          question: "Pourquoi la mémoire vive est-elle importante en forensique ?",
          options: [
            "Elle contient des données qui disparaissent à l'arrêt du système",
            "Elle est toujours enregistrée sur le disque dur",
            "Elle est facile à modifier sans traces",
            "Elle ne contient jamais de malware",
          ],
          correctAnswers: [0],
          explanation: "La RAM contient des données temporaires précieuses qui disparaissent lors du redémarrage.",
        },
        {
          id: "q2",
          type: "qcm",
          question: "Quelles informations peut-on trouver dans la mémoire ? (plusieurs réponses)",
          options: [
            "Processus en cours",
            "Clés temporaires",
            "Identité de l'utilisateur connecté",
            "Le mot de passe du système enregistré sur le disque",
          ],
          correctAnswers: [0, 1, 2],
          explanation: "La mémoire contient les processus actifs, les clés temporaires et l'utilisateur connecté. Elle ne contient pas le mot de passe stocké sur le disque.",
        },
        {
          id: "q3",
          type: "qcu",
          question: "Quel outil est souvent utilisé pour analyser une image mémoire ?",
          options: ["Volatility", "Photoshop", "Chrome", "Microsoft Word"],
          correctAnswers: [0],
          explanation: "Volatility est un outil spécialisé pour l'analyse mémoire en forensique.",
        },
        {
          id: "q4",
          type: "qcu",
          question: "Quel signe peut indiquer un processus suspect ?",
          options: [
            "Nom de processus inhabituel",
            "Utilisation de CPU normale",
            "Chemin d'exécutable habituel",
            "Aucun trafic réseau",
          ],
          correctAnswers: [0],
          explanation: "Un nom de processus étrange ou inconnu est un signe d'activité suspecte.",
        },
        {
          id: "q5",
          type: "qcm",
          question: "Quelles précautions prendre avec une image mémoire ? (plusieurs réponses)",
          options: [
            "Travailler sur une copie",
            "Modifier directement l'original",
            "Documenter chaque action",
            "Faire l'analyse sur un système propre si possible",
          ],
          correctAnswers: [0, 2, 3],
          explanation: "Il faut analyser une copie, documenter l'action et utiliser de préférence un système propre.",
        },
      ],
      miniProject: {
        title: "Mini-projet : Examiner un processus",
        description: "Identifier un processus suspect et en expliquer la raison.",
        task: "Liste 3 processus actifs sur ton système et note si l'un d'eux te semble suspect. Explique pourquoi.",
        submissionInstructions: "Document texte avec 3 processus et ton analyse.",
      },
    },
    {
      id: "semaine-4",
      number: 4,
      title: "Semaine 4 : Réponse à incident",
      description: "Mettre en place une réaction simple après une intrusion.",
      lessons: [
        {
          id: "l1",
          title: "Étapes d'une réponse à incident",
          theme: "Notion 1 — Réagir vite et bien",
          content: `# Réponse à incident

La réponse à incident est le processus de réaction après une attaque.

## Étapes principales
1. Détection
2. Contention
3. Analyse
4. Éradication
5. Récupération
6. Retour d'expérience

## Exemple simple
- Détection : un log indique une attaque
- Contention : isoler la machine infectée
- Analyse : comprendre comment l'attaque a eu lieu
- Éradication : supprimer le malware
- Récupération : restaurer le système
- Retour d'expérience : améliorer la protection

## Pourquoi c'est important
Une bonne réponse limite les dégâts et empêche la réapparition.`,
        },
        {
          id: "l2",
          title: "Isolement d'un système compromis",
          theme: "Notion 2 — Couper l'accès",
          content: `# Isolement d'un système

Quand un système est compromis, il faut le séparer du réseau.

## Méthodes simples
- Débrancher le câble Ethernet
- Désactiver le Wi-Fi
- Isoler dans un VLAN séparé
- Ne pas éteindre immédiatement si on a besoin de preuves

## Pourquoi ne pas éteindre trop vite ?
Éteindre détruit certaines preuves en mémoire.

## Que faire en premier ?
- Copier les logs
- Capturer l'image mémoire si possible
- Isoler le système
- Noter les actions prises

## Objectif
Limiter les dégâts tout en conservant les informations pour l'analyse.`,
        },
        {
          id: "l3",
          title: "Retour d'expérience et amélioration",
          theme: "Notion 3 — Apprendre de l'incident",
          content: `# Améliorer après un incident

Chaque incident est une opportunité d'amélioration.

## Actions possibles
- Mettre à jour les logiciels
- Changer les mots de passe compromis
- Renforcer les configurations
- Réviser les sauvegardes
- Former les utilisateurs

## Rapport post-incident
- Qu'est-ce qui s'est passé ?
- Comment cela s'est produit ?
- Quelles mesures ont été prises ?
- Que faire pour l'avenir ?

## En cybersécurité
Un bon retour d'expérience réduit le risque de répétition et renforce la résilience.`,
        },
      ],
      questions: [
        {
          id: "q1",
          type: "qcu",
          question: "La première étape après avoir détecté une attaque est souvent :",
          options: [
            "Ignorer l'incident",
            "Isoler le système compromis",
            "Publier l'attaque sur les réseaux sociaux",
            "Éteindre le système sans sauvegarder quoi que ce soit",
          ],
          correctAnswers: [1],
          explanation: "Après une détection, il faut souvent isoler le système compromis pour limiter la propagation.",
        },
        {
          id: "q2",
          type: "qcm",
          question: "Quelles actions font partie d'une bonne réponse à incident ? (plusieurs réponses)",
          options: [
            "Analyser les logs",
            "Continuer à utiliser le système compromis activement",
            "Copier les preuves avant de les manipuler",
            "Améliorer les défenses après l'incident",
          ],
          correctAnswers: [0, 2, 3],
          explanation: "Analyser les logs, préserver les preuves et améliorer les défenses sont des étapes clés.",
        },
        {
          id: "q3",
          type: "qcu",
          question: "Pourquoi est-il parfois mieux de ne pas éteindre immédiatement un système compromis ?",
          options: [
            "Parce qu'il faut d'abord capturer des preuves en mémoire",
            "Parce que l'ordinateur est trop chaud",
            "Parce que l'incident va disparaître tout seul",
            "Parce que l'attaque devient plus forte",
          ],
          correctAnswers: [0],
          explanation: "Éteindre un système détruit la mémoire vive, qui peut contenir des preuves importantes.",
        },
        {
          id: "q4",
          type: "qcu",
          question: "Que signifie 'retour d'expérience' après un incident ?",
          options: [
            "Ignorer ce qui s'est passé",
            "Apprendre de l'incident et améliorer les défenses",
            "Récompenser l'attaquant",
            "Supprimer tous les logs",
          ],
          correctAnswers: [1],
          explanation: "Le retour d'expérience consiste à apprendre et à renforcer la sécurité pour éviter que cela se reproduise.",
        },
        {
          id: "q5",
          type: "qcm",
          question: "Quelles mesures sont utiles après une attaque ? (plusieurs réponses)",
          options: [
            "Changer les mots de passe compromis",
            "Mettre à jour les logiciels",
            "Publier les données confidentielles",
            "Renforcer les configurations"],
          correctAnswers: [0, 1, 3],
          explanation: "Changer les mots de passe, mettre à jour les logiciels et renforcer les configurations aident à réduire le risque futur.",
        },
      ],
      miniProject: {
        title: "Mini-projet : Plan de réponse simplifié",
        description: "Préparer un plan de réaction à un incident pour une petite infrastructure.",
        task: "Écris un plan court en 5 étapes pour réagir si une machine de ton laboratoire est compromise.",
        submissionInstructions: "Document texte avec les 5 étapes et une brève explication pour chacune.",
      },
    },
  ],
};
