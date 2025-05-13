---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Will-o'-Wells"]
---
# [Will-o'-Wells](3-Mechanics\CLI\bestiary\undead/will-o-wells-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 61*  

```statblock
"name": "Will-o'-Wells (WBtW)"
"size": "Tiny"
"type": "undead"
"alignment": "Chaotic Good"
"ac": !!int "19"
"hp": !!int "22"
"hit_dice": "9d4"
"stats":
- !!int "1"
- !!int "28"
- !!int "10"
- !!int "13"
- !!int "14"
- !!int "11"
"speed": "0 ft., fly 50 ft. (hover)"
"damage_resistances": "acid; cold; fire; necrotic; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"damage_immunities": "lightning, poison"
"condition_immunities": "[exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [grappled](3-Mechanics/CLI/rules/conditions.md#Grappled), [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned), [prone](3-Mechanics/CLI/rules/conditions.md#Prone),\
  \ [restrained](3-Mechanics/CLI/rules/conditions.md#Restrained), [unconscious](3-Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "the languages it knew in life"
"cr": "2"
"traits":
- "desc": "As a bonus action, the will-o'-wells can target one creature it can see\
    \ within 5 feet of it that has 0 hit points and is still alive. The target must\
    \ succeed on a DC 10 Constitution saving throw against this magic or die. If the\
    \ target dies, the will-o'-wells regains dice:3d6|noform|noparens|avg|text(10)\
    \ (3d6) hit points."
  "name": "Consume Life"
- "desc": "The will-o'-wells can't wear or carry anything."
  "name": "Ephemeral"
- "desc": "The will-o'-wells can move through other creatures and objects as if they\
    \ were difficult terrain. It takes dice:1d10|noform|noparens|avg|text(5) (1d10)\
    \ force damage if it ends its turn inside an object."
  "name": "Incorporeal Movement"
- "desc": "The will-o'-wells sheds bright light in a 5 to 20-foot radius and dim light\
    \ for an additional number of ft. equal to the chosen radius. The will-o'-wells\
    \ can alter the radius as a bonus action."
  "name": "Variable Illumination"
"actions":
- "desc": "Melee Spell Attack: dice:1d20+4|noform|noparens|text(+4) to hit, reach\
    \ 5 ft., one creature. Hit: dice:2d8|noform|noparens|avg|text(9) (2d8) lightning\
    \ damage."
  "name": "Shock"
- "desc": "The will-o'-wells and its light magically become [invisible](3-Mechanics/CLI/rules/conditions.md#Invisible)\
    \ until it attacks or uses its Consume Life, or until its [concentration](3-Mechanics/CLI/rules/conditions.md#Concentration)\
    \ ends (as if [concentrating](3-Mechanics/CLI/rules/conditions.md#Concentration)\
    \ on a spell)."
  "name": "Invisibility"
- "desc": "The will-o'-wells grants a boon to one creature it can see within 5 feet\
    \ of it that isn't an Undead. The boon's recipient gains a dice:d4|noform|noparens|avg\
    \ (d4) and can, at any time within the next 24 hours, roll this die and add\
    \ the number rolled to one ability check, attack roll, or saving throw made by\
    \ it. No creature can have more than one of these magic boons at a time."
  "name": "Magic Boon (Recharges after a Long Rest)"
"source":
- "WBtW"
"image": "3-Mechanics/CLI/bestiary/undead/token/will-o-wells-wbtw.webp"
```
^statblock