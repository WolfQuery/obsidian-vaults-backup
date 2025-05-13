---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Drider Spellcaster"]
---
# [Drider Spellcaster](3-Mechanics\CLI\bestiary\monstrosity/drider-spellcaster.md)
*Source: Monster Manual p. 120. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*  

```statblock
"name": "Drider Spellcaster"
"size": "Large"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "123"
"hit_dice": "13d10 + 52"
"stats":
- !!int "16"
- !!int "16"
- !!int "18"
- !!int "13"
- !!int "16"
- !!int "12"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  "Stealth": !!int "9"
  "Perception": !!int "5"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": "Elvish, Undercommon"
"cr": "6"
"traits":
- "desc": "The drider is a 7th-level spellcaster. Its spellcasting ability is Wisdom\
    \ (spell save DC 14, dice:1d20+6|noform|noparens|text(+6) to hit with spell\
    \ attacks). The drider has the following spells prepared from the cleric spell\
    \ list:\n\nCantrips (at will): [poison spray](3-Mechanics/CLI/spells/poison-spray.md),\
    \ [thaumaturgy](3-Mechanics/CLI/spells/thaumaturgy.md)\n\n1st level (4 slots):\
    \ [bane](3-Mechanics/CLI/spells/bane.md), [detect magic](3-Mechanics/CLI/spells/detect-magic.md),\
    \ [sanctuary](3-Mechanics/CLI/spells/sanctuary.md)\n\n2nd level (3 slots):\
    \ [hold person](3-Mechanics/CLI/spells/hold-person.md), [silence](3-Mechanics/CLI/spells/silence.md)\n\
    \n3rd level (3 slots): [clairvoyance](3-Mechanics/CLI/spells/clairvoyance.md),\
    \ [dispel magic](3-Mechanics/CLI/spells/dispel-magic.md)\n\n4th level (2 slots):\
    \ [divination](3-Mechanics/CLI/spells/divination.md), [freedom of movement](3-Mechanics/CLI/spells/freedom-of-movement.md)"
  "name": "Spellcasting"
- "desc": "The drider has advantage on saving throws against being [charmed](3-Mechanics/CLI/rules/conditions.md#Charmed),\
    \ and magic can't put the drider to sleep."
  "name": "Fey Ancestry"
- "desc": "The drider can climb difficult surfaces, including upside down on ceilings,\
    \ without needing to make an ability check."
  "name": "Spider Climb"
- "desc": "While in sunlight, the drider has disadvantage on attack rolls, as well\
    \ as on Wisdom ([Perception](3-Mechanics/CLI/rules/skills.md#Perception)) checks\
    \ that rely on sight."
  "name": "Sunlight Sensitivity"
- "desc": "The drider ignores movement restrictions caused by webbing."
  "name": "Web Walker"
"actions":
- "desc": "The drider makes three attacks, either with its longsword or its longbow.\
    \ It can replace one of those attacks with a bite attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice:1d20+6|noform|noparens|text(+6) to hit, reach\
    \ 5 ft., one creature. Hit: dice:1d4|noform|noparens|avg|text(2) (1d4) piercing\
    \ damage plus dice:2d8|noform|noparens|avg|text(9) (2d8) poison damage."
  "name": "Bite"
- "desc": "Melee Weapon Attack: dice:1d20+6|noform|noparens|text(+6) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d8+3|noform|noparens|avg|text(7) (1d8 + 3)\
    \ slashing damage, or dice:1d10+3|noform|noparens|avg|text(8) (1d10 + 3) slashing\
    \ damage if used with two hands."
  "name": "Longsword"
- "desc": "Ranged Weapon Attack: dice:1d20+6|noform|noparens|text(+6) to hit,\
    \ range 150/600 ft., one target. Hit: dice:1d8+3|noform|noparens|avg|text(7)\
    \ (1d8 + 3) piercing damage plus dice:1d8|noform|noparens|avg|text(4) (1d8)\
    \ poison damage."
  "name": "Longbow"
"source":
- "MM"
```
^statblock

## Environment

underdark