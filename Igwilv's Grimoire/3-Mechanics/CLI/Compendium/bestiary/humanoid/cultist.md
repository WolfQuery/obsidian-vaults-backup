---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
statblock-link: "#^statblock"
aliases:
- Cultist
---
# [Cultist](3-Mechanics\CLI\Compendium\bestiary\humanoid/cultist.md)
*Source: Monster Manual p. 345, Lost Mine of Phandelver, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Dragon of Icespire Peak, Keys from the Golden Vault. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

Cultists swear allegiance to dark powers such as elemental princes, demon lords, or archdevils. Most conceal their loyalties to avoid being ostracized, imprisoned, or executed for their beliefs. Unlike evil acolytes, cultists often show signs of insanity in their beliefs and practices.

```statblock
"name": "Cultist"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any Non-Good alignment"
"ac": !!int "12"
"ac_class": "[leather armor](/3-Mechanics/CLI/Compendium/items/leather-armor.md)"
"hp": !!int "9"
"hit_dice": "2d8"
"modifier": !!int "1"
"stats":
  - !!int "11"
  - !!int "12"
  - !!int "10"
  - !!int "10"
  - !!int "11"
  - !!int "10"
"speed": "30 ft."
"skillsaves":
  - "name": "[Deception](/3-Mechanics/CLI/Rules/skills.md#Deception)"
    "desc": "+2"
  - "name": "[Religion](/3-Mechanics/CLI/Rules/skills.md#Religion)"
    "desc": "+2"
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "1/8"
"traits":
  - "desc": "The cultist has advantage on saving throws against being [charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed)\
      \ or [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened)."
    "name": "Dark Devotion"
"actions":
  - "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4\
      \ (1d6 + 1) slashing damage."
    "name": "Scimitar"
"source":
  - "MM"
  - "LMoP"
  - "WDH"
  - "WDMM"
  - "DIP"
  - "KftGV"
"image": "/3-Mechanics/CLI/Compendium/bestiary/humanoid/token/cultist.webp"
```
^statblock

## Environment

urban