---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdh
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Swarm of Books
---
# [Swarm of Books](3-Mechanics\CLI\Compendium\bestiary\construct/swarm-of-books-wdh.md)
*Source: Waterdeep: Dragon Heist p. 156*  

Animated books which form a swarm when disturbed

```statblock
"name": "Swarm of Books (WDH)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "22"
"hit_dice": "5d8"
"modifier": !!int "2"
"stats":
  - !!int "5"
  - !!int "15"
  - !!int "10"
  - !!int "2"
  - !!int "12"
  - !!int "4"
"speed": "0 ft., fly 30 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "[charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed),\
  \ [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened), [paralyzed](/3-Mechanics/CLI/Rules/conditions.md#Paralyzed),\
  \ [petrified](/3-Mechanics/CLI/Rules/conditions.md#Petrified), [prone](/3-Mechanics/CLI/Rules/conditions.md#Prone),\
  \ [restrained](/3-Mechanics/CLI/Rules/conditions.md#Restrained), [stunned](/3-Mechanics/CLI/Rules/conditions.md#Stunned),\
  \ [grappled](/3-Mechanics/CLI/Rules/conditions.md#Grappled)"
"senses": "blindsight 60 ft., passive Perception 11"
"languages": ""
"cr": "1/4"
"traits":
  - "desc": "The swarm can occupy another creature's space and vice versa, and the\
      \ swarm can move through any opening large enough for a Tiny book. The swarm\
      \ can't regain hit points or gain temporary hit points."
    "name": "Swarm"
"actions":
  - "desc": "Melee Weapon Attack: +4 to hit, reach 0 ft., one creature in the swarm's\
      \ space. Hit: 5 (2d4) bludgeoning damage, or 2 (d4) bludgeoning damage if\
      \ the swarm has half of its hit points or fewer."
    "name": "Slam"
"source":
  - "WDH"
"image": "/3-Mechanics/CLI/Compendium/bestiary/construct/token/swarm-of-books-wdh.webp"
```
^statblock