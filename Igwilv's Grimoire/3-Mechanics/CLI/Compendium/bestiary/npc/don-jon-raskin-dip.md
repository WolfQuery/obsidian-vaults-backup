---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/dip
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
statblock-link: "#^statblock"
aliases:
- Don-Jon Raskin
---
# [Don-Jon Raskin](3-Mechanics\CLI\Compendium\bestiary\npc/don-jon-raskin-dip.md)
*Source: Dragon of Icespire Peak p. 56*  

Adventurers who undertake the Mountain's Toe Quest meet Don-Jon Raskin, a fearless troubleshooter who has experienced more than his fair share of adventures.

```statblock
"name": "Don-Jon Raskin (DIP)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral"
"ac": !!int "10"
"hp": !!int "44"
"hit_dice": "8d8 + 8"
"modifier": !!int "0"
"stats":
  - !!int "11"
  - !!int "10"
  - !!int "13"
  - !!int "12"
  - !!int "10"
  - !!int "14"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "2"
  - "constitution": !!int "3"
"skillsaves":
  - "name": "[Deception](/3-Mechanics/CLI/Rules/skills.md#Deception)"
    "desc": "+4"
  - "name": "[Persuasion](/3-Mechanics/CLI/Rules/skills.md#Persuasion)"
    "desc": "+4"
"senses": "passive Perception 10"
"languages": "Common, Dwarvish"
"cr": "1/2"
"traits":
  - "desc": "Don-Jon has advantage on saving throws against being [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened)."
    "name": "Brave"
  - "desc": "If damage reduces Don-Jon to 0 hit points, he drops to 1 hit point instead\
      \ and gains advantage on attack rolls until the end of his next turn."
    "name": "Not Dead Yet (Recharges after a Long Rest)"
"actions":
  - "desc": "Don-Jon makes three melee attacks."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Weapon Attack: +2 to hit, reach 5 ft. or range 20/60\
      \ ft., one target. Hit: 2 (d4) piercing damage."
    "name": "Dagger"
  - "desc": "Ranged Weapon Attack: +2 to hit, range 30/120 ft., one target. Hit:\
      \ 2 (d4) bludgeoning damage."
    "name": "Sling"
"source":
  - "DIP"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/don-jon-raskin-dip.webp"
```
^statblock