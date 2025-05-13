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
aliases: ["Mister Witch"]
---
# [Mister Witch](3-Mechanics\CLI\bestiary\npc/mister-witch-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 25*  

Witch, who used to go by the name Naeryx Krumple, spent his youth as a homeless orphan, eking out a meager and dreary existence on the fog-shrouded streets of Gloomwrought, a city in the Shadowfell. He earned a few coppers selling broadsheets as a young boy, then later swept floors until an old clock tower keeper took him on as a helper. The tower's clock was in such poor condition that it would break down often. Naeryx helped with the repairs and found that the work gave him a sliver of joy. When the old keeper died years later, Naeryx replaced him.

The wealthy family that owned the clock tower didn't pay Naeryx a lot of money for his work, but they occasionally had him over for dinner. He owned one fine suit that he wore on such occasions, and though he didn't care for the family's matriarch or patriarch, he enjoyed the company of their eldest son, Urmius Umbrage—a brooding shadar-kai ne'er do-well with a cruel sense of humor. Naeryx and Urmius were close in age and got along well in all respects. Years later, without informing the rest of his family, Urmius bought a run-down carnival and persuaded Naeryx to help him operate it. Naeryx and Urmius—now calling themselves Mister Witch and Mister Light—have been partners and collaborators ever since.

```statblock
"name": "Mister Witch (WBtW)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf, shadar-kai"
"alignment": "Chaotic Good"
"ac": !!int "10"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"stats":
- !!int "14"
- !!int "11"
- !!int "16"
- !!int "16"
- !!int "13"
- !!int "14"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "3"
  "Intelligence": !!int "5"
"skillsaves":
  "Deception": !!int "4"
  "Perception": !!int "3"
  "Arcana": !!int "5"
"damage_resistances": "necrotic"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Common, Elvish, Sylvan"
"cr": "3"
"traits":
- "desc": "While carrying the [Witchlight watch](3-Mechanics/CLI/items/witchlight-watch-wbtw.md),\
    \ Witch casts one of the following spells, requiring no spell components and using\
    \ Intelligence as the spellcasting ability (spell save DC 13, dice:1d20+5|noform|noparens|text(+5)\
    \ to hit with spell attacks):\n\nAt will: [fire bolt](3-Mechanics/CLI/spells/fire-bolt.md),\
    \ [invisibility](3-Mechanics/CLI/spells/invisibility.md) (after casting, roll\
    \ a dice:d8|noform|noparens|avg (d8); on a roll of 3 or 8, Witch can't cast\
    \ the spell again until the next dawn), [message](3-Mechanics/CLI/spells/message.md)"
  "name": "Spellcasting"
- "desc": "Witch has advantage on saving throws against being [charmed](3-Mechanics/CLI/rules/conditions.md#Charmed),\
    \ and magic can't put him to sleep."
  "name": "Fey Ancestry"
- "desc": "Witch carries and is attuned to the [Witchlight watch](3-Mechanics/CLI/items/witchlight-watch-wbtw.md)."
  "name": "Special Equipment"
"actions":
- "desc": "Witch makes two Cane attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice:1d20+4|noform|noparens|text(+4) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d4+2|noform|noparens|avg|text(4) (1d4 + 2)\
    \ bludgeoning damage plus dice:1d12|noform|noparens|avg|text(6) (1d12) necrotic\
    \ damage."
  "name": "Cane"
"bonus_actions":
- "desc": "Witch magically teleports, along with any equipment he is wearing or carrying,\
    \ up to 30 feet to an unoccupied space he can see. Until the start of his next\
    \ turn, he appears ghostly and gains resistance to all damage."
  "name": "Blessing of the Raven Queen (1/Day)"
"source":
- "WBtW"
"image": "3-Mechanics/CLI/bestiary/npc/token/mister-witch-wbtw.webp"
```
^statblock