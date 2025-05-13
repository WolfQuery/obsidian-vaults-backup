---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
aliases: ["Ghost"]
---
# [Ghost](3-Mechanics\CLI\bestiary\undead/ghost.md)
*Source: Monster Manual p. 147, Keys from the Golden Vault. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

A ghost is the soul of a once-living creature, bound to haunt a specific location, creature, or object that held significance to it in its life.

## Unfinished Business

A ghost yearns to complete some unresolved task from its life. It might seek to avenge its own death, fulfill an oath, or relay a message to a loved one. A ghost might not realize that it has died and continue the everyday routine of its life. Others are driven by wickedness or spite, as with a ghost that refuses to rest until every member of a certain family or organization is dead.

The surest way to rid an area of a ghost is to resolve its unfinished business. A ghost can be destroyed more easily by invoking a weakness tied to its former life. The ghost of a person tortured to death might be killed again by the implements of that torture. The ghost of a gardener might become more vulnerable when exposed to a potent floral fragrance.

## Ghostly Manifestations

Sensations of profound sadness, loneliness, and unfulfilled yearning emanate from places where ghostly hauntings occur. Strange sounds or unnatural silences create an unsettling atmosphere. Cold spots settle in rooms that have roaring fires. A choking stench might seep into the area, inanimate objects might move of their own accord, and corpses might rise from the grave. The ghost has no control over these manifestations; they simply occur.

## Undead Nature

A ghost doesn't require air, food, drink, or sleep.

```statblock
"name": "Ghost"
"size": "Medium"
"type": "undead"
"alignment": "Any alignment"
"ac": !!int "11"
"hp": !!int "45"
"hit_dice": "10d8"
"stats":
- !!int "7"
- !!int "13"
- !!int "10"
- !!int "10"
- !!int "12"
- !!int "17"
"speed": "0 ft., fly 40 ft. (hover)"
"damage_resistances": "acid; fire; lightning; thunder; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "[charmed](3-Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened), [grappled](3-Mechanics/CLI/rules/conditions.md#Grappled),\
  \ [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](3-Mechanics/CLI/rules/conditions.md#Petrified),\
  \ [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned), [prone](3-Mechanics/CLI/rules/conditions.md#Prone),\
  \ [restrained](3-Mechanics/CLI/rules/conditions.md#Restrained)"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": "any languages it knew in life"
"cr": "4"
"traits":
- "desc": "The ghost can see 60 feet into the Ethereal Plane when it is on the Material\
    \ Plane, and vice versa."
  "name": "Ethereal Sight"
- "desc": "The ghost can move through other creatures and objects as if they were\
    \ difficult terrain. It takes dice:1d10|noform|noparens|avg|text(5) (1d10)\
    \ force damage if it ends its turn inside an object."
  "name": "Incorporeal Movement"
"actions":
- "desc": "Melee Weapon Attack: dice:1d20+5|noform|noparens|text(+5) to hit, reach\
    \ 5 ft., one target. Hit: dice:4d6+3|noform|noparens|avg|text(17) (4d6 +\
    \ 3) necrotic damage."
  "name": "Withering Touch"
- "desc": "The ghost enters the Ethereal Plane from the Material Plane, or vice versa.\
    \ It is visible on the Material Plane while it is in the Border Ethereal, and\
    \ vice versa, yet it can't affect or be affected by anything on the other plane."
  "name": "Etherealness"
- "desc": "Each non-undead creature within 60 feet of the ghost that can see it must\
    \ succeed on a DC 13 Wisdom saving throw or be [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened)\
    \ for 1 minute. If the save fails by 5 or more, the target also ages 1d4 × 10\
    \ years. A [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened) target\
    \ can repeat the saving throw at the end of each of its turns, ending the [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened)\
    \ condition on itself on a success. If a target's saving throw is successful or\
    \ the effect ends for it, the target is immune to this ghost's Horrifying Visage\
    \ for the next 24 hours. The aging effect can be reversed with a  [greater restoration](3-Mechanics/CLI/spells/greater-restoration.md)\
    \ spell, but only within 24 hours of it occurring."
  "name": "Horrifying Visage"
- "desc": "One humanoid that the ghost can see within 5 feet of it must succeed on\
    \ a DC 13 Charisma saving throw or be possessed by the ghost; the ghost then disappears,\
    \ and the target is [incapacitated](3-Mechanics/CLI/rules/conditions.md#Incapacitated)\
    \ and loses control of its body. The ghost now controls the body but doesn't deprive\
    \ the target of awareness. The ghost can't be targeted by any attack, spell, or\
    \ other effect, except ones that turn undead, and it retains its alignment, Intelligence,\
    \ Wisdom, Charisma, and immunity to being [charmed](3-Mechanics/CLI/rules/conditions.md#Charmed)\
    \ and [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened). It otherwise\
    \ uses the possessed target's statistics, but doesn't gain access to the target's\
    \ knowledge, class features, or proficiencies.\n\nThe possession lasts until the\
    \ body drops to 0 hit points, the ghost ends it as a bonus action, or the ghost\
    \ is turned or forced out by an effect like the [dispel evil and good](3-Mechanics/CLI/spells/dispel-evil-and-good.md)\
    \ spell. When the possession ends, the ghost reappears in an unoccupied space\
    \ within 5 feet of the body. The target is immune to this ghost's Possession for\
    \ 24 hours after succeeding on the saving throw or after the possession ends."
  "name": "Possession (Recharge 6)"
"source":
- "MM"
- "KftGV"
"image": "3-Mechanics/CLI/bestiary/undead/token/ghost.webp"
```
^statblock

## Environment

underdark, urban