---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdmm
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Shadow Assassin
---
# [Shadow Assassin](3-Mechanics\CLI\Compendium\bestiary\undead/shadow-assassin-wdmm.md)
*Source: Waterdeep: Dungeon of the Mad Mage p. 316*  

A shadow assassin looks like an undead shadow (as described in the *Monster Manual*) that wields shortswords also made of shadow. It exists only to slay the living.

```statblock
"name": "Shadow Assassin (WDMM)"
"size": "Medium"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "14"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"modifier": !!int "4"
"stats":
  - !!int "6"
  - !!int "19"
  - !!int "14"
  - !!int "13"
  - !!int "12"
  - !!int "14"
"speed": "40 ft."
"saves":
  - "dexterity": !!int "8"
  - "intelligence": !!int "5"
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+9"
  - "name": "[Stealth](/3-Mechanics/CLI/Rules/skills.md#Stealth)"
    "desc": "+12"
"damage_vulnerabilities": "radiant"
"damage_resistances": "acid; cold; fire; lightning; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[exhaustion](/3-Mechanics/CLI/Rules/conditions.md#Exhaustion),\
  \ [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened), [grappled](/3-Mechanics/CLI/Rules/conditions.md#Grappled),\
  \ [paralyzed](/3-Mechanics/CLI/Rules/conditions.md#Paralyzed), [petrified](/3-Mechanics/CLI/Rules/conditions.md#Petrified),\
  \ [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned), [prone](/3-Mechanics/CLI/Rules/conditions.md#Prone),\
  \ [restrained](/3-Mechanics/CLI/Rules/conditions.md#Restrained)"
"senses": "darkvision 60 ft., passive Perception 19"
"languages": "understands the languages it knew in life but can't speak"
"cr": "9"
"traits":
  - "desc": "The assassin can move through a space as narrow as 1 inch wide without\
      \ squeezing."
    "name": "Amorphous"
  - "desc": "While in dim light or darkness, the assassin can take the Hide action\
      \ as a bonus action."
    "name": "Shadow Stealth"
  - "desc": "While in sunlight, the assassin has disadvantage on attack rolls, ability\
      \ checks, and saving throws."
    "name": "Sunlight Weakness"
"actions":
  - "desc": "The assassin makes two Shadow Blade attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6\
      \ + 4) piercing damage plus 10 (3d6) necrotic damage. Unless the target is immune\
      \ to necrotic damage, the target's Strength score is reduced by d4 each time\
      \ it is hit by this attack. The target dies if its Strength is reduced to 0.\
      \ The reduction lasts until the target finishes a short or long rest. If a non-evil\
      \ humanoid dies from this attack, a shadow (see the Monster Manual) rises from\
      \ the corpse d4 hours later."
    "name": "Shadow Blade"
"source":
  - "WDMM"
"image": "/3-Mechanics/CLI/Compendium/bestiary/undead/token/shadow-assassin-wdmm.webp"
```
^statblock