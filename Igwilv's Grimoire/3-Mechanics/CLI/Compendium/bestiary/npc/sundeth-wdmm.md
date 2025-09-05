---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdmm
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/giant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Sundeth
---
# [Sundeth](3-Mechanics\CLI\Compendium\bestiary\npc/sundeth-wdmm.md)
*Source: Waterdeep: Dungeon of the Mad Mage p. 304*  

Sundeth is a hideous, 8-foot-tall, half-ogre.

```statblock
"name": "Sundeth (WDMM)"
"size": "Large"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"ac_class": "[plate armor](/3-Mechanics/CLI/Compendium/items/plate-armor.md)"
"hp": !!int "143"
"hit_dice": "22d8 + 44"
"modifier": !!int "2"
"stats":
  - !!int "20"
  - !!int "15"
  - !!int "14"
  - !!int "10"
  - !!int "14"
  - !!int "12"
"speed": "30 ft."
"saves":
  - "strength": !!int "9"
  - "constitution": !!int "6"
"skillsaves":
  - "name": "[Athletics](/3-Mechanics/CLI/Rules/skills.md#Athletics)"
    "desc": "+9"
  - "name": "[Intimidation](/3-Mechanics/CLI/Rules/skills.md#Intimidation)"
    "desc": "+5"
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+6"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": "Common, Giant"
"cr": "9"
"traits":
  - "desc": "Sundeth rerolls a failed saving throw."
    "name": "Indomitable (2/Day)"
  - "desc": "As a bonus action, Sundeth can regain 20 hit points."
    "name": "Second Wind (Recharges after a Short or Long Rest)"
"actions":
  - "desc": "Sundeth makes three attacks with its greatsword or its shortbow."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12\
      \ (2d6 + 5) slashing damage, plus 7 (2d6) slashing damage if Sundeth has more\
      \ than half of its total hit points remaining."
    "name": "Greatsword"
  - "desc": "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit:\
      \ 5 (1d6 + 2) piercing damage, plus 7 (2d6) piercing damage if Sundeth has more\
      \ than half of its total hit points remaining."
    "name": "Shortbow"
"source":
  - "WDMM"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/sundeth-wdmm.webp"
```
^statblock