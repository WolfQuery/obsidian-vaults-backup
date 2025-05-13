---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/construct
statblock: inline
aliases: ["Tin Soldier"]
---
# [Tin Soldier](3-Mechanics\CLI\bestiary\construct/tin-soldier-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 115*  

These automatons are fashioned to look like stout infantry soldiers, and they obey Skabatha without question. They charge forth to investigate any suspicious activity they see or hear, meaning that they are easily distracted.

```statblock
"name": "Tin Soldier (WBtW)"
"size": "Small"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "27"
"hit_dice": "6d6 + 6"
"stats":
- !!int "14"
- !!int "11"
- !!int "13"
- !!int "1"
- !!int "3"
- !!int "1"
"speed": "25 ft."
"damage_immunities": "poison, psychic"
"condition_immunities": "[blinded](3-Mechanics/CLI/rules/conditions.md#Blinded), [charmed](3-Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [deafened](3-Mechanics/CLI/rules/conditions.md#Deafened), [exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](3-Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 6"
"languages": ""
"cr": "1"
"traits":
- "desc": "The tin soldier is incapacitated while in the area of an [antimagic field](3-Mechanics/CLI/spells/antimagic-field.md).\
    \ If targeted by [dispel magic](3-Mechanics/CLI/spells/dispel-magic.md), the tin\
    \ soldier must succeed on a Constitution saving throw against the caster's spell\
    \ save DC or fall unconscious for 1 minute."
  "name": "Antimagic Susceptibility"
- "desc": "While the tin soldier remains motionless, it is indistinguishable from\
    \ a normal suit of armor."
  "name": "False Appearance"
"actions":
- "desc": "The tin soldier makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice:1d20+4|noform|noparens|text(+4) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d6+2|noform|noparens|avg|text(5) (1d6 + 2)\
    \ bludgeoning damage."
  "name": "Slam"
"source":
- "WBtW"
"image": "3-Mechanics/CLI/bestiary/construct/token/tin-soldier-wbtw.webp"
```
^statblock