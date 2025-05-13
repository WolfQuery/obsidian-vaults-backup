---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Giant Goat"]
---
# [Giant Goat](3-Mechanics\CLI\bestiary\beast/giant-goat.md)
*Source: Monster Manual p. 326, The Wild Beyond the Witchlight. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

```statblock
"name": "Giant Goat"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"ac_class": "natural armor"
"hp": !!int "19"
"hit_dice": "3d10 + 3"
"stats":
- !!int "17"
- !!int "11"
- !!int "12"
- !!int "3"
- !!int "12"
- !!int "6"
"speed": "40 ft."
"senses": "passive Perception 11"
"languages": ""
"cr": "1/2"
"traits":
- "desc": "If the goat moves at least 20 feet straight toward a target and then hits\
    \ it with a ram attack on the same turn, the target takes an extra dice:2d4|noform|noparens|avg|text(5)\
    \ (2d4) bludgeoning damage. If the target is a creature, it must succeed on\
    \ a DC 13 Strength saving throw or be knocked [prone](3-Mechanics/CLI/rules/conditions.md#Prone)."
  "name": "Charge"
- "desc": "The goat has advantage on Strength and Dexterity saving throws made against\
    \ effects that would knock it [prone](3-Mechanics/CLI/rules/conditions.md#Prone)."
  "name": "Sure-Footed"
"actions":
- "desc": "Melee Weapon Attack: dice:1d20+5|noform|noparens|text(+5) to hit, reach\
    \ 5 ft., one target. Hit: dice:2d4+3|noform|noparens|avg|text(8) (2d4 + 3)\
    \ bludgeoning damage."
  "name": "Ram"
"source":
- "MM"
- "WBtW"
"image": "3-Mechanics/CLI/bestiary/beast/token/giant-goat.webp"
```
^statblock

## Environment

mountain, grassland, hill