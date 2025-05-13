---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/construct
statblock: inline
aliases: ["Flying Sword"]
---
# [Flying Sword](3-Mechanics\CLI\bestiary\construct/flying-sword.md)
*Source: Monster Manual p. 20, Keys from the Golden Vault. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

A flying sword dances through the air, fighting with the confidence of a warrior that can't be injured. Swords are the most common weapons animated with magic. Axes, clubs, daggers, maces, spears, and even self-loading crossbows are also known to exist in animated object form.

> [!quote] A quote from Levity Quickstitch, halfling rogue  
> 
> Lyin' next to the chest were the bones of Cap'n Scornblade himself, still clutchin' his rusty sword. Imagine my surprise when the blade flew from his bony grasp! Still go the scar.

## Animated Objects

Animated objects are crafted with potent magic to follow the commands of their creators. When not commanded, they follow the last order they received to the best of their ability, and can act independently to fulfill simple instructions. Some animated objects (including many of those created in the Feywild) might converse fluently or adopt a persona, but most are simple automatons.

### Constructed Nature

An animated object doesn't require air, food, drink, or sleep. The magic that animates an object is dispelled when the construct drops to 0 hit points. An animated object reduced to 0 hit points becomes inanimate and is too damaged to be of much use or value to anyone.

```statblock
"name": "Flying Sword"
"size": "Small"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "17"
"hit_dice": "5d6"
"stats":
- !!int "12"
- !!int "15"
- !!int "11"
- !!int "1"
- !!int "5"
- !!int "1"
"speed": "0 ft., fly 50 ft. (hover)"
"saves":
  "Dexterity": !!int "4"
"damage_immunities": "poison, psychic"
"condition_immunities": "[blinded](3-Mechanics/CLI/rules/conditions.md#Blinded), [charmed](3-Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [deafened](3-Mechanics/CLI/rules/conditions.md#Deafened), [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](3-Mechanics/CLI/rules/conditions.md#Petrified),\
  \ [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 7"
"languages": ""
"cr": "1/4"
"traits":
- "desc": "The sword is [incapacitated](3-Mechanics/CLI/rules/conditions.md#Incapacitated)\
    \ while in the area of an [antimagic field](3-Mechanics/CLI/spells/antimagic-field.md).\
    \ If targeted by [dispel magic](3-Mechanics/CLI/spells/dispel-magic.md), the sword\
    \ must succeed on a Constitution saving throw against the caster's spell save\
    \ DC or fall [unconscious](3-Mechanics/CLI/rules/conditions.md#Unconscious) for\
    \ 1 minute."
  "name": "Antimagic Susceptibility"
- "desc": "While the sword remains motionless and isn't flying, it is indistinguishable\
    \ from a normal sword."
  "name": "False Appearance"
"actions":
- "desc": "Melee Weapon Attack: dice:1d20+3|noform|noparens|text(+3) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d8+1|noform|noparens|avg|text(5) (1d8 + 1)\
    \ slashing damage."
  "name": "Longsword"
"source":
- "MM"
- "KftGV"
"image": "3-Mechanics/CLI/bestiary/construct/token/flying-sword.webp"
```
^statblock