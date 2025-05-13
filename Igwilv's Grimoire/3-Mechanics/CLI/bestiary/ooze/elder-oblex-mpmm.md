---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/ooze
statblock: inline
aliases: ["Elder Oblex"]
---
# [Elder Oblex](3-Mechanics\CLI\bestiary\ooze/elder-oblex-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 199*  

Older oblexes, called adults and elders, have eaten so many memories that they can form duplicates of the creatures they have devoured from the substance of their bodies, sending these copies off to lure prey into their clutches while remaining tethered to the slime by long tendrils of goo. These duplicated creatures are indistinguishable from their victims except for a faint sulfurous smell. Oblexes use these duplicates to lead prey into danger or to infiltrate settlements so they can feed on superior victims.

## Oblexes

> [!quote] A quote from Mordenkainen  
> 
> Mind flayers unleash all manner of foul experiments upon the planes with little thought for the consequences. Here, though, I suspect another influence: Juiblex.

> [!quote] A quote from Mordenkainen  
> 
> An oblex wants memories, but not to serve any end of its own making. Oblexes are hungry for memories and personalities because they are empty without such nourishment. In this way they serve their creators, the illithids. An oblex in the range of an elder brain's powers provides everything necessary for the mind flayers to find choice victims.

By experimenting on the slimes, jellies, and puddings that infest the depths of the Underdark, mind flayers created a special breed of Ooze, the oblex—a slime capable of assaulting the minds of other creatures. These pools of jelly are cunning hunters that feed on thoughts and memories. The sharper the mind, the better the meal, so oblexes hunt targets more likely to be intelligent, such as wizards and other spellcasters. When suitable fare comes within reach, an oblex draws its body up to engulf its victim. As it withdraws, it plunders the creature's mind, leaving its prey befuddled and confused—or dead.

When oblexes feed on thoughts, they can form weird copies of their prey to use as lures, which helps them harvest even more victims for their mind flayer masters.

```statblock
"name": "Elder Oblex (MPMM)"
"size": "Huge"
"type": "ooze"
"alignment": "Typically  Lawful Evil"
"ac": !!int "16"
"hp": !!int "115"
"hit_dice": "10d12 + 50"
"stats":
- !!int "15"
- !!int "16"
- !!int "21"
- !!int "22"
- !!int "13"
- !!int "18"
"speed": "20 ft."
"saves":
  "Charisma": !!int "8"
  "Intelligence": !!int "10"
"skillsaves":
  "Nature": !!int "10"
  "Deception": !!int "8"
  "Religion": !!int "10"
  "Perception": !!int "5"
  "History": !!int "10"
  "Arcana": !!int "10"
"condition_immunities": "[blinded](3-Mechanics/CLI/rules/conditions.md#Blinded), [charmed](3-Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [deafened](3-Mechanics/CLI/rules/conditions.md#Deafened), [exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [prone](3-Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "blindsight 60 ft. (blind beyond this distance), passive Perception 15"
"languages": "Common plus six more languages"
"cr": "10"
"traits":
- "desc": "The oblex casts one of the following spells, requiring no spell components\
    \ and using Intelligence as the spellcasting ability (spell save DC 18):\n\nAt\
    \ will: [charm person](3-Mechanics/CLI/spells/charm-person.md) (as 5th-level\
    \ spell), [detect thoughts](3-Mechanics/CLI/spells/detect-thoughts.md)\n\n3/day\
    \ each: [dimension door](3-Mechanics/CLI/spells/dimension-door.md), [dominate\
    \ person](3-Mechanics/CLI/spells/dominate-person.md), [hypnotic pattern](3-Mechanics/CLI/spells/hypnotic-pattern.md),\
    \ [telekinesis](3-Mechanics/CLI/spells/telekinesis.md)"
  "name": "Spellcasting (Psionics)"
- "desc": "The oblex can move through a space as narrow as 1 inch wide without squeezing."
  "name": "Amorphous"
- "desc": "If the oblex takes fire damage, it has disadvantage on attack rolls and\
    \ ability checks until the end of its next turn."
  "name": "Aversion to Fire"
- "desc": "The oblex doesn't require sleep."
  "name": "Unusual Nature"
"actions":
- "desc": "The elder oblex makes two Pseudopod attacks, and it uses Eat Memories."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice:1d20+7|noform|noparens|text(+7) to hit, reach\
    \ 10 ft., one target. Hit: dice:4d6+3|noform|noparens|avg|text(17) (4d6 +\
    \ 3) bludgeoning damage plus dice:4d6|noform|noparens|avg|text(14) (4d6)\
    \ psychic damage."
  "name": "Pseudopod"
- "desc": "The oblex targets one creature it can see within 5 feet of it. The target\
    \ must succeed on a DC 18 Wisdom saving throw or take dice:8d10|noform|noparens|avg|text(44)\
    \ (8d10) psychic damage and become memory drained until it finishes a short\
    \ or long rest or until it benefits from the [greater restoration](3-Mechanics/CLI/spells/greater-restoration.md)\
    \ or [heal](3-Mechanics/CLI/spells/heal.md) spell. Constructs, Oozes, Plants,\
    \ and Undead succeed on the save automatically.\n\nWhile memory drained, the target\
    \ must roll a dice:d4|noform|noparens|avg (d4) and subtract the number rolled\
    \ from any ability check or attack roll it makes. Each time the target is memory\
    \ drained beyond the first, the die size increases by one: the dice:d4|noform|noparens|avg\
    \ (d4) becomes a dice:d6|noform|noparens|avg (d6), the dice:d6|noform|noparens|avg\
    \ (d6) becomes a dice:d8|noform|noparens|avg (d8), and so on until the die\
    \ becomes a dice:d20|noform|noparens|avg (d20), at which point the target\
    \ becomes [unconscious](3-Mechanics/CLI/rules/conditions.md#Unconscious) for 1\
    \ hour. The effect then ends.\n\nThe oblex learns all the languages a memory-drained\
    \ target knows and gains all its skill proficiencies."
  "name": "Eat Memories"
"bonus_actions":
- "desc": "The oblex extrudes a piece of itself that assumes the appearance of one\
    \ Medium or smaller creature whose memories it has stolen. This simulacrum appears,\
    \ feels, and sounds exactly like the creature it impersonates, though it smells\
    \ faintly of sulfur. The oblex can impersonate dice:2d6+1|noform|noparens|avg\
    \ (2d6 + 1) different creatures, each one tethered to its body by a strand of\
    \ slime that can extend up to 120 feet away. The simulacrum is an extension of\
    \ the oblex, meaning that the oblex occupies its space and the simulacrum's space\
    \ simultaneously. The tether is immune to damage, but it is severed if there is\
    \ no opening at least 1 inch wide between the oblex and the simulacrum. The simulacrum\
    \ disappears if the tether is severed."
  "name": "Sulfurous Impersonation"
"source":
- "MPMM"
"image": "3-Mechanics/CLI/bestiary/ooze/token/elder-oblex-mpmm.webp"
```
^statblock

## Environment

swamp, underdark, urban