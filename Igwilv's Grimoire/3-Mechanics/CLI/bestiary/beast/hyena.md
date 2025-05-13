---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/0
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Hyena"]
---
# [Hyena](3-Mechanics\CLI\bestiary\beast/hyena.md)
*Source: Monster Manual p. 331. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

```statblock
"name": "Hyena"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "5"
"hit_dice": "1d8 + 1"
"stats":
- !!int "11"
- !!int "13"
- !!int "12"
- !!int "2"
- !!int "12"
- !!int "5"
"speed": "50 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "0"
"traits":
- "desc": "The hyena has advantage on an attack roll against a creature if at least\
    \ one of the hyena's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](3-Mechanics/CLI/rules/conditions.md#Incapacitated)."
  "name": "Pack Tactics"
"actions":
- "desc": "Melee Weapon Attack: dice:1d20+2|noform|noparens|text(+2) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d6|noform|noparens|avg|text(3) (1d6) piercing\
    \ damage."
  "name": "Bite"
"source":
- "MM"
"image": "3-Mechanics/CLI/bestiary/beast/token/hyena.webp"
```
^statblock

## Environment

grassland, forest, hill, desert