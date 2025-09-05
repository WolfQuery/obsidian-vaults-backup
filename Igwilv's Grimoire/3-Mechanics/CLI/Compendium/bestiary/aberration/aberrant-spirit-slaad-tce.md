---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tce
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Aberrant Spirit (Slaad)
---
# [Aberrant Spirit (Slaad)](3-Mechanics\CLI\Compendium\bestiary\aberration/aberrant-spirit-slaad-tce.md)
*Source: Tasha's Cauldron of Everything p. 109*  

```statblock
"name": "Aberrant Spirit (Slaad) (TCE)"
"size": "Medium"
"type": "aberration"
"alignment": "Unaligned"
"ac_class": "11 + the level of the spell (natural armor)"
"modifier": !!int "0"
"stats":
  - !!int "16"
  - !!int "10"
  - !!int "15"
  - !!int "16"
  - !!int "10"
  - !!int "6"
"speed": "30 ft."
"damage_immunities": "psychic"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Deep Speech, understands the languages you speak"
"traits":
  - "desc": "The aberration regains 5 hit points at the start of its turn if it has\
      \ at least 1 hit point."
    "name": "Regeneration"
"actions":
  - "desc": "The aberration makes a number of attacks equal to half this spell's level\
      \ (rounded down)."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: your spell attack modifier to hit, reach 5 ft.,\
      \ one target. Hit: 1d10 + 3 + the spell's level slashing damage. If the target\
      \ is a creature, it can't regain hit points until the start of the aberration's\
      \ next turn."
    "name": "Claws"
"source":
  - "TCE"
```
^statblock