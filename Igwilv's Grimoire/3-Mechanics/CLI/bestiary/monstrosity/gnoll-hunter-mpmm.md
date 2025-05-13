---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Gnoll Hunter"]
---
# [Gnoll Hunter](3-Mechanics\CLI\bestiary\monstrosity/gnoll-hunter-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 144*  

Hunters are the stealthiest gnolls in a war band. In the vanguard, they creep around, picking off isolated opposition while clearing the way for the rest of the force to advance.

Hunters are particularly skilled with the longbow, and they fire arrows with viciously barbed heads. Even when a hunter doesn't kill their target with their first shot, the arrow strike brings so much pain that the victim is hobbled in its attempt to run away.

## Gnolls

The first gnolls were hyenas transformed by magic. Many of them were then corrupted by the demon lord Yeenoghu. Whether in service to Yeenoghu or dedicated to the survival of their kin, gnoll war bands seek to soften up foes with surprise attacks and to leave no survivors alive.

```statblock
"name": "Gnoll Hunter (MPMM)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Typically  Chaotic Evil"
"ac": !!int "13"
"ac_class": "[leather armor](3-Mechanics/CLI/items/leather-armor.md)"
"hp": !!int "22"
"hit_dice": "4d8 + 4"
"stats":
- !!int "14"
- !!int "14"
- !!int "12"
- !!int "8"
- !!int "12"
- !!int "8"
"speed": "30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "3"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Gnoll"
"cr": "1/2"
"actions":
- "desc": "The gnoll makes two Bite, Spear, or Longbow attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice:1d20+4|noform|noparens|text(+4) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d4+2|noform|noparens|avg|text(4) (1d4 + 2)\
    \ piercing damage."
  "name": "Bite"
- "desc": "Melee or Ranged Weapon Attack: dice:1d20+4|noform|noparens|text(+4)\
    \ to hit, reach 5 ft. or range 20/60 ft., one target. Hit: dice:1d6+2|noform|noparens|avg|text(5)\
    \ (1d6 + 2) piercing damage, or dice:1d8+2|noform|noparens|avg|text(6) (1d8\
    \ + 2) piercing damage when used with two hands to make a melee attack."
  "name": "Spear"
- "desc": "Ranged Weapon Attack: dice:1d20+4|noform|noparens|text(+4) to hit,\
    \ range 150/600 ft., one target. Hit: dice:1d8+2|noform|noparens|avg|text(6)\
    \ (1d8 + 2) piercing damage, and the target's speed is reduced by 10 feet until\
    \ the end of its next turn."
  "name": "Longbow"
"bonus_actions":
- "desc": "After the gnoll reduces a creature to 0 hit points with a melee attack\
    \ on its turn, the gnoll moves up to half its speed and makes a Bite attack."
  "name": "Rampage"
"source":
- "MPMM"
"image": "3-Mechanics/CLI/bestiary/monstrosity/token/gnoll-hunter-mpmm.webp"
```
^statblock

## Environment

arctic, forest, grassland, hill