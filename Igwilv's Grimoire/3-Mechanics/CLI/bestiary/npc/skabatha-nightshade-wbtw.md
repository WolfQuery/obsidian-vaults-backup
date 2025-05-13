---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey/hag
statblock: inline
aliases: ["Skabatha Nightshade"]
---
# [Skabatha Nightshade](3-Mechanics\CLI\bestiary\npc/skabatha-nightshade-wbtw.md)
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
"stats":
- !!int "18"
- !!int "9"
- !!int "16"
- !!int "12"
- !!int "16"
- !!int "15"
"speed": "30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "6"
  "Intelligence": !!int "4"
  "Constitution": !!int "6"
"skillsaves":
  "Deception": !!int "5"
  "Stealth": !!int "2"
  "Perception": !!int "6"
  "Arcana": !!int "7"
"senses": "truesight 60 ft., passive Perception 16"
"languages": "Common, Elvish, Infernal, Sylvan"
"cr": "8"
"traits":
- "desc": "Skabatha casts one of the following spells, requiring no material components\
    \ and using Wisdom as the spellcasting ability (spell save DC 14):\n\nAt will:\
    \ [detect magic](3-Mechanics/CLI/spells/detect-magic.md), [druidcraft](3-Mechanics/CLI/spells/druidcraft.md),\
    \ [speak with animals](3-Mechanics/CLI/spells/speak-with-animals.md)\n\n1/day:\
    \ [awaken](3-Mechanics/CLI/spells/awaken.md) (as an action), [plane shift](3-Mechanics/CLI/spells/plane-shift.md)\
    \ (self only)\n\n2/day each: [polymorph](3-Mechanics/CLI/spells/polymorph.md),\
    \ [remove curse](3-Mechanics/CLI/spells/remove-curse.md), [speak with plants](3-Mechanics/CLI/spells/speak-with-plants.md)"
  "name": "Spellcasting"
- "desc": "Skabatha is immune to any effect that would age her, and she can't die\
    \ from old age."
  "name": "Boon of Immortality"
- "desc": "The first creature that Skabatha sees after she finishes a long rest is\
    \ [invisible](3-Mechanics/CLI/rules/conditions.md#Invisible) to her. She can't\
    \ remember seeing the creature or perceive it using her truesight until the end\
    \ of her next long rest."
  "name": "Forgetfulness"
"actions":
- "desc": "Skabatha makes two Claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice:1d20+7|noform|noparens|text(+7) to hit, reach\
    \ 5 ft., one creature. Hit: dice:6d6+4|noform|noparens|avg|text(25) (6d6\
    \ + 4) poison damage."
  "name": "Claw"
"bonus_actions":
- "desc": "Skabatha magically shrinks herself to Tiny size (between 4 and 8 inches\
    \ tall) or returns to her normal size. If Skabatha lacks the room to return to\
    \ her normal size, she attains the maximum size possible in the space available.\
    \ Anything she is wearing or carrying changes size along with her.\n\nAs a Tiny\
    \ creature, Skabatha deals dice:1d4|noform|noparens|avg|text(2) (1d4) poison\
    \ damage when she hits with a Claw attack. She has advantage on Dexterity ([Stealth](3-Mechanics/CLI/rules/skills.md#Stealth))\
    \ checks, and disadvantage on Strength checks and Strength saving throws. Her\
    \ statistics otherwise remain unchanged."
  "name": "Alter Size"
"source":
- "WBtW"
"image": "3-Mechanics/CLI/bestiary/npc/token/skabatha-nightshade-wbtw.webp"
```
^statblock