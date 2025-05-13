---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/kftgv
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct
statblock: inline
aliases: ["Clockwork Defender"]
---
# [Clockwork Defender](3-Mechanics\CLI\bestiary\construct/clockwork-defender-kftgv.md)
*Source: Keys from the Golden Vault p. 85*  

A clockwork defender is a mechanical quadruped that vaguely resembles a hound. Its eyes glow and can project intense but harmless beams of light. It tirelessly protects whatever its creator wants, and it can be programmed by its creator not to attack certain kinds of creatures.

```statblock
"name": "Clockwork Defender (KftGV)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "42"
"hit_dice": "5d8 + 20"
"stats":
- !!int "16"
- !!int "15"
- !!int "18"
- !!int "3"
- !!int "14"
- !!int "1"
"speed": "30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "6"
"damage_immunities": "poison"
"condition_immunities": "[charmed](3-Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](3-Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "passive Perception 16"
"languages": "understands the languages of its creator but can't speak"
"cr": "1"
"traits":
- "desc": "The defender doesn't need air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- "desc": "Melee Weapon Attack: dice:1d20+5|noform|noparens|text(+5) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d8+3|noform|noparens|avg|text(7) (1d8 + 3)\
    \ piercing damage plus dice:2d6|noform|noparens|avg|text(7) (2d6) lightning\
    \ damage. If the target is a creature, it must succeed on a DC 13 Strength saving\
    \ throw or be [grappled](3-Mechanics/CLI/rules/conditions.md#Grappled) (escape\
    \ DC 13). A creature [grappled](3-Mechanics/CLI/rules/conditions.md#Grappled)\
    \ by the defender takes the damage again at the start of each of the defender's\
    \ turns. The defender can have only one creature [grappled](3-Mechanics/CLI/rules/conditions.md#Grappled)\
    \ in this way at a time, and the defender can't make Electrified Bite attacks\
    \ while grappling."
  "name": "Electrified Bite"
"bonus_actions":
- "desc": "The defender emits bright light from its eyes in a 60-foot cone, or it\
    \ shuts off this light."
  "name": "Light Beam"
"source":
- "KftGV"
"image": "3-Mechanics/CLI/bestiary/construct/token/clockwork-defender-kftgv.webp"
```
^statblock