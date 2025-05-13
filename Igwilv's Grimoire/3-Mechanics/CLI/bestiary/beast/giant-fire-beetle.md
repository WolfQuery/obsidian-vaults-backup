---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/0
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Giant Fire Beetle"]
---
# [Giant Fire Beetle](3-Mechanics\CLI\bestiary\beast/giant-fire-beetle.md)
*Source: Monster Manual p. 325. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

A giant fire beetle is a nocturnal creature that takes its name from a pair of glowing glands that give off light. Miners and adventurers prize these creatures, for a giant fire beetle's glands continue to shed light for `dice:1d6|noform|noparens|avg` (`1d6`) days after the beetle dies. Giant fire beetles are most commonly found underground and in dark forests.

```statblock
"name": "Giant Fire Beetle"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "4"
"hit_dice": "1d6 + 1"
"stats":
- !!int "8"
- !!int "10"
- !!int "12"
- !!int "1"
- !!int "7"
- !!int "3"
"speed": "30 ft."
"senses": "blindsight 30 ft., passive Perception 8"
"languages": ""
"cr": "0"
"traits":
- "desc": "The beetle sheds bright light in a 10-foot radius and dim light for an\
    \ additional 10 ft.."
  "name": "Illumination"
"actions":
- "desc": "Melee Weapon Attack: dice:1d20+1|noform|noparens|text(+1) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d6-1|noform|noparens|avg|text(2) (1d6 - 1)\
    \ slashing damage."
  "name": "Bite"
"source":
- "MM"
"image": "3-Mechanics/CLI/bestiary/beast/token/giant-fire-beetle.webp"
```
^statblock

## Environment

underdark