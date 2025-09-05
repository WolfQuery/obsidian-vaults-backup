---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/kftgv
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/elemental
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ashen Animated Armor
---
# [Ashen Animated Armor](3-Mechanics\CLI\Compendium\bestiary\elemental/ashen-animated-armor-kftgv.md)
*Source: Keys from the Golden Vault p. 157*  

This suit of magically animated plate armor clamors as it moves, banging and grinding like the vengeful spirit of a fallen knight.

```statblock
"name": "Ashen Animated Armor (KftGV)"
"size": "Medium"
"type": "elemental"
"alignment": "Lawful Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"modifier": !!int "0"
"stats":
  - !!int "14"
  - !!int "11"
  - !!int "13"
  - !!int "1"
  - !!int "3"
  - !!int "1"
"speed": "25 ft."
"damage_immunities": "fire, poison, psychic"
"condition_immunities": "[blinded](/3-Mechanics/CLI/Rules/conditions.md#Blinded),\
  \ [charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed), [deafened](/3-Mechanics/CLI/Rules/conditions.md#Deafened),\
  \ [exhaustion](/3-Mechanics/CLI/Rules/conditions.md#Exhaustion), [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened),\
  \ [paralyzed](/3-Mechanics/CLI/Rules/conditions.md#Paralyzed), [petrified](/3-Mechanics/CLI/Rules/conditions.md#Petrified),\
  \ [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 6"
"languages": ""
"cr": "1"
"traits":
  - "desc": "The armor is [incapacitated](/3-Mechanics/CLI/Rules/conditions.md#Incapacitated)\
      \ while in the area of an [antimagic field](/3-Mechanics/CLI/Compendium/spells/antimagic-field.md).\
      \ If targeted by [dispel magic](/3-Mechanics/CLI/Compendium/spells/dispel-magic.md),\
      \ the armor must succeed on a Constitution saving throw against the caster's\
      \ spell save DC or fall [unconscious](/3-Mechanics/CLI/Rules/conditions.md#Unconscious)\
      \ for 1 minute."
    "name": "Antimagic Susceptibility"
  - "desc": "While the armor remains motionless, it is indistinguishable from a normal\
      \ suit of armor."
    "name": "False Appearance"
  - "desc": "When the armor drops to 0 hit points, it is reduced to a pile of ash,\
      \ and any equipment it was wearing or carrying falls to the ground."
    "name": "Ashen Creature"
"actions":
  - "desc": "The armor makes two melee attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
      \ + 2) bludgeoning damage."
    "name": "Slam"
"source":
  - "KftGV"
"image": "/3-Mechanics/CLI/Compendium/bestiary/elemental/token/ashen-animated-armor-kftgv.webp"
```
^statblock