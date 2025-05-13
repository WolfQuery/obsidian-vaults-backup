---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/plant
statblock: inline
aliases: ["Amidor the Dandelion"]
---
# [Amidor the Dandelion](3-Mechanics\CLI\bestiary\npc/amidor-the-dandelion-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 135*  

## Roleplaying Notes

This 3-foot-tall talking dandelion finds poetry in everything and is quick to fall head over heels in love. A humble idealist, Amidor never puts its own needs above the needs of others.

### Alignment

Neutral good.

### Personality Trait

"My speech drifts into flowery verse, if you'll pardon the pun. Allow

me to demonstrate: Do not cry, my love! Let me catch your tears as faeries collect morning dew. Let me lift your spirits like a seed on the breeze!"

### Ideal

"The pursuit of true love compels me! Never shall I wilt if I have such a cause to champion."

### Bond

"The beautiful Pollenella—a vision in stripes."

### Flaw

"I cannot resist a pretty face or a heavenly scent."

```statblock
"name": "Amidor the Dandelion (WBtW)"
"size": "Small"
"type": "plant"
"alignment": "Neutral Good"
"ac": !!int "12"
"hp": !!int "28"
"hit_dice": "8d6"
"stats":
- !!int "6"
- !!int "15"
- !!int "10"
- !!int "13"
- !!int "12"
- !!int "17"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "4"
  "Wisdom": !!int "3"
  "Strength": !!int "0"
  "Constitution": !!int "2"
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
  "Persuasion": !!int "5"
"senses": "passive Perception 13"
"languages": "Common, Sylvan"
"cr": "1/2"
"traits":
- "desc": "Amidor can communicate with Beasts and Plants as if it shared a language\
    \ with them."
  "name": "Speak with Beasts and Plants"
"actions":
- "desc": "Melee Weapon Attack: dice:1d20+4|noform|noparens|text(+4) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d8+2|noform|noparens|avg|text(6) (1d8 + 2)\
    \ piercing damage."
  "name": "Rapier"
- "desc": "Ranged Weapon Attack: dice:1d20+4|noform|noparens|text(+4) to hit,\
    \ range 30/120 ft., one target. Hit: dice:1d4+2|noform|noparens|avg|text(4)\
    \ (1d4 + 2) bludgeoning damage."
  "name": "Seed Sling"
"reactions":
- "desc": "Amidor adds 2 to its AC against one melee attack that would hit it. To\
    \ do so, Amidor must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "WBtW"
"image": "3-Mechanics/CLI/bestiary/npc/token/amidor-the-dandelion-wbtw.webp"
```
^statblock