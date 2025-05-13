---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey/hag
statblock: inline
aliases: ["Bavlorna Blightstraw"]
---
# [Bavlorna Blightstraw](3-Mechanics\CLI\bestiary\npc/bavlorna-blightstraw-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 216*  

Younger than Skabatha and older than Endelyn, Bavlorna is called Slack-jawed Lorna because her wide mouth is prone to hang agape. Flies flit in and out of it. She is the hag of the present, the here and now, the moment to moment. Those desperate individuals who seek her out do so to find a remedy for a nagging problem or anxiety. Though she despises unannounced visitors, a tragic tale of woe and misery puts her in a bargaining mood. If these visitors enter into an agreement with Bavlorna, she'll use her powers to resolve their pressing problem in exchange for something of use to her.

```statblock
"name": "Bavlorna Blightstraw (WBtW)"
"size": "Medium"
"type": "fey"
"subtype": "hag"
"alignment": "Neutral Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "110"
"hit_dice": "13d8 + 52"
"stats":
- !!int "22"
- !!int "11"
- !!int "18"
- !!int "16"
- !!int "12"
- !!int "15"
"speed": "30 ft., swim 30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "4"
  "Intelligence": !!int "6"
  "Constitution": !!int "7"
"skillsaves":
  "Deception": !!int "5"
  "Stealth": !!int "3"
  "Perception": !!int "4"
  "Arcana": !!int "9"
"senses": "truesight 60 ft., passive Perception 14"
"languages": "Common, Elvish, Sylvan"
"cr": "7"
"traits":
- "desc": "Bavlorna casts one of the following spells, requiring no material components\
    \ and using Intelligence as the spellcasting ability (spell save DC 14):\n\nAt\
    \ will: [detect magic](3-Mechanics/CLI/spells/detect-magic.md)\n\n1/day:\
    \ [plane shift](3-Mechanics/CLI/spells/plane-shift.md) (self only)\n\n2/day\
    \ each: [create food and water](3-Mechanics/CLI/spells/create-food-and-water.md),\
    \ [polymorph](3-Mechanics/CLI/spells/polymorph.md), [remove curse](3-Mechanics/CLI/spells/remove-curse.md)"
  "name": "Spellcasting"
- "desc": "Bavlorna can breathe air and water."
  "name": "Amphibious"
- "desc": "Bavlorna is immune to any effect that would age her, and she can't die\
    \ from old age."
  "name": "Boon of Immortality"
- "desc": "If a creature within 10 feet of Bavlorna uses at least 10 feet of movement\
    \ to run in place counterclockwise, Bavlorna is overcome by a fit of sneezing\
    \ and can't cast spells until the end of her next turn. In addition, any creature\
    \ Bavlorna has swallowed is immediately expelled and falls [prone](3-Mechanics/CLI/rules/conditions.md#Prone)\
    \ in an unoccupied space within 5 feet of her."
  "name": "Widdershins Allergy"
"actions":
- "desc": "Bavlorna makes one Bite attack and one Withering Ray attack."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice:1d20+9|noform|noparens|text(+9) to hit, reach\
    \ 5 ft., one target. Hit: dice:2d6+6|noform|noparens|avg|text(13) (2d6 +\
    \ 6) piercing damage, and the target is [grappled](3-Mechanics/CLI/rules/conditions.md#Grappled)\
    \ (escape DC 16) if it is a Medium or smaller creature. Until the grapple ends,\
    \ the target is [restrained](3-Mechanics/CLI/rules/conditions.md#Restrained),\
    \ and Bavlorna can't use her Bite attack on another target."
  "name": "Bite"
- "desc": "Ranged Spell Attack: dice:1d20+6|noform|noparens|text(+6) to hit, range\
    \ 60 ft., one target. Hit: dice:4d6+3|noform|noparens|avg|text(17) (4d6 +\
    \ 3) necrotic damage."
  "name": "Withering Ray"
- "desc": "Bavlorna creates one or two 1-foot-tall duplicates of herself, called lornlings\
    \ (use the Quickling stat block in appendix C). Each lornling appears in an unoccupied\
    \ space within 5 feet of Bavlorna, obeys her commands, and takes its turn immediately\
    \ after hers. A lornling lasts for 1 hour, until it or Bavlorna dies, or until\
    \ Bavlorna dismisses it as an action. Bavlorna can have no more than eight lornlings\
    \ in existence at a time."
  "name": "Create Lornlings (Recharge 5-6)"
"bonus_actions":
- "desc": "Bavlorna swallows a Small or smaller creature she is grappling, ending\
    \ the grapple on it. The swallowed creature is [blinded](3-Mechanics/CLI/rules/conditions.md#Blinded)\
    \ and [restrained](3-Mechanics/CLI/rules/conditions.md#Restrained), it has total\
    \ cover against attacks and other effects outside Bavlorna, and it takes dice:3d6|noform|noparens|avg|text(10)\
    \ (3d6) acid damage at the start of each of its turns. If the swallowed creature\
    \ is one of Bavlorna's lornlings, Bavlorna gains all the lornling's memories when\
    \ the acid damage reduces it to 0 hit points.\n\nBavlorna can have only one creature\
    \ swallowed at a time. If Bavlorna dies, a swallowed creature is no longer [restrained](3-Mechanics/CLI/rules/conditions.md#Restrained)\
    \ and can escape from the corpse using 5 feet of movement, exiting [prone](3-Mechanics/CLI/rules/conditions.md#Prone)."
  "name": "Swallow"
"source":
- "WBtW"
"image": "3-Mechanics/CLI/bestiary/npc/token/bavlorna-blightstraw-wbtw.webp"
```
^statblock