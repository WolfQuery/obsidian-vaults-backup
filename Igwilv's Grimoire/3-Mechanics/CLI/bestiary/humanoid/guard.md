---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
aliases: ["Guard"]
---
# [Guard](3-Mechanics\CLI\bestiary\humanoid/guard.md)
*Source: Monster Manual p. 347, Keys from the Golden Vault. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

Guards include members of a city watch, sentries in a citadel or fortified town, and the bodyguards of merchants and nobles.

```statblock
"name": "Guard"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "16"
"ac_class": "[chain shirt](3-Mechanics/CLI/items/chain-shirt.md), [shield](3-Mechanics/CLI/items/shield.md)"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "13"
- !!int "12"
- !!int "12"
- !!int "10"
- !!int "11"
- !!int "10"
"speed": "30 ft."
"skillsaves":
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": "any one language (usually Common)"
"cr": "1/8"
"actions":
- "desc": "Melee or Ranged Weapon Attack: dice:1d20+3|noform|noparens|text(+3)\
    \ to hit, reach 5 ft. or range 20/60 ft., one target. Hit: dice:1d6+1|noform|noparens|avg|text(4)\
    \ (1d6 + 1) piercing damage, or dice:1d8+1|noform|noparens|avg|text(5) (1d8\
    \ + 1) piercing damage if used with two hands to make a melee attack."
  "name": "Spear"
"source":
- "MM"
- "KftGV"
"image": "3-Mechanics/CLI/bestiary/humanoid/token/guard.webp"
```
^statblock

## Environment

coastal, mountain, grassland, hill, urban, forest, desert