import type { Detachment } from "../../types/detachment";
import { ARMOUR_OF_CONTEMPT_RULE } from "./shared";

export const DETACHMENTS: Detachment[] = [
  {
    id: "vengeful-hosts",
    name: "Vengeful Hosts",
    tagline:
      "Veterans of Armageddon's wars, these angels of death bring vengeance from on high",
    primaryObjective: "take-and-hold",
    detachmentPoints: 1,
    page: 2,
    rules: [
      {
        name: "Imperator Unleashed",
        effect:
          "In a turn a friendly ADEPTUS ASTARTES FLY INFANTRY unit made an ingress/charge move, that unit's attacks can re-roll hit rolls of 1.",
      },
    ],
    enhancements: [
      {
        name: "Avenging Angel",
        restriction: "ADEPTUS ASTARTES FLY INFANTRY model only.",
        effect:
          'When this unit ends an ingress move, select up to one enemy unit within 9" of this unit. That enemy unit makes a battle-shock roll, with -1 to that battle-shock roll.',
        points: 20,
      },
      {
        name: "Orksbane",
        restriction:
          "ADEPTUS ASTARTES FLY INFANTRY model only. This model has the following weapon:",
        effect: "",
        points: 20,
        weaponProfile: {
          name: "Orksbane",
          abilities: "[CLEAVE 2]",
          range: "Melee",
          attacks: "4",
          skill: "2+",
          strength: "8",
          ap: "-2",
          damage: "3",
        },
      },
    ],
    stratagems: [
      {
        name: "Meteoric Onslaught",
        cost: "1CP",
        category: "Vengeful Hosts",
        when: "Fight phase, when a friendly ADEPTUS ASTARTES FLY INFANTRY unit that made a charge move this turn is selected to attack.",
        target: "That friendly ADEPTUS ASTARTES FLY INFANTRY unit.",
        effect: "Your unit's melee attacks have +1 S.",
      },
      {
        name: "Purge by Sectors",
        cost: "1CP",
        category: "Vengeful Hosts",
        when: "End of the Fight phase.",
        target:
          "One friendly unengaged ADEPTUS ASTARTES FLY INFANTRY unit that was eligible to fight this phase.",
        effect: 'Your unit can make a normal move of up to D3+3".',
      },
      {
        name: "Know No Fear",
        cost: "1CP",
        category: "Vengeful Hosts",
        when: "Your Command phase.",
        target:
          "One friendly battle-shocked ADEPTUS ASTARTES unit. You can target that unit with this stratagem even though it is battle-shocked.",
        effect: "Your unit is no longer battle-shocked.",
      },
    ],
  },
  {
    id: "fulguris-task-force",
    name: "Fulguris Task Force",
    tagline:
      "Anti-grav speeders hit the foe with thunderous firepower at deadly velocities",
    primaryObjective: "reconnaissance",
    detachmentPoints: 1,
    page: 3,
    rules: [
      {
        name: "Skystrike",
        effect:
          'Friendly LAND SPEEDER/STORM SPEEDER HAILSTRIKE/STORM SPEEDER HAMMERSTRIKE/STORM SPEEDER THUNDERSTRIKE units have SPEEDER.\nIn your first Movement phase, friendly SPEEDER units can make an ingress move.',
      },
    ],
    enhancements: [
      {
        name: "Bellicose Weapon Spirits",
        restriction: "SPEEDER unit only. (Upgrade)",
        effect:
          "This unit can re-roll:\nDamage rolls.\nRolls to determine the A of a weapon.",
        points: 15,
      },
      {
        name: "Raptorial Cogitator Core",
        restriction: "SPEEDER unit only. (Upgrade)",
        effect: "This unit's ranged attacks have [IGNORES COVER].",
        points: 15,
      },
    ],
    stratagems: [
      {
        name: "Data-link Augury",
        cost: "1CP",
        category: "Fulguris Task Force",
        when: "Your Shooting phase, when a friendly SPEEDER unit is selected to shoot.",
        target: "That SPEEDER unit.",
        effect:
          'Select one enemy unit within 24" of your unit. That enemy unit has +6" detection range until your unit has shot.',
      },
      {
        name: "Reactive Evasion",
        cost: "1CP",
        category: "Fulguris Task Force",
        when: "Your opponent's Movement phase, when an enemy unit ends a move within 8\" of a friendly unengaged SPEEDER unit.",
        target: "That SPEEDER unit.",
        effect: 'Your unit can make a normal move of up to D3+3".',
      },
      {
        name: "Anti-grav Surge",
        cost: "1CP",
        category: "Fulguris Task Force",
        when: "End of your opponent's Fight phase.",
        target: "One friendly unengaged SPEEDER unit.",
        effect: "Place your unit in strategic reserves.",
      },
    ],
  },
  {
    id: "librarius-conclave",
    name: "Librarius Conclave",
    tagline:
      "Warrior-mystics of the Chapter unleash supernatural warp-fuelled powers",
    primaryObjective: "reconnaissance",
    detachmentPoints: 1,
    page: 4,
    rules: [
      {
        name: "Psychic Disciplines",
        effect:
          "At the start of the battle round, select one of the following Psychic Disciplines abilities. Friendly ADEPTUS ASTARTES PSYKER units have that ability until the end of the battle round.\n" +
          'Biomancy Discipline: This unit has +2" M.\n' +
          "Divination Discipline: This unit's attacks can: reroll hit rolls of 1; reroll wound rolls of 1.\n" +
          'Pyromancy Discipline: This unit\'s ranged attacks that target an enemy unit within 12" of this unit have +1 AP.\n' +
          "Telekinesis Discipline: Ranged attacks that target this unit have -1 S.\n" +
          "Telepathy Discipline: This unit's attacks can ignore modifiers to BS, WS and hit rolls.",
      },
    ],
    enhancements: [
      {
        name: "Celerity",
        restriction: "ADEPTUS ASTARTES PSYKER model only.",
        effect:
          "When this unit is selected to make an advance move, that move does not prevent this unit from being eligible to declare a charge.\nWhen this unit is selected to make a fallback move, if this unit has the Biomancy Discipline ability, that move does not prevent this unit from being eligible to declare a charge.",
        points: 35,
      },
      {
        name: "Fusillade",
        restriction: "ADEPTUS ASTARTES PSYKER model only.",
        effect:
          "This unit's ranged attacks have: [LETHAL HITS]. If this unit has the Pyromancy Discipline ability, [SUSTAINED HITS 1] as well.",
        points: 25,
      },
      {
        name: "Obfuscation",
        restriction: "ADEPTUS ASTARTES PSYKER model only.",
        effect:
          'Enemy units cannot target this unit with snap shooting attacks. If this unit has the Telepathy Discipline ability, this unit has 3" detection range.',
        points: 25,
      },
      {
        name: "Prescience",
        restriction:
          "ADEPTUS ASTARTES PSYKER model only (excluding TERMINATOR models).",
        effect:
          '(Once per turn per unit) In your opponent\'s Movement phase, when an enemy unit ends a move within 8" of this unit, if this unit is unengaged, this unit can make a normal move of: up to D6"; or, if this unit has the Divination Discipline ability, up to 6".',
        points: 20,
      },
      {
        name: "Temporal Corridor",
        restriction: "ADEPTUS ASTARTES PSYKER model only.",
        effect:
          "If this unit has the Telekinesis Discipline ability, this unit has Deep Strike. At the end of your opponent's Fight phase, if this unit is unengaged, you can use this ability. If you do: place this unit in strategic reserves; this unit can make an ingress move in your next Movement phase (including in your first turn).",
        points: 25,
      },
    ],
    stratagems: [],
  },
  {
    id: "subversion-assets",
    name: "Subversion Assets",
    tagline:
      "Stealthy battle-brothers and neophytes eliminate the foe's lurking threats",
    primaryObjective: "disruption",
    detachmentPoints: 1,
    page: 5,
    rules: [
      {
        name: "Nowhere to Hide",
        effect:
          "Friendly PHOBOS/SCOUT SQUAD units have the following ability:\n" +
          'Transhuman Perception: In your Shooting phase, this unit can select one visible enemy unit within 12". That enemy unit is detected: while a unit is detected, that unit has +3" detection range.',
      },
    ],
    enhancements: [
      {
        name: "Shroud Field",
        restriction: "PHOBOS model only.",
        effect: "This model has: Lone Operative; Stealth.",
        points: 20,
      },
      {
        name: "Death in the Dark",
        restriction: "INFANTRY PHOBOS unit only. (Upgrade)",
        effect:
          "This unit's attacks that target a hidden unit have +1 to hit rolls.",
        points: 15,
      },
    ],
    stratagems: [
      {
        name: "Adaptive Operations",
        cost: "1CP",
        category: "Subversion Assets",
        when: "Your Shooting phase, when a friendly PHOBOS/SCOUT SQUAD unit starts an action.",
        target: "That PHOBOS/SCOUT SQUAD unit.",
        effect:
          "That action does not prevent your unit from being eligible to shoot.",
      },
      {
        name: "Strike from the Shadows",
        cost: "1CP",
        category: "Subversion Assets",
        when: "Your Shooting phase, when a friendly PHOBOS/SCOUT SQUAD unit has shot.",
        target: "That PHOBOS/SCOUT SQUAD unit.",
        effect:
          "Those ranged attacks do not prevent your unit from being hidden.",
      },
      {
        name: "Cloaked Position",
        cost: "1CP",
        category: "Subversion Assets",
        when: "Start of your opponent's Movement phase.",
        target: "One friendly unengaged PHOBOS/SCOUT SQUAD unit.",
        effect:
          'Your unit has -3" detection range until the end of the turn.',
      },
    ],
  },
  {
    id: "armoured-speartip",
    name: "Armoured Speartip",
    tagline:
      "The largest and most powerful vehicles in the armouries of Adeptus Astartes Chapters combine the firepower of a true battle tank with the carrying capacity of an armoured transport to bear Space Marines into the heart of battle.",
    description:
      "The largest and most powerful vehicles in the armouries of Adeptus Astartes Chapters combine the firepower of a true battle tank with the carrying capacity of an armoured transport to bear Space Marines into the heart of battle. Land Raiders slam through walls, toppling buildings and scattering cowering infantry before dropping their assault ramps and deploying battle-brothers into the midst of stunned foes. Repulsors obliterate bunker lines and screening units with their suite of heavy weapons before unloading their complements of warriors. Meanwhile, Stormraven Gunships descend from the heavens, strafing enemies and dropping further reinforcements onto crucial objectives. When subjected to such a frightening display of combined arms warfare, most foes find their battle lines disordered and broken. By the time a response is mustered, the Space Marines are loading up in their heavy transports once more, destined for the next battle and leaving only ruin in their wake.",
    primaryObjective: "take-and-hold",
    detachmentPoints: 3,
    page: 6,
    keywordsNote:
      "ADEPTUS ASTARTES TRANSPORT units from your army (excluding FLY) that have a Wounds characteristic of 14+ have the HEAVY TRANSPORT keyword.",
    rules: [
      {
        name: "Rapid Deployment",
        effect:
          "Each time an ADEPTUS ASTARTES unit from your army disembarks from a TRANSPORT (excluding FLY) that made a Normal or Advance move this phase (excluding those that arrived from Strategic Reserves), that disembarked unit can make a Normal move of up to D6\", or a Normal move of up to D3+3\" instead if that TRANSPORT is a HEAVY TRANSPORT (see keywords).",
      },
    ],
    enhancements: [
      {
        name: "Liberator",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "If you control an objective marker at the end of your Command phase, and the bearer's unit (or any HEAVY TRANSPORT it is embarked within) is within range of that objective marker, that objective marker remains under your control until your opponent's Level of Control over that objective marker is greater than yours at the end of a phase.",
        points: 15,
      },
      {
        name: "Tip of the Spear",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "If the bearer starts the battle embarked within a TRANSPORT, that TRANSPORT has the Scouts 6\" ability.",
        points: 40,
      },
      {
        name: "Shock Deployment",
        restriction: "ADEPTUS ASTARTES TERMINATOR or GRAVIS model only.",
        effect:
          "In your Shooting phase, each time the bearer's unit is selected to shoot, if it disembarked from a TRANSPORT this turn, until the end of the phase, ranged weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability.",
        points: 20,
      },
      {
        name: "Armoured Commander",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "Once per turn, in your Movement phase, the bearer can use this Enhancement. If it does, select one friendly ADEPTUS ASTARTES TRANSPORT that is in Strategic Reserves. Until the end of the phase, for the purposes of setting up that TRANSPORT on the battlefield, treat the current battle round number as being one higher than it actually is.",
        points: 25,
      },
    ],
    stratagems: [
      {
        name: "Machine Wrath",
        cost: "1CP",
        category: "Epic Deed",
        when: "Any phase, just after a HEAVY TRANSPORT unit from your army with the Deadly Demise ability is destroyed.",
        target:
          "That HEAVY TRANSPORT unit, if you rolled a 6 for its Deadly Demise ability. You can use this Stratagem on that unit even though it was just destroyed.",
        effect:
          "Your unit can make a Normal or Fall Back move before its Deadly Demise ability is resolved, and before any embarked units perform an Emergency Disembarkation. When making this move, your unit can move through enemy models (excluding MONSTERS and VEHICLES) and can move within Engagement Range of such models, but cannot end that move within Engagement Range of them, and any Desperate Escape test is automatically passed.",
      },
      ARMOUR_OF_CONTEMPT_RULE(),
      {
        name: "Advanced Deployment",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Movement phase.",
        target:
          "One ADEPTUS ASTARTES TRANSPORT unit from your army that has not been selected to move this phase.",
        effect:
          "Until the end of the phase, units can disembark from your TRANSPORT after it has Advanced. Units that do so count as having made a Normal move this phase, and cannot declare a charge in the same turn (unless your TRANSPORT has the Assault Ramp ability), but can otherwise act normally.",
      },
      {
        name: "Ceramite Sledgehammer",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Movement phase.",
        target:
          "One ADEPTUS ASTARTES TRANSPORT unit from your army that has not been selected to move this phase.",
        effect:
          "Until the end of the phase, each time your unit makes a Normal or Advance move, it can move horizontally through terrain features. In addition, if your unit is a HEAVY TRANSPORT, when making this move, your unit can move through enemy models (excluding MONSTERS and VEHICLES) and can move within Engagement Range of such models, but cannot end that move within Engagement Range of them, and any Desperate Escape test is automatically passed.",
      },
      {
        name: "Rapid Embarkation",
        cost: "1CP",
        category: "Wargear",
        when: "End of the Fight phase.",
        target:
          "One ADEPTUS ASTARTES INFANTRY unit from your army that is not within Engagement Range of one or more enemy units, and one friendly HEAVY TRANSPORT it is able to embark within.",
        effect:
          'If your ADEPTUS ASTARTES INFANTRY unit is wholly within 6" of that HEAVY TRANSPORT, it can embark within it.',
      },
      {
        name: "Purgation Doctrine",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Shooting phase.",
        target:
          "One ADEPTUS ASTARTES unit from your army that has not been selected to shoot this phase.",
        effect:
          "Until the end of the phase, each time a model in your unit makes an attack, add 1 to the Hit roll (if your unit disembarked from a HEAVY TRANSPORT this turn, add 1 to the Wound roll as well).",
      },
    ],
  },
  {
    id: "headhunter-task-force",
    name: "Headhunter Task Force",
    tagline:
      "Veteran tank crews pilot their vehicles as though they were extensions of their bodies and wills.",
    description:
      "Veteran tank crews pilot their vehicles as though they were extensions of their bodies and wills. The crews lend their multispectral autosenses, transhuman reactions, heightened strategic and tactical awareness, and fearless martial focus. The tanks, meanwhile, contribute bellicose machine spirits, potent weaponry, advanced systems and durable armour. When such crews and their war engines are fielded en masse, the result is an elite armoured formation capable of prosecuting the most complex or high-risk operations whilst eliminating dangerous targets. Be it stalking and felling enemy superheavy war engines, smashing a path through fortifications or destroying the foes' armour, Space Marine tank crews excel. Under covering fire from Vindicators, squadrons of Predators and Gladiators drive home armoured assaults that overwhelm the foe amidst storms of laser blasts and bolt rounds, leaving only shellshocked remnants for the infantry to mop up.",
    primaryObjective: "priority-assets",
    detachmentPoints: 2,
    page: 8,
    keywordsNote:
      "ADEPTUS ASTARTES VEHICLE units from your army (excluding FORTIFICATIONS, DROP PODS, WALKERS and units that can FLY) have the TANK ACE keyword. In the Muster Armies step, you can select up to three TANK ACE units from your army to gain the CHARACTER keyword. Designer's Note: This means that the selected units can be given Enhancements, and one of them can be selected as your WARLORD.",
    rules: [
      {
        name: "Target Sighted",
        effect:
          'Each time a TANK ACE unit from your army Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6" to the Move characteristic of models in that unit.\nEach time a TANK ACE unit from your army shoots in your Shooting phase, if that unit did not Advance this turn, you can reroll the Damage roll.',
      },
    ],
    enhancements: [
      {
        name: "Redoubtable Machine Spirit",
        restriction: "ADEPTUS ASTARTES VEHICLE model only.",
        effect:
          "The bearer has a 5+ invulnerable save and, at the end of your Command phase, the bearer regains 1 lost wound.",
        points: 25,
      },
      {
        name: "Gunnery Honours",
        restriction: "ADEPTUS ASTARTES VEHICLE model only.",
        effect:
          "Once per phase, you can reroll one Hit roll, one Wound roll and one Damage roll for the bearer.",
        points: 20,
      },
      {
        name: "Firestorm Coordinators",
        restriction: "ADEPTUS ASTARTES VEHICLE model only.",
        effect:
          "Ranged weapons equipped by the bearer have the [SUSTAINED HITS 1] ability.",
        points: 20,
      },
      {
        name: "Astartes Tank Ace",
        restriction: "ADEPTUS ASTARTES VEHICLE model only. (Aura)",
        effect:
          'In your Shooting phase, while a friendly ADEPTUS ASTARTES VEHICLE unit is within 6" of the bearer, ranged weapons equipped by models in that unit have the [ASSAULT] ability.',
        points: 40,
      },
    ],
    stratagems: [
      ARMOUR_OF_CONTEMPT_RULE(),
      {
        name: "Rapid Gunnery",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Shooting phase.",
        target:
          "One ADEPTUS ASTARTES unit from your army that has not been selected to shoot this phase.",
        effect:
          "Until the end of the phase, your unit is eligible to shoot in a turn in which it Fell Back.",
      },
      {
        name: "Target Weak Point",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Shooting phase.",
        target: "One TANK ACE unit from your army that has not been selected to shoot this phase.",
        effect:
          "Until the end of the phase, each time a model in your unit makes a ranged attack that targets a MONSTER or VEHICLE unit, improve the Armour Penetration characteristic of that attack by 1.",
        restrictions:
          "A unit cannot be targeted with this and the Kill Shot Stratagem in the same phase.",
      },
      {
        name: "Reactive Repositioning",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target:
          'One TANK ACE unit from your army (excluding units containing one or more models with a Wounds characteristic of 16+) that is within 8" of that enemy unit.',
        effect: 'Your unit can make a Normal move of up to D6".',
      },
      {
        name: "Kill Shot",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Shooting phase.",
        target: "One TANK ACE unit from your army that has not been selected to shoot this phase.",
        effect:
          "Until the end of the phase, each time a model in your unit makes an attack that targets a MONSTER or VEHICLE unit, reroll a Wound roll of 1. If the target unit is below its Starting Strength, you can reroll the Wound roll instead.",
        restrictions:
          "A unit cannot be targeted with this and the Target Weak Point Stratagem in the same phase.",
      },
      {
        name: "Machine Vengeance",
        cost: "1CP",
        category: "Epic Deed",
        when: "Your opponent's Shooting phase, just after an enemy unit has shot.",
        target:
          "One TANK ACE unit from your army (excluding units containing one or more models with a Wounds characteristic of 16+) that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "Your unit can shoot as if it were your Shooting phase, but must target only that enemy unit when doing so, and can only do so if that enemy unit is visible and an eligible target.",
      },
    ],
  },
  {
    id: "ceramite-sentinels",
    name: "Ceramite Sentinels",
    tagline:
      "Some Space Marines are as lethal when defending a fortified position as they are when attacking suddenly from orbit.",
    description:
      "Some Space Marines - most notably the genesons of Dorn - are as lethal when defending a fortified position as they are when attacking suddenly from orbit. These specialists in both offensive and defensive siegecraft can turn even the most bullet-riddled and crumbling ruin into a veritable fortress. Equally, they are expertly trained in picking off foes dug-in behind barricades and ramparts, and in rapidly clearing out garrison forces who believed themselves safe behind their walls. Typically, Space Marines operating in this fashion establish temporary battlefield strongpoints where they can meet and halt the advance of some powerful foe before switching to the offensive the moment the enemy's momentum stalls. Equally, though, on those rare occasions that the Adeptus Astartes are called upon to garrison a true fortress, these forces are as immovable as they are brutal. Shrugging off incoming fire, raining down their own furious volleys in return and launching punishing counterassaults, they destroy all who assail them.",
    primaryObjective: "take-and-hold",
    detachmentPoints: 3,
    page: 10,
    rules: [
      {
        name: "Adaptive Defence",
        effect:
          "Each time an ADEPTUS ASTARTES model from your army makes an attack, if that model's unit is within a terrain feature, reroll a Hit roll of 1 and re-roll a Wound roll of 1.\n" +
          "ADEPTUS ASTARTES units from your army gain the ENTRENCHED keyword while all of the following are true: that unit is within a terrain feature; that unit was not set up on the battlefield this turn; no model in that unit has moved more than 3\" this turn.",
      },
    ],
    enhancements: [
      {
        name: "Honour Indefatigable",
        restriction: "GRAVIS model only.",
        effect:
          "The first time the bearer is destroyed, roll one D6 at the end of the phase. On a 2+, set the bearer back up on the battlefield, as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with its full wounds remaining.",
        points: 25,
      },
      {
        name: "Castellum Omnivox",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "Each time the bearer's unit makes a Fall Back move, select one of the following to apply to that unit until the end of the turn: that unit is eligible to perform an Action in a turn in which it Fell Back; or, that unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
        points: 20,
      },
      {
        name: "Spy-skull Data Link",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "Ranged weapons equipped by models in the bearer's unit have the [IGNORES COVER] ability.",
        points: 15,
      },
      {
        name: "Defensive Mastery",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "After both players have deployed their armies, select up to three ADEPTUS ASTARTES units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves, regardless of how many units are already in Strategic Reserves.",
        points: 25,
      },
    ],
    stratagems: [
      {
        name: "Unyielding Might",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Command phase.",
        target:
          "One ADEPTUS ASTARTES unit from your army that is within Engagement Range of one or more enemy units.",
        effect:
          "Until the start of your next Command phase, add 1 to the Objective Control characteristics of models in your unit.",
      },
      {
        name: "Stand to the End",
        cost: "1CP",
        category: "Epic Deed",
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target:
          "One ADEPTUS ASTARTES unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, adding 1 to the result if it is an ENTRENCHED unit: on a 4+, do not remove it from play. That destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
      {
        name: "Priority Strike",
        cost: "2CP",
        category: "Battle Tactic",
        when: "Your Shooting phase or the Fight phase.",
        target:
          "One ADEPTUS ASTARTES INFANTRY or ADEPTUS ASTARTES MOUNTED unit from your army that has not been selected to shoot or fight this phase.",
        effect:
          "Until the end of the phase, each time a model in your unit makes an attack that targets a CHARACTER, MONSTER or VEHICLE unit, you can reroll the Wound roll.",
      },
      {
        name: "Augmented Targeting",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Shooting phase.",
        target:
          "One ADEPTUS ASTARTES unit from your army that has not been selected to shoot this phase.",
        effect:
          "Select either the [SUSTAINED HITS 1] or [LETHAL HITS] abilities. Until the end of the phase, ranged weapons equipped by models in your unit have the selected ability. If your unit is ENTRENCHED, until the end of the phase, ranged weapons equipped by models in your unit have the [SUSTAINED HITS 1] and [LETHAL HITS] abilities instead.",
      },
      ARMOUR_OF_CONTEMPT_RULE(),
      {
        name: "Evasive Repositioning",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your opponent's Shooting phase, just after an enemy unit has shot.",
        target:
          "One ADEPTUS ASTARTES INFANTRY or ADEPTUS ASTARTES MOUNTED unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          'Your unit can make a Normal move of up to D6". If your unit is ENTRENCHED, you can reroll the D6 to determine how far your unit can move.',
      },
    ],
  },
  {
    id: "blade-of-ultramar",
    name: "Blade of Ultramar",
    tagline:
      "No Chapter better embodies the Codex Astartes' teachings than the Ultramarines, and no officer amongst their ranks more perfectly employs those lessons than Marneus Calgar.",
    description:
      "No Chapter better embodies the Codex Astartes' teachings than the Ultramarines, and no officer amongst their ranks more perfectly employs those lessons than Marneus Calgar. Under the deft command of the Chapter Master, squads of Ultramarines alloy their battlefield roles of veteran, battle line, close support and fire support, becoming a relentless machine of destruction. From squad-level tactics up to their sweeping battlefield strategy, Calgar's warriors fight as though they were already privy to the foe's plans and have adapted a countermeasure for every last cut and thrust. Orchestrated with the Chapter Master's flowing strategic genius, the plan unfolds like multi-layered, adaptive clockwork until the last of the enemy are naught but bodies and wreckage to be crushed beneath Calgar's armoured boots.",
    primaryObjective: "priority-assets",
    detachmentPoints: 3,
    page: 12,
    restrictions:
      "Your army can include ULTRAMARINES units, but it cannot include any ADEPTUS ASTARTES units drawn from any other Chapter.",
    rules: [
      {
        name: "Mastered Doctrines",
        effect:
          "At the start of up to three of your Command phases, you can select one of the Combat Doctrines listed below. Until the start of your next Command phase, that Combat Doctrine is active and its effects apply to all ADEPTUS ASTARTES units from your army. You cannot select a Combat Doctrine you have already selected this battle, unless a friendly Marneus Calgar model is on the battlefield.\n" +
          "Devastator Doctrine - The Codex Astartes details the strategic value of overwhelming firepower. This unit is eligible to shoot in a turn in which it Advanced.\n" +
          "Tactical Doctrine - The Codex lays out strategies for seizing the initiative. This unit is eligible to shoot and declare a charge in a turn in which it Fell Back.\n" +
          "Assault Doctrine - The Codex Astartes leaves no doubt that the killing blow must be delivered with a decisive close-quarters strike. This unit is eligible to declare a charge in a turn in which it Advanced.",
      },
    ],
    enhancements: [
      {
        name: "Armour of Antoninus",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "The bearer has a Save characteristic of 2+ and the Feel No Pain 5+ ability.",
        points: 20,
      },
      {
        name: "Oath of Macragge",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "Add 1 to the Attacks and Strength characteristics of the bearer's melee weapons. While the bearer is under the effects of the Assault Doctrine, add 2 to the Attacks and Strength characteristics of the bearer's melee weapons instead.",
        points: 15,
      },
      {
        name: "Student of the Codex",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "At the start of your Command phase, if the bearer is on the battlefield, it can use this Enhancement. If it does, until the start of your next Command phase, the Tactical Doctrine is active for this unit (instead of any other Combat Doctrine you select to be active for your army, and even if there is no Combat Doctrine active for your army).",
        points: 20,
      },
      {
        name: "Veteran of Behemoth",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "While the bearer is leading a unit, ranged weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability. In addition, while the bearer's unit is under the effects of the Devastator Doctrine, you can re-roll Advance rolls made for that unit.",
        points: 25,
      },
    ],
    stratagems: [
      ARMOUR_OF_CONTEMPT_RULE(),
      {
        name: "Ultramarian Adaptivity",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Command phase.",
        target: "One ADEPTUS ASTARTES unit from your army.",
        effect:
          "Select the Devastator Doctrine, Tactical Doctrine or Assault Doctrine. Until the start of your next Command phase, that Combat Doctrine is active for your unit instead of any other Combat Doctrine that is active for your army, even if you have already selected that Combat Doctrine this battle.",
      },
      {
        name: "Tactical Foresight",
        cost: "1CP",
        category: "Epic Deed",
        when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target:
          "One ADEPTUS ASTARTES unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "Until the end of the phase, each time an attack targets your unit, if the Strength characteristic of that attack is greater than or equal to the Toughness characteristic of that unit, subtract 1 from the Wound roll.",
      },
      {
        name: "Exemplary Vigilance",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Shooting phase.",
        target:
          "One ADEPTUS ASTARTES unit from your army that has not been selected to shoot this phase.",
        effect:
          "Until the end of the phase, ranged weapons equipped by models in your unit have the [IGNORES COVER] ability. If your unit is under the effects of the Devastator Doctrine, until the end of the phase, improve the Armour Penetration characteristic of such weapons by 1 as well.",
      },
      {
        name: "Courage and Honour!",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Fight phase.",
        target: "One ADEPTUS ASTARTES unit from your army.",
        effect:
          "Until the end of the phase, melee weapons equipped by models in your unit have the [LANCE] ability. If your unit is under the effects of the Assault Doctrine, until the end of the phase, improve the Armour Penetration characteristic of such weapons by 1 as well.",
      },
      {
        name: "Practical Tactics",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target:
          'One ADEPTUS ASTARTES INFANTRY or ADEPTUS ASTARTES MOUNTED unit from your army that is not within Engagement Range of one or more enemy units and is within 8" of the enemy unit that just ended that move.',
        effect:
          'Your unit can make a Normal move of up to D6", or a Normal move of up to 6" instead if it is under the effects of the Tactical Doctrine.',
      },
    ],
  },
  {
    id: "hammer-of-avernii",
    name: "Hammer of Avernii",
    tagline:
      "The most veteran warriors of the Iron Hands Chapter, Clan Company Avernii are as merciless as they are unstoppable in battle.",
    description:
      "The most veteran warriors of the Iron Hands Chapter, Clan Company Avernii are as merciless as they are unstoppable in battle. Marching relentlessly into the teeth of the foe, grim-faced Terminators and heavily augmented Sternguard Veterans sweep the enemy lines with targeting cogitators before eliminating their victims with unmerciful precision. Vanguard and Bladeguard Veterans tap into the volcanic ferocity that always boils - tightly contained - within the hearts of every Iron Hand, launching piledriver assaults into the heart of the enemy lines and slaughtering everything in reach. In the centre of the carnage is Caanok Var himself. He is the ironwrought cogitator that directs the flow of battle, the thundering reactor that fires the ire of his battle-brothers and the piston-driven bludgeon that reduces the foe to bloodied ruin.",
    primaryObjective: "purge-the-foe",
    detachmentPoints: 2,
    page: 14,
    restrictions:
      "Your army can include IRON HANDS units, but it cannot include any ADEPTUS ASTARTES units drawn from any other Chapter.",
    rules: [
      {
        name: "Calculated Annihilation",
        effect:
          "Each time a model from your army with the Oath of Moment ability makes an attack that targets your Oath of Moment target, you can reroll a Wound roll of 1.",
      },
      {
        name: "Recalculating",
        effect:
          "Once per battle round, after your Oath of Moment target is destroyed, if a Caanok Var model from your army is on the battlefield, select one enemy unit visible to that model. That enemy unit becomes your Oath of Moment target until you select a new one.",
      },
    ],
    enhancements: [
      {
        name: "Spiritus Ferrum",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "Add 1 to the Attacks characteristic of the bearer's melee weapons. Once per battle, at the start of any phase, the bearer can use this Enhancement. If it does, until the end of the phase, add 1 to the Attacks characteristic of melee weapons equipped by all other models in the bearer's unit as well.",
        points: 25,
      },
      {
        name: "Medusan Roar",
        restriction: "ADEPTUS ASTARTES model only. (Aura)",
        effect:
          "While an enemy unit (excluding MONSTERS and VEHICLES) is within 6\" of the bearer, each time that unit fails a Battle-shock test, one model in that unit is destroyed (chosen by its controlling player). Once per battle, when such an enemy unit fails a Battle-shock test, you can choose for D3 models in that unit to be destroyed in this way instead.",
        points: 30,
      },
      {
        name: "Iron Laurel",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "Improve the Objective Control characteristic of the bearer by 1. Once per battle, at the start of any phase, the bearer can use this Enhancement. If it does, until the end of the phase, add 1 to the Objective Control characteristic of all other models in the bearer's unit as well.",
        points: 10,
      },
      {
        name: "Steel Font",
        restriction: "ADEPTUS ASTARTES TERMINATOR model only.",
        effect:
          "While the bearer is leading a unit, in your Command phase, you can return 1 destroyed Bodyguard model to that unit.",
        points: 15,
      },
    ],
    stratagems: [
      ARMOUR_OF_CONTEMPT_RULE(),
      {
        name: "Cogitated Ferocity",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Fight phase.",
        target:
          "One ADEPTUS ASTARTES DREADNOUGHT, TERMINATOR, BLADEGUARD VETERAN SQUAD, STERNGUARD VETERAN SQUAD or VANGUARD VETERAN SQUAD unit from your army that has not been selected to fight this phase.",
        effect:
          "Select either the [SUSTAINED HITS 1] or [LETHAL HITS] abilities. Until the end of the phase, melee weapons equipped by models in your unit have the selected ability.",
      },
      {
        name: "Ruthless Butchery",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Shooting phase or the Fight phase.",
        target:
          "One ADEPTUS ASTARTES DREADNOUGHT, TERMINATOR, BLADEGUARD VETERAN SQUAD, STERNGUARD VETERAN SQUAD or VANGUARD VETERAN SQUAD unit from your army that has not been selected to shoot or fight this phase.",
        effect:
          "Until the end of the phase, each time a model in your unit makes an attack, add 1 to the Hit roll. If your unit is below Starting Strength, add 1 to the Wound roll as well.",
      },
      {
        name: "Augmetic Fortitude",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your opponent's Charge phase, just after an enemy unit ends a Charge move.",
        target:
          "One ADEPTUS ASTARTES TERMINATOR, BLADEGUARD VETERAN SQUAD, STERNGUARD VETERAN SQUAD or VANGUARD VETERAN SQUAD unit from your army within Engagement Range of that enemy unit.",
        effect:
          "Until the end of the turn, each time an attack is allocated to a model in your unit, subtract 1 from the Damage characteristic of that attack.",
      },
      {
        name: "Dominator Beacon",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Movement phase.",
        target:
          "One ADEPTUS ASTARTES DREADNOUGHT, TERMINATOR, BLADEGUARD VETERAN SQUAD, STERNGUARD VETERAN SQUAD or VANGUARD VETERAN SQUAD unit from your army within range of an objective marker you control.",
        effect:
          "That objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the end of a phase.",
      },
      {
        name: "Dropship Extraction",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "End of your opponent's Fight phase.",
        target:
          "One ADEPTUS ASTARTES TERMINATOR unit from your army. You cannot target a unit that is within Engagement Range of one or more enemy units.",
        effect:
          "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    ],
  },
  {
    id: "spearpoint-task-force",
    name: "Spearpoint Task Force",
    tagline:
      "When Suboden Khan rides to war, he is accompanied by the cream of the Chapter.",
    description:
      "When Suboden Khan rides to war, he is accompanied by the cream of the Chapter. Some go to war mounted on Raider-pattern bikes, forming the lance tip by which the enemy line is broken. Stormspeeders skim overhead, harassing the enemy with fire, whilst elite infantry scramble from their transports to exploit the salients their mounted brothers have opened. The First Khan orchestrates these assaults and sweeping flanking manoeuvres from the saddle of his grav bike. He leads from the front, raking the enemy with fire before plunging into their ranks.",
    primaryObjective: "disruption",
    detachmentPoints: 2,
    page: 16,
    restrictions:
      "Your army can include WHITE SCARS units, but it cannot include any ADEPTUS ASTARTES units drawn from any other Chapter.",
    rules: [
      {
        name: "Stormswift Onslaught",
        effect:
          "ADEPTUS ASTARTES units from your army are eligible to declare a charge in a turn in which they Advanced or Fell Back.",
      },
      {
        name: "Wrath of the First Khan",
        effect:
          'At the end of the Fight phase, if a Suboden Khan unit from your army destroyed one or more enemy units this phase and is not within Engagement Range of one or more enemy units, that unit can make a Normal move of up to 6".',
      },
    ],
    enhancements: [
      {
        name: "Spearpoint Paragon",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "Improve the Strength and Armour Penetration characteristics of the bearer's melee weapons by 1. Each time the bearer ends a Charge move, until the end of the turn, improve the Strength and Armour Penetration characteristics of the bearer's melee weapons by 2 instead.",
        points: 25,
      },
      {
        name: "Stormseers' Wisdom",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "While the bearer is leading a unit, you can reroll Advance rolls made for that unit.",
        points: 15,
      },
      {
        name: "Hunter's Eye",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "Ranged weapons equipped by models in the bearer's unit have the [SUSTAINED HITS 1] and [IGNORES COVER] abilities.",
        points: 20,
      },
      {
        name: "Chogorian Huntmaster",
        restriction: "ADEPTUS ASTARTES MOUNTED model only.",
        effect:
          "If the bearer's unit is in Strategic Reserves, for the purposes of setting up that unit on the battlefield, treat the current battle round number as being one higher than it actually is.",
        points: 25,
      },
    ],
    stratagems: [
      ARMOUR_OF_CONTEMPT_RULE(),
      {
        name: "Hunter's Instincts",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target:
          'One ADEPTUS ASTARTES INFANTRY unit or ADEPTUS ASTARTES MOUNTED unit from your army that is within 8" of that enemy unit. You cannot target a unit that is within Engagement Range of one or more enemy units.',
        effect: 'Your unit can make a Normal move of up to 6".',
      },
      {
        name: "Spear Thrust and Sabre Swing",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Fight phase.",
        target:
          "One ADEPTUS ASTARTES unit from your army that has not been selected to fight this phase.",
        effect:
          "Select either the [LANCE] or [LETHAL HITS] ability. Until the end of the phase, melee weapons equipped by models in your unit have the selected ability. If it is a MOUNTED unit, until the end of the phase, melee weapons equipped by models in your unit have the [LANCE] and [LETHAL HITS] abilities instead.",
      },
      {
        name: "Evasive Manoeuvres",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.",
        target:
          "One ADEPTUS ASTARTES MOUNTED or ADEPTUS ASTARTES FLY VEHICLE unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Wound roll.",
      },
      {
        name: "Mobile Lethality",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Movement phase.",
        target: "One ADEPTUS ASTARTES unit from your army.",
        effect:
          "Until the end of the turn, your unit is eligible to shoot in a turn in which it Advanced or Fell Back.",
      },
      {
        name: "Withdraw and Regroup",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "End of your opponent's Fight phase.",
        target:
          "One ADEPTUS ASTARTES MOUNTED or ADEPTUS ASTARTES FLY VEHICLE unit from your army that is not within Engagement Range of one or more enemy units.",
        effect:
          "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    ],
  },
  {
    id: "forgefathers-seekers",
    name: "Forgefather's Seekers",
    tagline:
      "The Forgefathers of the Salamanders have quested for millennia to find their Primarch's scattered relics.",
    description:
      "The Forgefathers of the Salamanders have quested for millennia to find their Primarch's scattered relics. The incumbent Seeker, Vulkan He'stan, will stop at nothing to see his task done. The battle-brothers who fight at their side are masters of short-ranged firefights and close-quarters engagements. These warriors stride into the midst of their foes, immolating them in tempests of flame or blasting them apart with volleys of bolter fire. Only once the enemy have been reduced to ashes does the Forgefather's search truly begin.",
    primaryObjective: "priority-assets",
    detachmentPoints: 2,
    page: 18,
    restrictions:
      "Your army can include SALAMANDERS units, but it cannot include any ADEPTUS ASTARTES units drawn from any other Chapter.",
    rules: [
      {
        name: "Vulkan's Quest",
        effect:
          'Ranged weapons equipped by ADEPTUS ASTARTES models from your army have the [ASSAULT] ability, and each time an attack made with such a weapon targets a unit within 12", add 1 to the Strength characteristic of that attack.',
      },
      {
        name: "Seeker's Companions",
        effect:
          "Start to perform an Action in a turn in which it Advanced.\nShoot in a turn in which it started to perform an Action.",
      },
    ],
    enhancements: [
      {
        name: "War-tempered Artifice",
        restriction: "ADEPTUS ASTARTES INFANTRY model only.",
        effect: "Add 3 to the Strength characteristic of the bearer's melee weapons.",
        points: 25,
      },
      {
        name: "Forged in Battle",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "While the bearer is leading a unit, once per turn, after making a Hit roll or a saving throw for a model in that unit, you can change the result of that roll to an unmodified 6.",
        points: 15,
      },
      {
        name: "Adamantine Mantle",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "Each time an attack is allocated to the bearer, subtract 1 from the Damage characteristic of that attack. If that attack was made with a Melta or Torrent weapon, change the Damage characteristic of that attack to 1 instead.",
        points: 20,
      },
      {
        name: "Immolator",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "Add 1 to the Attacks characteristics of Torrent weapons equipped by models in the bearer's unit.",
        points: 10,
      },
    ],
    stratagems: [
      ARMOUR_OF_CONTEMPT_RULE(),
      {
        name: "Immolation Protocols",
        cost: "2CP",
        category: "Battle Tactic",
        when: "Your Shooting phase.",
        target:
          "One ADEPTUS ASTARTES unit from your army that has not been selected to shoot this phase.",
        effect:
          "Until the end of the phase, Torrent weapons equipped by models in your unit have the [DEVASTATING WOUNDS] ability.",
      },
      {
        name: "Crucible of Battle",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Shooting phase or the Fight phase.",
        target:
          "One ADEPTUS ASTARTES INFANTRY unit from your army that has not been selected to shoot or fight this phase.",
        effect:
          'Until the end of the phase, each time a model in your unit makes an attack that targets the closest eligible target within 6", add 1 to the Wound roll.',
      },
      {
        name: "Burning Vengeance",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your opponent's Shooting phase, just after an enemy unit has shot.",
        target:
          "One ADEPTUS ASTARTES TRANSPORT unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "One unit embarked within that TRANSPORT can disembark as if it were your Movement phase, and can then shoot as if it were your Shooting phase, but must target only that enemy unit when doing so, and can only do so if that enemy unit is an eligible target.",
      },
      {
        name: "Wrathful Inferno",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Movement phase, just after an ADEPTUS ASTARTES INFANTRY unit from your army Falls Back.",
        target: "That unit.",
        effect:
          "Until the end of the turn, your unit is eligible to shoot in a turn in which it Fell Back.",
      },
      {
        name: "Blazing Earth",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Start of your opponent's Charge phase.",
        target:
          "One ADEPTUS ASTARTES unit from your army equipped with one or more Torrent weapons.",
        effect:
          'Select one enemy unit (excluding MONSTERS and VEHICLES and units with the FLY keyword) within 12" of and visible to your unit. Until the end of the phase, each time that enemy unit declares a charge, subtract 2 from the Charge roll (this is not cumulative with any other negative modifiers to that Charge roll).',
      },
    ],
  },
  {
    id: "emperors-shield",
    name: "Emperor's Shield",
    tagline:
      "Comprising the Chapter's most elite veterans, the Imperial Fists 1st Company - known as the Emperor's Shield - are an indomitable fighting force.",
    description:
      "Comprising the Chapter's most elite veterans, the Imperial Fists 1st Company - known as the Emperor's Shield - are an indomitable fighting force. Led by First Captain Lysander, the battle-brothers of the 1st favour the application of overwhelming force, striking always where the enemy is strongest, picking out priority targets and shattering them in coordinated assaults. Vanguard Veterans charge into the fray, tearing at exposed flanks and forcing gaps in the enemy line. Meanwhile, the Chapter's Sternguard stride forward to exploit these breaches and seize ground. Lysander and his Terminator bodyguard are always at the centre of the fighting, inserted by Land Raider or orbital teleportarium to rip out the heart of the enemy in stunning and precisely targeted displays of martial might.",
    primaryObjective: "purge-the-foe",
    detachmentPoints: 2,
    page: 20,
    restrictions:
      "Your army can include IMPERIAL FISTS units, but it cannot include any ADEPTUS ASTARTES units drawn from any other Chapter.",
    rules: [
      {
        name: "Wrath of Dorn",
        effect:
          "Each time a model from your army with the Oath of Moment ability makes an attack that targets your Oath of Moment target, you can reroll a Wound roll of 1.\nEach time a model in a Darnath Lysander unit from your army makes an attack that targets your Oath of Moment target, you can re-roll the Wound roll.",
      },
    ],
    enhancements: [
      {
        name: "Champion of the Feast",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "Add 1 to the Attacks characteristic of the bearer's melee weapons. Once per battle, at the start of any phase, the bearer can use this Enhancement. If it does, until the end of the phase, add 1 to the Attacks characteristic of melee weapons equipped by other models in the bearer's unit as well.",
        points: 25,
      },
      {
        name: "Disciple of Rhetoricus",
        restriction: "ADEPTUS ASTARTES TERMINATOR model only.",
        effect:
          "Improve the Objective Control characteristic of the bearer by 1. Once per battle, at the start of any phase, the bearer can use this Enhancement. If it does, until the end of the phase, add 1 to the Objective Control characteristic of other models in the bearer's unit as well.",
        points: 10,
      },
      {
        name: "Indomitable Champion",
        restriction: "ADEPTUS ASTARTES TERMINATOR model only.",
        effect:
          "The first time the bearer is destroyed, roll one D6 at the end of the phase. On a 2+, set the bearer back up on the battlefield, as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with 3 wounds remaining.",
        points: 20,
      },
      {
        name: "Malodraxian Standard",
        restriction: "ADEPTUS ASTARTES ANCIENT model only.",
        effect:
          "Each time an attack targets the bearer's unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of the bearer's unit, subtract 1 from the Wound roll.",
        points: 20,
      },
    ],
    stratagems: [
      ARMOUR_OF_CONTEMPT_RULE(),
      {
        name: "Wrathful Conquerors",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Movement phase.",
        target:
          "One ADEPTUS ASTARTES TERMINATOR, BLADEGUARD VETERAN SQUAD, STERNGUARD VETERAN SQUAD or VANGUARD VETERAN SQUAD unit from your army within range of an objective marker you control.",
        effect:
          "That objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any phase.",
      },
      {
        name: "Fury of the First",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Shooting phase or the Fight phase.",
        target:
          "One ADEPTUS ASTARTES TERMINATOR, BLADEGUARD VETERAN SQUAD, STERNGUARD VETERAN SQUAD or VANGUARD VETERAN SQUAD unit from your army that has not been selected to shoot or fight this phase.",
        effect:
          "Until the end of the phase, each time a model in your unit makes an attack, add 1 to the Hit roll. If your unit is below its Starting Strength, add 1 to the Wound roll as well.",
      },
      {
        name: "Disciplined Extermination",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Shooting phase.",
        target:
          "One ADEPTUS ASTARTES TERMINATOR, BLADEGUARD VETERAN SQUAD, STERNGUARD VETERAN SQUAD or VANGUARD VETERAN SQUAD unit from your army that has not been selected to shoot this phase.",
        effect:
          "Until the end of the phase, ranged weapons equipped by models in your unit have the [IGNORES COVER] ability and improve the Armour Penetration characteristic of such weapons by 1.",
      },
      {
        name: "Obdurate Vengeance",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target:
          "One ADEPTUS ASTARTES TERMINATOR, BLADEGUARD VETERAN SQUAD, STERNGUARD VETERAN SQUAD or VANGUARD VETERAN SQUAD unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6: on a 3+, do not remove it from play. The destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
      {
        name: "Dropship Extraction",
        cost: "1CP",
        category: "Battle Tactic",
        when: "End of your opponent's Fight phase.",
        target:
          "One ADEPTUS ASTARTES TERMINATOR unit from your army. You cannot target a unit that is within Engagement Range of one or more enemy units.",
        effect:
          "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    ],
  },
  {
    id: "shadowmark-talon",
    name: "Shadowmark Talon",
    tagline:
      "As Chapter Master of the Raven Guard, Aethon Shaan is a true master of the Trifold Path, utilising ambush, stealth and vigilance with surgical precision.",
    description:
      "As Chapter Master of the Raven Guard, Aethon Shaan is a true master of the Trifold Path, utilising ambush, stealth and vigilance with surgical precision. Following his well-laid plans, Scout Squads, Infiltrators and other clandestine warriors penetrate the enemy line to wage guerrilla warfare. As these battle-brothers draw the attention of the foe, the remainder of Shaan's warriors close in for the kill, assassinating officers and bringing down war machines with bursts of pinpoint fire. Before the enemy can react the Raven Guard are on the move once more, slipping into the shadows in preparation for the next targeted attack. Then, when the foe is bloodied and reeling, Shaan launches the main thrust of his assault, sweeping down with jump troops at his side to eviscerate his wounded prey.",
    primaryObjective: "disruption",
    detachmentPoints: 2,
    page: 22,
    restrictions:
      "Your army can include RAVEN GUARD units, but it cannot include any ADEPTUS ASTARTES units drawn from any other Chapter.",
    rules: [
      {
        name: "Masters of Shadow",
        effect:
          'Each time a ranged attack targets an ADEPTUS ASTARTES unit from your army, unless the attacking model is within 12", the target has the Benefit of Cover against that attack.',
      },
      {
        name: "Unparalleled Tactician",
        effect:
          "Once per battle round, if an Aethon Shaan model from your army is on the battlefield, you can use the Into Darkness Stratagem for 0CP.",
      },
    ],
    enhancements: [
      {
        name: "Blackwing Shroud",
        restriction: "ADEPTUS ASTARTES INFANTRY model only.",
        effect:
          "While the bearer is leading a unit, models in that unit have the Infiltrators ability.",
        points: 25,
      },
      {
        name: "Coronal Susurrant",
        restriction: "PHOBOS model only.",
        effect:
          'The bearer has the following ability: Lord of Deceit (Aura) - Once per turn, when your opponent targets a unit from their army within 12" of this model with a stratagem, you can use this ability. If you do increase the CP cost of that use of that stratagem by 1CP.',
        points: 30,
      },
      {
        name: "Umbral Raptor",
        restriction: "ADEPTUS ASTARTES model only.",
        effect: "The bearer has the Stealth and Lone Operative abilities.",
        points: 15,
      },
      {
        name: "Hunter's Instincts",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "In your Movement phase, if the bearer's unit is in Strategic Reserves, for the purposes of setting up that unit on the battlefield, treat the current battle round number as being one higher than it actually is.",
        points: 25,
      },
    ],
    stratagems: [
      ARMOUR_OF_CONTEMPT_RULE(),
      {
        name: "Stunning Fusillade",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Shooting phase.",
        target:
          "One ADEPTUS ASTARTES INFANTRY unit from your army that has not been selected to shoot this phase.",
        effect:
          'Until the end of the phase, each time a model in your unit makes a ranged attack that targets an enemy unit that is more than 12" away, improve the Ballistic Skill and Armour Penetration characteristics of that attack by 1. If one or more enemy models are destroyed as a result of those attacks, select one of those destroyed models; that destroyed model\'s unit must take a Battle-shock test.',
      },
      {
        name: "Lay Low the Tyrants",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Fight phase.",
        target:
          "One ADEPTUS ASTARTES INFANTRY unit from your army that has not been selected to fight this phase.",
        effect:
          "Until the end of the phase, melee weapons equipped by models in your unit have the [PRECISION] ability.",
      },
      {
        name: "Raptorial Vigilance",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target:
          'One ADEPTUS ASTARTES INFANTRY or ADEPTUS ASTARTES MOUNTED unit from your army that is within 9" of the enemy unit that just ended that move. You cannot target a unit that is within Engagement Range of one or more enemy units.',
        effect:
          'Your unit can make a Normal move of up to D6", or up to 6" instead if it is a PHOBOS or SCOUT SQUAD unit.',
      },
      {
        name: "Feint and Thrust",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Movement phase.",
        target: "One ADEPTUS ASTARTES unit from your army.",
        effect:
          "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back. If it is a PHOBOS or SCOUT SQUAD unit, it is also eligible to shoot and declare a charge in a turn in which it Advanced.",
      },
      {
        name: "Into Darkness",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "End of your opponent's Fight phase.",
        target:
          "Up to two PHOBOS and/or SCOUT SQUAD units from your army, or one other ADEPTUS ASTARTES INFANTRY unit from your army. You cannot target a unit that is within Engagement Range of one or more enemy units.",
        effect:
          "Remove those units from the battlefield and place them into Strategic Reserves.",
      },
    ],
  },
  {
    id: "bastion-task-force",
    name: "Bastion Task Force",
    tagline:
      "Where Imperial battle lines must hold against ferocious enemy pressure, a task force may be deployed to weather the storm.",
    description:
      "Where Imperial battle lines must hold against ferocious enemy pressure, a task force may be deployed to weather the storm until more numerous forces can move in to secure the area. Such a strategic deployment sees the Adeptus Astartes leverage their redoubtable fortitude and indomitable will to the maximum. They cannot fight battles of attrition, for their lives are too valuable to be wasted in the kind of slugging matches that should be reserved for the Astra Militarum. Instead, the Space Marines rely upon local tactical manoeuvrability and the flexible nature of their core infantry to put the teachings of the Codex Astartes to best use. Aggressive defence, localised counterattacks and frequent, rapid redeployment sees elite squads and heavy assets flawlessly supported by the more numerous battleline troops.",
    primaryObjective: "take-and-hold",
    detachmentPoints: 2,
    page: 24,
    rules: [
      {
        name: "Interlocking Tactics",
        effect:
          "ADEPTUS ASTARTES BATTLELINE units from your army: are eligible to shoot and declare a charge in a turn in which they Advanced or Fell Back; are eligible to start to perform an Action in a turn in which they Advanced or Fell Back.\n" +
          "Each time an ADEPTUS ASTARTES BATTLELINE unit from your army is selected to attack, after resolving those attacks, select one enemy unit hit by one or more of those attacks. Until the end of the turn, that enemy unit is auspex scanned. Each time an ADEPTUS ASTARTES model from your army makes an attack that targets an auspex scanned unit, reroll a Hit roll of 1.",
      },
    ],
    enhancements: [
      {
        name: "Eye of the Primarch",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "Ranged weapons equipped by the bearer and BATTLELINE models in the bearer's unit have the [PRECISION] ability.",
        points: 10,
      },
      {
        name: "Hero of the Chapter",
        restriction: "ADEPTUS ASTARTES model only.",
        effect: "While the bearer is leading a unit, the bearer has the BATTLELINE keyword.",
        points: 20,
      },
      {
        name: "Blades of Valour",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "Improve the Armour Penetration characteristic of melee weapons equipped by the bearer and BATTLELINE models in the bearer's unit by 1.",
        points: 15,
      },
      {
        name: "Bombast Omnivox",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "Each time you select the bearer's unit as the target of a Stratagem, roll one D6, adding 1 if the bearer's unit has the BATTLELINE keyword: on a 4+, you gain 1CP.",
        points: 15,
      },
    ],
    stratagems: [
      {
        name: "Codex Discipline",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Shooting phase or the Fight phase.",
        target:
          "One ADEPTUS ASTARTES unit from your army that has not been selected to shoot or fight this phase.",
        effect:
          "Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit, reroll a Hit roll of 1. If that target is auspex scanned, reroll a Wound roll of 1 as well.",
      },
      {
        name: "Shock Bombardment",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Shooting phase or the Fight phase, just after an ADEPTUS ASTARTES BATTLELINE unit from your army finished making its attacks.",
        target: "That ADEPTUS ASTARTES BATTLELINE unit.",
        effect:
          "When an enemy unit is auspex scanned as a result of those attacks this turn, until the start of your next turn, it is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll.",
      },
      {
        name: "Guided Disruption",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Shooting phase or the Fight phase, just after an ADEPTUS ASTARTES BATTLELINE unit from your army has finished making its attacks.",
        target: "That ADEPTUS ASTARTES BATTLELINE unit.",
        effect:
          "When an enemy unit is auspex scanned as a result of those attacks this turn, if that enemy unit does not have the MONSTER or VEHICLE keywords, until the start of your next turn, it is pinned. While a unit is pinned, subtract 2 from that unit's Move characteristic and subtract 2 from Charge rolls made for that unit.",
      },
      {
        name: "Angels Defiant",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target:
          "One ADEPTUS ASTARTES BATTLELINE unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "Until the end of the phase, each time an attack targets your unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of your unit, subtract 1 from the Wound roll.",
      },
      {
        name: "Light of Vengeance",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Shooting phase or the Fight phase.",
        target:
          "One ADEPTUS ASTARTES unit from your army that has not been selected to shoot or fight this phase.",
        effect:
          "Select the [LETHAL HITS] or [SUSTAINED HITS 1] ability. Until the end of the phase, weapons equipped by models in your unit have that ability while targeting an auspex scanned unit or if the bearer has the BATTLELINE keyword.",
      },
      {
        name: "Heresy Undone",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Shooting phase or your Charge phase.",
        target: "One ADEPTUS ASTARTES unit (excluding BATTLELINE units) from your army.",
        effect:
          "Until the end of the phase, your unit is eligible to shoot and declare a charge in a turn in which it Advanced or Fell Back. If it does, every target of that charge and every target of those attacks must be an auspex scanned unit.",
      },
    ],
  },
  {
    id: "orbital-assault-force",
    name: "Orbital Assault Force",
    tagline:
      "There is arguably no method of Space Marine warfare more iconic than the decisive combat drop from orbit.",
    description:
      "There is arguably no method of Space Marine warfare more iconic than the decisive combat drop from orbit. Certainly, as Captain Titus and his fellow Ultramarines rush to defend successive sites along the borders of Ultramar, it is a strategy that they have employed time and again. Aiming to maximise the impact of the Adeptus Astartes as highly elite - but almost always outnumbered - shock assault troops, they launch waves of heavy transports and gunships from the embarkation decks of a strike cruiser skimming the upper atmosphere. Drop Pods slam down amongst the foe, disgorging Space Marines whose guns are already blazing and chainswords roaring before the enemy even realise they are under attack. Reality buckles and unnatural lightning leaps as Terminators teleport in to add their fury to the sudden onslaught.",
    primaryObjective: "take-and-hold",
    detachmentPoints: 2,
    page: 26,
    rules: [
      {
        name: "Rapid-drop Deployment",
        effect:
          "At the start of the Declare Battle Formations step, select a number of ADEPTUS ASTARTES units (excluding TITANIC units) from your army based on the battle size, as shown below. Models in those units have the Deep Strike ability.\n" +
          "Battle Size / Number of units - Incursion: 2. Strike Force: 3. Onslaught: 4.\n" +
          "Each time an ADEPTUS ASTARTES model from your army makes an attack, if it was set up on the battlefield this turn, reroll a Wound roll of 1. If it disembarked from a DROP POD this turn, reroll a Hit roll of 1 as well.",
      },
    ],
    enhancements: [
      {
        name: "Laurels of Thunder",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "You can reroll Charge rolls made for the bearer's unit in a turn in which it was set up on the battlefield.",
        points: 15,
      },
      {
        name: "Veteran of the Vanguard",
        restriction: "ADEPTUS ASTARTES model only.",
        effect: 'Models in the bearer\'s unit have the Scouts 6" ability.',
        points: 20,
      },
      {
        name: "Orbital Uplink Reliquary",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "After both players have deployed their armies, select up to three ADEPTUS ASTARTES units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves if you wish, regardless of how many units are already in Strategic Reserves.",
        points: 25,
      },
      {
        name: "Dedicated Gunship",
        restriction: "ADEPTUS ASTARTES TERMINATOR model only.",
        effect:
          "Once per battle, at the end of your opponent's Fight phase, if the bearer's unit is not within Engagement Range of one or more enemy units, the bearer can use this Enhancement. If it does, remove the bearer's unit from the battlefield and place it into Strategic Reserves.",
        points: 15,
      },
    ],
    stratagems: [
      {
        name: "Suppression Strafing",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Command phase.",
        target: "One ADEPTUS ASTARTES unit from your army.",
        effect:
          "Select one enemy unit visible to and within 18\" of your unit. That enemy unit takes a Battle-shock test. When doing so, subtract 1 from that test and, if that test is failed, until the start of your next turn, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll.",
        restrictions: "You cannot use this Stratagem more than once per battle round.",
      },
      {
        name: "Autosense Coordination",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Shooting phase or the Fight phase.",
        target:
          "One ADEPTUS ASTARTES unit from your army that has not been selected to shoot or fight this phase.",
        effect:
          'Select the [LETHAL HITS] or [SUSTAINED HITS 1] ability. Until the end of the phase, weapons equipped by models in your unit have this ability in a turn in which they disembarked from a DROP POD or while targeting an enemy unit within 12".',
      },
      {
        name: "Tactical Decapitation",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Shooting phase or the Fight phase.",
        target:
          "One ADEPTUS ASTARTES unit from your army that has not been selected to shoot or fight this phase.",
        effect:
          "Until the end of the phase, weapons equipped by models in your unit have the [PRECISION] ability and each time a model in your unit makes an attack that targets a CHARACTER unit, add 1 to the Hit roll.",
      },
      {
        name: "Blind Screen",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.",
        target:
          "One ADEPTUS ASTARTES unit (excluding TITANIC units) from your army that was selected as the target of one or more of the attacking unit's attacks and one friendly ADEPTUS ASTARTES Smoke VEHICLE or DROP POD unit within 9\" of it.",
        effect:
          "Until the end of the phase, models in your units have the Stealth ability and each time a ranged attack targets one of your units, models in that unit have the Benefit of Cover against that attack.",
      },
      {
        name: "Shock Onslaught",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Fight phase.",
        target:
          "One ADEPTUS ASTARTES unit from your army that has not been selected to fight this phase.",
        effect:
          'Until the end of the phase, each time a model in your unit makes a Pile-in or Consolidation move, it can move up to 6" instead of up to 3".',
      },
      {
        name: "Onward for the Emperor",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "End of your opponent's Fight phase.",
        target:
          "One ADEPTUS ASTARTES INFANTRY unit from your army that was not set up on the battlefield this turn and one friendly TRANSPORT it is able to embark within.",
        effect:
          'If your ADEPTUS ASTARTES unit is wholly within 6" of that TRANSPORT, it can embark within it.',
      },
    ],
  },
  {
    id: "reclamation-force",
    name: "Reclamation Force",
    tagline:
      "The Ultramarines and their brother Shield Chapters forge ever outward into the darkness beyond the bounds of Ultramar.",
    description:
      "The Ultramarines and their brother Shield Chapters forge ever outward into the darkness beyond the bounds of Ultramar, to conquer new territories for the Five Hundred Worlds. Acting as the speartips of the wider reconquest, their compact but powerful reclamation forces hit the enemy hard and drive deep into their lines to seize key strategic locations and deny them to the foe. With this done, they draw upon their dedication to the vision of Roboute Guilliman and the absolute loyalty they owe the empire of Macragge to fill themselves with unbending resolve and indomitable vigour. Fighting to uphold their oaths in the face of often overwhelming odds, still the Space Marines drive their enemies back and shatter their strength.",
    primaryObjective: "take-and-hold",
    detachmentPoints: 2,
    page: 28,
    restrictions:
      "Your army can include ULTRAMARINES units, but it cannot include any ADEPTUS ASTARTES units drawn from any other Chapter.",
    rules: [
      {
        name: "Oath of Reclamation",
        effect:
          "Each time an ADEPTUS ASTARTES model from your army makes a melee attack that targets a unit within range of an objective marker, improve the Armour Penetration characteristic of that attack by 1.\n" +
          "Each time an attack targets an ADEPTUS ASTARTES unit from your army, if your unit is within range of an objective marker that you controlled at the start of the phase and if the Strength characteristic of that attack is greater than the Toughness characteristic of your unit or your unit has the Titus keyword, subtract 1 from the Wound roll.",
      },
    ],
    enhancements: [
      {
        name: "Seals of Reconquest",
        restriction: "ADEPTUS ASTARTES model only.",
        effect: "Models in the bearer's unit have a 5+ invulnerable save.",
        points: 20,
      },
      {
        name: "Avenging Avatar",
        restriction: "ADEPTUS ASTARTES model only. (Aura)",
        effect:
          "In the Battle-shock step of your opponent's Command phase, if an enemy unit that is below its Starting Strength is within 9\" of the bearer, that enemy unit must take a Battle-shock test.",
        points: 10,
      },
      {
        name: "Scroll of Proclamation",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "When this unit declares a charge, if an enemy unit within range of an objective is within 12\" of this unit, you can use this enhancement. If you do: this unit can re-roll that charge roll; this unit must end that charge move engaged with one or more of those enemy units.",
        points: 15,
      },
      {
        name: "Liberatum",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "Each time the bearer makes an attack that targets an enemy unit, if the target is within range of an objective marker, you can reroll the Hit roll and you can reroll the Wound roll.",
        points: 25,
      },
    ],
    stratagems: [
      {
        name: "Crusading Conquerors",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "End of the Command phase.",
        target: "One ADEPTUS ASTARTES unit from your army.",
        effect:
          "Until the start of the next Command phase, add 1 to the Objective Control characteristic of models in your unit.",
      },
      {
        name: "Furious Dedication",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Charge phase or the Fight phase.",
        target:
          "One ADEPTUS ASTARTES unit from your army that has not declared a charge or been selected to fight this phase.",
        effect:
          "Until the end of the turn, add 2 to Charge rolls made for your unit and add 1 to the Attacks characteristic of melee weapons equipped by models in your unit.",
        restrictions: "You cannot use this Stratagem more than once per turn.",
      },
      {
        name: "Fight to the End",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target:
          "One ADEPTUS ASTARTES unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6: on a 4+, do not remove the destroyed model from play; it can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
      {
        name: "Scions of Guilliman",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Movement phase, just after an ADEPTUS ASTARTES unit from your army ends a Fall Back move.",
        target: "That ADEPTUS ASTARTES unit.",
        effect:
          "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
      },
      {
        name: "Ultramarian Destiny",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Movement phase.",
        target: "One ADEPTUS ASTARTES unit from your army.",
        effect:
          "Select one objective marker you control that your unit is within range of. That objective marker remains under your control until your opponent's Level of Control over that objective marker is greater than yours at the end of a phase.",
      },
      {
        name: "Marching Ever On",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your opponent's Movement phase, just after an enemy unit Falls Back.",
        target:
          "One ADEPTUS ASTARTES unit from your army that was within Engagement Range of that enemy unit at the start of the phase.",
        effect: 'Your unit can make a Normal move of up to D6"+1.',
      },
    ],
  },
  {
    id: "1st-company-task-force",
    name: "1st Company Task Force",
    tagline:
      "The veteran elite of the Chapter's First Company, deployed where the fighting is fiercest.",
    primaryObjective: "purge-the-foe",
    detachmentPoints: 2,
    rules: [
      {
        name: "Extremis-level Threat",
        effect:
          "Once per battle, in your Command phase, you can use this ability. If you do, until the start of your next Command phase, each time a model from your army with the Oath of Moment ability makes an attack that targets your Oath of Moment target, you can re-roll the Wound roll as well.",
      },
    ],
    enhancements: [
      {
        name: "Fear Made Manifest (Aura)",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          'While an enemy unit (excluding MONSTERS and VEHICLES) is within 6" of the bearer, each time that unit fails a Battle-shock test, one model in that unit is destroyed (chosen by its controlling player). Once per battle, when such an enemy unit fails a Battle-shock test, you can choose for D3 models in that unit to be destroyed in this way instead.',
        points: 30,
      },
      {
        name: "Iron Resolve",
        restriction: "ADEPTUS ASTARTES TERMINATOR model only.",
        effect:
          "The bearer has the Feel No Pain 5+ ability. Once per battle, after the bearer's unit is selected as the target of one or more attacks, the bearer can use this Enhancement. If it does, until the end of the phase, models in the bearer's unit have the Feel No Pain 5+ ability.",
        points: 15,
      },
      {
        name: "Rites of War",
        restriction: "ADEPTUS ASTARTES TERMINATOR model only.",
        effect:
          "Improve the Objective Control characteristic of the bearer by 1. Once per battle, at the start of any phase, the bearer can use this Enhancement. If it does, until the end of the phase, add 1 to the Objective Control characteristic of all other models in the bearer's unit as well.",
        points: 10,
      },
      {
        name: "The Imperium's Sword",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "Add 1 to the Attacks characteristic of the bearer's melee weapons. Once per battle, at the start of any phase, the bearer can use this Enhancement. If it does, until the end of the phase, add 1 to the Attacks characteristic of melee weapons equipped by all other models in the bearer's unit as well.",
        points: 25,
      },
    ],
    stratagems: [
      ARMOUR_OF_CONTEMPT_RULE(),
      {
        name: "Heroes of the Chapter",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Shooting phase or the Fight phase.",
        target:
          "One ADEPTUS ASTARTES TERMINATOR, BLADEGUARD VETERAN SQUAD, STERNGUARD VETERAN SQUAD or VANGUARD VETERAN SQUAD unit from your army that has not been selected to shoot or fight this phase.",
        effect:
          "Until the end of the phase, each time a model in your unit makes an attack, add 1 to the Hit roll. If your unit is Below Half-strength, add 1 to the Wound roll as well.",
      },
      {
        name: "Terrifying Proficiency",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Fight phase.",
        target:
          "One ADEPTUS ASTARTES TERMINATOR, BLADEGUARD VETERAN SQUAD, STERNGUARD VETERAN SQUAD or VANGUARD VETERAN SQUAD unit from your army that made a Charge move this turn and destroyed one or more enemy units this phase.",
        effect:
          'In your opponent\'s next Command phase, each enemy unit within 6" of your unit must take a Battle-shock test. If the unit taking that test is Below Half-strength, subtract 1 from that test. Enemy units affected by this Stratagem do not need to take any other Battle-shock tests in the same phase.',
      },
      {
        name: "Duty and Honour",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Movement phase.",
        target:
          "One ADEPTUS ASTARTES TERMINATOR, BLADEGUARD VETERAN SQUAD, STERNGUARD VETERAN SQUAD or VANGUARD VETERAN SQUAD unit from your army within range of an objective marker you control.",
        effect:
          "That objective marker remains under your control until your opponent's Level of Control over that objective marker is greater than yours at the end of a phase.",
      },
      {
        name: "Orbital Teleportarium",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "End of your opponent's Fight phase.",
        target: "One ADEPTUS ASTARTES TERMINATOR unit from your army.",
        effect:
          "Remove your unit from the battlefield and place it into Strategic Reserves. It will arrive back on the battlefield in the Reinforcements step of your next Movement phase using the Deep Strike ability.",
        restrictions:
          "You cannot select a unit that is within Engagement Range of one or more enemy units.",
      },
      {
        name: "Legendary Fortitude",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your opponent's Charge phase, just after an enemy unit ends a Charge move.",
        target:
          "One ADEPTUS ASTARTES TERMINATOR, BLADEGUARD VETERAN SQUAD, STERNGUARD VETERAN SQUAD or VANGUARD VETERAN SQUAD unit from your army within Engagement Range of that enemy unit.",
        effect:
          "Until the end of the turn, each time an attack is allocated to a model in your unit, subtract 1 from the Damage characteristic of that attack.",
      },
    ],
  },
  {
    id: "anvil-siege-force",
    name: "Anvil Siege Force",
    tagline:
      "An immovable gunline that holds its ground and grinds the enemy down with disciplined, punishing firepower.",
    primaryObjective: "take-and-hold",
    detachmentPoints: 2,
    rules: [
      {
        name: "Shield of the Imperium",
        effect:
          "Ranged weapons equipped by ADEPTUS ASTARTES models from your army have the [HEAVY] ability. If such a weapon already has this ability, each time an attack is made with that weapon, if the attacking model's unit Remained Stationary this turn, add 1 to the Wound roll.",
      },
    ],
    enhancements: [
      {
        name: "Architect of War",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "While the bearer is leading a unit, ranged weapons equipped by models in that unit have the [IGNORES COVER] ability.",
        points: 25,
      },
      {
        name: "Fleet Commander",
        restriction: "CAPTAIN model only.",
        effect:
          'Once per battle, at the start of your Shooting phase, you can select one point on the battlefield and place a marker on that point. At the start of your next Shooting phase, place another marker on the battlefield within 12" of the centre of the first marker, then draw a straight line between the centre of each of these markers. Roll one D6 for each unit that line passes over or through: on a 3+, that unit suffers D3 mortal wounds. Both markers are then removed.',
        points: 15,
      },
      {
        name: "Indomitable Fury",
        restriction: "GRAVIS model only.",
        effect:
          "The first time the bearer is destroyed, roll one D6 at the end of the phase. On a 2+, set the bearer back up on the battlefield, as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with its full wounds remaining.",
        points: 20,
      },
      {
        name: "Stoic Defender",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "While the bearer is leading a unit, models in that unit have the Feel No Pain 6+ ability while they are within range of an objective marker you control and, while that unit is Battle-shocked, halve the Objective Control characteristic of models in that unit instead of changing it to 0.",
        points: 15,
      },
    ],
    stratagems: [
      ARMOUR_OF_CONTEMPT_RULE(),
      {
        name: "Rigid Discipline",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "End of the Fight phase.",
        target:
          "One ADEPTUS ASTARTES unit from your army that is within Engagement Range of one or more enemy units.",
        effect: 'Your unit can immediately make a Fall Back move of up to 6".',
        restrictions:
          "When making that move, your unit must end that move either wholly within your deployment zone or within range of an objective marker.",
      },
      {
        name: "Not One Backwards Step",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Command phase.",
        target:
          "One ADEPTUS ASTARTES INFANTRY unit from your army within range of an objective marker.",
        effect:
          "Until the end of the turn, double the Objective Control characteristic of models in your unit, but it must Remain Stationary this turn.",
      },
      {
        name: "No Threat Too Great",
        cost: "2CP",
        category: "Battle Tactic",
        when: "Your Shooting phase.",
        target:
          "One ADEPTUS ASTARTES unit from your army that has not been selected to shoot this phase.",
        effect:
          "Until the end of the phase, each time a model in your unit makes a ranged attack that targets a MONSTER or VEHICLE unit, you can re-roll the Wound roll.",
      },
      {
        name: "Battle Drill Recall",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Shooting phase.",
        target:
          "One ADEPTUS ASTARTES unit from your army that has not been selected to shoot this phase.",
        effect:
          "Until the end of the phase, ranged weapons equipped by models in your unit have the [SUSTAINED HITS 1] ability. If your unit Remained Stationary this turn, then until the end of the phase, each time a model in your unit makes a ranged attack, a successful unmodified Hit roll of 5+ scores a Critical Hit.",
      },
      {
        name: "Hail of Vengeance",
        cost: "2CP",
        category: "Strategic Ploy",
        when: "Your opponent's Shooting phase, just after an enemy unit has resolved its attacks.",
        target:
          "One ADEPTUS ASTARTES unit from your army that had one or more of its models destroyed as a result of the attacking unit's attacks.",
        effect:
          "Your unit can shoot as if it were your Shooting phase, but must target only that enemy unit when doing so, and can only do so if that enemy unit is an eligible target.",
      },
    ],
  },
  {
    id: "firestorm-assault-force",
    name: "Firestorm Assault Force",
    tagline:
      "Transport-borne assault troops that close the distance fast and burn the enemy out at point-blank range.",
    primaryObjective: "priority-assets",
    detachmentPoints: 2,
    rules: [
      {
        name: "Close-range Eradication",
        effect:
          'Ranged weapons equipped by ADEPTUS ASTARTES models from your army have the [ASSAULT] ability, and each time an attack made with such a weapon targets a unit within 12", add 1 to the Strength characteristic of that attack.',
      },
    ],
    enhancements: [
      {
        name: "Adamantine Mantle",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "Each time an attack is allocated to the bearer, subtract 1 from the Damage characteristic of that attack. If that attack was made with a Melta or Torrent weapon, change the Damage characteristic of that attack to 1 instead.",
        points: 20,
      },
      {
        name: "Champion of Humanity",
        restriction: "TACTICUS model only.",
        effect:
          "While the bearer is leading a unit, models in that unit can ignore any or all modifiers to their characteristics and/or to any roll or test made for them (excluding modifiers to saving throws).",
        points: 10,
      },
      {
        name: "Forged in Battle",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "While the bearer is leading a unit, once per turn, after making a Hit roll or a saving throw for a model in that unit, you can change the result of that roll to an unmodified 6.",
        points: 15,
      },
      {
        name: "War-tempered Artifice",
        restriction: "ADEPTUS ASTARTES INFANTRY model only.",
        effect:
          "Add 3 to the Strength characteristic of the bearer's melee weapons.",
        points: 25,
      },
    ],
    stratagems: [
      ARMOUR_OF_CONTEMPT_RULE(),
      {
        name: "Crucible of Battle",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Shooting phase or the Fight phase.",
        target:
          "One ADEPTUS ASTARTES INFANTRY unit from your army that has not been selected to shoot or fight this phase.",
        effect:
          'Until the end of the phase, each time a model in your unit makes an attack that targets the closest eligible target within 6", add 1 to the Wound roll.',
      },
      {
        name: "Rapid Embarkation",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "End of the Fight phase.",
        target:
          'One ADEPTUS ASTARTES TRANSPORT unit from your army that has no models embarked within it, and one ADEPTUS ASTARTES INFANTRY unit from your army wholly within 6" of that TRANSPORT.',
        effect: "Your INFANTRY unit can embark within that TRANSPORT.",
        restrictions:
          "You cannot target an INFANTRY unit that is within Engagement Range of one or more enemy units, that cannot normally embark within that TRANSPORT, or that disembarked from a TRANSPORT this turn.",
      },
      {
        name: "Immolation Protocols",
        cost: "2CP",
        category: "Battle Tactic",
        when: "Your Shooting phase.",
        target:
          "One ADEPTUS ASTARTES unit from your army that has not been selected to shoot this phase.",
        effect:
          "Until the end of the phase, Torrent weapons equipped by models in that unit have the [DEVASTATING WOUNDS] ability.",
      },
      {
        name: "Onslaught of Fire",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Shooting phase.",
        target:
          "One ADEPTUS ASTARTES unit from your army that disembarked from a TRANSPORT this turn and has not been selected to shoot this phase.",
        effect:
          'Until the end of the phase, each time a model in your unit makes a ranged attack that targets the closest eligible target within 12", add 1 to the Hit roll. If one or more enemy models are destroyed as the result of any of those attacks, select one of those destroyed models; that destroyed model\'s unit must take a Battle-shock test.',
      },
      {
        name: "Burning Vengeance",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your opponent's Shooting phase, just after an enemy unit has resolved its attacks.",
        target:
          "One ADEPTUS ASTARTES TRANSPORT unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "One unit embarked within that TRANSPORT can disembark as if it were your Movement phase, and can then shoot as if it were your Shooting phase, but must target only that enemy unit when doing so, and can only do so if that enemy unit is an eligible target.",
      },
    ],
  },
  {
    id: "gladius-task-force",
    name: "Gladius Task Force",
    tagline:
      "The Codex Astartes made manifest, shifting between Combat Doctrines to answer every phase of the battle.",
    primaryObjective: "priority-assets",
    detachmentPoints: 3,
    rules: [
      {
        name: "Combat Doctrines",
        effect:
          "At the start of your Command phase, you can select one of the Combat Doctrines listed below. Until the start of your next Command phase, that Combat Doctrine is active and its effects apply to all ADEPTUS ASTARTES units from your army. You can only select each Combat Doctrine once per battle.\nDevastator Doctrine: This unit is eligible to shoot in a turn in which it Advanced.\nTactical Doctrine: This unit is eligible to shoot and declare a charge in a turn in which it Fell Back.\nAssault Doctrine: This unit is eligible to declare a charge in a turn in which it Advanced.",
      },
    ],
    enhancements: [
      {
        name: "Adept of the Codex",
        restriction: "CAPTAIN model only.",
        effect:
          "At the start of your Command phase, if the bearer is on the battlefield, instead of selecting a Combat Doctrine to be active for your army, you can select the Tactical Doctrine. If you do, until the start of your next Command phase, that Combat Doctrine is active for the bearer's unit only, even if you have already selected that Combat Doctrine to be active for your army this battle.",
        points: 20,
      },
      {
        name: "Artificer Armour",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "The bearer has a Save characteristic of 2+ and the Feel No Pain 5+ ability.",
        points: 20,
      },
      {
        name: "Fire Discipline",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "While the bearer is leading a unit, ranged weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability. In addition, while the bearer's unit is under the effects of the Devastator Doctrine, you can re-roll Advance rolls made for that unit.",
        points: 25,
      },
      {
        name: "The Honour Vehement",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "Add 1 to the Attacks and Strength characteristics of the bearer's melee weapons. While the bearer is under the effects of the Assault Doctrine, add 2 to the Attacks and Strength characteristics of the bearer's melee weapons instead.",
        points: 15,
      },
    ],
    stratagems: [
      ARMOUR_OF_CONTEMPT_RULE(),
      {
        name: "Only in Death Does Duty End",
        cost: "2CP",
        category: "Epic Deed",
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target:
          "One ADEPTUS ASTARTES unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, do not remove it from play. The destroyed model can fight after the attacking model's unit has finished making its attacks, and is then removed from play.",
      },
      {
        name: "Honour the Chapter",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Fight phase.",
        target: "One ADEPTUS ASTARTES unit from your army.",
        effect:
          "Until the end of the phase, melee weapons equipped by models in your unit have the [LANCE] ability. If your unit is under the effects of the Assault Doctrine, until the end of the phase, improve the Armour Penetration characteristic of such weapons by 1 as well.",
      },
      {
        name: "Adaptive Strategy",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Command phase.",
        target: "One ADEPTUS ASTARTES unit from your army.",
        effect:
          "Select the Devastator Doctrine, Tactical Doctrine or Assault Doctrine. Until the start of your next Command phase, that Combat Doctrine is active for that unit instead of any other Combat Doctrine that is active for your army, even if you have already selected that Combat Doctrine this battle.",
      },
      {
        name: "Storm of Fire",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Shooting phase.",
        target:
          "One ADEPTUS ASTARTES unit from your army that has not been selected to shoot this phase.",
        effect:
          "Until the end of the phase, ranged weapons equipped by models in your unit have the [IGNORES COVER] ability. If your unit is under the effects of the Devastator Doctrine, until the end of the phase, improve the Armour Penetration characteristic of such weapons by 1 as well.",
      },
      {
        name: "Squad Tactics",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target:
          'One ADEPTUS ASTARTES INFANTRY or ADEPTUS ASTARTES MOUNTED unit from your army that is within 8" of the enemy unit that just ended that move.',
        effect:
          'Your unit can make a Normal move of up to D6", or a Normal move of up to 6" instead if it is under the effects of the Tactical Doctrine.',
        restrictions:
          "You cannot select a unit that is within Engagement Range of one or more enemy units.",
      },
    ],
  },
  {
    id: "ironstorm-spearhead",
    name: "Ironstorm Spearhead",
    tagline:
      "An armoured spearhead of tanks and walkers, shepherded into battle by the Chapter's Techmarines.",
    primaryObjective: "take-and-hold",
    detachmentPoints: 2,
    rules: [
      {
        name: "Armoured Wrath",
        effect:
          "Once per phase for each ADEPTUS ASTARTES unit in your army, you can re-roll one Hit roll, one Wound roll or one Damage roll made for a model in that unit.",
      },
    ],
    enhancements: [
      {
        name: "Adept of the Omnissiah",
        restriction: "TECHMARINE model only.",
        effect:
          'Once per battle round, when a saving throw is failed for a friendly ADEPTUS ASTARTES VEHICLE model within 6" of the bearer, you can change the Damage characteristic of that attack to 0.',
        points: 35,
      },
      {
        name: "Master of Machine War",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          'In your Command phase, select one ADEPTUS ASTARTES VEHICLE model within 6" of the bearer. Until the start of your next Command phase, that VEHICLE is eligible to shoot even if it Fell Back or Advanced this turn.',
        points: 20,
      },
      {
        name: "Target Augury Web",
        restriction: "TECHMARINE model only.",
        effect:
          'In your Command phase, select one ADEPTUS ASTARTES VEHICLE model within 6" of the bearer. Until the start of your next Command phase, weapons equipped by that VEHICLE model have the [LETHAL HITS] ability.',
        points: 30,
      },
      {
        name: "The Flesh Is Weak",
        restriction: "ADEPTUS ASTARTES model only.",
        effect: "The bearer has the Feel No Pain 4+ ability.",
        points: 20,
      },
    ],
    stratagems: [
      {
        name: "Unbowed Conviction",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Command phase.",
        target:
          "One ADEPTUS ASTARTES unit from your army that is below its Starting Strength.",
        effect:
          "Until the end of the turn, your unit can ignore any or all modifiers to its characteristics and/or to any roll or test made for it (excluding modifiers to saving throws).",
      },
      ARMOUR_OF_CONTEMPT_RULE(),
      {
        name: "Mercy Is Weakness",
        cost: "2CP",
        category: "Battle Tactic",
        when: "Your Shooting phase or the Fight phase.",
        target:
          "One ADEPTUS ASTARTES unit from your army that has not been selected to shoot or fight this phase.",
        effect:
          "Until the end of the phase, each time a model in your unit makes an attack that targets a unit that is below its Starting Strength, that attack has the [SUSTAINED HITS 1] ability, and when making such an attack, if the attacking model is a VEHICLE, a successful unmodified Hit roll of 5+ scores a Critical Hit.",
      },
      {
        name: "Vengeful Animus",
        cost: "1CP",
        category: "Epic Deed",
        when: "Any phase, just after an ADEPTUS ASTARTES VEHICLE model from your army with the Deadly Demise ability is destroyed.",
        target:
          "That ADEPTUS ASTARTES VEHICLE model. You can use this Stratagem on that model even though it was just destroyed.",
        effect:
          "Do not roll one D6 to determine whether mortal wounds are inflicted by your model's Deadly Demise ability. Instead, mortal wounds are automatically inflicted.",
      },
      {
        name: "Ancient Fury",
        cost: "1CP",
        category: "Epic Deed",
        when: "Your Command phase.",
        target: "One ADEPTUS ASTARTES WALKER model from your army.",
        effect:
          "Until the start of your next Command phase, improve your model's Move, Toughness, Leadership and Objective Control characteristics by 1 and each time your model makes an attack, add 1 to the Hit roll.",
      },
      {
        name: "Power of the Machine Spirit",
        cost: "1CP",
        category: "Epic Deed",
        when: "Your opponent's Shooting phase, just after an enemy unit has resolved its attacks.",
        target:
          "One ADEPTUS ASTARTES VEHICLE unit from your army that was reduced to Below Half-strength as a result of the attacking unit's attacks.",
        effect:
          "Your unit can shoot as if it were your Shooting phase, but must target only that enemy unit when doing so, and can only do so if that enemy unit is an eligible target.",
      },
    ],
  },
  {
    id: "stormlance-task-force",
    name: "Stormlance Task Force",
    tagline:
      "Bikes, speeders and swift-moving armour that strike at pace and are gone before the foe can answer.",
    primaryObjective: "disruption",
    detachmentPoints: 3,
    rules: [
      {
        name: "Lightning Assault",
        effect:
          "ADEPTUS ASTARTES units from your army are eligible to declare a charge in a turn in which they Advanced or Fell Back.",
      },
    ],
    enhancements: [
      {
        name: "Feinting Withdrawal",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "While the bearer is leading a unit, that unit is eligible to shoot in a turn in which it Fell Back.",
        points: 10,
      },
      {
        name: "Fury of the Storm",
        restriction: "ADEPTUS ASTARTES MOUNTED model only.",
        effect:
          "Improve the Strength and Armour Penetration characteristics of the bearer's melee weapons by 1. Each time the bearer ends a Charge move, until the end of the turn, improve the Strength and Armour Penetration characteristics of the bearer's melee weapons by 2 instead.",
        points: 25,
      },
      {
        name: "Hunter's Instincts",
        restriction: "ADEPTUS ASTARTES MOUNTED model only.",
        effect:
          "If the bearer's unit is in Strategic Reserves, for the purposes of setting up that unit on the battlefield, treat the current battle round number as being one higher than it actually is.",
        points: 25,
      },
      {
        name: "Portents of Wisdom",
        restriction: "ADEPTUS ASTARTES model only.",
        effect:
          "While the bearer is leading a unit, you can re-roll Advance rolls made for that unit.",
        points: 15,
      },
    ],
    stratagems: [
      ARMOUR_OF_CONTEMPT_RULE(),
      {
        name: "Blitzing Fusillade",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Shooting phase.",
        target:
          "One ADEPTUS ASTARTES unit from your army that has not been selected to shoot this phase.",
        effect:
          "Until the end of the phase, ranged weapons equipped by models in your unit have the [ASSAULT] ability. If such a weapon already has this ability, until the end of the phase, that weapon has the [SUSTAINED HITS 1] ability as well.",
      },
      {
        name: "Full Throttle",
        cost: "2CP",
        category: "Wargear",
        when: "Your Movement phase.",
        target:
          "One ADEPTUS ASTARTES MOUNTED or ADEPTUS ASTARTES VEHICLE unit (excluding WALKERS) from your army.",
        effect:
          'Until the end of the phase, if your unit Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6" to the Move characteristic of models in your unit, or 9" instead if your unit is MOUNTED.',
      },
      {
        name: "Shock Assault",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Fight phase, when a friendly ADEPTUS ASTARTES unit is selected to fight.",
        target: "That ADEPTUS ASTARTES unit.",
        effect: "Your unit's melee attacks have [LANCE].",
      },
      {
        name: "Ride Hard, Ride Fast",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.",
        target:
          "One ADEPTUS ASTARTES MOUNTED or ADEPTUS ASTARTES FLY VEHICLE unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Wound roll.",
      },
      {
        name: "Wind-swift Evasion",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target:
          'One ADEPTUS ASTARTES INFANTRY or ADEPTUS ASTARTES MOUNTED unit from your army that is within 8" of that enemy unit.',
        effect: 'Your unit can make a Normal move of up to 6".',
        restrictions:
          "You cannot select a unit that is within Engagement Range of one or more enemy units.",
      },
    ],
  },
  {
    id: "vanguard-spearhead",
    name: "Vanguard Spearhead",
    tagline:
      "Phobos-armoured scouts and infiltrators who fight from the shadows and vanish before the counterblow lands.",
    primaryObjective: "reconnaissance",
    detachmentPoints: 2,
    rules: [
      {
        name: "Shadow Masters",
        effect:
          'Each time a ranged attack targets an ADEPTUS ASTARTES unit from your army, unless the attacking model is within 12", the target has the Benefit of Cover against that attack.',
      },
    ],
    enhancements: [
      {
        name: "Execute and Redeploy",
        restriction: "PHOBOS model only.",
        effect:
          'In your Shooting phase, after the bearer\'s unit has shot, if that unit is not within Engagement Range of one or more enemy units, it can make a Normal move of up to 6". If it does, until the end of the turn, that unit is not eligible to declare a charge. This cannot allow the bearer\'s unit to move more than once in your Shooting phase.',
        points: 20,
      },
      {
        name: "Ghostweave Cloak",
        restriction: "ADEPTUS ASTARTES model only.",
        effect: "The bearer has the Stealth and Lone Operative abilities.",
        points: 15,
      },
      {
        name: "Shadow War Veteran",
        restriction: "PHOBOS model only. The bearer has the following ability:",
        effect:
          'Lord of Deceit (Aura): Once per turn, when your opponent targets a unit from their army within 12" of this model with a Stratagem, you can use this ability. If you do, increase the CP cost of that use of that Stratagem by 1CP.',
        points: 30,
      },
      {
        name: "The Blade Driven Deep",
        restriction: "ADEPTUS ASTARTES INFANTRY model only.",
        effect:
          "While the bearer is leading a unit, models in that unit have the Infiltrators ability.",
        points: 25,
      },
    ],
    stratagems: [
      {
        name: "A Deadly Prize",
        cost: "1CP",
        category: "Wargear",
        when: "Start of the Command phase.",
        target:
          "One ADEPTUS ASTARTES INFANTRY or ADEPTUS ASTARTES MOUNTED unit from your army within range of an objective marker you control.",
        effect:
          "That objective marker is said to be Sabotaged, and remains under your control even if you have no models within range of it, until your opponent controls it at the start or end of any turn. While an objective marker is Sabotaged and under your control, each time an enemy unit ends a Normal, Advance, Fall Back or Charge move within range of that objective marker, roll one D6: on a 2+, that enemy unit suffers D3 mortal wounds.",
      },
      ARMOUR_OF_CONTEMPT_RULE(),
      {
        name: "Surgical Strikes",
        cost: "2CP",
        category: "Battle Tactic",
        when: "Fight phase.",
        target:
          "One ADEPTUS ASTARTES INFANTRY unit from your army that has not been selected to fight this phase.",
        effect:
          "Until the end of the phase, melee weapons equipped by models in your unit have the [PRECISION] ability.",
      },
      {
        name: "Strike From The Shadows",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Shooting phase.",
        target:
          "One ADEPTUS ASTARTES INFANTRY unit from your army that has not been selected to shoot this phase.",
        effect:
          'Until the end of the phase, each time a model in your unit makes a ranged attack that targets an enemy unit that is more than 12" away, improve the Ballistic Skill and Armour Penetration characteristics of that attack by 1. If one or more enemy models are destroyed as a result of those attacks, select one of those destroyed models; that destroyed model\'s unit must take a Battle-shock test.',
      },
      {
        name: "Calculated Feint",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your opponent's Charge phase, just after an enemy unit declares a charge.",
        target:
          'One friendly ADEPTUS ASTARTES INFANTRY unit within 12" of that enemy unit.',
        effect:
          'Your unit can make a Normal move of up to D6", or up to 6" instead if it is a PHOBOS or SCOUT SQUAD unit.',
        restrictions:
          "You cannot select a unit that is within Engagement Range of one or more enemy units.",
      },
      {
        name: "Guerrilla Tactics",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "End of your opponent's Fight phase.",
        target:
          "Up to two PHOBOS and/or SCOUT SQUAD units from your army, or one other ADEPTUS ASTARTES INFANTRY unit from your army.",
        effect:
          "Remove those units from the battlefield and place them into Strategic Reserves.",
        restrictions:
          'Each unit selected for this Stratagem must be more than 3" away from all enemy models.',
      },
    ],
  },
];
