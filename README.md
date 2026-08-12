# Détachements Warhammer 40,000

Site listant les détachements par faction, avec filtrage par objectif primaire et vue détaillée (règle d'armée, améliorations, stratagèmes) pour chaque détachement. Une seule faction est couverte pour l'instant : les 23 détachements Space Marines.

Stack : React + TypeScript + Vite. Le contenu des règles est en anglais officiel GW ; l'interface est en français.

## Ajouter une faction

Créer `src/data/factions/<faction>.ts` exportant un tableau `DETACHMENTS`, puis ajouter une entrée dans `FACTIONS` ([`src/data/factions.ts`](src/data/factions.ts)) :

```ts
{
  id: "orks",
  name: "Orks",
  load: () => import("./factions/orks").then((m) => m.DETACHMENTS),
}
```

Le sélecteur de faction et les routes `/:factionId/:id` s'adaptent seuls. Chaque faction est chargée à la demande via son `import()`, pour qu'un visiteur ne télécharge que le codex qu'il consulte.

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
