---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/23
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/elemental
statblock: inline
aliases: ["Elder Tempest"]
---
# [Elder Tempest](3-Mechanics\CLI\bestiary\elemental/elder-tempest-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 121*  

Terrifying storms manifest in the bodies of elder tempests. Beings carved from clouds, wind, rain, and lightning, elder tempests assume the shape of serpents that slither through the sky. They drown the land beneath them with rain and stab the earth with lances of lightning. Punishing winds scream around them as they fly, feeding the chaos they create.

```statblock
"name": "Elder Tempest (MPMM)"
"size": "Gargantuan"
"type": "elemental"
"alignment": "Typically  Neutral"
"ac": !!int "19"
"hp": !!int "264"
"hit_dice": "16d20 + 96"
"stats":
- !!int "23"
- !!int "28"
- !!int "23"
- !!int "2"
- !!int "21"
- !!int "18"
"speed": "0 ft., fly 120 ft. (hover)"
"saves":
  "Charisma": !!int "11"
  "Wisdom": !!int "12"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "lightning, poison, thunder"
"condition_immunities": "[exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [grappled](3-Mechanics/CLI/rules/conditions.md#Grappled), [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](3-Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned),\
  \ [prone](3-Mechanics/CLI/rules/conditions.md#Prone), [restrained](3-Mechanics/CLI/rules/conditions.md#Restrained),\
  \ [stunned](3-Mechanics/CLI/rules/conditions.md#Stunned)"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": ""
"cr": "23"
"traits":
- "desc": "The tempest can enter a hostile creature's space and stop there. It can\
    \ move through a space as narrow as 1 inch wide without squeezing."
  "name": "Air Form"
- "desc": "The tempest doesn't provoke [opportunity attacks](3-Mechanics/CLI/rules/actions.md#Opportunity%20Attack)\
    \ when it flies out of an enemy's reach."
  "name": "Flyby"
- "desc": "If the tempest fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "The tempest is always at the center of a storm dice:1d6+4|noform|noparens|avg\
    \ (1d6 + 4) miles in diameter. Heavy precipitation in the form of either rain\
    \ or snow falls there, causing the area to be lightly obscured. Heavy rain also\
    \ extinguishes open flames and imposes disadvantage on Wisdom ([Perception](3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on hearing. In addition, strong winds swirl in the area covered\
    \ by the storm. The winds impose disadvantage on ranged attack rolls. They also\
    \ extinguish open flames and disperse fog."
  "name": "Living Storm"
- "desc": "The tempest deals double damage to objects and structures."
  "name": "Siege Monster"
"actions":
- "desc": "The tempest makes two Thunderous Slam attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice:1d20+16|noform|noparens|text(+16) to hit,\
    \ reach 20 ft., one target. Hit: dice:4d6+9|noform|noparens|avg|text(23) (4d6\
    \ + 9) thunder damage."
  "name": "Thunderous Slam"
- "desc": "Each creature within 120 feet of the tempest must make a DC 21 Dexterity\
    \ saving throw, taking dice:6d8|noform|noparens|avg|text(27) (6d8) lightning\
    \ damage on a failed save, or half as much damage on a successful one. If a target's\
    \ saving throw fails by 5 or more, the creature is also [stunned](3-Mechanics/CLI/rules/conditions.md#Stunned)\
    \ until the end of its next turn."
  "name": "Lightning Storm (Recharge 6)"
"legendary_actions":
- "desc": "The tempest moves up to its speed."
  "name": "Move"
- "desc": "The tempest can cause a bolt of lightning to strike a point on the ground\
    \ anywhere under its storm. Each creature within 5 feet of that point must make\
    \ a DC 21 Dexterity saving throw, taking dice:3d10|noform|noparens|avg|text(16)\
    \ (3d10) lightning damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Lightning Strike (Costs 2 Actions)"
- "desc": "The tempest releases a blast of thunder and wind in a line that is 300\
    \ feet long and 20 feet wide. Objects in that area take dice:4d10|noform|noparens|avg|text(22)\
    \ (4d10) thunder damage. Each creature there must succeed on a DC 21 Dexterity\
    \ saving throw or take dice:4d10|noform|noparens|avg|text(22) (4d10) thunder\
    \ damage and be flung up to 60 feet in a direction away from the line. If a thrown\
    \ target collides with an immovable object (such as a wall or floor) or another\
    \ creature, the target takes dice:1d6|noform|noparens|avg|text(3) (1d6) bludgeoning\
    \ damage for every 10 feet it was thrown before impact. If the target collides\
    \ with another creature, that other creature must succeed on a DC 19 Dexterity\
    \ saving throw or take the same impact damage and be knocked [prone](3-Mechanics/CLI/rules/conditions.md#Prone)."
  "name": "Screaming Gale (Costs 3 Actions)"
"source":
- "MPMM"
"image": "3-Mechanics/CLI/bestiary/elemental/token/elder-tempest-mpmm.webp"
```
^statblock

## Environment

arctic, coastal, grassland, hill, mountain