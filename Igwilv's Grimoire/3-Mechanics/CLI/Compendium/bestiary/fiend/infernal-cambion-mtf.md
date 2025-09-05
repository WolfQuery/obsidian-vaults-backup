---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mtf
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend
statblock: inline
statblock-link: "#^statblock"
aliases:
- Infernal Cambion
---
# [Infernal Cambion](3-Mechanics\CLI\Compendium\bestiary\fiend/infernal-cambion-mtf.md)
*Source: Mordenkainen's Tome of Foes p. 36, Keys from the Golden Vault*  

```statblock
"name": "Infernal Cambion (MTF)"
"size": "Medium"
"type": "fiend"
"alignment": "Any Evil alignment"
"ac": !!int "19"
"ac_class": "[scale mail](/3-Mechanics/CLI/Compendium/items/scale-mail.md)"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"modifier": !!int "4"
"stats":
  - !!int "18"
  - !!int "18"
  - !!int "16"
  - !!int "14"
  - !!int "12"
  - !!int "16"
"speed": "30 ft., fly 60 ft."
"saves":
  - "strength": !!int "7"
  - "constitution": !!int "6"
  - "intelligence": !!int "5"
  - "charisma": !!int "6"
"skillsaves":
  - "name": "[Deception](/3-Mechanics/CLI/Rules/skills.md#Deception)"
    "desc": "+6"
  - "name": "[Intimidation](/3-Mechanics/CLI/Rules/skills.md#Intimidation)"
    "desc": "+6"
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](/3-Mechanics/CLI/Rules/skills.md#Stealth)"
    "desc": "+7"
"damage_resistances": "cold; fire; lightning; poison; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Abyssal, Common, Infernal"
"cr": "5"
"traits":
  - "desc": "The cambion's spellcasting ability is Charisma (spell save DC 14). The\
      \ cambion can innately cast the following spells, requiring no material components:\n\
      \n3/day each: [alter self](/3-Mechanics/CLI/Compendium/spells/alter-self.md),\
      \ [command](/3-Mechanics/CLI/Compendium/spells/command.md), [detect magic](/3-Mechanics/CLI/Compendium/spells/detect-magic.md)\n\
      \n1/day: [plane shift](/3-Mechanics/CLI/Compendium/spells/plane-shift.md)\
      \ (self only)"
    "name": "Innate Spellcasting"
  - "desc": "The AC of the cambion includes its Charisma bonus."
    "name": "Fiendish Blessing"
"actions":
  - "desc": "The cambion makes two melee attacks or uses its Fire Ray twice."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. Hit: 7 (1d6 + 4) piercing damage, or 8 (1d8 + 4) piercing\
      \ damage if used with two hands to make a melee attack, plus 3 (d6) fire damage."
    "name": "Spear"
  - "desc": "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 10\
      \ (3d6) fire damage."
    "name": "Fire Ray"
  - "desc": "As a bonus action, the cambion chooses another creature that can see\
      \ or hear it within 120 feet. That creature gains advantage on all attack rolls\
      \ and saving throws for the next minute or until the cambion uses this ability\
      \ again."
    "name": "Fury of the Nine"
"source":
  - "MTF"
  - "KftGV"
```
^statblock

## Environment

urban