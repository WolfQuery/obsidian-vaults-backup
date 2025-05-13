---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tce
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
statblock: inline
aliases: ["Aberrant Spirit (Star Spawn)"]
---
# [Aberrant Spirit (Star Spawn)](3-Mechanics\CLI\bestiary\aberration/aberrant-spirit-star-spawn-tce.md)
*Source: Tasha's Cauldron of Everything p. 109*  

```statblock
"name": "Aberrant Spirit (Star Spawn) (TCE)"
"size": "Medium"
"type": "aberration"
"alignment": "Unaligned"
"ac_class": "11 + the level of the spell (natural armor)"
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
- "desc": "At the start of each of the aberration's turns, each creature within 5\
    \ feet of the aberration must succeed on a Wisdom saving throw against your spell\
    \ save DC or take dice:2d6|noform|noparens|avg (2d6) psychic damage, provided\
    \ that the aberration isn't [incapacitated](3-Mechanics/CLI/rules/conditions.md#Incapacitated)."
  "name": "Whispering Aura"
"actions":
- "desc": "The aberration makes a number of attacks equal to half this spell's level\
    \ (rounded down)."
  "name": "Multiattack"
- "desc": "Melee Spell Attack: YourSpellAttack to hit, reach 5 ft., one creature.\
    \ Hit: 1d8 + 3 + the spell's level psychic damage."
  "name": "Psychic Slam"
"source":
- "TCE"
```
^statblock