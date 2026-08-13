import type { Detachment } from "../../types/detachment";
import { ARMOUR_OF_CONTEMPT_RULE } from "./shared";

const CHAPTER_RESTRICTION =
  "Your army can include DARK ANGELS units, but it cannot include any ADEPTUS ASTARTES units drawn from any other Chapter.";

export const DETACHMENTS: Detachment[] = [
  {
    id: "dark-age-arsenal",
    name: "Dark Age Arsenal",
    tagline:
      "Many are the secrets of plasma weaponry that the Dark Angels harbour",
    primaryObjective: "priority-assets",
    detachmentPoints: 1,
    page: 2,
    restrictions: CHAPTER_RESTRICTION,
    rules: [
      {
        name: "Invocations of Ancient Fury",
        effect:
          "Friendly ADEPTUS ASTARTES units' weapon profiles with 'Plasma' in their names are plasma weapon profiles.\nPlasma weapon profiles have +1 S.",
      },
    ],
    enhancements: [
      {
        name: "Petition of Stability",
        restriction: "ADEPTUS ASTARTES unit only. (Upgrade)",
        effect: 'This unit\'s plasma attacks have +6" R.',
        points: 15,
      },
      {
        name: "Entreaty of Perpetual Ardour",
        restriction: "HELLBLASTER SQUAD only. (Upgrade)",
        effect:
          "This unit's snap shooting attacks hit on unmodified hit rolls of 5+.",
        points: 15,
      },
    ],
    stratagems: [
      {
        name: "Searing Bursts",
        cost: "1CP",
        category: "Dark Age Arsenal",
        when: "Your Shooting phase, when a friendly HELLBLASTER SQUAD unit has shot.",
        target: "That HELLBLASTER SQUAD unit.",
        effect:
          'Select one enemy unit hit by your unit\'s plasma ranged attacks. That enemy unit is seared until the start of your next turn:\nWhile a unit is seared, that unit has -2" M.',
      },
      {
        name: "No Sacrifice Too Great",
        cost: "1CP",
        category: "Dark Age Arsenal",
        when: "Your Shooting phase, when a friendly ADEPTUS ASTARTES unit is selected to shoot.",
        target: "That ADEPTUS ASTARTES unit.",
        effect: "Your unit's [HAZARDOUS] plasma ranged attacks have +1 S.",
      },
      {
        name: "Revelation of Guilt",
        cost: "1CP",
        category: "Dark Age Arsenal",
        when: "Your Shooting phase, when a friendly ADEPTUS ASTARTES unit is selected to shoot.",
        target: "That ADEPTUS ASTARTES unit.",
        effect: "Your unit's plasma ranged attacks have +1 to hit rolls.",
      },
    ],
  },
  {
    id: "darkflight-pursuit",
    name: "Darkflight Pursuit",
    tagline:
      "Black-armoured combat craft hunt their prey upon wings of dark fury",
    primaryObjective: "reconnaissance",
    detachmentPoints: 1,
    page: 3,
    restrictions: CHAPTER_RESTRICTION,
    rules: [
      {
        name: "Black-winged Vigilance",
        effect:
          "Friendly RAVENWING FLY units' ranged attacks have [IGNORES COVER].",
      },
    ],
    enhancements: [
      {
        name: "Thundercowl Turbines",
        restriction: "RAVENWING FLY unit only. (Upgrade)",
        effect: "In your first Movement phase, this unit can make an ingress move.",
        points: 15,
      },
      {
        name: "Nightforged Battery",
        restriction: "LAND SPEEDER VENGEANCE unit only. (Upgrade)",
        effect:
          "This unit can re-roll:\nRolls to determine the A of a weapon.\nHazard rolls.",
        points: 15,
      },
    ],
    stratagems: [
      {
        name: "Skyborne Surveillance",
        cost: "1CP",
        category: "Darkflight Pursuit",
        when: "Your Shooting phase, when a friendly RAVENWING FLY unit has shot.",
        target: "That RAVENWING FLY unit.",
        effect:
          'Visible enemy units within 6" of your unit have +3" detection range.',
      },
      {
        name: "Wings of Shadow",
        cost: "1CP",
        category: "Darkflight Pursuit",
        when: "Your opponent's Shooting phase, when an enemy unit targets a friendly RAVENWING FLY unit.",
        target: "That RAVENWING FLY unit.",
        effect: "Your unit has Stealth.",
      },
      {
        name: "We Are Vengeance",
        cost: "1CP",
        category: "Darkflight Pursuit",
        when: "Your opponent's Shooting phase, when an enemy unit that targeted a friendly unengaged RAVENWING FLY unit has shot.",
        target: "That RAVENWING FLY unit.",
        effect: 'Your unit can make a normal move of up to D3+3".',
      },
    ],
  },
  {
    id: "interrogation-conclave",
    name: "Interrogation Conclave",
    tagline:
      "Masters of precision excruciation lead the Dark Angels in condemnatory strikes",
    primaryObjective: "take-and-hold",
    detachmentPoints: 1,
    page: 4,
    restrictions: CHAPTER_RESTRICTION,
    rules: [
      {
        name: "Dread Catechism",
        effect:
          'In the Fight phase, when a friendly CHAPLAIN unit destroys an enemy unit, enemy units within 6" of that CHAPLAIN unit will make a battle-shock roll.\nFriendly CHAPLAIN units have the following ability:\nSower of Dread (Aura): While an enemy unit is within 6" of this unit, that enemy unit has -1 Ld.',
      },
    ],
    enhancements: [
      {
        name: "Limitless Zeal",
        restriction: "CHAPLAIN model only.",
        effect: "This unit has +1 to charge rolls.",
        points: 10,
      },
      {
        name: "Inescapable Interrogation",
        restriction: "CHAPLAIN model only.",
        effect: "This unit's ranged attacks have [IGNORES COVER].",
        points: 20,
      },
    ],
    stratagems: [
      {
        name: "Exacting Punishment",
        cost: "1CP",
        category: "Interrogation Conclave",
        when: "Your Shooting phase or the Fight phase, when a friendly CHAPLAIN unit is selected to attack.",
        target: "That CHAPLAIN unit.",
        effect: "Your unit's attacks have [PRECISION].",
      },
      {
        name: "Terrifying Zeal",
        cost: "1CP",
        category: "Interrogation Conclave",
        when: "Your Charge phase, when a friendly CHAPLAIN unit ends a charge move.",
        target: "That CHAPLAIN unit.",
        effect:
          "Select one enemy unit (excluding MONSTER/VEHICLE units) engaged with your unit. That enemy unit makes a leadership roll:\nIf that leadership roll fails, that enemy unit's attacks have -1 to hit rolls until the end of the turn.",
      },
      {
        name: "Wages of Cowardice",
        cost: "1CP",
        category: "Interrogation Conclave",
        when: "Your opponent's Movement phase, when an enemy unit that was engaged with a friendly CHAPLAIN unit ends a fall-back move, if that CHAPLAIN unit is unengaged.",
        target: "That CHAPLAIN unit.",
        effect: 'Your unit can make a normal move of up to D3+3".',
      },
    ],
  },
  {
    id: "lions-blade-task-force",
    name: "Lion's Blade Task Force",
    tagline:
      "There is no more significant duty to the Dark Angels' Inner Circle than the pursuit and capture of the Fallen.",
    description:
      "There is no more significant duty to the Dark Angels' Inner Circle than the pursuit and capture of the Fallen. A Lion's Blade Task Force combines the speed, manoeuvrability and firepower of the Ravenwing with the obdurate might of the Deathwing. The bikes, aircraft and speeders of the Ravenwing thunder across the battlefield, smashing through enemy formations to place teleport homers in key positions behind the enemy lines. Then come the Deathwing, appearing in crackling flashes of blue light to enact retribution with brutal efficiency.",
    primaryObjective: "purge-the-foe",
    detachmentPoints: 2,
    page: 5,
    restrictions: CHAPTER_RESTRICTION,
    rules: [
      {
        name: "In the Lion's Claws",
        effect:
          "Each time an enemy unit (excluding MONSTERS and VEHICLES) within Engagement Range of one or more RAVENWING units from your army Falls Back, all models in that enemy unit must take a Desperate Escape test. When doing so, if that enemy unit is Battle-shocked, subtract 1 from each of those tests.\nEach time a DEATHWING unit from your army declares a charge, if one or more targets of that charge are within Engagement Range of one or more RAVENWING units from your army, add 2 to the Charge roll.",
      },
    ],
    enhancements: [
      {
        name: "Calibanite Armaments",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "Add 1 to the Damage characteristic of the bearer's melee weapons.",
        points: 15,
      },
      {
        name: "Lord of the Hunt",
        restriction: "RAVENWING model only.",
        effect:
          "The bearer's unit is eligible to shoot and declare a charge in a turn in which it Fell Back and you can re-roll Desperate Escape tests taken for models in the bearer's unit.",
        points: 15,
      },
      {
        name: "Stalwart Champion",
        restriction: "CAPTAIN, CHAPLAIN or LIEUTENANT model only.",
        effect:
          "While the bearer's unit is not Battle-shocked, add 1 to the Objective Control characteristic of models in the bearer's unit.",
        points: 15,
      },
      {
        name: "Fulgus Magna",
        restriction: "DEATHWING model only.",
        effect:
          "Once per battle, at the end of your opponent's turn, if the bearer's unit is not within Engagement Range of one or more enemy units, the bearer can use this Enhancement. If it does, remove the bearer's unit from the battlefield and place it into Strategic Reserves.",
        points: 20,
      },
    ],
    stratagems: [
      {
        name: "Overpowering Exaction",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Command phase or the start of the Fight phase.",
        target: "One ADEPTUS ASTARTES unit from your army.",
        effect:
          "Select one enemy unit within Engagement Range of your unit. That enemy unit must take a Battle-shock test. When doing so, if your unit has the DEATHWING or RAVENWING keyword, subtract 1 from the result.",
        restrictions: "You can only use this Stratagem once per battle round.",
      },
      ARMOUR_OF_CONTEMPT_RULE(),
      {
        name: "Strength in Unity",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target:
          "One ADEPTUS ASTARTES unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "If that enemy unit is within Engagement Range of one or more RAVENWING units from your army, until the end of the phase, each time a model in that enemy unit makes an attack, subtract 1 from the Hit roll. If that enemy unit is within Engagement Range of one or more DEATHWING units from your army, until the end of the phase, each time a model in that enemy unit makes an attack, if the Strength characteristic of that attack is greater than the Toughness characteristic of the target, subtract 1 from the Wound roll.",
        restrictions:
          "A unit cannot be targeted by this and the Armour of Contempt Stratagem in the same phase.",
      },
      {
        name: "Knights of Iron",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Movement phase or your Charge phase.",
        target: "One RAVENWING unit from your army.",
        effect:
          "Until the end of the phase, each time a model in your unit makes a Normal, Advance or Charge move, it can move horizontally through terrain features.",
      },
      {
        name: "Illuminating Fire",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Shooting phase, just after a RAVENWING unit from your army has shot.",
        target: "That RAVENWING unit.",
        effect:
          'Select one enemy unit within 12" of your unit that was selected as the target of one or more of the attacking unit\'s attacks. Until the end of the phase, each time a friendly DEATHWING unit makes an attack that targets that enemy unit, add 1 to the Wound roll.',
      },
      {
        name: "Inescapable Wrath",
        cost: "2CP",
        category: "Strategic Ploy",
        when: "End of your opponent's Charge phase.",
        target:
          'One DEATHWING INFANTRY or DEATHWING WALKER unit from your army that is within 6" of one or more enemy units and would be eligible to declare a charge against one or more of those enemy units if it were your Charge phase.',
        effect:
          "Your unit now declares a charge that only targets one or more of those enemy units, and you resolve that charge.",
        restrictions:
          "Note that even if this charge is successful, your unit does not receive any Charge bonus this turn.",
      },
    ],
  },
  {
    id: "wrath-of-the-rock",
    name: "Wrath of the Rock",
    tagline:
      "When the Dark Angels are roused to war, the constituent elements of the Chapter conspire to form lethal strike forces capable of countering any threat.",
    description:
      "When the Dark Angels are roused to war, the constituent elements of the Chapter conspire to form lethal strike forces capable of countering any threat. Warriors of the battle companies stand tall against tides of enemies, their boltguns bellowing a chorus of death. Upon the wings ride the Ravenwing, an ebon-clad blur of bikes and lightning-fast speeders that crashes into the flank of the opposing army and runs down pursuers with ruthless aggression. At the heart of the fighting, into the elite warriors at the forefront of the enemy formation, strike the Deathwing. Clad in Terminator armour and bearing a trove of relic weapons, they break the back of the foe, fighting and killing until their bone-white armour is stained with the crimson blood of their enemies.",
    primaryObjective: "priority-assets",
    detachmentPoints: 3,
    page: 7,
    rules: [
      {
        name: "Dutiful Tenacity",
        effect:
          "Each time an attack targets an ADEPTUS ASTARTES INFANTRY or ADEPTUS ASTARTES MOUNTED unit from your army, if the Strength characteristic of that attack is greater than the Toughness characteristic of that unit, subtract 1 from the Wound roll.",
      },
    ],
    enhancements: [
      {
        name: "Tempered in Battle (Aura)",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          'While a friendly ADEPTUS ASTARTES unit is within 6" of this model, you can re-roll Battle-shock and Leadership tests taken for that unit.',
        points: 10,
      },
      {
        name: "Ancient Weapons",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "Improve the Strength characteristic of melee weapons equipped by the bearer by 2, and improve the Armour Penetration and Damage characteristics of those weapons by 1.",
        points: 25,
      },
      {
        name: "Deathwing Assault",
        restriction: "DEATHWING model with the Deep Strike ability only.",
        effect:
          "The bearer's unit can be set up using the Deep Strike ability in the Reinforcements step of your first, second or third Movement phase, regardless of any mission rules.",
        points: 15,
      },
      {
        name: "Lord of the Ravenwing",
        restriction: "RAVENWING model only.",
        effect:
          "You can re-roll Advance and Charge rolls made for the bearer's unit.",
        points: 10,
      },
    ],
    stratagems: [
      {
        name: "Inescapable Justice",
        cost: "2CP",
        category: "Battle Tactic",
        when: "Any phase, just after your Oath of Moment target is destroyed.",
        target:
          "One ADEPTUS ASTARTES CHARACTER unit that is on the battlefield.",
        effect:
          'Select one enemy unit within 12" and visible to your unit. That enemy unit becomes your Oath of Moment target until the start of your next Command phase.',
      },
      {
        name: "Lion's Will",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Command phase.",
        target:
          "One ADEPTUS ASTARTES unit from your army that is within Engagement Range of one or more enemy units.",
        effect:
          "Until the start of your next Command phase, add 1 to the Objective Control characteristic of models in your unit. In addition, until the end of the turn, if your unit does not have the DEATHWING, RAVENWING or VEHICLE keyword, each time a model in your unit makes an attack, add 1 to the Hit roll.",
      },
      ARMOUR_OF_CONTEMPT_RULE(),
      {
        name: "Tactical Mastery",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Movement phase.",
        target: "One ADEPTUS ASTARTES unit from your army.",
        effect:
          "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Advanced. If your unit has the RAVENWING keyword, it is also eligible to shoot and declare a charge in a turn in which it Fell Back.",
      },
      {
        name: "Relics of the Dark Age",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Shooting phase.",
        target:
          "One ADEPTUS ASTARTES INFANTRY or ADEPTUS ASTARTES MOUNTED unit from your army that has not been selected to shoot this phase.",
        effect:
          "Until the end of the phase, add 2 to the Strength characteristic of ranged weapons equipped by models in your unit.",
      },
      {
        name: "Leonine Aggression",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "End of your opponent's Charge phase.",
        target:
          'One ADEPTUS ASTARTES unit from your army within 3" of one or more enemy units, or one DEATHWING unit from your army within 6" of one or more enemy units.',
        effect:
          "Your unit now declares a charge that only targets one or more of those enemy units, and you resolve that charge.",
        restrictions:
          "Note that even if this charge is successful, your unit does not receive any Charge bonus this turn.",
      },
    ],
  },
  {
    id: "company-of-hunters",
    name: "Company of Hunters",
    tagline:
      "Ravenwing outriders who never stop moving, firing on the advance and breaking away before the foe can answer.",
    primaryObjective: "disruption",
    detachmentPoints: 2,
    restrictions: CHAPTER_RESTRICTION,
    keywordsNote:
      "OUTRIDER SQUAD units from your army gain the BATTLELINE keyword.",
    rules: [
      {
        name: "Masters of Manoeuvre",
        effect:
          "Friendly ADEPTUS ASTARTES have:\nThis unit's ranged attacks have [ASSAULT].\nWhen this unit is selected to make a fall-back move, that fall-back move does not prevent this unit from being eligible to shoot.\nFriendly ADEPTUS ASTARTES MOUNTED have:\nThis unit's ranged attacks have [ASSAULT].\nWhen this unit is selected to make an advance move, that advance move does not prevent this unit from being eligible to declare a charge.\nWhen this unit is selected to make a fall-back move, that fall-back move does not prevent this unit from being eligible to shoot and eligible to declare a charge.",
      },
    ],
    enhancements: [
      {
        name: "Master of Manoeuvre",
        restriction: "RAVENWING model only.",
        effect:
          "If the bearer's unit starts the battle in Strategic Reserves, its points value does not count towards the combined points limit for units from your army that are in Strategic Reserve, and for the purposes of setting up that unit on the battlefield, treat the current battle round number as being one higher than it actually is.",
        points: 15,
      },
      {
        name: "Master-crafted Weapon",
        restriction: "RAVENWING model only.",
        effect:
          "Melee weapons equipped by the bearer have the [PRECISION] ability.",
        points: 10,
      },
      {
        name: "Mounted Strategist",
        restriction: "RAVENWING model only.",
        effect:
          "You can re-roll Advance and Charge rolls made for the bearer's unit.",
        points: 30,
      },
      {
        name: "Recon Hunter",
        restriction: "RAVENWING model only.",
        effect: 'Models in the bearer\'s unit have the Scouts 9" ability.',
        points: 20,
      },
    ],
    stratagems: [
      {
        name: "Hunter's Trail",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Command phase.",
        target:
          "One RAVENWING MOUNTED unit from your army that is within range of an objective marker you control.",
        effect:
          "That objective marker remains under your control until your opponent's Level of Control over that objective marker is greater than yours at the end of a phase.",
      },
      ARMOUR_OF_CONTEMPT_RULE(),
      {
        name: "Talon Strike",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Fight phase, when a friendly ADEPTUS ASTARTES unit is selected to fight.",
        target: "That ADEPTUS ASTARTES unit.",
        effect: "Your unit's melee attacks have [LANCE].",
      },
      {
        name: "Death on the Wind",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Movement phase, when a friendly ADEPTUS ASTARTES unit ends an advance move.",
        target: "That ADEPTUS ASTARTES unit.",
        effect:
          "That advance move does not prevent your unit from being eligible to declare a charge.",
      },
      {
        name: "High-speed Focus",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.",
        target:
          "One RAVENWING unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll.",
      },
      {
        name: "Rapid Reappraisal",
        cost: "1CP",
        category: "Battle Tactic",
        when: "End of your opponent's Fight phase.",
        target:
          "One RAVENWING unit from your army that is not within Engagement Range of one or more enemy units.",
        effect:
          "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    ],
  },
  {
    id: "inner-circle-task-force",
    name: "Inner Circle Task Force",
    tagline:
      "Deathwing Terminators who swear an oath upon a single objective and hold it against anything the enemy sends.",
    primaryObjective: "priority-assets",
    detachmentPoints: 2,
    restrictions: CHAPTER_RESTRICTION,
    rules: [
      {
        name: "Vowed Target",
        effect:
          "At the start of your Movement phase, select one of the following:\nDefensive Footing: Select one objective you control. Until the start of your next Movement phase, that objective is your Vowed objective.\nAggressive Push: Select one or more objective you do not control. Until the start of your next Movement phase, each of those objectives is one of your Vowed objectives. If a rule refers to a unit or model being within range of your Vowed objective, that rule takes effect if that unit or model is within range of one or more of your Vowed objectives. Each time a DEATHWING INFANTRY unit from your army makes an attack that targets a unit within range of one or more of your Vowed objectives, add 1 to the Wound roll.",
      },
    ],
    enhancements: [
      {
        name: "Champion of the Deathwing",
        restriction: "DEATHWING model only.",
        effect:
          "Melee weapons equipped by the bearer have the [LETHAL HITS] ability, and each time the bearer makes a melee attack, if it is within range of your Vowed objective marker, a Critical Hit is scored on an unmodified Hit roll of 5+.",
        points: 15,
      },
      {
        name: "Deathwing Assault",
        restriction: "DEATHWING model with the Deep Strike ability only.",
        effect:
          "The bearer's unit can be set up using the Deep Strike ability in the Reinforcements step of your first, second or third Movement phase, regardless of any mission rules.",
        points: 30,
      },
      {
        name: "Eye of the Unseen",
        restriction: "DEATHWING model only.",
        effect:
          "Each time you target the bearer's unit with a Stratagem, roll one D6, adding 1 if the bearer is within range of your Vowed objective marker: on a 5+, you gain 1CP.",
        points: 10,
      },
      {
        name: "Singular Will",
        restriction: "DEATHWING model only.",
        effect:
          'Each time the bearer\'s unit Piles In or Consolidates, models in that unit can move an additional 3".',
        points: 20,
      },
    ],
    stratagems: [
      ARMOUR_OF_CONTEMPT_RULE(),
      {
        name: "Martial Mastery",
        cost: "1CP",
        category: "Epic Deed",
        when: "Fight phase.",
        target:
          "One DEATHWING INFANTRY unit from your army that has not been selected to fight this phase.",
        effect:
          "Until the end of the phase, each time a model in your unit makes an attack, re-roll a Wound roll of 1. If your unit is within range of your Vowed objective marker, you can re-roll the Wound roll instead.",
      },
      {
        name: "Duty Unto Death",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target:
          "One DEATHWING unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, adding 1 if your unit is within range of your Vowed objective marker. On a 4+, do not remove the destroyed model from play; it can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
      {
        name: "Relic Teleportarium",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Movement phase.",
        target:
          "One DEATHWING unit from your army that is arriving using the Deep Strike ability this phase.",
        effect:
          'Your unit can be set up anywhere on the battlefield that is more than 6" horizontally away from all enemy models.',
        restrictions:
          "Until the end of the turn, your unit is not eligible to declare a charge.",
      },
      {
        name: "Wrath of the Lion",
        cost: "1CP",
        category: "Epic Deed",
        when: "Your Charge phase.",
        target:
          "One DEATHWING INFANTRY unit from your army that just ended a Charge move.",
        effect:
          "Select one enemy unit within Engagement Range of your unit and roll one D6 for each model in your unit, adding 1 to the result if that enemy unit is within range of your Vowed objective marker: for each 4+, that enemy unit suffers 1 mortal wound (to a maximum of 3 mortal wounds).",
      },
      {
        name: "Unmatched Fortitude",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.",
        target:
          "One DEATHWING INFANTRY unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "Until the end of the phase, each time an attack targets your unit, if the Strength characteristic of that attack is greater than your unit's Toughness characteristic, subtract 1 from the Wound roll.",
      },
    ],
  },
  {
    id: "unforgiven-task-force",
    name: "Unforgiven Task Force",
    tagline:
      "Battle-brothers who fight all the harder as their losses mount, refusing to yield an inch of ground.",
    primaryObjective: "take-and-hold",
    detachmentPoints: 2,
    restrictions: CHAPTER_RESTRICTION,
    rules: [
      {
        name: "Grim Resolve",
        effect:
          "While an ADEPTUS ASTARTES unit from your army is Battle-shocked, change the Objective Control characteristic of models in that unit to 1, instead of 0.\nIn your Command phase, select one ADEPTUS ASTARTES unit from your army; until the start of your next Command phase, add 1 to the Objective Control characteristic of models in that unit.",
      },
    ],
    enhancements: [
      {
        name: "Pennant of Remembrance",
        restriction: "ANCIENT model only.",
        effect:
          "While the bearer is leading a unit, models in that unit have the Feel No Pain 6+ ability. While that unit is Battle-shocked, models in that unit have the Feel No Pain 4+ ability instead.",
        points: 10,
      },
      {
        name: "Shroud of Heroes",
        restriction: "ADEPTUS ASTARTES model only. (Once per battle, per army)",
        effect:
          "When this model is destroyed, at the end of the phase, roll one D6:\nOn a 2+, set up this model on the battlefield, unengaged and as close as possible to where it was destroyed. This model is not part of an attached unit and its unit has a starting strength of 1. This model has 3 wounds remaining, or its full wounds remaining if this model was battle-shocked when it was destroyed.",
        points: 25,
      },
      {
        name: "Stubborn Tenacity",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "While the bearer is leading a unit, each time a model in that unit makes an attack, add 1 to the Hit roll if that unit is below its Starting Strength, and add 1 to the Wound roll as well if that unit is Battle-shocked and below its Starting Strength.",
        points: 15,
      },
      {
        name: "Weapons of the First Legion",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "Add 1 to the Attacks, Strength and Damage characteristics of the bearer's melee weapons. While the bearer is Battle-shocked, add 2 to the Attacks, Strength and Damage characteristics of the bearer's melee weapons instead.",
        points: 15,
      },
    ],
    stratagems: [
      ARMOUR_OF_CONTEMPT_RULE(),
      {
        name: "Unforgiven Fury",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Shooting phase or the Fight phase.",
        target:
          "One ADEPTUS ASTARTES unit from your army that has not been selected to shoot or fight this phase.",
        effect:
          "Until the end of the phase, weapons equipped by models in your unit have the [LETHAL HITS] ability. In addition, if one or more ADEPTUS ASTARTES units from your army are currently Battle-shocked, until the end of the phase, each time a model in your unit makes an attack, a successful unmodified Hit roll of 5+ scores a Critical Hit.",
      },
      {
        name: "Intractable",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Movement phase, just after an ADEPTUS ASTARTES unit from your army Falls Back.",
        target: "That ADEPTUS ASTARTES unit.",
        effect:
          "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
      },
      {
        name: "Fire Discipline",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Shooting phase.",
        target:
          "One ADEPTUS ASTARTES unit from your army that has not been selected to shoot this phase.",
        effect:
          "Until the end of the phase, ranged weapons equipped by models in your unit have the [ASSAULT], [HEAVY] and [IGNORES COVER] abilities.",
      },
      {
        name: "Grim Retribution",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your opponent's Shooting phase, just after an enemy unit has shot.",
        target:
          "One ADEPTUS ASTARTES unit from your army that had one or more models destroyed as a result of the attacking unit's attacks.",
        effect:
          "Your unit can shoot as if it were your Shooting phase, but it must target only the enemy unit that just attacked it, and can only do so if that enemy unit is an eligible target.",
      },
      {
        name: "Unbreakable Lines",
        cost: "2CP",
        category: "Battle Tactic",
        when: "Your opponent's Charge phase, just after an enemy unit ends a Charge move.",
        target:
          "One ADEPTUS ASTARTES unit from your army within Engagement Range of that enemy unit.",
        effect:
          "Until the end of the turn, each time an attack targets your unit, subtract 1 from the Wound roll.",
      },
    ],
  },
];
