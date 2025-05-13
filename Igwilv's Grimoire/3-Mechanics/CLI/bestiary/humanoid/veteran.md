---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
aliases: ["Veteran"]
---
# [Veteran](3-Mechanics\CLI\bestiary\humanoid/veteran.md)
*Source: Monster Manual p. 350, Keys from the Golden Vault. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*  

Veterans are professional fighters that take up arms for pay or to protect something they believe in or value. Their ranks include soldiers retired from long service and warriors who never served anyone but themselves.

```statblock
"name": "Veteran"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "17"
"ac_class": "[splint armor](3-Mechanics/CLI/items/splint-armor.md)"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"stats":
- !!int "16"
- !!int "13"
- !!int "14"
- !!int "10"
- !!int "11"
- !!int "10"
"speed": "30 ft."
"skillsaves":
  "Athletics": !!int "5"
  "Perception": !!int "2"
"senses": "passive Perception 12"
"languages": "any one language (usually Common)"
"cr": "3"
"actions":
- "desc": "The veteran makes two longsword attacks. If it has a shortsword drawn,\
    \ it can also make a shortsword attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice:1d20+5|noform|noparens|text(+5) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d8+3|noform|noparens|avg|text(7) (1d8 + 3)\
    \ slashing damage, or dice:1d10+3|noform|noparens|avg|text(8) (1d10 + 3) slashing\
    \ damage if used with two hands."
  "name": "Longsword"
- "desc": "Melee Weapon Attack: dice:1d20+5|noform|noparens|text(+5) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d6+3|noform|noparens|avg|text(6) (1d6 + 3)\
    \ piercing damage."
  "name": "Shortsword"
- "desc": "Ranged Weapon Attack: dice:1d20+3|noform|noparens|text(+3) to hit,\
    \ range 100/400 ft., one target. Hit: dice:1d10+1|noform|noparens|avg|text(6)\
    \ (1d10 + 1) piercing damage."
  "name": "Heavy Crossbow"
"source":
- "MM"
- "KftGV"
"image": "3-Mechanics/CLI/bestiary/humanoid/token/veteran.webp"
```
^statblock

## Environment

coastal, mountain, grassland, hill, arctic, urban, forest, underdark