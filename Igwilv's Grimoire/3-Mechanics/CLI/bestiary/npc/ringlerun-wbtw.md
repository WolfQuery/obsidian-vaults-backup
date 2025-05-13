---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
- ttrpg-cli/monster/type/humanoid/wizard
statblock: inline
aliases: ["Ringlerun"]
---
# [Ringlerun](3-Mechanics\CLI\bestiary\npc/ringlerun-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 227*  

Ringlerun became an adventurer to better satisfy his craving for arcane knowledge. One of his adventures took him into an underwater tomb, where he tricked a marid into surrendering a staff of power. This staff greatly increased Ringlerun's capabilities and made him the envy of many rival spellcasters.

Ringlerun has a good heart, but he's easily distracted by intellectual pursuits. He would rather spend time in quiet contemplation or reading than in frivolous conversation.

```statblock
"name": "Ringlerun (WBtW)"
"size": "Medium"
"type": "humanoid"
"subtype": "human, wizard"
"alignment": "Lawful Good"
"ac": !!int "12"
"ac_class": "[staff of power](3-Mechanics/CLI/items/staff-of-power.md)"
"hp": !!int "42"
"hit_dice": "12d8 - 12"
"stats":
- !!int "9"
- !!int "10"
- !!int "9"
- !!int "17"
- !!int "13"
- !!int "11"
"speed": "30 ft."
"saves":
  "Charisma": !!int "3"
  "Dexterity": !!int "3"
  "Wisdom": !!int "4"
  "Intelligence": !!int "6"
  "Strength": !!int "2"
  "Constitution": !!int "2"
"skillsaves":
  "History": !!int "6"
  "Arcana": !!int "6"
"senses": "passive Perception 11"
"languages": "Common, Draconic, Dwarvish, Elvish"
"cr": "5"
"traits":
- "desc": "Ringlerun casts one of the following spells, using Intelligence as the\
    \ spellcasting ability (spell save DC 14):\n\nAt will: [light](3-Mechanics/CLI/spells/light.md),\
    \ [mage hand](3-Mechanics/CLI/spells/mage-hand.md), [prestidigitation](3-Mechanics/CLI/spells/prestidigitation.md)\n\
    \n1/day each: [banishment](3-Mechanics/CLI/spells/banishment.md), [dispel\
    \ magic](3-Mechanics/CLI/spells/dispel-magic.md), [fly](3-Mechanics/CLI/spells/fly.md),\
    \ [knock](3-Mechanics/CLI/spells/knock.md)\n\n3/day each: [charm person](3-Mechanics/CLI/spells/charm-person.md),\
    \ [detect magic](3-Mechanics/CLI/spells/detect-magic.md), [sleep](3-Mechanics/CLI/spells/sleep.md)"
  "name": "Spellcasting"
- "desc": "Ringlerun wields a [staff of power](3-Mechanics/CLI/items/staff-of-power.md).\
    \ It has 20 charges when fully charged and regains dice:2d8+4|noform|noparens|avg\
    \ (2d8 + 4) expended charges daily at dawn. If its last charge is expended,\
    \ roll a dice:d20|noform|noparens|avg (d20). On a 1, the staff retains its\
    \ +2 bonus to attack and damage rolls but loses its other properties; on a 20,\
    \ it regains dice:1d8+2|noform|noparens|avg (1d8 + 2) charges."
  "name": "Special Equipment"
"actions":
- "desc": "Ringlerun makes three [staff of power](3-Mechanics/CLI/items/staff-of-power.md)\
    \ or Freezing Ray attacks. He can replace one of those attacks with a use of Spellcasting."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice:1d20+4|noform|noparens|text(+4) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d6+1|noform|noparens|avg|text(4) (1d6 + 1)\
    \ bludgeoning damage, or dice:1d8+1|noform|noparens|avg|text(5) (1d8 + 1)\
    \ bludgeoning damage when used with two hands, and Ringlerun can expend 1 of the\
    \ staff's charges to deal an extra dice:1d6|noform|noparens|avg|text(3) (1d6)\
    \ force damage."
  "name": "Staff of Power"
- "desc": "Ranged Spell Attack: dice:1d20+8|noform|noparens|text(+8) to hit, range\
    \ 120 ft., one creature. Hit: dice:6d8|noform|noparens|avg|text(27) (6d8)\
    \ cold damage."
  "name": "Freezing Ray"
- "desc": "While holding his [staff of power](3-Mechanics/CLI/items/staff-of-power.md),\
    \ Ringlerun can expend 1 or more of its charges to cast one of the following spells\
    \ from it (spell save DC 14, dice:1d20+8|noform|noparens|text(+8) to hit with\
    \ spell attacks): cone of cold (dice:8d8|noform|noparens|avg (8d8) cold damage;\
    \ 5 charges), fireball (dice:10d6|noform|noparens|avg (10d6) fire damage;\
    \ 5 charges), globe of invulnerability (6 charges), hold monster (5 charges),\
    \ levitate (2 charges), lightning bolt (dice:10d6|noform|noparens|avg (10d6)\
    \ lightning damage; 5 charges), magic missile (1 charge), ray of enfeeblement\
    \ (1 charge), or wall of force (5 charges)."
  "name": "Staff Spell"
"source":
- "WBtW"
"image": "3-Mechanics/CLI/bestiary/npc/token/ringlerun-wbtw.webp"
```
^statblock