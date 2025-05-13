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
aliases: ["Infernal Cambion"]
---
# [Infernal Cambion](3-Mechanics\CLI\bestiary\fiend/infernal-cambion-mtf.md)
*Source: Mordenkainen's Tome of Foes p. 36, Keys from the Golden Vault*  

```statblock
"name": "Infernal Cambion (MTF)"
"size": "Medium"
"type": "fiend"
"alignment": "Any Evil alignment"
"ac": !!int "19"
"ac_class": "[scale mail](3-Mechanics/CLI/items/scale-mail.md)"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"stats":
- !!int "18"
- !!int "18"
- !!int "16"
- !!int "14"
- !!int "12"
- !!int "16"
"speed": "30 ft., fly 60 ft."
"saves":
  "Charisma": !!int "6"
  "Intelligence": !!int "5"
  "Strength": !!int "7"
  "Constitution": !!int "6"
"skillsaves":
  "Intimidation": !!int "6"
  "Deception": !!int "6"
  "Stealth": !!int "7"
  "Perception": !!int "4"
"damage_resistances": "cold; fire; lightning; poison; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Abyssal, Common, Infernal"
"cr": "5"
"traits":
- "desc": "The cambion's spellcasting ability is Charisma (spell save DC 14). The\
    \ cambion can innately cast the following spells, requiring no material components:\n\
    \n1/day: [plane shift](3-Mechanics/CLI/spells/plane-shift.md) (self only)\n\
    \n3/day each: [alter self](3-Mechanics/CLI/spells/alter-self.md), [command](3-Mechanics/CLI/spells/command.md),\
    \ [detect magic](3-Mechanics/CLI/spells/detect-magic.md)"
  "name": "Innate Spellcasting"
- "desc": "The AC of the cambion includes its Charisma bonus."
  "name": "Fiendish Blessing"
"actions":
- "desc": "The cambion makes two melee attacks or uses its Fire Ray twice."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: dice:1d20+7|noform|noparens|text(+7)\
    \ to hit, reach 5 ft. or range 20/60 ft., one target. Hit: dice:1d6+4|noform|noparens|avg|text(7)\
    \ (1d6 + 4) piercing damage, or dice:1d8+4|noform|noparens|avg|text(8) (1d8\
    \ + 4) piercing damage if used with two hands to make a melee attack, plus dice:1d6|noform|noparens|avg|text(3)\
    \ (1d6) fire damage."
  "name": "Spear"
- "desc": "Ranged Spell Attack: dice:1d20+7|noform|noparens|text(+7) to hit, range\
    \ 120 ft., one target. Hit: dice:3d6|noform|noparens|avg|text(10) (3d6)\
    \ fire damage."
  "name": "Fire Ray"
- "desc": "As a bonus action, the cambion chooses another creature that can see or\
    \ hear it within 120 feet. That creature gains advantage on all attack rolls and\
    \ saving throws for the next minute or until the cambion uses this ability again."
  "name": "Fury of the Nine"
"source":
- "MTF"
- "KftGV"
```
^statblock

## Environment

urban