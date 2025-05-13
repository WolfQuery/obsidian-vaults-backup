---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/kftgv
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/elemental
statblock: inline
aliases: ["Ashen Shambling Mound"]
---
# [Ashen Shambling Mound](3-Mechanics\CLI\bestiary\elemental/ashen-shambling-mound-kftgv.md)
*Source: Keys from the Golden Vault p. 158*  

```statblock
"name": "Ashen Shambling Mound (KftGV)"
"size": "Large"
"type": "elemental"
"alignment": "Lawful Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "136"
"hit_dice": "16d10 + 48"
"stats":
- !!int "18"
- !!int "8"
- !!int "16"
- !!int "5"
- !!int "10"
- !!int "5"
"speed": "20 ft., swim 20 ft."
"skillsaves":
  "Stealth": !!int "2"
"damage_resistances": "cold"
"damage_immunities": "fire, lightning"
"condition_immunities": "[blinded](3-Mechanics/CLI/rules/conditions.md#Blinded), [deafened](3-Mechanics/CLI/rules/conditions.md#Deafened),\
  \ [exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": ""
"cr": "5"
"traits":
- "desc": "Whenever the shambling mound is subjected to lightning damage, it takes\
    \ no damage and regains a number of hit points equal to the lightning damage dealt."
  "name": "Lightning Absorption"
- "desc": "When the shambling mound drops to 0 hit points, it is reduced to a pile\
    \ of ash, and any equipment it was wearing or carrying falls to the ground."
  "name": "Ashen Creature"
"actions":
- "desc": "The shambling mound makes two slam attacks. If both attacks hit a Medium\
    \ or smaller target, the target is [grappled](3-Mechanics/CLI/rules/conditions.md#Grappled)\
    \ (escape DC 14), and the shambling mound uses its Engulf on it."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice:1d20+7|noform|noparens|text(+7) to hit, reach\
    \ 5 ft., one target. Hit: dice:2d8+4|noform|noparens|avg|text(13) (2d8 +\
    \ 4) bludgeoning damage."
  "name": "Slam"
- "desc": "The shambling mound engulfs a Medium or smaller creature [grappled](3-Mechanics/CLI/rules/conditions.md#Grappled)\
    \ by it. The engulfed target is [blinded](3-Mechanics/CLI/rules/conditions.md#Blinded),\
    \ [restrained](3-Mechanics/CLI/rules/conditions.md#Restrained), and unable to\
    \ breathe, and it must succeed on a DC 14 Constitution saving throw at the start\
    \ of each of the mound's turns or take dice:2d8+4|noform|noparens|avg|text(13)\
    \ (2d8 + 4) bludgeoning damage. If the mound moves, the engulfed target moves\
    \ with it. The mound can have only one creature engulfed at a time."
  "name": "Engulf"
"source":
- "KftGV"
"image": "3-Mechanics/CLI/bestiary/elemental/token/ashen-shambling-mound-kftgv.webp"
```
^statblock