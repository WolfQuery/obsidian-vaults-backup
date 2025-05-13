---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tce
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Undead Spirit (Ghostly)"]
---
# [Undead Spirit (Ghostly)](3-Mechanics\CLI\bestiary\undead/undead-spirit-ghostly-tce.md)
*Source: Tasha's Cauldron of Everything p. 114*  

```statblock
"name": "Undead Spirit (Ghostly) (TCE)"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac_class": "11 + the level of the spell (natural armor)"
"stats":
- !!int "12"
- !!int "16"
- !!int "15"
- !!int "4"
- !!int "10"
- !!int "9"
"speed": "30 ft., fly 40 ft. (hover)"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages you speak"
"traits":
- "desc": "The spirit can move through other creatures and objects as if they were\
    \ difficult terrain. If it ends its turn inside an object, it is shunted to the\
    \ nearest unoccupied space and takes dice:1d10|noform|noparens|avg (1d10)\
    \ force damage for every 5 feet traveled."
  "name": "Incorporeal Passage"
"actions":
- "desc": "The spirit makes a number of attacks equal to half this spell's level (rounded\
    \ down)."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: YourSpellAttack to hit, reach 5 ft., one creature.\
    \ Hit: 1d8 + 3 + the spell's level necrotic damage, and the creature must\
    \ succeed on a Wisdom saving throw against your spell save DC or be [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened)\
    \ of the undead until the end of the target's next turn."
  "name": "Deathly Touch"
"source":
- "TCE"
```
^statblock