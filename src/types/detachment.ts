export type ObjectiveId =
  | "purge-the-foe"
  | "take-and-hold"
  | "priority-assets"
  | "reconnaissance"
  | "disruption";

export interface WeaponProfile {
  name: string;
  abilities?: string;
  range: string;
  attacks: string;
  skill: string;
  strength: string;
  ap: string;
  damage: string;
}

export interface DetachmentRule {
  name: string;
  flavorText?: string;
  effect: string;
}

export interface Enhancement {
  name: string;
  flavorText: string;
  restriction: string;
  effect: string;
  points: number;
  weaponProfile?: WeaponProfile;
}

export interface Stratagem {
  name: string;
  cost: string;
  category?: string;
  flavorText: string;
  when: string;
  target: string;
  effect: string;
  restrictions?: string;
}

export interface Detachment {
  id: string;
  name: string;
  tagline: string;
  description?: string;
  primaryObjective: ObjectiveId;
  detachmentPoints: number;
  restrictions?: string;
  rules: DetachmentRule[];
  keywordsNote?: string;
  enhancements: Enhancement[];
  stratagems: Stratagem[];
  page: number;
}
