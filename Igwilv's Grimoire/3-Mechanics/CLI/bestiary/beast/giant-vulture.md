---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Giant Vulture"]
---
# [Giant Vulture](3-Mechanics\CLI\bestiary\beast/giant-vulture.md)
*Source: Monster Manual p. 329. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

A giant vulture has advanced intelligence and a malevolent bent. Unlike its smaller kin, it will attack a wounded creature to hasten its end. Giant vultures have been known to haunt a thirsty, starving creature for days to enjoy its suffering.

```statblock
"name": "Giant Vulture"
"size": "Large"
"type": "beast"
"alignment": "Neutral Evil"
"ac": !!int "10"
"hp": !!int "22"
"hit_dice": "3d10 + 6"
"stats":
- !!int "15"
- !!int "10"
- !!int "15"
- !!int "6"
- !!int "12"
- !!int "7"
"speed": "10 ft., fly 60 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": "understands Common but can't speak"
"cr": "1"
"traits":
- "desc": "The vulture has advantage on Wisdom ([Perception](3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on sight or smell."
  "name": "Keen Sight and Smell"
- "desc": "The vulture has advantage on an attack roll against a creature if at least\
    \ one of the vulture's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](3-Mechanics/CLI/rules/conditions.md#Incapacitated)."
  "name": "Pack Tactics"
"actions":
- "desc": "The vulture makes two attacks: one with its beak and one with its talons."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice:1d20+4|noform|noparens|text(+4) to hit, reach\
    \ 5 ft., one target. Hit: dice:2d4+2|noform|noparens|avg|text(7) (2d4 + 2)\
    \ piercing damage."
  "name": "Beak"
- "desc": "Melee Weapon Attack: dice:1d20+4|noform|noparens|text(+4) to hit, reach\
    \ 5 ft., one target. Hit: dice:2d6+2|noform|noparens|avg|text(9) (2d6 + 2)\
    \ slashing damage."
  "name": "Talons"
"source":
- "MM"
"image": "3-Mechanics/CLI/bestiary/beast/token/giant-vulture.webp"
```
^statblock

## Environment

grassland, desert