---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/giant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Carrion Ogre
---
# [Carrion Ogre](3-Mechanics\CLI\Compendium\bestiary\giant/carrion-ogre-wdmm.md)
*Source: Waterdeep: Dungeon of the Mad Mage p. 189*  

A creature that has the body of an ogre and the head of a carrion crawler.

```statblock
"name": "Carrion Ogre (WDMM)"
"size": "Large"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "11"
"ac_class": "[hide armor](/3-Mechanics/CLI/Compendium/items/hide-armor.md)"
"hp": !!int "59"
"hit_dice": "7d10 + 21"
"modifier": !!int "-1"
"stats":
  - !!int "19"
  - !!int "8"
  - !!int "16"
  - !!int "1"
  - !!int "7"
  - !!int "7"
"speed": "40 ft."
"senses": "darkvision 60 ft., passive Perception 8"
"languages": ""
"cr": "2"
"traits":
  - "desc": "While lashed to the floor, the creature is [prone](/3-Mechanics/CLI/Rules/conditions.md#Prone)\
      \ and [restrained](/3-Mechanics/CLI/Rules/conditions.md#Restrained). It also\
      \ suffers from two levels of [exhaustion](/3-Mechanics/CLI/Rules/conditions.md#Exhaustion)."
    "name": "Tied Down"
"actions":
  - "desc": "The creature makes two attacks: one with its tentacles and one with its\
      \ bite."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one creature. Hit:\
      \ 4 (1d4 + 2) poison damage, and the target must succeed on a DC 13 Constitution\
      \ saving throw or be [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned)\
      \ for 1 minute. Until this poison ends, the target is [paralyzed](/3-Mechanics/CLI/Rules/conditions.md#Paralyzed).\
      \ The target can repeat the saving throw at the end of each of its turns, ending\
      \ the poison on itself on a success."
    "name": "Tentacles"
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4\
      \ + 2) piercing damage."
    "name": "Bite"
"source":
  - "WDMM"
"image": "/3-Mechanics/CLI/Compendium/bestiary/giant/token/carrion-ogre-wdmm.webp"
```
^statblock