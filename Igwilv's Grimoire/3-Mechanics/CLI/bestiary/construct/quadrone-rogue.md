---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct
statblock: inline
aliases: ["Quadrone (Rogue)"]
---
# [Quadrone (Rogue)](3-Mechanics\CLI\bestiary\construct/quadrone-rogue.md)
*Source: Monster Manual p. 226, Keys from the Golden Vault*  

```statblock
"name": "Quadrone (Rogue)"
"size": "Medium"
"type": "construct"
"alignment": "Any alignment"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "12"
- !!int "14"
- !!int "12"
- !!int "10"
- !!int "10"
- !!int "11"
"speed": "30 ft., fly 30 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "truesight 120 ft., passive Perception 12"
"languages": "Modron"
"cr": "1"
"traits":
- "desc": "If the quadrone dies, its body disintegrates into dust, leaving behind\
    \ its weapons and anything else it was carrying."
  "name": "Disintegration"
"actions":
- "desc": "The quadrone makes two fist attacks or four shortbow attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice:1d20+3|noform|noparens|text(+3) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d4+1|noform|noparens|avg|text(3) (1d4 + 1)\
    \ bludgeoning damage."
  "name": "Fist"
- "desc": "Ranged Weapon Attack: dice:1d20+4|noform|noparens|text(+4) to hit,\
    \ range 80/320 ft., one target. Hit: dice:1d6+2|noform|noparens|avg|text(5)\
    \ (1d6 + 2) piercing damage."
  "name": "Shortbow"
"source":
- "MM"
- "KftGV"
```
^statblock