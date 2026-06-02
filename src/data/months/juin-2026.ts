import type { MonthCourse } from "@/lib/types";

/**
 * JUIN 2026 - Découverte & Fondamentaux
 * Première étape : Les bases de l'informatique et la cybersécurité
 * Objectif: Comprendre le hardware, Internet, les réseaux et les principes de base de la cybersécurité.
 */
export const juin2026: MonthCourse = {
  id: "juin-2026",
  label: "Juin 2026",
  shortLabel: "Juin",
  theme: "Fondamentaux de l'informatique",
  description: "Premier mois : on pose les bases. Comprendre un ordinateur, un système d'exploitation, et l'environnement de travail d'un futur expert en réseaux et cybersécurité.",
  monthObjective: "Acquérir les bases en informatique, comprendre comment fonctionne un ordinateur et les principes de base de la cybersécurité.",
  available: true,
  weeks: [
    {
      id: "semaine-1",
      number: 1,
      title: "Semaine 1 : L'ordinateur et ses composants",
      description: "Comprendre la structure d'un ordinateur, le hardware et le software.",
      lessons: [
        {
          id: "l1",
          title: "Hardware vs Software",
          theme: "Notion 1 — Les deux mondes",
          content: `# Hardware vs Software

Un ordinateur, c'est deux univers indissociables.

## Le Hardware (matériel)
Tout ce qui est **physique** que tu peux toucher :
- Boîtier, écran, clavier
- Carte mère, disque dur, RAM, processeur
- Ventilateurs, alimentation

## Le Software (logiciel)
Tout ce qui est **numérique** que tu ne peux pas toucher :
- Système d'exploitation (Windows, Linux, macOS)
- Applications (navigateur, éditeur de texte)
- Fichiers et code

## L'analogie de la voiture
Imagine une voiture :
- **Hardware** = moteur, roues, carrosserie
- **Software** = conducteur et code de la route

**Sans hardware**, le software n'a rien sur quoi tourner.
**Sans software**, le hardware est un tas de métal inutile.

## Pourquoi c'est important en cybersécurité ?
Un hacker peut attaquer le hardware (virus USB, modification physique) ou le software (malware, virus informatique). Tu dois connaître les deux.`,
        },
        {
          id: "l2",
          title: "Le processeur (CPU)",
          theme: "Notion 2 — Le cerveau de l'ordinateur",
          content: `# Le CPU (Processeur)

Le CPU est le **cerveau** de la machine. C'est lui qui exécute toutes les instructions.

## Son rôle
Exécuter des instructions très rapidement :
- Des milliards d'opérations par seconde
- Gère la majorité des calculs

## Caractéristiques importantes

### Fréquence (GHz)
Nombre de cycles par seconde.
- 3 GHz = 3 milliards de cycles/seconde
- Plus c'est élevé, plus c'est rapide (en théorie)

### Nombre de cœurs
Sous-processeurs indépendants.
- 4 cœurs = peut faire 4 tâches lourdes en parallèle
- Plus de cœurs = meilleure performance pour les tâches parallèles

### Threads
Voies d'exécution simultanées par cœur.

## Marques principales
- **Intel** : Core i3/i5/i7/i9
- **AMD** : Ryzen 3/5/7/9
- **Apple** : M1/M2/M3 (pour Mac)

## Importance en cybersécurité
- Un bon CPU permet de lancer des **machines virtuelles** (VM) pour tester sans risque
- Nécessaire pour **chiffrer/déchiffrer** rapidement`,
        },
        {
          id: "l3",
          title: "Mémoire : RAM et Stockage",
          theme: "Notion 3 — Où sont stockées les données",
          content: `# La Mémoire

Il y a deux types de mémoire qu'on confond souvent.

## RAM (Mémoire vive)
- **Rapide** : ultra-rapide mais très cher
- **Volatile** : s'efface quand tu éteins l'ordinateur
- **Espace de travail** : c'est ton bureau
- **Capacité courante** : 8 Go (peu), 16 Go (confortable), 32 Go (professionnel)

Quand tu ouvres un programme, il se charge dans la RAM.

## Stockage (Mémoire persistante)
Reste même après extinction. Trois types :

### HDD (Disque dur mécanique)
- Lent
- Pas cher
- Capacité énorme (plusieurs To)

### SSD (Mémoire flash sur SATA)
- Rapide
- Plus cher que HDD
- Meilleure option qu'HDD

### NVMe (Ultra-rapide)
- SSD ultra-rapide
- Branché directement sur le bus PCIe
- Le plus rapide, le plus cher

## L'analogie
- **RAM** = ton bureau (tu y mets ce que tu utilises maintenant)
- **Stockage** = ton armoire (tu y ranges ce que tu utilises rarement)

## Importance en cybersécurité
Les data importantes doivent être sur du stockage **chiffré**. Si quelqu'un vole ton disque dur, tes données doivent être protégées.`,
        },
        {
          id: "l4",
          title: "Les Périphériques",
          theme: "Notion 4 — Ce qui se branche à l'ordinateur",
          content: `# Les Périphériques

Un périphérique, c'est tout ce qui se branche à l'ordinateur.

## Périphériques d'entrée
Envoient des données À l'ordinateur :
- Clavier, souris
- Microphone, webcam
- Scanner

## Périphériques de sortie
Reçoivent des données DE l'ordinateur :
- Écran, imprimante
- Haut-parleurs, casque audio

## Périphériques d'entrée/sortie
Font les deux :
- Écran tactile
- Disque dur externe
- Clé USB
- Carte réseau (Ethernet)

## Ports physiques courants
- **USB-A** : connecteur ancien (rectangulaire)
- **USB-C** : nouveau standard (réversible)
- **HDMI** : vidéo
- **DisplayPort** : vidéo haute performance
- **Jack audio** : pour le son
- **RJ45 (Ethernet)** : pour le réseau

## Attention en cybersécurité ⚠️
Une clé USB inconnue peut contenir un **malware**.

Attaque "Rubber Ducky" :
- Une clé USB programmée comme un clavier
- Elle tape des commandes malveillantes
- Danger réel : ne JAMAIS brancher une clé USB inconnue

**Règle d'or** : Ne branche que ce que tu connais.`,
        },
      ],
      questions: [
        {
          id: "q1",
          type: "qcu",
          question: "Quelle mémoire s'efface quand on éteint l'ordinateur ?",
          options: ["Le disque dur (HDD)", "La RAM", "Le SSD", "La clé USB"],
          correctAnswers: [1],
          explanation: "La RAM est volatile. Tout ce qu'elle contient disparaît à l'extinction de l'ordinateur.",
        },
        {
          id: "q2",
          type: "qcu",
          question: "Que signifie CPU ?",
          options: ["Computer Processing Unit", "Central Processing Unit", "Central Program Unit", "Core Power Unit"],
          correctAnswers: [1],
          explanation: "CPU = Central Processing Unit. C'est le processeur, le cerveau de l'ordinateur.",
        },
        {
          id: "q3",
          type: "qcm",
          question: "Parmi ces éléments, lesquels sont du HARDWARE ? (plusieurs réponses)",
          options: ["Windows 11", "Une carte mère", "Microsoft Word", "Une barrette de RAM"],
          correctAnswers: [1, 3],
          explanation: "Hardware = physique. La carte mère et la RAM sont du hardware. Windows et Word sont du software.",
        },
        {
          id: "q4",
          type: "qcu",
          question: "Quel type de stockage est le plus rapide ?",
          options: ["HDD", "SSD SATA", "NVMe", "Disquette"],
          correctAnswers: [2],
          explanation: "Le NVMe est le plus rapide car branché directement sur le bus PCIe.",
        },
        {
          id: "q5",
          type: "qcu",
          question: "Que faire avec une clé USB inconnue trouvée dans la rue ?",
          options: [
            "La brancher pour voir ce qu'elle contient",
            "Ne jamais la brancher, elle peut contenir un malware",
            "La brancher sur l'ordinateur d'un ami",
            "La formater puis l'utiliser",
          ],
          correctAnswers: [1],
          explanation: "Ne jamais brancher de support inconnu. Attaque connue : 'Rubber Ducky', où une clé USB tape des commandes malveillantes.",
        },
      ],
      miniProject: {
        title: "Mini-projet : Identifie ton ordinateur",
        description: "Découvre les caractéristiques techniques de ton ordinateur.",
        task: "Trouve et note : ton processeur (Intel/AMD), le nombre de cœurs, la RAM totale, le type de stockage (HDD/SSD/NVMe). Envoie une capture d'écran avec ces infos.",
        submissionInstructions: "Capture d'écran des propriétés système (Paramètres > Système sur Windows)",
      },
    },
    {
      id: "semaine-2",
      number: 2,
      title: "Semaine 2 : Les systèmes d'exploitation",
      description: "Comprendre ce que c'est un OS, les différences Windows/Linux/macOS.",
      lessons: [
        {
          id: "l1",
          title: "Qu'est-ce qu'un OS ?",
          theme: "Notion 1 — Le chef d'orchestre",
          content: `# Système d'exploitation (OS)

Un OS est le **chef d'orchestre** entre toi, les applications et le matériel.

## Ses missions principales
1. **Gérer le matériel** : CPU, RAM, disques, périphériques
2. **Lancer les programmes** : faire tourner les applications
3. **Gérer les fichiers** : créer, lire, supprimer
4. **Gérer les utilisateurs** : comptes et droits d'accès
5. **Sécuriser** : protéger l'accès aux ressources

## Analogie
Sans OS, tu devrais parler directement au CPU en **binaire**. Pas pratique du tout !

L'OS fait la traduction entre toi (interface graphique facile) et la machine (0 et 1).

## Les trois grandes familles

### Windows
- Fait par Microsoft
- 70% des PC personnels du monde
- Le plus répandu
- Cible n°1 des malwares (parce que le plus utilisé)

### macOS
- Fait par Apple
- Sur les Mac uniquement
- Basé sur Unix (cousin de Linux)
- Réputé plus sûr par défaut

### Linux
- Libre et open source
- Dominant sur les serveurs
- **LE choix des experts en cybersécurité**
- Gratuit

## Importance en cybersécurité
Chaque OS a ses forces et faiblesses. Les hackers ciblent surtout Windows parce que c'est le plus utilisé.`,
        },
        {
          id: "l2",
          title: "Windows",
          theme: "Notion 2 — L'OS grand public",
          content: `# Windows (Microsoft)

Le système d'exploitation le plus utilisé sur les ordinateurs personnels.

## Versions actuelles
- Windows 10 (ancien, mais encore utilisé)
- Windows 11 (actuel, avec la barre de tâches redessinée)

## Forces
- **Compatibilité énorme** : presque tous les logiciels tournent dessus
- **Interface facile** : beaucoup de gens la connaissent
- **Support large** : beaucoup de documentation

## Faiblesses (côté cybersécurité)
- **Cible n°1** des malwares (parce que 70% des gens l'utilisent)
- **Services nombreux** : beaucoup activés par défaut = surface d'attaque
- **Mises à jour** : parfois lourdes, peuvent casser des choses

## Composants clés
- **Explorateur de fichiers** : naviguer dans tes fichiers
- **Panneau de configuration / Paramètres** : configurer Windows
- **Gestionnaire des tâches** : voir les processus (Ctrl+Maj+Échap)
- **Invite de commandes (cmd)** : ligne de commande simple
- **PowerShell** : ligne de commande puissante

## Ligne de commande
Exemple : \`ipconfig\` pour voir ta configuration réseau
Exemple : \`tasklist\` pour voir les programmes en cours`,
        },
        {
          id: "l3",
          title: "Linux : l'OS du cyber",
          theme: "Notion 3 — Puissant et libre",
          content: `# Linux

Un système **libre** et **open source**. Si Windows est une voiture qu'on te vend clés en main, Linux est une voiture que tu peux démonter, modifier, reconstruire.

## Distributions Linux (distros)
Il existe plein de versions de Linux :

### Ubuntu
- La plus facile pour débuter
- Communauté grande
- Gratuit

### Debian
- La base de beaucoup d'autres
- Ultra stable
- Moins flashy qu'Ubuntu

### Fedora
- Moderne et à jour
- Plus proche du Linux "pur"

### Arch Linux
- Pour les experts
- Tu construis ton système
- Minimaliste

### **Kali Linux**
- **LA distro de la cybersécurité offensive**
- Pré-installée avec tous les outils de pentest
- C'est ce que tu vas utiliser en pratique

### Parrot OS
- Alternative à Kali
- Un peu plus "user-friendly"

## Pourquoi Linux en cybersécurité ?

1. **Open source** : on peut auditer le code (pas de backdoor caché)
2. **Léger** : tourne sur du matériel faible, parfait pour les **machines virtuelles** (VM)
3. **Ligne de commande puissante** : bash, shell scripting
4. **Outils présents** : la majorité des outils pentest tournent dessus
5. **Dominant sur serveurs** : apprendre Linux, c'est apprendre où vivent 90% des vrais systèmes
6. **Communauté large** : beaucoup d'aide disponible

## Le Terminal
C'est ta meilleure amie en cybersécurité. C'est plus rapide et plus puissant que l'interface graphique.

Exemple : \`ls\` pour lister les fichiers
Exemple : \`cat fichier.txt\` pour voir le contenu d'un fichier
Exemple : \`grep "texte" fichier.txt\` pour chercher du texte`,
        },
        {
          id: "l4",
          title: "Comparaison et choix",
          theme: "Notion 4 — Quel OS pour quoi ?",
          content: `# Choisir un OS

## Tableau comparatif rapide

| OS | Grand public | Serveur | Cybersécurité | Open source |
|----|---|---|---|---|
| Windows | ✅ Oui | ❌ Non | ⚠️ Cible | ❌ Non |
| macOS | ✅ Oui | ❌ Non | ❌ Rare | ❌ Non |
| Linux | ⚠️ Expert | ✅ Oui | ✅ **OUI** | ✅ Oui |

## Pour la cybersécurité

### Tu vas avoir besoin de
1. **Kali Linux** dans une machine virtuelle pour les tests
2. Peut-être **Ubuntu** pour apprendre Linux facilement
3. **Windows** parce que c'est le plus courant dans les entreprises

### L'idéal pour débuter
- Garder Windows comme OS principal (confortable)
- Installer **VirtualBox** (gratuit, logiciel de virtualisation)
- Créer une VM avec **Kali Linux** dedans
- Apprendre dans cette VM, sans risquer ton vrai système

## Concept important : Le noyau (Kernel)

Linux est en fait juste le **noyau** (le cœur). Ce qui change c'est tout ce qu'il y a autour.

- **Ubuntu** = Linux noyau + interface user-friendly
- **Kali** = Linux noyau + outils pentest
- **Debian** = Linux noyau + stabilité

Tous utilisent le même noyau Linux, mais l'expérience est différente.`,
        },
      ],
      questions: [
        {
          id: "q1",
          type: "qcu",
          question: "Quelle distribution Linux est spécialisée en cybersécurité offensive ?",
          options: ["Ubuntu", "Kali Linux", "Fedora", "Debian"],
          correctAnswers: [1],
          explanation: "Kali Linux est la distribution de référence pour le pentest et la cybersécurité offensive.",
        },
        {
          id: "q2",
          type: "qcu",
          question: "Quel raccourci ouvre le Gestionnaire des tâches sous Windows ?",
          options: ["Ctrl+Alt+Suppr", "Ctrl+Maj+Échap", "Alt+F4", "Win+R"],
          correctAnswers: [1],
          explanation: "Ctrl+Maj+Échap ouvre directement le Gestionnaire des tâches.",
        },
        {
          id: "q3",
          type: "qcm",
          question: "Lesquels sont des systèmes d'exploitation ? (plusieurs réponses)",
          options: ["Chrome", "Ubuntu", "macOS", "Word"],
          correctAnswers: [1, 2],
          explanation: "Ubuntu et macOS sont des OS. Chrome est un navigateur, Word est un logiciel de traitement de texte.",
        },
        {
          id: "q4",
          type: "qcu",
          question: "Qu'est-ce que le 'kernel' (noyau) ?",
          options: [
            "Un type de virus",
            "Le cœur du système d'exploitation",
            "Une marque d'ordinateur",
            "Un protocole réseau",
          ],
          correctAnswers: [1],
          explanation: "Le kernel est le noyau de l'OS : il gère directement le matériel et c'est le cœur de tout système Unix/Linux.",
        },
        {
          id: "q5",
          type: "qcu",
          question: "Pourquoi Linux est dominant en cybersécurité ?",
          options: [
            "Il est obligatoire par la loi",
            "Open source, léger, terminal puissant, outils pentest natifs",
            "Il est le plus joli",
            "Il coûte très cher",
          ],
          correctAnswers: [1],
          explanation: "Linux est open source (auditable), léger (idéal en VM), avec un terminal puissant (bash), et tous les outils cyber tournent dessus.",
        },
      ],
      miniProject: {
        title: "Mini-projet : Découvrir la ligne de commande",
        description: "Apprendre les bases du terminal.",
        task: "Sur Windows (PowerShell) ou Linux (Terminal) : exécute 'ipconfig' (ou 'ifconfig' sur Linux). Note ton adresse IP et ta passerelle par défaut. Envoie une capture.",
        submissionInstructions: "Capture d'écran du terminal avec la sortie de ipconfig/ifconfig",
      },
    },
    {
      id: "semaine-3",
      number: 3,
      title: "Semaine 3 : Réseaux et Internet",
      description: "Comment les ordinateurs communiquent, TCP/IP, adresses IP.",
      lessons: [
        {
          id: "l1",
          title: "Réseau et Internet : les bases",
          theme: "Notion 1 — Se parler",
          content: `# Réseaux et Internet

## Qu'est-ce qu'un réseau ?

Un **réseau**, c'est quand tu branches plusieurs ordinateurs ensemble pour qu'ils se parlent.

### Réseau local (LAN)
- Chez toi ou au bureau
- Ordinateurs, imprimantes, etc. connectés (câble ou WiFi)
- Portée : ta maison/ton bureau

### Internet
- Le plus grand réseau du monde
- Des millions de réseaux locaux connectés entre eux
- Portée : planétaire

## Comment ça marche ?

Les ordinateurs communiquent via des **signaux** :
- **Câble Ethernet** : signal électrique dans un câble (rapide, stable)
- **WiFi** : ondes radio (moins rapide, pratique)

## Adresse IP

Chaque ordinateur a une **adresse IP** unique, comme une adresse postale.

Format : \`192.168.1.1\` (four nombres entre 0 et 255)

### IPv4 (l'ancien standard)
- Format : \`X.X.X.X\` (4 nombres)
- Exemple : \`192.168.1.5\`
- Limite : il n'y a que 4 milliards d'adresses possibles

### IPv6 (le nouveau standard)
- Format : hexadécimal plus compliqué
- Exemple : \`2001:0db8:85a3::8a2e:0370:7334\`
- Pratiquement illimité

## Adresses IP spéciales

### 192.168.x.x
- **Adresse privée** : utilisée sur ton réseau local
- Ne fonctionne QUE chez toi

### 8.8.8.8
- Adresse publique (DNS Google)
- Accessible de partout sur Internet

### 127.0.0.1
- Adresse **localhost** (ton propre ordinateur)
- Pour tester en local`,
        },
        {
          id: "l2",
          title: "TCP/IP : le protocole universel",
          theme: "Notion 2 — Le langage des ordinateurs",
          content: `# TCP/IP

C'est le protocole universel qu'utilisent tous les ordinateurs pour se parler sur Internet.

## TCP (Transmission Control Protocol)

Le **protocole fiable**.

- Vérifie que les données arrivent sans erreur
- Réessaye si quelque chose est perdu
- Plus lent mais sûr
- Utilisé pour : email, web, transfert de fichiers

## UDP (User Datagram Protocol)

Le **protocole rapide**.

- Envoie les données sans vérifier
- Rapide
- Si c'est perdu, tant pis
- Utilisé pour : vidéo streaming, appels vidéo, jeux

## Analogie

**TCP** : envoyer une lettre recommandée (lent mais fiable)
**UDP** : crier dans la rue (rapide mais personne ne garantit que ton message arrive)

## Ports

Chaque service sur un ordinateur utilise un **port** (numéro de 0 à 65535).

### Ports courants
- **Port 80** : HTTP (web non-sécurisé)
- **Port 443** : HTTPS (web sécurisé)
- **Port 22** : SSH (accès distant sécurisé)
- **Port 21** : FTP (transfert de fichiers)
- **Port 25** : SMTP (envoyer des emails)
- **Port 53** : DNS (résolution de noms)

Analogie : l'adresse IP est ton adresse postale, le port est le numéro de l'appartement.`,
        },
        {
          id: "l3",
          title: "DNS : trouver les sites web",
          theme: "Notion 3 — De google.com à 142.250.185.46",
          content: `# DNS (Domain Name System)

Comment ton navigateur trouve www.google.com quand tu tapes cette adresse ?

## Le problème

Tu sais que Google c'est facile à retenir : \`google.com\`

Mais les ordinateurs ne comprennent que les chiffres : \`142.250.185.46\`

Comment faire la traduction ?

## La solution : DNS

Le DNS est comme un **annuaire téléphonique d'Internet**.

Tu demandes : "Où se trouve google.com ?"
DNS répond : "C'est à 142.250.185.46"

## Comment ça marche

1. Tu tapes \`google.com\` dans ton navigateur
2. Ton ordinateur demande au serveur DNS : "C'est où google.com ?"
3. DNS répond : "192.168.1.1" (ou une autre adresse)
4. Ton navigateur se connecte à cette adresse
5. Et tu vois Google !

## DNS publics gratuits

- **8.8.8.8** : DNS de Google
- **1.1.1.1** : DNS de Cloudflare
- **208.67.222.222** : DNS OpenDNS

## En cybersécurité

Les hackers peuvent faire du **DNS poisoning** : mentir et te rediriger vers un site fake.

Exemple : tu tapes "facebook.com" mais DNS te redirige vers un site fake qui récupère ton mot de passe.

**Protection** : utilise un DNS de confiance et https:// sur les sites sensibles.`,
        },
        {
          id: "l4",
          title: "Sécurité des réseaux : premières notions",
          theme: "Notion 4 — Protéger la communication",
          content: `# Sécurité des réseaux

## Chiffrement (Encryption)

Quand tu parles sur Internet, il faut que personne d'autre ne lise.

### HTTPS (HTTP Sécurisé)
- Les données sont **chiffrées**
- Personne ne peut les lire même s'il intercepte
- Regarde la barre d'adresse : un cadenas = HTTPS ✅

### HTTP (Non sécurisé)
- Les données voyagent en clair
- N'importe qui sur le réseau peut les lire
- Pas de cadenas : ❌ DANGER

**Règle** : Utilise HTTPS pour les sites sensibles (email, banque, réseaux sociaux).

## Pare-feu (Firewall)

Un pare-feu est une barrière qui contrôle le trafic réseau.

- Laisse passer le trafic de confiance
- Bloque le trafic suspecte

### Pare-feu sur Windows
- Intégré et activé par défaut
- Protège ton ordinateur

### Pare-feu sur le réseau
- À l'entrée d'une entreprise
- Protège tout le réseau

## VPN (Virtual Private Network)

Un **tunnel sécurisé** sur Internet.

Quand tu utilises un VPN :
- Ton trafic est chiffré
- On voit la destination du VPN, pas les sites que tu visites
- Utile en WiFi public (café, gare)

Analogie : au lieu d'envoyer une lettre ouverte, tu la mets dans une boîte fermée.

## WiFi sécurisé

### WEP (ancien, pas sûr)
- Très facile à casser
- Ne plus utiliser

### WPA2 (sûr)
- Actuellement la norme
- Difficile à casser

### WPA3 (très sûr)
- Nouveau standard
- Encore meilleur que WPA2

**Pour ton WiFi perso** : utilise WPA2 ou WPA3 avec un mot de passe long.`,
        },
      ],
      questions: [
        {
          id: "q1",
          type: "qcu",
          question: "Quelle adresse IP est privée (locale) ?",
          options: ["8.8.8.8", "192.168.1.5", "142.250.185.46", "1.1.1.1"],
          correctAnswers: [1],
          explanation: "Les adresses 192.168.x.x et 10.x.x.x sont privées et ne fonctionnent que sur un réseau local.",
        },
        {
          id: "q2",
          type: "qcu",
          question: "Quel protocole est plus rapide mais moins fiable ?",
          options: ["TCP", "UDP", "DNS", "HTTP"],
          correctAnswers: [1],
          explanation: "UDP est rapide mais ne garantit pas la livraison. TCP est plus lent mais fiable.",
        },
        {
          id: "q3",
          type: "qcm",
          question: "Quels ports sont courants ? (plusieurs réponses)",
          options: ["Port 80 (HTTP)", "Port 443 (HTTPS)", "Port 22 (SSH)", "Port 9000 (aléatoire)"],
          correctAnswers: [0, 1, 2],
          explanation: "Port 80, 443 et 22 sont des ports standards bien connus. 9000 n'est pas standard.",
        },
        {
          id: "q4",
          type: "qcu",
          question: "À quoi sert le DNS ?",
          options: [
            "Chiffrer les données",
            "Traduire les noms de domaine en adresses IP",
            "Bloquer les virus",
            "Accélérer Internet",
          ],
          correctAnswers: [1],
          explanation: "DNS traduit google.com en 142.250.185.46 et c'est comme ça que tu accèdes aux sites.",
        },
        {
          id: "q5",
          type: "qcu",
          question: "Quel indicateur visuel te dit que ta connexion est sécurisée ?",
          options: ["URL en bleu", "Un cadenas dans la barre d'adresse", "Une barre verte", "Rien en particulier"],
          correctAnswers: [1],
          explanation: "Le cadenas indique que le site utilise HTTPS, donc la connexion est chiffrée.",
        },
      ],
      miniProject: {
        title: "Mini-projet : Utiliser des outils réseau",
        description: "Découvrir la topologie de ton réseau.",
        task: "Ouvre PowerShell/Terminal et exécute : 'ipconfig' (Windows) ou 'ifconfig' (Linux). Puis 'ping google.com' pour tester la connexion. Capture et note : ton adresse IP locale, ta passerelle, le temps de réponse du ping.",
        submissionInstructions: "Capture d'écran avec les deux commandes exécutées",
      },
    },
    {
      id: "semaine-4",
      number: 4,
      title: "Semaine 4 : Premiers pas en cybersécurité",
      description: "Principes de base de la cybersécurité, menaces courantes.",
      lessons: [
        {
          id: "l1",
          title: "Qu'est-ce que la cybersécurité ?",
          theme: "Notion 1 — Protéger ses données",
          content: `# La Cybersécurité

## Définition simple

La cybersécurité, c'est protéger tes données et tes systèmes contre les attaques informatiques.

## Les trois piliers

### 1. CIA
- **Confidentialité** : personne d'autre ne peut lire
- **Intégrité** : les données ne sont pas modifiées
- **Disponibilité** : les données sont accessibles quand tu en as besoin

### 2. Qui attaque ?

- **Cybercriminels** : volent ton argent ou tes données
- **Hacktivistes** : utilisent la cyberattaque pour une cause politique
- **Gouvernements** : espionnent d'autres pays
- **Entreprises concurrentes** : espionnent la concurrence
- **Employés malheureux** : revendent les données
- **Individus malveillants** : juste pour s'amuser

### 3. Pourquoi attaquer ?

- **Argent** : ransomware, vol de données sensibles
- **Données** : vol d'identité, informations personnelles
- **Pouvoir** : prendre le contrôle de systèmes importants
- **Politique** : saboter des gouvernements ou entreprises

## En 2026

Les cyberattaques coûtent aux entreprises **des milliards d'euros par an**.

Une grosse attaque peut :
- Paralyser une entreprise pendant des semaines
- Voler les données de millions de clients
- Coûter des millions en rançon (ransomware)`,
        },
        {
          id: "l2",
          title: "Menaces courantes",
          theme: "Notion 2 — Reconnaître le danger",
          content: `# Les menaces courantes

## Virus et Malware

### Virus
- Code malveillant qui se copie lui-même
- S'attache à d'autres fichiers
- Se propage quand tu partages des fichiers

### Malware (logiciel malveillant)
- Terme général pour tout code malveillant
- Virus, vers, ransomware, etc.

### Ransomware (rançongiciel)
- Te chiffre tes fichiers
- Demande de l'argent pour les récupérer
- Très dangereux et courant

## Phishing

Technique pour te faire donner tes infos sensibles.

### Email de phishing
- Faux email qui prétend venir de ta banque
- Te demande de cliquer sur un lien
- Le lien te redirige vers un site fake
- Tu rentres ton login/password
- Le hacker le récupère

**Protection** : vérifie l'adresse email, les liens, la grammaire.

## Social Engineering

Manipuler une personne pour qu'elle donne des infos sensibles.

### Exemple
- Attaquant appelle la support IT en prétendant être un employé
- Dit qu'il a oublié son password
- Support IT lui réinitialise le password
- Attaquant se connecte

**Protection** : être méfiant, vérifier les identités, ne pas donner d'infos sensibles au téléphone.

## SQL Injection

Attaque sur des sites web mal protégés.

- Tu rentres du code malveillant dans un formulaire
- Le serveur exécute ce code
- Tu peux accéder à la base de données

**Protection** : les sites sérieux sont protégés contre ça.

## Brute Force

Essayer tous les passwords possibles jusqu'à trouver le bon.

Exemple : essayer "abc123", "abc124", etc.

**Protection** : utiliser un password fort et long (8+ caractères, majuscules, minuscules, chiffres, symboles)`,
        },
        {
          id: "l3",
          title: "Bonnes pratiques de sécurité",
          theme: "Notion 3 — Comment se protéger",
          content: `# Bonnes pratiques

## Mots de passe

### Comment créer un bon password

- **Long** : au moins 12 caractères
- **Complexe** : majuscules, minuscules, chiffres, symboles
- **Unique** : un password différent par site
- **Imprévisible** : pas de "password123" ou ta date de naissance

### Exemple de bon password
\`M!9xK2@pR5$vL1#Q\`

### Gestionnaire de mots de passe

Utilise un **gestionnaire de passwords** pour en retenir beaucoup.

Exemples : Bitwarden (gratuit), LastPass, 1Password

## Authentification à deux facteurs (2FA)

Après avoir entré ton password, on te demande une deuxième preuve.

### Formes de 2FA
- **SMS** : code envoyé par SMS
- **Email** : code envoyé par email
- **App d'authentification** : Google Authenticator, Authy
- **Clé USB** : clé de sécurité physique

**Active le 2FA** sur : email, réseaux sociaux, banque.

## Mises à jour

Les hackers exploitent les **failles de sécurité** dans les logiciels.

Quand une faille est découverte, les éditeurs libèrent une **mise à jour** pour la corriger.

**Toujours mettre à jour** :
- OS (Windows, Linux)
- Navigateur
- Applications importantes

## Antivirus et pare-feu

### Antivirus
- Détecte et supprime les malwares
- Windows Defender (gratuit, intégré à Windows) c'est correct
- Autres : Avast, Kaspersky, ESET

### Pare-feu
- Bloque le trafic suspect
- Windows Firewall est activé par défaut
- Keep it on

## Sauvegarde

### Règle de 3-2-1
- **3** copies de tes données
- **2** supports différents
- **1** copie hors-site (cloud ou disque externe)

Pourquoi ? En cas de ransomware, tu peux récupérer de la sauvegarde.

## Phishing et arnaque

### Signes d'alerte
- Email pas de ton entreprise/banque
- Grammaire bizarre
- Te demande un password ou argent
- Lien suspecte

**Action** : ne clique pas, signale le spam

## Sur Internet en général

- Ne descends pas de fichiers en .exe de sources inconnues
- Ne clic pas sur des links bizarres
- Utilise HTTPS (cadenas)
- Sois méfiant en WiFi public
- Utilise un VPN en WiFi public`,
        },
        {
          id: "l4",
          title: "Ton rôle dans la cybersécurité",
          theme: "Notion 4 — L'humain, le chaînon faible",
          content: `# L'humain : le chaînon faible

## Statistics

80% des cyberattaques réussies commencent par du **phishing**.

Pourquoi ? Parce que hacker un humain est plus facile que hacker une machine.

## Responsabilité personnelle

En tant que futur pro en cybersécurité, tu dois être irréprochable.

### À faire
- Utiliser des passwords forts
- Activer le 2FA
- Faire des sauvegardes régulières
- Vérifier les emails suspects
- Lire les termes et conditions (au moins les parts critiques)
- Signaler les problèmes de sécurité

### À ne pas faire
- Partager des passwords
- Écrire ton password sur un post-it
- Cliquer sur des liens bizarres
- Télécharger des fichiers suspects
- Utiliser le même password partout
- Brancher des clés USB inconnues

## En entreprise

Si tu travailles en cybersécurité, tu vas protéger les données des autres.

**C'est une responsabilité énorme**.

Une erreur peut coûter des millions à l'entreprise et affecter des millions de gens.

## L'éthique

En cybersécurité, l'éthique est crucial.

- **Pentest légal** : seulement avec permission écrite
- **Bug bounty** : signaler les failles responsablement
- **Pas de doxing** : ne publie pas les infos perso des gens
- **Pas d'attaque** : utilise tes compétences légalement

## Ton chemin

La cybersécurité c'est :
- Apprendre continuellement (le domaine évolue vite)
- Pratiquer (pas juste la théorie)
- Rester éthique
- Partager le savoir

Bienvenue à bord ! 🚀`,
        },
      ],
      questions: [
        {
          id: "q1",
          type: "qcu",
          question: "Quel est le pilier CIA de la cybersécurité qui signifie 'personne ne peut lire tes données' ?",
          options: ["Intégrité", "Confidentialité", "Disponibilité", "Authenticité"],
          correctAnswers: [1],
          explanation: "Confidentialité = personne d'autre ne peut lire. Intégrité = données pas modifiées. Disponibilité = données accessibles.",
        },
        {
          id: "q2",
          type: "qcu",
          question: "Quel type de malware chiffre tes fichiers et demande une rançon ?",
          options: ["Virus", "Vers", "Ransomware", "Trojan"],
          correctAnswers: [2],
          explanation: "Ransomware chiffre les fichiers et demande de l'argent. C'est l'une des menaces les plus coûteuses en 2026.",
        },
        {
          id: "q3",
          type: "qcm",
          question: "Éléments d'un password fort ? (plusieurs réponses)",
          options: [
            "Au moins 12 caractères",
            "Majuscules et minuscules",
            "Symboles et chiffres",
            "Contient ton prénom",
          ],
          correctAnswers: [0, 1, 2],
          explanation: "Un bon password est long, complexe et unique. Ne mets JAMAIS d'infos personnelles prévisibles.",
        },
        {
          id: "q4",
          type: "qcu",
          question: "Quel pourcentage des cyberattaques commencent par du phishing ?",
          options: ["20%", "50%", "80%", "5%"],
          correctAnswers: [2],
          explanation: "Environ 80% commencent par phishing. L'humain est le chaînon faible.",
        },
        {
          id: "q5",
          type: "qcu",
          question: "Qu'est-ce que l'authentification à deux facteurs ?",
          options: [
            "Utiliser deux passwords",
            "Vérifier ton identité deux fois",
            "Un password + une seconde preuve (SMS, app)",
            "Deux ordinateurs différents",
          ],
          correctAnswers: [2],
          explanation: "2FA = password + une autre preuve (code SMS, app, clé USB). Plus sûr que juste un password.",
        },
      ],
      miniProject: {
        title: "Mini-projet : Audit de ta sécurité personnelle",
        description: "Évalue ta propre sécurité informatique.",
        task: "Réponds à ce checklist : utilises-tu des passwords forts ? Un gestionnaire de passwords ? 2FA sur email/réseaux sociaux ? Tu fais des sauvegardes ? Un antivirus actif ? Envoie le checklist complété avec tes réponses.",
        submissionInstructions: "Colle tes réponses directement dans le corps de l'email et confirme‑moi que tu as bien vérifié tout cela",
      },
    },
  ],
};
