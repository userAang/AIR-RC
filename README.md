# AIR Pôle RC — Plateforme de formation Réseaux & Cybersécurité

Site Next.js 16 (App Router, TypeScript, Tailwind) du **Pôle Réseaux & Cybersécurité** du club **AIR** (ASEBEM Innovation and Research).

## ✨ Fonctionnalités

- 7 mois de cours (juin → décembre 2026)
- Parcours unique par mois, sans niveaux séparés
- 4 semaines par mois, avec leçons, QCM et mini-projet
- QCM/QCU à la fin de chaque semaine
- Envoi d'emails automatique (chef de pôle + élève) via **Resend**
- Mini-projet pratique chaque semaine, à envoyer par email manuellement
- Design moderne sombre avec accents cyan, cohérent avec le logo AIR

## 🚀 Lancement local

```bash
# 1. Installer les dépendances
npm install
# ou: pnpm install

# 2. Copier le .env.example et le remplir
cp .env.example .env.local
# Édite .env.local avec tes vraies valeurs

# 3. Lancer en dev
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000)

## 🔑 Variables d'environnement

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Clé API Resend (https://resend.com) |
| `ADMIN_EMAIL` | Email du chef de pôle (par défaut : castromadjri@gmail.com) |
| `FROM_EMAIL` | Email expéditeur (ex: `AIR Pôle RC <noreply@tondomaine.com>`). Pour tester sans domaine : `onboarding@resend.dev` |

## 📁 Structure

```
src/
├── app/
│   ├── page.tsx                                  # Accueil
│   ├── cours/[mois]/page.tsx                     # Page d'un mois (4 semaines)
│   ├── cours/[mois]/[semaine]/page.tsx           # Page semaine (leçons + QCM)
│   └── api/submit-quiz/route.ts                  # API d'envoi d'emails
├── components/
│   ├── SiteChrome.tsx                            # Header + Footer
│   ├── Breadcrumb.tsx
│   ├── Markdown.tsx                              # Mini renderer markdown
│   └── WeekClient.tsx                            # Composant interactif des cours
├── data/months/
│   ├── juin-2026.ts                              # Contenu complet juin
│   ├── _placeholder.ts                           # Helper pour mois à venir
│   └── index.ts                                  # Liste des 7 mois
└── lib/
    ├── types.ts                                  # Types TypeScript
    └── quiz.ts                                   # Évaluation + templates emails
```

## 📚 Remplir les contenus des autres mois

Pour ajouter le contenu d'un autre mois, crée un fichier sur le modèle de `src/data/months/juin-2026.ts`, puis remplace l'appel `buildPlaceholderMonth(...)` correspondant dans `src/data/months/index.ts`.

## 🌐 Déploiement sur Vercel

Voir la section dédiée dans le chat — étapes complètes fournies.
