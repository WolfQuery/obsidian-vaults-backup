---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/elemental
statblock: inline
aliases: ["Water Elemental Myrmidon"]
---
# [Water Elemental Myrmidon](3-Mechanics\CLI\bestiary\elemental/water-elemental-myrmidon-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 123*  

## Elemental Myrmidons

Elemental myrmidons are Elementals conjured and bound by magic into ritually created suits of plate armor. In this form, they possess no recollection of their former existence as free Elementals. They exist only to follow the commands of their creators.

```statblock
"name": "Water Elemental Myrmidon (MPMM)"
"size": "Medium"
"type": "elemental"
"alignment": "Typically  Neutral"
"ac": !!int "18"
"ac_class": "[plate](3-Mechanics/CLI/items/plate-armor.md)"
"hp": !!int "127"
"hit_dice": "17d8 + 51"
"stats":
- !!int "18"
- !!int "14"
- !!int "16"
- !!int "8"
- !!int "10"
- !!int "10"
"speed": "40 ft., swim 40 ft."
"damage_resistances": "acid; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](3-Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned),\
  \ [prone](3-Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Aquan, one language of its creator's choice"
"cr": "7"
"actions":
- "desc": "The myrmidon makes three Trident attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: dice:1d20+7|noform|noparens|text(+7)\
    \ to hit, reach 5 ft. or range 20/60 ft., one target. Hit: dice:1d6+4|noform|noparens|avg|text(7)\
    \ (1d6 + 4) force damage, or dice:1d8+4|noform|noparens|avg|text(8) (1d8\
    \ + 4) force damage if used with two hands to make a melee attack."
  "name": "Trident"
- "desc": "The myrmidon uses Multiattack. Each attack that hits deals an extra dice:1d10|noform|noparens|avg|text(5)\
    \ (1d10) cold damage. A target that is hit by one or more of these attacks has\
    \ its speed reduced by 10 feet until the end of the myrmidon's next turn."
  "name": "Freezing Strikes (Recharge 6)"
"source":
- "MPMM"
"image": "3-Mechanics/CLI/bestiary/elemental/token/water-elemental-myrmidon-mpmm.webp"
```
^statblock