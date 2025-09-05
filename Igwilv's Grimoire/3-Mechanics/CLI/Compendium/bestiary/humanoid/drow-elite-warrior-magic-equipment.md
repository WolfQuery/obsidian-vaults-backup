---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/elf
statblock: inline
statblock-link: "#^statblock"
aliases:
- Drow Elite Warrior (Magic Equipment)
---
# [Drow Elite Warrior (Magic Equipment)](3-Mechanics\CLI\Compendium\bestiary\humanoid/drow-elite-warrior-magic-equipment.md)
*Source: Monster Manual p. 128, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Dragon of Icespire Peak*  

```statblock
"name": "Drow Elite Warrior (Magic Equipment)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "20"
"ac_class": "[+2 studded leather armor](/3-Mechanics/CLI/Compendium/items/drow-2-armor-mm.md),\
  \ [shield](/3-Mechanics/CLI/Compendium/items/shield.md)"
"hp": !!int "71"
"hit_dice": "11d8 + 22"
"modifier": !!int "4"
"stats":
  - !!int "13"
  - !!int "18"
  - !!int "14"
  - !!int "11"
  - !!int "13"
  - !!int "12"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "7"
  - "constitution": !!int "5"
  - "wisdom": !!int "4"
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](/3-Mechanics/CLI/Rules/skills.md#Stealth)"
    "desc": "+10"
"senses": "darkvision 120 ft., passive Perception 14"
"languages": "Elvish, Undercommon"
"cr": "5"
"traits":
  - "desc": "The drow's spellcasting ability is Charisma (spell save DC 12). It can\
      \ innately cast the following spells, requiring no material components:\n\n\
      At will: [dancing lights](/3-Mechanics/CLI/Compendium/spells/dancing-lights.md)\n\
      \n1/day each: [darkness](/3-Mechanics/CLI/Compendium/spells/darkness.md),\
      \ [faerie fire](/3-Mechanics/CLI/Compendium/spells/faerie-fire.md), [levitate](/3-Mechanics/CLI/Compendium/spells/levitate.md)\
      \ (self only)"
    "name": "Innate Spellcasting"
  - "desc": "The drow has advantage on saving throws against being [charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed),\
      \ and magic can't put the drow to sleep."
    "name": "Fey Ancestry"
  - "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well\
      \ as on Wisdom ([Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)) checks\
      \ that rely on sight."
    "name": "Sunlight Sensitivity"
  - "desc": "The drow wears [+2 studded leather armor](/3-Mechanics/CLI/Compendium/items/drow-2-armor-mm.md)\
      \ and carries a [+2 shortsword](/3-Mechanics/CLI/Compendium/items/drow-2-weapon-mm.md).\
      \ These items lose their enhancement bonuses permanently if they are exposed\
      \ to sunlight for 1 hour or longer."
    "name": "Special Equipment"
"actions":
  - "desc": "The drow makes two shortsword attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 9 (1d6\
      \ + 6) piercing damage plus 10 (3d6) poison damage."
    "name": "+2 Shortsword"
  - "desc": "Ranged Weapon Attack: +7 to hit, range 30/120 ft., one target. Hit:\
      \ 7 (1d6 + 4) piercing damage, and the target must succeed on a DC 13 Constitution\
      \ saving throw or be [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned)\
      \ for 1 hour. If the saving throw fails by 5 or more, the target is also [unconscious](/3-Mechanics/CLI/Rules/conditions.md#Unconscious)\
      \ while [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned) in this way.\
      \ The target wakes up if it takes damage or if another creature takes an action\
      \ to shake it awake."
    "name": "Hand Crossbow"
"reactions":
  - "desc": "The drow adds 3 to its AC against one melee attack that would hit it.\
      \ To do so, the drow must see the attacker and be wielding a melee weapon."
    "name": "Parry"
"source":
  - "MM"
  - "WDH"
  - "WDMM"
  - "DIP"
```
^statblock

## Environment

underdark