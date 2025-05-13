---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/kenku
- ttrpg-cli/monster/type/humanoid/warlock
statblock: inline
aliases: ["Kettlesteam the Kenku"]
---
# [Kettlesteam the Kenku](3-Mechanics\CLI\bestiary\npc/kettlesteam-the-kenku-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 52*  

Kettlesteam the kenku snoops around the carnival under the cover of a [disguise self](3-Mechanics/CLI/spells/disguise-self.md) spell, looking to cause trouble. The kenku has stolen the voice of a human mime named Candlefoot (see "Hall of Illusions "earlier in the chapter). While this prize remains in her possession, Kettlesteam can speak clearly in Candlefoot's soft, silky voice.

```statblock
"name": "Kettlesteam the Kenku (WBtW)"
"size": "Medium"
"type": "humanoid"
"subtype": "kenku, warlock"
"alignment": "Chaotic Neutral"
"ac": !!int "13"
"hp": !!int "22"
"hit_dice": "5d8"
"stats":
- !!int "10"
- !!int "16"
- !!int "10"
- !!int "11"
- !!int "10"
- !!int "16"
"speed": "30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "2"
"skillsaves":
  "Deception": !!int "5"
  "Stealth": !!int "5"
  "Investigation": !!int "2"
  "Perception": !!int "2"
  "Arcana": !!int "2"
  "Persuasion": !!int "5"
"senses": "passive Perception 12"
"languages": "understands Auran and Common but speaks only through the use of her\
  \ Mimicry trait"
"cr": "1"
"traits":
- "desc": "Kettlesteam casts one of the following spells, using Charisma as the spellcasting\
    \ ability (spell save DC 13):\n\nAt will: [disguise self](3-Mechanics/CLI/spells/disguise-self.md),\
    \ [friends](3-Mechanics/CLI/spells/friends.md), [mage hand](3-Mechanics/CLI/spells/mage-hand.md),\
    \ [minor illusion](3-Mechanics/CLI/spells/minor-illusion.md)\n\n1/day each:\
    \ [bestow curse](3-Mechanics/CLI/spells/bestow-curse.md), [faerie fire](3-Mechanics/CLI/spells/faerie-fire.md),\
    \ [speak with animals](3-Mechanics/CLI/spells/speak-with-animals.md)"
  "name": "Spellcasting"
- "desc": "Kettlesteam can mimic any sounds she has heard, including voices. A creature\
    \ that hears the sounds can tell they are imitations only with a successful DC\
    \ 13 Wisdom ([Insight](3-Mechanics/CLI/rules/skills.md#Insight)) check."
  "name": "Mimicry"
"actions":
- "desc": "Kettlesteam makes two Dagger attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: dice:1d20+5|noform|noparens|text(+5)\
    \ to hit, reach 5 ft. or range 20/60 ft., one target. Hit: dice:1d4+3|noform|noparens|avg|text(5)\
    \ (1d4 + 3) piercing damage."
  "name": "Dagger"
- "desc": "Kettlesteam targets one creature she can see within 10 feet of her. The\
    \ target is engulfed in a cloud of magical, sleep-inducing gas and must succeed\
    \ on a DC 13 Constitution saving throw or fall [unconscious](3-Mechanics/CLI/rules/conditions.md#Unconscious)\
    \ for 1 minute. A creature put to sleep by this gas awakens instantly if it takes\
    \ damage, or if someone uses an action to shake or slap the sleeper awake."
  "name": "Twilight Sleep (2/Day)"
"source":
- "WBtW"
"image": "3-Mechanics/CLI/bestiary/npc/token/kettlesteam-the-kenku-wbtw.webp"
```
^statblock