import type { Detachment } from "../../types/detachment";

export const DETACHMENTS: Detachment[] = [
  {
    id: "blitz-brigade",
    name: "Blitz Brigade",
    tagline:
      "Battlewagons and rigs that charge the line and spill their cargo of Boyz straight into the fight.",
    primaryObjective: "reconnaissance",
    detachmentPoints: 2,
    rules: [
      {
        name: "Eager for the Fight",
        effect:
          "Each time an ORKS unit from your army disembarks from a TRANSPORT, until the end of the turn, you can re-roll Advance and Charge rolls made for that ORKS unit.",
      },
    ],
    enhancements: [
      {
        name: "Blitzkaptin",
        restriction: "ORKS CHARACTER model only.",
        effect:
          "After both players have deployed their armies, if the bearer's unit (or any TRANSPORT it is embarked within) is on the battlefield, select up to three ORKS VEHICLE units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves, regardless of how many units are already in Strategic Reserves.",
        points: 25,
      },
      {
        name: "Runnin' Boots",
        restriction: "ORKS INFANTRY CHARACTER model only.",
        effect:
          "Each time you make a Charge roll for the bearer's unit, if that unit disembarked from a TRANSPORT this turn, add 1 to the result.",
        points: 10,
      },
      {
        name: "Supercharged Squig Oil",
        restriction: "MEK model only.",
        effect:
          "Each time the bearer uses its Mekaniak ability, until the end of the turn, you can re-roll Charge rolls for the selected VEHICLE model's unit.",
        points: 10,
      },
      {
        name: "Tuff Git",
        restriction: "ORKS INFANTRY CHARACTER model only.",
        effect:
          "At the end of a phase in which the bearer's unit disembarked from a TRANSPORT, if that unit is Battle-shocked, it is no longer Battle-shocked.",
        points: 5,
      },
    ],
    stratagems: [
      {
        name: "Mount Up, Ladz",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "End of the Fight phase.",
        target:
          "One ORKS INFANTRY unit from your army that is not within Engagement Range of one or more enemy units, and one friendly TRANSPORT it is able to embark within.",
        effect:
          'If your ORKS INFANTRY unit is wholly within 6" of that TRANSPORT, it can embark within it.',
      },
      {
        name: "Mekanised Brutality",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Movement phase.",
        target:
          "One BATTLEWAGON, KILL RIG or HUNTA RIG unit from your army that has not been selected to move this phase.",
        effect:
          "Until the end of the turn, each time a unit disembarks from your unit after your unit makes a Normal move, that disembarked unit is still eligible to declare a charge this turn.",
      },
      {
        name: "Run 'Em Down",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Movement phase.",
        target:
          "One BATTLEWAGON, KILL RIG or HUNTA RIG unit from your army that has not been selected to move this phase.",
        effect:
          'Select up to two other friendly ORKS VEHICLE or ORKS MONSTER units within 6" of your unit. Until the end of the turn, your unit and each unit you selected are eligible to declare a charge in a turn in which they Advanced.',
      },
      {
        name: "Armoured Duellists",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Shooting phase.",
        target:
          "One ORKS VEHICLE unit from your army that has not been selected to shoot this phase.",
        effect:
          "Until the end of the phase, each time your unit makes an attack that targets a MONSTER or VEHICLE unit, add 1 to the Hit roll and add 1 to the Wound roll.",
      },
      {
        name: "Impervious",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.",
        target:
          "One BATTLEWAGON, KILL RIG or HUNTA RIG unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "Until the end of the phase, each time an attack targets your unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of your unit, subtract 1 from the Wound roll.",
      },
      {
        name: "Yooz in Trouble Now",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your opponent's Shooting phase, just after an enemy unit has shot.",
        target:
          "One BATTLEWAGON, HUNTA RIG or KILL RIG model from your army that was hit by one or more of the attacking unit's attacks.",
        effect:
          'One ORKS INFANTRY unit embarked within your model makes a disembark move, then makes a surge move of up to D6".',
      },
    ],
  },
  {
    id: "bully-boyz",
    name: "Bully Boyz",
    tagline:
      "The biggest, meanest Nobz in the Waaagh!, driven forward by a Warboss who accepts no excuses.",
    primaryObjective: "purge-the-foe",
    detachmentPoints: 2,
    rules: [
      {
        name: "Da Boss Is Watchin'",
        effect:
          "At the start of your Command phase, in a turn in which you have not called a Waaagh!, if you have one or more WARBOSS models on the battlefield (or embarked within a TRANSPORT that is on the battlefield), you can call a Waaagh! for a second time this battle. When doing so, that second Waaagh! only counts as having been called for WARBOSS, NOBZ and MEGANOBZ units from your army.",
      },
    ],
    enhancements: [
      {
        name: "Big Gob",
        restriction: "INFANTRY WARBOSS model only.",
        effect:
          "At the start of the Fight phase, select one enemy unit within Engagement range of the bearer. That unit must take a Battle-shock test, and when doing so, subtract 1 from the result.",
        points: 20,
      },
      {
        name: "Da Biggest Boss",
        restriction: "INFANTRY WARBOSS model only.",
        effect: "Add 2 to the bearer's Wounds characteristic.",
        points: 15,
      },
      {
        name: "Tellyporta",
        restriction: "WARBOSS IN MEGA ARMOUR model only.",
        effect: "Models in the bearer's unit have the Deep Strike ability.",
        points: 25,
      },
      {
        name: "'Eadstompa",
        restriction: "INFANTRY WARBOSS model only.",
        effect:
          "Each time the bearer makes an attack that targets a unit that is below its Starting Strength, re-roll a Wound roll of 1. If that unit is Below Half-strength, you can re-roll the Wound roll instead.",
        points: 10,
      },
    ],
    stratagems: [
      {
        name: "Armed to da Teef",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Shooting phase or the Fight phase.",
        target:
          "One NOBZ or MEGANOBZ unit from your army that has not been selected to shoot or fight this phase.",
        effect:
          "Until the end of the phase, each time a model in your unit makes an attack, re-roll a Hit roll of 1. If a Waaagh! is active for your unit, you can re-roll the Hit roll instead.",
      },
      {
        name: "Too Arrogant to Die",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target:
          "One NOBZ or MEGANOBZ unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "Until the end of the phase, each time a model in your unit is destroyed, if that model has not shot or fought this phase, roll one D6, adding 2 to the result if a Waaagh! is active for your unit. On a 5+, do not remove the destroyed model from play; it can shoot or fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
      {
        name: "Always Lookin' fer a Fight",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Fight phase, just after an enemy unit is destroyed.",
        target:
          "One NOBZ or MEGANOBZ unit from your army that destroyed that enemy unit.",
        effect:
          'Until the end of the phase, each time your unit makes a Consolidation move, it can move up to D3+3" instead of up to 3". If a Waaagh! is active for your unit, it can move up to 6" instead.',
      },
      {
        name: "Krushin' Impact",
        cost: "1CP",
        category: "Epic Deed",
        when: "Your Charge phase, just after a NOBZ or MEGANOBZ unit from your army ends a Charge move.",
        target: "That NOBZ or MEGANOBZ unit.",
        effect:
          "Select one enemy unit within Engagement Range of your unit, then roll one D6 for each model in your unit that is within Engagement Range of that enemy unit: for each 5+, that enemy unit suffers 1 mortal wound (to a maximum of 6 mortal wounds). If a Waaagh! is active for your unit, that enemy unit suffers 1 mortal wound for each 4+ instead.",
      },
      {
        name: "Cut 'Em Down",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your opponent's Movement phase, just after an enemy unit is selected to Fall Back.",
        target:
          "One NOBZ or MEGANOBZ unit from your army within Engagement Range of that enemy unit.",
        effect:
          "When that enemy unit Falls Back, all models in that enemy unit must take a Desperate Escape test. When doing so, if a Waaagh! is active for your unit, subtract 1 from each of those tests.",
      },
      {
        name: "Hulking Brutes",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.",
        target:
          "One NOBZ or MEGANOBZ unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
      },
    ],
  },
  {
    id: "da-big-hunt",
    name: "Da Big Hunt",
    tagline:
      "Beast Snaggas who mark a single quarry and run it down with squig-mounted ferocity.",
    primaryObjective: "purge-the-foe",
    detachmentPoints: 2,
    rules: [
      {
        name: "Da Hunt Is On",
        effect:
          'At the start of your Command phase, select one MONSTER, VEHICLE or CHARACTER unit from your opponent\'s army. Until the start of your next Command phase, that enemy unit is your Prey:\nWhen a friendly BEAST SNAGGA unit declares a charge, if your Prey is within 12" of that unit, you can use this part of this ability. If you do:\nThat BEAST SNAGGA unit can re-roll that charge roll.\nThat BEAST SNAGGA unit must end that charge move engaged with your Prey.\nEach time a BEAST SNAGGA model from your army makes an attack that targets your Prey, improve the Armour Penetration characteristic of that attack by 1.',
      },
    ],
    enhancements: [
      {
        name: "Glory Hog",
        restriction: "BEASTBOSS ON SQUIGOSAUR model only.",
        effect: 'Models in the bearer\'s unit have the Scouts 9" ability.',
        points: 30,
      },
      {
        name: "Proper Killy",
        restriction: "BEAST SNAGGA model only.",
        effect:
          "Add 1 to the Damage characteristic of melee weapons equipped by the bearer.",
        points: 15,
      },
      {
        name: "Skrag Every Stash!",
        restriction: "BEAST SNAGGA model only.",
        effect:
          "At the end of your Command phase, if the bearer is within range of an objective marker you control, that objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any turn.",
        points: 25,
      },
      {
        name: "Surly as a Squiggoth",
        restriction: "BEASTBOSS ON SQUIGOSAUR model only.",
        effect:
          "While the bearer is leading a unit, each time an attack targets that unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of that unit, subtract 1 from the Wound roll.",
        points: 20,
      },
    ],
    stratagems: [
      {
        name: "Drag It Down",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Fight phase.",
        target:
          "One BEAST SNAGGA unit from your army that has not been selected to fight this phase.",
        effect:
          "Until the end of the phase, melee weapons equipped by models in your unit have the [SUSTAINED HITS 1] ability. In addition, each time a model in your unit makes a melee attack that targets your Prey, a Critical Hit is scored on an unmodified Hit roll of 5+, instead of only a 6.",
      },
      {
        name: "Unstoppable Momentum",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Charge phase, just after a BEAST SNAGGA MOUNTED unit from your army ends a Charge move.",
        target: "That BEAST SNAGGA unit.",
        effect:
          "Select one enemy unit within Engagement Range of your unit and roll one D6 for each model in your unit: for each 4+, that enemy unit suffers 1 mortal wound (to a maximum of 6 mortal wounds). If that enemy unit is your Prey, roll three additional D6.",
      },
      {
        name: "Dat One's Even Bigga!",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Charge phase.",
        target: "One BEAST SNAGGA unit from your army.",
        effect:
          "Until the end of the phase, your unit is eligible to charge in a turn in which it Advanced or Fell Back. In addition, you can re-roll charge rolls made for your unit. If you do, your unit must end that charge move engaged with your Prey.",
      },
      {
        name: "Where D'ya Fink You're Going?",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your opponent's Movement phase, just after an enemy unit ends a Fall Back move.",
        target:
          "One BEAST SNAGGA INFANTRY or BEAST SNAGGA MOUNTED unit from your army that was within Engagement Range of that enemy unit at the start of the phase.",
        effect:
          'If your unit is not within Engagement Range of one or more enemy units, it can make a Normal move of up to 6".',
      },
      {
        name: "Stalkin' Taktiks",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.",
        target:
          "One BEAST SNAGGA INFANTRY or BEAST SNAGGA MOUNTED unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "Until the end of the phase, each time a ranged attack targets your unit, models in your unit have the Benefit of Cover against that attack. In addition, if your unit has the INFANTRY keyword, until the end of the phase, models in your unit have the Stealth ability.",
      },
      {
        name: "Instinctive Hunters",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "End of your opponent's Fight phase.",
        target:
          "One BEAST SNAGGA unit from your army that is not within Engagement Range of one or more enemy unit.",
        effect:
          "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    ],
  },
  {
    id: "dread-mob",
    name: "Dread Mob",
    tagline:
      "Meks and their walkers, jamming unlabelled buttons and hoping the guns do something spectacular.",
    primaryObjective: "priority-assets",
    detachmentPoints: 2,
    keywordsNote: "GRETCHIN units from your army gain the BATTLELINE keyword.",
    rules: [
      {
        name: "Try Dat Button!",
        effect:
          "Each time a MEK, ORKS WALKER or GROTS VEHICLE unit from your army is selected to shoot or fight, roll one D6. Until the end of the phase, weapons equipped by models in that unit have the corresponding Button Effect below.\n1-2: Those weapons have the [SUSTAINED HITS 1] ability.\n3-4: Those weapons have the [LETHAL HITS] ability.\n5-6: Each time an attack is made with one of those weapons, on a Critical Wound, improve the Armour Penetration characteristic of that attack by 2.\nAlternatively, when such a unit is selected to shoot or fight, you can select one of the abilities above instead of rolling the D6. If you do, until the end of the phase, weapons equipped by models in that unit have the [HAZARDOUS] ability as well.\nIf a weapon equipped by a model from your army has the [HAZARDOUS] ability from multiple sources, each time you take a Hazardous test for that weapon, it is failed on a roll of 1-3.",
      },
    ],
    enhancements: [
      {
        name: "Gitfinder Gogglez",
        restriction: "MEK model only.",
        effect:
          "Ranged weapons equipped by models in the bearer's unit have the [IGNORES COVER] ability.",
        points: 10,
      },
      {
        name: "Press It Fasta!",
        restriction: "MEK model only.",
        effect:
          "Each time the bearer's unit is selected to shoot, when rolling to determine which ability that unit's weapons gain from the Try Dat Button! Detachment rule, roll one additional D6: until the end of the phase, ranged weapons equipped by models in that unit gain both Button Effects generated by those rolls. If a duplicate Button Effect is rolled, it has no additional effect.",
        points: 35,
      },
      {
        name: "Smoky Gubbinz",
        restriction: "MEK model only.",
        effect: "Models in the bearer's unit have the Stealth ability.",
        points: 15,
      },
      {
        name: "Supa-glowy Fing",
        restriction: "MEK model only.",
        effect:
          'In your Command phase, select one enemy unit within 18" of and visible to the bearer, then roll one D6: on a 1-2, that enemy unit must take a Battle-shock test; on a 3-4, that enemy unit suffers D3 mortal wounds; on a 5-6, until the start of your next Command phase, each time a model in that enemy unit makes an attack, subtract 1 from the Hit roll.',
        points: 20,
      },
    ],
    stratagems: [
      {
        name: "Klankin' Klaws",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Fight phase.",
        target:
          "One ORKS WALKER unit from your army that has not been selected to fight this phase.",
        effect:
          "Each time you use this Stratagem, you can choose to push it. Until the end of the phase, add 2 to the Strength characteristic of melee weapons equipped by models in your unit and, if you chose to push it, until the end of the phase, add 1 to the Damage characteristic of those weapons and they have the [HAZARDOUS] ability as well.",
      },
      {
        name: "Superfuelled Boiler",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Movement phase, just after an ORKS WALKER unit from your army has been selected to Advance.",
        target: "That ORKS WALKER unit.",
        effect:
          "Until the end of the turn, you can re-roll Advance rolls made for your unit and ranged weapons equipped by models in your unit have the [ASSAULT] ability.",
      },
      {
        name: "Bigger Shells for Bigger Gitz",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Shooting phase.",
        target:
          "One MEK, ORKS WALKER or GROTS VEHICLE unit from your army that has not been selected to shoot this phase.",
        effect:
          "Each time you use this Stratagem, you can choose to push it. Until the end of the phase, each time a model in your unit makes an attack that targets a MONSTER or VEHICLE, add 1 to the Wound roll. If you chose to push it, add 1 to the Damage characteristic of that attack and, until the end of the phase, ranged weapons equipped by models in your unit have the [HAZARDOUS] ability as well.",
      },
      {
        name: "Dakka! Dakka! Dakka!",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Shooting phase.",
        target:
          "One ORKS WALKER or GROTS VEHICLE unit from your army that has not been selected to shoot this phase.",
        effect:
          "Each time you use this Stratagem, you can choose to push it. Until the end of the phase, each time a model in your unit makes an attack, re-roll a Hit roll of 1. If you chose to push it, you can re-roll the Hit roll instead and, until the end of the phase, ranged weapons equipped by models in your unit have the [HAZARDOUS] ability as well.",
      },
      {
        name: "Conniving Runts",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target:
          'One GRETCHIN unit from your army that is within 8" of that enemy unit and not within Engagement Range of any enemy units.',
        effect:
          "Roll one D6: on a 4+, that enemy unit suffers D3+1 mortal wounds. Your unit can then make a Normal move.",
      },
      {
        name: "Extra Gubbinz",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.",
        target:
          "One ORKS WALKER or GROTS VEHICLE unit from your army (excluding TITANIC units) that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "Until the end of the phase, each time an attack is allocated to a model in your unit, subtract 1 from the Damage characteristic of that attack.",
      },
    ],
  },
  {
    id: "equatorial-hordes",
    name: "Equatorial Hordes",
    tagline:
      "Kommandos and mobs who know the jungle better than the foe and use every inch of it.",
    primaryObjective: "disruption",
    detachmentPoints: 1,
    rules: [
      {
        name: "Jungle Know-wotz",
        effect:
          'In the Declare Battle Formations step, select up to three friendly MOB/KOMMANDOS units. Those units have Scouts 6" until the end of the battle.',
      },
    ],
    enhancements: [
      {
        name: "Kunnin' Hunta",
        restriction:
          "BEASTBOSS/INFANTRY WARBOSS model only. (Once per turn, per unit)",
        effect:
          'In your opponent\'s Movement phase, when an enemy unit ends a move within 8" of this unit, if this unit is unengaged, this unit can make a normal move of up to D3+3".',
        points: 25,
      },
      {
        name: "Unkillable Scourge",
        restriction: "BEASTBOSS/INFANTRY WARBOSS model only.",
        effect:
          "When this model is destroyed, if this unit has not been selected to fight this phase, roll one D6, with +1 to that roll if the Waaagh! is active for this unit:\nOn a 3+, do not remove this model from the battlefield. When this unit has fought, or at the end of the phase (whichever comes first), this model is removed from the battlefield.",
        points: 25,
      },
    ],
    stratagems: [
      {
        name: "Dey're Over 'Ere",
        cost: "1CP",
        category: "Equatorial Hordes",
        when: "Start of your Shooting phase.",
        target: "One friendly MOB/KOMMANDOS unit.",
        effect:
          'While a visible enemy unit is within 6" of your unit, that unit has +3" detection range.',
      },
      {
        name: "Stragglerz",
        cost: "1CP",
        category: "Equatorial Hordes",
        when: "Your Command phase.",
        target: "One friendly MOB/KOMMANDOS unit.",
        effect: "Your unit heals 2D3 wounds.",
      },
      {
        name: "Concealed Krumpin'",
        cost: "1CP",
        category: "Equatorial Hordes",
        when: "Your Shooting phase or the Fight phase, when a friendly hidden MOB unit is selected to attack.",
        target: "That MOB unit.",
        effect: "Your unit's attacks have [LETHAL HITS].",
      },
    ],
  },
  {
    id: "freebooter-krew",
    name: "Freebooter Krew",
    tagline:
      "Ork pirates who fight hardest wherever the loot is piled deepest.",
    primaryObjective: "take-and-hold",
    detachmentPoints: 2,
    rules: [
      {
        name: "Here Be Loot",
        effect:
          "At the start of your Command phase, select one objective marker. Until the start of your next Command phase, that objective marker is your loot objective.\nEach time a model in an ORKS INFANTRY, ORKS MOUNTED or ORKS WALKER unit from your army makes an attack, that attack has the [SUSTAINED HITS 1] ability if either or both of the following are true:\nThat model's unit is within range of your loot objective.\nThat attack targets a unit within range of your loot objective.",
      },
    ],
    enhancements: [
      {
        name: "Bionik Workshop",
        restriction: "BIG MEK or PAINBOY model only.",
        effect:
          'At the start of the battle, roll one D3 and compare the result to the list below. Until the end of the battle, models in the bearer\'s unit have that bioniks ability.\n1. Bionik Legs: Add 2" to the Move characteristic of this model.\n2. Bionik Arms: Add 1 to the Strength characteristic of melee weapons equipped by this model.\n3. Bionik Bonce: Improve the Weapon Skill characteristic of melee weapons equipped by this model by 1.',
        points: 15,
      },
      {
        name: "Da Kaptin",
        restriction: "WARBOSS model only.",
        effect:
          'Once per battle round, at the start of any phase, you can select one friendly ORKS unit that is Battle-shocked and within 12" of the bearer. That unit suffers D3 mortal wounds and it is no longer Battle-shocked.',
        points: 10,
      },
      {
        name: "Git-spotter Squig",
        restriction: "ORKS model only.",
        effect:
          "Ranged weapons equipped by models in the bearer's unit have the [IGNORES COVER] ability.",
        points: 20,
      },
      {
        name: "Razgit's Magik Map",
        restriction: "ORKS model only.",
        effect:
          "After both players have deployed their armies, select up to three ORKS INFANTRY units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves, regardless of how many units are already in Strategic Reserves.",
        points: 25,
      },
    ],
    stratagems: [
      {
        name: "Bash and Grab",
        cost: "1CP",
        category: "Battle Tactic",
        when: "The Fight phase.",
        target:
          "One ORKS unit from your army that has not been selected to fight this phase.",
        effect:
          "Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit within range of the loot objective, you can re-roll the Wound roll.",
      },
      {
        name: "Grab and Bash",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Command phase.",
        target:
          "One ORKS unit from your army (excluding GRETCHIN units) that is within range of the loot objective.",
        effect:
          "Until the start of your next Command phase, the Waaagh! is active for your unit, even if you have already called a Waaagh! this battle.\nDesigner's Note: This means that any abilities that are in effect while the Waaagh! is active for your army will be in effect for your unit.",
      },
      {
        name: "Boardin' Rush",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Movement phase.",
        target:
          "One ORKS unit from your army that has not been selected to move this phase.",
        effect:
          'Until the end of the phase, each time your unit Advances, do not make an Advance roll. Instead, until the end of the phase, add 6" to the Move characteristic of models in your unit.',
      },
      {
        name: "Deck Fraggers",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Shooting phase.",
        target:
          "One ORKS unit from your army that has not been selected to shoot this phase.",
        effect:
          "Until the end of the phase, each time a model in your unit targets an INFANTRY unit with a ranged weapon, that weapon has the [BLAST] ability.",
      },
      {
        name: "Rolling Loot-heap",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Shooting phase.",
        target:
          "One FLASH GITZ unit from your army that has not been selected to shoot this phase.",
        effect:
          "Until the end of the phase, ranged weapons equipped by models in your unit have the [ANTI-VEHICLE 4+] ability.",
      },
      {
        name: "Krump and Run",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your opponent's Movement phase, just after an enemy unit falls back.",
        target:
          "One ORKS unit from your army that was within engagement range of that enemy unit at the start of the phase and is not within range of one or more enemy units.",
        effect: 'Your unit can make a Normal move of up to 6".',
      },
    ],
  },
  {
    id: "green-tide",
    name: "Green Tide",
    tagline:
      "Boyz by the hundred, where the mob itself is the armour and the weapon.",
    primaryObjective: "take-and-hold",
    detachmentPoints: 3,
    rules: [
      {
        name: "Mob Mentality",
        effect:
          "Each time an attack targets a BOYZ unit from your army, models in that unit have a 6+ invulnerable save against that attack. Each time an attack targets a BOYZ unit from your army that contains 10 or more models, models in that unit have a 5+ invulnerable save against that attack.",
      },
    ],
    enhancements: [
      {
        name: "Bloodthirsty Belligerence",
        restriction: "ORKS INFANTRY model only.",
        effect:
          "While the bearer is leading a unit, you can re-roll Advance rolls made for that unit. While that unit contains 10 or more models, you can re-roll Charge rolls made for that unit as well.",
        points: 15,
      },
      {
        name: "Brutal but Kunnin'",
        restriction: "ORKS INFANTRY model only.",
        effect:
          "In your Command phase, if the bearer is on the battlefield (or is embarked within a TRANSPORT that is on the battlefield), roll one D6, adding 2 to the result if the bearer's unit contains 10 or more models: on a 5+, you gain 1CP.",
        points: 25,
      },
      {
        name: "Ferocious Show Off",
        restriction: "ORKS INFANTRY model only.",
        effect:
          "Each time the bearer fights, while resolving those attacks, add 1 to the Strength characteristic of the bearer's melee weapons. If the bearer's unit contains 10 or more models, while resolving those attacks, add 3 to the Strength characteristic instead.",
        points: 10,
      },
      {
        name: "Raucous Warcaller",
        restriction: "ORKS INFANTRY model only.",
        effect:
          "While the bearer is leading a unit, that unit always counts as containing 10 or more models for the purposes of your Detachment rule and any Stratagems you use.",
        points: 20,
      },
    ],
    stratagems: [
      {
        name: "Competitive Streak",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Fight phase.",
        target:
          "One BOYZ unit from your army that has not been selected to fight this phase.",
        effect:
          "Until the end of the phase, each time a model in your unit makes an attack, re-roll a Wound roll of 1. If your unit contains 10 or more models, re-roll the Wound roll instead.",
      },
      {
        name: "Bulldozer Brutality",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Fight phase.",
        target:
          "One BOYZ unit from your army that has not been selected to fight this phase and is within Engagement Range of one or more enemy units.",
        effect:
          'Until the end of the phase, each time your unit is selected to fight, when determining which models in your unit are eligible to fight, any models in your unit that are within 3" of one or more enemy models are eligible to fight. When resolving those attacks, such models can target one of those enemy units that is within 3" of them and within Engagement Range of their unit.',
      },
      {
        name: "Braggin' Rights",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Command phase.",
        target: 'Two BOYZ units from your army that are within 6" of each other.',
        effect:
          'Until the start of your next Command phase, while those two units are within 6" of each other, they both count as containing 10 or more models for the purpose of your Detachment rule, any Enhancements models from your army have and any Stratagems you use.',
      },
      {
        name: "Come On Ladz!",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Command phase.",
        target: "One BOYZ unit from your army.",
        effect:
          "Return up to D3+2 destroyed models to your unit (excluding CHARACTER models).",
      },
      {
        name: "Tide of Muscle",
        cost: "1CP",
        category: "Epic Deed",
        when: "Your Charge phase.",
        target:
          "One BOYZ unit from your army that has not declared a charge this phase.",
        effect:
          "Until the end of the phase, each time your unit declares a charge, add 1 to the Charge roll and, if your unit contains 10 or more models, you can re-roll the Charge roll.",
      },
      {
        name: "Go Get 'Em!",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your opponent's Shooting phase, when an enemy unit that targeted a friendly unengaged BOYZ unit this phase has shot.",
        target: "That BOYZ unit.",
        effect: 'Your unit can make a surge move of up to D6".',
      },
    ],
  },
  {
    id: "kult-of-speed",
    name: "Kult of Speed",
    tagline:
      "Speed Freeks who only stop accelerating when something explodes.",
    primaryObjective: "disruption",
    detachmentPoints: 2,
    rules: [
      {
        name: "Adrenaline Junkies",
        effect:
          "SPEED FREEKS units from your army are eligible to shoot and declare a charge in a turn in which they Advanced or Fell Back.",
      },
    ],
    enhancements: [
      {
        name: "Fasta Than Yooz",
        restriction: "ORKS INFANTRY model only.",
        effect:
          "Each time the bearer's unit disembarks from a TRANSPORT after that TRANSPORT has made a Normal move, the bearer's unit is still eligible to declare a charge this turn.",
        points: 35,
      },
      {
        name: "Speed Makes Right",
        restriction: "ORKS model only.",
        effect:
          'In your Command phase, if the bearer (or a TRANSPORT the bearer is embarked within) is within 9" of one or more enemy units, roll one D6: on a 3+, you gain 1CP.',
        points: 25,
      },
      {
        name: "Squig-hide Tyres",
        restriction: "DEFFKILLA WARTRIKE model only.",
        effect:
          'Each time a model in the bearer\'s unit makes a Consolidation move, it can move up to 6" instead of up to 3".',
        points: 15,
      },
      {
        name: "Wazblasta",
        restriction: "DEFFKILLA WARTRIKE model only.",
        effect:
          'In your Shooting phase, after the bearer\'s unit has shot, if it is not within Engagement Range of one or more enemy units, it can make a Normal move of up to 6". If it does, until the end of the turn, it is not eligible to declare a charge.',
        points: 10,
      },
    ],
    stratagems: [
      {
        name: "Speediest Freeks",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target:
          "One SPEED FREEKS or TRUKK unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "Until the end of the phase, models in your unit have a 5+ invulnerable save. If your unit is a VEHICLE unit with an unmodified Toughness characteristic of 8 or less, until the end of the phase, models in your unit have a 4+ invulnerable save instead.",
      },
      {
        name: "Squig Flingin'",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Movement phase, just after a SPEED FREEKS or TRUKK unit from your army ends a Normal, Advance or Fall Back move.",
        target: "That SPEED FREEKS or TRUKK unit.",
        effect:
          'Select one enemy unit within 9" of your unit. That enemy unit must take a Battle-shock test and, when doing so, subtract 1 from the result.',
      },
      {
        name: "Dakkastorm",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Shooting phase.",
        target:
          "One SPEED FREEKS unit from your army that has not been selected to shoot this phase.",
        effect:
          'Until the end of the phase, ranged weapons equipped by models in your unit have the [SUSTAINED HITS 1] ability. While targeting a unit within 9", they have the [SUSTAINED HITS 2] ability instead.',
        restrictions:
          "A unit cannot be targeted by this and the Blitza Fire Stratagem in the same phase.",
      },
      {
        name: "Blitza Fire",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Shooting phase.",
        target:
          "One SPEED FREEKS unit from your army that has not been selected to shoot this phase.",
        effect:
          'Until the end of the phase, ranged weapons equipped by models in your unit have the [LETHAL HITS] ability and, each time a model in your unit makes an attack that targets a unit within 9", a Critical Hit is scored on an unmodified Hit roll of 5+, instead of only a 6.',
        restrictions:
          "A unit cannot be targeted by this and the Dakkastorm Stratagem in the same phase.",
      },
      {
        name: "Full Throttle",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your Charge phase, just after a SPEED FREEKS unit from your army ends a Charge move.",
        target: "That SPEED FREEKS unit.",
        effect:
          "Until the end of the turn, each time a model in your unit makes a melee attack, add 1 to the Wound roll.",
      },
      {
        name: "More Gitz Over 'Ere!",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target:
          'One SPEED FREEKS unit from your army that is within 8" of that enemy unit and is not within Engagement Range of one or more enemy units.',
        effect: 'Your unit can make a Normal move of up to 6".',
      },
    ],
  },
  {
    id: "more-dakka",
    name: "More Dakka!",
    tagline: "Every Ork with a gun, and every gun firing on the move.",
    primaryObjective: "disruption",
    detachmentPoints: 1,
    rules: [
      {
        name: "Dakka! Dakka! Dakka!",
        effect:
          "Friendly ORKS INFANTRY units' ranged attacks have [ASSAULT].\nIn your Shooting phase, if the Waaagh! is active for your army, friendly ORKS INFANTRY units' ranged attacks have [SUSTAINED HITS 1].",
      },
    ],
    enhancements: [
      {
        name: "Da Gobshot Thunderbuss",
        restriction: "ORKS INFANTRY model only.",
        effect:
          "This model's ranged attacks have:\n[DEVASTATING WOUNDS].\n[HAZARDOUS].",
        points: 15,
      },
      {
        name: "Dead Shiny Shootas",
        restriction: "ORKS INFANTRY unit only. (Upgrade)",
        effect:
          "This unit's ranged attacks have:\n[RAPID FIRE 1].\nOr: If that attack already has [RAPID FIRE], +1 to the value of that [RAPID FIRE] (e.g. [RAPID FIRE 1] becomes [RAPID FIRE 2]).",
        points: 15,
      },
    ],
    stratagems: [
      {
        name: "Speshul Shells",
        cost: "1CP",
        category: "More Dakka!",
        when: "Your Shooting phase, when a friendly ORKS INFANTRY unit is selected to shoot.",
        target: "That ORKS INFANTRY unit.",
        effect:
          'Your unit\'s ranged attacks that target a unit within 9" have +1 AP.',
      },
      {
        name: "Call Dat Dakka?",
        cost: "1CP",
        category: "More Dakka!",
        when: "Your opponent's Shooting phase, when an enemy unit that targeted a friendly ORKS INFANTRY unit has shot.",
        target: "That ORKS INFANTRY unit.",
        effect:
          "Your unit shoots using snap shooting, but while doing so your unit can only target that enemy unit.",
      },
      {
        name: "Long, Uncontrolled Bursts",
        cost: "1CP",
        category: "More Dakka!",
        when: "Your Shooting phase, when a friendly ORKS INFANTRY unit is selected to shoot.",
        target: "That ORKS INFANTRY unit.",
        effect: "Your unit's ranged attacks have [IGNORES COVER].",
      },
    ],
  },
  {
    id: "rollin-deff",
    name: "Rollin' Deff",
    tagline: "Battlewagons and rigs rolling forward as one armoured wall.",
    primaryObjective: "priority-assets",
    detachmentPoints: 1,
    restrictions:
      "This detachment has the WAGONS tag and cannot be taken with another WAGONS detachment.",
    rules: [
      {
        name: "Thundering Wagons",
        effect:
          "Friendly BATTLEWAGON/HUNTA RIG/KILL RIG units have WAGON.\nFriendly WAGON units can re-roll charge rolls.\nWhen a friendly WAGON unit is selected to make an advance move, that unit can change advance rolls to a 6.",
      },
    ],
    enhancements: [
      {
        name: "Boarding Ramps",
        restriction: "WAGON unit only. (Upgrade)",
        effect:
          "When a unit embarked within this unit is selected to make a disembark move, that unit has +1 to charge rolls until the end of the turn.",
        points: 10,
      },
      {
        name: "Targetin' Gizmos",
        restriction: "WAGON unit only. (Upgrade)",
        effect:
          "While a BIG MEK model is embarked within this unit:\nThis unit's ranged attacks have [IGNORES COVER].\nIf the Waaagh! is active for this unit, this unit's ranged attacks have [SUSTAINED HITS 1].",
        points: 15,
      },
    ],
    stratagems: [
      {
        name: "Impending Crunch",
        cost: "1CP",
        category: "Rollin' Deff",
        when: "Your Charge phase, when a friendly WAGON unit ends a charge move.",
        target: "That WAGON unit.",
        effect:
          "Each enemy unit engaged with your unit makes a battle-shock roll, with -1 to that battle-shock roll.",
      },
      {
        name: "Devastating Drift",
        cost: "1CP",
        category: "Rollin' Deff",
        when: "Your Fight phase, when a friendly WAGON unit that made a charge move this turn is selected to fight.",
        target: "That WAGON unit.",
        effect: "Your unit's melee attacks have [CLEAVE 1].",
      },
      {
        name: "Brutal Broadside",
        cost: "1CP",
        category: "Rollin' Deff",
        when: "Your Shooting phase, when a friendly BATTLEWAGON unit is selected to shoot.",
        target: "That BATTLEWAGON unit.",
        effect:
          "Your unit's ranged attacks (excluding attacks made by weapons selected with Firing Deck) have [RAPID FIRE X], where X is that attack's A.",
      },
    ],
  },
  {
    id: "taktikal-brigade",
    name: "Taktikal Brigade",
    tagline:
      "Kommandos and Stormboyz who grab objectives and are gone before anyone reacts.",
    primaryObjective: "reconnaissance",
    detachmentPoints: 1,
    rules: [
      {
        name: "Lissen 'Ere",
        effect:
          "Friendly STORMBOYZ units have BATTLELINE.\nWhen a friendly BOYZ/KOMMANDOS/STORMBOYZ unit is selected to make an advance/fall-back move, that move does not prevent that unit from being eligible to start an action.",
      },
    ],
    enhancements: [
      {
        name: "Mork's Kunnin'",
        restriction: "ORKS model only.",
        effect:
          "When both players have deployed their armies, you can redeploy up to three friendly ORKS INFANTRY units. When doing so, you can set those units up in strategic reserves, regardless of how many units are already in strategic reserves.",
        points: 20,
      },
      {
        name: "Slippery Git",
        restriction:
          "INFANTRY WARBOSS model only (excluding MEGA ARMOUR models).",
        effect: "This model has Infiltrators and Stealth.",
        points: 15,
      },
    ],
    stratagems: [
      {
        name: "Taktikal Retreat",
        cost: "1CP",
        category: "Taktikal Brigade",
        when: "Your Movement phase, when a friendly KOMMANDOS/STORMBOYZ unit is selected to make a fall-back move.",
        target: "That KOMMANDOS/STORMBOYZ unit.",
        effect:
          "That move does not prevent your unit from being eligible to declare a charge.",
      },
      {
        name: "On to da Next",
        cost: "1CP",
        category: "Taktikal Brigade",
        when: "End of your opponent's Movement phase.",
        target:
          "One friendly unengaged BOYZ/KOMMANDOS/STORMBOYZ unit that was engaged at the start of the phase.",
        effect: 'Your unit can make a normal move of up to 6".',
      },
      {
        name: "Ded Sneaky",
        cost: "1CP",
        category: "Taktikal Brigade",
        when: "End of your opponent's Fight phase.",
        target: "One friendly unengaged KOMMANDOS/STORMBOYZ unit.",
        effect: "Place your unit in strategic reserves.",
      },
    ],
  },
  {
    id: "speedwaaagh",
    name: "Speedwaaagh!",
    tagline:
      "Buggies and trukks that hit the turbo and cross the table in one straight, screaming line.",
    primaryObjective: "reconnaissance",
    detachmentPoints: 2,
    rules: [
      {
        name: "Turbo Boostas",
        effect:
          'Each time a SPEED FREEKS or TRUKK unit (excluding AIRCRAFT) from your army Advances, it can use its turbo. If it does, do not make an Advance roll for it; instead, until the end of the phase, models in that unit have a Move characteristic of 24" but can only move in one straight line, and until the end of the turn, ranged weapons equipped by those models have the [ASSAULT] ability and that unit cannot declare a charge.\nDesigner\'s Note: When a unit uses its turbo, the models in that unit cannot pivot, and they cannot make a move of two or more straight lines (e.g. to navigate around obstacles). That unit also cannot declare a charge, even if another rule would let it declare a charge in a turn in which it Advanced.',
      },
    ],
    enhancements: [
      {
        name: "Dakkamek",
        restriction: "MEK model only.",
        effect:
          "Each time the bearer uses its Mekaniak ability, until the start of your next Command phase, ranged weapons equipped by the selected VEHICLE model have the [RAPID FIRE 1] ability.",
        points: 25,
      },
      {
        name: "Kustom Shokk Box",
        restriction: "DEFFKILLA WARTRIKE model only.",
        effect:
          "Each time the bearer uses its turbo, its unit can move horizontally through terrain features.",
        points: 10,
      },
      {
        name: "Master Meknologist",
        restriction: "BIG MEK model only.",
        effect:
          "Improve the Ballistic Skill characteristic of the bearer's ranged weapons by 1.",
        points: 20,
      },
      {
        name: "Supa-burny Fuel",
        restriction: "DEFFKILLA WARTRIKE model only.",
        effect:
          "Change the Attacks characteristic of the bearer's killa jet - burna weapon to 3D6, and change the Attacks characteristic of the bearer's killa jet - cutta weapon to 3.",
        points: 15,
      },
    ],
    stratagems: [
      {
        name: "On da Move",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Movement phase.",
        target:
          "One ORKS unit from your army that has not been selected to move this phase.",
        effect:
          "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back or Advanced (unless it used its turbo this turn).",
      },
      {
        name: "Mobile Dakkastorm",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Shooting phase, just after a SPEED FREEKS or TRUKK unit from your army has shot.",
        target: "That SPEED FREEKS or TRUKK unit.",
        effect:
          "Select one enemy unit hit by one or more of those attacks (excluding attacks made with Indirect Fire weapons). Until the end of the phase, each time a model in a SPEED FREEKS or TRUKK unit from your army makes an attack that targets that unit, improve the Strength characteristic of that attack by 2.",
      },
      {
        name: "Speshul Ammo",
        cost: "1CP",
        category: "Wargear",
        when: "Your Shooting phase.",
        target:
          "One ORKS unit from your army that has not been selected to shoot this phase.",
        effect:
          "Until the end of the phase, ranged weapons equipped by models in your unit (excluding Torrent weapons) have the [ANTI-MONSTER 4+] and [ANTI-VEHICLE 4+] abilities.",
      },
      {
        name: "Ded Killy Construction",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your Fight phase.",
        target:
          "One SPEED FREEKS or TRUKK unit from your army that has not been selected to fight this phase.",
        effect:
          "Until the end of the phase, melee weapons equipped by models in your unit have the [LANCE] ability and, if your unit made a Charge move this turn, until the end of the phase, add 1 to the Damage characteristic of those weapons.",
      },
      {
        name: "Dust Trails",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.",
        target:
          "One ORKS unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect: "Until the end of the phase, your unit has the Benefit of Cover.",
      },
      {
        name: "Evasive Manoova",
        cost: "1CP",
        category: "Strategic Ploy",
        when: "End of your opponent's Fight phase.",
        target:
          "One SPEED FREEKS or TRUKK unit from your army that is not within Engagement Range of one or more enemy units.",
        effect:
          "Remove your unit from the battlefield and place it into Strategic Reserves.",
      },
    ],
  },
  {
    id: "war-horde",
    name: "War Horde",
    tagline:
      "The straightforward Waaagh!: every Ork swinging, and none of them stopping.",
    primaryObjective: "take-and-hold",
    detachmentPoints: 3,
    rules: [
      {
        name: "Get Stuck In",
        effect:
          "Melee weapons equipped by ORKS models from your army have the [SUSTAINED HITS 1] ability.",
      },
    ],
    enhancements: [
      {
        name: "Follow Me Ladz",
        restriction: "ORKS model only.",
        effect:
          'While the bearer is leading a unit, add 2" to the Move characteristic of models in that unit.',
        points: 25,
      },
      {
        name: "Headwoppa's Killchoppa",
        restriction: "ORKS model only.",
        effect:
          "Melee weapons equipped by the bearer (excluding Extra Attacks weapons) have the [DEVASTATING WOUNDS] ability.",
        points: 20,
      },
      {
        name: "Kunnin' but Brutal",
        restriction: "ORKS model only.",
        effect:
          "While the bearer is leading a unit, that unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
        points: 15,
      },
      {
        name: "Supa-cybork Body",
        restriction: "ORKS model only.",
        effect: "The bearer has the Feel No Pain 4+ ability.",
        points: 15,
      },
    ],
    stratagems: [
      {
        name: "Careen!",
        cost: "1CP",
        category: "Epic Deed",
        when: "Any phase, just after an ORKS VEHICLE unit from your army with the Deadly Demise ability is destroyed.",
        target:
          "That destroyed ORKS VEHICLE unit, if you rolled a 6 for its Deadly Demise ability. You can use this Stratagem on that unit even though it was just destroyed.",
        effect:
          "Your unit can make a Normal or Fall Back move before its Deadly Demise ability is resolved, and before any embarked units perform an Emergency Disembarkation. When making this move, your unit can move over enemy units (excluding MONSTERS and VEHICLES) as if they were not there.",
      },
      {
        name: "Orks Is Never Beaten",
        cost: "2CP",
        category: "Epic Deed",
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target:
          "One ORKS unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, do not remove it from play. The destroyed model can fight after the attacking unit has finished making attacks, and is then removed from play.",
      },
      {
        name: "Unbridled Carnage",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Fight phase.",
        target:
          "One ORKS unit from your army that has not been selected to fight this phase.",
        effect:
          "Until the end of the phase, each time a model in your unit makes a melee attack, an unmodified hit roll of 5+ scores a Critical Hit.",
      },
      {
        name: "'Ard as Nails",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target:
          "One ORKS unit from your army (excluding GROTS, MONSTER and VEHICLE units) that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Wound roll.",
      },
      {
        name: "Mob Rule",
        cost: "1CP",
        category: "Battle Tactic",
        when: "End of your Command phase.",
        target:
          "One MOB unit from your army that contains 10 or more models and is not Below Half-strength.",
        effect:
          'Select one friendly Battle-shocked ORKS INFANTRY unit within 6" of that MOB unit. That ORKS INFANTRY unit is no longer Battle-shocked.',
      },
      {
        name: "'Ere We Go",
        cost: "1CP",
        category: "Battle Tactic",
        when: "Start of your Movement phase.",
        target: "One ORKS INFANTRY unit from your army.",
        effect:
          "Until the end of the turn, add 2 to Advance and Charge rolls made for your unit.",
      },
    ],
  },
];
