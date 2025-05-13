---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
aliases: ["Tribal Warrior"]
---
# [Tribal Warrior](3-Mechanics\CLI\bestiary\humanoid/tribal-warrior.md)
*Source: Monster Manual p. 350. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*  

Tribal warriors live beyond civilization, most often subsisting on fishing and hunting. Each tribe acts in accordance with the wishes of its chief, who is the greatest or oldest warrior of the tribe or a tribe member blessed by the gods.

```statblock
"name": "Tribal Warrior"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Any alignment"
"ac": !!int "12"
"ac_class": "[hide armor](3-Mechanics/CLI/items/hide-armor.md)"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "13"
- !!int "11"
- !!int "12"
- !!int "8"
- !!int "11"
- !!int "8"
"speed": "30 ft."
"senses": "passive Perception 10"
"languages": "any one language"
"cr": "1/8"
"traits":
- "desc": "The warrior has advantage on an attack roll against a creature if at least\
    \ one of the warrior's allies is within 5 feet of the creature and the ally isn't\
    \ [incapacitated](3-Mechanics/CLI/rules/conditions.md#Incapacitated)."
  "name": "Pack Tactics"
"actions":
- "desc": "Melee or Ranged Weapon Attack: dice:1d20+3|noform|noparens|text(+3)\
    \ to hit, reach 5 ft. or range 20/60 ft., one target. Hit: dice:1d6+1|noform|noparens|avg|text(4)\
    \ (1d6 + 1) piercing damage, or dice:1d8+1|noform|noparens|avg|text(5) (1d8\
    \ + 1) piercing damage if used with two hands to make a melee attack."
  "name": "Spear"
"source":
- "MM"
"image": "3-Mechanics/CLI/bestiary/humanoid/token/tribal-warrior.webp"
```
^statblock

## Environment

coastal, mountain, grassland, hill, arctic, forest, swamp, underdark, desert