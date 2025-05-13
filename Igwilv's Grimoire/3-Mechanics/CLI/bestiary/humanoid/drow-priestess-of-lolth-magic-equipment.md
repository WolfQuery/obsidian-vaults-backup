---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/elf
statblock: inline
aliases: ["Drow Priestess of Lolth (Magic Equipment)"]
---
# [Drow Priestess of Lolth (Magic Equipment)](3-Mechanics\CLI\bestiary\humanoid/drow-priestess-of-lolth-magic-equipment.md)
*Source: Monster Manual p. 129*  

```statblock
"name": "Drow Priestess of Lolth (Magic Equipment)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Neutral Evil"
"ac": !!int "19"
"ac_class": "[+3 scale mail](3-Mechanics/CLI/items/drow-3-armor.md)"
"hp": !!int "71"
"hit_dice": "13d8 + 13"
"stats":
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "13"
- !!int "17"
- !!int "18"
"speed": "30 ft."
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "6"
  "Constitution": !!int "4"
"skillsaves":
  "Stealth": !!int "5"
  "Religion": !!int "4"
  "Insight": !!int "6"
  "Perception": !!int "6"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Elvish, Undercommon"
"cr": "8"
"traits":
- "desc": "The drow's spellcasting ability is Charisma (spell save DC 15). She can\
    \ innately cast the following spells, requiring no material components:\n\nAt\
    \ will: [dancing lights](3-Mechanics/CLI/spells/dancing-lights.md)\n\n1/day\
    \ each: [darkness](3-Mechanics/CLI/spells/darkness.md), [faerie fire](3-Mechanics/CLI/spells/faerie-fire.md),\
    \ [levitate](3-Mechanics/CLI/spells/levitate.md) (self only)"
  "name": "Innate Spellcasting"
- "desc": "The drow is a 10th-level spellcaster. Her spellcasting ability is Wisdom\
    \ (save DC 14, dice:1d20+6|noform|noparens|text(+6) to hit with spell attacks).\
    \ The drow has the following cleric spells prepared:\n\nCantrips (at will):\
    \ [guidance](3-Mechanics/CLI/spells/guidance.md), [poison spray](3-Mechanics/CLI/spells/poison-spray.md),\
    \ [resistance](3-Mechanics/CLI/spells/resistance.md), [spare the dying](3-Mechanics/CLI/spells/spare-the-dying.md),\
    \ [thaumaturgy](3-Mechanics/CLI/spells/thaumaturgy.md)\n\n1st level (4 slots):\
    \ [animal friendship](3-Mechanics/CLI/spells/animal-friendship.md), [cure wounds](3-Mechanics/CLI/spells/cure-wounds.md),\
    \ [detect poison and disease](3-Mechanics/CLI/spells/detect-poison-and-disease.md),\
    \ [ray of sickness](3-Mechanics/CLI/spells/ray-of-sickness.md)\n\n2nd level\
    \ (3 slots): [lesser restoration](3-Mechanics/CLI/spells/lesser-restoration.md),\
    \ [protection from poison](3-Mechanics/CLI/spells/protection-from-poison.md),\
    \ [web](3-Mechanics/CLI/spells/web.md)\n\n3rd level (3 slots): [conjure animals](3-Mechanics/CLI/spells/conjure-animals.md)\
    \ (2 [giant spiders](3-Mechanics/CLI/bestiary/beast/giant-spider.md)), [dispel\
    \ magic](3-Mechanics/CLI/spells/dispel-magic.md)\n\n4th level (3 slots): [divination](3-Mechanics/CLI/spells/divination.md),\
    \ [freedom of movement](3-Mechanics/CLI/spells/freedom-of-movement.md)\n\n5th\
    \ level (2 slots): [insect plague](3-Mechanics/CLI/spells/insect-plague.md),\
    \ [mass cure wounds](3-Mechanics/CLI/spells/mass-cure-wounds.md)"
  "name": "Spellcasting"
- "desc": "The drow has advantage on saving throws against being [charmed](3-Mechanics/CLI/rules/conditions.md#Charmed),\
    \ and magic can't put the drow to sleep."
  "name": "Fey Ancestry"
- "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well as\
    \ on Wisdom ([Perception](3-Mechanics/CLI/rules/skills.md#Perception)) checks\
    \ that rely on sight."
  "name": "Sunlight Sensitivity"
- "desc": "The drow wears [+3 scale mail](3-Mechanics/CLI/items/drow-3-armor.md).\
    \ This armor loses its enhancement bonuses permanently if it is exposed to sunlight\
    \ for 1 hour or longer."
  "name": "Special Equipment"
"actions":
- "desc": "The drow makes two scourge attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice:1d20+5|noform|noparens|text(+5) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d6+2|noform|noparens|avg|text(5) (1d6 + 2)\
    \ piercing damage plus dice:5d6|noform|noparens|avg|text(17) (5d6) poison\
    \ damage."
  "name": "Scourge"
- "desc": "The drow attempts to magically summon a [yochlol](3-Mechanics/CLI/bestiary/fiend/yochlol.md)\
    \ with a 30 percent chance of success. If the attempt fails, the drow takes dice:1d10|noform|noparens|avg|text(5)\
    \ (1d10) psychic damage. Otherwise, the summoned demon appears in an unoccupied\
    \ space within 60 feet of its summoner, acts as an ally of its summoner, and can't\
    \ summon other demons. It remains for 10 minutes, until it or its summoner dies,\
    \ or until its summoner dismisses it as an action."
  "name": "Summon Demon (1/Day)"
"source":
- "MM"
```
^statblock

## Environment

underdark