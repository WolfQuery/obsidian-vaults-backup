---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Swarm of Poisonous Snakes"]
---
# [Swarm of Poisonous Snakes](3-Mechanics\CLI\bestiary\beast/swarm-of-poisonous-snakes.md)
*Source: Monster Manual p. 338. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

> [!note] The Nature of Swarms
> 
> The swarms presented here aren't ordinary or benign assemblies of little creatures. They form as a result of some sinister or unwholesome influence. A vampire can summon swarms of bats and rats from the darkest corners of the night, while the very presence of a mummy lord can cause scarab beetles to boil up from the sand-filled depths of its tomb. A hag might have the power to turn swarms of ravens against her enemies, while a [yuan-ti abomination](3-Mechanics/CLI/bestiary/monstrosity/yuan-ti-abomination.md) might have [swarms of poisonous snakes](3-Mechanics/CLI/bestiary/beast/swarm-of-poisonous-snakes.md) slithering in its wake. Even druids can't charm these swarms, and their aggressiveness is borderline unnatural.
^the-nature-of-swarms

```statblock
"name": "Swarm of Poisonous Snakes"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"hp": !!int "36"
"hit_dice": "8d8"
"stats":
- !!int "8"
- !!int "18"
- !!int "11"
- !!int "1"
- !!int "10"
- !!int "3"
"speed": "30 ft., swim 30 ft."
"damage_resistances": "bludgeoning, piercing, slashing"
"condition_immunities": "[charmed](3-Mechanics/CLI/rules/conditions.md#Charmed), [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [grappled](3-Mechanics/CLI/rules/conditions.md#Grappled), [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](3-Mechanics/CLI/rules/conditions.md#Petrified), [prone](3-Mechanics/CLI/rules/conditions.md#Prone),\
  \ [restrained](3-Mechanics/CLI/rules/conditions.md#Restrained), [stunned](3-Mechanics/CLI/rules/conditions.md#Stunned)"
"senses": "blindsight 10 ft., passive Perception 10"
"languages": ""
"cr": "2"
"traits":
- "desc": "The swarm can occupy another creature's space and vice versa, and the swarm\
    \ can move through any opening large enough for a Tiny snake. The swarm can't\
    \ regain hit points or gain temporary hit points."
  "name": "Swarm"
"actions":
- "desc": "Melee Weapon Attack: dice:1d20+6|noform|noparens|text(+6) to hit, reach\
    \ 0 ft., one creature in the swarm's space. Hit: dice:2d6|noform|noparens|avg|text(7)\
    \ (2d6) piercing damage, or dice:1d6|noform|noparens|avg|text(3) (1d6) piercing\
    \ damage if the swarm has half of its hit points or fewer. The target must make\
    \ a DC 10 Constitution saving throw, taking dice:4d6|noform|noparens|avg|text(14)\
    \ (4d6) poison damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Bites"
"source":
- "MM"
"image": "3-Mechanics/CLI/bestiary/beast/token/swarm-of-poisonous-snakes.webp"
```
^statblock

## Environment

forest, swamp