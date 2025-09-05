---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tce
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Bestial Spirit (Land)
---
# [Bestial Spirit (Land)](3-Mechanics\CLI\Compendium\bestiary\beast/bestial-spirit-land-tce.md)
*Source: Tasha's Cauldron of Everything p. 109*  

```statblock
"name": "Bestial Spirit (Land) (TCE)"
"size": "Small"
"type": "beast"
"alignment": "Unaligned"
"ac_class": "11 + the level of the spell (natural armor)"
"modifier": !!int "0"
"stats":
  - !!int "18"
  - !!int "11"
  - !!int "16"
  - !!int "4"
  - !!int "14"
  - !!int "5"
"speed": "30 ft., climb 30 ft."
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "understands the languages you speak"
"traits":
  - "desc": "The beast has advantage on an attack roll against a creature if at least\
      \ one of the beast's allies is within 5 feet of the creature and the ally isn't\
      \ [incapacitated](/3-Mechanics/CLI/Rules/conditions.md#Incapacitated)."
    "name": "Pack Tactics"
"actions":
  - "desc": "The beast makes a number of attacks equal to half this spell's level\
      \ (rounded down)."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: your spell attack modifier to hit, reach 5 ft.,\
      \ one target. Hit: 1d8 + 4 + the spell's level piercing damage."
    "name": "Maul"
"source":
  - "TCE"
```
^statblock