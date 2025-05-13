---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Giant Hyena"]
---
# [Giant Hyena](3-Mechanics\CLI\bestiary\beast/giant-hyena.md)
*Source: Monster Manual p. 326. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

```statblock
"name": "Giant Hyena"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"stats":
- !!int "16"
- !!int "14"
- !!int "14"
- !!int "2"
- !!int "12"
- !!int "7"
"speed": "50 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "passive Perception 13"
"languages": ""
"cr": "1"
"traits":
- "desc": "When the hyena reduces a creature to 0 hit points with a melee attack on\
    \ its turn, the hyena can take a bonus action to move up to half its speed and\
    \ make a bite attack."
  "name": "Rampage"
"actions":
- "desc": "Melee Weapon Attack: dice:1d20+5|noform|noparens|text(+5) to hit, reach\
    \ 5 ft., one target. Hit: dice:2d6+3|noform|noparens|avg|text(10) (2d6 +\
    \ 3) piercing damage."
  "name": "Bite"
"source":
- "MM"
"image": "3-Mechanics/CLI/bestiary/beast/token/giant-hyena.webp"
```
^statblock

## Environment

grassland, forest, hill, desert