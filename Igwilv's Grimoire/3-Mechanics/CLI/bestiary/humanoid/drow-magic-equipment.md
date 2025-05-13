---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/elf
statblock: inline
aliases: ["Drow (Magic Equipment)"]
---
# [Drow (Magic Equipment)](3-Mechanics\CLI\bestiary\humanoid/drow-magic-equipment.md)
*Source: Monster Manual p. 128. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*  

```statblock
"name": "Drow (Magic Equipment)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "16"
"ac_class": "[+1 chain shirt](3-Mechanics/CLI/items/drow-1-armor.md)"
"hp": !!int "13"
"hit_dice": "3d8"
"stats":
- !!int "10"
- !!int "14"
- !!int "10"
- !!int "11"
- !!int "11"
- !!int "12"
"speed": "30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "2"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "Elvish, Undercommon"
"cr": "1/4"
"traits":
- "desc": "The drow's spellcasting ability is Charisma (spell save DC 11). It can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [dancing lights](3-Mechanics/CLI/spells/dancing-lights.md)\n\n1/day\
    \ each: [darkness](3-Mechanics/CLI/spells/darkness.md), [faerie fire](3-Mechanics/CLI/spells/faerie-fire.md)"
  "name": "Innate Spellcasting"
- "desc": "The drow has advantage on saving throws against being [charmed](3-Mechanics/CLI/rules/conditions.md#Charmed),\
    \ and magic can't put the drow to sleep."
  "name": "Fey Ancestry"
- "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](3-Mechanics/CLI/rules/skills.md#Perception)) checks\
    \ that rely on sight."
  "name": "Sunlight Sensitivity"
- "desc": "The drow wears a [+1 chain shirt](3-Mechanics/CLI/items/drow-1-armor.md)\
    \ and carries a [+1 shortsword](3-Mechanics/CLI/items/drow-1-weapon.md). These\
    \ items lose their enhancement bonuses permanently if they are exposed to sunlight\
    \ for 1 hour or longer."
  "name": "Special Equipment"
"actions":
- "desc": "Melee Weapon Attack: dice:1d20+5|noform|noparens|text(+5) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d6+3|noform|noparens|avg|text(6) (1d6 + 3)\
    \ piercing damage."
  "name": "+1 Shortsword"
- "desc": "Ranged Weapon Attack: dice:1d20+4|noform|noparens|text(+4) to hit,\
    \ range 30/120 ft., one target. Hit: dice:1d6+2|noform|noparens|avg|text(5)\
    \ (1d6 + 2) piercing damage, and the target must succeed on a DC 13 Constitution\
    \ saving throw or be [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)\
    \ for 1 hour. If the saving throw fails by 5 or more, the target is also [unconscious](3-Mechanics/CLI/rules/conditions.md#Unconscious)\
    \ while [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned) in this way.\
    \ The target wakes up if it takes damage or if another creature takes an action\
    \ to shake it awake."
  "name": "Hand Crossbow"
"source":
- "MM"
```
^statblock

## Environment

underdark