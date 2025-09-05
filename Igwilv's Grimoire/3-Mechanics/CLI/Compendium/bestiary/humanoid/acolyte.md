---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
statblock-link: "#^statblock"
aliases:
- Acolyte
---
# [Acolyte](3-Mechanics\CLI\Compendium\bestiary\humanoid/acolyte.md)
*Source: Monster Manual p. 342, Waterdeep: Dragon Heist. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

Acolytes are junior members of a clergy, usually answerable to a priest. They perform a variety of functions in a temple and are granted minor spellcasting power by their deities.

```statblock
"name": "Acolyte"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "10"
"hp": !!int "9"
"hit_dice": "2d8"
"modifier": !!int "0"
"stats":
  - !!int "10"
  - !!int "10"
  - !!int "10"
  - !!int "10"
  - !!int "14"
  - !!int "11"
"speed": "30 ft."
"skillsaves":
  - "name": "[Medicine](/3-Mechanics/CLI/Rules/skills.md#Medicine)"
    "desc": "+4"
  - "name": "[Religion](/3-Mechanics/CLI/Rules/skills.md#Religion)"
    "desc": "+2"
"senses": "passive Perception 12"
"languages": "any one language (usually Common)"
"cr": "1/4"
"traits":
  - "desc": "The acolyte is a 1st-level spellcaster. Its spellcasting ability is Wisdom\
      \ (spell save DC 12, +4 to hit with spell attacks). The acolyte has following\
      \ cleric spells prepared:\n\nCantrips (at will): [light](/3-Mechanics/CLI/Compendium/spells/light.md),\
      \ [sacred flame](/3-Mechanics/CLI/Compendium/spells/sacred-flame.md), [thaumaturgy](/3-Mechanics/CLI/Compendium/spells/thaumaturgy.md)\n\
      \n1st level (3 slots): [bless](/3-Mechanics/CLI/Compendium/spells/bless.md),\
      \ [cure wounds](/3-Mechanics/CLI/Compendium/spells/cure-wounds.md), [sanctuary](/3-Mechanics/CLI/Compendium/spells/sanctuary.md)"
    "name": "Spellcasting"
"actions":
  - "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (d4)\
      \ bludgeoning damage."
    "name": "Club"
"source":
  - "MM"
  - "WDH"
"image": "/3-Mechanics/CLI/Compendium/bestiary/humanoid/token/acolyte.webp"
```
^statblock

## Environment

urban