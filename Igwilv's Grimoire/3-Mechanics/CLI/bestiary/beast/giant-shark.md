---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Giant Shark"]
---
# [Giant Shark](3-Mechanics\CLI\bestiary\beast/giant-shark.md)
*Source: Monster Manual p. 328. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

A giant shark is 30 feet long and normally found in deep oceans. Utterly fearless, it preys on anything that crosses its path, including whales and ships.

```statblock
"name": "Giant Shark"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "126"
"hit_dice": "11d12 + 55"
"stats":
- !!int "23"
- !!int "11"
- !!int "21"
- !!int "1"
- !!int "10"
- !!int "5"
"speed": "swim 50 ft."
"skillsaves":
  "Perception": !!int "3"
"senses": "blindsight 60 ft., passive Perception 13"
"languages": ""
"cr": "5"
"traits":
- "desc": "The shark has advantage on melee attack rolls against any creature that\
    \ doesn't have all its hit points."
  "name": "Blood Frenzy"
- "desc": "The shark can breathe only underwater."
  "name": "Water Breathing"
"actions":
- "desc": "Melee Weapon Attack: dice:1d20+9|noform|noparens|text(+9) to hit, reach\
    \ 5 ft., one target. Hit: dice:3d10+6|noform|noparens|avg|text(22) (3d10\
    \ + 6) piercing damage."
  "name": "Bite"
"source":
- "MM"
"image": "3-Mechanics/CLI/bestiary/beast/token/giant-shark.webp"
```
^statblock

## Environment

underwater