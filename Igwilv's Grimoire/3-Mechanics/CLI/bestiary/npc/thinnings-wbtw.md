---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey
statblock: inline
aliases: ["Thinnings"]
---
# [Thinnings](3-Mechanics\CLI\bestiary\npc/thinnings-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 15*  

```statblock
"name": "Thinnings (WBtW)"
"size": "Medium"
"type": "fey"
"alignment": "Neutral"
"ac": !!int "12"
"hp": !!int "27"
"hit_dice": "6d8"
"stats":
- !!int "10"
- !!int "15"
- !!int "10"
- !!int "12"
- !!int "14"
- !!int "16"
"speed": "30 ft."
"skillsaves":
  "Sleight of Hand": !!int "4"
  "Deception": !!int "5"
  "Stealth": !!int "4"
  "Investigation": !!int "5"
  "Insight": !!int "4"
  "Perception": !!int "6"
  "Persuasion": !!int "5"
"senses": "passive Perception 16"
"languages": "Common, Elvish, Sylvan"
"cr": "1"
"traits":
- "desc": "On each of its turns, Thinnings can use a bonus action to take the Dash,\
    \ Disengage, or Hide action."
  "name": "Cunning Action"
- "desc": "Thinnings deals an extra dice:2d6|noform|noparens|avg|text(7) (2d6)\
    \ damage when it hits a target with a weapon attack and has advantage on the attack\
    \ roll, or when the target is within 5 feet of an ally of Thinnings that isn't\
    \ [incapacitated](3-Mechanics/CLI/rules/conditions.md#Incapacitated) and Thinnings\
    \ doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack (1/Turn)"
"actions":
- "desc": "Thinnings makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice:1d20+4|noform|noparens|text(+4) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d6+2|noform|noparens|avg|text(5) (1d6 + 2)\
    \ piercing damage."
  "name": "Shortsword"
- "desc": "Ranged Weapon Attack: dice:1d20+4|noform|noparens|text(+4) to hit,\
    \ range 30/120 ft., one target. Hit: dice:1d6+2|noform|noparens|avg|text(5)\
    \ (1d6 + 2) piercing damage."
  "name": "Hand Crossbow"
- "desc": "Thinnings can make himself as flat as a piece of parchment or revert to\
    \ his normal thickness. In his flattened form, he can slide under doors, roll\
    \ himself up, or even fold himself into the pages of a book."
  "name": "Change Shape"
"source":
- "WBtW"
"image": "3-Mechanics/CLI/bestiary/npc/token/thinnings-wbtw.webp"
```
^statblock