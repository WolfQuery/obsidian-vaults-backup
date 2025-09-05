---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Harengon Sniper
---
# [Harengon Sniper](3-Mechanics\CLI\Compendium\bestiary\humanoid/harengon-sniper-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 235*  

Harengons are rabbit-folk native to the Feywild, through they often migrate to the Material Plane. They love to travel on foot and rarely stay in one place for long.

Not all harengons are mean-spirited bullies like the ones presented here. Every harengon follows their own path through life, their disposition shaped in part by the company they keep. One harengon might travel to far lands, make friends along the way, delight in freedom and the open trail, and find inner peace. Another might become an adventurer with a strong heart and fervent dreams. For more information on harengons as player characters, see the introduction of this adventure.

```statblock
"name": "Harengon Sniper (WBtW)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "14"
"ac_class": "[leather armor](/3-Mechanics/CLI/Compendium/items/leather-armor.md)"
"hp": !!int "9"
"hit_dice": "2d8"
"modifier": !!int "3"
"stats":
  - !!int "10"
  - !!int "17"
  - !!int "11"
  - !!int "10"
  - !!int "13"
  - !!int "10"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "5"
"skillsaves":
  - "name": "[Athletics](/3-Mechanics/CLI/Rules/skills.md#Athletics)"
    "desc": "+2"
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Stealth](/3-Mechanics/CLI/Rules/skills.md#Stealth)"
    "desc": "+5"
"senses": "passive Perception 15"
"languages": "Common, Sylvan"
"cr": "1/4"
"traits":
  - "desc": "The harengon's long jump is up to 20 feet and its high jump is up to\
      \ 10 feet, with or without a running start."
    "name": "Standing Leap"
"actions":
  - "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (d4)\
      \ bludgeoning damage."
    "name": "Club"
  - "desc": "Ranged Weapon Attack: +5 to hit (the target gains no benefit from less\
      \ than total cover), range 320 ft., one target. Hit: 7 (1d8 + 3) piercing\
      \ damage. Hit or Miss: Immediately after making this attack, the harengon\
      \ can use the Hide action."
    "name": "Light Crossbow"
"source":
  - "WBtW"
"image": "/3-Mechanics/CLI/Compendium/bestiary/humanoid/token/harengon-sniper-wbtw.webp"
```
^statblock