---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Flying Snake"]
---
# [Flying Snake](3-Mechanics\CLI\bestiary\beast/flying-snake.md)
*Source: Monster Manual p. 322, Keys from the Golden Vault. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

A flying snake is a brightly colored, winged serpent found in remote jungles. Tribespeople and cultists sometimes domesticate flying snakes to serve as messengers that deliver scrolls wrapped in their coils.

```statblock
"name": "Flying Snake"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "5"
"hit_dice": "2d4"
"stats":
- !!int "4"
- !!int "18"
- !!int "11"
- !!int "2"
- !!int "12"
- !!int "5"
"speed": "30 ft., fly 60 ft., swim 30 ft."
"senses": "blindsight 10 ft., passive Perception 11"
"languages": ""
"cr": "1/8"
"traits":
- "desc": "The snake doesn't provoke opportunity attacks when it flies out of an enemy's\
    \ reach."
  "name": "Flyby"
"actions":
- "desc": "Melee Weapon Attack: dice:1d20+6|noform|noparens|text(+6) to hit, reach\
    \ 5 ft., one target. Hit: 1 piercing damage plus dice:3d4|noform|noparens|avg|text(7)\
    \ (3d4) poison damage."
  "name": "Bite"
"source":
- "MM"
- "KftGV"
"image": "3-Mechanics/CLI/bestiary/beast/token/flying-snake.webp"
```
^statblock

## Environment

grassland, forest, urban, desert