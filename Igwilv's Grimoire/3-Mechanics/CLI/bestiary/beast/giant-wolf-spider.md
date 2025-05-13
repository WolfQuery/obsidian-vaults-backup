---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Giant Wolf Spider"]
---
# [Giant Wolf Spider](3-Mechanics\CLI\bestiary\beast/giant-wolf-spider.md)
*Source: Monster Manual p. 330, The Wild Beyond the Witchlight. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

Smaller than a giant spider, a giant wolf spider hunts prey across open ground or hides in a burrow or crevice, or in a hidden cavity beneath debris.

```statblock
"name": "Giant Wolf Spider"
"size": "Medium"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "11"
"hit_dice": "2d8 + 2"
"stats":
- !!int "12"
- !!int "16"
- !!int "13"
- !!int "3"
- !!int "12"
- !!int "4"
"speed": "40 ft., climb 40 ft."
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "3"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 13"
"languages": ""
"cr": "1/4"
"traits":
- "desc": "The spider can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- "desc": "While in contact with a web, the spider knows the exact location of any\
    \ other creature in contact with the same web."
  "name": "Web Sense"
- "desc": "The spider ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- "desc": "Melee Weapon Attack: dice:1d20+3|noform|noparens|text(+3) to hit, reach\
    \ 5 ft., one creature. Hit: dice:1d6+1|noform|noparens|avg|text(4) (1d6 +\
    \ 1) piercing damage, and the target must make a DC 11 Constitution saving throw,\
    \ taking dice:2d6|noform|noparens|avg|text(7) (2d6) poison damage on a failed\
    \ save, or half as much damage on a successful one. If the poison damage reduces\
    \ the target to 0 hit points, the target is stable but [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)\
    \ for 1 hour, even after regaining hit points, and is [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed)\
    \ while [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned) in this way."
  "name": "Bite"
"source":
- "MM"
- "WBtW"
"image": "3-Mechanics/CLI/bestiary/beast/token/giant-wolf-spider.webp"
```
^statblock

## Environment

grassland, forest, hill, desert, coastal