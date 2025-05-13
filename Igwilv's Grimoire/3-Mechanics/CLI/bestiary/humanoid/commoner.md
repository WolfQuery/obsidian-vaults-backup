---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/0
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
aliases: ["Commoner"]
---
# [Commoner](3-Mechanics\CLI\bestiary\humanoid/commoner.md)
*Source: Monster Manual p. 345, Lost Mine of Phandelver, The Wild Beyond the Witchlight, Keys from the Golden Vault. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

Commoners include peasants, serfs, slaves, servants, pilgrims, merchants, artisans, and hermits.

```statblock
"name": "Commoner"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "10"
"hp": !!int "4"
"hit_dice": "1d8"
"stats":
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
"speed": "30 ft."
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "0"
"actions":
- "desc": "Melee Weapon Attack: dice:1d20+2|noform|noparens|text(+2) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d4|noform|noparens|avg|text(2) (1d4) bludgeoning\
    \ damage."
  "name": "Club"
"source":
- "MM"
- "LMoP"
- "WBtW"
- "KftGV"
"image": "3-Mechanics/CLI/bestiary/humanoid/token/commoner.webp"
```
^statblock

## Environment

arctic, desert, coastal, grassland, hill, urban, forest