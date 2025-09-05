---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Swarm of Ravens
---
# [Swarm of Ravens](3-Mechanics\CLI\Compendium\bestiary\beast/swarm-of-ravens.md)
*Source: Monster Manual p. 339, Dragon of Icespire Peak, Tasha's Cauldron of Everything. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

> [!note] The Nature of Swarms
> 
> The swarms presented here aren't ordinary or benign assemblies of little creatures. They form as a result of some sinister or unwholesome influence. A vampire can summon swarms of bats and rats from the darkest corners of the night, while the very presence of a mummy lord can cause scarab beetles to boil up from the sand-filled depths of its tomb. A hag might have the power to turn swarms of ravens against her enemies, while a [yuan-ti abomination](/3-Mechanics/CLI/Compendium/bestiary/monstrosity/yuan-ti-abomination.md) might have [swarms of poisonous snakes](/3-Mechanics/CLI/Compendium/bestiary/beast/swarm-of-poisonous-snakes.md) slithering in its wake. Even druids can't charm these swarms, and their aggressiveness is borderline unnatural.
^the-nature-of-swarms

```statblock
"name": "Swarm of Ravens"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "24"
"hit_dice": "7d8 - 7"
"modifier": !!int "2"
"stats":
  - !!int "6"
  - !!int "14"
  - !!int "8"
  - !!int "3"
  - !!int "12"
  - !!int "6"
"speed": "10 ft., fly 50 ft."
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+5"
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "[charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed),\
  \ [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened), [grappled](/3-Mechanics/CLI/Rules/conditions.md#Grappled),\
  \ [paralyzed](/3-Mechanics/CLI/Rules/conditions.md#Paralyzed), [petrified](/3-Mechanics/CLI/Rules/conditions.md#Petrified),\
  \ [prone](/3-Mechanics/CLI/Rules/conditions.md#Prone), [restrained](/3-Mechanics/CLI/Rules/conditions.md#Restrained),\
  \ [stunned](/3-Mechanics/CLI/Rules/conditions.md#Stunned)"
"senses": "passive Perception 15"
"languages": ""
"cr": "1/4"
"traits":
  - "desc": "The swarm can occupy another creature's space and vice versa, and the\
      \ swarm can move through any opening large enough for a Tiny raven. The swarm\
      \ can't regain hit points or gain temporary hit points."
    "name": "Swarm"
"actions":
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target in the swarm's\
      \ space. Hit: 7 (2d6) piercing damage, or 3 (d6) piercing damage if the swarm\
      \ has half of its hit points or fewer."
    "name": "Beaks"
"source":
  - "MM"
  - "DIP"
  - "TCE"
"image": "/3-Mechanics/CLI/Compendium/bestiary/beast/token/swarm-of-ravens.webp"
```
^statblock

## Environment

forest, swamp, hill, urban