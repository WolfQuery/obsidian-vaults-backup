---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct
statblock: inline
aliases: ["Pentadrone (Rogue)"]
---
# [Pentadrone (Rogue)](3-Mechanics\CLI\bestiary\construct/pentadrone-rogue.md)
*Source: Monster Manual p. 226, Keys from the Golden Vault*  

```statblock
"name": "Pentadrone (Rogue)"
"size": "Large"
"type": "construct"
"alignment": "Any alignment"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "32"
"hit_dice": "5d10 + 5"
"stats":
- !!int "15"
- !!int "14"
- !!int "12"
- !!int "10"
- !!int "10"
- !!int "13"
"speed": "40 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "truesight 120 ft., passive Perception 14"
"languages": "Modron"
"cr": "2"
"traits":
- "desc": "If the pentadrone dies, its body disintegrates into dust, leaving behind\
    \ its weapons and anything else it was carrying."
  "name": "Disintegration"
"actions":
- "desc": "The pentadrone makes five arm attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice:1d20+4|noform|noparens|text(+4) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d6+2|noform|noparens|avg|text(5) (1d6 + 2)\
    \ bludgeoning damage."
  "name": "Arm"
- "desc": "The pentadrone exhales a 30-foot cone of gas. Each creature in that area\
    \ must succeed on a DC 11 Constitution saving throw or be [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Paralysis Gas (Recharge 5-6)"
"source":
- "MM"
- "KftGV"
```
^statblock