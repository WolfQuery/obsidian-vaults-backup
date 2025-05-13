---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid
statblock: inline
aliases: ["Grung (Orange)"]
---
# [Grung (Orange)](3-Mechanics\CLI\bestiary\humanoid/grung-orange-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 149*  

```statblock
"name": "Grung (Orange) (MPMM)"
"size": "Small"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "12"
"hp": !!int "11"
"hit_dice": "2d6 + 4"
"stats":
- !!int "7"
- !!int "14"
- !!int "15"
- !!int "10"
- !!int "11"
- !!int "10"
"speed": "25 ft., climb 25 ft."
"saves":
  "Dexterity": !!int "4"
"skillsaves":
  "Athletics": !!int "2"
  "Stealth": !!int "4"
  "Perception": !!int "2"
  "Survival": !!int "2"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "passive Perception 12"
"languages": "Grung"
"cr": "1/4"
"traits":
- "desc": "The grung can breathe air and water."
  "name": "Amphibious"
- "desc": "A creature [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned) by\
    \ a grung suffers an additional effect that depends on the grung's color. This\
    \ effect lasts until the creature is no longer [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)\
    \ by the grung. The [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned) creature\
    \ is [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened) of its allies."
  "name": "Poisonous Skin"
- "desc": "The grung's long jump is up to 25 feet and its high jump is up to 15 feet,\
    \ with or without a running start."
  "name": "Standing Leap"
- "desc": "If the grung isn't immersed in water for at least 1 hour during a day,\
    \ it suffers 1 level of [exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion)\
    \ at the end of that day. The grung can recover from this [exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion)\
    \ only through magic or by immersing itself in water for at least 1 hour."
  "name": "Water Dependency"
"actions":
- "desc": "Melee or Ranged Weapon Attack: dice:1d20+4|noform|noparens|text(+4)\
    \ to hit, reach 5 ft. or range 20/60 ft., one target. Hit: dice:1d4+2|noform|noparens|avg|text(4)\
    \ (1d4 + 2) piercing damage plus dice:2d4|noform|noparens|avg|text(5) (2d4)\
    \ poison damage."
  "name": "Dagger"
"source":
- "MPMM"
```
^statblock

## Environment

forest