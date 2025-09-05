---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/elf
statblock: inline
statblock-link: "#^statblock"
aliases:
- Drow Shadowblade
---
# [Drow Shadowblade](3-Mechanics\CLI\Compendium\bestiary\humanoid/drow-shadowblade-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 105*  

Drow shadowblades steal down the dim passages of the Underdark, bound on errands of mayhem. They protect enclaves and Underdark cities from enemies and track down thieves who make off with prized treasures. In the city of Menzoberranzan in the Forgotten Realms, noble houses often employ shadowblades to eliminate rivals from other houses. In communities free of Lolth's sway, they serve as spies tasked with foiling the plots of that demon lord's cult. In any role they take on, they move undetected until the moment they attack—and then they are the last thing their victims see.

A shadowblade gains their powers over shadow via a ritual in which they kill a shadow demon and mystically prevent it from re-forming in the Abyss, siphoning its essence into themselves.

```statblock
"name": "Drow Shadowblade (MPMM)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Any alignment"
"ac": !!int "17"
"ac_class": "[studded leather](/3-Mechanics/CLI/Compendium/items/studded-leather-armor.md)"
"hp": !!int "150"
"hit_dice": "20d8 + 60"
"modifier": !!int "5"
"stats":
  - !!int "14"
  - !!int "21"
  - !!int "16"
  - !!int "12"
  - !!int "14"
  - !!int "13"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "9"
  - "constitution": !!int "7"
  - "wisdom": !!int "6"
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Stealth](/3-Mechanics/CLI/Rules/skills.md#Stealth)"
    "desc": "+9"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Elvish, Undercommon"
"cr": "11"
"traits":
  - "desc": "Magical darkness doesn't impede the drow's [darkvision](/3-Mechanics/CLI/Rules/senses.md#Darkvision)."
    "name": "Devil's Sight"
  - "desc": "The drow has advantage on saving throws against being [charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed),\
      \ and magic can't put the drow to sleep."
    "name": "Fey Ancestry"
  - "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well\
      \ as on Wisdom ([Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)) checks\
      \ that rely on sight."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "The drow makes three Shadow Sword attacks. One of the attacks can be\
      \ replaced by a Hand Crossbow attack. The drow can also use Spellcasting to\
      \ cast darkness."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Weapon Attack: +9 to hit, reach 5 ft. or range 30/60\
      \ ft., one target. Hit: 27 (7d6 + 5) necrotic damage."
    "name": "Shadow Sword"
  - "desc": "Ranged Weapon Attack: +9 to hit, range 30/120 ft., one target. Hit:\
      \ 8 (1d6 + 5) piercing damage, and the target must succeed on a DC 13 Constitution\
      \ saving throw or be [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned)\
      \ for 1 hour. If the saving throw fails by 5 or more, the target is also [unconscious](/3-Mechanics/CLI/Rules/conditions.md#Unconscious)\
      \ while [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned) in this way.\
      \ The target regains consciousness if it takes damage or if another creature\
      \ takes an action to shake it."
    "name": "Hand Crossbow"
  - "desc": "The drow casts one of the following spells, requiring no material components\
      \ and using Charisma as the spellcasting ability (spell save DC 13):\n\nAt\
      \ will: [dancing lights](/3-Mechanics/CLI/Compendium/spells/dancing-lights.md),\
      \ [darkness](/3-Mechanics/CLI/Compendium/spells/darkness.md)\n\n1/day each:\
      \ [faerie fire](/3-Mechanics/CLI/Compendium/spells/faerie-fire.md), [levitate](/3-Mechanics/CLI/Compendium/spells/levitate.md)\
      \ (self only)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "While in dim light or darkness, the drow teleports, along with any equipment\
      \ it is wearing or carrying, up to 60 feet to an unoccupied space it can see\
      \ that is also in dim light or darkness. It then has advantage on the first\
      \ melee attack it makes before the end of the turn."
    "name": "Shadow Step"
"source":
  - "MPMM"
"image": "/3-Mechanics/CLI/Compendium/bestiary/humanoid/token/drow-shadowblade-mpmm.webp"
```
^statblock

## Environment

underdark