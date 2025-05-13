---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
- ttrpg-cli/monster/type/humanoid/paladin
statblock: inline
aliases: ["Strongheart"]
---
# [Strongheart](3-Mechanics\CLI\bestiary\npc/strongheart-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 228*  

Strongheart is a fearless seeker of justice, risking his life to ensure that good triumphs over evil. He is thoughtful, kind, and seldom rash, yet never hesitant to punish those who spit in the face of law and order.

Strongheart doesn't worship a god but devotes himself to an ideal: that the world can be spared from evil by those who have enough courage to stand against it.

```statblock
"name": "Strongheart (WBtW)"
"size": "Medium"
"type": "humanoid"
"subtype": "human, paladin"
"alignment": "Lawful Good"
"ac": !!int "20"
"ac_class": "[plate armor](3-Mechanics/CLI/items/plate-armor.md), [shield](3-Mechanics/CLI/items/shield.md)"
"hp": !!int "55"
"hit_dice": "10d8 + 10"
"stats":
- !!int "15"
- !!int "12"
- !!int "13"
- !!int "12"
- !!int "13"
- !!int "17"
"speed": "30 ft."
"saves":
  "Charisma": !!int "5"
  "Wisdom": !!int "3"
"skillsaves":
  "Insight": !!int "3"
  "Persuasion": !!int "5"
"condition_immunities": "[frightened](3-Mechanics/CLI/rules/conditions.md#Frightened)"
"senses": "passive Perception 11"
"languages": "Common, Dwarvish"
"cr": "4"
"traits":
- "desc": "Strongheart casts one of the following spells, using Charisma as the spellcasting\
    \ ability (spell save DC 13):\n\n1/day each: [lesser restoration](3-Mechanics/CLI/spells/lesser-restoration.md),\
    \ [remove curse](3-Mechanics/CLI/spells/remove-curse.md), [zone of truth](3-Mechanics/CLI/spells/zone-of-truth.md)\n\
    \n3/day each: [command](3-Mechanics/CLI/spells/command.md), [detect evil and\
    \ good](3-Mechanics/CLI/spells/detect-evil-and-good.md), [protection from evil\
    \ and good](3-Mechanics/CLI/spells/protection-from-evil-and-good.md)"
  "name": "Spellcasting"
- "desc": "Strongheart wields [Steel](3-Mechanics/CLI/items/steel-wbtw.md), a sentient,\
    \ lawful good longsword (see appendix A)."
  "name": "Special Equipment"
"actions":
- "desc": "Strongheart makes three Steel attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice:1d20+6|noform|noparens|text(+6) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d8+4|noform|noparens|avg|text(8) (1d8 + 4)\
    \ slashing damage, or dice:1d10+4|noform|noparens|avg|text(9) (1d10 + 4) slashing\
    \ damage when used with two hands. Once on each of his turns, Strongheart can\
    \ also cause the blade to gleam with holy light. If he does so, the target is\
    \ [blinded](3-Mechanics/CLI/rules/conditions.md#Blinded) until the start of Strongheart's\
    \ next turn."
  "name": "Steel"
- "desc": "While holding Steel, Strongheart casts [revivify](3-Mechanics/CLI/spells/revivify.md)."
  "name": "Revivify (Recharges at the Next Dawn)"
"reactions":
- "desc": "When a creature Strongheart can see attacks another creature that is within\
    \ 5 feet of him, Strongheart can use his reaction to impose disadvantage on the\
    \ attack roll, provided he is carrying a shield."
  "name": "Protect Another"
"source":
- "WBtW"
"image": "3-Mechanics/CLI/bestiary/npc/token/strongheart-wbtw.webp"
```
^statblock