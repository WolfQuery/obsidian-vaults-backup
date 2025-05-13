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
aliases: ["Panther"]
---
# [Panther](3-Mechanics\CLI\bestiary\beast/panther.md)
*Source: Monster Manual p. 333. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

```statblock
"name": "Panther"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "13"
"hit_dice": "3d8"
"stats":
- !!int "14"
- !!int "15"
- !!int "10"
- !!int "3"
- !!int "14"
- !!int "7"
"speed": "50 ft., climb 40 ft."
"skillsaves":
  "Stealth": !!int "6"
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": ""
"cr": "1/4"
"traits":
- "desc": "The panther has advantage on Wisdom ([Perception](3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on smell."
  "name": "Keen Smell"
- "desc": "If the panther moves at least 20 feet straight toward a creature and then\
    \ hits it with a claw attack on the same turn, that target must succeed on a DC\
    \ 12 Strength saving throw or be knocked [prone](3-Mechanics/CLI/rules/conditions.md#Prone).\
    \ If the target is [prone](3-Mechanics/CLI/rules/conditions.md#Prone), the panther\
    \ can make one bite attack against it as a bonus action."
  "name": "Pounce"
"actions":
- "desc": "Melee Weapon Attack: dice:1d20+4|noform|noparens|text(+4) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d6+2|noform|noparens|avg|text(5) (1d6 + 2)\
    \ piercing damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice:1d20+4|noform|noparens|text(+4) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d4+2|noform|noparens|avg|text(4) (1d4 + 2)\
    \ slashing damage."
  "name": "Claw"
"source":
- "MM"
"image": "3-Mechanics/CLI/bestiary/beast/token/panther.webp"
```
^statblock

## Environment

grassland, forest, hill