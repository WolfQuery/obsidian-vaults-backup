---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdmm
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Statue of Vergadain
---
# [Statue of Vergadain](3-Mechanics\CLI\Compendium\bestiary\construct/statue-of-vergadain-wdmm.md)
*Source: Waterdeep: Dungeon of the Mad Mage p. 202*  

```statblock
"name": "Statue of Vergadain (WDMM)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "178"
"hit_dice": "17d10 + 85"
"modifier": !!int "-1"
"stats":
  - !!int "22"
  - !!int "9"
  - !!int "20"
  - !!int "3"
  - !!int "11"
  - !!int "1"
"speed": "30 ft."
"damage_immunities": "poison; psychic; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't adamantine"
"condition_immunities": "[charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed),\
  \ [exhaustion](/3-Mechanics/CLI/Rules/conditions.md#Exhaustion), [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened),\
  \ [paralyzed](/3-Mechanics/CLI/Rules/conditions.md#Paralyzed), [petrified](/3-Mechanics/CLI/Rules/conditions.md#Petrified),\
  \ [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned)"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "understands the languages of its creator but can't speak"
"cr": "10"
"traits":
  - "desc": "The statue is immune to any spell or effect that would alter its form."
    "name": "Immutable Form"
  - "desc": "The statue has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "The statue's weapon attacks are magical."
    "name": "Magic Weapons"
  - "desc": "As a bonus action, the golem targets one creature it can see within 30\
      \ feet of it. The target must succeed on a DC 17 Charisma saving throw, or all\
      \ magic items in its possession are teleported to the bottom of the pit in area\
      \ 31."
    "name": "Magic Theft"
"actions":
  - "desc": "The statue makes two slam attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 19\
      \ (3d8 + 6) bludgeoning damage."
    "name": "Slam"
  - "desc": "The statue targets one or more creatures it can see within 10 feet of\
      \ it. Each target must make a DC 17 Wisdom saving throw against this magic.\
      \ On a failed save, a target can't use reactions, its speed is halved, and it\
      \ can't make more than one attack on its turn. In addition, the target can take\
      \ either an action or a bonus action on its turn, not both. These effects last\
      \ for 1 minute. A target can repeat the saving throw at the end of each of its\
      \ turns, ending the effect on itself on a success."
    "name": "Slow (Recharge 5-6)"
"source":
  - "WDMM"
"image": "/3-Mechanics/CLI/Compendium/bestiary/construct/token/statue-of-vergadain-wdmm.webp"
```
^statblock