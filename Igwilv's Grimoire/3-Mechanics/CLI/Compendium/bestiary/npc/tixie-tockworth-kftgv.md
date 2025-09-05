---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/kftgv
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/gnome
statblock: inline
statblock-link: "#^statblock"
aliases:
- Tixie Tockworth
---
# [Tixie Tockworth](3-Mechanics\CLI\Compendium\bestiary\npc/tixie-tockworth-kftgv.md)
*Source: Keys from the Golden Vault p. 85*  

Using magic and mechanical know-how, Tixie Tockworth has transformed most of herself into a machine. What was once her torso is now a steel carapace that can discharge jets of scalding steam. Her left arm ends in a humming blade. Her right arm ends in a metal shield. Her eyes are shiny, metallic red orbs that can see through illusions.

In her current form, Tockworth ruthlessly seeks to destroy anyone and anything that stands in the way of her ultimate goal, which is to become a Construct. If she's allowed to continue her work, she will achieve this apotheosis in a matter of weeks, after which her creature type changes to Construct. She also gains immunity to poison damage, as well as immunity to the paralyzed, petrified, and poisoned conditions. Her statistics are otherwise unchanged.

```statblock
"name": "Tixie Tockworth (KftGV)"
"size": "Small"
"type": "humanoid"
"subtype": "gnome"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"ac_class": "natural armor, [shield](/3-Mechanics/CLI/Compendium/items/shield.md)"
"hp": !!int "75"
"hit_dice": "10d6 + 40"
"modifier": !!int "1"
"stats":
  - !!int "16"
  - !!int "13"
  - !!int "18"
  - !!int "17"
  - !!int "9"
  - !!int "10"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "6"
  - "wisdom": !!int "2"
"skillsaves":
  - "name": "[Arcana](/3-Mechanics/CLI/Rules/skills.md#Arcana)"
    "desc": "+9"
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+2"
"senses": "truesight 60 ft., passive Perception 12"
"languages": "Common, Gnomish, Terran, Undercommon"
"cr": "7"
"traits":
  - "desc": "Tockworth generates a magical force field around herself. This force\
      \ field has 15 hit points and regains all its hit points at the start of each\
      \ of Tockworth's turns, but it ceases to function if Tockworth drops to 0 hit\
      \ points. Any damage Tockworth takes is subtracted from the force field's hit\
      \ points first. Each time the force field regains hit points, the following\
      \ conditions end on Tockworth: [grappled](/3-Mechanics/CLI/Rules/conditions.md#Grappled),\
      \ [restrained](/3-Mechanics/CLI/Rules/conditions.md#Restrained), and [stunned](/3-Mechanics/CLI/Rules/conditions.md#Stunned)."
    "name": "Force Field"
"actions":
  - "desc": "Tockworth makes three Shortsword or Lightning Discharge attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6\
      \ + 3) piercing damage plus 10 (3d6) force damage."
    "name": "Shortsword"
  - "desc": "Ranged Spell Attack: +6 to hit, range 60 ft., one creature. Hit:\
      \ 16 (3d10) lightning damage."
    "name": "Lightning Discharge"
  - "desc": "Tockworth casts one of the following spells, requiring no material components\
      \ and using Intelligence as the spellcasting ability (spell save DC 14):\n\n\
      At will: [nondetection](/3-Mechanics/CLI/Compendium/spells/nondetection.md)\
      \ (self only)\n\n2/day: [dimension door](/3-Mechanics/CLI/Compendium/spells/dimension-door.md)\n\
      \n1/day each: [blindness/deafness](/3-Mechanics/CLI/Compendium/spells/blindness-deafness.md),\
      \ [blur](/3-Mechanics/CLI/Compendium/spells/blur.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "Tockworth emits a jet of piping-hot steam in a 15-foot cone. Each creature\
      \ in that cone must make a DC 15 Dexterity saving throw, taking 10 (3d6) fire\
      \ damage on a failed save, or half as much damage on a successful one."
    "name": "Scalding Steam (Recharge 5-6)"
"source":
  - "KftGV"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/tixie-tockworth-kftgv.webp"
```
^statblock