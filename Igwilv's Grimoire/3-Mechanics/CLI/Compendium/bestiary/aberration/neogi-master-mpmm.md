---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration/warlock
statblock: inline
statblock-link: "#^statblock"
aliases:
- Neogi Master
---
# [Neogi Master](3-Mechanics\CLI\Compendium\bestiary\aberration/neogi-master-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 192*  

Neogi masters use magic, as a result of a pact between neogi and aberrant entities they met during their journey from their home world. These entities—known by such names as Acamar, Caiphon, Gibbeth, and Hadar—resemble stars and embody the essence of evil.

## Neogi

> [!quote] A quote from Mordenkainen  
> 
> Only the malevolent or the desperate do business with neogi. I generally advise against working with beings who view you as property or prey.

A neogi looks like an outsize spider with an eel's neck and head. It can poison the body and the mind of its targets and can subjugate even beings that are physically superior.

Neogi usually dwell in far-flung locations on the Material Plane, as well as in the Astral Plane and the Ethereal Plane. They left their home world long ago to conquer and devour creatures in other realms. During this era, they dominated umber hulks and used them to build sleek, spidery ships capable of traversing the multiverse.

```statblock
"name": "Neogi Master (MPMM)"
"size": "Medium"
"type": "aberration"
"subtype": "warlock"
"alignment": "Typically  Lawful Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "71"
"hit_dice": "11d8 + 22"
"modifier": !!int "3"
"stats":
  - !!int "6"
  - !!int "16"
  - !!int "14"
  - !!int "16"
  - !!int "12"
  - !!int "18"
"speed": "30 ft., climb 30 ft."
"saves":
  - "wisdom": !!int "3"
"skillsaves":
  - "name": "[Arcana](/3-Mechanics/CLI/Rules/skills.md#Arcana)"
    "desc": "+5"
  - "name": "[Deception](/3-Mechanics/CLI/Rules/skills.md#Deception)"
    "desc": "+6"
  - "name": "[Intimidation](/3-Mechanics/CLI/Rules/skills.md#Intimidation)"
    "desc": "+6"
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Persuasion](/3-Mechanics/CLI/Rules/skills.md#Persuasion)"
    "desc": "+6"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "Common, Deep Speech, Undercommon, telepathy 30 ft."
"cr": "4"
"traits":
  - "desc": "Magical darkness doesn't impede the neogi's [darkvision](/3-Mechanics/CLI/Rules/senses.md#Darkvision)."
    "name": "Devil's Sight"
  - "desc": "The neogi has advantage on saving throws against being [charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed)\
      \ or [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened), and magic\
      \ can't put the neogi to sleep."
    "name": "Mental Fortitude"
  - "desc": "The neogi can climb difficult surfaces, including upside down on ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
"actions":
  - "desc": "The neogi makes one Bite attack and one Claw attack, or it makes two\
      \ Tentacle of Hadar attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
      \ + 3) piercing damage plus 14 (4d6) poison damage, and the target must succeed\
      \ on a DC 12 Constitution saving throw or become [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned)\
      \ for 1 minute. A target can repeat the saving throw at the end of each of its\
      \ turns, ending the effect on itself on a success."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4\
      \ + 3) piercing damage."
    "name": "Claw"
  - "desc": "Ranged Spell Attack: +6 to hit, range 120 ft., one target. Hit: 14\
      \ (3d6 + 4) necrotic damage, and the target can't take reactions until the end\
      \ of the neogi's next turn, as a spectral tentacle clings to the target."
    "name": "Tentacle of Hadar"
  - "desc": "The neogi casts one of the following spells, using Charisma as the spellcasting\
      \ ability (spell save DC 14):\n\nAt will: [guidance](/3-Mechanics/CLI/Compendium/spells/guidance.md),\
      \ [mage hand](/3-Mechanics/CLI/Compendium/spells/mage-hand.md), [minor illusion](/3-Mechanics/CLI/Compendium/spells/minor-illusion.md),\
      \ [prestidigitation](/3-Mechanics/CLI/Compendium/spells/prestidigitation.md)\n\
      \n1/day each: [dimension door](/3-Mechanics/CLI/Compendium/spells/dimension-door.md),\
      \ [hold person](/3-Mechanics/CLI/Compendium/spells/hold-person.md), [hunger\
      \ of Hadar](/3-Mechanics/CLI/Compendium/spells/hunger-of-hadar.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The neogi targets one creature it can see within 30 feet of it. The target\
      \ must succeed on a DC 14 Wisdom saving throw or be magically [charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed)\
      \ by the neogi for 1 day, or until the neogi dies or is more than 1 mile from\
      \ the target. The [charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed) target\
      \ obeys the neogi's commands and can't take reactions, and the neogi and the\
      \ target can communicate telepathically with each other at a distance of up\
      \ to 1 mile. Whenever the [charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed)\
      \ target takes damage, it can repeat the saving throw, ending the effect on\
      \ itself on a success."
    "name": "Enslave (Recharges after a Short or Long Rest)"
"source":
  - "MPMM"
"image": "/3-Mechanics/CLI/Compendium/bestiary/aberration/token/neogi-master-mpmm.webp"
```
^statblock

## Environment

hill, underdark