---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tce
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Construct Spirit
---
# [Construct Spirit](3-Mechanics\CLI\Compendium\bestiary\construct/construct-spirit-tce.md)
*Source: Tasha's Cauldron of Everything p. 111*  

```statblock
"name": "Construct Spirit (TCE)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac_class": "13 + the level of the spell (natural armor)"
"modifier": !!int "0"
"stats":
  - !!int "18"
  - !!int "10"
  - !!int "18"
  - !!int "14"
  - !!int "11"
  - !!int "5"
"speed": "30 ft."
"damage_resistances": "poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed),\
  \ [exhaustion](/3-Mechanics/CLI/Rules/conditions.md#Exhaustion), [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened),\
  \ [incapacitated](/3-Mechanics/CLI/Rules/conditions.md#Incapacitated), [paralyzed](/3-Mechanics/CLI/Rules/conditions.md#Paralyzed),\
  \ [petrified](/3-Mechanics/CLI/Rules/conditions.md#Petrified), [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "understands the languages you speak"
"traits":
  - "desc": "A creature that touches the construct or hits it with a melee attack\
      \ while within 5 feet of it takes d10 fire damage."
    "name": "Heated Body (Metal Only)"
  - "desc": "When a creature the construct can see starts its turn within 10 feet\
      \ of the construct, the construct can force it to make a Wisdom saving throw\
      \ against your spell save DC. On a failed save, the target can't use reactions\
      \ and its speed is halved until the start of its next turn."
    "name": "Stony Lethargy (Stone Only)"
"actions":
  - "desc": "The construct makes a number of attacks equal to half this spell's level\
      \ (rounded down)."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: your spell attack modifier to hit, reach 5 ft.,\
      \ one target. Hit: 1d8 + 4 + the spell's level bludgeoning damage."
    "name": "Slam"
"reactions":
  - "desc": "When the construct takes damage, it makes a slam attack against a random\
      \ creature within 5 feet of it. If no creature is within reach, the construct\
      \ moves up to half its speed toward an enemy it can see, without provoking opportunity\
      \ attacks."
    "name": "Berserk Lashing (Clay Only)"
"source":
  - "TCE"
"image": "/3-Mechanics/CLI/Compendium/bestiary/construct/token/construct-spirit-tce.webp"
```
^statblock