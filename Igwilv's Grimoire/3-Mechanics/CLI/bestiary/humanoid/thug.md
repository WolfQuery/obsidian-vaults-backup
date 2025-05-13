---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
aliases: ["Thug"]
---
# [Thug](3-Mechanics\CLI\bestiary\humanoid/thug.md)
*Source: Monster Manual p. 350, Keys from the Golden Vault. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

Thugs are ruthless enforcers skilled at intimidation and violence. They work for money and have few scruples.

```statblock
"name": "Thug"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any Non-Good alignment"
"ac": !!int "11"
"ac_class": "[leather armor](3-Mechanics/CLI/items/leather-armor.md)"
"hp": !!int "32"
"hit_dice": "5d8 + 10"
"stats":
- !!int "15"
- !!int "11"
- !!int "14"
- !!int "10"
- !!int "10"
- !!int "11"
"speed": "30 ft."
"skillsaves":
  "Intimidation": !!int "2"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "1/2"
"traits":
- "desc": "The thug has advantage on an attack roll against a creature if at least\
    \ one of the thug's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](3-Mechanics/CLI/rules/conditions.md#Incapacitated)."
  "name": "Pack Tactics"
"actions":
- "desc": "The thug makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice:1d20+4|noform|noparens|text(+4) to hit, reach\
    \ 5 ft., one creature. Hit: dice:1d6+2|noform|noparens|avg|text(5) (1d6 +\
    \ 2) bludgeoning damage."
  "name": "Mace"
- "desc": "Ranged Weapon Attack: dice:1d20+2|noform|noparens|text(+2) to hit,\
    \ range 100/400 ft., one target. Hit: dice:1d10|noform|noparens|avg|text(5)\
    \ (1d10) piercing damage."
  "name": "Heavy Crossbow"
"source":
- "MM"
- "KftGV"
"image": "3-Mechanics/CLI/bestiary/humanoid/token/thug.webp"
```
^statblock

## Environment

urban