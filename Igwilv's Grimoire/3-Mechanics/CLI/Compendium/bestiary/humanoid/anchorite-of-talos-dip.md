---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/dip
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/half-orc
- ttrpg-cli/monster/type/humanoid/shapechanger
statblock: inline
statblock-link: "#^statblock"
aliases:
- Anchorite of Talos
---
# [Anchorite of Talos](3-Mechanics\CLI\Compendium\bestiary\humanoid/anchorite-of-talos-dip.md)
*Source: Dragon of Icespire Peak p. 51*  

These religious recluses are granted spellcasting power by Talos, the god of storms. Their human ancestors bred with orcs, and now all anchorites of Talos are half-orcs.

```statblock
"name": "Anchorite of Talos (DIP)"
"size": "Medium"
"type": "humanoid"
"subtype": "half-orc, shapechanger"
"alignment": "Neutral Evil"
"ac": !!int "13"
"ac_class": "[hide armor](/3-Mechanics/CLI/Compendium/items/hide-armor.md)"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"modifier": !!int "1"
"stats":
  - !!int "16"
  - !!int "13"
  - !!int "14"
  - !!int "9"
  - !!int "15"
  - !!int "12"
"speed": "30 ft."
"skillsaves":
  - "name": "[Nature](/3-Mechanics/CLI/Rules/skills.md#Nature)"
    "desc": "+1"
  - "name": "[Stealth](/3-Mechanics/CLI/Rules/skills.md#Stealth)"
    "desc": "+3"
  - "name": "[Survival](/3-Mechanics/CLI/Rules/skills.md#Survival)"
    "desc": "+4"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Common, Orc"
"cr": "3"
"traits":
  - "desc": "The anchorite's innate spellcasting ability is Wisdom (spell save DC\
      \ 12). It can innately cast the following spells, requiring no material components:\n\
      \n3/day: [thunderwave](/3-Mechanics/CLI/Compendium/spells/thunderwave.md)\
      \ (2d8 damage)\n\n1/day each: [augury](/3-Mechanics/CLI/Compendium/spells/augury.md),\
      \ [bless](/3-Mechanics/CLI/Compendium/spells/bless.md), [lightning bolt](/3-Mechanics/CLI/Compendium/spells/lightning-bolt.md)\
      \ (8d6 damage), [revivify](/3-Mechanics/CLI/Compendium/spells/revivify.md)"
    "name": "Innate Spellcasting"
  - "desc": "The anchorite can use its action to polymorph into a boar or back into\
      \ its true form, which is humanoid. Its statistics are the same in each form.\
      \ Any equipment it is wearing or carrying isn't transformed. It reverts to its\
      \ true form if it dies."
    "name": "Shapechanger"
"actions":
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
      \ + 3) slashing damage."
    "name": "Clawed Gauntlet (Humanoid Form Only)"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
      \ + 3) slashing damage."
    "name": "Tusk (Boar Form Only)"
"source":
  - "DIP"
"image": "/3-Mechanics/CLI/Compendium/bestiary/humanoid/token/anchorite-of-talos-dip.webp"
```
^statblock