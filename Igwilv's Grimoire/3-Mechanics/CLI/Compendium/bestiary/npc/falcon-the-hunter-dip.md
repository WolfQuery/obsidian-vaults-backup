---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/dip
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
statblock-link: "#^statblock"
aliases:
- Falcon the Hunter
---
# [Falcon the Hunter](3-Mechanics\CLI\Compendium\bestiary\npc/falcon-the-hunter-dip.md)
*Source: Dragon of Icespire Peak p. 56*  

Adventurers encounter Falcon the Hunter if they visit his hunting lodge in Neverwinter Wood.

```statblock
"name": "Falcon the Hunter (DIP)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral Good"
"ac": !!int "14"
"ac_class": "[studded leather](/3-Mechanics/CLI/Compendium/items/studded-leather-armor.md)"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"modifier": !!int "2"
"stats":
  - !!int "14"
  - !!int "15"
  - !!int "16"
  - !!int "11"
  - !!int "16"
  - !!int "15"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "4"
  - "wisdom": !!int "5"
"skillsaves":
  - "name": "[Athletics](/3-Mechanics/CLI/Rules/skills.md#Athletics)"
    "desc": "+4"
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+7"
  - "name": "[Survival](/3-Mechanics/CLI/Rules/skills.md#Survival)"
    "desc": "+5"
"senses": "passive Perception 17"
"languages": "Common"
"cr": "4"
"traits":
  - "desc": "A longbow or shortbow deals one extra die of its damage when Falcon hits\
      \ with it (included in his longbow attack)."
    "name": "Archer"
  - "desc": "Falcon's ranged weapon attacks ignore half cover and three-quarters cover."
    "name": "Sharpshooter"
"actions":
  - "desc": "Falcon makes three melee attacks or two ranged attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
      \ + 2) slashing damage, or 7 (1d10 + 2) slashing damage if used with two hands."
    "name": "Longsword"
  - "desc": "Ranged Weapon Attack: +4 to hit, range 150/600 ft., one target. Hit:\
      \ 11 (2d8 + 2) piercing damage."
    "name": "Longbow"
"source":
  - "DIP"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/falcon-the-hunter-dip.webp"
```
^statblock