---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/dmg
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Avatar of Death (DMG)"]
---
# [Avatar of Death (DMG)](3-Mechanics\CLI\bestiary\undead/avatar-of-death-dmg.md)
*Source: Dungeon Master's Guide p. 164. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*  

Summoned by the "Skull" card from the [Deck of Many Things](3-Mechanics/CLI/items/deck-of-many-things.md).

```statblock
"name": "Avatar of Death (DMG) (DMG)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Evil"
"ac": !!int "20"
"stats":
- !!int "16"
- !!int "16"
- !!int "16"
- !!int "16"
- !!int "16"
- !!int "16"
"speed": "60 ft., fly 60 ft. (hover)"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](3-Mechanics/CLI/rules/conditions.md#Charmed), [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](3-Mechanics/CLI/rules/conditions.md#Petrified),\
  \ [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned), [unconscious](3-Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "darkvision 60 ft., truesight 60 ft., passive Perception 13"
"languages": "all languages known to its summoner"
"traits":
- "desc": "The avatar can move through other creatures and objects as if they were\
    \ difficult terrain. It takes dice:1d10|noform|noparens|avg|text(5) (1d10)\
    \ force damage if it ends its turn inside an object."
  "name": "Incorporeal Movement"
- "desc": "The avatar is immune to features that turn undead."
  "name": "Turn Immunity"
"actions":
- "desc": "The avatar sweeps its spectral scythe through a creature within 5 feet\
    \ of it, dealing dice:1d8+3|noform|noparens|avg|text(7) (1d8 + 3) slashing\
    \ damage plus dice:1d8|noform|noparens|avg|text(4) (1d8) necrotic damage."
  "name": "Reaping Scythe"
"source":
- "DMG"
"image": "3-Mechanics/CLI/bestiary/undead/token/avatar-of-death.webp"
```
^statblock