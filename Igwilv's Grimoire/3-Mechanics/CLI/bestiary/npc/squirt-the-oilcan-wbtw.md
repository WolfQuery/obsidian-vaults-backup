---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/construct
statblock: inline
aliases: ["Squirt the Oilcan"]
---
# [Squirt the Oilcan](3-Mechanics\CLI\bestiary\npc/squirt-the-oilcan-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 110*  

## Roleplaying Notes

Originally a nonsentient oilcan, Squirt was carried to the Feywild by dwarves hoping to harvest boggle oil. Though the expedition was a success, the dwarves were put to sleep by pixie magic. During a celebration that erupted around them, an elf used her magic to animate the oilcan in jest. Having come alive at a party, Squirt was imbued with the urge to seek out fun wherever it can be found.

### Alignment

Chaotic neutral.

### Personality Trait

"Why do something yourself when you can have someone else do it for you?"

### Ideal

"No use sitting about getting rusty when there's fun to be had. Let's party!"

### Bond

"I'm running on fumes here. I need oil."

### Flaw

"I'm too tired to fly today. You carry me."

```statblock
"name": "Squirt the Oilcan (WBtW)"
"size": "Tiny"
"type": "construct"
"alignment": "Chaotic Neutral"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "17"
"hit_dice": "7d4"
"stats":
- !!int "3"
- !!int "15"
- !!int "10"
- !!int "11"
- !!int "8"
- !!int "15"
"speed": "0 ft., fly 30 ft. (hover)"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed), [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned),\
  \ [unconscious](3-Mechanics/CLI/rules/conditions.md#Unconscious)"
"senses": "passive Perception 9"
"languages": "Common, Dwarvish, Sylvan"
"cr": "1/4"
"traits":
- "desc": "If Squirt is motionless at the start of combat, it has advantage on its\
    \ initiative roll. Moreover, if a creature hasn't observed Squirt move or act,\
    \ that creature must succeed on a DC 18 Intelligence ([Investigation](3-Mechanics/CLI/rules/skills.md#Investigation))\
    \ check to discern that Squirt is animate."
  "name": "False Appearance"
- "desc": "Squirt doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- "desc": "Melee Weapon Attack: dice:1d20+4|noform|noparens|text(+4) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d4+2|noform|noparens|avg|text(4) (1d4 + 2)\
    \ bludgeoning damage."
  "name": "Slam"
- "desc": "Squirt expends 1 application of boggle oil to create a 10-foot-square puddle\
    \ of slippery, non-flammable oil on the ground within 5 feet of it. The puddle\
    \ is difficult terrain and lasts for 1 hour. Each creature that enters the puddle's\
    \ area or starts its turn there must succeed on a DC 11 Dexterity saving throw\
    \ or fall [prone](3-Mechanics/CLI/rules/conditions.md#Prone). Boggles are unaffected\
    \ by the oil. After it expends all 3 applications, Squirt can't use this action\
    \ again until its supply of boggle oil is replenished."
  "name": "Boggle Oil (3 Applications)"
"source":
- "WBtW"
"image": "3-Mechanics/CLI/bestiary/npc/token/squirt-the-oilcan-wbtw.webp"
```
^statblock