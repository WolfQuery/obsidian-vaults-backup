---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tce
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Undead Spirit (Skeletal)"]
---
# [Undead Spirit (Skeletal)](3-Mechanics\CLI\bestiary\undead/undead-spirit-skeletal-tce.md)
*Source: Tasha's Cauldron of Everything p. 114*  

```statblock
"name": "Undead Spirit (Skeletal) (TCE)"
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
"speed": "30 ft."
"damage_immunities": "necrotic, poison"
"condition_immunities": "[exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages you speak"
"actions":
- "desc": "The spirit makes a number of attacks equal to half this spell's level (rounded\
    \ down)."
  "name": "Multiattack"
- "desc": "Ranged Spell Attack: YourSpellAttack to hit, range 150 ft., one target.\
    \ Hit: 2d4 + 3 + the spell's level necrotic damage."
  "name": "Grave Bolt"
"source":
- "TCE"
```
^statblock