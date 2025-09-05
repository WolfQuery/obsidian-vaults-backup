---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdmm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/ooze
statblock: inline
statblock-link: "#^statblock"
aliases:
- Intelligent Black Pudding
---
# [Intelligent Black Pudding](3-Mechanics\CLI\Compendium\bestiary\ooze/intelligent-black-pudding-wdmm.md)
*Source: Waterdeep: Dungeon of the Mad Mage p. 244*  

```statblock
"name": "Intelligent Black Pudding (WDMM)"
"size": "Large"
"type": "ooze"
"alignment": "Unaligned"
"ac": !!int "7"
"hp": !!int "85"
"hit_dice": "10d10 + 30"
"modifier": !!int "-3"
"stats":
  - !!int "16"
  - !!int "5"
  - !!int "16"
  - !!int "14"
  - !!int "6"
  - !!int "1"
"speed": "20 ft., climb 20 ft."
"damage_immunities": "acid, cold, lightning, slashing"
"condition_immunities": "[blinded](/3-Mechanics/CLI/Rules/conditions.md#Blinded),\
  \ [charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed), [deafened](/3-Mechanics/CLI/Rules/conditions.md#Deafened),\
  \ [exhaustion](/3-Mechanics/CLI/Rules/conditions.md#Exhaustion), [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened),\
  \ [prone](/3-Mechanics/CLI/Rules/conditions.md#Prone)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 8"
"languages": "Elvish and Undercommon but can't speak"
"cr": "4"
"traits":
  - "desc": "The pudding's spellcasting ability is Intelligence (spell save DC 12,\
      \ +4 to hit with spell attacks). It can cast the following spells, requiring\
      \ no components:\n\nAt will: [dancing lights](/3-Mechanics/CLI/Compendium/spells/dancing-lights.md),\
      \ [mage hand](/3-Mechanics/CLI/Compendium/spells/mage-hand.md)\n\n3/day each:\
      \ [darkness](/3-Mechanics/CLI/Compendium/spells/darkness.md), [faerie fire](/3-Mechanics/CLI/Compendium/spells/faerie-fire.md),\
      \ [shield](/3-Mechanics/CLI/Compendium/spells/shield.md)\n\n1/day: [Melf's\
      \ acid arrow](/3-Mechanics/CLI/Compendium/spells/melfs-acid-arrow.md)"
    "name": "Innate Spellcasting"
  - "desc": "The pudding can move through a space as narrow as 1 inch wide without\
      \ squeezing."
    "name": "Amorphous"
  - "desc": "A creature that touches the pudding or hits it with a melee attack while\
      \ within 5 feet of it takes 4 (d8) acid damage. Any nonmagical weapon made of\
      \ metal or wood that hits the pudding corrodes. After dealing damage, the weapon\
      \ takes a permanent and cumulative −1 penalty to damage rolls. If its penalty\
      \ drops to −5, the weapon is destroyed. Nonmagical ammunition made of metal\
      \ or wood that hits the pudding is destroyed after dealing damage. The pudding\
      \ can eat through 2-inch-thick, nonmagical wood or metal in 1 round."
    "name": "Corrosive Form"
  - "desc": "The pudding can climb difficult surfaces, including upside down on ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
"actions":
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
      \ + 3) bludgeoning damage plus 18 (4d8) acid damage. In addition, nonmagical\
      \ armor worn by the target is partly dissolved and takes a permanent and cumulative\
      \ −1 penalty to the AC it offers. The armor is destroyed if the penalty reduces\
      \ its AC to 10."
    "name": "Pseudopod"
"reactions":
  - "desc": "When a pudding that is Medium or larger is subjected to lightning or\
      \ slashing damage, it splits into two new puddings if it has at least 10 hit\
      \ points. Each new pudding has hit points equal to half the original pudding's,\
      \ rounded down. New puddings are one size smaller than the original pudding."
    "name": "Split"
"source":
  - "WDMM"
"image": "/3-Mechanics/CLI/Compendium/bestiary/ooze/token/intelligent-black-pudding-wdmm.webp"
```
^statblock