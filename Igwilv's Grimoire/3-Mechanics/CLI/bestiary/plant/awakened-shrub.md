---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/0
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/plant
statblock: inline
aliases: ["Awakened Shrub"]
---
# [Awakened Shrub](3-Mechanics\CLI\bestiary\plant/awakened-shrub.md)
*Source: Monster Manual p. 317, The Wild Beyond the Witchlight. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

An awakened shrub is an ordinary shrub given sentience and mobility by the [awaken](3-Mechanics/CLI/spells/awaken.md) spell or similar magic.

```statblock
"name": "Awakened Shrub"
"size": "Small"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "9"
"hp": !!int "10"
"hit_dice": "3d6"
"stats":
- !!int "3"
- !!int "8"
- !!int "11"
- !!int "10"
- !!int "10"
- !!int "6"
"speed": "20 ft."
"damage_vulnerabilities": "fire"
"damage_resistances": "piercing"
"senses": "passive Perception 10"
"languages": "one language known by its creator"
"cr": "0"
"traits":
- "desc": "While the shrub remains motionless, it is indistinguishable from a normal\
    \ shrub."
  "name": "False Appearance"
"actions":
- "desc": "Melee Weapon Attack: dice:1d20+1|noform|noparens|text(+1) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d4-1|noform|noparens|avg|text(1) (1d4 - 1)\
    \ slashing damage."
  "name": "Rake"
"source":
- "MM"
- "WBtW"
"image": "3-Mechanics/CLI/bestiary/plant/token/awakened-shrub.webp"
```
^statblock

## Environment

forest