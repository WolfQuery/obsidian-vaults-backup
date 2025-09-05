---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdmm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Undead Shambling Mound
---
# [Undead Shambling Mound](3-Mechanics\CLI\Compendium\bestiary\undead/undead-shambling-mound-wdmm.md)
*Source: Waterdeep: Dungeon of the Mad Mage p. 142*  

Made entirely of skulls and bones.

```statblock
"name": "Undead Shambling Mound (WDMM)"
"size": "Large"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "136"
"hit_dice": "16d10 + 48"
"modifier": !!int "-1"
"stats":
  - !!int "18"
  - !!int "8"
  - !!int "16"
  - !!int "5"
  - !!int "10"
  - !!int "5"
"speed": "20 ft., swim 20 ft."
"skillsaves":
  - "name": "[Stealth](/3-Mechanics/CLI/Rules/skills.md#Stealth)"
    "desc": "+2"
"damage_resistances": "cold, fire"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[blinded](/3-Mechanics/CLI/Rules/conditions.md#Blinded),\
  \ [deafened](/3-Mechanics/CLI/Rules/conditions.md#Deafened), [exhaustion](/3-Mechanics/CLI/Rules/conditions.md#Exhaustion),\
  \ [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": ""
"cr": "5"
"traits":
  - "desc": "Whenever the shambling mound is subjected to necrotic damage, it takes\
      \ no damage and regains a number of hit points equal to the necrotic damage\
      \ dealt."
    "name": "Necrotic Absorption"
"actions":
  - "desc": "The shambling mound makes two slam attacks. If both attacks hit a Medium\
      \ or smaller target, the target is [grappled](/3-Mechanics/CLI/Rules/conditions.md#Grappled)\
      \ (escape DC 14), and the shambling mound uses its Engulf on it."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13\
      \ (2d8 + 4) bludgeoning damage."
    "name": "Slam"
  - "desc": "The shambling mound engulfs a Medium or smaller creature [grappled](/3-Mechanics/CLI/Rules/conditions.md#Grappled)\
      \ by it. The engulfed target is [blinded](/3-Mechanics/CLI/Rules/conditions.md#Blinded),\
      \ [restrained](/3-Mechanics/CLI/Rules/conditions.md#Restrained), and unable\
      \ to breathe, and it must succeed on a DC 14 Constitution saving throw at the\
      \ start of each of the mound's turns or take 13 (2d8 + 4) bludgeoning damage.\
      \ If the mound moves, the engulfed target moves with it. The mound can have\
      \ only one creature engulfed at a time."
    "name": "Engulf"
"source":
  - "WDMM"
"image": "/3-Mechanics/CLI/Compendium/bestiary/undead/token/undead-shambling-mound-wdmm.webp"
```
^statblock