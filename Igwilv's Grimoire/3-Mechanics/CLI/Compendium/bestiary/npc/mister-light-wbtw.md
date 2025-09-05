---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/elf
- ttrpg-cli/monster/type/humanoid/shadar-kai
statblock: inline
statblock-link: "#^statblock"
aliases:
- Mister Light
---
# [Mister Light](3-Mechanics\CLI\Compendium\bestiary\npc/mister-light-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 26*  

Light, formerly known as Urmius Umbrage, belonged to a filthy rich shadar-kai family that haunted a crumbling mansion in Gloomwrought. Although he wanted for nothing as a child, Urmius found himself surrounded by family members, caretakers, and teachers who were uniformly cold, callous, and mean-spirited. He grew tired of being seen as nothing more than the inheritor of the Umbrage estate and legacy, and he did everything in his power to make life miserable for everyone around him, especially his parents. He seemed bereft of ambition and spent much of his time playing in his room. He collected costumes and liked nothing more than to parade around Umbrage Mansion in strange garments and outlandish makeup.

Urmius first met Naeryx Krumple at a family dinner and didn't think much of the clock tower keeper at first. But Urmius found himself taken aback by Naeryx's ability to find even a small amount of joy in his work. He was eager to get to know Naeryx better, though it took a while for Naeryx to trust him. After getting his hands on some money, Urmius bought a sad little carnival that was camped on the outskirts of Gloomwrought and asked Naeryx to help him run it. For Urmius, the carnival was a chance to emerge from under his family's shadow and become the master of his own fate, but it also meant forsaking his inheritance in order to embrace the unconventional lifestyle, fashions, and friendships he desired.

```statblock
"name": "Mister Light (WBtW)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf, shadar-kai"
"alignment": "Chaotic Good"
"ac": !!int "13"
"hp": !!int "77"
"hit_dice": "14d8 + 14"
"modifier": !!int "3"
"stats":
  - !!int "10"
  - !!int "16"
  - !!int "12"
  - !!int "12"
  - !!int "13"
  - !!int "17"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "5"
  - "charisma": !!int "5"
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Performance](/3-Mechanics/CLI/Rules/skills.md#Performance)"
    "desc": "+5"
  - "name": "[Sleight of Hand](/3-Mechanics/CLI/Rules/skills.md#Sleight%20of%20Hand)"
    "desc": "+5"
"damage_vulnerabilities": "lightning"
"damage_resistances": "necrotic"
"condition_immunities": "[blinded](/3-Mechanics/CLI/Rules/conditions.md#Blinded),\
  \ [deafened](/3-Mechanics/CLI/Rules/conditions.md#Deafened), [petrified](/3-Mechanics/CLI/Rules/conditions.md#Petrified),\
  \ [stunned](/3-Mechanics/CLI/Rules/conditions.md#Stunned)"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Elvish, Sylvan"
"cr": "3"
"traits":
  - "desc": "Light has advantage on saving throws against being [charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed),\
      \ and magic can't put him to sleep."
    "name": "Fey Ancestry"
  - "desc": "Light carries and is attuned to the [Witchlight vane](/3-Mechanics/CLI/Compendium/items/witchlight-vane-wbtw.md).\
      \ In Light's hands, the vane is a finesse weapon."
    "name": "Special Equipment"
"actions":
  - "desc": "Light makes two [Witchlight vane](/3-Mechanics/CLI/Compendium/items/witchlight-vane-wbtw.md)\
      \ attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
      \ + 3) bludgeoning damage plus 4 (d8) radiant damage."
    "name": "Witchlight Vane"
  - "desc": "While carrying the [Witchlight vane](/3-Mechanics/CLI/Compendium/items/witchlight-vane-wbtw.md),\
      \ Light casts one of the following spells, requiring no spell components and\
      \ using Charisma as the spellcasting ability (spell save DC 13, +5 to hit with\
      \ spell attacks):\n\nAt will: [dancing lights](/3-Mechanics/CLI/Compendium/spells/dancing-lights.md),\
      \ [polymorph](/3-Mechanics/CLI/Compendium/spells/polymorph.md) (after casting,\
      \ roll a d8; on a roll of 3 or 8, Light can't cast the spell again until the\
      \ next dawn), [ray of frost](/3-Mechanics/CLI/Compendium/spells/ray-of-frost.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "Light magically teleports, along with any equipment he is wearing or\
      \ carrying, up to 30 feet to an unoccupied space he can see. Until the start\
      \ of his next turn, he appears ghostly and gains resistance to all damage."
    "name": "Blessing of the Raven Queen (1/Day)"
"source":
  - "WBtW"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/mister-light-wbtw.webp"
```
^statblock