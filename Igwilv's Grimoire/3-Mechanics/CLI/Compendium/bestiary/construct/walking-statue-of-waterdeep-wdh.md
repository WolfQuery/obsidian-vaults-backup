---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdh
- ttrpg-cli/monster/cr/18
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Walking Statue of Waterdeep
---
# [Walking Statue of Waterdeep](3-Mechanics\CLI\Compendium\bestiary\construct/walking-statue-of-waterdeep-wdh.md)
*Source: Waterdeep: Dragon Heist p. 219*  

Scattered throughout Waterdeep are eight enormous statues that can defend the city in times of great peril. Because they are so destructive, the walking statues are used only to fend off armies and seemingly insurmountable foes.

Each statue has a name and a unique appearance (see "The Walking Statues"), but in terms of statistics they are similar. The statue known as the Swordmaiden is too broken to be animated, and only the wielder of the Blackstaff (see appendix A) can animate the other seven.

## Landmarks

Over the years, Waterdavians have built structures around and on top of several of the statues, believing them to be little more than landmarks at this point. In their inanimate state, the statues pose little danger-but any structures attached to a walking statue are destroyed the first time it animates.

## Constructed Nature

A walking statue doesn't require air, food, drink, or sleep.

```statblock
"name": "Walking Statue of Waterdeep (WDH)"
"size": "Gargantuan"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "314"
"hit_dice": "17d20 + 136"
"modifier": !!int "-1"
"stats":
  - !!int "30"
  - !!int "8"
  - !!int "27"
  - !!int "1"
  - !!int "10"
  - !!int "1"
"speed": "60 ft."
"saves":
  - "constitution": !!int "14"
"damage_immunities": "cold; fire; poison; psychic; bludgeoning, piercing, slashing\
  \ from nonmagical attacks not made with adamantine weapons"
"condition_immunities": "[charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed),\
  \ [exhaustion](/3-Mechanics/CLI/Rules/conditions.md#Exhaustion), [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened),\
  \ [paralyzed](/3-Mechanics/CLI/Rules/conditions.md#Paralyzed), [petrified](/3-Mechanics/CLI/Rules/conditions.md#Petrified),\
  \ [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned), [stunned](/3-Mechanics/CLI/Rules/conditions.md#Stunned)"
"senses": "truesight 120 ft., passive Perception 10"
"languages": ""
"cr": "18"
"traits":
  - "desc": "When the statue drops to 0 hit points, it crumbles and is destroyed.\
      \ Any creature on the ground within 30 feet of the crumbling statue must make\
      \ a DC 22 Dexterity saving throw, taking 22 (4d10) bludgeoning damage on a failed\
      \ save, or half as much damage on a successful one."
    "name": "Crumbling Colossus"
  - "desc": "The statue is immune to any spell or effect that would alter its form."
    "name": "Immutable Form"
  - "desc": "The statue has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "The statue deals double damage to objects and structures."
    "name": "Siege Monster"
"actions":
  - "desc": "The statue makes two melee attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +16 to hit, reach 5 ft., one target. Hit: 29\
      \ (3d12 + 10) bludgeoning damage."
    "name": "Slam"
  - "desc": "Ranged Weapon Attack: +16 to hit, range 200/800 ft., one target. Hit:\
      \ 43 (6d10 + 10) bludgeoning damage."
    "name": "Hurled Stone"
"source":
  - "WDH"
"image": "/3-Mechanics/CLI/Compendium/bestiary/construct/token/walking-statue-of-waterdeep-wdh.webp"
```
^statblock