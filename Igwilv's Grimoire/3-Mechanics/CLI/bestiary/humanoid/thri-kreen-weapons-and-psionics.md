---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/thri-kreen
statblock: inline
aliases: ["Thri-kreen (Weapons and Psionics)"]
---
# [Thri-kreen (Weapons and Psionics)](3-Mechanics\CLI\bestiary\humanoid/thri-kreen-weapons-and-psionics.md)
*Source: Monster Manual p. 288*  

```statblock
"name": "Thri-kreen (Weapons and Psionics)"
"size": "Medium"
"type": "humanoid"
"subtype": "thri-kreen"
"alignment": "Chaotic Neutral"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "12"
- !!int "15"
- !!int "13"
- !!int "8"
- !!int "12"
- !!int "7"
"speed": "40 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
  "Survival": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Thri-kreen"
"cr": "1"
"traits":
- "desc": "The thri-kreen's innate spellcasting ability is Wisdom. The thri-kreen\
    \ can innately cast the following spells, requiring no components:\n\nAt will:\
    \ [mage hand](3-Mechanics/CLI/spells/mage-hand.md) (the hand is [invisible](3-Mechanics/CLI/rules/conditions.md#Invisible))\n\
    \n1/day: [invisibility](3-Mechanics/CLI/spells/invisibility.md) (self only)\n\
    \n2/day each: [blur](3-Mechanics/CLI/spells/blur.md), [magic weapon](3-Mechanics/CLI/spells/magic-weapon.md)"
  "name": "Innate Spellcasting (Psionics)"
- "desc": "The thri-kreen can change the color of its carapace to match the color\
    \ and texture of its surroundings. As a result, it has advantage on Dexterity\
    \ ([Stealth](3-Mechanics/CLI/rules/skills.md#Stealth)) checks made to hide."
  "name": "Chameleon Carapace"
- "desc": "The thri-kreen's long jump is up to 30 feet and its high jump is up to\
    \ 15 feet, with or without a running start."
  "name": "Standing Leap"
"actions":
- "desc": "The thri-kreen makes two attacks: one with its bite and one with its claws."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice:1d20+3|noform|noparens|text(+3) to hit, reach\
    \ 5 ft., one creature. Hit: dice:1d6+1|noform|noparens|avg|text(4) (1d6 +\
    \ 1) piercing damage, and the target must succeed on a DC 11 Constitution saving\
    \ throw or be [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned) for 1 minute.\
    \ If the saving throw fails by 5 or more, the target is also [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed)\
    \ while [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned) in this way.\
    \ The [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned) target can repeat\
    \ the saving throw at the end of each of its turns, ending the effect on itself\
    \ on a success."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice:1d20+3|noform|noparens|text(+3) to hit, reach\
    \ 5 ft., one target. Hit: dice:2d4+1|noform|noparens|avg|text(6) (2d4 + 1)\
    \ slashing damage."
  "name": "Claws"
- "desc": "The thri-kreen makes two gythka attacks or two chatkcha attacks."
  "name": "Weapons Multiattack"
- "desc": "Melee Weapon Attack: dice:1d20+3|noform|noparens|text(+3) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d8+1|noform|noparens|avg|text(5) (1d8 + 1)\
    \ slashing damage."
  "name": "Gythka"
- "desc": "Ranged Weapon Attack: dice:1d20+4|noform|noparens|text(+4) to hit,\
    \ range 30/120 ft., one target. Hit: dice:1d6+2|noform|noparens|avg|text(5)\
    \ (1d6 + 2) slashing damage."
  "name": "Chatkcha"
"source":
- "MM"
```
^statblock

## Environment

grassland, desert