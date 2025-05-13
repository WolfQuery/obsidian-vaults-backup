---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/kftgv
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Frody Dartwild"]
---
# [Frody Dartwild](3-Mechanics\CLI\bestiary\npc/frody-dartwild-kftgv.md)
*Source: Keys from the Golden Vault p. 105*  

```statblock
"name": "Frody Dartwild (KftGV)"
"size": "Medium"
"type": "undead"
"alignment": "Neutral Good"
"ac": !!int "8"
"hp": !!int "22"
"hit_dice": "3d8 + 9"
"stats":
- !!int "13"
- !!int "6"
- !!int "16"
- !!int "10"
- !!int "6"
- !!int "5"
"speed": "20 ft."
"saves":
  "Wisdom": !!int "0"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 8"
"languages": "Common"
"cr": "1/4"
"traits":
- "desc": "If damage reduces Frody to 0 hit points, it must make a Constitution saving\
    \ throw with a DC of 5 + the damage taken, unless the damage is radiant or from\
    \ a critical hit. On a success, Frody drops to 1 hit point instead."
  "name": "Undead Fortitude"
"actions":
- "desc": "Melee Weapon Attack: dice:1d20+3|noform|noparens|text(+3) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d6+1|noform|noparens|avg|text(4) (1d6 + 1)\
    \ bludgeoning damage."
  "name": "Slam"
"source":
- "KftGV"
"image": "3-Mechanics/CLI/bestiary/npc/token/frody-dartwild-kftgv.webp"
```
^statblock