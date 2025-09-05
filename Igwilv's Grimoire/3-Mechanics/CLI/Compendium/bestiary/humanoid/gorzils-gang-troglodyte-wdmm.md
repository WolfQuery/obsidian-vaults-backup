---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdmm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/troglodyte
statblock: inline
statblock-link: "#^statblock"
aliases:
- Gorzil's Gang Troglodyte
---
# [Gorzil's Gang Troglodyte](3-Mechanics\CLI\Compendium\bestiary\humanoid/gorzils-gang-troglodyte-wdmm.md)
*Source: Waterdeep: Dungeon of the Mad Mage p. 150*  

```statblock
"name": "Gorzil's Gang Troglodyte (WDMM)"
"size": "Medium"
"type": "humanoid"
"subtype": "troglodyte"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"ac_class": "[breastplate](/3-Mechanics/CLI/Compendium/items/breastplate.md)"
"hp": !!int "13"
"hit_dice": "2d8 + 4"
"modifier": !!int "0"
"stats":
  - !!int "14"
  - !!int "10"
  - !!int "14"
  - !!int "6"
  - !!int "10"
  - !!int "6"
"speed": "30 ft."
"skillsaves":
  - "name": "[Stealth](/3-Mechanics/CLI/Rules/skills.md#Stealth)"
    "desc": "+2"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands Undercommon but can't speak"
"cr": "1/4"
"traits":
  - "desc": "The troglodyte has advantage on Dexterity ([Stealth](/3-Mechanics/CLI/Rules/skills.md#Stealth))\
      \ checks made to hide."
    "name": "Chameleon Skin"
  - "desc": "Any creature other than a troglodyte that starts its turn within 5 feet\
      \ of the troglodyte must succeed on a DC 12 Constitution saving throw or be\
      \ [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned) until the start\
      \ of the creature's next turn. On a successful saving throw, the creature is\
      \ immune to the stench of all troglodytes for 1 hour."
    "name": "Stench"
  - "desc": "While in sunlight, the troglodyte has disadvantage on attack rolls, as\
      \ well as on Wisdom ([Perception](/3-Mechanics/CLI/Rules/skills.md#Perception))\
      \ checks that rely on sight."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "The troglodyte makes three attacks: one with its bite and two with its\
      \ longsword."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
      \ + 2) piercing damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
      \ + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with two hands."
    "name": "Longsword"
"source":
  - "WDMM"
"image": "/3-Mechanics/CLI/Compendium/bestiary/humanoid/token/gorzils-gang-troglodyte-wdmm.webp"
```
^statblock