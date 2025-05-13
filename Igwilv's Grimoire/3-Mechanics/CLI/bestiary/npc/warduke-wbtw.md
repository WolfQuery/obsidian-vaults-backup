---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
aliases: ["Warduke"]
---
# [Warduke](3-Mechanics\CLI\bestiary\npc/warduke-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 221*  

Warduke's services as a remorseless killer-for-hire can be easily bought. The evil swordsman serves Kelek as a cohort and adventuring companion from time to time. He isn't terribly bright, which is why he leaves the plotting and scheming to others.

What does Warduke look like under his dread helm? No one knows. He never removes his helmet to reveal his face to others, but the visage beneath is that of a grim, hideously scarred gladiator.

```statblock
"name": "Warduke (WBtW)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"ac_class": "[half plate](3-Mechanics/CLI/items/half-plate-armor.md), [shield](3-Mechanics/CLI/items/shield.md)"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"stats":
- !!int "16"
- !!int "11"
- !!int "14"
- !!int "9"
- !!int "11"
- !!int "11"
"speed": "30 ft."
"saves":
  "Strength": !!int "6"
  "Constitution": !!int "5"
"skillsaves":
  "Intimidation": !!int "3"
  "Athletics": !!int "6"
"senses": "passive Perception 10"
"languages": "Common"
"cr": "5"
"traits":
- "desc": "Warduke wears a dread helm (see appendix A) and wields a [flame tongue\
    \ longsword](3-Mechanics/CLI/items/flame-tongue.md)."
  "name": "Special Equipment"
"actions":
- "desc": "Warduke makes three Flame Tongue or Dagger attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice:1d20+6|noform|noparens|text(+6) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d8+3|noform|noparens|avg|text(7) (1d8 + 3)\
    \ slashing damage, or dice:1d10+3|noform|noparens|avg|text(8) (1d10 + 3) slashing\
    \ damage when used with two hands, plus dice:2d6|noform|noparens|avg|text(7)\
    \ (2d6) fire damage if the weapon is aflame."
  "name": "Flame Tongue"
- "desc": "Melee or Ranged Weapon Attack: dice:1d20+6|noform|noparens|text(+6)\
    \ to hit, reach 5 ft. or range 20/60 ft., one target. Hit: dice:1d4+3|noform|noparens|avg|text(5)\
    \ (1d4 + 3) piercing damage."
  "name": "Dagger"
"bonus_actions":
- "desc": "Warduke ignites or extinguishes his flame tongue longsword. While aflame,\
    \ it sheds bright light in a 40-foot radius and dim light for an additional 40\
    \ feet."
  "name": "Flaming Blade"
- "desc": "Warduke regains 13 hit points."
  "name": "Second Wind (Recharges after a Short or Long Rest)"
"source":
- "WBtW"
"image": "3-Mechanics/CLI/bestiary/npc/token/warduke-wbtw.webp"
```
^statblock