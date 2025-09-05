---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/kftgv
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Juvenile Eldritch Horror
---
# [Juvenile Eldritch Horror](3-Mechanics\CLI\Compendium\bestiary\monstrosity/juvenile-eldritch-horror-kftgv.md)
*Source: Keys from the Golden Vault p. 24*  

```statblock
"name": "Juvenile Eldritch Horror (KftGV)"
"size": "Huge"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "168"
"hit_dice": "16d12 + 64"
"modifier": !!int "3"
"stats":
  - !!int "23"
  - !!int "16"
  - !!int "18"
  - !!int "18"
  - !!int "14"
  - !!int "12"
"speed": "50 ft., climb 40 ft."
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Stealth](/3-Mechanics/CLI/Rules/skills.md#Stealth)"
    "desc": "+7"
"damage_immunities": "lightning"
"senses": "darkvision 90 ft., passive Perception 16"
"languages": ""
"cr": "11"
"actions":
  - "desc": "The eldritch horror makes two attacks: one with its bite and one to constrict."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 22\
      \ (3d10 + 6) piercing damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one Large or smaller\
      \ creature. Hit: 17 (2d10 + 6) bludgeoning damage plus 17 (2d10 + 6) slashing\
      \ damage. The target is [grappled](/3-Mechanics/CLI/Rules/conditions.md#Grappled)\
      \ (escape DC 16) if the eldritch horror isn't already constricting a creature,\
      \ and the target is [restrained](/3-Mechanics/CLI/Rules/conditions.md#Restrained)\
      \ until this grapple ends."
    "name": "Constrict"
  - "desc": "The eldritch horror exhales a line of lightning that is 20 feet long\
      \ and 5 feet wide. Each creature in that line must make a DC 16 Dexterity saving\
      \ throw, taking 66 (12d10) lightning damage on a failed save, or half as much\
      \ damage on a successful one."
    "name": "Lightning Breath (Recharge 5-6)"
  - "desc": "The eldritch horror makes one bite attack against a Medium or smaller\
      \ target it is grappling. If the attack hits, the target is also swallowed,\
      \ and the grapple ends. While swallowed, the target is [blinded](/3-Mechanics/CLI/Rules/conditions.md#Blinded)\
      \ and [restrained](/3-Mechanics/CLI/Rules/conditions.md#Restrained), it has\
      \ total cover against attacks and other effects outside the eldritch horror,\
      \ and it takes 21 (6d6) acid damage at the start of each of the eldritch horror's\
      \ turns. A eldritch horror can have only one creature swallowed at a time.\n\
      \nIf the eldritch horror takes 30 damage or more on a single turn from the swallowed\
      \ creature, the eldritch horror must succeed on a DC 14 Constitution saving\
      \ throw at the end of that turn or regurgitate the creature, which falls [prone](/3-Mechanics/CLI/Rules/conditions.md#Prone)\
      \ in a space within 10 feet of the eldritch horror. If the eldritch horror dies,\
      \ a swallowed creature is no longer [restrained](/3-Mechanics/CLI/Rules/conditions.md#Restrained)\
      \ by it and can escape from the corpse by using 15 feet of movement, exiting\
      \ [prone](/3-Mechanics/CLI/Rules/conditions.md#Prone)."
    "name": "Swallow"
  - "desc": "The eldritch horror casts one of the following spells, requiring no components\
      \ and using Intelligence as the spellcasting ability (save DC 14):\n\n2/day\
      \ each: [blindness/deafness](/3-Mechanics/CLI/Compendium/spells/blindness-deafness.md),\
      \ [blur](/3-Mechanics/CLI/Compendium/spells/blur.md)\n\n1/day: [project\
      \ image](/3-Mechanics/CLI/Compendium/spells/project-image.md)"
    "name": "Spellcasting"
"source":
  - "KftGV"
"image": "/3-Mechanics/CLI/Compendium/bestiary/monstrosity/token/juvenile-eldritch-horror-kftgv.webp"
```
^statblock