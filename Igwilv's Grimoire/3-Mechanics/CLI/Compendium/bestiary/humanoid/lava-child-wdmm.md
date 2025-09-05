---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/lava-child
statblock: inline
statblock-link: "#^statblock"
aliases:
- Lava Child
---
# [Lava Child](3-Mechanics\CLI\Compendium\bestiary\humanoid/lava-child-wdmm.md)
*Source: Waterdeep: Dungeon of the Mad Mage p. 313*  

Physically identical to one another, lava children have muscular builds and childish, perpetually grinning faces. Most are born in the Fountains of Creation, also known as the Plane of Magma, which is wedged between the Elemental Planes of Earth and Fire. Within volcanic caverns, lava children form communities, serving primordial beings out of fear or worshiping gods of earth and fire.

Though they're not violent by nature, lava children fiercely defend territory they claim as their own. Many intruders have been fooled by a lava child's smile, believing themselves welcome when in fact they're about to be torn limb from limb. Lava children typically stick close to their lairs, but actively hunt when food grows scarce.

```statblock
"name": "Lava Child (WDMM)"
"size": "Medium"
"type": "humanoid"
"subtype": "lava child"
"alignment": "Neutral"
"ac": !!int "11"
"hp": !!int "60"
"hit_dice": "8d8 + 24"
"modifier": !!int "1"
"stats":
  - !!int "18"
  - !!int "13"
  - !!int "16"
  - !!int "11"
  - !!int "10"
  - !!int "10"
"speed": "25 ft., climb 20 ft."
"skillsaves":
  - "name": "[Athletics](/3-Mechanics/CLI/Rules/skills.md#Athletics)"
    "desc": "+6"
  - "name": "[Survival](/3-Mechanics/CLI/Rules/skills.md#Survival)"
    "desc": "+2"
"damage_immunities": "fire; bludgeoning, piercing, slashing from metal weapons"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, Ignan"
"cr": "3"
"traits":
  - "desc": "The lava child can move through metal without hindrance, and it has advantage\
      \ on attack rolls against any creature wearing metal armor or using a metal\
      \ shield."
    "name": "Metal Immunity"
"actions":
  - "desc": "The lava child makes two attacks: one with its bite and one with its\
      \ claws."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11\
      \ (2d6 + 4) piercing damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6\
      \ + 4) slashing damage."
    "name": "Claws"
"source":
  - "WDMM"
"image": "/3-Mechanics/CLI/Compendium/bestiary/humanoid/token/lava-child-wdmm.webp"
```
^statblock