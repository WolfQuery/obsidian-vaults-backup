---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/dragon
statblock: inline
aliases: ["Sir Talavar"]
---
# [Sir Talavar](3-Mechanics\CLI\bestiary\npc/sir-talavar-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 69*  

Sir Talavar is an esteemed member of the Seelie Court and a loyal vassal of the Summer Queen. Many of Sir Talavar's squires have gone on to become knights of great renown. The venerable faerie dragon has an encouraging, can-do demeanor and an unwavering sense of honor.

```statblock
"name": "Sir Talavar (WBtW)"
"size": "Tiny"
"type": "dragon"
"alignment": "Lawful Good"
"ac": !!int "15"
"hp": !!int "14"
"hit_dice": "4d4 + 4"
"stats":
- !!int "3"
- !!int "20"
- !!int "13"
- !!int "14"
- !!int "12"
- !!int "16"
"speed": "10 ft., fly 60 ft."
"skillsaves":
  "Stealth": !!int "7"
  "Perception": !!int "3"
  "Arcana": !!int "4"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Draconic, Elvish, Sylvan"
"cr": "2"
"traits":
- "desc": "Sir Talavar's innate spellcasting ability is Charisma (spell save DC 13).\
    \ It can innately cast a number of spells, requiring no material components. As\
    \ the dragon ages and changes color, it gains additional spells as shown below.\n\
    \n1/day: [color spray](3-Mechanics/CLI/spells/color-spray.md) (Orange), [mirror\
    \ image](3-Mechanics/CLI/spells/mirror-image.md) (Yellow), [suggestion](3-Mechanics/CLI/spells/suggestion.md)\
    \ (Green), [major image](3-Mechanics/CLI/spells/major-image.md) (Blue), [hallucinatory\
    \ terrain](3-Mechanics/CLI/spells/hallucinatory-terrain.md) (Indigo), [polymorph](3-Mechanics/CLI/spells/polymorph.md)\
    \ (Violet)\n\n1/day each: [dancing lights](3-Mechanics/CLI/spells/dancing-lights.md),\
    \ [mage hand](3-Mechanics/CLI/spells/mage-hand.md), [minor illusion](3-Mechanics/CLI/spells/minor-illusion.md)"
  "name": "Innate Spellcasting"
- "desc": "As a bonus action, Sir Talavar can magically turn [invisible](3-Mechanics/CLI/rules/conditions.md#Invisible)\
    \ until his [concentration](3-Mechanics/CLI/rules/conditions.md#Concentration)\
    \ ends (as if [concentrating](3-Mechanics/CLI/rules/conditions.md#Concentration)\
    \ on a spell). Any equipment Sir Talavar wears or carries is [invisible](3-Mechanics/CLI/rules/conditions.md#Invisible)\
    \ with him."
  "name": "Superior Invisibility"
- "desc": "Using telepathy, Sir Talavar can magically communicate with any other faerie\
    \ dragon within 60 feet of him."
  "name": "Limited Telepathy"
- "desc": "Sir Talavar has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "Melee Weapon Attack: dice:1d20+8|noform|noparens|text(+8) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d4+6|noform|noparens|avg|text(8) (1d4 + 6)\
    \ piercing damage."
  "name": "+1 Tiny Sword"
- "desc": "Melee Weapon Attack: dice:1d20+7|noform|noparens|text(+7) to hit, reach\
    \ 5 ft., one creature. Hit: 1 piercing damage."
  "name": "Bite"
- "desc": "Sir Talavar exhales a puff of euphoria gas at one creature within 5 feet\
    \ of him. The target must succeed on a DC 11 Wisdom saving throw, or for 1 minute,\
    \ the target can't take reactions and must roll a dice:d6|noform|noparens|avg\
    \ (d6) at the start of each of its turns to determine its behavior during the\
    \ turn:\n\n- 1-4. The target takes no action or bonus action and uses all\
    \ of its movement to move in a random direction.  \n- 5-6. The target doesn't\
    \ move, and the only thing it can do on its turn is make a DC 11 Wisdom saving\
    \ throw, ending the effect on itself on a success.  "
  "name": "Euphoria Breath (Recharge 5-6)"
"source":
- "WBtW"
"image": "3-Mechanics/CLI/bestiary/npc/token/sir-talavar-wbtw.webp"
```
^statblock