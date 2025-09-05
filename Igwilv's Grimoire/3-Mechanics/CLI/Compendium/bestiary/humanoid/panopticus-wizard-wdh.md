---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdh
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/dwarf
statblock: inline
statblock-link: "#^statblock"
aliases:
- Panopticus Wizard
---
# [Panopticus Wizard](3-Mechanics\CLI\Compendium\bestiary\humanoid/panopticus-wizard-wdh.md)
*Source: Waterdeep: Dragon Heist p. 106*  

This bald-headed and tattooed dwarf operates Xanathar's "panopticus" magical surveillance system.

Apprentice wizards are novice arcane spellcasters who serve more experienced wizards or attend school. They perform menial work, such as cooking and cleaning, in exchange for education in the ways of magic.

```statblock
"name": "Panopticus Wizard (WDH)"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Neutral"
"ac": !!int "10"
"hp": !!int "9"
"hit_dice": "2d8"
"modifier": !!int "0"
"stats":
  - !!int "10"
  - !!int "10"
  - !!int "10"
  - !!int "14"
  - !!int "10"
  - !!int "11"
"speed": "25 ft."
"skillsaves":
  - "name": "[Arcana](/3-Mechanics/CLI/Rules/skills.md#Arcana)"
    "desc": "+4"
  - "name": "[History](/3-Mechanics/CLI/Rules/skills.md#History)"
    "desc": "+4"
"damage_resistances": "poison"
"senses": "passive Perception 10"
"languages": "Common, Dwarvish"
"cr": "1/4"
"traits":
  - "desc": "The Dwarf is a 1st-level spellcaster. Its spellcasting ability is Intelligence.\
      \ It has the following wizard spells prepared:\n\nCantrips (at will): [fire\
      \ bolt](/3-Mechanics/CLI/Compendium/spells/fire-bolt.md), [mending](/3-Mechanics/CLI/Compendium/spells/mending.md),\
      \ [prestidigitation](/3-Mechanics/CLI/Compendium/spells/prestidigitation.md)\n\
      \n1st level (2 slots): [burning hands](/3-Mechanics/CLI/Compendium/spells/burning-hands.md),\
      \ [disguise self](/3-Mechanics/CLI/Compendium/spells/disguise-self.md), [shield](/3-Mechanics/CLI/Compendium/spells/shield.md)"
    "name": "Spellcasting"
  - "desc": "The dwarf has advantage on saving throws against poison and resistance\
      \ to poison damage."
    "name": "Dwarven Resilience"
"actions":
  - "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (d4)\
      \ piercing damage. Or Ranged Weapon Attack: +2 to hit, range 20/60 ft., one\
      \ target. Hit: 2 (d4) piercing damage."
    "name": "Dagger"
"source":
  - "WDH"
"image": "/3-Mechanics/CLI/Compendium/bestiary/humanoid/token/panopticus-wizard-wdh.webp"
```
^statblock