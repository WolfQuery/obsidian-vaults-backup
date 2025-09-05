---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Swarm of Wasps
---
# [Swarm of Wasps](3-Mechanics\CLI\Compendium\bestiary\beast/swarm-of-wasps.md)
*Source: Monster Manual p. 338, Waterdeep: Dungeon of the Mad Mage, The Wild Beyond the Witchlight. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*  

> [!note] The Nature of Swarms
> 
> The swarms presented here aren't ordinary or benign assemblies of little creatures. They form as a result of some sinister or unwholesome influence. A vampire can summon swarms of bats and rats from the darkest corners of the night, while the very presence of a mummy lord can cause scarab beetles to boil up from the sand-filled depths of its tomb. A hag might have the power to turn swarms of ravens against her enemies, while a [yuan-ti abomination](/3-Mechanics/CLI/Compendium/bestiary/monstrosity/yuan-ti-abomination.md) might have [swarms of poisonous snakes](/3-Mechanics/CLI/Compendium/bestiary/beast/swarm-of-poisonous-snakes.md) slithering in its wake. Even druids can't charm these swarms, and their aggressiveness is borderline unnatural.
^the-nature-of-swarms

```statblock
"name": "Swarm of Wasps"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "22"
"hit_dice": "5d8"
"modifier": !!int "1"
"stats":
  - !!int "3"
  - !!int "13"
  - !!int "10"
  - !!int "1"
  - !!int "7"
  - !!int "1"
"speed": "5 ft., fly 30 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "[charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed),\
  \ [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened), [grappled](/3-Mechanics/CLI/Rules/conditions.md#Grappled),\
  \ [paralyzed](/3-Mechanics/CLI/Rules/conditions.md#Paralyzed), [petrified](/3-Mechanics/CLI/Rules/conditions.md#Petrified),\
  \ [prone](/3-Mechanics/CLI/Rules/conditions.md#Prone), [restrained](/3-Mechanics/CLI/Rules/conditions.md#Restrained),\
  \ [stunned](/3-Mechanics/CLI/Rules/conditions.md#Stunned)"
"senses": "blindsight 10 ft., passive Perception 8"
"languages": ""
"cr": "1/2"
"traits":
  - "desc": "The swarm can occupy another creature's space and vice versa, and the\
      \ swarm can move through any opening large enough for a Tiny insect. The swarm\
      \ can't regain hit points or gain temporary hit points."
    "name": "Swarm"
"actions":
  - "desc": "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's\
      \ space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the\
      \ swarm has half of its hit points or fewer."
    "name": "Bites"
"source":
  - "MM"
  - "WDMM"
  - "WBtW"
"image": "/3-Mechanics/CLI/Compendium/bestiary/beast/token/swarm-of-wasps.webp"
```
^statblock

## Environment

underdark, grassland, forest, swamp, hill, urban, desert