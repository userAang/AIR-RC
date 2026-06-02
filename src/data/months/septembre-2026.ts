import type { MonthCourse } from "@/lib/types";

/**
 * SEPTEMBRE 2026 - Fondamentaux réseau
 * Quatrième mois : Comment fonctionne Internet et les réseaux
 * Objectif: Comprendre les adresses IP, DNS, TCP/IP, et la topologie réseau.
 */
export const septembre2026: MonthCourse = {
  id: "septembre-2026",
  label: "Septembre 2026",
  shortLabel: "Sept",
  theme: "Fondamentaux réseau",
  description: "Quatrième mois : plonger dans le cœur d'Internet. Comprendre comment les ordinateurs communiquent, les protocoles réseau et la structure d'Internet.",
  monthObjective: "Maîtriser les concepts fondamentaux des réseaux informatiques et d'Internet.",
  available: true,
  weeks: [
    {
      id: "semaine-1",
      number: 1,
      title: "Semaine 1 : Adresses IP et IPv4",
      description: "Comment identifier chaque appareil sur le réseau.",
      lessons: [
        {
          id: "l1",
          title: "Qu'est-ce qu'une adresse IP ?",
          theme: "Notion 1 — L'identité numérique",
          content: `# Adresses IP (Internet Protocol)

## Analogie simple

Une adresse IP est comme une **adresse postale** pour les ordinateurs.

La Poste te trouve grâce à ton adresse. Internet trouve ton ordinateur grâce à son adresse IP.

## Définition

Une **adresse IP** est un identifiant unique attribué à chaque appareil connecté à Internet.

Elle permet aux autres appareils de te trouver et de te communiquer.

## IPv4 : l'ancienne norme

Format : quatre nombres entre 0 et 255, séparés par des points.

Exemple : **192.168.1.5**

Chaque nombre s'appelle un **octet** (8 bits).

Total : 4 octets = 32 bits.

### Combien d'adresses IPv4 possibles ?

256 × 256 × 256 × 256 = 4,294,967,296 adresses

Ça semble beaucoup, mais c'est fini. Internet a "manqué" d'adresses IPv4 en 2011.

## Parties d'une adresse IPv4

**192.168.1.5**

- **192.168.1** = réseau
- **5** = appareil spécifique

Analogie :
- **192.168.1** = rue "Rue des Ordinateurs"
- **5** = maison numéro 5

## Adresses spéciales

### 127.0.0.1 (Localhost)
C'est **toi**. Ton ordinateur qui parle à lui-même.

Utile pour tester.

### 192.168.x.x, 10.x.x.x, 172.16.x.x (Adresses privées)
Pour les réseaux **locaux** uniquement.

Tu peux les utiliser chez toi, au travail.

Ne fonctionnent pas sur Internet.

### 0.0.0.0
"Tous les apparels"

### 255.255.255.255 (Broadcast)
"Envoie à tout le monde sur ce réseau"

## IPv6 : la nouvelle norme

Format : nombres hexadécimaux séparés par des deux-points.

Exemple : **2001:0db8:85a3::8a2e:0370:7334**

Beaucoup plus d'adresses possibles. Pratiquement infini.

Le monde passe lentement à IPv6, mais IPv4 est toujours dominant.`,
        },
        {
          id: "l2",
          title: "Masque de sous-réseau et CIDR",
          theme: "Notion 2 — Diviser le réseau",
          content: `# Masque de sous-réseau

## Pourquoi ?

Une adresse IP seule, c'est pas assez. On doit aussi savoir **quel est le réseau**.

Exemple : dans quel réseau est 192.168.1.5 ?

C'est 192.168.1.0 ? 192.168.0.0 ? 192.0.0.0 ?

Solution : le **masque de sous-réseau**.

## Masque de sous-réseau

Format : quatre nombres (comme une adresse IP).

Exemple : **255.255.255.0**

Les **255** indiquent la partie "réseau". Les **0** indiquent la partie "appareil".

### Exemple

**Adresse IP** : 192.168.1.5
**Masque** : 255.255.255.0

Le masque dit : "Les trois premiers chiffres (192.168.1) sont le réseau. Le dernier (5) est l'appareil."

Donc le réseau est **192.168.1.0**.

Les appareils de ce réseau vont de **192.168.1.1** à **192.168.1.254**.

(192.168.1.0 est l'adresse réseau, 192.168.1.255 est l'adresse broadcast)

## Notation CIDR

Une façon plus courte d'écrire.

Exemple : **192.168.1.0/24**

Le **/24** signifie "24 bits pour le réseau, 8 pour les appareils".

Équivalent à : 192.168.1.0 avec masque 255.255.255.0

## Sous-réseaux courants

- /24 = 254 appareils (2^8 - 2)
- /25 = 126 appareils
- /16 = 65,534 appareils
- /8 = 16 millions d'appareils

## En cybersécurité

Comprendre les sous-réseaux c'est important pour :
- Mapper un réseau
- Faire du scanning (chercher les appareils)
- Configurer les pare-feu`,
        },
        {
          id: "l3",
          title: "Attribuer une adresse IP : DHCP et statique",
          theme: "Notion 3 — Qui décide l'adresse",
          content: `# DHCP vs Adresse statique

## DHCP (Dynamic Host Configuration Protocol)

DHCP est un **serveur** qui distribue les adresses IP automatiquement.

### Processus

1. Tu connectes ton PC au WiFi
2. Ton PC demande à DHCP : "Donne-moi une adresse IP"
3. DHCP répond : "Prends 192.168.1.50"
4. Ton PC reçoit aussi le masque, la passerelle, DNS, etc.
5. C'est automatique

### Avantages
- Automatique
- Facile pour l'utilisateur
- Pas de conflits d'adresses (le serveur gère)

### Inconvénients
- L'adresse peut changer (chaque fois que tu redémarres)
- Pas idéal pour les serveurs (dont l'adresse doit rester stable)

### Durée de bail

DHCP attribue une adresse pour une durée limitée (généralement 24h).

Avant l'expiration, DHCP renouvelle le bail (normalement automatique).

## Adresse IP statique

Une adresse IP **fixe** qu'on configure manuellement.

### Configuration manuelle

Exemple sur Windows :
1. Paramètres > Réseau
2. Paramètres IP statique
3. Rentres l'adresse (ex: 192.168.1.100)
4. Rentres le masque (ex: 255.255.255.0)
5. Rentres la passerelle (ex: 192.168.1.1)
6. Rentres les DNS (ex: 8.8.8.8)

### Avantages
- Stable (l'adresse ne change pas)
- Meilleur pour les serveurs
- Plus facile à retrouver

### Inconvénients
- À configurer manuellement
- Risque de conflits si deux appareils ont la même adresse

## Quand utiliser quoi ?

**DHCP** :
- Ton ordinateur personnel
- Ton téléphone
- La plupart des appareils

**Adresse statique** :
- Serveurs
- Imprimantes de réseau
- Appareils qu'on veut retrouver facilement
- Certains appareils IoT

## En cybersécurité

- Assure-toi que tu utilises HTTPS même avec IP dynamique
- Les serveurs doivent avoir une IP statique
- Scanne ton réseau pour les appareils inconnus (même IP dynamique)`,
        },
      ],
      questions: [
        {
          id: "q1",
          type: "qcu",
          question: "Combien d'octets a une adresse IPv4 ?",
          options: ["2 octets", "4 octets", "8 octets", "16 octets"],
          correctAnswers: [1],
          explanation: "IPv4 = 4 octets = 32 bits. Chaque octet va de 0 à 255.",
        },
        {
          id: "q2",
          type: "qcu",
          question: "Qu'est-ce que 127.0.0.1 ?",
          options: [
            "Une adresse Internet normale",
            "Localhost (ton ordinateur)",
            "Une adresse de broadcast",
            "Une adresse invalide",
          ],
          correctAnswers: [1],
          explanation: "127.0.0.1 est localhost, c'est ton ordinateur. Utile pour tester en local.",
        },
        {
          id: "q3",
          type: "qcu",
          question: "Que signifie /24 en notation CIDR ?",
          options: [
            "24 appareils possibles",
            "24 bits pour le réseau, 8 pour les appareils",
            "24 ordinateurs maxi",
            "Rien, c'est juste un format",
          ],
          correctAnswers: [1],
          explanation: "/24 signifie 24 bits pour le réseau. Avec un octet (8 bits) pour les appareils, on peut avoir 254 appareils.",
        },
        {
          id: "q4",
          type: "qcm",
          question: "Quelles adresses sont privées ? (plusieurs réponses)",
          options: [
            "192.168.0.0",
            "10.0.0.0",
            "172.16.0.0",
            "8.8.8.8",
          ],
          correctAnswers: [0, 1, 2],
          explanation: "192.168.x.x, 10.x.x.x et 172.16.x.x sont privées. 8.8.8.8 est public (DNS Google).",
        },
        {
          id: "q5",
          type: "qcu",
          question: "Quand devrait-on utiliser une adresse IP statique ?",
          options: [
            "Toujours",
            "Jamais",
            "Pour les serveurs et appareils qu'on veut retrouver",
            "Pour ton téléphone",
          ],
          correctAnswers: [2],
          explanation: "IP statique pour serveurs, imprimantes réseau. DHCP pour ordinateurs personnels.",
        },
      ],
      miniProject: {
        title: "Mini-projet : Examine ta configuration IP",
        description: "Découvre ta configuration réseau.",
        task: "1) Lance 'ipconfig' (Windows) ou 'ifconfig' (Linux). 2) Relève : adresse IP, masque, passerelle, serveurs DNS. 3) Configure une adresse IP statique à titre d'essai (puis remet DHCP). 4) Documente.",
        submissionInstructions: "Screenshot de ipconfig/ifconfig et document avec tes observations.",
      },
    },
    {
      id: "semaine-2",
      number: 2,
      title: "Semaine 2 : DNS et résolution de noms",
      description: "Comment trouver un serveur par son nom de domaine.",
      lessons: [
        {
          id: "l1",
          title: "Noms de domaine et DNS",
          theme: "Notion 1 — De www.google.com à 8.8.8.8",
          content: `# DNS (Domain Name System)

## Le problème

**Toi** : "Je veux accéder à google.com"

**Ordinateur** : "Quoi ? Google ? C'est quoi ? Je comprends que les numéros."

**Solution** : DNS traduit "google.com" en "142.250.185.46" (adresse IP).

## Hiérarchie des domaines

Un domaine comme "www.google.com" a une structure :

**www.google.com**

- **.com** = top-level domain (TLD). Gérée par ICANN
- **google** = second-level domain. Loué par Google à un registrar
- **www** = subdomain. Géré par Google

Autres TLDs : .fr, .org, .net, .edu, etc.

## Enregistrements DNS

Un domaine a plusieurs **enregistrements DNS** qui disent quoi faire :

### Enregistrement A
Mappe un domaine à une adresse **IPv4**.

Exemple : google.com → 142.250.185.46

### Enregistrement AAAA
Mappe un domaine à une adresse **IPv6**.

Exemple : google.com → 2001:4860:4860::8888

### Enregistrement CNAME
Alias d'un autre domaine.

Exemple : mail.google.com → google.com (redirige vers google.com)

### Enregistrement MX
Dit où trouver le serveur **email**.

Exemple : Pour google.com, envoie les emails au serveur MX

### Enregistrement NS
Dit quel est le **serveur DNS** responsable**.

## Processus de résolution DNS

1. Tu tapes "google.com" dans ton navigateur
2. Ton PC demande au **DNS resolver local** : "C'est quoi l'IP de google.com ?"
3. Le DNS resolver regarde son **cache** (si c'est déjà connu)
4. Si pas en cache, il demande au **root nameserver** : "Qui gère .com ?"
5. Root répond : "Va demander à ce serveur TLD"
6. Le resolver demande au **serveur TLD** : "Qui gère google.com ?"
7. TLD répond : "Va demander à ce serveur"
8. Le resolver demande au **serveur faisant autorité** (celui de Google)
9. Google répond : "google.com est 142.250.185.46"
10. Le resolver caches la réponse et te la donne
11. Ton PC se connecte à 142.250.185.46
12. Tu vois Google

## TTL (Time To Live)

Chaque réponse DNS a un **TTL** (durée de vie).

Exemple : TTL = 3600 secondes (1 heure)

Pendant 1 heure, le cache gardera la réponse. Après 1 heure, il demandera à nouveau.

## En cybersécurité

- **DNS spoofing** : un attaquant modifie tes réponses DNS pour te rediriger vers un site fake
- **DNS poisoning** : un attaquant infecte le cache DNS d'un serveur
- **DNSSEC** : protège le DNS avec cryptographie
- **DoH (DNS over HTTPS)** : chiffre tes requêtes DNS`,
        },
        {
          id: "l2",
          title: "Configuration de DNS",
          theme: "Notion 2 — Changer de DNS",
          content: `# Configurer DNS

## Pourquoi changer de DNS ?

- **Vitesse** : certains DNS sont plus rapides
- **Sécurité** : certains bloquent les sites malveillants
- **Vie privée** : certains ne tracking pas
- **Disponibilité** : ton ISP peut être down
- **Censure** : dans certains pays

## DNS populaires

### Google Public DNS
- **8.8.8.8** (IPv4)
- Rapide, fiable
- Mais Google te tracks

### Cloudflare DNS
- **1.1.1.1** (IPv4)
- Très rapide
- Bonne protection malware
- Focus sur la vie privée

### OpenDNS
- **208.67.222.222** (IPv4)
- Bonne protection
- Classement de contenu

### Quad9
- **9.9.9.9** (IPv4)
- Très sûr
- Bloque les sites malveillants

## Comment changer de DNS

### Globalement (pour tout le réseau)

Sur ton **routeur** (administateur panel) :
1. Accès l'interface routeur (192.168.1.1)
2. Trouve la section DNS
3. Change les DNS primaires et secondaires
4. Sauvegarde

**Tous** les appareils utiliseront ce DNS.

### Par appareil

**Windows** :
1. Paramètres > Réseau > Paramètres avancés
2. Cherche "Serveurs DNS"
3. Désactive DHCP pour DNS
4. Ajoute tes DNS manuels

**Linux** :
Modifie /etc/resolv.conf ou utilise NetworkManager.

**Mac** :
Paramètres > Réseau > Avancé > DNS

**iPhone/Android** :
Paramètres > Réseau > Modification des paramètres DNS

## Test de DNS

### Pour tester la vitesse/disponibilité

**Commande** : \`nslookup google.com\` ou \`dig google.com\`

Ça te dit la réponse et le temps.

### Pour vérifier quel DNS tu utilises

Site : **whatismyip.com** ou **dnschecker.org**

## DNS récursif vs autoritaire

### DNS récursif (Resolver)
Celui que tu utilises (Google DNS, Cloudflare DNS).

Il fait la chaîne complète de questions jusqu'à avoir la réponse.

### DNS autoritaire
Celui qui détient la réponse (le serveur de Google pour google.com).

Il dit "Oui, c'est moi, voici la réponse"`,
        },
        {
          id: "l3",
          title: "Noms de domaine et registrars",
          theme: "Notion 3 — Posséder un domaine",
          content: `# Noms de domaine

## Que peux-tu posséder ?

Tu n'achètes pas un domaine, tu le **loues**.

Tu loues "google.com" pour une année (renouvellement annuel).

Si tu ne renouvelles pas, quelqu'un d'autre peut l'acheter.

## Enregistreur de domaine (Registrar)

Un **registrar** est une entreprise où tu loues un domaine.

Exemples : GoDaddy, Namecheap, OVH, Gandi

### Processus

1. Tu vas sur le site du registrar
2. Tu cherches un domaine (ex: monentreprise.com)
3. Si disponible, tu le loues pour 1-10 ans
4. Tu payes
5. Le domaine est à toi (loué)

### Vérifier la disponibilité

Sites comme **WHOIS.com** te disent qui possède un domaine et quand ça expire.

## Prix des domaines

**TLDs courants** : .com, .fr, .org : 10-20€/an

**TLDs premium** : .io, .co : 30-50€/an

**TLDs chers** : certains TLDs spécialisés : 100-1000€/an

### Domaines expirés

Après expiration, il y a une période de grace (30-90 jours).

Puis le domaine retourne au pool de domaines disponibles.

Domaines précédemment populaires sont très recherchés.

## WHOIS

**WHOIS** te dit qui possède un domaine.

Publiquement disponible, sauf si tu ajoutes une "protection WHOIS" (anonymité).

### Informations WHOIS

- Nom du propriétaire
- Email du propriétaire
- Adresse physique
- Serveurs DNS du domaine
- Date d'enregistrement
- Date d'expiration

### Commande

\`whois google.com\`

Te donne tous les détails WHOIS.

## Sous-domaines

Toi propriétaire de **domaine.com**, tu peux créer des sous-domaines gratuits :

- mail.domaine.com
- blog.domaine.com
- api.domaine.com
- www.domaine.com

Infiniment de sous-domaines possibles.

## En cybersécurité

- **Domaine stealing** : quelqu'un te vole ton domaine (mauvaise sécurité chez le registrar)
- **DNS hijacking** : quelqu'un change les DNS de ton domaine
- **Typosquatting** : quelqu'un achète "goolge.com" pour t'imiter
- **Phishing domains** : des domaines fake similaires au tien

Protections :
- **Lock du domaine** : chez le registrar
- **2FA sur le registrar**
- **DNSSEC**`,
        },
      ],
      questions: [
        {
          id: "q1",
          type: "qcu",
          question: "À quoi sert le DNS ?",
          options: [
            "À sécuriser Internet",
            "À traduire les noms de domaine en adresses IP",
            "À distribuer les adresses IP",
            "À encrypter les données",
          ],
          correctAnswers: [1],
          explanation: "DNS traduit google.com en 142.250.185.46 pour que tu puisses te connecter.",
        },
        {
          id: "q2",
          type: "qcu",
          question: "Quel est le DNS public le plus rapide et privé ?",
          options: ["8.8.8.8 (Google)", "1.1.1.1 (Cloudflare)", "9.9.9.9 (Quad9)", "208.67.222.222 (OpenDNS)"],
          correctAnswers: [1],
          explanation: "1.1.1.1 de Cloudflare est réputé être le plus rapide et respectueux de la vie privée.",
        },
        {
          id: "q3",
          type: "qcm",
          question: "Qu'est-ce qu'un enregistrement DNS ? (plusieurs réponses)",
          options: [
            "Enregistrement A (IPv4)",
            "Enregistrement MX (email)",
            "Enregistrement NS (nameserver)",
            "Enregistrement HR (ressources humaines)",
          ],
          correctAnswers: [0, 1, 2],
          explanation: "A, MX et NS sont des enregistrements DNS. HR n'existe pas (c'est pour les ressources humaines).",
        },
        {
          id: "q4",
          type: "qcu",
          question: "Qu'est-ce que le WHOIS ?",
          options: [
            "Un protocole réseau",
            "Informations publiques sur qui possède un domaine",
            "Un type d'adresse IP",
            "Un serveur DNS",
          ],
          correctAnswers: [1],
          explanation: "WHOIS te dit publiquement qui possède un domaine (sauf s'il y a protection WHOIS).",
        },
        {
          id: "q5",
          type: "qcu",
          question: "Que se passe-t-il si ton domaine expire ?",
          options: [
            "Il est supprimé définitivement",
            "Il y a une période de grace (30-90j), puis quelqu'un d'autre peut l'acheter",
            "Il est renouvelé automatiquement",
            "Rien, tu le gardes gratuitement",
          ],
          correctAnswers: [1],
          explanation: "Après expiration, il y a une période de grace. Après ça, n'importe qui peut l'acheter.",
        },
      ],
      miniProject: {
        title: "Mini-projet : Explore le DNS",
        description: "Apprends comment fonctionne le DNS en pratique.",
        task: "1) Change ton DNS en Cloudflare (1.1.1.1). 2) Utilise 'nslookup google.com' et 'nslookup netflix.com'. 3) Cherche les informations WHOIS de google.com. 4) Documente les résultats.",
        submissionInstructions: "Captures d'écran des commandes et des résultats WHOIS.",
      },
    },
    {
      id: "semaine-3",
      number: 3,
      title: "Semaine 3 : Protocoles réseau TCP/IP",
      description: "Comment les données voyagent sur Internet.",
      lessons: [
        {
          id: "l1",
          title: "Modèle OSI et TCP/IP",
          theme: "Notion 1 — Les couches de la communication",
          content: `# Modèle OSI

## Qu'est-ce que c'est ?

Le modèle **OSI** (Open Systems Interconnection) est un cadre qui montre comment la communication réseau fonctionne.

Imagin un sandwich avec 7 couches. Chaque couche a une fonction spécifique.

## Les 7 couches de l'OSI

### Couche 7 : Application
- Ce que tu vois : navigateur, email, chat
- Protocoles : HTTP, HTTPS, SMTP, POP3, SSH
- Données : pages web, emails, fichiers

### Couche 6 : Présentation
- Formatage des données
- Compression, chiffrement
- Conversion de formats

### Couche 5 : Session
- Gère les connexions
- Début et fin de session
- Dialogue entre applications

### Couche 4 : Transport
- **TCP** (fiable) et **UDP** (rapide)
- **Ports** (21, 80, 443, 22, 53, etc.)
- Données : segments (TCP) ou datagrams (UDP)

### Couche 3 : Réseau
- **Adresses IP**
- **Routage** (trouve le chemin)
- Données : paquets IP
- Protocoles : IP, ICMP (ping)

### Couche 2 : Liaison de données
- **Adresses MAC** (physiques)
- Communication locale sur le segment réseau
- Données : trames Ethernet
- Protocoles : Ethernet, PPP

### Couche 1 : Physique
- **Câbles, signaux électriques, ondes radio**
- Bits (0 et 1)
- WiFi, Ethernet câble, fibre optique

## Modèle TCP/IP (version simplifiée)

Version moderne, en 4 couches :

1. **Application** (HTTP, SMTP, SSH)
2. **Transport** (TCP, UDP)
3. **Internet** (IP)
4. **Accès réseau** (Ethernet, WiFi)

Plus simple que OSI, mais same idea.

## Exemple : accéder à une page web

1. Tu cliques sur un lien (Couche 7)
2. Navigateur prépare la requête HTTP (Couche 6)
3. Établit une connexion TCP (Couche 5, 4)
4. IP encapsule le paquet (Couche 3)
5. Ethernet ajoute l'adresse MAC (Couche 2)
6. Signal électrique envoie sur le câble (Couche 1)
7. Serveur reçoit (remonte les couches)
8. Serveur envoie la réponse (descend les couches)
9. Tu vois la page web`,
        },
        {
          id: "l2",
          title: "TCP vs UDP",
          theme: "Notion 2 — Les protocoles de transport",
          content: `# TCP vs UDP

## TCP (Transmission Control Protocol)

Le protocole **fiable**.

### Caractéristiques

**Connexion établie** : handshake à 3 étapes avant d'envoyer des données.

1. Client : "Bonjour, je veux communiquer"
2. Serveur : "OK, je t'écoute"
3. Client : "Bon, je commence"

**Numérotation des données** : chaque morceau de données a un numéro.

Le destinataire les réassemble dans le bon ordre.

**Vérification d'erreur** : chaque paquet a une checksum.

Si un paquet est perdu ou corrompu, il est renvoyé.

**Fiable** : garantit que toutes les données arrivent correctement.

**Lent** : parce qu'il vérifie tout.

### Utilisation

- **HTTP/HTTPS** : pages web
- **SMTP** : envoyer des emails
- **POP3/IMAP** : recevoir des emails
- **FTP** : transfert de fichiers
- **SSH** : accès distant

Quand tu veux pas perdre de données, tu utilises TCP.

## UDP (User Datagram Protocol)

Le protocole **rapide**.

### Caractéristiques

**Sans connexion** : envoie juste les données, pas de handshake.

**Pas de numérotation** : pas d'ordre garanti.

**Pas de vérification** : si un paquet est perdu, tant pis.

**Rapide** : pas de vérifications donc plus rapide.

**Non fiable** : quelques paquets peuvent être perdus.

### Utilisation

- **Vidéo streaming** : si tu perds 1 frame sur 30, tu ne le remarques pas
- **VoIP (appels vidéo)** : le délai est plus important que la perfection
- **DNS** : requête simple, pas besoin de connexion
- **Jeux en ligne** : rapidité > fiabilité
- **UDP MQTT** : IoT et messages en temps réel

Quand tu veux la vitesse plus que la fiabilité, tu utilises UDP.

## Comparaison

| | TCP | UDP |
|---|---|---|
| **Connexion** | Établie | Aucune |
| **Ordre** | Garanti | Non |
| **Erreur** | Corrigée | Perdue |
| **Vitesse** | Lent | Rapide |
| **Fiabilité** | Haute | Basse |
| **Utilisation** | Web, email, fichiers | Vidéo, appels, jeux |

## Ports TCP/UDP

Chaque protocole utilise des **ports** (0-65535).

Ports bien connus :
- **Port 21** : FTP (TCP)
- **Port 22** : SSH (TCP)
- **Port 25** : SMTP (TCP)
- **Port 53** : DNS (UDP généralement)
- **Port 80** : HTTP (TCP)
- **Port 443** : HTTPS (TCP)
- **Port 3306** : MySQL (TCP)

Tu peux avoir TCP et UDP sur le même port (c'est deux protocoles différents)`,
        },
        {
          id: "l3",
          title: "Paquets et en-têtes",
          theme: "Notion 3 — La structure des données",
          content: `# Structure des paquets

## Anatomie d'un paquet

Un paquet réseau c'est comme une **lettre postale**.

**En-tête** (enveloppe) : info de routage
**Données** (contenu de la lettre) : le vrai message

### En-tête Ethernet (Couche 2)

- **Adresse MAC source** : d'où ça vient (localement)
- **Adresse MAC destination** : où ça va (localement)
- **Protocole** : TCP/IP ou autre
- **Checksum** : pour vérifier l'intégrité

### En-tête IP (Couche 3)

- **Version** : IPv4 ou IPv6
- **Adresse IP source** : d'où ça vient
- **Adresse IP destination** : où ça va
- **TTL** (Time To Live) : nombre de routeurs à traverser (décrémenté chaque fois)
- **Protocole** : TCP ou UDP

### En-tête TCP (Couche 4)

- **Port source** : d'où ça vient
- **Port destination** : où ça va
- **Numéro de séquence** : pour mettre dans l'ordre
- **Drapeau (flags)** : SYN (connexion), ACK (accusé réception), FIN (fin)

### En-tête HTTPS (Couche 7)

- **Certificat SSL** : preuve que c'est HTTPS
- **Données chiffrées** : le vrai contenu HTTP, crypté

## Encapsulation

Chaque couche ajoute son en-tête.

~~~
En-tête Ethernet | En-tête IP | En-tête TCP | Données HTTP
~~~

**Décapsulation** quand le paquet arrive : chaque couche lit son en-tête et le retire.

## Taille des paquets

**MTU** (Maximum Transmission Unit) : taille max du paquet.

Généralement **1500 bytes** en Ethernet.

Si tu veux envoyer un fichier plus gros, on le divise en plusieurs paquets.

## TTL (Time To Live)

Chaque paquet a un TTL (généralement 64 ou 128).

Chaque **routeur** qu'il traverse décrémente le TTL de 1.

Si TTL = 0, le paquet est jeté (pas d'accès à la destination).

C'est pour éviter les boucles infinies.

## Commande : Trace le chemin des paquets

\`tracert google.com\` (Windows) ou \`traceroute google.com\` (Linux)

Montre tous les routeurs que les paquets traversent.

Exemple :
~~~
1  gateway.local (192.168.1.1)
2  isp-router.com (10.0.0.1)
3  internet-backbone.net (203.0.113.5)
...
12 google-server.com (142.250.185.46)
~~~

En cybersécurité, c'est utile pour :
- Vérifier la latence
- Détecter où la connexion est lente
- Identifier les points de perte`,
        },
      ],
      questions: [
        {
          id: "q1",
          type: "qcu",
          question: "Combien de couches a le modèle OSI ?",
          options: ["3 couches", "4 couches", "7 couches", "10 couches"],
          correctAnswers: [2],
          explanation: "Le modèle OSI a 7 couches, du physique au application.",
        },
        {
          id: "q2",
          type: "qcu",
          question: "Quel protocole est fiable mais lent ?",
          options: ["UDP", "TCP", "IP", "Ethernet"],
          correctAnswers: [1],
          explanation: "TCP est fiable (garanti) mais lent (vérifications). UDP est rapide mais peut perdre des paquets.",
        },
        {
          id: "q3",
          type: "qcm",
          question: "Lequel(lesquels) utilise(nt) TCP ? (plusieurs réponses)",
          options: ["HTTP", "Appels vidéo", "SMTP", "DNS"],
          correctAnswers: [0, 2],
          explanation: "HTTP et SMTP utilisent TCP (fiable). Les appels vidéo utilisent UDP (rapidité). DNS utilise généralement UDP.",
        },
        {
          id: "q4",
          type: "qcu",
          question: "Qu'est-ce que le TTL ?",
          options: [
            "Time To Load (temps de chargement)",
            "Time To Live (nombre de routeurs à traverser)",
            "Terminal Time Line (ligne de temps)",
            "Total Transfer Length (longueur totale)",
          ],
          correctAnswers: [1],
          explanation: "TTL (Time To Live) indique combien de routeurs le paquet peut traverser avant d'être jeté.",
        },
        {
          id: "q5",
          type: "qcm",
          question: "Qu'est-ce qui est inclus dans un en-tête IP ? (plusieurs réponses)",
          options: [
            "Adresse IP source",
            "Adresse IP destination",
            "Numéro de port",
            "TTL",
          ],
          correctAnswers: [0, 1, 3],
          explanation: "L'en-tête IP contient adresses source/dest et TTL. Les ports sont dans l'en-tête TCP/UDP, pas IP.",
        },
      ],
      miniProject: {
        title: "Mini-projet : Tracez les paquets",
        description: "Observe le chemin que les paquets prennent pour atteindre un serveur.",
        task: "1) Lance 'tracert google.com' (Windows) ou 'traceroute google.com' (Linux). 2) Note combien de 'hops' (routeurs) il y a. 3) Lance 'ping google.com' pour voir la latence. 4) Compare avec d'autres sites (amazon.com, wikipedia.org).",
        submissionInstructions: "Captures d'écran des résultats tracert/traceroute et ping pour 3 sites différents.",
      },
    },
    {
      id: "semaine-4",
      number: 4,
      title: "Semaine 4 : Topology et infrastructure réseau",
      description: "Comment les réseaux sont structures et connectés.",
      lessons: [
        {
          id: "l1",
          title: "Topology réseau",
          theme: "Notion 1 — Comment organiser les appareils",
          content: `# Topologies réseau

## Qu'est-ce qu'une topologie ?

La **topologie** est comment les appareils sont **connectés** entre eux.

## Topologies principales

### Étoile (Star)
Tous les appareils sont connectés à un **centre** (switch ou hub).

~~~
  Appareil 1
    |
  Appareil 2 - Switch - Appareil 3
    |
  Appareil 4
~~~

**Avantages** : si une connexion est cassée, les autres continuent

**Inconvénients** : si le switch est down, tout est down

### Bus
Tous les appareils partagent un **câble central**.

~~~
Appareil 1 --- Appareil 2 --- Appareil 3 --- Appareil 4
~~~

**Avantages** : simple, peu de câbles

**Inconvénients** : si le câble central est cassé, tout est down. Collisions si deux appareils parlent en même temps

### Anneau (Ring)
Les appareils forment un **cercle**.

~~~
Appareil 1 --- Appareil 2
  |             |
Appareil 4 --- Appareil 3
~~~

**Avantages** : chaque appareil a exactement 2 connexions

**Inconvénients** : si une connexion est cassée, le ring est cassé

### Maille (Mesh)
Chaque appareil est connecté à **tous les autres**.

~~~
  Appareil 1
  /   |   \
Appareil 2-Appareil 3
  \   |   /
  Appareil 4
~~~

**Avantages** : très redondant, peut perdre plusieurs connexions

**Inconvénients** : complexe, beaucoup de câbles

### Arbre (Tree)
Hiérarchie avec un **root** connecté à des **branches**.

~~~
    Root Switch
    /   |   \
  Switch A Switch B Switch C
  /  \      |       /  \
   AP   AP    AP     AP   AP
~~~

**Avantages** : organisé, scalable

**Inconvénients** : si le root est down, tout est down

## Topologies modernes

La plupart des réseaux modernes utilisent **mailles combinées** ou **étoiles hiérarchiques**.

Par exemple :
- Chaque bâtiment est une étoile (switch central)
- Les bâtiments sont connectés en maille (plusieurs chemins)`,
        },
        {
          id: "l2",
          title: "Infrastructure Internet",
          theme: "Notion 2 — Le backbone d'Internet",
          content: `# Infrastructure Internet

## Niveaux d'Internet

### ISP (Internet Service Provider)
Ton **fournisseur Internet** local.

Exemple : Orange, SFR, Free (France)

- Connecte ta maison à Internet
- Te donne l'adresse IP
- Héberge le DNS
- Peut tracker ton trafic

### Tier-1 ISP (Backbone)
Les gros tuyaux du monde.

Exemples : AT&T, Verizon, NTT, Level3

- Connectent les continents via câbles sous-marins
- Connectent les data centers
- Très peu (peut-être 100 au monde)

### Data centers
Énormes bâtiments avec serveurs.

Exemples : serveurs Google, Amazon, Microsoft

- Hébergent les sites web
- Traitent les données
- Consomment énormément d'électricité

### Points de présence (POP)
Lieux où les réseaux se connectent.

Exemple : dans chaque ville importante, il y a un POP.

## Chemin typique d'une requête

Ton ordinateur -> Routeur maison -> ISP Local -> ISP National -> ISP International (Tier-1) -> Autre pays -> ISP Local -> Serveur

Au total, la requête peut traverser des douzaines de routeurs.

## Câbles sous-marins

Internet relie les continents via **câbles fiber optique sous-marins**.

- Plusieurs milliards de dollars investis
- Si un câble casse, la connexion peut être fortement dégradée
- Les requin mordent les câbles (mais rarement)

## Cloud

Concept moderne : au lieu de posséder tes serveurs, tu loues de la puissance chez :

- **AWS** (Amazon Web Services)
- **Google Cloud**
- **Microsoft Azure**
- **Alibaba Cloud**

Ça te permet de **scaler** (agrandir) facilement.

## CDN (Content Delivery Network)

Un réseau de serveurs distribués géographiquement.

Exemple : tu télécharges une vidéo YouTube. Au lieu de la télécharger depuis la Californie, elle vient du serveur CDN le plus proche de toi.

**Avantages** :
- Plus rapide
- Moins charge sur le serveur principal
- Redondance

## En cybersécurité

Comprendre l'infrastructure permet de :
- Comprendre où les données passent
- Identifier les points de faiblesse
- Défendre efficacement`,
        },
        {
          id: "l3",
          title: "Équipement réseau",
          theme: "Notion 3 — Les briques physiques",
          content: `# Équipement réseau

## Routeur

Connecte **deux réseaux ou plus** et route le trafic.

Ton routeur Wi-Fi à la maison connecte ton réseau local à Internet.

### Fonction clé
Regarde l'adresse IP destination et décide par quel port envoyer le paquet.

### Types
- **Routeur domestique** : petit, pour ta maison
- **Routeur d'entreprise** : puissant, gère des milliers d'appareils
- **Routeur backbone** : géant, connecte des ISPs entiers

## Switch

Connecte plusieurs appareils **dans le même réseau** en utilisant des **adresses MAC**.

Bien plus rapide qu'un routeur pour le trafic local.

### Couches
- **Switch L2 (Layer 2)** : utilise les adresses MAC
- **Switch L3 (Layer 3)** : peut aussi router (comme un routeur)

## Hub

Ancien équipement, maintenant obsolète.

Pas intelligent : il envoie simplement les données à **tous les ports**.

Cause des collisions et est lent.

## Pont (Bridge)

Connecte deux segments de réseau et filtre le trafic par adresse MAC.

Rarement utilisé maintenant (remplacé par les switches).

## Pare-feu (Firewall)

Contrôle le trafic entrant/sortant.

Peut être :
- **Logiciel** : sur ton ordinateur
- **Matériel** : un appareil physique au bord du réseau

Décide qui peut faire quoi.

## WAP (Wireless Access Point)

Le petit émetteur Wi-Fi.

Dans les réseaux d'entreprise, c'est séparé du routeur.

À la maison, c'est généralement intégré dans le routeur.

## Modem

Convertit le signal du fournisseur Internet (cable, DSL, fibre) en Ethernet.

Pas directement un équipement réseau, mais essentiel.

## Répéteur Wi-Fi

Reçoit le signal Wi-Fi du routeur et le retransmet (avec perte).

Augmente la portée mais réduit la bande passante.

Meilleure alternative : un mesh WiFi.

## Mesh WiFi

Système de plusieurs points d'accès travaillant ensemble.

Ils créent un seul réseau unifié et les appareils basculent automatiquement vers le plus proche.

Exemple : TP-Link Deco, Ubiquiti

## En cybersécurité

- Change les **mots de passe par défaut** de tous tes équipements
- **Mises à jour** régulières du firmware
- **Désactives les protocoles obsolètes** (WEP, pas assez de chiffrement)
- **Monitore** les appareils connectés
- Utilise un **VPN** ou un **pare-feu** robuste`,
        },
      ],
      questions: [
        {
          id: "q1",
          type: "qcu",
          question: "Quelle topologie connecte tous les appareils à un centre ?",
          options: ["Bus", "Anneau", "Étoile", "Maille"],
          correctAnswers: [2],
          explanation: "La topologie Étoile a un appareil central (switch) auquel tous les autres se connectent.",
        },
        {
          id: "q2",
          type: "qcu",
          question: "Qu'est-ce qu'un ISP Tier-1 ?",
          options: [
            "Ton fournisseur Internet local",
            "Le gros fournisseur qui connecte les continents",
            "Un service de streaming",
            "Un type de routeur",
          ],
          correctAnswers: [1],
          explanation: "Un ISP Tier-1 est l'un des rares très gros fournisseurs qui gèrent le backbone d'Internet.",
        },
        {
          id: "q3",
          type: "qcm",
          question: "Qu'est-ce qu'un CDN ? (plusieurs bonnes réponses)",
          options: [
            "Un réseau de serveurs distribués géographiquement",
            "Acceleration du contenu proche de toi",
            "Augmente la bande passante",
            "Un type de Wi-Fi",
          ],
          correctAnswers: [0, 1, 2],
          explanation: "CDN = réseau distribué qui te sert le contenu depuis le serveur le plus proche. Cela accélère et divise la charge.",
        },
        {
          id: "q4",
          type: "qcu",
          question: "Quelle est la différence entre un routeur et un switch ?",
          options: [
            "Pas de différence",
            "Routeur connecte réseaux différents (IPs), switch connecte appareils du même réseau (MACs)",
            "Switch est plus puissant",
            "Routeur est pour Wi-Fi",
          ],
          correctAnswers: [1],
          explanation: "Routeur travaille avec les adresses IP et relie réseaux différents. Switch travaille avec les adresses MAC et connecte appareils localement.",
        },
        {
          id: "q5",
          type: "qcm",
          question: "Comment améliorer ta sécurité réseau ? (plusieurs réponses)",
          options: [
            "Change les mots de passe par défaut de ton routeur",
            "Mets à jour le firmware du routeur",
            "Désactives WEP et les vieux protocoles",
            "Laisse ton Wi-Fi ouvert pour les voisins",
          ],
          correctAnswers: [0, 1, 2],
          explanation: "Passwords, mises à jour, protocoles sûrs = sécurité. WiFi ouvert = danger.",
        },
      ],
      miniProject: {
        title: "Mini-projet : Cartographie de ton réseau",
        description: "Dessine la topologie et l'infrastructure de ton réseau réseau.",
        task: "1) Dessine la topologie de ton réseau (router, switch, WAP, appareils). 2) Lance 'arp -a' pour voir les appareils sur ton réseau. 3) Note les adresses MAC. 4) Fais un schéma complet.",
        submissionInstructions: "Schéma dessiné + screenshot de 'arp -a' + document avec topologie et appareils.",
      },
    },
  ],
};
