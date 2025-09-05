---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Clapperclaw the Scarecrow
---
# [Clapperclaw the Scarecrow](3-Mechanics\CLI\Compendium\bestiary\npc/clapperclaw-the-scarecrow-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 78*  

Clapperclaw the scarecrow is 3 feet tall. Created by Granny Nightshade using a tormented child's soul she found in Gehenna, it ran away from home so that it wouldn't have to perform evil tasks for her. After fleeing Thither, Clapperclaw was waylaid by Agdon Longscarf and his harengon brigands, who stole its head, which the scarecrow describes as a most glorious stag skull. It desperately wants its head back, and it's a bit self-conscious about its replacement head: a hollow gourd that now sits askew on its shoulders. Eight copper coins are sealed inside the gourd, causing the head to rattle whenever Clapperclaw nods, turns, or shakes its head.

```statblock
"name": "Clapperclaw the Scarecrow (WBtW)"
"size": "Small"
"type": "construct"
"alignment": "Lawful Neutral"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "14"
"hit_dice": "4d6"
"modifier": !!int "1"
"stats":
  - !!int "14"
  - !!int "13"
  - !!int "11"
  - !!int "7"
  - !!int "10"
  - !!int "10"
"speed": "25 ft."
"skillsaves":
  - "name": "[Stealth](/3-Mechanics/CLI/Rules/skills.md#Stealth)"
    "desc": "+3"
  - "name": "[Survival](/3-Mechanics/CLI/Rules/skills.md#Survival)"
    "desc": "+2"
"damage_vulnerabilities": "fire"
"damage_immunities": "poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed),\
  \ [exhaustion](/3-Mechanics/CLI/Rules/conditions.md#Exhaustion), [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened),\
  \ [paralyzed](/3-Mechanics/CLI/Rules/conditions.md#Paralyzed), [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned),\
  \ [unconscious](/3-Mechanics/CLI/Rules/conditions.md#Unconscious)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, Sylvan"
"cr": "1/2"
"traits":
  - "desc": "Clapperclaw doesn't require air, food, drink, or sleep."
    "name": "Unusual Nature"
"actions":
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (2d4\
      \ + 2) slashing damage."
    "name": "Claws"
  - "desc": "Clapperclaw stuffs straw or other dead plant matter into itself and regains\
      \ 2d4 + 2 hit points. Roll a d6; on a 1 or 2, Clapperclaw runs out of stuffing\
      \ and must spend 8 hours foraging for more before it can use this action again."
    "name": "Stuffing"
"bonus_actions":
  - "desc": "Clapperclaw targets one creature it can see within 15 feet of it. The\
      \ target must succeed on a DC 11 Wisdom saving throw or be magically [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened)\
      \ until the end of Clapperclaw's next turn."
    "name": "Unsettling Presence (Recharge 6)"
"source":
  - "WBtW"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/clapperclaw-the-scarecrow-wbtw.webp"
```
^statblock