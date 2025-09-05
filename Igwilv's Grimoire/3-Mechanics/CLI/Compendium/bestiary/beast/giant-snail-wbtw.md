---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Giant Snail
---
# [Giant Snail](3-Mechanics\CLI\Compendium\bestiary\beast/giant-snail-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 234*  

These large mollusks retreat into their hardy shells when threatened, and they're particularly susceptible to being injured by contact with salt.

```statblock
"name": "Giant Snail (WBtW)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"ac_class": "natural armor"
"hp": !!int "22"
"hit_dice": "4d10"
"modifier": !!int "-4"
"stats":
  - !!int "15"
  - !!int "3"
  - !!int "11"
  - !!int "3"
  - !!int "10"
  - !!int "3"
"speed": "10 ft., climb 10 ft."
"senses": "darkvision 60 ft., passive Perception 10"
"languages": ""
"cr": "1/4"
"traits":
  - "desc": "Whenever the snail starts its turn in contact with a pound or more of\
      \ salt, it takes d4 necrotic damage. Using an action to sprinkle a pound of\
      \ salt on the snail deals d4 necrotic damage to it immediately and another d4\
      \ necrotic damage to it at the start of its next turn (after which the salt\
      \ rubs off), provided the snail has not withdrawn into its shell."
    "name": "Salt Osmosis"
"actions":
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6\
      \ + 2) bludgeoning damage."
    "name": "Slam"
  - "desc": "The snail withdraws into its shell, gaining a +4 bonus to its AC until\
      \ it emerges. It can emerge from its shell as a bonus action on its turn."
    "name": "Shell Defense"
"source":
  - "WBtW"
"image": "/3-Mechanics/CLI/Compendium/bestiary/beast/token/giant-snail-wbtw.webp"
```
^statblock