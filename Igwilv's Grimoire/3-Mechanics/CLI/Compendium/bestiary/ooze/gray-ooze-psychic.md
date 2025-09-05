---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/ooze
statblock: inline
statblock-link: "#^statblock"
aliases:
- Gray Ooze (Psychic)
---
# [Gray Ooze (Psychic)](3-Mechanics\CLI\Compendium\bestiary\ooze/gray-ooze-psychic.md)
*Source: Monster Manual p. 243, Waterdeep: Dragon Heist, Keys from the Golden Vault. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*  

```statblock
"name": "Gray Ooze (Psychic)"
"size": "Medium"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "8"
"hp": !!int "22"
"hit_dice": "3d8 + 9"
"modifier": !!int "-2"
"stats":
  - !!int "12"
  - !!int "6"
  - !!int "16"
  - !!int "6"
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
"cr": "1/2"
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
  - "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
      \ + 1) bludgeoning damage plus 7 (2d6) acid damage, and if the target is wearing\
      \ nonmagical metal armor, its armor is partly corroded and takes a permanent\
      \ and cumulative −1 penalty to the AC it offers. The armor is destroyed if the\
      \ penalty reduces its AC to 10."
    "name": "Pseudopod"
  - "desc": "The ooze targets one creature that it can sense within 60 feet of it.\
      \ The target must make a DC 10 Intelligence saving throw, taking 10 (3d6) psychic\
      \ damage on a failed save, or half as much damage on a successful one."
    "name": "Psychic Crush (Recharge 5-6)"
"source":
  - "MM"
  - "WDH"
  - "KftGV"
```
^statblock

## Environment

underdark