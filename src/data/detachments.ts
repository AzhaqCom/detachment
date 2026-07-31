import type { Detachment, Stratagem } from "../types/detachment";

const ARMOUR_OF_CONTEMPT_RULE = (): Stratagem => ({
  name: "Armour of Contempt",
  cost: "1CP",
  category: "Battle Tactic",
  flavorText:
    "The belligerence of the Adeptus Astartes combined with their post-human physiology makes them unyielding foes to face.",
  when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
  target:
    "One Adeptus Astartes unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
  effect:
    "Until the attacking unit has finished making its attacks, each time an attack targets your unit, worsen the Armour Penetration characteristic of that attack by 1.",
});

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
        flavorText:
          "The warrior hosts deployed in Operation Imperator know they must strike with decisive fury if they are to break their foes.",
        effect:
          "In a turn a friendly ADEPTUS ASTARTES FLY INFANTRY unit made an ingress/charge move, that unit's attacks can re-roll hit rolls of 1.",
      },
    ],
    enhancements: [
      {
        name: "Avenging Angel",
        flavorText:
          "Descending on wings of fire, this warrior spreads terror of Imperial vengeance through the ranks of the foe.",
        restriction: "ADEPTUS ASTARTES FLY INFANTRY model only.",
        effect:
          'When this unit ends an ingress move, select up to one enemy unit within 9" of this unit. That enemy unit makes a battle-shock roll, with -1 to that battle-shock roll.',
        points: 20,
      },
      {
        name: "Orksbane",
        flavorText:
          "The machine spirit of this ancient relic weapon is said to hate Orks with a vehemence that kills them on contact.",
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
        flavorText:
          "Jump jets blazing, these Space Marine shock troops slam into their foes with bone-breaking force.",
        when: "Fight phase, when a friendly ADEPTUS ASTARTES FLY INFANTRY unit that made a charge move this turn is selected to attack.",
        target: "That friendly ADEPTUS ASTARTES FLY INFANTRY unit.",
        effect: "Your unit's melee attacks have +1 S.",
      },
      {
        name: "Purge by Sectors",
        cost: "1CP",
        category: "Vengeful Hosts",
        flavorText:
          "Focused on sweeping the Ork threat from Armageddon, if these warriors find themselves unengaged, they press swiftly onward.",
        when: "End of the Fight phase.",
        target:
          "One friendly unengaged ADEPTUS ASTARTES FLY INFANTRY unit that was eligible to fight this phase.",
        effect: 'Your unit can make a normal move of up to D3+3".',
      },
      {
        name: "Know No Fear",
        cost: "1CP",
        category: "Vengeful Hosts",
        flavorText:
          "Inspired by duty, these warriors reject dismay and fight on with renewed fury.",
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
        flavorText:
          "With howling engines and a buffeting of anti-gravitic forces, a Chapter's massed combat skimmers plunge into the midst of battle with guns blazing.",
        effect:
          'Friendly LAND SPEEDER/STORM SPEEDER HAILSTRIKE/STORM SPEEDER HAMMERSTRIKE/STORM SPEEDER THUNDERSTRIKE units have SPEEDER.\nIn your first Movement phase, friendly SPEEDER units can make an ingress move.',
      },
    ],
    enhancements: [
      {
        name: "Bellicose Weapon Spirits",
        flavorText:
          "Entreated by veteran gunners, this skimmer's potent weapons unleash their spirits' wrath in bursts of excoriating destruction.",
        restriction: "SPEEDER unit only. (Upgrade)",
        effect:
          "This unit can re-roll:\nDamage rolls.\nRolls to determine the A of a weapon.",
        points: 15,
      },
      {
        name: "Raptorial Cogitator Core",
        flavorText:
          "The pinpoint firing solutions woven in runic screed by this vehicle's logic engine speak to its predatory instincts.",
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
        flavorText:
          "Speeder crews are trained to exploit their craft's reconnaissance augurs in a data-link with its weapons to target suddenly revealed foes.",
        when: "Your Shooting phase, when a friendly SPEEDER unit is selected to shoot.",
        target: "That SPEEDER unit.",
        effect:
          'Select one enemy unit within 24" of your unit. That enemy unit has +6" detection range until your unit has shot.',
      },
      {
        name: "Reactive Evasion",
        cost: "1CP",
        category: "Fulguris Task Force",
        flavorText:
          "Triggering sudden flows of power to engines and manoeuvring planes, aggressive advances by the foe can be left foundering in a skimmer's wake.",
        when: "Your opponent's Movement phase, when an enemy unit ends a move within 8\" of a friendly unengaged SPEEDER unit.",
        target: "That SPEEDER unit.",
        effect: 'Your unit can make a normal move of up to D3+3".',
      },
      {
        name: "Anti-grav Surge",
        cost: "1CP",
        category: "Fulguris Task Force",
        flavorText:
          "The anti-grav plates of this combat skimmer thrum with extra power, powering the craft into the atmosphere from where it can redeploy.",
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
        flavorText:
          "Librarians spend their lives mastering psychic disciplines, learning how to manipulate the energies of the Immaterium to confound their foes and embolden their battle-brothers.",
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
        flavorText:
          "The powers of the Immaterium flow through the psyker, heightening his speed and that of his battle-brothers.",
        restriction: "ADEPTUS ASTARTES PSYKER model only.",
        effect:
          "When this unit is selected to make an advance move, that move does not prevent this unit from being eligible to declare a charge.\nWhen this unit is selected to make a fallback move, if this unit has the Biomancy Discipline ability, that move does not prevent this unit from being eligible to declare a charge.",
        points: 35,
      },
      {
        name: "Fusillade",
        flavorText:
          "The Librarian wreathes the ammunition of his allies in armour-eroding halos of azure fire.",
        restriction: "ADEPTUS ASTARTES PSYKER model only.",
        effect:
          "This unit's ranged attacks have: [LETHAL HITS]. If this unit has the Pyromancy Discipline ability, [SUSTAINED HITS 1] as well.",
        points: 25,
      },
      {
        name: "Obfuscation",
        flavorText:
          "By manipulating the minds of the foe, practitioners of telepathy may obfuscate their presence.",
        restriction: "ADEPTUS ASTARTES PSYKER model only.",
        effect:
          'Enemy units cannot target this unit with snap shooting attacks. If this unit has the Telepathy Discipline ability, this unit has 3" detection range.',
        points: 25,
      },
      {
        name: "Prescience",
        flavorText:
          "Those who specialise in prognostication may foresee the flow of battle and position their allies accordingly.",
        restriction:
          "ADEPTUS ASTARTES PSYKER model only (excluding TERMINATOR models).",
        effect:
          '(Once per turn per unit) In your opponent\'s Movement phase, when an enemy unit ends a move within 8" of this unit, if this unit is unengaged, this unit can make a normal move of: up to D6"; or, if this unit has the Divination Discipline ability, up to 6".',
        points: 20,
      },
      {
        name: "Temporal Corridor",
        flavorText:
          "Folding existence around an invisible path along which time is altered, the Librarian propels his allies across the battlefield with supernatural swiftness.",
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
        flavorText:
          "With transhuman instincts, auto-senses, and more specialised equipment, a Chapter's masters of clandestine warfare are able to unmask the foe, leaving them ripe for swift eradication.",
        effect:
          "Friendly PHOBOS/SCOUT SQUAD units have the following ability:\n" +
          'Transhuman Perception: In your Shooting phase, this unit can select one visible enemy unit within 12". That enemy unit is detected: while a unit is detected, that unit has +3" detection range.',
      },
    ],
    enhancements: [
      {
        name: "Shroud Field",
        flavorText:
          "This camouflaging field projector employs a chameleonic twisting of emissions whose secrets the Techmarines cannot reproduce. It mantles its bearer as if with a spectral shroud and masks his approach to his doomed target.",
        restriction: "PHOBOS model only.",
        effect: "This model has: Lone Operative; Stealth.",
        points: 20,
      },
      {
        name: "Death in the Dark",
        flavorText:
          "To slay the hidden foe where they lurk, where their deaths go unmarked and unremembered, is to deny their hateful lives meaning.",
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
        flavorText:
          "Those warriors who operate far from Chapter reinforcement maintain their lethal fire even while conducting vital strategic operations.",
        when: "Your Shooting phase, when a friendly PHOBOS/SCOUT SQUAD unit starts an action.",
        target: "That PHOBOS/SCOUT SQUAD unit.",
        effect:
          "That action does not prevent your unit from being eligible to shoot.",
      },
      {
        name: "Strike from the Shadows",
        cost: "1CP",
        category: "Subversion Assets",
        flavorText:
          "Holding to the shadows and choosing victims with care, stealthy warriors winnow the enemy ranks without ever revealing their positions.",
        when: "Your Shooting phase, when a friendly PHOBOS/SCOUT SQUAD unit has shot.",
        target: "That PHOBOS/SCOUT SQUAD unit.",
        effect:
          "Those ranged attacks do not prevent your unit from being hidden.",
      },
      {
        name: "Cloaked Position",
        cost: "1CP",
        category: "Subversion Assets",
        flavorText:
          "When still, silent and further masked by cameleoline materials or drifting smoke, a Chapter's forward operatives are almost impossible to spot until it is too late.",
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
      "Adeptus Astartes Transport units from your army (excluding Fly) that have a Wounds characteristic of 14+ have the Heavy Transport keyword.",
    rules: [
      {
        name: "Rapid Deployment",
        flavorText:
          "Land Raider, Repulsors and other armoured transports plunge headlong into the heart of enemy formations, weathering heavy firepower to deploy their cargo of elite Space Marines into battle.",
        effect:
          "Each time an Adeptus Astartes unit from your army disembarks from a Transport (excluding Fly) that made a Normal or Advance move this phase (excluding those that arrived from Strategic Reserves), that disembarked unit can make a Normal move of up to D6\", or a Normal move of up to D3+3\" instead if that Transport is a Heavy Transport (see keywords).",
      },
    ],
    enhancements: [
      {
        name: "Liberator",
        flavorText:
          "A dauntless conqueror and liberator of worlds, this intimidating champion inspires confidence in their battle-brothers and abject fear in the enemy.",
        restriction: "Adeptus Astartes model only.",
        effect:
          "If you control an objective marker at the end of your Command phase, and the bearer's unit (or any Heavy Transport it is embarked within) is within range of that objective marker, that objective marker remains under your control until your opponent's Level of Control over that objective marker is greater than yours at the end of a phase.",
        points: 15,
      },
      {
        name: "Tip of the Spear",
        flavorText:
          "This aggressive frontline commander knows the value of speed and decisive manoeuvre.",
        restriction: "Adeptus Astartes model only.",
        effect:
          "If the bearer starts the battle embarked within a Transport, that Transport has the Scouts 6\" ability.",
        points: 40,
      },
      {
        name: "Shock Deployment",
        flavorText:
          "From the ramps of armoured transports, elite infantry deploy swiftly, unleashing fire on overawed enemies.",
        restriction: "Adeptus Astartes Terminator or Gravis model only.",
        effect:
          "In your Shooting phase, each time the bearer's unit is selected to shoot, if it disembarked from a Transport this turn, until the end of the phase, ranged weapons equipped by models in that unit have the [SUSTAINED HITS 1] ability.",
        points: 20,
      },
      {
        name: "Armoured Commander",
        flavorText:
          "This veteran commander of mechanised infantry utilises its manoeuvrability to ensnare the foe.",
        restriction: "Adeptus Astartes model only.",
        effect:
          "Once per turn, in your Movement phase, the bearer can use this Enhancement. If it does, select one friendly Adeptus Astartes Transport that is in Strategic Reserves. Until the end of the phase, for the purposes of setting up that Transport on the battlefield, treat the current battle round number as being one higher than it actually is.",
        points: 25,
      },
    ],
    stratagems: [
      {
        name: "Machine Wrath",
        cost: "1CP",
        category: "Epic Deed",
        flavorText:
          "In a last act of vengeance, the doomed crew of this burning transport drive into the midst of the enemy.",
        when: "Any phase, just after a Heavy Transport unit from your army with the Deadly Demise ability is destroyed.",
        target:
          "That Heavy Transport unit, if you rolled a 6 for its Deadly Demise ability. You can use this Stratagem on that unit even though it was just destroyed.",
        effect:
          "Your unit can make a Normal or Fall Back move before its Deadly Demise ability is resolved, and before any embarked units perform an Emergency Disembarkation. When making this move, your unit can move through enemy models (excluding Monsters and Vehicles) and can move within Engagement Range of such models, but cannot end that move within Engagement Range of them, and any Desperate Escape test is automatically passed.",
      },
      ARMOUR_OF_CONTEMPT_RULE(),
      {
        name: "Advanced Deployment",
        cost: "1CP",
        category: "Strategic Ploy",
        flavorText:
          "Coaxing the utmost from roaring engines, transport crews strive to deploy their passengers as close as possible to their assigned objectives.",
        when: "Your Movement phase.",
        target:
          "One Adeptus Astartes Transport unit from your army that has not been selected to move this phase.",
        effect:
          "Until the end of the phase, units can disembark from your Transport after it has Advanced. Units that do so count as having made a Normal move this phase, and cannot declare a charge in the same turn (unless your Transport has the Assault Ramp ability), but can otherwise act normally.",
      },
      {
        name: "Ceramite Sledgehammer",
        cost: "1CP",
        category: "Strategic Ploy",
        flavorText:
          "The mightiest Space Marine transports are unstoppable on the advance.",
        when: "Your Movement phase.",
        target:
          "One Adeptus Astartes Transport unit from your army that has not been selected to move this phase.",
        effect:
          "Until the end of the phase, each time your unit makes a Normal or Advance move, it can move horizontally through terrain features. In addition, if your unit is a Heavy Transport, when making this move, your unit can move through enemy models (excluding Monsters and Vehicles) and can move within Engagement Range of such models, but cannot end that move within Engagement Range of them, and any Desperate Escape test is automatically passed.",
      },
      {
        name: "Rapid Embarkation",
        cost: "1CP",
        category: "Wargear",
        flavorText:
          "With steely discipline, Space Marine battle-brothers mount up swiftly, even as the enemy closes in.",
        when: "End of the Fight phase.",
        target:
          "One Adeptus Astartes Infantry unit from your army that is not within Engagement Range of one or more enemy units, and one friendly Heavy Transport it is able to embark within.",
        effect:
          'If your Adeptus Astartes Infantry unit is wholly within 6" of that Heavy Transport, it can embark within it.',
      },
      {
        name: "Purgation Doctrine",
        cost: "1CP",
        category: "Battle Tactic",
        flavorText:
          "Emerging from their transports, Space Marine infantry ruthlessly clear enemy positions.",
        when: "Your Shooting phase.",
        target:
          "One Adeptus Astartes unit from your army that has not been selected to shoot this phase.",
        effect:
          "Until the end of the phase, each time a model in your unit makes an attack, add 1 to the Hit roll (if your unit disembarked from a Heavy Transport this turn, add 1 to the Wound roll as well).",
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
      "Adeptus Astartes Vehicle units from your army (excluding Fortifications, Drop Pods, Walkers and units that can Fly) have the Tank Ace keyword. In the Muster Armies step, you can select up to three Tank Ace units from your army to gain the Character keyword. Designer's Note: This means that the selected units can be given Enhancements, and one of them can be selected as your Warlord.",
    rules: [
      {
        name: "Target Sighted",
        flavorText:
          "Space Marine crews are relentless in their pursuit of assigned targets, coaxing every last trace of power from their war machines and demonstrating exemplary gunnery even under heavy fire.",
        effect:
          'Each time a Tank Ace unit from your army Advances, do not make an Advance roll for it. Instead, until the end of the phase, add 6" to the Move characteristic of models in that unit.\nEach time a Tank Ace unit from your army shoots in your Shooting phase, if that unit did not Advance this turn, you can reroll the Damage roll.',
      },
    ],
    enhancements: [
      {
        name: "Redoubtable Machine Spirit",
        flavorText:
          "This ancient war machine has endured millennia of battle, and its belligerent machine spirit has only become more obdurant.",
        restriction: "Adeptus Astartes Vehicle model only.",
        effect:
          "The bearer has a 5+ invulnerable save and, at the end of your Command phase, the bearer regains 1 lost wound.",
        points: 25,
      },
      {
        name: "Gunnery Honours",
        flavorText:
          "The crew of this war machine demonstrate exemplary gunnery and have earned the highest honours for their craft.",
        restriction: "Adeptus Astartes Vehicle model only.",
        effect:
          "Once per phase, you can reroll one Hit roll, one Wound roll and one Damage roll for the bearer.",
        points: 20,
      },
      {
        name: "Firestorm Coordinators",
        flavorText:
          "This vehicle's fire control systems incorporate ancient yet highly advanced logic engines, which assist the crew in obtaining firing solutions and keeping up an exceptionally rapid rate of fire.",
        restriction: "Adeptus Astartes Vehicle model only.",
        effect:
          "Ranged weapons equipped by the bearer have the [SUSTAINED HITS 1] ability.",
        points: 20,
      },
      {
        name: "Astartes Tank Ace",
        flavorText:
          "The commander of this battle tank is a storied tank ace whose exploits are the stuff of Chapter legend. Crews who fight at their side are inspired by their aggression and eagerness to join the battle.",
        restriction: "Adeptus Astartes Vehicle model only. (Aura)",
        effect:
          'In your Shooting phase, while a friendly Adeptus Astartes Vehicle unit is within 6" of the bearer, ranged weapons equipped by models in that unit have the [ASSAULT] ability.',
        points: 40,
      },
    ],
    stratagems: [
      ARMOUR_OF_CONTEMPT_RULE(),
      {
        name: "Rapid Gunnery",
        cost: "1CP",
        category: "Strategic Ploy",
        flavorText:
          "Advanced targeting systems and the skill of transhuman gunners ensure that Space Marine tanks keep up a punishing rate of fire, even when extracting themselves from a press of enemies.",
        when: "Your Shooting phase.",
        target:
          "One Adeptus Astartes unit from your army that has not been selected to shoot this phase.",
        effect:
          "Until the end of the phase, your unit is eligible to shoot in a turn in which it Fell Back.",
      },
      {
        name: "Target Weak Point",
        cost: "1CP",
        category: "Battle Tactic",
        flavorText:
          "Targeting vulnerable joints or seams between armoured plates, Space Marine gunners increase the effectiveness of their weapons.",
        when: "Your Shooting phase.",
        target: "One Tank Ace unit from your army that has not been selected to shoot this phase.",
        effect:
          "Until the end of the phase, each time a model in your unit makes a ranged attack that targets a Monster or Vehicle unit, improve the Armour Penetration characteristic of that attack by 1.",
        restrictions:
          "A unit cannot be targeted with this and the Kill Shot Stratagem in the same phase.",
      },
      {
        name: "Reactive Repositioning",
        cost: "1CP",
        category: "Strategic Ploy",
        flavorText:
          "Reacting swiftly to enemy movements, this tank's crew reposition their vehicle, angling armour or taking up an advantageous firing position.",
        when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target:
          'One Tank Ace unit from your army (excluding units containing one or more models with a Wounds characteristic of 16+) that is within 8" of that enemy unit.',
        effect: 'Your unit can make a Normal move of up to D6".',
      },
      {
        name: "Kill Shot",
        cost: "1CP",
        category: "Battle Tactic",
        flavorText: "Space Marines are ruthless in culling weakened foes.",
        when: "Your Shooting phase.",
        target: "One Tank Ace unit from your army that has not been selected to shoot this phase.",
        effect:
          "Until the end of the phase, each time a model in your unit makes an attack that targets a Monster or Vehicle unit, reroll a Wound roll of 1. If the target unit is below its Starting Strength, you can reroll the Wound roll instead.",
        restrictions:
          "A unit cannot be targeted with this and the Target Weak Point Stratagem in the same phase.",
      },
      {
        name: "Machine Vengeance",
        cost: "1CP",
        category: "Epic Deed",
        flavorText:
          "Bellicose in the extreme, this vehicle's machine spirit demands immediate vengeance for the hurts it has incurred.",
        when: "Your opponent's Shooting phase, just after an enemy unit has shot.",
        target:
          "One Tank Ace unit from your army (excluding units containing one or more models with a Wounds characteristic of 16+) that was selected as the target of one or more of the attacking unit's attacks.",
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
        flavorText:
          "These Space Marines are experts in fighting from rapidly prepared defensive positions. They are able to maximise the potential of almost any terrain to serve as an ad-hoc strongpoint, rapidly assessing optimal firing lines and punishing the foe's every attempt to advance and dislodge them.",
        effect:
          "Each time an Adeptus Astartes model from your army makes an attack, if that model's unit is within a terrain feature, reroll a Hit roll of 1 and re-roll a Wound roll of 1.\n" +
          "Adeptus Astartes units from your army gain the Entrenched keyword while all of the following are true: that unit is within a terrain feature; that unit was not set up on the battlefield this turn; no model in that unit has moved more than 3\" this turn.",
      },
    ],
    enhancements: [
      {
        name: "Honour Indefatigable",
        flavorText:
          "This rare honour badge celebrates a warrior who refuses to give up, even in the face of apparently certain death.",
        restriction: "Gravis model only.",
        effect:
          "The first time the bearer is destroyed, roll one D6 at the end of the phase. On a 2+, set the bearer back up on the battlefield, as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with its full wounds remaining.",
        points: 25,
      },
      {
        name: "Castellum Omnivox",
        flavorText:
          "This unique vox-and-augur augmetic provides the bearer with unparalleled tactical data vital to coordinating an aggressive defence in battle.",
        restriction: "Adeptus Astartes model only.",
        effect:
          "Each time the bearer's unit makes a Fall Back move, select one of the following to apply to that unit until the end of the turn: that unit is eligible to perform an Action in a turn in which it Fell Back; or, that unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
        points: 20,
      },
      {
        name: "Spy-skull Data Link",
        flavorText:
          "Several artificer-crafted and heavily shrouded servo-skulls are tethered to this device, their linked visual feeds making the bearer nigh impossible to evade.",
        restriction: "Adeptus Astartes model only.",
        effect:
          "Ranged weapons equipped by models in the bearer's unit have the [IGNORES COVER] ability.",
        points: 15,
      },
      {
        name: "Defensive Mastery",
        flavorText:
          "Few officers of the Chapter can match this commander's talent for cunning defensive troop dispositions.",
        restriction: "Adeptus Astartes model only.",
        effect:
          "After both players have deployed their armies, select up to three Adeptus Astartes units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves, regardless of how many units are already in Strategic Reserves.",
        points: 25,
      },
    ],
    stratagems: [
      {
        name: "Unyielding Might",
        cost: "1CP",
        category: "Battle Tactic",
        flavorText:
          "Knowing that this strategically vital site must be secure for the defence lines to hold, Space Marines stand indomitable in the face of the foe.",
        when: "Command phase.",
        target:
          "One Adeptus Astartes unit from your army that is within Engagement Range of one or more enemy units.",
        effect:
          "Until the start of your next Command phase, add 1 to the Objective Control characteristics of models in your unit.",
      },
      {
        name: "Stand to the End",
        cost: "1CP",
        category: "Epic Deed",
        flavorText:
          "Aware of how vital it is that the defence line holds, these warriors fight even to their last breath.",
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target:
          "One Adeptus Astartes unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6, adding 1 to the result if it is an Entrenched unit: on a 4+, do not remove it from play. That destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
      {
        name: "Priority Strike",
        cost: "2CP",
        category: "Battle Tactic",
        flavorText:
          "Eliminating key enemy assets is crucial to stalling then reversing the foe's momentum.",
        when: "Your Shooting phase or the Fight phase.",
        target:
          "One Adeptus Astartes Infantry or Adeptus Astartes Mounted unit from your army that has not been selected to shoot or fight this phase.",
        effect:
          "Until the end of the phase, each time a model in your unit makes an attack that targets a Character, Monster or Vehicle unit, you can reroll the Wound roll.",
      },
      {
        name: "Augmented Targeting",
        cost: "1CP",
        category: "Battle Tactic",
        flavorText:
          "Autosense targeting subroutines specially adapted for defensive fire patterns aid these warriors' aim.",
        when: "Your Shooting phase.",
        target:
          "One Adeptus Astartes unit from your army that has not been selected to shoot this phase.",
        effect:
          "Select either the [SUSTAINED HITS 1] or [LETHAL HITS] abilities. Until the end of the phase, ranged weapons equipped by models in your unit have the selected ability. If your unit is Entrenched, until the end of the phase, ranged weapons equipped by models in your unit have the [SUSTAINED HITS 1] and [LETHAL HITS] abilities instead.",
      },
      ARMOUR_OF_CONTEMPT_RULE(),
      {
        name: "Evasive Repositioning",
        cost: "1CP",
        category: "Strategic Ploy",
        flavorText:
          "Codex doctrine when conducting an aggressive defence is to swiftly take up new positions whenever the foe finds your range.",
        when: "Your opponent's Shooting phase, just after an enemy unit has shot.",
        target:
          "One Adeptus Astartes Infantry or Adeptus Astartes Mounted unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          'Your unit can make a Normal move of up to D6". If your unit is Entrenched, you can reroll the D6 to determine how far your unit can move.',
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
      "Your army can include Ultramarines units, but it cannot include any Adeptus Astartes units drawn from any other Chapter.",
    rules: [
      {
        name: "Mastered Doctrines",
        flavorText:
          "Marneus Calgar deploys the complete and nuanced wisdom of the Codex Astartes as easily and instinctively as drawing breath.",
        effect:
          "At the start of up to three of your Command phases, you can select one of the Combat Doctrines listed below. Until the start of your next Command phase, that Combat Doctrine is active and its effects apply to all Adeptus Astartes units from your army. You cannot select a Combat Doctrine you have already selected this battle, unless a friendly Marneus Calgar model is on the battlefield.\n" +
          "Devastator Doctrine - The Codex Astartes details the strategic value of overwhelming firepower. This unit is eligible to shoot in a turn in which it Advanced.\n" +
          "Tactical Doctrine - The Codex lays out strategies for seizing the initiative. This unit is eligible to shoot and declare a charge in a turn in which it Fell Back.\n" +
          "Assault Doctrine - The Codex Astartes leaves no doubt that the killing blow must be delivered with a decisive close-quarters strike. This unit is eligible to declare a charge in a turn in which it Advanced.",
      },
    ],
    enhancements: [
      {
        name: "Armour of Antoninus",
        flavorText:
          "Originally worn by a storied Captain of the Ultramarines' First Company, this artificer armour is bestowed by the Chapter Master himself upon a worthy wearer.",
        restriction: "Adeptus Astartes model only.",
        effect:
          "The bearer has a Save characteristic of 2+ and the Feel No Pain 5+ ability.",
        points: 20,
      },
      {
        name: "Oath of Macragge",
        flavorText:
          "Amongst the most solemn and binding oaths an Ultramarine can swear, it is a rare honour to enter battle with these words affixed to their armour.",
        restriction: "Adeptus Astartes model only.",
        effect:
          "Add 1 to the Attacks and Strength characteristics of the bearer's melee weapons. While the bearer is under the effects of the Assault Doctrine, add 2 to the Attacks and Strength characteristics of the bearer's melee weapons instead.",
        points: 15,
      },
      {
        name: "Student of the Codex",
        flavorText:
          "This prodigal officer has focused upon one aspect of the Codex Astartes and means to master its every aspect before moving on to the next.",
        restriction: "Adeptus Astartes model only.",
        effect:
          "At the start of your Command phase, if the bearer is on the battlefield, it can use this Enhancement. If it does, until the start of your next Command phase, the Tactical Doctrine is active for this unit (instead of any other Combat Doctrine you select to be active for your army, and even if there is no Combat Doctrine active for your army).",
        points: 20,
      },
      {
        name: "Veteran of Behemoth",
        flavorText:
          "Having battled the Tyranid swarms since their first galactic invasion, this veteran officer knows well the benefit of efficient and overwhelming firepower.",
        restriction: "Adeptus Astartes model only.",
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
        flavorText:
          "No Chapter's warriors know better the breadth - theoretical and practical - of the Codex Astartes' teachings, and how these can and should be adapted to ensure victory.",
        when: "Your Command phase.",
        target: "One Adeptus Astartes unit from your army.",
        effect:
          "Select the Devastator Doctrine, Tactical Doctrine or Assault Doctrine. Until the start of your next Command phase, that Combat Doctrine is active for your unit instead of any other Combat Doctrine that is active for your army, even if you have already selected that Combat Doctrine this battle.",
      },
      {
        name: "Tactical Foresight",
        cost: "1CP",
        category: "Epic Deed",
        flavorText:
          "With the enemy's countermeasures and responses predicted and allowed for in advance, the Ultramarines can weather their most ferocious attacks.",
        when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target:
          "One Adeptus Astartes unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "Until the end of the phase, each time an attack targets your unit, if the Strength characteristic of that attack is greater than or equal to the Toughness characteristic of that unit, subtract 1 from the Wound roll.",
      },
      {
        name: "Exemplary Vigilance",
        cost: "1CP",
        category: "Battle Tactic",
        flavorText:
          "Long have the Ultramarines guarded both Ultramar and the wider Imperium. No foe can hide from their vengeful gaze or evade the reach of their wrath.",
        when: "Your Shooting phase.",
        target:
          "One Adeptus Astartes unit from your army that has not been selected to shoot this phase.",
        effect:
          "Until the end of the phase, ranged weapons equipped by models in your unit have the [IGNORES COVER] ability. If your unit is under the effects of the Devastator Doctrine, until the end of the phase, improve the Armour Penetration characteristic of such weapons by 1 as well.",
      },
      {
        name: "Courage and Honour!",
        cost: "1CP",
        category: "Battle Tactic",
        flavorText:
          "Roaring their famed battle cry, the Ultramarines hurl themselves into the fight, striving all the harder to prevail beneath the unwavering eye of their Chapter Master.",
        when: "Fight phase.",
        target: "One Adeptus Astartes unit from your army.",
        effect:
          "Until the end of the phase, melee weapons equipped by models in your unit have the [LANCE] ability. If your unit is under the effects of the Assault Doctrine, until the end of the phase, improve the Armour Penetration characteristic of such weapons by 1 as well.",
      },
      {
        name: "Practical Tactics",
        cost: "1CP",
        category: "Strategic Ploy",
        flavorText:
          "After rapidly making a theoretical assessment of the foes' probable next moves, the Ultramarines apply practical repositioning to counter them.",
        when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target:
          'One Adeptus Astartes Infantry or Adeptus Astartes Mounted unit from your army that is not within Engagement Range of one or more enemy units and is within 8" of the enemy unit that just ended that move.',
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
      "Your army can include Iron Hands units, but it cannot include any Adeptus Astartes units drawn from any other Chapter.",
    rules: [
      {
        name: "Calculated Annihilation",
        flavorText:
          "Heavily enhanced with augmetics and the weight of many years of combat experience to aid them, the veteran warriors of Clan Company Avernii ruthlessly select and destroy their targets.",
        effect:
          "Each time a model from your army with the Oath of Moment ability makes an attack that targets your Oath of Moment target, you can reroll a Wound roll of 1.",
      },
      {
        name: "Recalculating",
        flavorText: "Caanok Var ensures every bolt shell is directed where it serves the greatest purpose.",
        effect:
          "Once per battle round, after your Oath of Moment target is destroyed, if a Caanok Var model from your army is on the battlefield, select one enemy unit visible to that model. That enemy unit becomes your Oath of Moment target until you select a new one.",
      },
    ],
    enhancements: [
      {
        name: "Spiritus Ferrum",
        flavorText:
          "This ancient augmetic empowers its bearer - and in extremis even their comrades - with the fury of the motive force.",
        restriction: "Adeptus Astartes model only.",
        effect:
          "Add 1 to the Attacks characteristic of the bearer's melee weapons. Once per battle, at the start of any phase, the bearer can use this Enhancement. If it does, until the end of the phase, add 1 to the Attacks characteristic of melee weapons equipped by all other models in the bearer's unit as well.",
        points: 25,
      },
      {
        name: "Medusan Roar",
        flavorText:
          "Mounted in the warrior's gorget, this device amplifies their battle cries into terrifying sonic shock waves.",
        restriction: "Adeptus Astartes model only. (Aura)",
        effect:
          "While an enemy unit (excluding Monsters and Vehicles) is within 6\" of the bearer, each time that unit fails a Battle-shock test, one model in that unit is destroyed (chosen by its controlling player). Once per battle, when such an enemy unit fails a Battle-shock test, you can choose for D3 models in that unit to be destroyed in this way instead.",
        points: 30,
      },
      {
        name: "Iron Laurel",
        flavorText:
          "A subcutaneous cranial honour relic, this device contains a strategic orbital upload relay.",
        restriction: "Adeptus Astartes model only.",
        effect:
          "Improve the Objective Control characteristic of the bearer by 1. Once per battle, at the start of any phase, the bearer can use this Enhancement. If it does, until the end of the phase, add 1 to the Objective Control characteristic of all other models in the bearer's unit as well.",
        points: 10,
      },
      {
        name: "Steel Font",
        flavorText:
          "An advanced autochirurgeon claimed by legend to be the product of Ferrus Manus' own labours, this device rapidly reknits sundered flesh and armour alike.",
        restriction: "Adeptus Astartes Terminator model only.",
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
        flavorText:
          "Running endless up-to-the-second cogitations of their foes' weak spots and vulnerabilities, Avernii veterans place every blow with punishing precision.",
        when: "Your Fight phase.",
        target:
          "One Adeptus Astartes Dreadnought, Terminator, Bladeguard Veteran Squad, Sternguard Veteran Squad or Vanguard Veteran Squad unit from your army that has not been selected to fight this phase.",
        effect:
          "Select either the [SUSTAINED HITS 1] or [LETHAL HITS] abilities. Until the end of the phase, melee weapons equipped by models in your unit have the selected ability.",
      },
      {
        name: "Ruthless Butchery",
        cost: "1CP",
        category: "Battle Tactic",
        flavorText:
          "The Iron Hands elite kill with machine-like relentlessness, and the tempo of slaughter only increases if they have losses of their own to avenge.",
        when: "Your Shooting phase or the Fight phase.",
        target:
          "One Adeptus Astartes Dreadnought, Terminator, Bladeguard Veteran Squad, Sternguard Veteran Squad or Vanguard Veteran Squad unit from your army that has not been selected to shoot or fight this phase.",
        effect:
          "Until the end of the phase, each time a model in your unit makes an attack, add 1 to the Hit roll. If your unit is below Starting Strength, add 1 to the Wound roll as well.",
      },
      {
        name: "Augmetic Fortitude",
        cost: "1CP",
        category: "Battle Tactic",
        flavorText:
          "Genewrought flesh reinforced by hardened augmetics and adamantine armour, the warriors of Clan Company Avernii exhibit nigh-supernatural resilience.",
        when: "Your opponent's Charge phase, just after an enemy unit ends a Charge move.",
        target:
          "One Adeptus Astartes Terminator, Bladeguard Veteran Squad, Sternguard Veteran Squad or Vanguard Veteran Squad unit from your army within Engagement Range of that enemy unit.",
        effect:
          "Until the end of the turn, each time an attack is allocated to a model in your unit, subtract 1 from the Damage characteristic of that attack.",
      },
      {
        name: "Dominator Beacon",
        cost: "1CP",
        category: "Strategic Ploy",
        flavorText:
          "These custom-built servo-skulls detach from augmetic tethers as the Iron Hands pass, settling into sentry patterns around vital strategic sites.",
        when: "Your Movement phase.",
        target:
          "One Adeptus Astartes Dreadnought, Terminator, Bladeguard Veteran Squad, Sternguard Veteran Squad or Vanguard Veteran Squad unit from your army within range of an objective marker you control.",
        effect:
          "That objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the end of a phase.",
      },
      {
        name: "Dropship Extraction",
        cost: "1CP",
        category: "Strategic Ploy",
        flavorText:
          "Terminators withdraw from the fight during a lull, board airborne transports and prepare their next assault.",
        when: "End of your opponent's Fight phase.",
        target:
          "One Adeptus Astartes Terminator unit from your army. You cannot target a unit that is within Engagement Range of one or more enemy units.",
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
      "Your army can include White Scars units, but it cannot include any Adeptus Astartes units drawn from any other Chapter.",
    rules: [
      {
        name: "Stormswift Onslaught",
        flavorText:
          "The White Scars are masters of high-speed tactics and hit-and-run warfare. They do battle on the move and from the saddle, outwitting their enemies with breakneck manoeuvres and melting away one moment only to crash home with bone-crushing force the next.",
        effect:
          "Adeptus Astartes units from your army are eligible to declare a charge in a turn in which they Advanced or Fell Back.",
      },
      {
        name: "Wrath of the First Khan",
        flavorText:
          "As swift and violent as a raging tempest, Suboden Khan drives into and through the heart of the enemy like a thrust lance.",
        effect:
          'At the end of the Fight phase, if a Suboden Khan unit from your army destroyed one or more enemy units this phase and is not within Engagement Range of one or more enemy units, that unit can make a Normal move of up to 6".',
      },
    ],
    enhancements: [
      {
        name: "Spearpoint Paragon",
        flavorText:
          "Decades of service within the White Scars First Company have helped this superlative warrior master the violent arts of high-speed combat.",
        restriction: "Adeptus Astartes model only.",
        effect:
          "Improve the Strength and Armour Penetration characteristics of the bearer's melee weapons by 1. Each time the bearer ends a Charge move, until the end of the turn, improve the Strength and Armour Penetration characteristics of the bearer's melee weapons by 2 instead.",
        points: 25,
      },
      {
        name: "Stormseers' Wisdom",
        flavorText:
          "The Chapter's Librarians have made this champion privy to omens of great threats in future wars. Armed with this knowledge, they lead their warriors to war with a boldness that some mistake for recklessness.",
        restriction: "Adeptus Astartes model only.",
        effect:
          "While the bearer is leading a unit, you can reroll Advance rolls made for that unit.",
        points: 15,
      },
      {
        name: "Hunter's Eye",
        flavorText:
          "This augmetic eye enhances the user's visual spectrum, enabling them to pinpoint heat signatures and cogitate appropriate firing solutions.",
        restriction: "Adeptus Astartes model only.",
        effect:
          "Ranged weapons equipped by models in the bearer's unit have the [SUSTAINED HITS 1] and [IGNORES COVER] abilities.",
        points: 20,
      },
      {
        name: "Chogorian Huntmaster",
        flavorText:
          "This mounted huntsman knows well the importance of manoeuvre, outflanking the enemy and ambushing unsuspecting foes from the flanks and rear, the better to land the killing blow.",
        restriction: "Adeptus Astartes Mounted model only.",
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
        flavorText:
          "The White Scars read the ebb and flow of battle with the hungry cunning of raptorial predators, reacting to the enemy's movements with exceptional rapidity.",
        when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target:
          'One Adeptus Astartes Infantry unit or Adeptus Astartes Mounted unit from your army that is within 8" of that enemy unit. You cannot target a unit that is within Engagement Range of one or more enemy units.',
        effect: 'Your unit can make a Normal move of up to 6".',
      },
      {
        name: "Spear Thrust and Sabre Swing",
        cost: "1CP",
        category: "Battle Tactic",
        flavorText:
          "Some foes can be ended with a single charge. Others require sustained savagery to fell. The White Scars are adept at both methods of fighting.",
        when: "Fight phase.",
        target:
          "One Adeptus Astartes unit from your army that has not been selected to fight this phase.",
        effect:
          "Select either the [LANCE] or [LETHAL HITS] ability. Until the end of the phase, melee weapons equipped by models in your unit have the selected ability. If it is a Mounted unit, until the end of the phase, melee weapons equipped by models in your unit have the [LANCE] and [LETHAL HITS] abilities instead.",
      },
      {
        name: "Evasive Manoeuvres",
        cost: "1CP",
        category: "Battle Tactic",
        flavorText:
          "Battle-brothers of the White Scars Chapter are born and raised in the saddle. Expert pilots and riders all, they weave through incoming fire with instinctive skill.",
        when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.",
        target:
          "One Adeptus Astartes Mounted or Adeptus Astartes Fly Vehicle unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "Until the end of the phase, each time an attack targets your unit, subtract 1 from the Wound roll.",
      },
      {
        name: "Mobile Lethality",
        cost: "1CP",
        category: "Battle Tactic",
        flavorText:
          "The White Scars fight their wars at a furious tempo, and their warriors are adept at fire-and-manoeuvre strategies.",
        when: "Your Movement phase.",
        target: "One Adeptus Astartes unit from your army.",
        effect:
          "Until the end of the turn, your unit is eligible to shoot in a turn in which it Advanced or Fell Back.",
      },
      {
        name: "Withdraw and Regroup",
        cost: "1CP",
        category: "Strategic Ploy",
        flavorText:
          "The riders and pilots sweep away as swiftly as they arrive, regrouping in preparation for their next assault.",
        when: "End of your opponent's Fight phase.",
        target:
          "One Adeptus Astartes Mounted or Adeptus Astartes Fly Vehicle unit from your army that is not within Engagement Range of one or more enemy units.",
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
      "Your army can include Salamanders units, but it cannot include any Adeptus Astartes units drawn from any other Chapter.",
    rules: [
      {
        name: "Vulkan's Quest",
        flavorText:
          "Tireless in his pursuit of the Primarch's legacy, Forgefather Vulkan He'stan annihilates any who impede his quest. Favouring swift, aggressive assaults, he and his warriors close rapidly with the enemy, destroying them at close range with ruthless efficiency.",
        effect:
          'Ranged weapons equipped by Adeptus Astartes models from your army have the [ASSAULT] ability, and each time an attack made with such a weapon targets a unit within 12", add 1 to the Strength characteristic of that attack.',
      },
      {
        name: "Seeker's Companions",
        flavorText:
          "If your army includes Vulkan He'stan, during your turn, each Infernus Squad unit from your army is eligible to do one of the following.",
        effect:
          "Start to perform an Action in a turn in which it Advanced.\nShoot in a turn in which it started to perform an Action.",
      },
    ],
    enhancements: [
      {
        name: "War-tempered Artifice",
        flavorText:
          "Having laboured long in the Chapter's forges, this warrior smith has crafted his personal armaments. Each weapon is a masterwork tool of death-dealing, wrought with care and strength, and embellished with the icons of their maker's brotherhood.",
        restriction: "Adeptus Astartes Infantry model only.",
        effect: "Add 3 to the Strength characteristic of the bearer's melee weapons.",
        points: 25,
      },
      {
        name: "Forged in Battle",
        flavorText:
          "To this Angel of Death, war is the anvil upon which their strength is wrought. Every battle is seen as a test in which they and their battle-brothers can prove themselves, and the superior craftsmanship of their weapons and armour.",
        restriction: "Adeptus Astartes model only.",
        effect:
          "While the bearer is leading a unit, once per turn, after making a Hit roll or a saving throw for a model in that unit, you can change the result of that roll to an unmodified 6.",
        points: 15,
      },
      {
        name: "Adamantine Mantle",
        flavorText:
          "This flowing cloak or finely wrought tabard is laced through with threads of braided adamantine. When combined with armour and energy fields, it has been shown time and again that these symbols of office are proof against even the very strongest attacks.",
        restriction: "Adeptus Astartes model only.",
        effect:
          "Each time an attack is allocated to the bearer, subtract 1 from the Damage characteristic of that attack. If that attack was made with a Melta or Torrent weapon, change the Damage characteristic of that attack to 1 instead.",
        points: 20,
      },
      {
        name: "Immolator",
        flavorText:
          "Steeped in the Promethean Cult, this battle-brother wields the flamer with unparalleled mastery, turning the battlefield into a burning pyre for the corpses of his foes.",
        restriction: "Adeptus Astartes model only.",
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
        flavorText:
          "Salvo after salvo of burning promethium unleashed in synchronised waves will leave almost any foe as smouldering ash.",
        when: "Your Shooting phase.",
        target:
          "One Adeptus Astartes unit from your army that has not been selected to shoot this phase.",
        effect:
          "Until the end of the phase, Torrent weapons equipped by models in your unit have the [DEVASTATING WOUNDS] ability.",
      },
      {
        name: "Crucible of Battle",
        cost: "1CP",
        category: "Battle Tactic",
        flavorText:
          "Only where the enemy can be faced eye to eye can a Space Marine be truly tested.",
        when: "Your Shooting phase or the Fight phase.",
        target:
          "One Adeptus Astartes Infantry unit from your army that has not been selected to shoot or fight this phase.",
        effect:
          'Until the end of the phase, each time a model in your unit makes an attack that targets the closest eligible target within 6", add 1 to the Wound roll.',
      },
      {
        name: "Burning Vengeance",
        cost: "1CP",
        category: "Battle Tactic",
        flavorText: "To open fire on warriors of the Salamanders is merely to invite one's own swift destruction.",
        when: "Your opponent's Shooting phase, just after an enemy unit has shot.",
        target:
          "One Adeptus Astartes Transport unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "One unit embarked within that Transport can disembark as if it were your Movement phase, and can then shoot as if it were your Shooting phase, but must target only that enemy unit when doing so, and can only do so if that enemy unit is an eligible target.",
      },
      {
        name: "Wrathful Inferno",
        cost: "1CP",
        category: "Strategic Ploy",
        flavorText:
          "The enemy has closed with your warriors. Now you have them precisely where you want them. Unleash upon them the fires of damnation.",
        when: "Your Movement phase, just after an Adeptus Astartes Infantry unit from your army Falls Back.",
        target: "That unit.",
        effect:
          "Until the end of the turn, your unit is eligible to shoot in a turn in which it Fell Back.",
      },
      {
        name: "Blazing Earth",
        cost: "1CP",
        category: "Strategic Ploy",
        flavorText:
          "When faced with an onrushing horde, the Forgefather's warriors set fire to the earth beneath their feet, impeding their advance and throwing them into confusion.",
        when: "Start of your opponent's Charge phase.",
        target:
          "One Adeptus Astartes unit from your army equipped with one or more Torrent weapons.",
        effect:
          'Select one enemy unit (excluding Monsters and Vehicles and units with the Fly keyword) within 12" of and visible to your unit. Until the end of the phase, each time that enemy unit declares a charge, subtract 2 from the Charge roll (this is not cumulative with any other negative modifiers to that Charge roll).',
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
      "Your army can include Imperial Fists units, but it cannot include any Adeptus Astartes units drawn from any other Chapter.",
    rules: [
      {
        name: "Wrath of Dorn",
        flavorText:
          "Lysander leads the elite of the Imperial Fists to where the fighting is thickest, there to bring ruin to those who would see the walls of the Imperium torn down.",
        effect:
          "Each time a model from your army with the Oath of Moment ability makes an attack that targets your Oath of Moment target, you can reroll a Wound roll of 1.\nEach time a model in a Darnath Lysander unit from your army makes an attack that targets your Oath of Moment target, you can re-roll the Wound roll.",
      },
    ],
    enhancements: [
      {
        name: "Champion of the Feast",
        flavorText:
          "A victor in the Feast of Blades, this battle-brother is a master of close-quarters fighting.",
        restriction: "Adeptus Astartes model only.",
        effect:
          "Add 1 to the Attacks characteristic of the bearer's melee weapons. Once per battle, at the start of any phase, the bearer can use this Enhancement. If it does, until the end of the phase, add 1 to the Attacks characteristic of melee weapons equipped by other models in the bearer's unit as well.",
        points: 25,
      },
      {
        name: "Disciple of Rhetoricus",
        flavorText:
          "This battle-brother is well versed in the Book of the Five Spheres, drawing upon the teachings of that ancient treatise to command with clarity and purpose.",
        restriction: "Adeptus Astartes Terminator model only.",
        effect:
          "Improve the Objective Control characteristic of the bearer by 1. Once per battle, at the start of any phase, the bearer can use this Enhancement. If it does, until the end of the phase, add 1 to the Objective Control characteristic of other models in the bearer's unit as well.",
        points: 10,
      },
      {
        name: "Indomitable Champion",
        flavorText: "Even seemingly mortal wounds will not turn a son of Dorn from his duty.",
        restriction: "Adeptus Astartes Terminator model only.",
        effect:
          "The first time the bearer is destroyed, roll one D6 at the end of the phase. On a 2+, set the bearer back up on the battlefield, as close as possible to where it was destroyed and not within Engagement Range of any enemy units, with 3 wounds remaining.",
        points: 20,
      },
      {
        name: "Malodraxian Standard",
        flavorText:
          "Crafted in the aftermath of Lysander's great victory over the Iron Warriors on Malodrax, this gilded banner inspires the Imperial Fists to shatter their foes.",
        restriction: "Adeptus Astartes Ancient model only.",
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
        flavorText:
          "The battle-brothers of the Imperial Fists 1st Company advance with merciless efficiency, eliminating all resistance and staking the Emperor's claim.",
        when: "Your Movement phase.",
        target:
          "One Adeptus Astartes Terminator, Bladeguard Veteran Squad, Sternguard Veteran Squad or Vanguard Veteran Squad unit from your army within range of an objective marker you control.",
        effect:
          "That objective marker remains under your control, even if you have no models within range of it, until your opponent controls it at the start or end of any phase.",
      },
      {
        name: "Fury of the First",
        cost: "1CP",
        category: "Battle Tactic",
        flavorText:
          "Losses only serve to stoke the fiery wrath of the Imperial Fists and increase their resolve.",
        when: "Your Shooting phase or the Fight phase.",
        target:
          "One Adeptus Astartes Terminator, Bladeguard Veteran Squad, Sternguard Veteran Squad or Vanguard Veteran Squad unit from your army that has not been selected to shoot or fight this phase.",
        effect:
          "Until the end of the phase, each time a model in your unit makes an attack, add 1 to the Hit roll. If your unit is below its Starting Strength, add 1 to the Wound roll as well.",
      },
      {
        name: "Disciplined Extermination",
        cost: "1CP",
        category: "Battle Tactic",
        flavorText:
          "Masters of bolter drill, the Imperial Fists utilise precise fire patterns to scour their enemies from hiding places and fell them in droves.",
        when: "Your Shooting phase.",
        target:
          "One Adeptus Astartes Terminator, Bladeguard Veteran Squad, Sternguard Veteran Squad or Vanguard Veteran Squad unit from your army that has not been selected to shoot this phase.",
        effect:
          "Until the end of the phase, ranged weapons equipped by models in your unit have the [IGNORES COVER] ability and improve the Armour Penetration characteristic of such weapons by 1.",
      },
      {
        name: "Obdurate Vengeance",
        cost: "1CP",
        category: "Battle Tactic",
        flavorText:
          "Even when established wisdom favours retreat, the Imperial Fists remain defiant. Stubborn to the last, they would give their lives in the name of honour and the destruction of their foes.",
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target:
          "One Adeptus Astartes Terminator, Bladeguard Veteran Squad, Sternguard Veteran Squad or Vanguard Veteran Squad unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6: on a 3+, do not remove it from play. The destroyed model can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
      {
        name: "Dropship Extraction",
        cost: "1CP",
        category: "Battle Tactic",
        flavorText:
          "Making use of a lull in fighting, Terminator squads pull back from the front line, boarding airborne transports and withdrawing to prepare their next assault.",
        when: "End of your opponent's Fight phase.",
        target:
          "One Adeptus Astartes Terminator unit from your army. You cannot target a unit that is within Engagement Range of one or more enemy units.",
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
      "Your army can include Raven Guard units, but it cannot include any Adeptus Astartes units drawn from any other Chapter.",
    rules: [
      {
        name: "Masters of Shadow",
        flavorText:
          "The Raven Guard are renowned for their uncanny ability to move unseen, cloaking themselves in darkness as they close in upon their prey.",
        effect:
          'Each time a ranged attack targets an Adeptus Astartes unit from your army, unless the attacking model is within 12", the target has the Benefit of Cover against that attack.',
      },
      {
        name: "Unparalleled Tactician",
        flavorText:
          "A master of manoeuvre warfare, Aethon Shaan orchestrates battles with absolute precision, deploying, withdrawing and redeploying his battle-brothers to pull the enemy out of formation.",
        effect:
          "Once per battle round, if an Aethon Shaan model from your army is on the battlefield, you can use the Into Darkness Stratagem for 0CP.",
      },
    ],
    enhancements: [
      {
        name: "Blackwing Shroud",
        flavorText:
          "This mechanical device contains miniaturised refraction fields and electromagnetic interference projectors that distort sensory apparatus, enabling the bearer and their unit to evade detection and infiltrate key positions.",
        restriction: "Adeptus Astartes Infantry model only.",
        effect:
          "While the bearer is leading a unit, models in that unit have the Infiltrators ability.",
        points: 25,
      },
      {
        name: "Coronal Susurrant",
        flavorText:
          "This wreath of circuitry from the Dark Age of Technology forces a whispering white noise into enemy minds and broadcasts.",
        restriction: "Phobos model only.",
        effect:
          'The bearer has the following ability: Lord of Deceit (Aura) - Once per turn, when your opponent targets a unit from their army within 12" of this model with a stratagem, you can use this ability. If you do increase the CP cost of that use of that stratagem by 1CP.',
        points: 30,
      },
      {
        name: "Umbral Raptor",
        flavorText:
          "This warrior is a solitary predator whose footsteps are all but silent and whose form is one with the shadows.",
        restriction: "Adeptus Astartes model only.",
        effect: "The bearer has the Stealth and Lone Operative abilities.",
        points: 15,
      },
      {
        name: "Hunter's Instincts",
        flavorText:
          "Those who master the Path of Ambush guide their forces to launch surprise assaults on the enemy with the precise timing of true hunters.",
        restriction: "Adeptus Astartes model only.",
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
        flavorText:
          "From darkness and obscuring cover, Raven Guard battle-brothers open fire as one, striking their unaware targets with precision fire.",
        when: "Your Shooting phase.",
        target:
          "One Adeptus Astartes Infantry unit from your army that has not been selected to shoot this phase.",
        effect:
          'Until the end of the phase, each time a model in your unit makes a ranged attack that targets an enemy unit that is more than 12" away, improve the Ballistic Skill and Armour Penetration characteristics of that attack by 1. If one or more enemy models are destroyed as a result of those attacks, select one of those destroyed models; that destroyed model\'s unit must take a Battle-shock test.',
      },
      {
        name: "Lay Low the Tyrants",
        cost: "1CP",
        category: "Battle Tactic",
        flavorText:
          "In a storm of blade thrusts and bludgeoning strikes, enemy champions and commanders are laid low, leaving their troops in leaderless disarray.",
        when: "Fight phase.",
        target:
          "One Adeptus Astartes Infantry unit from your army that has not been selected to fight this phase.",
        effect:
          "Until the end of the phase, melee weapons equipped by models in your unit have the [PRECISION] ability.",
      },
      {
        name: "Raptorial Vigilance",
        cost: "1CP",
        category: "Battle Tactic",
        flavorText:
          "The Raven Guard are swift to exploit the movements of their foes, whether to pursue their prey and complete the kill or to make use of an opportunity to fade once more from sight.",
        when: "Your opponent's Movement phase, just after an enemy unit ends a Normal, Advance or Fall Back move.",
        target:
          'One Adeptus Astartes Infantry or Adeptus Astartes Mounted unit from your army that is within 9" of the enemy unit that just ended that move. You cannot target a unit that is within Engagement Range of one or more enemy units.',
        effect:
          'Your unit can make a Normal move of up to D6", or up to 6" instead if it is a Phobos or Scout Squad unit.',
      },
      {
        name: "Feint and Thrust",
        cost: "1CP",
        category: "Strategic Ploy",
        flavorText:
          "Retreating from the fight, these warriors lure their enemies on before swiftly turning the tables and hurling themselves into their now overextended foe.",
        when: "Your Movement phase.",
        target: "One Adeptus Astartes unit from your army.",
        effect:
          "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back. If it is a Phobos or Scout Squad unit, it is also eligible to shoot and declare a charge in a turn in which it Advanced.",
      },
      {
        name: "Into Darkness",
        cost: "1CP",
        category: "Strategic Ploy",
        flavorText:
          "At the opportune moment, Raven Guard infiltration units slip away from battle, only to relocate ready to strike the foe again.",
        when: "End of your opponent's Fight phase.",
        target:
          "Up to two Phobos and/or Scout Squad units from your army, or one other Adeptus Astartes Infantry unit from your army. You cannot target a unit that is within Engagement Range of one or more enemy units.",
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
        flavorText:
          "Employing the full breadth of combined arms tactics taught by the Codex Astartes, mainstay squads hit and fade, blunting enemy attacks while acquiring auspex data to guide the targeting of their more heavily armed comrades.",
        effect:
          "Adeptus Astartes Battleline units from your army: are eligible to shoot and declare a charge in a turn in which they Advanced or Fell Back; are eligible to start to perform an Action in a turn in which they Advanced or Fell Back.\n" +
          "Each time an Adeptus Astartes Battleline unit from your army is selected to attack, after resolving those attacks, select one enemy unit hit by one or more of those attacks. Until the end of the turn, that enemy unit is auspex scanned. Each time an Adeptus Astartes model from your army makes an attack that targets an auspex scanned unit, reroll a Hit roll of 1.",
      },
    ],
    enhancements: [
      {
        name: "Eye of the Primarch",
        flavorText:
          "This master-crafted microauspex integrates with the bearer's autosenses and feeds superior targeting data to them and their squad.",
        restriction: "Adeptus Astartes model only.",
        effect:
          "Ranged weapons equipped by the bearer and Battleline models in the bearer's unit have the [PRECISION] ability.",
        points: 10,
      },
      {
        name: "Hero of the Chapter",
        flavorText:
          "A storied and inspirational exemplar of their Chapter's virtues, this war leader is an inspirational presence amongst the ranks of their battle-brothers.",
        restriction: "Adeptus Astartes model only.",
        effect: "While the bearer is leading a unit, the bearer has the Battleline keyword.",
        points: 20,
      },
      {
        name: "Blades of Valour",
        flavorText:
          "This officer and their honour guard of dedicated battle-brothers have been presented with masterwork combat blades in recognition of the selfless battle they are about to fight.",
        restriction: "Adeptus Astartes model only.",
        effect:
          "Improve the Armour Penetration characteristic of melee weapons equipped by the bearer and Battleline models in the bearer's unit by 1.",
        points: 15,
      },
      {
        name: "Bombast Omnivox",
        flavorText:
          "This remarkable technological relic is mounted within the bearer's armour gorget and facilitates code-hardened, rapid-exchange intelligence dissemination while in battle.",
        restriction: "Adeptus Astartes model only.",
        effect:
          "Each time you select the bearer's unit as the target of a Stratagem, roll one D6, adding 1 if the bearer's unit has the Battleline keyword: on a 4+, you gain 1CP.",
        points: 15,
      },
    ],
    stratagems: [
      {
        name: "Codex Discipline",
        cost: "1CP",
        category: "Battle Tactic",
        flavorText:
          "Holding to the teachings of the Codex Astartes, these warriors unleash disciplined volleys of firepower.",
        when: "Your Shooting phase or the Fight phase.",
        target:
          "One Adeptus Astartes unit from your army that has not been selected to shoot or fight this phase.",
        effect:
          "Until the end of the phase, each time a model in your unit makes an attack that targets an enemy unit, reroll a Hit roll of 1. If that target is auspex scanned, reroll a Wound roll of 1 as well.",
      },
      {
        name: "Shock Bombardment",
        cost: "1CP",
        category: "Strategic Ploy",
        flavorText:
          "An auspex-guided hail of shock charges blinds the foe's targeting systems and skews their aim.",
        when: "Your Shooting phase or the Fight phase, just after an Adeptus Astartes Battleline unit from your army finished making its attacks.",
        target: "That Adeptus Astartes Battleline unit.",
        effect:
          "When an enemy unit is auspex scanned as a result of those attacks this turn, until the start of your next turn, it is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll.",
      },
      {
        name: "Guided Disruption",
        cost: "1CP",
        category: "Strategic Ploy",
        flavorText:
          "Employing auspex data to reveal weak points in the foe's formation, the Space Marines exploit these to sow confusion and suppress their targets.",
        when: "Your Shooting phase or the Fight phase, just after an Adeptus Astartes Battleline unit from your army has finished making its attacks.",
        target: "That Adeptus Astartes Battleline unit.",
        effect:
          "When an enemy unit is auspex scanned as a result of those attacks this turn, if that enemy unit does not have the Monster or Vehicle keywords, until the start of your next turn, it is pinned. While a unit is pinned, subtract 2 from that unit's Move characteristic and subtract 2 from Charge rolls made for that unit.",
      },
      {
        name: "Angels Defiant",
        cost: "1CP",
        category: "Battle Tactic",
        flavorText:
          "All too aware of their vital role in holding the foe at bay, these battle-brothers refuse to yield to even the most grievous of wounds.",
        when: "Your opponent's Shooting phase or the Fight phase, just after an enemy unit has selected its targets.",
        target:
          "One Adeptus Astartes Battleline unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "Until the end of the phase, each time an attack targets your unit, if the Strength characteristic of that attack is greater than the Toughness characteristic of your unit, subtract 1 from the Wound roll.",
      },
      {
        name: "Light of Vengeance",
        cost: "1CP",
        category: "Battle Tactic",
        flavorText:
          "With their frailties exposed by the harsh glare of auspex analysis, the foe are easy prey for the Space Marines' vengeful onslaught.",
        when: "Your Shooting phase or the Fight phase.",
        target:
          "One Adeptus Astartes unit from your army that has not been selected to shoot or fight this phase.",
        effect:
          "Select the [LETHAL HITS] or [SUSTAINED HITS 1] ability. Until the end of the phase, weapons equipped by models in your unit have that ability while targeting an auspex scanned unit or if the bearer has the Battleline keyword.",
      },
      {
        name: "Heresy Undone",
        cost: "1CP",
        category: "Strategic Ploy",
        flavorText:
          "Tactical scans and cogitator analysis have revealed the enemy's base schemes, rendering their movements easier to anticipate and counter.",
        when: "Your Shooting phase or your Charge phase.",
        target: "One Adeptus Astartes unit (excluding Battleline units) from your army.",
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
        flavorText:
          "Through the use of teleportation, Drop Pods and gunship insertion, entire strike forces of Space Marines and even their armoured support can deploy from orbit in a matter of moments, a capability that in and of itself has won entire wars.",
        effect:
          "At the start of the Declare Battle Formations step, select a number of Adeptus Astartes units (excluding Titanic units) from your army based on the battle size, as shown below. Models in those units have the Deep Strike ability.\n" +
          "Battle Size / Number of units - Incursion: 2. Strike Force: 3. Onslaught: 4.\n" +
          "Each time an Adeptus Astartes model from your army makes an attack, if it was set up on the battlefield this turn, reroll a Wound roll of 1. If it disembarked from a Drop Pod this turn, reroll a Hit roll of 1 as well.",
      },
    ],
    enhancements: [
      {
        name: "Laurels of Thunder",
        flavorText:
          "This honour is awarded to those Space Marine officers who display greatest vigour during orbital drops.",
        restriction: "Adeptus Astartes model only.",
        effect:
          "You can reroll Charge rolls made for the bearer's unit in a turn in which it was set up on the battlefield.",
        points: 15,
      },
      {
        name: "Veteran of the Vanguard",
        flavorText:
          "Long experience leading Phobos-armoured vanguard strikes has taught this warrior many lessons about swift and stealthy attacks.",
        restriction: "Adeptus Astartes model only.",
        effect: 'Models in the bearer\'s unit have the Scouts 6" ability.',
        points: 20,
      },
      {
        name: "Orbital Uplink Reliquary",
        flavorText:
          "Though it appears a morbid trinket of faith, in truth this device contains a powerful microcogitator linked to the strategium of the orbiting strike cruiser, which helps the bearer coordinate rapid strategic redeployments.",
        restriction: "Adeptus Astartes model only.",
        effect:
          "After both players have deployed their armies, select up to three Adeptus Astartes units from your army and redeploy them. When doing so, you can set those units up in Strategic Reserves if you wish, regardless of how many units are already in Strategic Reserves.",
        points: 25,
      },
      {
        name: "Dedicated Gunship",
        flavorText:
          "Bulky and somewhat lumbering as they are, Terminator squads - or even particularly vital officers wearing Terminator plate - may be assigned a gunship for swift combat extraction and relocation mid-battle.",
        restriction: "Adeptus Astartes Terminator model only.",
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
        flavorText:
          "As the Space Marines storm forward, their gunships and fighter craft streak overhead, hammering enemy positions with hails of fire to keep the foe pinned.",
        when: "Command phase.",
        target: "One Adeptus Astartes unit from your army.",
        effect:
          "Select one enemy unit visible to and within 18\" of your unit. That enemy unit takes a Battle-shock test. When doing so, subtract 1 from that test and, if that test is failed, until the start of your next turn, that enemy unit is suppressed. While a unit is suppressed, each time a model in that unit makes an attack, subtract 1 from the Hit roll.",
        restrictions: "You cannot use this Stratagem more than once per battle round.",
      },
      {
        name: "Autosense Coordination",
        cost: "1CP",
        category: "Battle Tactic",
        flavorText:
          "By binding the datafeeds from their autosenses, these battle-brothers generate triangulated targeting solutions for close-quarters fire spreads.",
        when: "Your Shooting phase or the Fight phase.",
        target:
          "One Adeptus Astartes unit from your army that has not been selected to shoot or fight this phase.",
        effect:
          'Select the [LETHAL HITS] or [SUSTAINED HITS 1] ability. Until the end of the phase, weapons equipped by models in your unit have this ability in a turn in which they disembarked from a Drop Pod or while targeting an enemy unit within 12".',
      },
      {
        name: "Tactical Decapitation",
        cost: "1CP",
        category: "Battle Tactic",
        flavorText:
          "By rapidly eliminating localised enemy leaders, the Space Marines keep the foe off balance and hamper organised resistance to their onslaught.",
        when: "Your Shooting phase or the Fight phase.",
        target:
          "One Adeptus Astartes unit from your army that has not been selected to shoot or fight this phase.",
        effect:
          "Until the end of the phase, weapons equipped by models in your unit have the [PRECISION] ability and each time a model in your unit makes an attack that targets a Character unit, add 1 to the Hit roll.",
      },
      {
        name: "Blind Screen",
        cost: "1CP",
        category: "Strategic Ploy",
        flavorText:
          "Autolaunchers spit a precogitated spread of blind grenades to baffle organic and mechanical targeting.",
        when: "Your opponent's Shooting phase, just after an enemy unit has selected its targets.",
        target:
          "One Adeptus Astartes unit (excluding Titanic units) from your army that was selected as the target of one or more of the attacking unit's attacks and one friendly Adeptus Astartes Smoke Vehicle or Drop Pod unit within 9\" of it.",
        effect:
          "Until the end of the phase, models in your units have the Stealth ability and each time a ranged attack targets one of your units, models in that unit have the Benefit of Cover against that attack.",
      },
      {
        name: "Shock Onslaught",
        cost: "1CP",
        category: "Strategic Ploy",
        flavorText:
          "The sheer devastating momentum of a Space Marine drop assault shatters one enemy battle line after another.",
        when: "Fight phase.",
        target:
          "One Adeptus Astartes unit from your army that has not been selected to fight this phase.",
        effect:
          'Until the end of the phase, each time a model in your unit makes a Pile-in or Consolidation move, it can move up to 6" instead of up to 3".',
      },
      {
        name: "Onward for the Emperor",
        cost: "1CP",
        category: "Strategic Ploy",
        flavorText: "There is always another battle to be fought, and the Space Marines waste no time in fighting it.",
        when: "End of your opponent's Fight phase.",
        target:
          "One Adeptus Astartes Infantry unit from your army that was not set up on the battlefield this turn and one friendly Transport it is able to embark within.",
        effect:
          'If your Adeptus Astartes unit is wholly within 6" of that Transport, it can embark within it.',
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
      "Your army can include Ultramarines units, but it cannot include any Adeptus Astartes units drawn from any other Chapter.",
    rules: [
      {
        name: "Oath of Reclamation",
        flavorText:
          "The driving principle behind all that these battle-brothers do is the honouring of their oaths to drive back the darkness and reconquer the Five Hundred Worlds, one battlefield at a time.",
        effect:
          "Each time an Adeptus Astartes model from your army makes a melee attack that targets a unit within range of an objective marker, improve the Armour Penetration characteristic of that attack by 1.\n" +
          "Each time an attack targets an Adeptus Astartes unit from your army, if your unit is within range of an objective marker that you controlled at the start of the phase and if the Strength characteristic of that attack is greater than the Toughness characteristic of your unit or your unit has the Titus keyword, subtract 1 from the Wound roll.",
      },
    ],
    enhancements: [
      {
        name: "Seals of Reconquest",
        flavorText:
          "These precious seals are manufactured on Konor, and contain micro shield generators that - while swift to exhaust their charge - help to safeguard battle-brothers while they fulfil their oaths of duty.",
        restriction: "Adeptus Astartes model only.",
        effect: "Models in the bearer's unit have a 5+ invulnerable save.",
        points: 20,
      },
      {
        name: "Avenging Avatar",
        flavorText:
          "Eyes alight with determination and vengeful fury, this champion of the Chapter seems almost to cast the dread shadow of the Primarch himself across his quailing foes.",
        restriction: "Adeptus Astartes model only. (Aura)",
        effect:
          "In the Battle-shock step of your opponent's Command phase, if an enemy unit that is below its Starting Strength is within 9\" of the bearer, that enemy unit must take a Battle-shock test.",
        points: 10,
      },
      {
        name: "Scroll of Proclamation",
        flavorText:
          "Finely scribed on vellum and tightly bound in an armoured scroll case, the words of Roboute Guilliman's Consilias Imperitus Ultimar prove a constant source of inspiration that drive this warrior ever onward.",
        restriction: "Adeptus Astartes model only.",
        effect:
          "When this unit declares a charge, if an enemy unit within range of an objective is within 12\" of this unit, you can use this enhancement. If you do: this unit can re-roll that charge roll; this unit must end that charge move engaged with one or more of those enemy units.",
        points: 15,
      },
      {
        name: "Liberatum",
        flavorText:
          "Forged on Macragge by the finest artisans, this weapon's machine spirit is said to burn with a desire to see the Five Hundred Worlds ripped from the grasp of heretics and despots.",
        restriction: "Adeptus Astartes model only.",
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
        flavorText: "The sheer will of these battle-brothers to reclaim the sacred Five Hundred Worlds is overwhelming.",
        when: "End of the Command phase.",
        target: "One Adeptus Astartes unit from your army.",
        effect:
          "Until the start of the next Command phase, add 1 to the Objective Control characteristic of models in your unit.",
      },
      {
        name: "Furious Dedication",
        cost: "1CP",
        category: "Battle Tactic",
        flavorText:
          "Cold fury of purpose drives the charge of the Space Marines, their absolute dedication to their cause lending them ferocious speed and strength.",
        when: "Your Charge phase or the Fight phase.",
        target:
          "One Adeptus Astartes unit from your army that has not declared a charge or been selected to fight this phase.",
        effect:
          "Until the end of the turn, add 2 to Charge rolls made for your unit and add 1 to the Attacks characteristic of melee weapons equipped by models in your unit.",
        restrictions: "You cannot use this Stratagem more than once per turn.",
      },
      {
        name: "Fight to the End",
        cost: "1CP",
        category: "Battle Tactic",
        flavorText:
          "Those who have sworn an oath to see Ultramar reclaimed will not yield a single yard of its territories once they have seized and secured them.",
        when: "Fight phase, just after an enemy unit has selected its targets.",
        target:
          "One Adeptus Astartes unit from your army that was selected as the target of one or more of the attacking unit's attacks.",
        effect:
          "Until the end of the phase, each time a model in your unit is destroyed, if that model has not fought this phase, roll one D6: on a 4+, do not remove the destroyed model from play; it can fight after the attacking unit has finished making its attacks, and is then removed from play.",
      },
      {
        name: "Scions of Guilliman",
        cost: "1CP",
        category: "Strategic Ploy",
        flavorText:
          "The genesons of Roboute Guilliman are masters of his tenets, regardless of which Chapter they hail from.",
        when: "Your Movement phase, just after an Adeptus Astartes unit from your army ends a Fall Back move.",
        target: "That Adeptus Astartes unit.",
        effect:
          "Until the end of the turn, your unit is eligible to shoot and declare a charge in a turn in which it Fell Back.",
      },
      {
        name: "Ultramarian Destiny",
        cost: "1CP",
        category: "Strategic Ploy",
        flavorText:
          "All those Space Marines fighting to defend or to expand the Ultramarines stellar realm trust that their conquest - though it must be hard fought for - is nothing short of ordained by the Primarch's will.",
        when: "Your Movement phase.",
        target: "One Adeptus Astartes unit from your army.",
        effect:
          "Select one objective marker you control that your unit is within range of. That objective marker remains under your control until your opponent's Level of Control over that objective marker is greater than yours at the end of a phase.",
      },
      {
        name: "Marching Ever On",
        cost: "1CP",
        category: "Strategic Ploy",
        flavorText:
          "The road to the complete rebuilding of the Five Hundred Worlds will be a long and gruelling one, and those who fight their way along it cannot pause in their advance for even a moment.",
        when: "Your opponent's Movement phase, just after an enemy unit Falls Back.",
        target:
          "One Adeptus Astartes unit from your army that was within Engagement Range of that enemy unit at the start of the phase.",
        effect: 'Your unit can make a Normal move of up to D6"+1.',
      },
    ],
  },
];
