---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdmm
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/ooze
statblock: inline
statblock-link: "#^statblock"
aliases:
- Huge Gray Ooze
---
# [Huge Gray Ooze](3-Mechanics\CLI\Compendium\bestiary\ooze/huge-gray-ooze-wdmm.md)
*Source: Waterdeep: Dungeon of the Mad Mage p. 243*  

```statblock
"name": "Huge Gray Ooze (WDMM)"
"size": "Huge"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "8"
"hp": !!int "152"
"hit_dice": "16d12 + 48"
"modifier": !!int "-2"
"stats":
  - !!int "18"
  - !!int "6"
  - !!int "16"
  - !!int "1"
  - !!int "6"
  - !!int "2"
"speed": "10 ft., climb 10 ft."
"skillsaves":
  - "name": "[Stealth](/3-Mechanics/CLI/Rules/skills.md#Stealth)"
    "desc": "+2"
"damage_resistances": "acid, cold, fire"
"condition_immunities": "[blinded](/3-Mechanics/CLI/Rules/conditions.md#Blinded),\
  \ [charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed), [deafened](/3-Mechanics/CLI/Rules/conditions.md#Deafened),\
  \ [exhaustion](/3-Mechanics/CLI/Rules/conditions.md#Exhaustion), [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened),\
  \ [prone](/3-Mechanics/CLI/Rules/conditions.md#Prone)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 8"
"languages": ""
"cr": "8"
"traits":
  - "desc": "The ooze can move through a space as narrow as 1 inch wide without squeezing."
    "name": "Amorphous"
  - "desc": "Any nonmagical weapon made of metal that hits the ooze corrodes. After\
      \ dealing damage, the weapon takes a permanent and cumulative −1 penalty to\
      \ damage rolls. If its penalty drops to −5, the weapon is destroyed. Nonmagical\
      \ ammunition made of metal that hits the ooze is destroyed after dealing damage.\n\
      \nThe ooze can eat through 2-inch-thick, nonmagical metal in 1 round."
    "name": "Corrode Metal"
  - "desc": "While the ooze remains motionless, it is indistinguishable from an oily\
      \ pool or wet rock."
    "name": "False Appearance"
"actions":
  - "desc": "As an action, it can make two attacks with its pseudopods."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 21\
      \ (6d6) acid damage, or 42 (12d6) acid damage while the ooze is enlarged. If\
      \ the target is wearing nonmagical metal armor, its armor is partly corroded\
      \ and takes a permanent and cumulative −1 penalty to the AC it offers. The armor\
      \ is destroyed if the penalty reduces its AC to 10."
    "name": "Pseudopod"
  - "desc": "For 1 minute, the ooze magically increases in size. While enlarged, the\
      \ ooze is Gargantuan, doubles its damage dice with its pseudopod attack, and\
      \ makes Strength checks and Strength saving throws with advantage."
    "name": "Enlarge (Recharges after a Short or Long Rest)"
  - "desc": "The ooze magically turns [invisible](/3-Mechanics/CLI/Rules/conditions.md#Invisible)\
      \ for up to 1 hour until it attacks, it uses its Enlarge, or its [concentration](/3-Mechanics/CLI/Rules/conditions.md#Concentration)\
      \ is broken (as if [concentrating](/3-Mechanics/CLI/Rules/conditions.md#Concentration)\
      \ on a spell)."
    "name": "Invisibility (Recharges after a Short or Long Rest)"
"source":
  - "WDMM"
"image": "/3-Mechanics/CLI/Compendium/bestiary/ooze/token/huge-gray-ooze-wdmm.webp"
```
^statblock