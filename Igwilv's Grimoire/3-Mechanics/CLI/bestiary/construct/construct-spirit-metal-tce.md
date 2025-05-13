---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tce
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct
statblock: inline
aliases: ["Construct Spirit (Metal)"]
---
# [Construct Spirit (Metal)](3-Mechanics\CLI\bestiary\construct/construct-spirit-metal-tce.md)
*Source: Tasha's Cauldron of Everything p. 111*  

```statblock
"name": "Construct Spirit (Metal) (TCE)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac_class": "13 + the level of the spell (natural armor)"
"stats":
- !!int "18"
- !!int "10"
- !!int "18"
- !!int "14"
- !!int "11"
- !!int "5"
"speed": "30 ft."
"damage_resistances": "poison"
"condition_immunities": "[charmed](3-Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened), [incapacitated](3-Mechanics/CLI/rules/conditions.md#Incapacitated),\
  \ [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](3-Mechanics/CLI/rules/conditions.md#Petrified),\
  \ [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages you speak"
"traits":
- "desc": "A creature that touches the construct or hits it with a melee attack while\
    \ within 5 feet of it takes dice:1d10|noform|noparens|avg (1d10) fire damage."
  "name": "Heated Body"
"actions":
- "desc": "The construct makes a number of attacks equal to half this spell's level\
    \ (rounded down)."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: YourSpellAttack to hit, reach 5 ft., one target.\
    \ Hit: 1d8 + 4 + the spell's level bludgeoning damage."
  "name": "Slam"
"source":
- "TCE"
```
^statblock