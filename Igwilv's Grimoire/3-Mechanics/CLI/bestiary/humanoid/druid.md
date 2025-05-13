---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
aliases: ["Druid"]
---
# [Druid](3-Mechanics\CLI\bestiary\humanoid/druid.md)
*Source: Monster Manual p. 346, The Wild Beyond the Witchlight. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*  

Druids dwell in forests and other secluded wilderness locations, where they protect the natural world from monsters and the encroachment of civilization. Some are tribal shamans who heal the sick, pray to animal spirits, and provide spiritual guidance.

```statblock
"name": "Druid"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "11"
"ac_class": "16 with [barkskin](3-Mechanics/CLI/spells/barkskin.md)"
"hp": !!int "27"
"hit_dice": "5d8 + 5"
"stats":
- !!int "10"
- !!int "12"
- !!int "13"
- !!int "12"
- !!int "15"
- !!int "11"
"speed": "30 ft."
"skillsaves":
  "Medicine": !!int "4"
  "Nature": !!int "3"
  "Perception": !!int "4"
"senses": "passive Perception 14"
"languages": "Druidic plus any two languages"
"cr": "2"
"traits":
- "desc": "The druid is a 4th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 12, dice:1d20+4|noform|noparens|text(+4) to hit with spell\
    \ attacks). It has the following druid spells prepared:\n\nCantrips (at will):\
    \ [druidcraft](3-Mechanics/CLI/spells/druidcraft.md), [produce flame](3-Mechanics/CLI/spells/produce-flame.md),\
    \ [shillelagh](3-Mechanics/CLI/spells/shillelagh.md)\n\n1st level (4 slots):\
    \ [entangle](3-Mechanics/CLI/spells/entangle.md), [longstrider](3-Mechanics/CLI/spells/longstrider.md),\
    \ [speak with animals](3-Mechanics/CLI/spells/speak-with-animals.md), [thunderwave](3-Mechanics/CLI/spells/thunderwave.md)\n\
    \n2nd level (3 slots): [animal messenger](3-Mechanics/CLI/spells/animal-messenger.md),\
    \ [barkskin](3-Mechanics/CLI/spells/barkskin.md)"
  "name": "Spellcasting"
"actions":
- "desc": "Melee Weapon Attack: dice:1d20+2|noform|noparens|text(+2) to hit (dice:1d20+4|noform|noparens|text(+4)\
    \ to hit with shillelagh), reach 5 ft., one target. Hit: dice:1d6|noform|noparens|avg|text(3)\
    \ (1d6) bludgeoning damage, dice:1d8|noform|noparens|avg|text(4) (1d8) bludgeoning\
    \ damage if wielded with two hands, or dice:1d8+2|noform|noparens|avg|text(6)\
    \ (1d8 + 2) bludgeoning damage with [shillelagh](3-Mechanics/CLI/spells/shillelagh.md)."
  "name": "Quarterstaff"
"source":
- "MM"
- "WBtW"
"image": "3-Mechanics/CLI/bestiary/humanoid/token/druid.webp"
```
^statblock

## Environment

coastal, mountain, grassland, hill, arctic, forest, swamp, underdark, desert