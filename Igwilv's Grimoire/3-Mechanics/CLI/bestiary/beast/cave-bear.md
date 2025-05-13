---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Cave Bear"]
---
# [Cave Bear](3-Mechanics\CLI\bestiary\beast/cave-bear.md)
*Source: Monster Manual p. 334*  

```statblock
"name": "Cave Bear"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "42"
"hit_dice": "5d10 + 15"
"stats":
- !!int "20"
- !!int "10"
- !!int "16"
- !!int "2"
- !!int "13"
- !!int "7"
"speed": "40 ft., swim 30 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "2"
"traits":
- "desc": "The bear has advantage on Wisdom ([Perception](3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
"actions":
- "desc": "The bear makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice:1d20+7|noform|noparens|text(+7) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d8+5|noform|noparens|avg|text(9) (1d8 + 5)\
    \ piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice:1d20+7|noform|noparens|text(+7) to hit, reach\
    \ 5 ft., one target. Hit: dice:2d6+5|noform|noparens|avg|text(12) (2d6 +\
    \ 5) slashing damage."
  "name": "Claws"
"source":
- "MM"
"image": "3-Mechanics/CLI/bestiary/beast/token/cave-bear.webp"
```
^statblock

## Environment

forest, underdark