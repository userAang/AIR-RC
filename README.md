# AIR Pôle RC — Plateforme de formation Réseaux & Cybersécurité

AIR Club (ASEBEM Innovation and Research Club) est un projet de club créé par des étudiants et stagiaires béninois au Maroc. Cette application présente un parcours pédagogique évolutif pour apprendre les réseaux, l'informatique et la cybersécurité.

## ✨ Fonctionnalités principales

- Contenu évolutif par mois, conçu pour le pôle Cyber du club
- 4 semaines de cours par mois avec leçons, QCM et mini-projet pratique
- Interface Next.js App Router avec Tailwind CSS et TypeScript
- Formulaire de QCM avec affichage du score et correction détaillée
- Envoi d’une notification à l’admin via Resend
- Suivi Vercel Analytics et Speed Insights intégré

## 📦 Scripts utiles

```bash
npm install
npm run dev
npm run build
npm run start
npm run deploy
```

- `npm run dev` — lance l’environnement de développement
- `npm run build` — génère le build de production
- `npm run start` — démarre le serveur Next.js en production
- `npm run deploy` — déploie sur Vercel (nécessite `@vercel/cli`)

## 🔧 Installation et lancement local

```bash
npm install
cp .env.example .env.local
# Remplis .env.local avec tes valeurs
npm run dev
```

Ouvre ensuite [http://localhost:3000](http://localhost:3000)

## 🔑 Variables d'environnement

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Clé API Resend pour envoyer les notifications administratives |
| `ADMIN_EMAIL` | Email de réception des résultats (par défaut : `castromadjri@gmail.com`) |
| `FROM_EMAIL` | Adresse expéditeur pour Resend, ex: `AIR Pôle RC <noreply@tondomaine.com>` |

## 🧩 Structure du projet

```
src/
├── app/
│   ├── layout.tsx                              # Layout global + Vercel analytics
│   ├── page.tsx                                # Page d’accueil
│   ├── cours/[mois]/page.tsx                   # Vue du mois et des semaines
│   ├── cours/[mois]/[semaine]/page.tsx         # Page semaine avec QCM
│   └── api/submit-quiz/route.ts                # API d’évaluation et notification admin
├── components/
│   ├── SiteChrome.tsx                          # Header + footer
│   ├── Breadcrumb.tsx                          # Fil d’Ariane
│   ├── Markdown.tsx                            # Rendu des contenus markdown
│   ├── WeekClient.tsx                          # Composant interactif des leçons & QCM
│   ├── analytics-client.tsx                    # Vercel Analytics client
│   └── speed-insights-client.tsx               # Vercel Speed Insights client
├── data/months/                                # Contenu cours par mois
│   ├── juin-2026.ts
│   ├── juillet-2026.ts
│   ├── aout-2026.ts
│   ├── septembre-2026.ts
│   ├── octobre-2026.ts
│   ├── novembre-2026.ts
│   ├── decembre-2026.ts
│   └── index.ts
└── lib/
    ├── types.ts                                # Types partagés
    └── quiz.ts                                 # Calcul de score et email admin
```

## 📥 Déploiement sur Vercel

### 1. Installer le CLI Vercel

```bash
npm install -D @vercel/cli
```

### 2. Déployer en production

```bash
npm run deploy
```

> Le script `deploy` utilise le CLI Vercel local pour déployer le projet sur Vercel.

### 3. Options utiles

```bash
npm run preview
```

> Lance Vercel en local pour tester le projet avant déploiement.

## 📊 Analytics

Le projet inclut :

- `@vercel/analytics` pour le tracking client de Vercel
- `@vercel/speed-insights` pour surveiller les performances et les métriques de vitesse

Ces outils sont activés dans `src/app/layout.tsx` via les composants :

- `src/components/analytics-client.tsx`
- `src/components/speed-insights-client.tsx`

## 📝 Notes importantes

- Le QCM affiche maintenant le score et le corrigé détaillé à l’utilisateur.
- Le mini-projet n’apparaît qu’après la soumission du QCM.
- Les résultats sont transmis à l’admin, mais l’utilisateur voit directement ses réponses corrigées.
- Le contenu reste évolutif et pourra être enrichi au-delà de 2026.
