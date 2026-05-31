import type { MonthCourse } from "@/lib/types";

/**
 * JUILLET 2026 - Données & Identités
 * Deuxième mois : Comment gérer ses données et protéger son identité
 * Objectif: Comprendre les fichiers, les comptes, les mots de passe et l'authentification.
 */
export const juillet2026: MonthCourse = {
  id: "juillet-2026",
  label: "Juillet 2026",
  shortLabel: "Juil",
  theme: "Données & Identités",
  description: "Deuxième mois : apprendre à gérer ses données, créer des comptes sécurisés, comprendre les mots de passe et l'authentification multi-facteurs.",
  monthObjective: "Maîtriser la gestion des fichiers, créer des identités numériques sécurisées et protéger son accès aux comptes.",
  available: true,
  weeks: [
    {
      id: "semaine-1",
      number: 1,
      title: "Semaine 1 : Fichiers et dossiers",
      description: "Comment organiser et sécuriser tes données.",
      lessons: [
        {
          id: "l1",
          title: "Système de fichiers",
          theme: "Notion 1 — L'organisation des données",
          content: `# Système de fichiers

## Qu'est-ce qu'un fichier ?

Un **fichier**, c'est un conteneur qui stocke des données.

Exemples :
- Document Word (.docx)
- Photo (.jpg, .png)
- Vidéo (.mp4)
- Programme (.exe, .app)
- Document texte (.txt)

## Extensions de fichiers

L'**extension** est les 3-4 lettres après le point.

- \`.txt\` = fichier texte simple
- \`.jpg\` = photo
- \`.exe\` = programme Windows
- \`.pdf\` = document PDF

L'extension dit à l'ordinateur "comment ouvrir ce fichier".

## Qu'est-ce qu'un dossier (répertoire) ?

Un **dossier** est un conteneur qui peut contenir d'autres fichiers ou dossiers.

C'est comme des tiroirs :
- Tiroir "Projets"
  - Tiroir "2024"
    - Tiroir "Janvier"
      - Fichier "rapport.pdf"

## Chemins de fichiers

Le **chemin** te dit où se trouve un fichier.

Exemple : \`C:\Users\Alice\Documents\projet\rapport.pdf\`

- \`C:\` = disque C:
- \`Users\` = dossier
- \`Alice\` = dossier (ton profil utilisateur)
- \`Documents\` = dossier
- \`projet\` = dossier
- \`rapport.pdf\` = fichier

## Cas sensibilité

Sur Windows : \`rapport.pdf\` et \`Rapport.pdf\` c'est pareil.

Sur Linux : ce sont des fichiers **différents** (la casse compte).

## En cybersécurité

Les fichiers sensibles doivent être :
- Bien organisés (facile à retrouver)
- Chiffrés (personne d'autre ne peut les lire)
- Sauvegardés (pas de perte accidentelle)`,
        },
        {
          id: "l2",
          title: "Permissions et accès",
          theme: "Notion 2 — Qui a le droit de faire quoi",
          content: `# Permissions et droits d'accès

## Qu'est-ce qu'une permission ?

Une **permission** dit qui peut faire quoi avec un fichier.

Exemple : peut-tu **lire** ce fichier ? Peux-tu le **modifier** ? Peux-tu l'**exécuter** ?

## Les trois permissions de base

### Lecture (Read)
- Tu peux voir le contenu du fichier
- Tu ne peux pas le modifier

### Écriture (Write)
- Tu peux modifier ou supprimer le fichier
- Implique aussi la lecture

### Exécution (Execute)
- Tu peux lancer le fichier (si c'est un programme)
- Sur des fichiers texte, c'est pas pertinent

## Utilisateurs et groupes

### Propriétaire (Owner)
Celui qui a créé le fichier.

### Groupe (Group)
Un groupe d'utilisateurs avec des droits similaires.

### Autres (Others)
Tous les autres utilisateurs.

## Exemple Windows

Clic-droit sur un fichier > Propriétés > Sécurité

Tu vois : qui peux lire ? Qui peux écrire ? Qui peux exécuter ?

## Exemple Linux

\`chmod 755 fichier.sh\`

- \`7\` = propriétaire peut tout faire (lecture + écriture + exécution)
- \`5\` = groupe peut lire et exécuter (pas écrire)
- \`5\` = autres peuvent lire et exécuter (pas écrire)

## En cybersécurité

Ne donne pas trop de permissions. Principe du **moindre privilège**.

Si quelqu'un compromise ton compte, il n'aura que les permissions de ce compte.`,
        },
        {
          id: "l3",
          title: "Chiffrement de fichiers",
          theme: "Notion 3 — Les données invisibles",
          content: `# Chiffrement de fichiers

## Qu'est-ce que le chiffrement ?

Le **chiffrement** transforme tes données en un format illisible.

**Avant chiffrement** : \`Je m'appelle Alice\`

**Après chiffrement** : \`K9mX#2pL$vQ@7rJ!B\`

Pour relire les données, tu dois les **déchiffrer** avec une **clé** (un mot de passe ou une clé mathématique).

## Pourquoi c'est important ?

Imagine quelqu'un te vole ton disque dur.

- **Sans chiffrement** : il peut lire tous tes fichiers
- **Avec chiffrement** : il ne peut rien lire

## Types de chiffrement

### Symétrique
Même clé pour chiffrer et déchiffrer.

- Rapide
- Facile à implémenter
- Mais comment partager la clé sans se faire voler ?

### Asymétrique
Deux clés : une **publique** (partager) et une **privée** (garder secret).

- Plus lent
- Utilisé pour les emails, SSH
- Sûr pour partager des infos

## Outils de chiffrement

### Windows
- **BitLocker** : chiffre tout le disque dur
- **EFS** : chiffre des fichiers individuels

### Linux
- **LUKS** : chiffre le disque dur
- **GPG** : chiffre des fichiers

### Portable
- **VeraCrypt** : chiffre un dossier ou disque externe
- **7-Zip** : crée des archives chiffrées

## En cybersécurité

**Toujours chiffrer** :
- Données sensibles (ID, médical)
- Données financières
- Données personnelles
- Disques durs externes

Pas besoin de chiffrer une liste d'idées publiques.`,
        },
      ],
      questions: [
        {
          id: "q1",
          type: "qcu",
          question: "Qu'est-ce qu'une extension de fichier ?",
          options: [
            "Un type de virus",
            "Les 3-4 lettres après le point qui indiquent le type de fichier",
            "Un dossier caché",
            "Une permission d'accès",
          ],
          correctAnswers: [1],
          explanation: "L'extension (.txt, .pdf, .exe) dit à l'ordinateur comment ouvrir et interpréter le fichier.",
        },
        {
          id: "q2",
          type: "qcm",
          question: "Parmi les permissions suivantes, laquelle(lesquelles) est/sont correcte(s) ? (plusieurs réponses)",
          options: [
            "Read = tu peux lire le fichier",
            "Write = tu peux modifier le fichier",
            "Execute = tu peux lancer un programme",
            "Delete = tu peux supprimer le fichier",
          ],
          correctAnswers: [0, 1, 2],
          explanation: "Read, Write et Execute sont les trois permissions de base. Delete n'est pas une permission de base (c'est inclus dans Write).",
        },
        {
          id: "q3",
          type: "qcu",
          question: "Qu'est-ce que le chiffrement ?",
          options: [
            "Un type de virus",
            "Transformer les données pour qu'elles soient illisibles sans clé",
            "Un dossier sécurisé",
            "Une protection antivirus",
          ],
          correctAnswers: [1],
          explanation: "Le chiffrement rend les données illisibles sans la bonne clé. C'est la meilleure protection pour tes données.",
        },
        {
          id: "q4",
          type: "qcm",
          question: "Lequel(lesquels) de ces éléments devraient être chiffrés ? (plusieurs réponses)",
          options: [
            "Tes documents privés",
            "Tes données financières",
            "Une liste publique de restaurants",
            "Tes informations médicales",
          ],
          correctAnswers: [0, 1, 3],
          explanation: "Oui pour les données personnelles, financières et médicales. Non pour une liste publique.",
        },
        {
          id: "q5",
          type: "qcu",
          question: "Quel est le principe du moindre privilège ?",
          options: [
            "Donner tous les accès à tout le monde",
            "Ne donner que les permissions nécessaires",
            "Changer les permissions chaque jour",
            "Supprimer tous les fichiers inutiles",
          ],
          correctAnswers: [1],
          explanation: "Le moindre privilège = ne donner que ce qui est nécessaire. Si quelqu'un compromise le compte, il y a moins de dégâts.",
        },
      ],
      miniProject: {
        title: "Mini-projet : Organise tes fichiers",
        description: "Crée une structure de fichiers sécurisée.",
        task: "Crée une arborescence de dossiers pour organiser tes documents (Documents/Personnel, Documents/Travail, Documents/Projets). Déplace quelques fichiers. Chiffre le dossier Personnel avec VeraCrypt ou BitLocker.",
        submissionInstructions: "Capture d'écran de l'arborescence de dossiers et une preuve du chiffrement activé.",
      },
    },
    {
      id: "semaine-2",
      number: 2,
      title: "Semaine 2 : Comptes et identités",
      description: "Créer et gérer des comptes en ligne sécurisés.",
      lessons: [
        {
          id: "l1",
          title: "Qu'est-ce qu'un compte ?",
          theme: "Notion 1 — Ton identité numérique",
          content: `# Comptes et identités numérique

## Qu'est-ce qu'un compte ?

Un **compte** est une identité numérique sur un service.

Exemples :
- Email (Gmail, Outlook)
- Réseaux sociaux (Facebook, Twitter)
- Services (Netflix, Amazon)
- Travail (accès au serveur de l'entreprise)
- Banque en ligne

## Composants d'un compte

### Identifiant (Username/Email)
Ce que tu utilises pour te connecter.

Exemples :
- Email : alice@gmail.com
- Username : alice2024
- Numéro : 12345678

### Mot de passe
Secret que tu dois retenir (ou utiliser un gestionnaire).

### Autres infos de profil
Nom, prénom, adresse, téléphone, date de naissance, etc.

Certaines publiques, certaines privées.

## Données personnelles

Les données que tu mets dans tes comptes sont **précieuses**.

Elles peuvent servir à :
- Te voler de l'argent
- Usurper ton identité
- Te faire du chantage
- Te vendre à des annonceurs

**Sois avare** : ne donne que les infos nécessaires.

## Empreinte numérique

Tout ce que tu fais en ligne laisse une **trace**.

- Posts sur réseaux sociaux
- Achats en ligne
- Recherches Google
- Commentaires
- Photos

Cette empreinte peut être utilisée contre toi.

**Prudence** : pense avant de poster.`,
        },
        {
          id: "l2",
          title: "Mots de passe : les bien choisir",
          theme: "Notion 2 — La première ligne de défense",
          content: `# Mots de passe forts

## Critères d'un bon mot de passe

### Longueur
Au moins **12 caractères**.

Pourquoi 12 ? Parce que c'est exponentiellement plus difficile à casser.

### Complexité
Mélange de :
- **MAJUSCULES** (A-Z)
- **minuscules** (a-z)
- **Chiffres** (0-9)
- **Symboles** (!@#$%^&*)

Exemple : \`M9#kL2@xR!pQ7\`

### Unicité
**Un password différent par compte**.

Si tu utilises le même partout :
- Un hacker en casse un
- Il peut accéder à TOUS tes comptes

C'est très grave pour la banque, l'email, etc.

### Imprévisibilité
Pas d'infos personnelles :
- ❌ Pas ton nom
- ❌ Pas ta date de naissance
- ❌ Pas le nom de ton chien
- ❌ Pas "123456" ou "password"

## Comment créer un bon password

### Technique du passphrase
Imagine une phrase et prends la première lettre de chaque mot.

Phrase : "Je vais apprendre la cybersécurité en 2026 !"

Password : \`JvAlc2026!\`

C'est long, facile à retenir pour toi, mais difficile à craquer.

### Technique du hasard
Utilise un **générateur de passwords** aléatoire.

Exemple online : https://www.random.org/passwords/

### Technique de transformation
Prends une phrase et change des lettres en chiffres/symboles.

"Mon chat s'appelle Felix"

Transformation : \`MoCh@t$@pp3lleFr3l1x\`

## Gestnotes de mots de passe

Impossible de retenir 50 passwords forts différents.

Solution : **gestionnaire de mots de passe**

### Avantages
- Un seul password maître (très fort)
- Génère des passwords aléatoires forts
- Les remplit automatiquement
- Sécurisé et chiffré

### Options gratuites
- **Bitwarden** : gratuit, cloud, très bon
- **KeePass** : gratuit, local, pas de cloud
- **Proton Pass** : gratuit de Proton (très sûr)

### Options payantes
- **1Password** : très professionnel
- **LastPass** : populaire
- **Dashlane** : interface agréable

## Pièges courants

❌ Ne pas :
- Écrire tes passwords
- Les partager sur email/Discord
- Utiliser le même partout
- Garder des passwords simples
- Faire confiance à "se souvenir" du browser

✅ Fais plutôt :
- Utiliser un gestionnaire
- Changer si tu suspectes une fuite
- Faire des passwords différents par groupe d'importance
- Vérifier sur haveibeenpwned.com si ton email a été leaké`,
        },
        {
          id: "l3",
          title: "Sécurité des comptes",
          theme: "Notion 3 — Protéger ton accès",
          content: `# Sécuriser tes comptes

## Email : ton compte le plus important

Ton **email** est la clé de tous les autres comptes.

Si quelqu'un le hack :
- Il peut réinitialiser TOUS tes passwords
- Il accède à ton compte bancaire
- Il peut usurper ton identité

**Protège ton email comme ta vie !**

### Sécuriser ton email

1. **Password très fort** (16+ caractères)
2. **2FA obligatoire** (code SMS ou app)
3. **Pas de forwarding** vers d'autres emails
4. **Vérifier l'historique d'accès** (Gmail : "Se connecter et la sécurité")

## Sécurité par couches (Defense in depth)

Ne pas compter sur une seule défense.

### Couche 1 : Bon password
Password fort et unique.

### Couche 2 : 2FA
Un deuxième facteur (SMS, app, clé USB)

### Couche 3 : Recovery options
- Numéro de téléphone de secours
- Email de secours
- Codes de récupération sauvegardés

### Couche 4 : Vigilance
- Vérifier les logins depuis nouveaux appareils
- Signaler les activités suspectes
- Ne pas cliquer sur les liens de phishing

## Comptes de récupération

Toujours ajouter :
- Un **numéro de téléphone** de secours
- Un **email de secours**
- **Codes de récupération** (à sauvegarder)

Pourquoi ? Si tu perds accès à ton téléphone ou ton email primaire, tu peux récupérer le compte.

## Vérifier les accès actifs

### Gmail
Paramètres > Sécurité > Vos appareils > Gérer tous les appareils

Tu vois tous les appareils connectés. Si tu en vois un que tu ne reconnais pas = problème.

### Facebook
Paramètres > Sécurité > Où vous êtes connecté

Même principe.

### Généralité
La plupart des services ont une page "Appareils" ou "Sessions actives".

**Vérifies régulièrement !**`,
        },
      ],
      questions: [
        {
          id: "q1",
          type: "qcu",
          question: "Combien de caractères devrait avoir un bon mot de passe ?",
          options: ["Au moins 6", "Au moins 8", "Au moins 12", "Au moins 16"],
          correctAnswers: [2],
          explanation: "Au moins 12 caractères est la norme actuelle. Plus c'est long, plus c'est sûr.",
        },
        {
          id: "q2",
          type: "qcm",
          question: "Qu'est-ce qu'un bon mot de passe contient ? (plusieurs réponses)",
          options: [
            "Des MAJUSCULES",
            "Des minuscules",
            "Des chiffres",
            "Des symboles (!@#$%)",
          ],
          correctAnswers: [0, 1, 2, 3],
          explanation: "Un bon password est complexe et mélange tous les types de caractères.",
        },
        {
          id: "q3",
          type: "qcu",
          question: "Quel est le compte le plus important à protéger ?",
          options: ["Netflix", "Email", "Facebook", "Jeux vidéo"],
          correctAnswers: [1],
          explanation: "Email est le plus important. Si quelqu'un le hack, il peut réinitialiser tous tes autres passwords.",
        },
        {
          id: "q4",
          type: "qcu",
          question: "Pourquoi utiliser un gestionnaire de mots de passe ?",
          options: [
            "Pour stocker tes passwords en clair",
            "Parce que c'est moins sûr",
            "Pour retenir un seul password maître",
            "Pour que tout le monde voit tes passwords",
          ],
          correctAnswers: [2],
          explanation: "Un gestionnaire te permet d'utiliser des passwords différents et forts pour chaque compte, en ne retenant qu'un seul password maître.",
        },
        {
          id: "q5",
          type: "qcm",
          question: "Quelles infos de sécurité devrais-tu ajouter à tes comptes ? (plusieurs réponses)",
          options: [
            "Numéro de téléphone de secours",
            "Email de secours",
            "Codes de récupération",
            "Ton adresse postale",
          ],
          correctAnswers: [0, 1, 2],
          explanation: "Ajoute un téléphone de secours, un email de secours et sauvegarde tes codes de récupération. Ton adresse postale n'est pas une mesure de sécurité.",
        },
      ],
      miniProject: {
        title: "Mini-projet : Sécurise tes comptes",
        description: "Mets en place une sécurité forte sur tes comptes importants.",
        task: "1) Installe un gestionnaire de mots de passe (Bitwarden gratuit). 2) Change le password de tes 3 comptes les plus importants (email, réseaux sociaux, banque) avec des passwords très forts. 3) Active le 2FA sur ces 3 comptes. 4) Ajoute des emails/numéros de secours.",
        submissionInstructions: "Capture d'écran du gestionnaire avec au moins 3 comptes, et preuves que 2FA est activé.",
      },
    },
    {
      id: "semaine-3",
      number: 3,
      title: "Semaine 3 : Authentification multi-facteurs",
      description: "Comprendre et utiliser la 2FA et la MFA.",
      lessons: [
        {
          id: "l1",
          title: "Authentification à un facteur",
          theme: "Notion 1 — Juste un password",
          content: `# Authentification simple (1FA)

## Qu'est-ce que l'authentification ?

L'authentification vérifie que tu es bien toi.

"Tu dis que tu es Alice. Comment je sais que c'est toi ?"

Réponse : "Parce que je connais mon password."

## Authentification à un facteur (1FA)

Il n'y a qu'une seule preuve : le **password**.

**Processus** :
1. Tu rentres ton email
2. Tu rentres ton password
3. Si c'est correct, tu accèdes au compte

## Le problème

Un password peut être :
- **Cracké** : quelqu'un devine le bon password après des essais
- **Leaké** : une base de données est piratée et les passwords sont volés
- **Phishedé** : tu le rentres sur un site fake
- **Observe** : quelqu'un te regarde taper ton password

## Solution : Ajouter des facteurs

Au lieu d'une seule preuve (password), on en ajoute d'autres.`,
        },
        {
          id: "l2",
          title: "2FA et MFA",
          theme: "Notion 2 — Deux preuves valent mieux qu'une",
          content: `# Authentification multi-facteurs

## 2FA (Authentification à deux facteurs)

Tu dois prouver ton identité de **deux façons différentes**.

### Première façon : quelque chose que tu sais
- Password
- Code PIN
- Réponse secrète

### Deuxième façon : quelque chose que tu as
- SMS (code reçu par SMS)
- App d'authentification (Google Authenticator, Authy)
- Clé de sécurité USB (YubiKey)

### Deuxième façon (alternative) : quelque chose que tu es
- Empreinte digitale
- Reconnaissance faciale

## Exemple concret

Tu veux te connecter à Gmail.

**Étape 1** : Tu rentres email + password
Gmail dit : "OK, le password est correct."

**Étape 2** : Gmail envoie un code par SMS (ou via l'app)
Gmail dit : "Écris le code que tu as reçu."

**Étape 3** : Tu rentres le code
Gmail dit : "OK, c'est toi."

Tu accèdes à ton compte.

## Même si le password est volé

Si un hacker a ton password mais pas ton téléphone :
- Il ne peut pas se connecter
- Le 2FA te protège

## Types de 2FA

### SMS (code par SMS)
- ✅ Simple
- ✅ Pas besoin d'app
- ❌ Peut être intercepté
- ❌ Pas sur une connexion instable

### App d'authentification
- ✅ Plus sûr que SMS
- ✅ Fonctionne sans réseau
- ✅ Codes valables 30 secondes
- ❌ Faut avoir l'app

### Clé de sécurité USB
- ✅ Très sûr
- ✅ Cryptographique (impossible à craquer)
- ✅ Fonctionne universellement
- ❌ Coûte ~50€
- ❌ Faut pas la perdre

### Backup codes
- Codes à imprimer et conserver
- Utilisables si tu perds ton téléphone
- À garder en lieu sûr

## MFA (Authentification multi-facteurs)

La MFA c'est comme la 2FA mais avec **3+ facteurs**.

Exemple :
1. Password
2. App d'authentification
3. Clé USB de sécurité

Plus de facteurs = plus de sécurité
Mais aussi plus compliqué d'utilisation.`,
        },
        {
          id: "l3",
          title: "Configurer le 2FA",
          theme: "Notion 3 — Faire le pas",
          content: `# Comment mettre en place le 2FA

## Étape 1 : Installer une app d'authentification

Choisis une app :
- **Google Authenticator** (simple)
- **Authy** (simple + backup cloud)
- **Microsoft Authenticator** (très complet)
- **FreeOTP** (libre et gratuit)

Télécharge-la et installe-la sur ton téléphone.

## Étape 2 : Activer le 2FA sur Gmail (exemple)

1. Va à myaccount.google.com
2. Clique "Sécurité" (sidebar gauche)
3. Scroll jusqu'à "Authentification à deux étapes"
4. Clique "Commencer la configuration"
5. Sélectionne "App d'authentification"
6. Ouvre Google Authenticator sur ton téléphone
7. Scanne le code QR ou rentre la clé manuelle
8. L'app génère un code (ex: 123456)
9. Rentre ce code dans Gmail
10. Gmail confirme

**C'est fait !** Prochaine fois que tu te connectes, il faudra aussi entrer le code de l'app.

## Étape 3 : Sauvegarder les backup codes

Gmail te propose de télécharger des **backup codes**.

Ce sont des codes à usage unique au cas où :
- Tu perds ton téléphone
- L'app ne fonctionne pas
- L'app n'est pas avec toi

**À faire absolument !**

1. Télécharge les codes
2. Imprime-les OU enregistre-les dans un endroit sûr
3. Garde-les en lieu sûr (coffre, etc.)

## Étape 4 : Tester

Déconnecte-toi de Gmail et reconnecte-toi.

Tu devrais être invité à entrer le code de l'app.

## Pertes courantes

### J'ai perdu mon téléphone !
- Utilise un **backup code**
- Change l'app d'authentification sur un nouveau téléphone

### L'app ne charge pas le code !
- L'horloge du téléphone est peut-être décalée
- Synchronise l'heure du téléphone
- Réessaye

### Je veux ajouter un deuxième appareil
Beaucoup d'apps permettent de synchroniser plusieurs appareils (Authy, Microsoft Authenticator).

Ou configure plusieurs fois le même service sur plusieurs appareils.

## Services qui supportent 2FA

Presque tous les services importants :
- Email (Gmail, Outlook, ProtonMail)
- Réseaux sociaux (Facebook, Twitter, Instagram)
- Banques
- Amazon, eBay, Paypal
- GitHub, GitLab
- Discord
- Et beaucoup d'autres

**Active le 2FA partout !**`,
        },
      ],
      questions: [
        {
          id: "q1",
          type: "qcu",
          question: "Qu'est-ce qu'un facteur d'authentification ?",
          options: [
            "Un calcul mathématique",
            "Une preuve que tu es toi",
            "Un type de mot de passe",
            "Un virus",
          ],
          correctAnswers: [1],
          explanation: "Un facteur est une preuve que tu es toi. Les trois types sont : quelque chose que tu sais (password), que tu as (téléphone), que tu es (biométrie).",
        },
        {
          id: "q2",
          type: "qcm",
          question: "Lequel(lesquels) de ces éléments est/est/sont un facteur d'authentification ? (plusieurs réponses)",
          options: [
            "Mot de passe",
            "Code SMS",
            "App d'authentification",
            "Clé USB de sécurité",
          ],
          correctAnswers: [0, 1, 2, 3],
          explanation: "Tous sont des facteurs : password (quelque chose que tu sais), SMS/app (quelque chose que tu as), clé USB (quelque chose que tu as).",
        },
        {
          id: "q3",
          type: "qcu",
          question: "Quel type de 2FA est le plus sûr ?",
          options: ["SMS", "App d'authentification", "Clé de sécurité USB", "Réponses secrètes"],
          correctAnswers: [2],
          explanation: "La clé USB est la plus sûre (cryptographie). Ensuite l'app d'authentification. SMS est le moins sûr des trois.",
        },
        {
          id: "q4",
          type: "qcu",
          question: "À quoi servent les backup codes ?",
          options: [
            "À sauvegarder ton mot de passe",
            "À récupérer l'accès si tu perds ton téléphone",
            "À connecter plusieurs appareils",
            "À augmenter la sécurité du WiFi",
          ],
          correctAnswers: [1],
          explanation: "Les backup codes sont des codes de secours à usage unique. Si tu perds ton téléphone ou l'app, tu peux les utiliser pour accéder à ton compte.",
        },
        {
          id: "q5",
          type: "qcm",
          question: "Sur quels services devrais-tu activer le 2FA ? (plusieurs réponses)",
          options: [
            "Ton email",
            "Réseaux sociaux (Facebook, Twitter)",
            "Compte bancaire",
            "Liste de courses",
          ],
          correctAnswers: [0, 1, 2],
          explanation: "Email, réseaux sociaux et comptes bancaires sont critiques. La liste de courses ne l'est pas.",
        },
      ],
      miniProject: {
        title: "Mini-projet : Mets en place le 2FA complet",
        description: "Configure une protection 2FA robuste sur tes comptes clés.",
        task: "1) Télécharge une app d'authentification (Google Authenticator ou Authy). 2) Active le 2FA sur ton email avec cette app. 3) Télécharge et imprime les backup codes. 4) Teste en te déconnectant/reconnectant. 5) Documente le processus.",
        submissionInstructions: "Photo des backup codes imprimés et capture d'écran de l'app avec un code généré, et preuves du 2FA activé.",
      },
    },
    {
      id: "semaine-4",
      number: 4,
      title: "Semaine 4 : Gestion d'identité avancée",
      description: "Confidentialité en ligne, anonymat et protection des données.",
      lessons: [
        {
          id: "l1",
          title: "Vie privée en ligne",
          theme: "Notion 1 — Qui te regarde",
          content: `# Vie privée en ligne

## Qu'est-ce qui se sait sur toi ?

Beaucoup plus que tu le penses.

### Données que tu partages volontairement
- Posts sur réseaux sociaux
- Photos avec géolocalisation
- Commentaires
- Formulaires

### Données qu'on collecte sans ton consentement
- **Cookies** : petits fichiers qui suivent tes mouvements
- **Tracking** : pixels invisibles qui enregistrent ce que tu visites
- **Métadonnées** : qui tu appelles, quand, d'où
- **Historique de navigation** : ton fournisseur internet le voit
- **Géolocalisation** : ton téléphone l'enregistre

## Qui veut tes données ?

### Annonceurs
Vendre des pubs ciblées. Si tu searches "snowboard", tu vas voir des pubs de snowboards partout.

### Gouvernements
Surveillance de masse. Enregistrer ce que tu fais.

### Criminel
Les revendre pour l'usurpation d'identité.

### Entreprises
Analyser tes comportements pour te vendre plus.

## Comment se protéger ?

- Limite ce que tu partages
- Utilise des outils privacy-friendly
- Vérife les paramètres de confidentialité
- Sois conscient de l'empreinte que tu laisses`,
        },
        {
          id: "l2",
          title: "Anonymat et pseudonymité",
          theme: "Notion 2 — L'art de ne pas être identifié",
          content: `# Anonymat et Pseudonymité

## Différences

### Pseudonymité
- Tu utilises un **pseudo** au lieu de ton vrai nom
- Exemple : utiliser "Shadow_Hacker" au lieu de "Alice Martin"
- On peut encore te tracer via tes actions ou IP

### Anonymat
- **Aucun moyen** de savoir que c'est toi
- Techniquement très difficile
- Même pas tes serveurs ne savent qui tu es

## Cas d'usage

### Pseudonymité : quand c'est utile
- Forums de discussion
- Jeux en ligne
- Réseaux sociaux alternatifs
- Contenu sensible mais pas illégal

### Anonymat : quand c'est utile
- Dénoncer une corruption (whistleblower)
- Accéder à des infos dans un régime répressif
- Dissidents politiques
- Travail journalistique

## Outils de pseudonymité

### Email temporaire
- ProtonMail (chiffré, Switzerland)
- Tutanota (chiffré, Germany)
- Mega (chiffré)
- SimpleLogin (crée des emails alias)

### Pseudonyme sur réseaux
- Tout pseudo tant qu'il n'est pas lié à ton vrai nom
- Pas de photo réelle
- Pas d'infos personnelles

## Outils d'anonymat

### VPN
- Change ton adresse IP
- Chiffre ton trafic
- Exemples : ExpressVPN, ProtonVPN, NordVPN

### Tor Browser
- Réseau d'anonymat décentralisé
- Très lent mais très anonyme
- Utilisé pour l'underground (légal et illégal)

### Tails OS
- Système d'exploitation focused sur l'anonymat et la sécurité
- S'exécute depuis une clé USB
- Rien n'est sauvegardé

## Piège courant

L'anonymat c'est **difficile**.

Si tu utilises Tor mais tu reste connecté à ton compte Facebook = plus anonyme du tout.

**Règle** : ne mélange pas identités. Un pseudonyme = une nouvelle personne digitale.`,
        },
        {
          id: "l3",
          title: "Gestion de données personnelles",
          theme: "Notion 3 — Tes droits et responsabilités",
          content: `# Gestion des données personnelles

## RGPD (Règlement Général sur la Protection des Données)

C'est la loi Européenne qui protège tes données perso.

### Tes droits selon RGPD

**Droit d'accès** : tu peux demander quelles données une entreprise a sur toi.

**Droit à l'oubli** : tu peux demander que tes données soient supprimées.

**Droit de rectification** : si tes données sont incorrectes, tu peux les corriger.

**Droit à la portabilité** : tu peux recevoir tes données dans un format standard.

**Droit d'opposition** : tu peux te retirer d'une liste d'email, de tracking, etc.

## Comment exercer tes droits ?

Contact l'entreprise directement (email, formulaire sur le site).

Exemple :
"Bonjour, j'exerce mon droit d'accès. Je veux savoir quelles données personnelles vous avez sur moi (email@gmail.com). Merci."

L'entreprise doit répondre dans les 30 jours.

## Fuite de données : que faire ?

Si une entreprise te notifie une fuite (hack) où tes données ont été exposées :

1. **Change ton password** immédiatement
2. **Active le 2FA** si tu ne l'as pas
3. **Vérifie tes comptes** pour activités suspectes
4. **Signale à la police** si nécessaire
5. **Utilise haveibeenpwned.com** pour vérifier d'autres fuites

## Partage de données sûr

Tu dois partager certaines infos (formulaire d'emploi, banque, etc.).

**Fais attention à** :
- Qui demande
- Pourquoi ils veulent
- Utilisent-ils HTTPS (cadenas)
- Est-ce une entreprise de confiance

## Mineurs et données

Si tu as moins de 18 ans :
- Tes données sont plus protégées (RGPD)
- Demande à tes parents pour certains comptes
- Sois très prudent en ligne`,
        },
      ],
      questions: [
        {
          id: "q1",
          type: "qcu",
          question: "Quelle est la différence entre pseudonymité et anonymat ?",
          options: [
            "Pas de différence",
            "Pseudonymité = pseudo mais traçable, anonymat = pas traçable du tout",
            "Anonymat = pseudo, pseudonymité = rien",
            "Aucune différence, c'est synonyme",
          ],
          correctAnswers: [1],
          explanation: "Pseudonymité = tu utilises un pseudo mais on peut te tracer. Anonymat = aucun moyen de te tracer.",
        },
        {
          id: "q2",
          type: "qcm",
          question: "Quels sont tes droits selon le RGPD ? (plusieurs réponses)",
          options: [
            "Droit d'accès à tes données",
            "Droit à l'oubli",
            "Droit de rectification",
            "Droit à l'immortalité",
          ],
          correctAnswers: [0, 1, 2],
          explanation: "Accès, oubli et rectification sont des droits RGPD. L'immortalité n'existe pas (même en RGPD).",
        },
        {
          id: "q3",
          type: "qcu",
          question: "Qu'est-ce qu'un cookie ?",
          options: [
            "Un gâteau numérique",
            "Un petit fichier qui suit tes mouvements en ligne",
            "Un type de virus",
            "Un protocole réseau",
          ],
          correctAnswers: [1],
          explanation: "Un cookie est un petit fichier stocké par les sites pour te tracker et mémoriser tes préférences.",
        },
        {
          id: "q4",
          type: "qcu",
          question: "Lequel de ces outils offre l'anonymat le plus complet ?",
          options: ["Email basique", "VPN", "Tor Browser", "Un pseudo"],
          correctAnswers: [2],
          explanation: "Tor Browser est conçu pour l'anonymat maximal. VPN c'est pseudonymité. Un pseudo c'est facile à tracer.",
        },
        {
          id: "q5",
          type: "qcm",
          question: "Qu'est-ce qui est collecté sans ton consentement ? (plusieurs réponses)",
          options: [
            "Cookies de tracking",
            "Géolocalisation du téléphone",
            "Métadonnées de tes appels",
            "Juste ce que tu partages",
          ],
          correctAnswers: [0, 1, 2],
          explanation: "Les trois premiers sont collectés sans consentement explicite. Le dernier est volontaire.",
        },
      ],
      miniProject: {
        title: "Mini-projet : Audit de tes données",
        description: "Découvre ce que les entreprises savent sur toi.",
        task: "1) Va sur haveibeenpwned.com et entre ton email pour voir si tu as été leaké. 2) Demande tes données à une grande entreprise (Google/Facebook) avec un droit d'accès RGPD. 3) Améliore tes paramètres de confidentialité sur les réseaux sociaux.",
        submissionInstructions: "Screenshot du droit d'accès soumis et avant/après des paramètres de confidentialité.",
      },
    },
  ],
};
