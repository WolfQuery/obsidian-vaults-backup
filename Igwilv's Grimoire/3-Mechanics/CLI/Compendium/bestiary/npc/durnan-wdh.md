---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdh
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
statblock-link: "#^statblock"
aliases:
- Durnan
---
# [Durnan](3-Mechanics\CLI\Compendium\bestiary\npc/durnan-wdh.md)
*Source: Waterdeep: Dragon Heist p. 203*  

*Human proprietor*

> [!quote]  
> 
> I'll give you a free flagon of ale if you don't talk to me about the weather.

Durnan is the owner and proprietor of the Yawning Portal. Although he looks like a middle-aged man whose best days are behind him, Durnan has a sharp mind and can still swing a sword when he must. He doesn't like talking about his past, and he won't reveal anything about his time as an adventurer.

If Durnan has any living family members, he doesn't speak of them. He rarely says two words when one will do. He has a dark sense of humor and spares no pity on those who take the risk of entering Undermountain.

He keeps Grimvault, his magic greatsword, within reach under the bar, and can chop tables in half with it if he so desires. He also can pull out a double crossbow (a heavy crossbow with reduced range that fires two bolts at the same target). Still, if he gets involved in a brawl, he prefers fighting with fists or a well-flung tankard.

Durnan doesn't often venture far from the Yawning Portal, using his employees to run errands for him as needed. If he's feeling charitable, he might gently discourage likable "nobodies" from venturing into Undermountain, if he thinks they wouldn't survive. He can also direct adventurers toward tavern regulars who might be able to help them or offer useful information.

```statblock
"name": "Durnan (WDH)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Neutral"
"ac": !!int "16"
"ac_class": "[elven chain](/3-Mechanics/CLI/Compendium/items/elven-chain.md)"
"hp": !!int "144"
"hit_dice": "17d8 + 68"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "15"
  - !!int "18"
  - !!int "13"
  - !!int "12"
  - !!int "10"
"speed": "30 ft."
"saves":
  - "strength": !!int "8"
  - "constitution": !!int "8"
"skillsaves":
  - "name": "[Athletics](/3-Mechanics/CLI/Rules/skills.md#Athletics)"
    "desc": "+8"
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+5"
"senses": "passive Perception 15"
"languages": "Common, Dwarvish"
"cr": "9"
"traits":
  - "desc": "Durnan wields a [sword of sharpness (greatsword)](/3-Mechanics/CLI/Compendium/items/sword-of-sharpness.md)\
      \ called Grimvault. He wears [boots of striding and springing](/3-Mechanics/CLI/Compendium/items/boots-of-striding-and-springing.md),\
      \ [elven chain](/3-Mechanics/CLI/Compendium/items/elven-chain.md), and a [ring\
      \ of spell turning](/3-Mechanics/CLI/Compendium/items/ring-of-spell-turning.md)."
    "name": "Special Equipment"
  - "desc": "Durnan can reroll a saving throw that he fails. He must use the new roll."
    "name": "Indomitable (Recharges after a Long Rest)"
  - "desc": "While wearing his ring of spell turning, Durnan has advantage on saving\
      \ throws against any spell that targets only him (not in an area of effect).\
      \ If Durnan rolls a 20 for the save and the spell is 7th level or lower, the\
      \ spell has no effect on him and instead targets the caster, using the slot\
      \ level, spell save DC, attack bonus, and spellcasting ability of the caster."
    "name": "Spell Turning"
"actions":
  - "desc": "Durnan makes four melee weapon attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 11\
      \ (2d6 + 4) slashing damage. If the target is an object, the hit instead deals\
      \ 16 slashing damage. If the target is a creature and Durnan rolls a 20 on the\
      \ d20 for the attack roll, the target takes an extra 14 slashing damage, and\
      \ Durnan rolls another d20. On a roll of 20, he lops off one of the target's\
      \ limbs, or some other part of its body if it is limbless."
    "name": "Grimvault"
  - "desc": "Ranged Weapon Attack: +6 to hit, range 60/240 ft., one target. Hit:\
      \ 13 (2d10 + 2) piercing damage."
    "name": "Double Crossbow"
"source":
  - "WDH"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/durnan-wdh.webp"
```
^statblock