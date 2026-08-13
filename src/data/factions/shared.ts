import type { Stratagem } from "../../types/detachment";

/**
 * Every Adeptus Astartes detachment carries this stratagem with identical
 * wording, so it lives here: GW errata it as a single rule across factions.
 */
export const ARMOUR_OF_CONTEMPT_RULE = (): Stratagem => ({
  name: "Armour of Contempt",
  cost: "1CP",
  category: "Battle Tactic",
  when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
  target:
    "One ADEPTUS ASTARTES unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
  effect:
    "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
});
