---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Wolf"]
---
# [Wolf](3-Mechanics\CLI\bestiary\beast/wolf.md)
*Source: Monster Manual p. 341, Lost Mine of Phandelver. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

```statblock
"name": "Wolf"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "12"
- !!int "15"
- !!int "12"
- !!int "3"
- !!int "12"
- !!int "6"
"speed": "40 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "1/4"
"traits":
- "desc": "The wolf has advantage on Wisdom ([Perception](3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on hearing or smell."
  "name": "Keen Hearing and Smell"
- "desc": "The wolf has advantage on an attack roll against a creature if at least\
    \ one of the wolf's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](3-Mechanics/CLI/rules/conditions.md#Incapacitated)."
  "name": "Pack Tactics"
"actions":
- "desc": "Melee Weapon Attack: dice:1d20+4|noform|noparens|text(+4) to hit, reach\
    \ 5 ft., one target. Hit: dice:2d4+2|noform|noparens|avg|text(7) (2d4 + 2)\
    \ piercing damage. If the target is a creature, it must succeed on a DC 11 Strength\
    \ saving throw or be knocked [prone](3-Mechanics/CLI/rules/conditions.md#Prone)."
  "name": "Bite"
"source":
- "MM"
- "LMoP"
"image": "3-Mechanics/CLI/bestiary/beast/token/wolf.webp"
```
^statblock

## Environment

grassland, forest, hill