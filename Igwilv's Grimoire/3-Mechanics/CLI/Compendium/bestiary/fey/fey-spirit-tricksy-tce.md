---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tce
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- Fey Spirit (Tricksy)
---
# [Fey Spirit (Tricksy)](3-Mechanics\CLI\Compendium\bestiary\fey/fey-spirit-tricksy-tce.md)
*Source: Tasha's Cauldron of Everything p. 112*  

```statblock
"name": "Fey Spirit (Tricksy) (TCE)"
"size": "Small"
"type": "fey"
"alignment": "Unaligned"
"ac_class": "12 + the level of the spell (natural armor)"
"modifier": !!int "3"
"stats":
  - !!int "13"
  - !!int "16"
  - !!int "14"
  - !!int "14"
  - !!int "11"
  - !!int "16"
"speed": "40 ft."
"condition_immunities": "[charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Sylvan, understands the languages you speak"
"actions":
  - "desc": "The fey makes a number of attacks equal to half this spell's level (rounded\
      \ down)."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: your spell attack modifier to hit, reach 5 ft.,\
      \ one target. Hit: 1d6 + 3 + the spell's level piercing damage + 1d6 force\
      \ damage."
    "name": "Shortsword"
"bonus_actions":
  - "desc": "The fey magically teleports up to 30 feet to an unoccupied space it can\
      \ see. The fey can fill a 5-foot cube within 5 feet of it with magical darkness,\
      \ which lasts until the end of its next turn."
    "name": "Fey Step"
"source":
  - "TCE"
```
^statblock