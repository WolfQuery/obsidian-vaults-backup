---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Giant Constrictor Snake
---
# [Giant Constrictor Snake](3-Mechanics\CLI\Compendium\bestiary\beast/giant-constrictor-snake.md)
*Source: Monster Manual p. 324, Dragon of Icespire Peak, The Wild Beyond the Witchlight. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

```statblock
"name": "Giant Constrictor Snake"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "60"
"hit_dice": "8d12 + 8"
"modifier": !!int "2"
"stats":
  - !!int "19"
  - !!int "14"
  - !!int "12"
  - !!int "1"
  - !!int "10"
  - !!int "3"
"speed": "30 ft., swim 30 ft."
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+2"
"senses": "blindsight 10 ft., passive Perception 12"
"languages": ""
"cr": "2"
"actions":
  - "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit:\
      \ 11 (2d6 + 4) piercing damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 13\
      \ (2d8 + 4) bludgeoning damage, and the target is [grappled](/3-Mechanics/CLI/Rules/conditions.md#Grappled)\
      \ (escape DC 16). Until this grapple ends, the creature is [restrained](/3-Mechanics/CLI/Rules/conditions.md#Restrained),\
      \ and the snake can't constrict another target."
    "name": "Constrict"
"source":
  - "MM"
  - "DIP"
  - "WBtW"
"image": "/3-Mechanics/CLI/Compendium/bestiary/beast/token/giant-constrictor-snake.webp"
```
^statblock

## Environment

underwater, underdark, forest, swamp, desert