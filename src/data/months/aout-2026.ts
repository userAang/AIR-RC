import type { MonthCourse } from "@/lib/types";

/**
 * AOÛT 2026 - Menaces quotidiennes
 * Troisième mois : Les attaques courantes et comment s'en protéger
 * Objectif: Reconnaître et éviter les menaces courantes (virus, phishing, escroqueries).
 */
export const aout2026: MonthCourse = {
  id: "aout-2026",
  label: "Août 2026",
  shortLabel: "Août",
  theme: "Menaces quotidiennes",
  description: "Troisième mois : apprendre à reconnaître les menaces courantes, les attaques par phishing, les arnaqueries, et les bonnes pratiques pour rester en sécurité.",
  monthObjective: "Identifier et éviter les menaces courantes, comprendre comment les cybercriminels opèrent.",
  available: true,
  weeks: [
    {
      id: "semaine-1",
      number: 1,
      title: "Semaine 1 : Virus et malwares",
      description: "Types de malveillances et comment ne pas les attraper.",
      lessons: [
        {
          id: "l1",
          title: "Types de malwares",
          theme: "Notion 1 — Les ennemis numérique",
          content: `# Types de Malwares

## Malware : définition générale

Un **malware** (logiciel malveillant) est un programme conçu pour causer du mal.

Catégories principales : virus, vers, trojans, ransomware, spyware, adware.

## Virus

Un **virus** est un code qui se **reproduit et se propage** en s'attachant à d'autres fichiers.

### Caractéristiques
- Se copie lui-même
- Se propage quand tu partages des fichiers
- Peut endommager tes données ou ralentir l'ordinateur
- Nécessite une action pour se déclencher (ouvrir un fichier)

### Exemples historiques
- **ILOVEYOU** (2000) : infecté 50 millions de PC en 24h
- **Melissa** (1999) : se propageait par email

### Aujourd'hui
Les vrais virus sont rares. La plupart des malwares modernes sont des trojans ou ransomwares.

## Vers (Worms)

Un **ver** est comme un virus mais se propage **tout seul** sans avoir besoin de s'attacher à un fichier.

### Caractéristiques
- Se propage automatiquement sur le réseau
- Peut créer des trous dans la sécurité
- Se multiplie rapidement

### Exemple
- **Conficker** (2008) : infecté des millions de PC, créait un botnet

## Trojans (Chevaux de Troie)

Un **trojan** prétend être un programme utile mais cache un piège.

### Caractéristiques
- Prétend faire quelque chose d'utile
- Cache un programme malveillant
- Tu l'installes volontairement (mais trompé)
- Très courant aujourd'hui

### Exemples
- Faux téléchargeur de jeux
- Faux optimiseur de PC
- Faux player vidéo
- Faux patch de logiciel

Une fois installé, il peut :
- Te voter l'accès (backdoor)
- Télécharger d'autres malwares
- Te dérober tes fichiers
- Rendre ton PC zombie`,
        },
        {
          id: "l2",
          title: "Ransomware et autres menaces",
          theme: "Notion 2 — Les plus dangereux",
          content: `# Ransomware, Spyware, Botnet

## Ransomware (rançongiciel)

Un **ransomware** **chiffre tous tes fichiers** et te demande de l'argent pour les récupérer.

### Processus
1. Tu télécharges un fichier infecté
2. Le ransomware s'installe et se cache
3. Il chiffre tous tes fichiers importants
4. Un message apparaît : "Vos fichiers sont bloqués. Payez pour les récupérer."
5. Il demande du Bitcoin (monnaie anonyme)

### Dégâts
- Perte complète de tes données
- Si tu ne payes pas = données perdues
- Même si tu payes, pas garanti que tu récupères tes données

### Exemples courants
- **WannaCry** (2017) : attaqué 200,000 ordinateurs, demandait 300 USD par ordinateur
- **Ryuk** : cible les entreprises, demande des millions
- **LockBit** : très sophistiqué et courant maintenant

### Protection
- **Sauvegardes régulières** : la MEILLEURE protection
- Avoir une sauvegarde non connectée (externe, pas cloud)
- Antivirus maintenu à jour

## Spyware

Un **spyware** **regarde ce que tu fais** sans te le dire.

### Ce qu'il fait
- Enregistre tes frappes au clavier (keylogger)
- Capture tes screenshots
- Vole tes passwords
- Regarde tes emails
- Enregistre tes appels vidéo
- Te trade en temps réel

### Comment on l'attrape
- Malwares attachés à d'autres programmes
- Attachements email malveillants
- Sites web compromis

### Exemples
- **Pegasus** : spyware gouvernemental très sophistiqué
- **Predator** : utilisé pour surveiller des journalistes

## Adware

Un **adware** affiche des **publicités invasives**.

Moins dangereux qu'un virus mais très chiant.

### Caractéristiques
- Pop-ups incessants
- Redirige ton navigateur vers des sites pub
- Vend tes données à des annonceurs
- Ralentit l'ordinateur

## Botnet

Un **botnet** est une armée d'ordinateurs **zombies** contrôlés à distance.

### Processus
1. Tu es infecté par un malware
2. Tu deviens un "bot" (robot)
3. Le hacker contrôle ton PC à distance
4. Ton PC attaque d'autres systèmes sans que tu le saches

### Risques
- Ton PC envoie du spam
- Ton PC attaque des sites web
- Tu ne le sais pas
- Tes bandes passantes ralentis
- Tu peux être accusé des crimes du hacker`,
        },
        {
          id: "l3",
          title: "Détecter et éliminer les malwares",
          theme: "Notion 3 — Nettoyer son PC",
          content: `# Détecter et éliminer les malwares

## Signes que tu es infecté

- **Ralentissement extrême** : l'ordinateur devient très lent
- **Pop-ups aléatoires** : publicités qui apparaissent sans raison
- **Redirection de navigateur** : tu vas sur Google mais tu retrouves sur Bing
- **Fichiers manquants** : tes données disparaissent progressivement
- **Ventilateurs qui tournent** : le CPU est utilisé même au repos
- **Activité réseau anormale** : ton upload/download monte sans raison
- **Message de rançon** : ton écran est verrouillé

## Outils antivirus

### Windows Defender
- Gratuit, inclus avec Windows
- Protection basique OK
- Suffisant si tu es prudent

### Malwarebytes
- Très bon antimalware spécialisé
- Version gratuite : scans ponctuels
- Version payante : protection en temps réel
- Scannes profondément

### Kaspersky / ESET / Avast
- Antivirus commerciaux
- Bonne couverture
- Interface claire
- Version gratuite ou payante

## Nettoyer un PC infecté

### Si c'est léger
1. Télécharge Malwarebytes (sur un autre PC si c'est grave)
2. Lance le scan complet (peut prendre des heures)
3. Mets en quarantaine les menaces détectées

### Si c'est grave (ransomware)
1. **Éteins ton PC immédiatement** (débranchemanuelle si nécessaire)
2. Démarre en **Mode Sûr** (F8 ou Shift au démarrage)
3. Utilise une clé USB bootable antivirus
4. Scannes et nettoie
5. Si ça ne marche pas : réinstalle Windows

### Si c'est très grave
- Envisage une réinstallation complète
- Utilise une clé USB bootable (Windows ou Linux)
- Efface complètement le disque
- Réinstalle un OS propre

## Prévention (la meilleure défense)

- **Antivirus activé** toujours
- **Mises à jour** régulières
- **Télécharges** depuis des sources de confiance
- **Doutes** avant d'exécuter des fichiers
- **Emails suspects** : pas de clics, pas de downloads
- **Sauvegardes** régulières (3-2-1)`,
        },
      ],
      questions: [
        {
          id: "q1",
          type: "qcu",
          question: "Qu'est-ce qu'un virus informatique ?",
          options: [
            "Un programme utile qu'on peut casser",
            "Un code qui se reproduit et se propage",
            "Un type d'email",
            "Un problème de réseau",
          ],
          correctAnswers: [1],
          explanation: "Un virus se reproduit et se propage. Contrairement aux virus biologiques, c'est un code malveillant.",
        },
        {
          id: "q2",
          type: "qcu",
          question: "Quel est le ransomware le plus célèbre ?",
          options: ["Melissa", "WannaCry", "Conficker", "ILOVEYOU"],
          correctAnswers: [1],
          explanation: "WannaCry (2017) a attaqué 200,000+ ordinateurs en 24h et est l'un des ransomwares les plus destructeurs de tous les temps.",
        },
        {
          id: "q3",
          type: "qcm",
          question: "Lesquels sont des signes d'infection ? (plusieurs réponses)",
          options: [
            "Ralentissement extrême du PC",
            "Pop-ups aléatoires",
            "Augmentation de la vitesse",
            "Redirections de navigateur",
          ],
          correctAnswers: [0, 1, 3],
          explanation: "Ralentissement, pop-ups et redirections sont des signes d'infection. L'augmentation de vitesse non (ça n'existe pas).",
        },
        {
          id: "q4",
          type: "qcu",
          question: "Qu'est-ce qu'un Botnet ?",
          options: [
            "Un réseau de robots",
            "Une armée d'ordinateurs zombies contrôlés à distance",
            "Un type d'antivirus",
            "Une forme d'email",
          ],
          correctAnswers: [1],
          explanation: "Un botnet est une armée de PCs infectés qu'un hacker contrôle à distance. Ton PC peut faire partie sans que tu le saches.",
        },
        {
          id: "q5",
          type: "qcm",
          question: "Qu'est-ce qu'un Trojan ? (plusieurs réponses vraies)",
          options: [
            "Prétend être utile mais cache un piège",
            "Généralement installé volontairement (trompé)",
            "Très courant aujourd'hui",
            "C'est l'inverse d'un virus",
          ],
          correctAnswers: [0, 1, 2],
          explanation: "Un Trojan prétend être utile. Tu l'installes volontairement mais trompé. Très courant.",
        },
      ],
      miniProject: {
        title: "Mini-projet : Scan completo de sécurité",
        description: "Nettoie et sécurise ton ordinateur.",
        task: "1) Installe Malwarebytes (version gratuite). 2) Lance un scan complet (peut prendre 1-2h). 3) Mets en quarantaine les menaces détectées. 4) Active Windows Defender. 5) Fais un scan de Windows Defender aussi.",
        submissionInstructions: "Captures d'écran des deux scans complétés et du rapport de Malwarebytes.",
      },
    },
    {
      id: "semaine-2",
      number: 2,
      title: "Semaine 2 : Phishing et escroqueries",
      description: "Reconnaître les emails et sites d'arnaque.",
      lessons: [
        {
          id: "l1",
          title: "Qu'est-ce que le phishing ?",
          theme: "Notion 1 — L'hameçon numérique",
          content: `# Phishing (l'hameçonnage)

## Définition

Le **phishing** est une arnaque pour te faire rentrer tes identifiants sur un site fake.

"Phishing" vient de "fishing" (pêche). Le hacker te pêche comme un poisson.

## Le processus

1. **L'email** : tu reçois un email qui prétend venir de ta banque
2. **L'urgence** : il crée de la pression ("Agis maintenant !")
3. **Le lien** : il te donne un lien pour "vérifier ton compte"
4. **Le site fake** : le lien te redirige vers un site qui ressemble exactement à celui de ta banque
5. **Le vol** : tu rentres ton login/password
6. **L'attaque** : le hacker utilise tes identifiants pour te voler de l'argent

## Exemple concret

Email reçu :
"Bonjour,
Votre compte a été suspendu pour raison de sécurité. Cliquez ici pour réactiver votre compte.
[Lien suspect]
Cordialement,
Équipe Banque XYZ"

**Le problème** :
- L'adresse email n'est pas celle de la vraie banque
- La banque ne te demande JAMAIS des identifiants par email
- Le lien redirige vers un site fake

## Taux de succès

Les hackers utilisent le phishing parce que ça **marche vraiment**.

Même 1% des gens qui cliquent = des milliers de victimes.

Un email de phishing peut être envoyé à des millions de gens facilement.

## Variantes du phishing

### Spear Phishing
Phishing ciblé. Le hacker cherche des infos spécifiques sur toi, puis crée un email très personnalisé.

Exemple : email qui prétend venir de ton patron

### Clone Phishing
Tu reçois un email qui ressemble exactement à celui d'un service légitime, mais une lettre est changée dans l'URL.

Exemple : banque-fr.com au lieu de banque-fr.com

### Pharming
Manipulation du DNS pour te rediriger automatiquement vers un site fake.

Tu tapes google.com mais tu retrouves sur google.com-fake.ru`,
        },
        {
          id: "l2",
          title: "Reconnaître un phishing",
          theme: "Notion 2 — Repérer les faux",
          content: `# Comment reconnaître le phishing

## Signes d'alerte

### 1. L'adresse email
L'adresse expediteur semble suspecte.

Phishing : support@banque-123.com
Réel : support@banque.com

**À faire** : passe la souris sur l'adresse email pour voir l'adresse réelle.

### 2. Salutation générique
Un vrai email de ta banque utilise ton prénom.

Phishing : "Cher client"
Réel : "Cher Jean"

### 3. Fautes d'orthographe
Le phishing est fait à la va-vite.

"Virifier votre compt" (au lieu de "vérifier votre compte")

### 4. Lien suspect
L'URL du lien ne correspond pas.

Phishing : [Cliquez ici](http://banque-fake.com)
Réel : [Cliquez ici](https://banque.com)

**À faire** : passe la souris sur le lien pour voir l'URL réelle (pas le texte cliquable).

### 5. Urgence/Panique
"Agis maintenant !"
"Ton compte sera fermé !"
"Vérifie ta sécurité immédiatement !"

Les vraies entreprises ne créent pas de panique. C'est une tactique d'arnaque.

### 6. Pas de HTTPS/Cadenas
Quand tu cliques sur le lien, regarde la barre d'adresse.

Phishing : http://banque.com (pas de cadenas)
Réel : https://banque.com (cadenas visible)

### 7. Demande de données sensibles
Ta banque **NE TE DEMANDE JAMAIS** :
- Ton login
- Ton password
- Ton numéro de carte bancaire
- Ton code PIN

**Jamais, par email, SMS ou appel téléphonique.**

C'est une règle absolue.

### 8. Design pourri
Site laid, images cassées, texte mal aligné.

Les vrais sites sont professionnels.

## La règle d'or

**Ne clique JAMAIS sur un lien dans un email si tu doutes.**

À la place :
- Ouvre une nouvelle fenêtre de navigateur
- Tapes l'adresse manuellement (ou utilise tes favoris)
- Connecte-toi directement au site`,
        },
        {
          id: "l3",
          title: "Escroqueries et arnaqueries",
          theme: "Notion 3 — D'autres formes de tromperie",
          content: `# Escroqueries et arnaqueries

## Arnaque au prince nigérian

L'une des plus vieilles arnaqueries.

Email : "Bonjour, je suis un prince Nigerian et j'ai 10 millions $ coincés. Si tu m'aides à transférer cet argent, je te donne 1 million. Je ne te demande juste que ton numéro de compte bancaire et 100 € pour les frais."

**La réalité** : c'est un arnaqueur. Il n'y a pas de prince, pas d'argent. Il te vole tes coordonnées bancaires.

## Arnaque à la fausse entreprise

Tu reçois une offre d'emploi lucrative.

"Travail à domicile, 2000€/mois, pas d'expérience requise."

L'arnaqueur te demande une "caution" de 200€ pour "débuter".

Tu payes, puis il disparaît.

## Arnaque aux fausses livraisons

Prétexte : "Votre colis n'a pas pu être livré. Cliquez ici pour payer."

C'est du phishing : le lien te redirige vers un site fake.

## Arnaque aux fausses plateformes

Tu trouves un site qui propose d'acheter des bitcoins, des actions, etc.

Tu investis 1000€.

Le site était fake. Ton argent est parti.

Pire quand tu l'utilises via une vraie platforme (PayPal, virement) : impossible à récupérer.

## Arnaque au support technique

Pop-up : "Attention ! Votre ordinateur est infecté. Appelez ce numéro maintenant !"

Tu appelles. Le "technicien" te dit :
- "Laisse-moi accéder à ton PC"
- "Achète cet antivirus (qui n'existe pas)"

Il vole tes données ou ton argent.

## Protection contre les arnaqueries

- **Doutes ?** Google le nom de l'entreprise + "arnaque"
- **Trop beau pour être vrai ?** C'est probablement une arnaque
- **Te demande de l'argent d'avance ?** Arnaque
- **Anonyme/non vérifiable ?** Arnaque
- **Vérifies les avis** : Reddit, Trustpilot, etc.
- **Appel le service directement** : utilise un numéro que tu trouves toi-même, pas celui dans l'email`,
        },
      ],
      questions: [
        {
          id: "q1",
          type: "qcu",
          question: "Qu'est-ce que le phishing ?",
          options: [
            "Un type de virus",
            "Une arnaque pour voler tes identifiants via un site fake",
            "Un malware",
            "Un problème réseau",
          ],
          correctAnswers: [1],
          explanation: "Le phishing te fait rentrer tes données personnelles sur un site qui prétend être légitime mais ne l'est pas.",
        },
        {
          id: "q2",
          type: "qcm",
          question: "Quels sont les signes d'un phishing ? (plusieurs réponses)",
          options: [
            "Adresse email suspecte",
            "Demande urgente de rentrer tes données",
            "Fautes d'orthographe",
            "Site avec HTTPS et cadenas",
          ],
          correctAnswers: [0, 1, 2],
          explanation: "Adresse suspecte, urgence, fautes = phishing. HTTPS et cadenas = bon signe (mais pas garantie).",
        },
        {
          id: "q3",
          type: "qcu",
          question: "Ta banque te demande par email de rentrer ton mot de passe. Qu'est-ce que tu fais ?",
          options: [
            "Tu le rentres car c'est ta banque",
            "Tu l'ignores immédiatement, c'est du phishing",
            "Tu appelles ta banque d'abord",
            "Tu cliques sur le lien et vérifies",
          ],
          correctAnswers: [1],
          explanation: "Les banques NE DEMANDENT JAMAIS tes données sensibles par email. C'est toujours du phishing.",
        },
        {
          id: "q4",
          type: "qcm",
          question: "Comment vérifier un lien suspect ? (plusieurs réponses)",
          options: [
            "Passer la souris sur le lien pour voir l'URL réelle",
            "Vérifier que la barre d'adresse a https:// et un cadenas",
            "Cliquer dessus pour voir",
            "Taper l'adresse manuellement au lieu de cliquer",
          ],
          correctAnswers: [0, 1, 3],
          explanation: "Passe la souris (pas cliquer), vérifie HTTPS, ou tape l'URL toi-même. Ne clique jamais sur des liens suspects.",
        },
        {
          id: "q5",
          type: "qcm",
          question: "Qu'est-ce qui fait qu'une 'opportunité' est probablement une arnaque ? (plusieurs réponses)",
          options: [
            "C'est trop beau pour être vrai",
            "On te demande de l'argent d'avance",
            "C'est anonyme",
            "C'est d'une grande compagnie",
          ],
          correctAnswers: [0, 1, 2],
          explanation: "Trop beau, demande d'argent d'avance, anonyme = arnaque. Grande compagnie = moins probable (mais possible).",
        },
      ],
      miniProject: {
        title: "Mini-projet : Phishing test",
        description: "Teste tes connaissances en phishing en identifiant les faux emails.",
        task: "1) Cherche des screenshots d'emails de phishing en ligne (sites educatifs). 2) Identifie tous les signes d'alerte dans 5 emails. 3) Documente ce que tu as trouvé. 4) Écris ce qu'une vraie personne devrait faire.",
        submissionInstructions: "Document avec 5 analyses d'emails (signes d'alerte identifiés et action recommandée).",
      },
    },
    {
      id: "semaine-3",
      number: 3,
      title: "Semaine 3 : Prévention au quotidien",
      description: "Bonnes pratiques pour rester en sécurité tous les jours.",
      lessons: [
        {
          id: "l1",
          title: "Hygiène numérique",
          theme: "Notion 1 — Les gestes quotidiens",
          content: `# Hygiène numérique

## Qu'est-ce que c'est ?

L'hygiène numérique c'est les **bonnes pratiques** qu'on applique tous les jours pour rester sécurisé.

Comme se laver les mains pour éviter les microbes, tu appliques des mesures simples pour rester cybersécu.

## Contrôles réguliers

### Vérifie tes accès actifs

Une fois par mois, regarde avec quel appareil tu es connecté.

Gmail, Facebook, compte bancaire : "Mes appareils" ou "Connexions actives".

Y a-t-il un appareil que tu ne reconnais pas ? Déconnecte-le immédiatement.

### Vérifie ton historique

- Email : check les emails marqués comme "reçus"
- Réseaux sociaux : regarde les posts qu'on a fait
- Achats : regarde les commandes qu'on a faites

**Un changement suspect = quelqu'un d'autre accède à ton compte.**

### Mises à jour

- **OS** (Windows, macOS, Linux) : mets à jour IMMÉDIATEMENT
- **Navigateur** : mets à jour régulièrement
- **Applications importantes** : Office, VLC, etc.

Les mises à jour corrigent les failles de sécurité.

## Pratiques de base

### Utilise HTTPS et cadenas

Avant d'entrer des données, regarde le cadenas.

### Mots de passe
- Un gestionnaire de mots de passe
- Un password différent par site
- Passwords forts et longs

### 2FA
- Activé sur email, banque, réseaux sociaux
- Au moins SMS, mieux si app d'authentification

### Sauvegardes
- Règle 3-2-1
- Régulièrement (une fois par mois minimum)

### Antivirus
- Toujours actif
- Mises à jour régulières
- Scans mensuels`,
        },
        {
          id: "l2",
          title: "Comportement en ligne sûr",
          theme: "Notion 2 — Comment agir",
          content: `# Comportement en ligne sûr

## Sur les réseaux sociaux

### Partage avec prudence
- Pas de données personnelles
- Pas d'adresse, date de naissance, numéro de téléphone
- Pas de photos géolocalisées
- Pas de cris d'aide ("je suis en vacances, personne à la maison")

Tout ce que tu postes est **permanent**. Même effacé, une copie existe.

### Accepte les demandes en amis avec prudence
- Vérifie que tu reconnais la personne
- Regardes ses autres amis
- Si c'est une fille/garçon trop beau = probablement un arnaqueur

### Rapport/Block
Si quelqu'un t'harcelé, signale-le. Les réseaux sociaux prennent ça au sérieux.

## Sur le web en général

### Télécharges intelligemment
- Que des sources officielles
- Vérifies le site avant de télécharger
- Attention au faux "Download" (souvent des publicités)

### Attache d'emails
- Pas de fichiers suspects
- Pas de fichiers exécutables (.exe, .bat, .scr)
- Télécharge sur un dossier spécifique, pas le desktop

### Clics prudents
- Pas de lien aléatoire
- Pas de spam
- Pas de "Click here to win"

### Connexions publiques
- WiFi publique = danger
- Utilise un VPN
- Pas d'opération sensible (banking, email)

## Réponses à des situations courantes

### Un ami te demande de l'argent par email/message
- Appelle-le directement. C'est peut-être un phishing ou l'ami est hacké.

### Tu vois une offre trop belle
- Elle est sûrement fausse. La vraie vie n'est pas comme ça.

### On te demande un code/password
- NE DONNE JAMAIS. Pas même ton père/mère si tu reconnais pas la situation.

### Ton compte semble compromis
- Change le password IMMÉDIATEMENT
- Vérifie les accès actifs et déconnecte tout
- Contacte le support du service
- Lance un scan antivirus

### Tu cliques sur un lien suspect sans faire exprès
- Ferme le navigateur immédiatement
- Lance un scan antivirus
- Change ton password pour ce compte
- Monitore tes comptes`,
        },
        {
          id: "l3",
          title: "Protection sur différents appareils",
          theme: "Notion 3 — PC, téléphone, tablette",
          content: `# Sécurité sur tous tes appareils

## Ordinateur (Windows/Mac/Linux)

### Protections essentielles
- Antivirus activé
- Firewall activé
- Mises à jour régulières
- Compte utilisateur sans admin (pour le quotidien)

### À faire
- Scans antivirus réguliers
- Sauvegardes régulières
- Vérifies les autorisations des applications

### À ne pas faire
- Ne branches pas les clés USB inconnues
- Ne télécharges pas depuis des sites dodgy
- Ne cliques pas sur tout

## Téléphone (iPhone/Android)

### Protections essentielles
- Code PIN fort
- Reconnaissance faciale/empreinte digitale
- Mises à jour régulières
- Utilise le Google Play Store ou Apple App Store (pas d'apps "cracké")

### À faire
- Active la localisation pour pouvoir tracker ton téléphone
- Configure iCloud (iPhone) ou Google (Android)
- Vérifies les permissions des apps

### À ne pas faire
- Ne télécharges pas des apps de sources inconnues
- N'acceptes pas les permissions bizarres
- Ne te connectes pas à des WiFi publics sans VPN

### Sécurité des données
- Photos de confiance : Google Photos avec chiffrement
- Documents : Google Drive, Dropbox, OneDrive

## Tablette

Même règles que téléphone.

## Appareils IoT (Smart Home)

- Routeur WiFi : change le password par défaut
- Caméra de sécurité : password fort
- Enceinte connectée : vérifies les permissions

N'oublie pas : ce ne sont pas des jouets, c'est du matériel connecté à Internet.

## Gestion des mots de passe

Tous les appareils doivent avoir accès aux mêmes passwords.

Solution : gestionnaire de mots de passe cloud (Bitwarden, LastPass, 1Password).

Il se synchronise entre tous tes appareils.

## Chiffrement

Au minimum :
- PC : lecteur entier (BitLocker, LUKS)
- Téléphone : par défaut (chiffrement entièrement activé par défaut)
- Cloud : utilise des services chiffrés (ProtonMail, Tresorit)`,
        },
      ],
      questions: [
        {
          id: "q1",
          type: "qcu",
          question: "Qu'est-ce que l'hygiène numérique ?",
          options: [
            "Nettoyer ton écran",
            "Les bonnes pratiques quotidiennes pour rester cybersécu",
            "Un type d'antivirus",
            "Changer de mot de passe chaque jour",
          ],
          correctAnswers: [1],
          explanation: "L'hygiène numérique c'est un ensemble de bonnes pratiques comme mises à jour, sauvegardes, vérifications d'accès.",
        },
        {
          id: "q2",
          type: "qcm",
          question: "Qu'est-ce qu'on ne doit JAMAIS partager sur les réseaux sociaux ? (plusieurs réponses)",
          options: [
            "Photos de vacances",
            "Adresse personnelle",
            "Date de naissance",
            "Avis de film",
          ],
          correctAnswers: [1, 2],
          explanation: "Ne partage jamais adresse ou date de naissance. Photos de vacances et avis sont OK.",
        },
        {
          id: "q3",
          type: "qcu",
          question: "Ton ami te demande de l'argent par email. Qu'est-ce que tu fais ?",
          options: [
            "Tu lui envoies immédiatement",
            "Tu l'ignores",
            "Tu l'appelles directement pour vérifier",
            "Tu lui demandes par email des preuves",
          ],
          correctAnswers: [2],
          explanation: "Toujours appeler directement. C'est peut-être un phishing ou son compte est hacké.",
        },
        {
          id: "q4",
          type: "qcm",
          question: "Quelles protections devrais-tu avoir sur ton téléphone ? (plusieurs réponses)",
          options: [
            "Code PIN fort",
            "Reconnaissance faciale",
            "Mises à jour régulières",
            "Pas besoin de sécurité sur téléphone",
          ],
          correctAnswers: [0, 1, 2],
          explanation: "Le téléphone a besoin du même niveau de sécurité que le PC : verrous, recoonaissance, mises à jour.",
        },
        {
          id: "q5",
          type: "qcu",
          question: "Qu'est-ce qui protège le mieux sur un WiFi public ?",
          options: ["Firewall", "VPN", "Antivirus", "Mot de passe fort"],
          correctAnswers: [1],
          explanation: "Un VPN chiffre toute ta connexion. C'est essentiel sur WiFi public.",
        },
      ],
      miniProject: {
        title: "Mini-projet : Audit de ton hygiène numérique",
        description: "Évalue et améliore ta sécurité au quotidien.",
        task: "1) Crée une checklist de sécurité (OS à jour, antivirus actif, 2FA, etc.). 2) Évalue chacun de tes appareils. 3) Applique les améliorations manquantes. 4) Documente avant/après.",
        submissionInstructions: "Document avec checklist initiale et final, et captures d'écran des changements appliqués.",
      },
    },
    {
      id: "semaine-4",
      number: 4,
      title: "Semaine 4 : Réponse aux incidents",
      description: "Que faire si tu es victime d'une cyberattaque.",
      lessons: [
        {
          id: "l1",
          title: "Détecter une compromission",
          theme: "Notion 1 — Tu as un problème",
          content: `# Détecter une compromission

## Signes que ton compte est compromis

### Email/Réseaux sociaux
- Mot de passe changé (tu ne l'as pas changé)
- Emails reçus de "réinitialisation de mot de passe" (tu n'as pas demandé)
- Posts ou messages que tu n'as pas envoyé
- Amis ou contacts supprimés
- Paramètres changés

### Banque
- Transactions que tu n'as pas faites
- Montant manquant
- Cartes de crédit bloquées ou modifiées

### Ordinateur
- Ralentissement extrême
- Disque dur très actif
- Ventilateurs qui tournent
- Programmes inconnus en démarrage

## Actions immédiates

### Si c'est un compte
1. **Change ton password** immédiatement
2. **Active 2FA** si tu ne l'as pas
3. **Vérifies les accès actifs** et déconnecte tout
4. **Lance un scan antivirus** sur ton ordinateur
5. **Contacte le support** du service

### Si c'est ton ordinateur
1. **Débranche d'Internet** (débrancher le câble ou WiFi)
2. **Lance un scan antivirus** en mode sûr
3. Si c'est grave : réinstalle Windows
4. Changer tous les mots de passe (depuis un autre appareil)`,
        },
        {
          id: "l2",
          title: "Réponse aux incidents",
          theme: "Notion 2 — Récupération",
          content: `# Récupération après une compromission

## Ordre de priorité

### Étape 1 : Stoppe l'hémorragie
- Change les passwords
- Verrouille les comptes
- Arrête les transactions suspectes

### Étape 2 : Contiens les dégâts
- Scan antivirus complet
- Vérifies quels données ont été prises
- Contacte les services affectés

### Étape 3 : Nettoie
- Réinstalle si nécessaire
- Mets à jour tout
- Sécurise

### Étape 4 : Surveille
- Monitor tes comptes pour activité anormale
- Utilises haveibeenpwned.com régulièrement

## Ransomware

### Si tu es victime

**NE PAYE PAS si possible.**

Les statistiques montrent que payer n'aide que 50% du temps.

### Actions

1. **Déconnecte d'Internet immédiatement**
2. **Éteins l'ordinateur** (arrêt d'urgence si besoin)
3. **Attends** (les experts peuvent trouver une clé de déchiffrement gratis)
4. **Contacte la police** (pour le rapport)
5. **Restaure depuis sauvegarde** non-infectée (ta meilleure chance)

### Si tu as une sauvegarde
- Redémarres depuis une clé USB bootable
- Formates complètement le disque
- Restaures depuis la sauvegarde

### Si tu n'as pas de sauvegarde
- Lance un scan antivirus spécialisé
- Essaye haveibeenpwned pour voir si une clé existe
- Envisage payer la rançon (dernier recours, pas garanti)

## Vol d'identité

### Signes
- Courrier pour des dettes que tu n'as pas faites
- Comptes bancaires ouverts à ton nom
- Email de confirmations que tu n'as pas fait

### Actions immédiates
1. **Contacte ta banque** et les institutions
2. **Signals to Equifax/Experian/TransUnion** (agences de crédit)
3. **Dépose plainte** à la police
4. **Gèles ton crédit** pour éviter qu'on ouvre des comptes
5. **Monitore** pendant des années

## Appel/SMS suspect

### Si tu reçois un appel disant que ton compte est compromis
- **NE DONNE PAS d'infos**
- **Raccroche**
- **Appelle le numéro officiel** (pas celui dans l'appel)

Même si ça semble vrai, c'est une tactique d'arnaqueur.`,
        },
        {
          id: "l3",
          title: "Plan de récupération personnelle",
          theme: "Notion 3 — Prêt pour une crise",
          content: `# Plan de récupération d'urgence

## Préparation maintenant (avant le problème)

### Sauvegarde tes passwords de récupération

Pour chaque compte important, télécharge les codes de récupération.

Ces codes te permettent d'accéder à ton compte même si tu perds le 2FA.

Stocke-les :
- Imprimés dans un endroit sûr
- Dans un document chiffré
- Pas sur une sticky note !

### Liste de contacts d'urgence

Garde une liste avec :
- Numéro de ta banque
- Numéro de ton fournisseur d'email
- Numéro de la police locale
- Numéro du service des fraudes

Sur papier, pas juste ton téléphone (qui peut être volé).

### Teste ta sauvegarde

Une fois par mois, restaure depuis ta sauvegarde pour vérifier qu'elle fonctionne.

Ça sert à rien d'avoir une sauvegarde if tu ne peux pas la restaurer.

## En cas de crise : check-list

**Immédiatement (5 minutes)**
- [ ] Isole l'appareil compromis
- [ ] Contacte ta banque si c'est financier
- [ ] Change tes passwords critiques (depuis un autre appareil)

**Rapidement (30 minutes)**
- [ ] Lance scan antivirus sur tous tes appareils
- [ ] Vérifies tes comptes pour activité anormale
- [ ] Prépare la documentation pour la police (si nécessaire)

**Heures suivantes**
- [ ] Contacte chaque service affecté
- [ ] Activeor réduit les permissions sur tes comptes
- [ ] Restaure depuis sauvegarde si nécessaire

**Jours suivants**
- [ ] Monitor activité suspecte
- [ ] Changeers passwords de tout
- [ ] Lance scan antivirus profond
- [ ] Reinstale si vraiment grave

## Signaler à la police

Dans certains pays, tu peux signaler les cybercrimes :

**France** : plainte en ligne sur pre-plainte.police-nationale.fr

**Belgique** : Centre for Cybercrime (police fédérale)

**Suisse** : cybercrimes.ch

Utile pour :
- Avoir un rapport officiel
- Que la police enquête
- Réclamations d'assurance

## Ressources utiles

- **haveibeenpwned.com** : vérifies si tu as été leaké
- **Malwarebytes** : scan antimalware gratuit
- **Google Security Checkup** : audit de ton compte Google
- **Facebook Security Checkup** : audit de ton compte Facebook`,
        },
      ],
      questions: [
        {
          id: "q1",
          type: "qcu",
          question: "Qu'est-ce que tu dois faire IMMÉDIATEMENT si tu suspectes ton email compromis ?",
          options: [
            "Attendre et observer",
            "Contacter un ami pour de l'aide",
            "Changer ton mot de passe",
            "Éteindre l'ordinateur",
          ],
          correctAnswers: [2],
          explanation: "Change le mot de passe IMMÉDIATEMENT. Puis vérifies les accès actifs et lance un scan.",
        },
        {
          id: "q2",
          type: "qcu",
          question: "Si tu es victime d'un ransomware, qu'est-ce que tu dois faire d'abord ?",
          options: [
            "Payer immédiatement",
            "Déconnecter d'Internet",
            "Continuer ton travail normalement",
            "Attendre 24h",
          ],
          correctAnswers: [1],
          explanation: "Déconnecte d'Internet pour arrêter la propagation. Payer n'aide que 50% du temps.",
        },
        {
          id: "q3",
          type: "qcm",
          question: "Lequel(lesquels) sont des signes de compromission ? (plusieurs réponses)",
          options: [
            "Posts que tu n'as pas fait",
            "Transactions bancaires inconnues",
            "Ordinateur très lent",
            "Rien d'anormal",
          ],
          correctAnswers: [0, 1, 2],
          explanation: "Posts anormaux, transactions bizarres, ralentissement = tous les signes. 'Rien d'anormal' ne l'est pas.",
        },
        {
          id: "q4",
          type: "qcu",
          question: "À quoi servent les codes de récupération ?",
          options: [
            "À récupérer ton 2FA si tu perds ton téléphone",
            "À mettre à jour ton compte",
            "À partager avec des amis",
            "À rien de spécial",
          ],
          correctAnswers: [0],
          explanation: "Les codes de récupération te permettent d'accéder à ton compte même si tu perds le 2FA.",
        },
        {
          id: "q5",
          type: "qcm",
          question: "Qu'est-ce que tu devrais faire pour te préparer MAINTENANT ? (plusieurs réponses)",
          options: [
            "Télécharge tes codes de récupération",
            "Crée une liste de contacts d'urgence",
            "Teste ta sauvegarde",
            "Attends un problème avant d'agir",
          ],
          correctAnswers: [0, 1, 2],
          explanation: "Télécharge les codes, fais une liste de contacts, teste la sauvegarde. Ne attends pas une crise.",
        },
      ],
      miniProject: {
        title: "Mini-projet : Plan de crise personnel",
        description: "Crée un plan pour réagir à une cyberattaque.",
        task: "1) Crée une liste de contacts d'urgence (banque, email support, police). 2) Télécharge les codes de récupération de tes comptes importants. 3) Crée une check-list 'en cas de crise' avec les étapes et délais. 4) Teste ta sauvegarde.",
        submissionInstructions: "Document avec liste de contacts, codes sauvegardés (masqués), et check-list de crise.",
      },
    },
  ],
};
