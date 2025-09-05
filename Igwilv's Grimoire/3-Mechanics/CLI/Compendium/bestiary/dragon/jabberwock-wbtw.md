---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/13
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/dragon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Jabberwock
---
# [Jabberwock](3-Mechanics\CLI\Compendium\bestiary\dragon/jabberwock-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 236*  

A jabberwock is a solitary, temperamental predator that haunts pristine forests and ancient ruins. Accurate descriptions of jabberwocks are difficult to come by, because the rare survivors of an encounter with one retain only a confused impression of its parts and not a sense of the whole. Pieced-together accounts describe it as a sinewy, dragon-like creature that can walk on its hind legs as easily as it travels on all four. Its eyes can emit fiery beams.

Once a jabberwock has chosen its target, it concentrates its attacks on that target until the victim is killed (and devoured), until the jabberwock is killed, or until the target escapes using teleportation magic or other means.

If a jabberwock is slain, another one appears `dice:3d8|noform|noparens|avg` (`3d8`) years later, materializing within a thousand miles of where the old one perished. No immature jabberwock has ever been sighted, and the creature does not appear to age.

```statblock
"name": "Jabberwock (WBtW)"
"size": "Huge"
"type": "dragon"
"alignment": "typically  Chaotic Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "115"
"hit_dice": "10d12 + 50"
"modifier": !!int "1"
"stats":
  - !!int "20"
  - !!int "12"
  - !!int "20"
  - !!int "4"
  - !!int "7"
  - !!int "11"
"speed": "30 ft., climb 30 ft., fly 60 ft., swim 30 ft."
"saves":
  - "strength": !!int "10"
  - "dexterity": !!int "6"
  - "constitution": !!int "10"
  - "intelligence": !!int "2"
  - "wisdom": !!int "3"
  - "charisma": !!int "5"
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+8"
"damage_vulnerabilities": "slashing from a vorpal sword"
"damage_immunities": "poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed),\
  \ [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened), [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned)"
"senses": "truesight 120 ft., passive Perception 18"
"languages": ""
"cr": "13"
"traits":
  - "desc": "The jabberwock burbles to itself unless it is [incapacitated](/3-Mechanics/CLI/Rules/conditions.md#Incapacitated).\
      \ Any creature that starts its turn within 30 feet of the jabberwock and is\
      \ able to hear its burbling must make a DC 18 Charisma saving throw. On a failed\
      \ saving throw, the creature can't take reactions until the start of its next\
      \ turn, and it rolls a d4 to determine what it does during its current turn:\n\
      \n- 1-2. The creature does nothing.  \n- 3. The creature does nothing\
      \ except use all its movement to move in a random direction.  \n- 4. The\
      \ creature either makes one melee attack against a random creature it can see\
      \ or does nothing if no visible creature is within its reach.  "
    "name": "Confusing Burble"
  - "desc": "If the jabberwock fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "The jabberwock regains 10 hit points at the start of its turn. If the\
      \ jabberwock takes slashing damage, this trait doesn't function at the start\
      \ of its next turn. The jabberwock dies only if it starts its turn with 0 hit\
      \ points and doesn't regenerate."
    "name": "Regeneration"
  - "desc": "The jabberwock can unerringly track any creature it has wounded in the\
      \ last 24 hours, and it knows the distance and direction to its quarry as long\
      \ as the two of them are on the same plane of existence."
    "name": "Uncanny Tracker"
"actions":
  - "desc": "The jabberwock makes two Rend attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 21\
      \ (3d10 + 5) slashing damage."
    "name": "Rend"
  - "desc": "Melee Weapon Attack: +10 to hit, reach 15 ft., one target. Hit: 10\
      \ (1d10 + 5) bludgeoning damage."
    "name": "Tail"
  - "desc": "Unless it is [blinded](/3-Mechanics/CLI/Rules/conditions.md#Blinded),\
      \ the jabberwock emits a 120-foot-long, 5-foot-wide line of fire from its eyes.\
      \ Each creature in that line must make a DC 18 Dexterity saving throw, taking\
      \ 31 (7d8) fire damage on a failed save, or half as much damage on a successful\
      \ one."
    "name": "Fiery Gaze (Recharge 5-6)"
"legendary_actions":
  - "desc": "The jabberwock makes one Tail attack."
    "name": "Tail Attack"
  - "desc": "The jabberwock makes one Rend attack."
    "name": "Rend Attack (2 Actions)"
  - "desc": "The jabberwock beats its wings. Each creature within 10 feet of the jabberwock\
      \ must succeed on a DC 18 Dexterity saving throw or take 8 (1d6 + 5) bludgeoning\
      \ damage and be knocked [prone](/3-Mechanics/CLI/Rules/conditions.md#Prone)."
    "name": "Wing Attack (3 Actions)"
"source":
  - "WBtW"
"image": "/3-Mechanics/CLI/Compendium/bestiary/dragon/token/jabberwock-wbtw.webp"
```
^statblock