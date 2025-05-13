---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
aliases: ["Giant Dragonfly"]
---
# [Giant Dragonfly](3-Mechanics\CLI\bestiary\beast/giant-dragonfly-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 234*  

A giant dragonfly has a 20-foot wingspan. It drones loudly as it hovers and darts through the air, searching for smaller insects to consume.

```statblock
"name": "Giant Dragonfly (WBtW)"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "22"
"hit_dice": "4d10"
"stats":
- !!int "15"
- !!int "18"
- !!int "11"
- !!int "3"
- !!int "10"
- !!int "3"
"speed": "10 ft., fly 60 ft."
"senses": "passive Perception 10"
"languages": ""
"cr": "1/2"
"traits":
- "desc": "When it beats its wings, the dragonfly emits a loud droning sound that\
    \ can be heard out to a range of 120 feet."
  "name": "Drone"
"actions":
- "desc": "Melee Weapon Attack: dice:1d20+6|noform|noparens|text(+6) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d4+4|noform|noparens|avg|text(6) (1d4 + 4)\
    \ piercing damage."
  "name": "Bite"
"reactions":
- "desc": "The dragonfly halves the damage it takes from an attack made against it,\
    \ provided it can see the attacker."
  "name": "Uncanny Dodge"
"source":
- "WBtW"
"image": "3-Mechanics/CLI/bestiary/beast/token/giant-dragonfly-wbtw.webp"
```
^statblock