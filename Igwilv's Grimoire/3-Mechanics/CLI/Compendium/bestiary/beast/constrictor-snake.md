---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Constrictor Snake
---
# [Constrictor Snake](3-Mechanics\CLI\Compendium\bestiary\beast/constrictor-snake.md)
*Source: Monster Manual p. 320, Waterdeep: Dungeon of the Mad Mage. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

```statblock
"name": "Constrictor Snake"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "13"
"hit_dice": "2d10 + 2"
"modifier": !!int "2"
"stats":
  - !!int "15"
  - !!int "14"
  - !!int "12"
  - !!int "1"
  - !!int "10"
  - !!int "3"
"speed": "30 ft., swim 30 ft."
"senses": "blindsight 10 ft., passive Perception 10"
"languages": ""
"cr": "1/4"
"actions":
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5\
      \ (1d6 + 2) piercing damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 6\
      \ (1d8 + 2) bludgeoning damage, and the target is [grappled](/3-Mechanics/CLI/Rules/conditions.md#Grappled)\
      \ (escape DC 14). Until this grapple ends, the creature is [restrained](/3-Mechanics/CLI/Rules/conditions.md#Restrained),\
      \ and the snake can't constrict another target."
    "name": "Constrict"
"source":
  - "MM"
  - "WDMM"
"image": "/3-Mechanics/CLI/Compendium/bestiary/beast/token/constrictor-snake.webp"
```
^statblock

## Environment

underwater, forest, swamp, desert