---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdh
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/dragonborn
statblock: inline
statblock-link: "#^statblock"
aliases:
- Thrakkus
---
# [Thrakkus](3-Mechanics\CLI\Compendium\bestiary\npc/thrakkus-wdh.md)
*Source: Waterdeep: Dragon Heist p. 89*  

A member of the Guild of Butchers, Thrakkus has a lucrative side business. Zhents loyal to Manshoon pay Thrakkus to chop up people they kill, and he sells the meat on the sly.

```statblock
"name": "Thrakkus (WDH)"
"size": "Medium"
"type": "humanoid"
"subtype": "dragonborn"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"ac_class": "[hide armor](/3-Mechanics/CLI/Compendium/items/hide-armor.md)"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"modifier": !!int "1"
"stats":
  - !!int "16"
  - !!int "12"
  - !!int "17"
  - !!int "9"
  - !!int "11"
  - !!int "9"
"speed": "30 ft."
"damage_resistances": "fire"
"senses": "passive Perception 10"
"languages": "Common, Draconic"
"cr": "2"
"traits":
  - "desc": "At the start of his turn, Thrakkus can gain advantage on all melee weapon\
      \ attack rolls during that turn, but attack rolls against him have advantage\
      \ until the start of his next turn."
    "name": "Reckless"
"actions":
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12\
      \ + 3) slashing damage."
    "name": "Greataxe"
  - "desc": "Thrakkus can use his action to exhale a 15-foot cone of fire. Each creature\
      \ in the cone must make a DC 13 Dexterity saving throw, taking 6 (2d6) fire\
      \ damage on a failed save, or half as much damage on a successful one."
    "name": "Breath Weapon (1/Day)"
"source":
  - "WDH"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/thrakkus-wdh.webp"
```
^statblock