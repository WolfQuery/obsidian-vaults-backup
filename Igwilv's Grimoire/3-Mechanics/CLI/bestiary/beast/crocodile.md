---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Crocodile"]
---
# [Crocodile](3-Mechanics\CLI\bestiary\beast/crocodile.md)
*Source: Monster Manual p. 320, The Wild Beyond the Witchlight. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

```statblock
"name": "Crocodile"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "19"
"hit_dice": "3d10 + 3"
"stats":
- !!int "15"
- !!int "10"
- !!int "13"
- !!int "2"
- !!int "10"
- !!int "5"
"speed": "20 ft., swim 30 ft."
"skillsaves":
  "Stealth": !!int "2"
"senses": "passive Perception 10"
"languages": ""
"cr": "1/2"
"traits":
- "desc": "The crocodile can hold its breath for 15 minutes."
  "name": "Hold Breath"
"actions":
- "desc": "Melee Weapon Attack: dice:1d20+4|noform|noparens|text(+4) to hit, reach\
    \ 5 ft., one creature. Hit: dice:1d10+2|noform|noparens|avg|text(7) (1d10\
    \ + 2) piercing damage, and the target is [grappled](3-Mechanics/CLI/rules/conditions.md#Grappled)\
    \ (escape DC 12). Until this grapple ends, the target is [restrained](3-Mechanics/CLI/rules/conditions.md#Restrained),\
    \ and the crocodile can't bite another target"
  "name": "Bite"
"source":
- "MM"
- "WBtW"
"image": "3-Mechanics/CLI/bestiary/beast/token/crocodile.webp"
```
^statblock

## Environment

swamp, urban