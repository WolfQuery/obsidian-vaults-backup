---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/kftgv
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/elemental
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ashen Flying Sword
---
# [Ashen Flying Sword](3-Mechanics\CLI\Compendium\bestiary\elemental/ashen-flying-sword-kftgv.md)
*Source: Keys from the Golden Vault p. 157*  

A magically animated flying sword dances through the air, fighting like a warrior that can't be injured.

```statblock
"name": "Ashen Flying Sword (KftGV)"
"size": "Small"
"type": "elemental"
"alignment": "Lawful Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "17"
"hit_dice": "5d6"
"modifier": !!int "2"
"stats":
  - !!int "12"
  - !!int "15"
  - !!int "11"
  - !!int "1"
  - !!int "5"
  - !!int "1"
"speed": "0 ft., fly 50 ft. (hover)"
"saves":
  - "dexterity": !!int "4"
"damage_immunities": "fire, poison, psychic"
"condition_immunities": "[blinded](/3-Mechanics/CLI/Rules/conditions.md#Blinded),\
  \ [charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed), [deafened](/3-Mechanics/CLI/Rules/conditions.md#Deafened),\
  \ [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened), [paralyzed](/3-Mechanics/CLI/Rules/conditions.md#Paralyzed),\
  \ [petrified](/3-Mechanics/CLI/Rules/conditions.md#Petrified), [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 7"
"languages": ""
"cr": "1/4"
"traits":
  - "desc": "The sword is [incapacitated](/3-Mechanics/CLI/Rules/conditions.md#Incapacitated)\
      \ while in the area of an [antimagic field](/3-Mechanics/CLI/Compendium/spells/antimagic-field.md).\
      \ If targeted by [dispel magic](/3-Mechanics/CLI/Compendium/spells/dispel-magic.md),\
      \ the sword must succeed on a Constitution saving throw against the caster's\
      \ spell save DC or fall [unconscious](/3-Mechanics/CLI/Rules/conditions.md#Unconscious)\
      \ for 1 minute."
    "name": "Antimagic Susceptibility"
  - "desc": "While the sword remains motionless and isn't flying, it is indistinguishable\
      \ from a normal sword."
    "name": "False Appearance"
  - "desc": "When the sword drops to 0 hit points, it is reduced to a pile of ash,\
      \ and any equipment it was wearing or carrying falls to the ground."
    "name": "Ashen Creature"
"actions":
  - "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8\
      \ + 1) slashing damage."
    "name": "Longsword"
"source":
  - "KftGV"
"image": "/3-Mechanics/CLI/Compendium/bestiary/elemental/token/ashen-flying-sword-kftgv.webp"
```
^statblock