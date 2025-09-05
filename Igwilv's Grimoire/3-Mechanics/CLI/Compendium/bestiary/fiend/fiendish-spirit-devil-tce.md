---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tce
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend
statblock: inline
statblock-link: "#^statblock"
aliases:
- Fiendish Spirit (Devil)
---
# [Fiendish Spirit (Devil)](3-Mechanics\CLI\Compendium\bestiary\fiend/fiendish-spirit-devil-tce.md)
*Source: Tasha's Cauldron of Everything p. 112*  

```statblock
"name": "Fiendish Spirit (Devil) (TCE)"
"size": "Large"
"type": "fiend"
"alignment": "Unaligned"
"ac_class": "12 + the level of the spell (natural armor)"
"modifier": !!int "3"
"stats":
  - !!int "13"
  - !!int "16"
  - !!int "15"
  - !!int "10"
  - !!int "10"
  - !!int "16"
"speed": "40 ft., fly 60 ft."
"damage_resistances": "fire"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Abyssal, Infernal, telepathy 60 ft."
"traits":
  - "desc": "The fiend has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "Magical darkness doesn't impede the fiend's darkvision."
    "name": "Devil's Sight"
"actions":
  - "desc": "The fiend makes a number of attacks equal to half this spell's level\
      \ (rounded down)."
    "name": "Multiattack"
  - "desc": "Ranged Spell Attack: your spell attack modifier to hit, range 150 ft.,\
      \ one target. Hit: 2d6 + 3 + the spell's level fire damage. If the target\
      \ is a flammable object that isn't being worn or carried, it also catches fire."
    "name": "Hurl Flame"
"source":
  - "TCE"
```
^statblock