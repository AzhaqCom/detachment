import type { Detachment } from "../types/detachment";

export interface FactionInfo {
  id: string;
  name: string;
  /** Loaded on demand so a visitor only downloads the codex they browse. */
  load: () => Promise<Detachment[]>;
}

export const FACTIONS = [
  {
    id: "space-marines",
    name: "Space Marines",
    load: () => import("./factions/space-marines").then((m) => m.DETACHMENTS),
  },
  {
    id: "dark-angels",
    name: "Dark Angels",
    load: () => import("./factions/dark-angels").then((m) => m.DETACHMENTS),
  },
  {
    id: "orks",
    name: "Orks",
    load: () => import("./factions/orks").then((m) => m.DETACHMENTS),
  },
  {
    id: "tyranids",
    name: "Tyranids",
    load: () => import("./factions/tyranids").then((m) => m.DETACHMENTS),
  },
] as const satisfies readonly FactionInfo[];

export type FactionId = (typeof FACTIONS)[number]["id"];

export const FACTION_MAP = Object.fromEntries(
  FACTIONS.map((f) => [f.id, f]),
) as Record<FactionId, (typeof FACTIONS)[number]>;

export const DEFAULT_FACTION: FactionId = FACTIONS[0].id;

export function isFactionId(value: string | undefined): value is FactionId {
  return value !== undefined && value in FACTION_MAP;
}

const cache = new Map<FactionId, Detachment[]>();

export async function loadDetachments(id: FactionId): Promise<Detachment[]> {
  const cached = cache.get(id);
  if (cached) return cached;
  const detachments = await FACTION_MAP[id].load();
  cache.set(id, detachments);
  return detachments;
}
