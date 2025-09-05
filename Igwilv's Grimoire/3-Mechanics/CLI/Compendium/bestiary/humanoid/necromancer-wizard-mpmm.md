---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Necromancer Wizard
---
# [Necromancer Wizard](3-Mechanics\CLI\Compendium\bestiary\humanoid/necromancer-wizard-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 264*  

Necromancers study the interaction of life, death, and undeath. Some necromancers dig up or purchase corpses to create Undead servitors. A few instead use their powers for good, hunting Undead.

## Wizards

Wizards pursue magical power through the study of arcane texts. Some travel the world searching for esoteric tomes while others train lesser wizards or collaborate with colleagues to create new spells.

```statblock
"name": "Necromancer Wizard (MPMM)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "12"
"ac_class": "15 with [mage armor](/3-Mechanics/CLI/Compendium/spells/mage-armor.md)"
"hp": !!int "110"
"hit_dice": "20d8 + 20"
"modifier": !!int "2"
"stats":
  - !!int "9"
  - !!int "14"
  - !!int "12"
  - !!int "17"
  - !!int "12"
  - !!int "11"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "7"
  - "wisdom": !!int "5"
"skillsaves":
  - "name": "[Arcana](/3-Mechanics/CLI/Rules/skills.md#Arcana)"
    "desc": "+7"
  - "name": "[History](/3-Mechanics/CLI/Rules/skills.md#History)"
    "desc": "+7"
"damage_resistances": "necrotic"
"senses": "passive Perception 11"
"languages": "any four languages"
"cr": "9"
"actions":
  - "desc": "The necromancer makes three Arcane Burst attacks."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Spell Attack: +7 to hit, reach 5 ft. or range 120\
      \ ft., one target. Hit: 25 (4d10 + 3) necrotic damage."
    "name": "Arcane Burst"
  - "desc": "The necromancer casts one of the following spells, using Intelligence\
      \ as the spellcasting ability (spell save DC 15):\n\nAt will: [dancing lights](/3-Mechanics/CLI/Compendium/spells/dancing-lights.md),\
      \ [mage hand](/3-Mechanics/CLI/Compendium/spells/mage-hand.md), [prestidigitation](/3-Mechanics/CLI/Compendium/spells/prestidigitation.md)\n\
      \n2/day each: [bestow curse](/3-Mechanics/CLI/Compendium/spells/bestow-curse.md),\
      \ [dimension door](/3-Mechanics/CLI/Compendium/spells/dimension-door.md), [mage\
      \ armor](/3-Mechanics/CLI/Compendium/spells/mage-armor.md), [web](/3-Mechanics/CLI/Compendium/spells/web.md)\n\
      \n1/day each: [circle of death](/3-Mechanics/CLI/Compendium/spells/circle-of-death.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The necromancer magically summons five [skeletons](/3-Mechanics/CLI/Compendium/bestiary/undead/skeleton.md)\
      \ or [zombies](/3-Mechanics/CLI/Compendium/bestiary/undead/zombie.md). The summoned\
      \ creatures appear in unoccupied spaces within 60 feet of the necromancer, whom\
      \ they obey. They take their turns immediately after the necromancer. Each lasts\
      \ for 1 hour, until it or the necromancer dies, or until the necromancer dismisses\
      \ it as a bonus action."
    "name": "Summon Undead (1/Day)"
"reactions":
  - "desc": "When the necromancer kills a creature with necrotic damage, the necromancer\
      \ regains 9 (2d8) hit points. "
    "name": "Grim Harvest (1/Turn)"
"source":
  - "MPMM"
"image": "/3-Mechanics/CLI/Compendium/bestiary/humanoid/token/necromancer-wizard-mpmm.webp"
```
^statblock

## Environment

desert, urban