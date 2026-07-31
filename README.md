# Détachements Space Marines

Site listant les 16 détachements du Faction Pack Space Marines (Warhammer 40,000), avec filtrage par objectif primaire et vue détaillée (règle d'armée, améliorations, stratagèmes) pour chaque détachement.

Stack : React + TypeScript + Vite. Données dans [`src/data/detachments.ts`](src/data/detachments.ts).

## Développement

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Déploiement

Le déploiement sur GitHub Pages se fait automatiquement via GitHub Actions (voir `.github/workflows/deploy.yml`) à chaque push sur `main`. Il faut activer GitHub Pages sur le repo avec la source "GitHub Actions" (Settings > Pages).
