---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/kftgv
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Animatronic Allosaurus
---
# [Animatronic Allosaurus](3-Mechanics\CLI\Compendium\bestiary\construct/animatronic-allosaurus-kftgv.md)
*Source: Keys from the Golden Vault p. 22*  

The allosaurus is a predatory dinosaur of great size, strength, and speed. It can run down almost any prey over open ground, pouncing to pull creatures down with its wicked claws.

```statblock
"name": "Animatronic Allosaurus (KftGV)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "51"
"hit_dice": "6d10 + 18"
"modifier": !!int "1"
"stats":
  - !!int "19"
  - !!int "13"
  - !!int "17"
  - !!int "2"
  - !!int "12"
  - !!int "5"
"speed": "60 ft."
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+5"
"damage_immunities": "poison, psychic"
"condition_immunities": "[charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed),\
  \ [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened), [paralyzed](/3-Mechanics/CLI/Rules/conditions.md#Paralyzed),\
  \ [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned)"
"senses": "passive Perception 15"
"languages": ""
"cr": "2"
"traits":
  - "desc": "If the animatronic allosaurus moves at least 30 feet straight toward\
      \ a creature and then hits it with a claw attack on the same turn, that target\
      \ must succeed on a DC 13 Strength saving throw or be knocked [prone](/3-Mechanics/CLI/Rules/conditions.md#Prone).\
      \ If the target is [prone](/3-Mechanics/CLI/Rules/conditions.md#Prone), the\
      \ animatronic allosaurus can make one bite attack against it as a bonus action."
    "name": "Pounce"
"actions":
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 15\
      \ (2d10 + 4) piercing damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8\
      \ + 4) slashing damage."
    "name": "Claw"
"source":
  - "KftGV"
"image": "/3-Mechanics/CLI/Compendium/bestiary/construct/token/animatronic-allosaurus-kftgv.webp"
```
^statblock