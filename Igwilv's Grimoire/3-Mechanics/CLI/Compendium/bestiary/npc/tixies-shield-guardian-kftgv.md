---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/kftgv
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Tixie's Shield Guardian
---
# [Tixie's Shield Guardian](3-Mechanics\CLI\Compendium\bestiary\npc/tixies-shield-guardian-kftgv.md)
*Source: Keys from the Golden Vault p. 80*  

```statblock
"name": "Tixie's Shield Guardian (KftGV)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "142"
"hit_dice": "15d10 + 60"
"modifier": !!int "-1"
"stats":
  - !!int "18"
  - !!int "8"
  - !!int "18"
  - !!int "7"
  - !!int "10"
  - !!int "3"
"speed": "30 ft."
"damage_immunities": "poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed),\
  \ [exhaustion](/3-Mechanics/CLI/Rules/conditions.md#Exhaustion), [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened),\
  \ [paralyzed](/3-Mechanics/CLI/Rules/conditions.md#Paralyzed), [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned)"
"senses": "blindsight 10 ft., darkvision 60 ft., passive Perception 10"
"languages": "understands commands given in any language but can't speak"
"cr": "7"
"traits":
  - "desc": "The shield guardian is magically bound to an amulet. As long as the guardian\
      \ and its amulet are on the same plane of existence, the amulet's wearer can\
      \ telepathically call the guardian to travel to it, and the guardian knows the\
      \ distance and direction to the amulet. If the guardian is within 60 feet of\
      \ the amulet's wearer, half of any damage the wearer takes (rounded up) is transferred\
      \ to the guardian."
    "name": "Bound"
  - "desc": "The shield guardian regains 10 hit points at the start of its turn if\
      \ it has at least 1 hit point."
    "name": "Regeneration"
"actions":
  - "desc": "The guardian makes two fist attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11\
      \ (2d6 + 4) bludgeoning damage."
    "name": "Fist"
"reactions":
  - "desc": "When a creature makes an attack against the wearer of the guardian's\
      \ amulet, the guardian grants a +2 bonus to the wearer's AC if the guardian\
      \ is within 5 feet of the wearer."
    "name": "Shield"
"source":
  - "KftGV"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/tixies-shield-guardian-kftgv.webp"
```
^statblock