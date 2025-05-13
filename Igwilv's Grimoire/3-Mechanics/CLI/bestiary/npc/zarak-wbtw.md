---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/orc
statblock: inline
aliases: ["Zarak"]
---
# [Zarak](3-Mechanics\CLI\bestiary\npc/zarak-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 222*  

Zarak is an assassin without honor or conscience. Unusually short of stature for someone of orcish heritage, he might pass for an ugly, beardless dwarf were it not for his rotting tusks and grayish pallor. The only thing he loves is money, and he wouldn't hesitate to stab allies in the back if they came between him and the riches he covets.

```statblock
"name": "Zarak (WBtW)"
"size": "Medium"
"type": "humanoid"
"subtype": "orc"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"ac_class": "[leather armor](3-Mechanics/CLI/items/leather-armor.md)"
"hp": !!int "37"
"hit_dice": "5d8 + 15"
"stats":
- !!int "13"
- !!int "16"
- !!int "16"
- !!int "11"
- !!int "15"
- !!int "6"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "5"
  "Intelligence": !!int "2"
"skillsaves":
  "Stealth": !!int "7"
  "Insight": !!int "6"
  "Perception": !!int "6"
  "Acrobatics": !!int "7"
"senses": "darkvision 60, passive Perception 16"
"languages": "Common, Orc"
"cr": "2"
"traits":
- "desc": "Zarak carries a [potion of invisibility](3-Mechanics/CLI/items/potion-of-invisibility.md)."
  "name": "Special Equipment"
"actions":
- "desc": "Zarak makes two Dagger attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: dice:1d20+5|noform|noparens|text(+5)\
    \ to hit, reach 5 ft. or range 20/60 ft., one target. Hit: dice:1d4+3|noform|noparens|avg|text(5)\
    \ (1d4 + 3) piercing damage, plus an extra dice:2d4|noform|noparens|avg|text(5)\
    \ (2d4) piercing damage if the target is a creature and Zarak has at least 18\
    \ hit points."
  "name": "Dagger"
- "desc": "Melee Weapon Attack: dice:1d20+5|noform|noparens|text(+5) to hit, reach\
    \ 5 ft., one Humanoid. Hit: dice:2d4+3|noform|noparens|avg|text(8) (2d4 +\
    \ 3) slashing damage, and the target is [grappled](3-Mechanics/CLI/rules/conditions.md#Grappled)\
    \ (escape DC 11). Until this grapple ends, the target takes dice:2d4+3|noform|noparens|avg|text(8)\
    \ (2d4 + 3) slashing damage at the start of each of its turns, and Zarak can't\
    \ grapple another creature or use Assassin's Whim."
  "name": "Garrote"
"bonus_actions":
- "desc": "Zarak takes the Dash, Disengage, or Hide action."
  "name": "Assassin's Whim"
"reactions":
- "desc": "Zarak halves the damage he takes from an attack made against him, provided\
    \ he can see the attacker."
  "name": "Uncanny Dodge"
"source":
- "WBtW"
"image": "3-Mechanics/CLI/bestiary/npc/token/zarak-wbtw.webp"
```
^statblock