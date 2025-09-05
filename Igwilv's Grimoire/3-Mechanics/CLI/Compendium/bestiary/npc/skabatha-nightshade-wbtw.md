---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey/hag
statblock: inline
statblock-link: "#^statblock"
aliases:
- Skabatha Nightshade
---
# [Skabatha Nightshade](3-Mechanics\CLI\Compendium\bestiary\npc/skabatha-nightshade-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 218*  

Skabatha is the oldest member of the Hourglass Coven. Better known as Granny Nightshade, she offers her assistance to those who are haunted by regret. Her deals often result in cruel twists; for example, a petitioner who asks to be reunited with a lost love might be transformed into one of their loved one's cherished items, such as a favorite bonnet.

Skabatha assumes the guise of an old toymaker. Part toy herself, she has a windup key between her hunched shoulders that rotates quickly when she's in a good mood and slows down as her mood sours. When she is furious, the key comes to a dead stop.

```statblock
"name": "Skabatha Nightshade (WBtW)"
"size": "Medium"
"type": "fey"
"subtype": "hag"
"alignment": "Neutral Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "150"
"hit_dice": "20d8 + 60"
"modifier": !!int "-1"
"stats":
  - !!int "18"
  - !!int "9"
  - !!int "16"
  - !!int "12"
  - !!int "16"
  - !!int "15"
"speed": "30 ft."
"saves":
  - "constitution": !!int "6"
  - "intelligence": !!int "4"
  - "wisdom": !!int "6"
  - "charisma": !!int "5"
"skillsaves":
  - "name": "[Arcana](/3-Mechanics/CLI/Rules/skills.md#Arcana)"
    "desc": "+7"
  - "name": "[Deception](/3-Mechanics/CLI/Rules/skills.md#Deception)"
    "desc": "+5"
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Stealth](/3-Mechanics/CLI/Rules/skills.md#Stealth)"
    "desc": "+2"
"senses": "truesight 60 ft., passive Perception 16"
"languages": "Common, Elvish, Infernal, Sylvan"
"cr": "8"
"traits":
  - "desc": "Skabatha is immune to any effect that would age her, and she can't die\
      \ from old age."
    "name": "Boon of Immortality"
  - "desc": "The first creature that Skabatha sees after she finishes a long rest\
      \ is [invisible](/3-Mechanics/CLI/Rules/conditions.md#Invisible) to her. She\
      \ can't remember seeing the creature or perceive it using her truesight until\
      \ the end of her next long rest."
    "name": "Forgetfulness"
"actions":
  - "desc": "Skabatha makes two Claw attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 25\
      \ (6d6 + 4) poison damage."
    "name": "Claw"
  - "desc": "Skabatha casts one of the following spells, requiring no material components\
      \ and using Wisdom as the spellcasting ability (spell save DC 14):\n\nAt will:\
      \ [detect magic](/3-Mechanics/CLI/Compendium/spells/detect-magic.md), [druidcraft](/3-Mechanics/CLI/Compendium/spells/druidcraft.md),\
      \ [speak with animals](/3-Mechanics/CLI/Compendium/spells/speak-with-animals.md)\n\
      \n2/day each: [polymorph](/3-Mechanics/CLI/Compendium/spells/polymorph.md),\
      \ [remove curse](/3-Mechanics/CLI/Compendium/spells/remove-curse.md), [speak\
      \ with plants](/3-Mechanics/CLI/Compendium/spells/speak-with-plants.md)\n\n\
      1/day: [awaken](/3-Mechanics/CLI/Compendium/spells/awaken.md) (as an action),\
      \ [plane shift](/3-Mechanics/CLI/Compendium/spells/plane-shift.md) (self only)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "Skabatha magically shrinks herself to Tiny size (between 4 and 8 inches\
      \ tall) or returns to her normal size. If Skabatha lacks the room to return\
      \ to her normal size, she attains the maximum size possible in the space available.\
      \ Anything she is wearing or carrying changes size along with her.\n\nAs a Tiny\
      \ creature, Skabatha deals 2 (d4) poison damage when she hits with a Claw attack.\
      \ She has advantage on Dexterity ([Stealth](/3-Mechanics/CLI/Rules/skills.md#Stealth))\
      \ checks, and disadvantage on Strength checks and Strength saving throws. Her\
      \ statistics otherwise remain unchanged."
    "name": "Alter Size"
"source":
  - "WBtW"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/skabatha-nightshade-wbtw.webp"
```
^statblock