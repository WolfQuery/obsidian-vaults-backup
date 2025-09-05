---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdmm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/elemental
statblock: inline
statblock-link: "#^statblock"
aliases:
- Poison Weird
---
# [Poison Weird](3-Mechanics\CLI\Compendium\bestiary\elemental/poison-weird-wdmm.md)
*Source: Waterdeep: Dungeon of the Mad Mage p. 127*  

```statblock
"name": "Poison Weird (WDMM)"
"size": "Large"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "13"
"hp": !!int "58"
"hit_dice": "9d10 + 9"
"modifier": !!int "3"
"stats":
  - !!int "17"
  - !!int "16"
  - !!int "13"
  - !!int "11"
  - !!int "10"
  - !!int "10"
"speed": "0 ft., swim 60 ft."
"damage_resistances": "fire; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](/3-Mechanics/CLI/Rules/conditions.md#Exhaustion),\
  \ [grappled](/3-Mechanics/CLI/Rules/conditions.md#Grappled), [paralyzed](/3-Mechanics/CLI/Rules/conditions.md#Paralyzed),\
  \ [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned), [restrained](/3-Mechanics/CLI/Rules/conditions.md#Restrained),\
  \ [prone](/3-Mechanics/CLI/Rules/conditions.md#Prone), [unconscious](/3-Mechanics/CLI/Rules/conditions.md#Unconscious)"
"senses": "blindsight 30 ft., passive Perception 10"
"languages": "understands Aquan but doesn't speak"
"cr": "4"
"traits":
  - "desc": "The weird is [invisible](/3-Mechanics/CLI/Rules/conditions.md#Invisible)\
      \ while fully immersed in toxic brew."
    "name": "Invisible in Water"
  - "desc": "The weird dies if forced to leave the basin of toxic brew it inhabits,\
      \ or if a [purify food and drink](/3-Mechanics/CLI/Compendium/spells/purify-food-and-drink.md)\
      \ spell is cast on the brew."
    "name": "Brew Bound"
  - "desc": "A creature takes 10 (3d6) poison damage at the start of each of its turns\
      \ while [grappled](/3-Mechanics/CLI/Rules/conditions.md#Grappled) by a poison\
      \ weird."
    "name": "Poisonous Body"
"actions":
  - "desc": "Melee Weapon Attack: +5 to hit, reach 10 ft., one creature. Hit:\
      \ 13 (3d6 + 3) bludgeoning damage. If the target is Medium or smaller, it is\
      \ [grappled](/3-Mechanics/CLI/Rules/conditions.md#Grappled) (escape DC 13) and\
      \ pulled 5 feet toward the poison weird. Until this grapple ends, the target\
      \ is [restrained](/3-Mechanics/CLI/Rules/conditions.md#Restrained), the poison\
      \ weird tries to drown it, and the poison weird can't constrict another target."
    "name": "Constrict"
"source":
  - "WDMM"
"image": "/3-Mechanics/CLI/Compendium/bestiary/elemental/token/poison-weird-wdmm.webp"
```
^statblock