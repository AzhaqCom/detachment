import type { Detachment } from "../../types/detachment";

export const DETACHMENTS: Detachment[] = [
  {
    id: "ambush-predators",
    name: "Ambush Predators",
    tagline:
      "Lictors and their kin, striking from concealment at whatever the swarm has marked.",
    primaryObjective: "disruption",
    detachmentPoints: 1,
    rules: [
      {
        name: "Mindhunger",
        effect:
          "Friendly DEATHLEAPER/LICTOR/NEUROLICTOR units have Deep Strike.\nFriendly LICTOR/NEUROLICTOR units' attacks that target a CHARACTER unit can re-roll hit rolls of 1.",
      },
    ],
    enhancements: [
      {
        name: "Cryptophotaic Camouflage",
        restriction: "VON RYAN'S LEAPERS unit only. (Upgrade)",
        effect: 'This unit has -3" detection range.',
        points: 15,
      },
      {
        name: "Encircling Horrors",
        restriction:
          "NEUROLICTOR/LICTOR/VON RYAN'S LEAPERS unit only. (Upgrade)",
        effect:
          'In your opponent\'s Movement phase, when an enemy unit ends a move within 8" of this unit, this unit can make a normal move of up to D3+3".',
        points: 20,
      },
    ],
    stratagems: [
      {
        name: "Hypersensory Adaptations",
        cost: "1CP",
        category: "Ambush Predators",
        when: "Start of your Shooting phase.",
        target:
          "One friendly DEATHLEAPER/LICTOR/NEUROLICTOR/VON RYAN'S LEAPERS unit.",
        effect:
          'Select one visible enemy unit within 12" of your unit. That enemy unit has +6" detection range.',
      },
      {
        name: "Counterpredation",
        cost: "1CP",
        category: "Ambush Predators",
        when: "Fight phase, when a friendly DEATHLEAPER/LICTOR/NEUROLICTOR/VON RYAN'S LEAPERS unit is selected to fight.",
        target:
          "That DEATHLEAPER/LICTOR/NEUROLICTOR/VON RYAN'S LEAPERS unit.",
        effect: "Your unit's attacks that target a hidden unit have +1 S and AP.",
      },
      {
        name: "Scanner Gheist",
        cost: "1CP",
        category: "Ambush Predators",
        when: "End of your opponent's Fight phase.",
        target: "One friendly unengaged DEATHLEAPER/LICTOR/NEUROLICTOR unit.",
        effect: "Place your unit in strategic reserves.",
      },
    ],
  },
  {
    id: "assimilation-swarm",
    name: "Assimilation Swarm",
    tagline:
      "Harvester organisms that knit the swarm back together as fast as the foe can tear it apart.",
    primaryObjective: "priority-assets",
    detachmentPoints: 2,
    rules: [
      {
        name: "Feed the Swarm",
        effect:
          'In your Command phase, each HARVESTER unit from your army can Regenerate one friendly TYRANIDS unit that is within 6" of it. A unit can only be regenerated once per phase. Each time a unit regenerates, do one of the following:\nOne model in that unit regains up to D3+1 lost wounds.\nOne destroyed INFANTRY model (excluding CHARACTERS) is returned to that unit with its full wounds remaining. If that unit is an ENDLESS MULTITUDE unit, up to 3 destroyed models are returned instead.',
      },
    ],
    enhancements: [
      {
        name: "Biophagic Flow (Aura)",
        restriction: "TYRANIDS model only.",
        effect:
          'While a friendly HARVESTER model is within 12" of the bearer, when using the Feed the Swarm ability, that HARVESTER model can Regenerate one friendly TYRANIDS unit that is within 9" of it, instead of one within 6".',
        points: 10,
      },
      {
        name: "Instinctive Defence",
        restriction: "TYRANIDS model only.",
        effect:
          'While the bearer is within 6" of one or more friendly HARVESTER units, when you target this unit with the Heroic Intervention Stratagem, that use is -1CP. In addition, while the bearer is within 6" of one or more friendly HARVESTER units, models in the bearer\'s unit have the Fights First ability.',
        points: 15,
      },
      {
        name: "Parasitic Biomorphology",
        restriction: "TYRANIDS model only.",
        effect:
          'Add 1 to the Strength characteristic of melee weapons equipped by models in the bearer\'s unit. The first time the bearer\'s unit destroys an enemy unit in the Fight phase while the bearer is within 6" of one or more friendly HARVESTER units, until the end of the battle, add 1 to the Attacks characteristic of melee weapons equipped by models in the bearer\'s unit.',
        points: 25,
      },
      {
        name: "Regenerating Monstrosity",
        restriction: "TYRANIDS model only (excluding MONSTERS models).",
        effect:
          "The bearer's unit can be regenerated up to twice per phase, instead of once.",
        points: 20,
      },
    ],
    stratagems: [
      {
        name: "Broodguard Impulse",
        cost: "1CP",
        category: "Epic Deed",
        when: "Any phase.",
        target:
          "One HARVESTER unit from your army that was just destroyed. You can use this Stratagem on that unit even though it was just destroyed.",
        effect:
          "Until the end of the battle, each time a friendly TYRANIDS model makes an attack that targets the enemy unit that just destroyed your HARVESTER unit, add 1 to the Wound roll.",
      },
      {
        name: "Reclaim Biomass",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Any phase, when a TYRANIDS unit from your army is destroyed, before the last model in it is removed from play.",
        target:
          'One HARVESTER unit from your army that is within 6" of that destroyed unit.',
        effect:
          'Regenerate one friendly TYRANIDS unit within 6" of your HARVESTER unit (see Feed the Swarm).',
      },
      {
        name: "Tyrannoformed",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Command phase.",
        target:
          "One HARVESTER unit from your army that is within range of an objective marker you control.",
        effect:
          "That objective marker remains under your control until your opponent's Level of Control over that objective marker is greater than yours at the end of a phase.",
      },
      {
        name: "Ablative Carapace",
        cost: "2CP",
        category: "Epic Deed",
        when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target:
          "One HARVESTER unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "Until the end of the phase, models in your unit have the Feel No Pain 5+ ability. If your unit is within range of an objective marker you control, until the end of the phase models in your unit have the Feel No Pain 4+ ability instead.",
      },
      {
        name: "Secure Biomass",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Fight phase.",
        target:
          "One TYRANIDS unit from your army that has not been selected to fight this phase.",
        effect:
          "Until the end of the phase, melee weapons equipped by models in your unit have the [LETHAL HITS] ability. If your unit is a HARVESTER unit, each time a model in that unit makes a melee attack, a successful unmodified Hit roll of 5+ scores a Critical Hit as well.",
      },
      {
        name: "Rapacious Hunger",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Fight phase.",
        target:
          "One TYRANIDS unit from your army that just destroyed an enemy unit.",
        effect:
          "Your unit immediately Regenerates (see Feed the Swarm). When doing so, if your unit is a HARVESTER unit and you choose for one model to regain up to D3 lost wounds, that model regains up to 3 lost wounds instead.",
      },
    ],
  },
  {
    id: "crusher-stampede",
    name: "Crusher Stampede",
    tagline:
      "Monstrous bioforms that grow more dangerous the more they are wounded.",
    primaryObjective: "purge-the-foe",
    detachmentPoints: 2,
    rules: [
      {
        name: "Enraged Behemoths",
        effect:
          "Each time a TYRANIDS MONSTER model from your army makes an attack, add 1 to the Hit roll if that model's unit is below its Starting Strength, and add 1 to the Wound roll as well if that model's unit is Below Half-strength. In addition, while a TYRANIDS MONSTER unit from your army (excluding Battle-shocked units) is at its Starting Strength, add 2 to the Objective Control characteristic of models in that unit.",
      },
    ],
    enhancements: [
      {
        name: "Enraged Reserves",
        restriction: "TYRANIDS MONSTER model only.",
        effect:
          "If the bearer is destroyed by a melee attack, if it has not fought this phase, roll one D6: on a 3+, do not remove it from play. It can fight after the attacking model's unit has finished making its attacks, and is then removed from play.",
        points: 20,
      },
      {
        name: "Monstrous Nemesis",
        restriction: "TYRANIDS MONSTER model only.",
        effect:
          "Each time the bearer makes a melee attack that targets a MONSTER or VEHICLE unit, add 1 to the Wound roll.",
        points: 25,
      },
      {
        name: "Null Nodules",
        restriction: "TYRANIDS MONSTER model only.",
        effect:
          "Once per battle, when a Psychic Attack is allocated to the bearer, it can use this ability. If it does, until the end of the phase, the bearer has the Feel No Pain 5+ ability against Psychic Attacks.",
        points: 10,
      },
      {
        name: "Ominous Presence",
        restriction: "TYRANIDS MONSTER model only.",
        effect: "Add 3 to the bearer's Objective Control characteristic.",
        points: 15,
      },
    ],
    stratagems: [
      {
        name: "Corrosive Viscera",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your opponent's Shooting phase or the Fight phase, just after a TYRANIDS MONSTER model from your army with the Deadly Demise ability that cannot Fly is destroyed.",
        target:
          "That TYRANIDS MONSTER model. You can use this Stratagem on that model even though it was just destroyed.",
        effect:
          "Do not roll one D6 to determine whether mortal wounds are inflicted by your model's Deadly Demise ability. Instead, mortal wounds are automatically inflicted.",
      },
      {
        name: "Rampaging Monstrosities",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Fight phase.",
        target:
          "One TYRANIDS MONSTER unit from your army that has not been selected to fight this phase.",
        effect:
          "Until the end of the phase, each time a model in your unit makes an attack, you can re-roll the Hit roll.",
      },
      {
        name: "Savage Roar",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target:
          "One TYRANIDS MONSTER unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "That enemy unit must take a Battle-shock test and, until the end of the phase, each time a model in that enemy unit makes an attack that targets your unit, subtract 1 from the Hit roll. If that Battle-shock test was failed, subtract 1 from the Wound roll as well.",
      },
      {
        name: "Untrammelled Ferocity",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Movement phase.",
        target:
          "One TYRANIDS MONSTER unit from your army that has not been selected to move this phase.",
        effect:
          'Until the end of the phase, each time a model in your unit makes a Normal, Advance or Fall Back move, it can move through models (excluding TITANIC models) and sections of terrain features that are 4" or less in height. When doing so:\nIt can move within Engagement Range of enemy models, but cannot end that move within Engagement Range of them.\nIt can also move through sections of terrain features that are more than 4" in height, but if it does, after its unit has moved, roll one D6: on a 1, your unit is Battle-shocked.',
      },
      {
        name: "Swarm-guided Salvoes",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Shooting phase.",
        target:
          "One TYRANIDS MONSTER unit from your army that has not been selected to shoot this phase.",
        effect:
          "Until the end of the phase, ranged weapons equipped by models in your unit have the [IGNORES COVER] ability, and until the end of the phase each time a model in your unit makes an attack, you can ignore any or all modifiers to that model's Ballistic Skill characteristic and any or all modifiers to the Hit roll.",
      },
      {
        name: "Massive Impact",
        cost: "1CP",
        category: "Epic Deed",
        when: "Your Charge phase, just after a TYRANIDS MONSTER model from your army ends a Charge move.",
        target: "That TYRANIDS MONSTER model.",
        effect:
          "Select one enemy unit within Engagement Range of your model and roll six D6: for each 4+, that enemy unit suffers 1 mortal wound.",
      },
    ],
  },
  {
    id: "invasion-fleet",
    name: "Invasion Fleet",
    tagline:
      "The swarm at its most versatile, adapting its biology to whatever stands in its way.",
    primaryObjective: "take-and-hold",
    detachmentPoints: 3,
    rules: [
      {
        name: "Hyper-adaptations",
        effect:
          "At the start of the first battle round, select one of the following Hyper-adaptations to be active for TYRANIDS units from your army until the end of the battle.\nSwarming Instincts: Each time a TYRANIDS model with this Hyper-adaptation makes an attack that targets an INFANTRY or SWARM unit, that attack has the [SUSTAINED HITS 1] ability.\nHyper-aggression: Each time a TYRANIDS model with this Hyper-adaptation makes an attack that targets a MONSTER or VEHICLE unit, that attack has the [LETHAL HITS] ability.\nHive Predators: Each time a TYRANIDS model with this Hyper-adaptation makes an attack that targets a CHARACTER unit, on a Critical Hit, that attack has the [PRECISION] ability.",
      },
    ],
    enhancements: [
      {
        name: "Adaptive Biology",
        restriction: "TYRANIDS model only.",
        effect:
          "The bearer has the Feel No Pain 5+ ability. At the start of any turn, if the bearer has fewer than its starting number of wounds remaining, until the end of the battle, it has the Feel No Pain 4+ ability instead.",
        points: 25,
      },
      {
        name: "Alien Cunning",
        restriction: "TYRANIDS model only.",
        effect:
          "After both players have deployed their armies, select up to three TYRANIDS units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves if you wish, regardless of how many units are already in Strategic Reserves.",
        points: 30,
      },
      {
        name: "Perfectly Adapted",
        restriction: "TYRANIDS model only.",
        effect:
          "Once per turn, you can re-roll one Hit roll, one Wound roll, one Damage roll, one Advance roll, one Charge roll or one saving throw made for the bearer.",
        points: 15,
      },
      {
        name: "Synaptic Linchpin",
        restriction: "TYRANIDS model only.",
        effect:
          'While a friendly TYRANIDS unit is within 9" of the bearer, that unit is within Synapse Range of your army.',
        points: 20,
      },
    ],
    stratagems: [
      {
        name: "Rapid Regeneration",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target:
          "One TYRANIDS unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "Until the end of the phase, models in your unit have the Feel No Pain 6+ ability. If your unit is within Synapse Range of your army, models in your unit have the Feel No Pain 5+ ability instead.",
      },
      {
        name: "Adrenal Surge",
        cost: "2CP",
        category: "Battle Tactic",
        when: "Fight phase.",
        target:
          "Up to two TYRANIDS units from your army that are within Synapse Range of your army and are eligible to fight, or one other TYRANIDS unit from your army that is eligible to fight.",
        effect:
          "Until the end of the phase, each time a model in any of those selected units makes an attack, an unmodified Hit roll of 5+ scores a Critical Hit.",
      },
      {
        name: "Death Frenzy",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target:
          "One TYRANIDS unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6: on a 4+, do not remove it from play. The destroyed model can fight after the attacking model's unit has finished making its attacks, and is then removed from play.",
      },
      {
        name: "Overrun",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Fight phase, just before a TYRANIDS unit from your army Consolidates.",
        target: "That TYRANIDS unit.",
        effect:
          'Until the end of the phase, each time your unit Consolidates, models in it can move an additional 3" as long as your unit can end that move within Engagement Range of one or more enemy units. If your unit is within Synapse Range of your army and not within Engagement Range of any enemy units, instead of making that Consolidation move, it can make a Normal move of up to 6".',
      },
      {
        name: "Predatory Imperative",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Command phase.",
        target:
          "Up to two TYRANIDS units from your army that are within Synapse Range of your army, or one other TYRANIDS unit from your army.",
        effect:
          "Select one Hyper-adaptation. Until the start of your next Command phase, that Hyper-adaptation is active for those selected units in addition to any other that may be active for your army.",
        restrictions:
          "You cannot select the same Hyper-adaptation you selected at the start of the first battle round.",
      },
      {
        name: "Endless Swarm",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Command phase.",
        target:
          "Up to two ENDLESS MULTITUDE units from your army that are within Synapse Range of your army, or one other ENDLESS MULTITUDE unit from your army.",
        effect:
          "You can return up to D3+3 destroyed models to each of those selected units.",
      },
    ],
  },
  {
    id: "subterranean-assault",
    name: "Subterranean Assault",
    tagline:
      "Mawlocs and Trygons that tunnel beneath the battlefield and erupt wherever they please.",
    primaryObjective: "disruption",
    detachmentPoints: 3,
    keywordsNote:
      "MAWLOC and TRYGON units from your army have the BURROWER keyword.\nIn the Muster Armies step, you can select up to 2 TRYGON models from your army. The selected units gain the CHARACTER keyword.\nDesigner's Note: This means that the selected models can be given Enhancements and one of them can be selected as your WARLORD.",
    rules: [
      {
        name: "Surprise Assault",
        effect:
          'Each time a TYRANIDS model from your army makes an attack, re-roll a Hit roll of 1.\nEach time a BURROWER unit from your army is set up on the battlefield from Reserves, place a 40mm circular Tunnel Marker anywhere on the battlefield within 1" of that unit and more than 3" horizontally away from all enemy units.\nIn the Reinforcements step of your Movement phase, when you set up a unit on the battlefield from Reserves, you can set that unit up wholly within 9" of one of your Tunnel Markers and more than 6" horizontally away from any enemy units.\nIf an enemy model (excluding AIRCRAFT) ends any kind of move within 3" of one of your Tunnel Markers, that Tunnel Marker is removed from the battlefield.',
      },
    ],
    enhancements: [
      {
        name: "Synaptic Strategy",
        restriction: "TYRANIDS model only.",
        effect:
          "Once per battle, you can target the bearer's unit with the Rapid Ingress Stratagem for 0CP, and can do so even if you have already targeted a different unit with that Stratagem this phase.",
        points: 15,
      },
      {
        name: "Tremor Senses",
        restriction: "TYRANIDS model only.",
        effect:
          "After both players have deployed their armies, select up to three friendly TYRANIDS units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves, regardless of how many units are already in Strategic Reserves.",
        points: 20,
      },
      {
        name: "Trygon Prime",
        restriction: "TRYGON model only.",
        effect:
          "The bearer gains the SYNAPSE keyword. Improve the Strength and Weapon Skill characteristics of melee weapons equipped by the bearer by 1.",
        points: 20,
      },
      {
        name: "Vanguard Intellect",
        restriction: "TYRANIDS model with the Deep Strike ability only.",
        effect:
          "The bearer's unit can be set up using the Deep Strike ability in the Reinforcements step of your first, second or third Movement phase, regardless of any mission rules.",
        points: 15,
      },
    ],
    stratagems: [
      {
        name: "Adaptive Optimisation",
        cost: "1CP",
        category: "Wargear",
        when: "Command phase.",
        target: "One MAWLOC or TRYGON unit from your army.",
        effect:
          "Until the start of your next Command phase, your unit has the SYNAPSE keyword.",
      },
      {
        name: "Replenishing Swarms",
        cost: "1CP",
        category: "Wargear",
        when: "Your Movement phase.",
        target:
          'One TYRANIDS unit from your army, wholly within 9" of one or more Tunnel Markers you placed.',
        effect:
          "One model in your unit regains up to D3+1 lost wounds, or you can return up to D3+1 destroyed models with a Wounds characteristic of 1 to your unit, with their full wounds remaining, instead.",
      },
      {
        name: "Enfilading Emergence",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "End of your Movement phase.",
        target:
          "One TYRANIDS unit from your army that was set up as Reinforcements this turn.",
        effect:
          "Until the end of your next Fight phase, weapons equipped by models in your unit have the [SUSTAINED HITS 1] and [IGNORES COVER] abilities.",
      },
      {
        name: "Tunnel Network",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "End of your Movement phase.",
        target:
          'One TYRANIDS unit from your army that is wholly within 9" of one or more of your Tunnel Markers and not within Engagement Range of one or more enemy units.',
        effect:
          'Remove your unit from the battlefield and set it up again, wholly within 9" of another Tunnel Marker you placed, and more than 6" horizontally away from all enemy units.',
      },
      {
        name: "Swarming Assault",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Charge phase.",
        target:
          "One TYRANIDS MONSTER unit from your army that was set up as Reinforcements this turn.",
        effect:
          'Until the end of the phase, friendly TYRANIDS units within 6" of your unit can re-roll Charge rolls.',
      },
      {
        name: "Retreat Below",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "End of your opponent's Fight phase.",
        target:
          "One TYRANIDS unit or up to two BURROWER units from your army that are not within Engagement Range of one or more enemy units.",
        effect:
          "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    ],
  },
  {
    id: "synaptic-nexus",
    name: "Synaptic Nexus",
    tagline:
      "The Hive Mind's will made manifest, pushing imperatives through the synapse web each round.",
    primaryObjective: "disruption",
    detachmentPoints: 2,
    rules: [
      {
        name: "Synaptic Imperatives",
        effect:
          "At the start of the battle round, you can select one of the Synaptic Imperatives shown below. Until the end of the battle round, that Synaptic Imperative is active for your army and while a TYRANIDS unit from your army is within Synapse Range of your army, it will benefit from it. Each Synaptic Imperative can only be selected once per battle.\nSynaptic Augmentation: While this unit is within Synapse Range of your army, models in this unit have a 5+ invulnerable save.\nSurging Vitality: While this unit is within Synapse Range of your army, add 1 to Advance and Charge rolls made for this unit.\nGoaded to Slaughter: While this unit is within Synapse Range of your army, each time a model in this unit makes a melee attack, add 1 to the Hit roll.",
      },
    ],
    enhancements: [
      {
        name: "Power of the Hive Mind",
        restriction: "TYRANIDS PSYKER model only.",
        effect:
          "Improve the Strength and Armour Penetration characteristics of psychic weapons equipped by the bearer by 1.",
        points: 10,
      },
      {
        name: "Psychostatic Disruption",
        restriction: "TYRANIDS SYNAPSE model only.",
        effect:
          'Enemy units that arrive on the battlefield from Reserves cannot be set up within 12" of the bearer. In addition, once per battle, during the first or second battle round, when your opponent declares that a unit will arrive on the battlefield from Strategic Reserves, the bearer can use this Enhancement. If it does, roll one D6: on a 4+, that enemy unit cannot arrive on the battlefield this turn.',
        points: 30,
      },
      {
        name: "Synaptic Control",
        restriction: "TYRANIDS SYNAPSE model only.",
        effect:
          "Each time an attack is allocated to the bearer, subtract 1 from the Damage characteristic of that attack.",
        points: 20,
      },
      {
        name: "The Dirgeheart of Kharis (Aura)",
        restriction: "TYRANIDS SYNAPSE model only.",
        effect:
          'While an enemy unit is within 9" of the bearer, worsen that unit\'s Leadership characteristic by 1.',
        points: 15,
      },
    ],
    stratagems: [
      {
        name: "The Smothering Shadow",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Any phase, just after an enemy unit fails a Battle-shock test.",
        target: 'One SYNAPSE unit from your army within 12" of that enemy unit.',
        effect:
          "Roll six D6: for each 3+, that enemy unit suffers 1 mortal wound.",
      },
      {
        name: "Synaptic Channelling",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Command phase.",
        target: "One SYNAPSE unit from your army.",
        effect:
          'Until the end of the turn, while a friendly TYRANIDS unit is within 9" of the selected unit, that unit is within Synapse Range of your army.',
      },
      {
        name: "Irresistible Will",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Shooting phase or the Fight phase.",
        target:
          'One SYNAPSE unit from your army that has not been selected to shoot or fight this phase, and one enemy unit within 24" of and visible to the SYNAPSE unit.',
        effect:
          'Until the end of the phase, each time a friendly TYRANIDS model makes an attack that targets that enemy unit, if the attacking model\'s unit is within 6" of your SYNAPSE unit, re-roll a Hit roll of 1 and re-roll a Wound roll of 1.',
      },
      {
        name: "Reinforced Hive Node",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target:
          "One SYNAPSE unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
      {
        name: "Imperative Dominance",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Command phase.",
        target:
          "One TYRANIDS unit from your army that is within Synapse Range of your army.",
        effect:
          "Select one Synaptic Imperative, even if you have already selected that imperative this battle. Until the start of your next Command phase, that Synaptic Imperative is active for your unit instead of any other Synaptic Imperative that is active for your army.",
      },
      {
        name: "Override Instincts",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Movement phase.",
        target:
          "One TYRANIDS unit from your army that is within Synapse Range of your army and made a Fall Back move this phase.",
        effect: "Your unit is eligible to shoot and declare a charge this turn.",
      },
    ],
  },
  {
    id: "talons-of-the-norn-queen",
    name: "Talons of the Norn Queen",
    tagline:
      "Norn bioforms, the Hive Mind's finest instruments, reshaping their purpose mid-battle.",
    primaryObjective: "take-and-hold",
    detachmentPoints: 1,
    rules: [
      {
        name: "Higher Imperatives",
        effect:
          "Friendly NORN EMISSARY/NORN ASSIMILATOR units have the following ability:\nProtean Purpose: (Once per battle, per unit) In your Command phase, you can use this ability. If you do, this unit can make a selection for its Singular Purpose ability (this replaces the previous selection).",
      },
    ],
    enhancements: [
      {
        name: "Destabilising Predation",
        restriction: "NORN EMISSARY unit only. (Upgrade)",
        effect: "This unit's ranged attacks have [ANTI-CHARACTER 2+].",
        points: 20,
      },
      {
        name: "Synaptoprescience",
        restriction: "NORN ASSIMILATOR unit only. (Upgrade)",
        effect: "This unit has 4+ InSv.",
        points: 25,
      },
    ],
    stratagems: [
      {
        name: "Lesser Prey",
        cost: "1CP",
        category: "Talons of the Norn Queen",
        when: "Fight phase, when a friendly NORN ASSIMILATOR/NORN EMISSARY unit is selected to fight.",
        target: "That NORN ASSIMILATOR/NORN EMISSARY unit.",
        effect: "Your unit's melee attacks have +2 S.",
      },
      {
        name: "Catalytic Biofortification",
        cost: "1CP",
        category: "Talons of the Norn Queen",
        when: "Any phase, when a friendly NORN ASSIMILATOR unit suffers a mortal wound.",
        target: "That NORN ASSIMILATOR unit.",
        effect: "Your unit has Feel No Pain 4+ against mortal wounds.",
      },
      {
        name: "Tanglestrike Rounds",
        cost: "1CP",
        category: "Talons of the Norn Queen",
        when: "Your Shooting phase, when a friendly NORN ASSIMILATOR unit has shot.",
        target: "That NORN ASSIMILATOR unit.",
        effect:
          'Select one enemy unit hit by those attacks. That enemy unit is tethered until the start of your next Command phase:\nWhile a unit is tethered, that unit has -2" M.',
      },
    ],
  },
  {
    id: "unending-swarm",
    name: "Unending Swarm",
    tagline:
      "Endless multitudes that keep coming long after any sane army would have broken.",
    primaryObjective: "take-and-hold",
    detachmentPoints: 2,
    rules: [
      {
        name: "Insurmountable Odds",
        effect:
          'In your opponent\'s Shooting phase, when an enemy unit has shot, if a model from a friendly ENDLESS MULTITUDE unit was destroyed as a result of those attacks, that friendly unit can make a surge move of up to D6".',
      },
    ],
    enhancements: [
      {
        name: "Adrenalised Onslaught",
        restriction: "TYRANIDS model only.",
        effect:
          'Each time the bearer\'s unit Piles In or Consolidates, models in this unit can move an additional 3".',
        points: 15,
      },
      {
        name: "Naturalised Camouflage",
        restriction: "TYRANIDS model only.",
        effect:
          'At the start of the first battle round, select up to three friendly ENDLESS MULTITUDE units within 9" of the bearer. Until the end of the battle round, each time a ranged attack targets one of those units, models in that unit have the Benefit of Cover against that attack.',
        points: 30,
      },
      {
        name: "Piercing Talons",
        restriction: "TYRANIDS model only.",
        effect:
          "Each time a model in the bearer's unit makes an attack, on a Critical Wound, improve the Armour Penetration characteristic of that attack by 1.",
        points: 25,
      },
      {
        name: "Relentless Hunger",
        restriction: "TYRANIDS model only.",
        effect:
          'Add 2" to the Move characteristic of models in the bearer\'s unit.',
        points: 20,
      },
    ],
    stratagems: [
      {
        name: "Synaptic Goading",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Any phase, just before an ENDLESS MULTITUDE unit from your army that is within Synapse Range of your army makes a Surge move.",
        target: "That ENDLESS MULTITUDE unit.",
        effect:
          "When making that Surge move, you can re-roll the D6 to determine how far your unit moves, and your unit can end that move as close as possible to the closest objective marker (instead of as close as possible to the closest enemy unit). All other rules for making Surge moves still apply.",
      },
      {
        name: "Unending Waves",
        cost: "2CP",
        category: "Strategic Ploy",
        when: "Any phase.",
        target:
          "One ENDLESS MULTITUDE unit from your army that was just destroyed. You can use this Stratagem on that unit even though it was just destroyed.",
        effect:
          "Add a new unit to your army identical to your destroyed unit, in Strategic Reserves, at its Starting Strength.",
        restrictions:
          "Any destroyed CHARACTER units that were attached to your unit are not returned. You can only use this Stratagem once per battle.",
      },
      {
        name: "Teeming Masses",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target:
          "One ENDLESS MULTITUDE unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Hit roll.",
      },
      {
        name: "Swarming Masses",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Shooting phase or the Fight phase.",
        target:
          "One ENDLESS MULTITUDE unit from your army that has not been selected to shoot or fight this phase.",
        effect:
          "Until the end of the phase, weapons equipped by models in your unit have the [SUSTAINED HITS 1] ability, and if your unit contains 15 or more models, each time a model in your unit makes an attack, an unmodified Hit roll of 5+ scores a Critical Hit.",
      },
      {
        name: "Bounding Advance",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Movement phase.",
        target: "One ENDLESS MULTITUDE unit from your army.",
        effect:
          'Until the end of the phase, each time your unit Advances, do not make an Advance roll. Instead, until the end of the phase, add 6" to the Move characteristic of models in your unit.',
      },
      {
        name: "Preservation Imperative",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.",
        target:
          "One ENDLESS MULTITUDE unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "Until the end of the phase, your unit is treated as containing fewer than five models for the purpose of the [BLAST] ability.",
      },
    ],
  },
  {
    id: "vanguard-onslaught",
    name: "Vanguard Onslaught",
    tagline:
      "The swarm's advance organisms, seeding the battlefield before the main horde arrives.",
    primaryObjective: "reconnaissance",
    detachmentPoints: 2,
    rules: [
      {
        name: "Questing Tendrils",
        effect:
          "TYRANIDS units with this ability are eligible to charge in a turn in which they Fell Back. VANGUARD INVADER units with this ability are eligible to charge in a turn in which they Advanced.",
      },
      {
        name: "Vanguard Prime",
        effect:
          "DEATHLEAPER loses the Hunter Organism rule and can be your WARLORD.",
      },
    ],
    enhancements: [
      {
        name: "Chameleonic",
        restriction: "VANGUARD INVADER model only.",
        effect: "This unit has Stealth.",
        points: 15,
      },
      {
        name: "Hunting Grounds",
        restriction: "TYRANIDS model only.",
        effect:
          "While the bearer is on the battlefield, each time your opponent sets up a Reserves unit on the battlefield, roll one D6: on a 2+, that unit must take a Battle-shock test.",
        points: 30,
      },
      {
        name: "Neuronode",
        restriction: "TYRANIDS model only.",
        effect:
          "After both players have deployed their armies, you can select up to three VANGUARD INVADER units from your army and redeploy all of those units. When doing so, any of those units can be placed into Strategic Reserves, regardless of how many units are already in Strategic Reserves.",
        points: 20,
      },
      {
        name: "Stalker",
        restriction: "VANGUARD INVADER model only.",
        effect:
          "At the start of the battle, select one enemy unit. Each time the bearer makes an attack that targets that enemy unit, add 1 to the Hit roll and add 1 to the Wound roll.",
        points: 10,
      },
    ],
    stratagems: [
      {
        name: "Surprise Assault",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Shooting phase or the Fight phase, just after a VANGUARD INVADER unit from your army has selected its targets.",
        target: "That VANGUARD INVADER unit.",
        effect:
          "Select one enemy unit that was selected as the target of one or more of your unit's attacks. That enemy unit must take a Battle-shock test. Until the end of the phase, each time a model in your unit makes an attack that targets that enemy unit, add 1 to the Hit roll. If the Battle-shock test was failed, add 1 to the Wound roll as well.",
      },
      {
        name: "Assassin Beasts",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Fight phase.",
        target:
          "One VANGUARD INVADER INFANTRY unit from your army that has not been selected to fight this phase.",
        effect:
          "Until the end of the phase, melee weapons equipped by models in your unit have the [PRECISION] ability.",
      },
      {
        name: "Seeded Broods",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Movement phase.",
        target:
          "One TYRANIDS unit from your army that is in Reserves, or up to two VANGUARD INVADER units from your army that are in Reserves.",
        effect:
          "Until the end of the phase, for the purposes of setting up those selected units on the battlefield, treat the current battle round number as being one higher than it actually is.",
      },
      {
        name: "Hypersensory Scillia",
        cost: "2CP",
        category: "Strategic Ploy",
        when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target:
          'Up to two VANGUARD INVADER units from your army that are within 8" of that enemy unit, or one other TYRANIDS INFANTRY unit from your army that is within 8" of that enemy unit.',
        effect: 'Those selected units can each make a Normal move of up to 6".',
        restrictions:
          "You cannot target units that are within Engagement Range of one or more enemy units.",
      },
      {
        name: "Unseen Lurkers",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.",
        target:
          "One VANGUARD INVADER unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          'Until the end of the phase, your unit can only be selected as the target of a ranged attack if the attacking model is within 18" or, if your unit has the Lone Operative ability, if the attacking model is within 6". Your opponent can select new targets for the attacking unit\'s attacks.',
      },
      {
        name: "Invisible Hunter",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "End of your opponent's Fight phase.",
        target:
          "Up to two VANGUARD INVADER units from your army, or one TYRANIDS INFANTRY unit from your army.",
        effect:
          "Remove the targeted units from the battlefield and place them into Strategic Reserves.",
        restrictions:
          'The targeted units must be more than 3" away from all enemy units.',
      },
    ],
  },
  {
    id: "warrior-bioform-onslaught",
    name: "Warrior Bioform Onslaught",
    tagline:
      "Tyranid Warriors elevated to the core of the swarm, led by Primes.",
    primaryObjective: "take-and-hold",
    detachmentPoints: 1,
    rules: [
      {
        name: "Leader-beasts",
        effect:
          "Friendly TYRANID WARRIORS WITH RANGED BIO-WEAPONS/TYRANID WARRIORS WITH MELEE BIO-WEAPONS units have:\nTYRANID WARRIORS.\nBATTLELINE.\nTYRANID WARRIORS/TYRANID PRIME WITH LASH WHIP/WINGED TYRANID PRIME models from your army have 5+ InSv.",
      },
    ],
    enhancements: [
      {
        name: "Elevated Might",
        restriction:
          "WINGED TYRANID PRIME/TYRANID PRIME WITH LASH WHIP model only.",
        effect:
          "This model's melee attacks:\nCan re-roll wound rolls.\nHave +1 AP.",
        points: 30,
      },
      {
        name: "Ocular Adaptation",
        restriction:
          "WINGED TYRANID PRIME/TYRANID PRIME WITH LASH WHIP model only.",
        effect: "This unit's melee attacks have +1 to hit rolls.",
        points: 20,
      },
    ],
    stratagems: [
      {
        name: "Alien Physiology",
        cost: "1CP",
        category: "Warrior Bioform Onslaught",
        when: "Your opponent's Shooting phase or the Fight phase, when an enemy unit targets a friendly TYRANID WARRIORS unit.",
        target: "That TYRANID WARRIORS unit.",
        effect:
          "Attacks that target your unit with a S greater than your unit's T have -1 to wound rolls.",
      },
      {
        name: "Parasitic Payload",
        cost: "1CP",
        category: "Warrior Bioform Onslaught",
        when: "Your Shooting phase, when a friendly TYRANID WARRIORS unit is selected to shoot.",
        target: "That TYRANID WARRIORS unit.",
        effect: "Your unit's ranged attacks have [IGNORES COVER].",
      },
      {
        name: "Synaptic Micronodes",
        cost: "1CP",
        category: "Warrior Bioform Onslaught",
        when: "End of your Movement phase.",
        target: "One friendly TYRANID WARRIORS unit.",
        effect:
          "Select one objective your unit is controlling. That objective is secured.",
      },
    ],
  },
];
