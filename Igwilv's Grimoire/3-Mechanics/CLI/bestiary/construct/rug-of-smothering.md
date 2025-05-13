---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct
statblock: inline
aliases: ["Rug of Smothering"]
---
# [Rug of Smothering](3-Mechanics\CLI\bestiary\construct/rug-of-smothering.md)
*Source: Monster Manual p. 20, The Wild Beyond the Witchlight, Keys from the Golden Vault. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*  

Would-be thieves and careless heroes arrive at the doorsteps of an enemy's abode, eyes and ears alert for traps, only to end their quest prematurely as the rugs beneath their feet animate and smother them to death.

A rug of smothering can be made in many different forms, from a finely woven carpet fit for a queen to a coarse mat in a peasant's hovel. Creatures with the ability to sense magic detect the rug's false magical aura.

In some cases, a rug of smothering is disguised as a [carpet of flying](3-Mechanics/CLI/items/carpet-of-flying.md) or another beneficial magic item. However, a character who stands or sits on the rug, or who attempts to utter a word of command, is quickly trapped as the rug of smothering rolls itself tightly around its victim.

## Animated Objects

Animated objects are crafted with potent magic to follow the commands of their creators. When not commanded, they follow the last order they received to the best of their ability, and can act independently to fulfill simple instructions. Some animated objects (including many of those created in the Feywild) might converse fluently or adopt a persona, but most are simple automatons.

### Constructed Nature

An animated object doesn't require air, food, drink, or sleep. The magic that animates an object is dispelled when the construct drops to 0 hit points. An animated object reduced to 0 hit points becomes inanimate and is too damaged to be of much use or value to anyone.

```statblock
"name": "Rug of Smothering"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "12"
"hp": !!int "33"
"hit_dice": "6d10"
"stats":
- !!int "17"
- !!int "14"
- !!int "10"
- !!int "1"
- !!int "3"
- !!int "1"
"speed": "10 ft."
"damage_immunities": "poison, psychic"
"condition_immunities": "[blinded](3-Mechanics/CLI/rules/conditions.md#Blinded), [charmed](3-Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [deafened](3-Mechanics/CLI/rules/conditions.md#Deafened), [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](3-Mechanics/CLI/rules/conditions.md#Petrified),\
  \ [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 6"
"languages": ""
"cr": "2"
"traits":
- "desc": "The rug is [incapacitated](3-Mechanics/CLI/rules/conditions.md#Incapacitated)\
    \ while in the area of an [antimagic field](3-Mechanics/CLI/spells/antimagic-field.md).\
    \ If targeted by [dispel magic](3-Mechanics/CLI/spells/dispel-magic.md), the rug\
    \ must succeed on a Constitution saving throw against the caster's spell save\
    \ DC or fall [unconscious](3-Mechanics/CLI/rules/conditions.md#Unconscious) for\
    \ 1 minute."
  "name": "Antimagic Susceptibility"
- "desc": "While it is grappling a creature, the rug takes only half the damage dealt\
    \ to it, and the creature [grappled](3-Mechanics/CLI/rules/conditions.md#Grappled)\
    \ by the rug takes the other half."
  "name": "Damage Transfer"
- "desc": "While the rug remains motionless, it is indistinguishable from a normal\
    \ rug."
  "name": "False Appearance"
"actions":
- "desc": "Melee Weapon Attack: dice:1d20+5|noform|noparens|text(+5) to hit, reach\
    \ 5 ft., one Medium or smaller creature. Hit: The creature is [grappled](3-Mechanics/CLI/rules/conditions.md#Grappled)\
    \ (escape DC 13). Until this grapple ends, the target is [restrained](3-Mechanics/CLI/rules/conditions.md#Restrained),\
    \ [blinded](3-Mechanics/CLI/rules/conditions.md#Blinded), and at risk of suffocating,\
    \ and the rug can't smother another target. In addition, at the start of each\
    \ of the target's turns, the target takes dice:2d6+3|noform|noparens|avg|text(10)\
    \ (2d6 + 3) bludgeoning damage."
  "name": "Smother"
"source":
- "MM"
- "WBtW"
- "KftGV"
"image": "3-Mechanics/CLI/bestiary/construct/token/rug-of-smothering.webp"
```
^statblock