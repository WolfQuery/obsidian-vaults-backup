---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdmm
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Wooden Donkey
---
# [Wooden Donkey](3-Mechanics\CLI\Compendium\bestiary\construct/wooden-donkey-wdmm.md)
*Source: Waterdeep: Dungeon of the Mad Mage p. 84*  

A crude wooden constructs resembling a donkey. Each of these magic dummies has a body made of a wooden keg turned on its side. A head and neck made of wood and sackcloth is attached to one end of the keg. At the other end is a tail made from a straw broom. Each keg is held up by four 2-foot-long peg legs.

```statblock
"name": "Wooden Donkey (WDMM)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "10"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"modifier": !!int "0"
"stats":
  - !!int "14"
  - !!int "10"
  - !!int "13"
  - !!int "2"
  - !!int "10"
  - !!int "5"
"speed": "40 ft."
"damage_immunities": "poison"
"condition_immunities": "[blinded](/3-Mechanics/CLI/Rules/conditions.md#Blinded),\
  \ [charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed), [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened),\
  \ [paralyzed](/3-Mechanics/CLI/Rules/conditions.md#Paralyzed), [petrified](/3-Mechanics/CLI/Rules/conditions.md#Petrified),\
  \ [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned)"
"senses": "blindsight 30 ft. (blind beyond this radius), passive Perception 10"
"languages": ""
"cr": "1/8"
"traits":
  - "desc": "The donkey is considered to be a Large animal for the purpose of determining\
      \ its carrying capacity."
    "name": "Beast of Burden"
  - "desc": "The donkey has advantage on Strength and Dexterity saving throws made\
      \ against effects that would knock it [prone](/3-Mechanics/CLI/Rules/conditions.md#Prone)."
    "name": "Sure-Footed"
"actions":
  - "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 4 (1d4\
      \ + 2) bludgeoning damage."
    "name": "Hooves"
"source":
  - "WDMM"
"image": "/3-Mechanics/CLI/Compendium/bestiary/construct/token/wooden-donkey-wdmm.webp"
```
^statblock