---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tce
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/elemental
statblock: inline
aliases: ["Elemental Spirit (Water)"]
---
# [Elemental Spirit (Water)](3-Mechanics\CLI\bestiary\elemental/elemental-spirit-water-tce.md)
*Source: Tasha's Cauldron of Everything p. 111*  

```statblock
"name": "Elemental Spirit (Water) (TCE)"
"size": "Medium"
"type": "elemental"
"alignment": "Unaligned"
"ac_class": "11 + the level of the spell (natural armor)"
"stats":
- !!int "18"
- !!int "15"
- !!int "17"
- !!int "4"
- !!int "10"
- !!int "16"
"speed": "40 ft., swim 40 ft."
"damage_resistances": "acid"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](3-Mechanics/CLI/rules/conditions.md#Petrified),\
  \ [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned), [unconscious](3-Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Primordial, understands the languages you speak"
"traits":
- "desc": "The elemental can move through a space as narrow as 1 inch wide without\
    \ squeezing."
  "name": "Amorphous Form"
"actions":
- "desc": "The elemental makes a number of attacks equal to half this spell's level\
    \ (rounded down)."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: YourSpellAttack to hit, reach 5 ft., one target.\
    \ Hit: 1d10 + 4 + the spell's level bludgeoning damage."
  "name": "Slam"
"source":
- "TCE"
```
^statblock