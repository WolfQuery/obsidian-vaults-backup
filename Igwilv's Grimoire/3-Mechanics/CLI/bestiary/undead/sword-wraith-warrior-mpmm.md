---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Sword Wraith Warrior"]
---
# [Sword Wraith Warrior](3-Mechanics\CLI\bestiary\undead/sword-wraith-warrior-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 239*  

Sword wraith warriors are most often found on ancient battlefields where soldiers were hemmed in and slaughtered without quarter.

## Sword Wraiths

When glory-obsessed warriors die in battle without honor, they might haunt the site as sword wraiths.

```statblock
"name": "Sword Wraith Warrior (MPMM)"
"size": "Medium"
"type": "undead"
"alignment": "Typically  Lawful Evil"
"ac": !!int "16"
"ac_class": "[chain shirt](3-Mechanics/CLI/items/chain-shirt.md), [shield](3-Mechanics/CLI/items/shield.md)"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"stats":
- !!int "18"
- !!int "12"
- !!int "17"
- !!int "6"
- !!int "9"
- !!int "10"
"speed": "30 ft."
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened), [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned),\
  \ [unconscious](3-Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "darkvision 60 ft., passive Perception 9"
"languages": "the languages it knew in life"
"cr": "3"
"traits":
- "desc": "The warrior doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- "desc": "Melee Weapon Attack: dice:1d20+6|noform|noparens|text(+6) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d8+4|noform|noparens|avg|text(8) (1d8 + 4)\
    \ slashing damage, or dice:1d10+4|noform|noparens|avg|text(9) (1d10 + 4) slashing\
    \ damage if used with two hands."
  "name": "Battleaxe"
- "desc": "Ranged Weapon Attack: dice:1d20+3|noform|noparens|text(+3) to hit,\
    \ range 150/600 ft., one target. Hit: dice:1d8+1|noform|noparens|avg|text(5)\
    \ (1d8 + 1) piercing damage."
  "name": "Longbow"
"bonus_actions":
- "desc": "The warrior makes one Battleaxe or Longbow attack, and attack rolls against\
    \ it have advantage until the start of its next turn."
  "name": "Martial Fury"
"source":
- "MPMM"
"image": "3-Mechanics/CLI/bestiary/undead/token/sword-wraith-warrior-mpmm.webp"
```
^statblock

## Environment

grassland, swamp