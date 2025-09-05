---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tce
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Undead Spirit (Putrid)
---
# [Undead Spirit (Putrid)](3-Mechanics\CLI\Compendium\bestiary\undead/undead-spirit-putrid-tce.md)
*Source: Tasha's Cauldron of Everything p. 114*  

```statblock
"name": "Undead Spirit (Putrid) (TCE)"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac_class": "11 + the level of the spell (natural armor)"
"modifier": !!int "3"
"stats":
  - !!int "12"
  - !!int "16"
  - !!int "15"
  - !!int "4"
  - !!int "10"
  - !!int "9"
"speed": "30 ft."
"damage_immunities": "necrotic, poison"
"condition_immunities": "[exhaustion](/3-Mechanics/CLI/Rules/conditions.md#Exhaustion),\
  \ [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened), [paralyzed](/3-Mechanics/CLI/Rules/conditions.md#Paralyzed),\
  \ [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages you speak"
"traits":
  - "desc": "Any creature, other than you, that starts its turn within 5 feet of the\
      \ spirit must succeed on a Constitution saving throw against your spell save\
      \ DC or be [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned) until the\
      \ start of its next turn."
    "name": "Festering Aura"
"actions":
  - "desc": "The spirit makes a number of attacks equal to half this spell's level\
      \ (rounded down)."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: your spell attack modifier to hit, reach 5 ft.,\
      \ one target. Hit: 1d6 + 3 + the spell's level slashing damage. If the target\
      \ is [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned), it must succeed\
      \ on a Constitution saving throw against your spell save DC or be [paralyzed](/3-Mechanics/CLI/Rules/conditions.md#Paralyzed)\
      \ until the end of its next turn."
    "name": "Rotting Claw"
"source":
  - "TCE"
```
^statblock