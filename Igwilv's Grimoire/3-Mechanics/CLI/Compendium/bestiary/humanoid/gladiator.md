---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
statblock-link: "#^statblock"
aliases:
- Gladiator
---
# [Gladiator](3-Mechanics\CLI\Compendium\bestiary\humanoid/gladiator.md)
*Source: Monster Manual p. 346, Dragon of Icespire Peak, Keys from the Golden Vault. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*  

Gladiators battle for the entertainment of raucous crowds. Some gladiators are brutal pit fighters who treat each match as a life-or-death struggle, while others are professional duelists who command huge fees but rarely fight to the death.

```statblock
"name": "Gladiator"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "16"
"ac_class": "[studded leather](/3-Mechanics/CLI/Compendium/items/studded-leather-armor.md),\
  \ [shield](/3-Mechanics/CLI/Compendium/items/shield.md)"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "15"
  - !!int "16"
  - !!int "10"
  - !!int "12"
  - !!int "15"
"speed": "30 ft."
"saves":
  - "strength": !!int "7"
  - "dexterity": !!int "5"
  - "constitution": !!int "6"
"skillsaves":
  - "name": "[Athletics](/3-Mechanics/CLI/Rules/skills.md#Athletics)"
    "desc": "+10"
  - "name": "[Intimidation](/3-Mechanics/CLI/Rules/skills.md#Intimidation)"
    "desc": "+5"
"senses": "passive Perception 11"
"languages": "any one language (usually Common)"
"cr": "5"
"traits":
  - "desc": "The gladiator has advantage on saving throws against being [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened)."
    "name": "Brave"
  - "desc": "A melee weapon deals one extra die of its damage when the gladiator hits\
      \ with it (included in the attack)."
    "name": "Brute"
"actions":
  - "desc": "The gladiator makes three melee attacks or two ranged attacks."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Weapon Attack: +7 to hit, reach 5 ft. and range 20/60\
      \ ft., one target. Hit: 11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing\
      \ damage if used with two hands to make a melee attack."
    "name": "Spear"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 9\
      \ (2d4 + 4) bludgeoning damage. If the target is a Medium or smaller creature,\
      \ it must succeed on a DC 15 Strength saving throw or be knocked [prone](/3-Mechanics/CLI/Rules/conditions.md#Prone)."
    "name": "Shield Bash"
"reactions":
  - "desc": "The gladiator adds 3 to its AC against one melee attack that would hit\
      \ it. To do so, the gladiator must see the attacker and be wielding a melee\
      \ weapon."
    "name": "Parry"
"source":
  - "MM"
  - "DIP"
  - "KftGV"
"image": "/3-Mechanics/CLI/Compendium/bestiary/humanoid/token/gladiator.webp"
```
^statblock

## Environment

urban