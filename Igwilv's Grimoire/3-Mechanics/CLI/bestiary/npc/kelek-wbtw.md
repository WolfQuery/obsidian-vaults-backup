---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
- ttrpg-cli/monster/type/humanoid/sorcerer
statblock: inline
aliases: ["Kelek"]
---
# [Kelek](3-Mechanics\CLI\bestiary\npc/kelek-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 219*  

Kelek is a greedy, narcissistic sociopath who revels in chaos but is a coward at heart. The fact that he's highly intelligent makes him even more dangerous. More than anything, he wants the staff of power in the possession of his most hated foe, Ringlerun (described later in this appendix).

```statblock
"name": "Kelek (WBtW)"
"size": "Medium"
"type": "humanoid"
"subtype": "human, sorcerer"
"alignment": "Chaotic Evil"
"ac": !!int "12"
"ac_class": "[bracers of defense](3-Mechanics/CLI/items/bracers-of-defense.md)"
"hp": !!int "45"
"hit_dice": "7d8 + 14"
"stats":
- !!int "15"
- !!int "10"
- !!int "14"
- !!int "15"
- !!int "13"
- !!int "17"
"speed": "30 ft."
"saves":
  "Charisma": !!int "6"
  "Constitution": !!int "5"
"skillsaves":
  "Intimidation": !!int "6"
  "Deception": !!int "6"
"senses": "passive Perception 11"
"languages": "Common, Draconic, Elvish"
"cr": "5"
"traits":
- "desc": "Kelek casts one of the following spells, using Charisma as the spellcasting\
    \ ability (spell save DC 14):\n\nAt will: [light](3-Mechanics/CLI/spells/light.md),\
    \ [mage hand](3-Mechanics/CLI/spells/mage-hand.md), [prestidigitation](3-Mechanics/CLI/spells/prestidigitation.md)\n\
    \n1/day each: [dominate beast](3-Mechanics/CLI/spells/dominate-beast.md),\
    \ [fly](3-Mechanics/CLI/spells/fly.md), [mirror image](3-Mechanics/CLI/spells/mirror-image.md),\
    \ [web](3-Mechanics/CLI/spells/web.md)"
  "name": "Spellcasting"
- "desc": "Kelek wears [bracers of defense](3-Mechanics/CLI/items/bracers-of-defense.md)\
    \ and carries a [staff of striking](3-Mechanics/CLI/items/staff-of-striking.md)\
    \ with 10 charges. The staff regains dice:1d6+4|noform|noparens|avg (1d6 +\
    \ 4) expended charges daily at dawn. If its last charge is expended, roll a dice:d20|noform|noparens|avg\
    \ (d20); on a 1, the staff becomes a nonmagical quarterstaff."
  "name": "Special Equipment"
"actions":
- "desc": "Kelek makes three attacks using Sorcerer's Bolt, Staff of Striking, or\
    \ a combination of them. He can replace one of the attacks with a use of Spellcasting."
  "name": "Multiattack"
- "desc": "Melee or Ranged Spell Attack: dice:1d20+6|noform|noparens|text(+6)\
    \ to hit, reach 5 ft. or range 60 ft., one target. Hit: dice:2d12|noform|noparens|avg|text(13)\
    \ (2d12) force damage."
  "name": "Sorcerer's Bolt"
- "desc": "Melee Weapon Attack: dice:1d20+8|noform|noparens|text(+8) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d6+5|noform|noparens|avg|text(8) (1d6 + 5)\
    \ bludgeoning damage, or dice:1d8+5|noform|noparens|avg|text(9) (1d8 + 5)\
    \ bludgeoning damage when used with two hands, and Kelek can expend up to 3 of\
    \ the staff's charges, dealing an extra dice:1d6|noform|noparens|avg|text(3)\
    \ (1d6) force damage for each expended charge."
  "name": "Staff of Striking"
- "desc": "Kelek creates a magical explosion of fire centered on a point he can see\
    \ within 120 feet of him. Each creature in a 20-foot-radius sphere centered on\
    \ that point must make a DC 14 Dexterity saving throw, taking dice:10d6|noform|noparens|avg|text(35)\
    \ (10d6) fire damage on a failed save, or half as much damage on a successful\
    \ one."
  "name": "Fiery Explosion (Recharge 4-6)"
"reactions":
- "desc": "When he is hit by an attack, Kelek protects himself with an [invisible](3-Mechanics/CLI/rules/conditions.md#Invisible)\
    \ barrier of magical force. Until the end of his next turn, he gains a +5 bonus\
    \ to AC, including against the triggering attack."
  "name": "Arcane Defense (3/Day)"
"source":
- "WBtW"
"image": "3-Mechanics/CLI/bestiary/npc/token/kelek-wbtw.webp"
```
^statblock