---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdh
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/half-orc
statblock: inline
statblock-link: "#^statblock"
aliases:
- Yagra Stonefist
---
# [Yagra Stonefist](3-Mechanics\CLI\Compendium\bestiary\npc/yagra-stonefist-wdh.md)
*Source: Waterdeep: Dragon Heist p. 20*  

*Half-orc mercenary*

> [!quote]  
> 
> Want to arm wrestle? Hope you're stronger than you look.

Yagra is a Black Network mercenary who gets paid to protect a Zhent negotiator named Davil Starsong (see appendix B for more information on him). Yagra finds the job boring and likes to pass the time by challenging adventurers to arm wrestle. (Resolve such contests using contested Strength checks.) If the characters express their opposition to the Xanathar Guild, Yagra might urge them to speak to Davil about joining forces with the Zhentarim to destroy the beholder crime lord.

```statblock
"name": "Yagra Stonefist (WDH)"
"size": "Medium"
"type": "humanoid"
"subtype": "half-orc"
"alignment": "Neutral"
"ac": !!int "11"
"ac_class": "[leather armor](/3-Mechanics/CLI/Compendium/items/leather-armor.md)"
"hp": !!int "32"
"hit_dice": "5d8 + 10"
"modifier": !!int "0"
"stats":
  - !!int "15"
  - !!int "11"
  - !!int "14"
  - !!int "10"
  - !!int "10"
  - !!int "11"
"speed": "30 ft."
"skillsaves":
  - "name": "[Intimidation](/3-Mechanics/CLI/Rules/skills.md#Intimidation)"
    "desc": "+2"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, Orc"
"cr": "1/2"
"traits":
  - "desc": "When reduced to 0 hit points, Yagra drops to 1 hit point instead (but\
      \ can't do this again until she finishes a long rest)."
    "name": "Relentless Endurance"
  - "desc": "Yagra has advantage on an attack roll against a creature if at least\
      \ one of her allies is within 5 feet of the creature and the ally isn't [incapacitated](/3-Mechanics/CLI/Rules/conditions.md#Incapacitated)."
    "name": "Pack Tactics"
  - "desc": "When she scores a critical hit Yagra can roll one of the weapon's damage\
      \ dice and add it to the extra damage of the critical hit."
    "name": "Savage Attacks"
"actions":
  - "desc": "Yagra makes two melee attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5\
      \ (1d6 + 2) bludgeoning damage."
    "name": "Mace"
  - "desc": "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit:\
      \ 5 (d10) piercing damage."
    "name": "Heavy Crossbow"
"source":
  - "WDH"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/yagra-stonefist-wdh.webp"
```
^statblock