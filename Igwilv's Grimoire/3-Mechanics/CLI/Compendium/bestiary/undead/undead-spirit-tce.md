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
- Undead Spirit
---
# [Undead Spirit](3-Mechanics\CLI\Compendium\bestiary\undead/undead-spirit-tce.md)
*Source: Tasha's Cauldron of Everything p. 114*  

```statblock
"name": "Undead Spirit (TCE)"
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
"speed": "30 ft., fly 40 ft. (ghostly only; hover)"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[exhaustion](/3-Mechanics/CLI/Rules/conditions.md#Exhaustion),\
  \ [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened), [paralyzed](/3-Mechanics/CLI/Rules/conditions.md#Paralyzed),\
  \ [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages you speak"
"traits":
  - "desc": "The spirit can move through other creatures and objects as if they were\
      \ difficult terrain. If it ends its turn inside an object, it is shunted to\
      \ the nearest unoccupied space and takes d10 force damage for every 5 feet traveled."
    "name": "Incorporeal Passage (Ghostly Only)"
  - "desc": "Any creature, other than you, that starts its turn within 5 feet of the\
      \ spirit must succeed on a Constitution saving throw against your spell save\
      \ DC or be [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned) until the\
      \ start of its next turn."
    "name": "Festering Aura (Putrid Only)"
"actions":
  - "desc": "The spirit makes a number of attacks equal to half this spell's level\
      \ (rounded down)."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: your spell attack modifier to hit, reach 5 ft.,\
      \ one creature. Hit: 1d8 + 3 + the spell's level necrotic damage, and the\
      \ creature must succeed on a Wisdom saving throw against your spell save DC\
      \ or be [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened) of the\
      \ undead until the end of the target's next turn."
    "name": "Deathly Touch (Ghostly Only)"
  - "desc": "Ranged Spell Attack: your spell attack modifier to hit, range 150 ft.,\
      \ one target. Hit: 2d4 + 3 + the spell's level necrotic damage."
    "name": "Grave Bolt (Skeletal Only)"
  - "desc": "Melee Weapon Attack: your spell attack modifier to hit, reach 5 ft.,\
      \ one target. Hit: 1d6 + 3 + the spell's level slashing damage. If the target\
      \ is [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned), it must succeed\
      \ on a Constitution saving throw against your spell save DC or be [paralyzed](/3-Mechanics/CLI/Rules/conditions.md#Paralyzed)\
      \ until the end of its next turn."
    "name": "Rotting Claw (Putrid Only)"
"source":
  - "TCE"
"image": "/3-Mechanics/CLI/Compendium/bestiary/undead/token/undead-spirit-tce.webp"
```
^statblock