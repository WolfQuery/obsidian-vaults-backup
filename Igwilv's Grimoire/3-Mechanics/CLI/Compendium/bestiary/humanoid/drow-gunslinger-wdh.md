---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdh
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/elf
statblock: inline
statblock-link: "#^statblock"
aliases:
- Drow Gunslinger
---
# [Drow Gunslinger](3-Mechanics\CLI\Compendium\bestiary\humanoid/drow-gunslinger-wdh.md)
*Source: Waterdeep: Dragon Heist p. 201*  

Firearms aren't widely available in the North, but some members of Bregan D'aerthe are equipped with Lantanese pistols, bullets, and packets of smokepowder. These drow gunslingers are expert pistoleers, as skilled with their guns as the best archers are with their bows.

```statblock
"name": "Drow Gunslinger (WDH)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Any alignment"
"ac": !!int "18"
"ac_class": "[studded leather](/3-Mechanics/CLI/Compendium/items/studded-leather-armor.md),\
  \ [shield](/3-Mechanics/CLI/Compendium/items/shield.md)"
"hp": !!int "84"
"hit_dice": "13d8 + 26"
"modifier": !!int "4"
"stats":
  - !!int "13"
  - !!int "18"
  - !!int "14"
  - !!int "11"
  - !!int "13"
  - !!int "14"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "6"
  - "constitution": !!int "4"
  - "wisdom": !!int "3"
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](/3-Mechanics/CLI/Rules/skills.md#Stealth)"
    "desc": "+8"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "Elvish, Undercommon"
"cr": "4"
"traits":
  - "desc": "The drow's spellcasting ability is Charisma (spell save DC 12) It can\
      \ innately cast the following spells, requiring no material components:\n\n\
      At will: [dancing lights](/3-Mechanics/CLI/Compendium/spells/dancing-lights.md)\n\
      \n1/day each: [darkness](/3-Mechanics/CLI/Compendium/spells/darkness.md),\
      \ [faerie fire](/3-Mechanics/CLI/Compendium/spells/faerie-fire.md), [levitate](/3-Mechanics/CLI/Compendium/spells/levitate.md)\
      \ (self only)"
    "name": "Innate Spellcasting"
  - "desc": "The drow has advantage on saving throws against being [charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed),\
      \ and magic can't put the drow to sleep."
    "name": "Fey Ancestry"
  - "desc": "Being within 5 feet of a hostile creature or attacking at long range\
      \ doesn't impose disadvantage on the drow's ranged attack rolls with a pistol.\
      \ In addition, the drow ignores half cover and three-quarters cover when making\
      \ ranged attacks with a pistol."
    "name": "Gunslinger"
  - "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well\
      \ as on Wisdom ([Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)) checks\
      \ that rely on sight."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "The drow makes two shortsword attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6\
      \ + 4) piercing damage."
    "name": "Shortsword"
  - "desc": "Ranged Weapon Attack: +6 to hit, range 30/90 ft., one target. Hit:\
      \ 9 (1d10 + 4) piercing damage plus 11 (2d10) poison damage."
    "name": "Poisonous Pistol"
"source":
  - "WDH"
"image": "/3-Mechanics/CLI/Compendium/bestiary/humanoid/token/drow-gunslinger-wdh.webp"
```
^statblock