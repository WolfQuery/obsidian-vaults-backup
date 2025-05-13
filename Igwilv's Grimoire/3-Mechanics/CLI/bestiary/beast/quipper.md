---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/0
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Quipper"]
---
# [Quipper](3-Mechanics\CLI\bestiary\beast/quipper.md)
*Source: Monster Manual p. 335. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

A quipper is a carnivorous fish with sharp teeth.

Quippers can adapt to any aquatic environment, including cold subterranean lakes. They frequently gather in swarms; the statistics for a swarm of quippers appear later in this appendix.

```statblock
"name": "Quipper"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "1"
"hit_dice": "1d4 - 1"
"stats":
- !!int "2"
- !!int "16"
- !!int "9"
- !!int "1"
- !!int "7"
- !!int "2"
"speed": "swim 40 ft."
"senses": "darkvision 60 ft., passive Perception 8"
"languages": ""
"cr": "0"
"traits":
- "desc": "The quipper has advantage on melee attack rolls against any creature that\
    \ doesn't have all its hit points."
  "name": "Blood Frenzy"
- "desc": "The quipper can breathe only underwater."
  "name": "Water Breathing"
"actions":
- "desc": "Melee Weapon Attack: dice:1d20+5|noform|noparens|text(+5) to hit, reach\
    \ 5 ft., one target. Hit: 1 piercing damage."
  "name": "Bite"
"source":
- "MM"
"image": "3-Mechanics/CLI/bestiary/beast/token/quipper.webp"
```
^statblock

## Environment

underwater