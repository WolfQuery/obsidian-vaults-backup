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
aliases: ["Acolyte"]
---
# [Acolyte](3-Mechanics\CLI\bestiary\humanoid/acolyte.md)
*Source: Monster Manual p. 342. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

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
"stats":
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "10"
- !!int "14"
- !!int "11"
"speed": "30 ft."
"skillsaves":
  "Medicine": !!int "4"
  "Religion": !!int "2"
"senses": "passive Perception 12"
"languages": "any one language (usually Common)"
"cr": "1/4"
"traits":
- "desc": "The acolyte is a 1st-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 12, dice:1d20+4|noform|noparens|text(+4) to hit with spell\
    \ attacks). The acolyte has following cleric spells prepared:\n\nCantrips (at\
    \ will): [light](3-Mechanics/CLI/spells/light.md), [sacred flame](3-Mechanics/CLI/spells/sacred-flame.md),\
    \ [thaumaturgy](3-Mechanics/CLI/spells/thaumaturgy.md)\n\n1st level (3 slots):\
    \ [bless](3-Mechanics/CLI/spells/bless.md), [cure wounds](3-Mechanics/CLI/spells/cure-wounds.md),\
    \ [sanctuary](3-Mechanics/CLI/spells/sanctuary.md)"
  "name": "Spellcasting"
"actions":
- "desc": "Melee Weapon Attack: dice:1d20+2|noform|noparens|text(+2) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d4|noform|noparens|avg|text(2) (1d4) bludgeoning\
    \ damage."
  "name": "Club"
"source":
- "MM"
"image": "3-Mechanics/CLI/bestiary/humanoid/token/acolyte.webp"
```
^statblock

## Environment

urban