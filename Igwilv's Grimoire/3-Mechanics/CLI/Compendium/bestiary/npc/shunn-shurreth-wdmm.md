---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/elf
statblock: inline
statblock-link: "#^statblock"
aliases:
- Shunn Shurreth
---
# [Shunn Shurreth](3-Mechanics\CLI\Compendium\bestiary\npc/shunn-shurreth-wdmm.md)
*Source: Waterdeep: Dungeon of the Mad Mage p. 33*  

A drow priestess of Lolth placed a curse on Shunn and forced him into exile after he displeased her. The curse partially transformed him into a spider, giving him eight red arachnid eyes, a mouth full of fangs, and black bristles sprouting from his slender limbs. A remove curse or [greater restoration](/3-Mechanics/CLI/Compendium/spells/greater-restoration.md) spell restores Shunn's natural form, but Shunn doesn't want the curse lifted. His horrific appearance strikes fear into the hearts of his comrades-in-arms and has earned him favor with Xanathar. Shunn believes that returning to his normal form might weaken his influence over his gang and diminish his status in the Xanathar Guild.

```statblock
"name": "Shunn Shurreth (WDMM)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Lawful Evil"
"ac": !!int "18"
"ac_class": "[studded leather](/3-Mechanics/CLI/Compendium/items/studded-leather-armor.md),\
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
  - "desc": "Shunn's spellcasting ability is Charisma (spell save DC 12). It can innately\
      \ cast the following spells, requiring no material components:\n\nAt will:\
      \ [dancing lights](/3-Mechanics/CLI/Compendium/spells/dancing-lights.md)\n\n\
      1/day each: [darkness](/3-Mechanics/CLI/Compendium/spells/darkness.md),\
      \ [faerie fire](/3-Mechanics/CLI/Compendium/spells/faerie-fire.md), [levitate](/3-Mechanics/CLI/Compendium/spells/levitate.md)\
      \ (self only)"
    "name": "Innate Spellcasting"
  - "desc": "While cursed with spider features, Shunn can climb difficult surfaces,\
      \ even across ceilings, without needing to make an ability check."
    "name": "Spider Features"
  - "desc": "Shunn has advantage on saving throws against being [charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed),\
      \ and magic can't put Shunn to sleep."
    "name": "Fey Ancestry"
  - "desc": "While in sunlight, Shunn has disadvantage on attack rolls, as well as\
      \ on Wisdom ([Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)) checks\
      \ that rely on sight."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "Shunn makes two shortsword attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6\
      \ + 4) piercing damage plus 10 (3d6) poison damage."
    "name": "Shortsword"
  - "desc": "Ranged Weapon Attack: +7 to hit, range 30/120 ft., one target. Hit:\
      \ 7 (1d6 + 4) piercing damage, and the target must succeed on a DC 13 Constitution\
      \ saving throw or be [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned)\
      \ for 1 hour. If the saving throw fails by 5 or more, the target is also [unconscious](/3-Mechanics/CLI/Rules/conditions.md#Unconscious)\
      \ while [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned) in this way.\
      \ The target wakes up if it takes damage or if another creature takes an action\
      \ to shake it awake."
    "name": "Hand Crossbow"
"reactions":
  - "desc": "Shunn adds 3 to its AC against one melee attack that would hit it. To\
      \ do so, Shunn must see the attacker and be wielding a melee weapon."
    "name": "Parry"
"source":
  - "WDMM"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/shunn-shurreth-wdmm.webp"
```
^statblock