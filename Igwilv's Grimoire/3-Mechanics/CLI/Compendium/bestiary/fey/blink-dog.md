---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- Blink Dog
---
# [Blink Dog](3-Mechanics\CLI\Compendium\bestiary\fey/blink-dog.md)
*Source: Monster Manual p. 318, Waterdeep: Dungeon of the Mad Mage, Tasha's Cauldron of Everything, The Wild Beyond the Witchlight. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

A blink dog takes its name from its ability to blink in and out of existence, a talent it uses to aid its attacks and to avoid harm. Blink dogs harbor a long-standing hatred for displacer beasts and attack them on sight.

```statblock
"name": "Blink Dog"
"size": "Medium"
"type": "fey"
"alignment": "Lawful Good"
"ac": !!int "13"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"modifier": !!int "3"
"stats":
  - !!int "12"
  - !!int "17"
  - !!int "12"
  - !!int "10"
  - !!int "13"
  - !!int "11"
"speed": "40 ft."
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](/3-Mechanics/CLI/Rules/skills.md#Stealth)"
    "desc": "+5"
"senses": "passive Perception 13"
"languages": "Blink Dog, understands Sylvan but can't speak it"
"cr": "1/4"
"traits":
  - "desc": "The dog has advantage on Wisdom ([Perception](/3-Mechanics/CLI/Rules/skills.md#Perception))\
      \ checks that rely on hearing or smell."
    "name": "Keen Hearing and Smell"
"actions":
  - "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
      \ + 1) piercing damage."
    "name": "Bite"
  - "desc": "The dog magically teleports, along with any equipment it is wearing or\
      \ carrying, up to 40 feet to an unoccupied space it can see. Before or after\
      \ teleporting, the dog can make one bite attack."
    "name": "Teleport (Recharge 4-6)"
"source":
  - "MM"
  - "WDMM"
  - "TCE"
  - "WBtW"
"image": "/3-Mechanics/CLI/Compendium/bestiary/fey/token/blink-dog.webp"
```
^statblock

## Environment

forest