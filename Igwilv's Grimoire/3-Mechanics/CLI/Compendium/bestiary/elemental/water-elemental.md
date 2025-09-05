---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/elemental
statblock: inline
statblock-link: "#^statblock"
aliases:
- Water Elemental
---
# [Water Elemental](3-Mechanics\CLI\Compendium\bestiary\elemental/water-elemental.md)
*Source: Monster Manual p. 125, Dragon of Icespire Peak, Tasha's Cauldron of Everything. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

A water elemental is a cresting wave that rolls across the ground, becoming nearly invisible at it courses through a larger body of water. It engulfs creatures that stand against it, filling their mouths and lungs as easily as it smothers flame.

## Elementals

Elementals are incarnations of the elements that make up the universe: air, earth, fire, and water. Though little more than animated energy on their own planes of existence, they can be called on by spellcasters and powerful beings to take shape and perform tasks.

### Living Elements

On its home plane, an elemental is a bodiless life force. Its dim consciousness manifests as a physical shape only when focused by the power of magic. A wild spirit of elemental force has no desire except to course through the element of its native plane. Like beasts of the Material Plane, these elemental spirits have no society or culture, and little sense of being.

### Conjured by Magic

Certain spells and magic items can conjure an elemental, summoning it from the Inner Planes to the Material Plane. Elementals instinctively resent being pulled from their native planes and bound into service. A creature that summons an elemental must assert force of will to control it.

### Bound and Shaped

Powerful magic can bind an elemental spirit into a material template that defines a specific use and function. Invisible stalkers are air elementals bound to a specific form, in the same way that water elementals can be shaped into water weirds.

### Elemental Nature

An elemental doesn't require air, food, drink, or sleep.

```statblock
"name": "Water Elemental"
"size": "Large"
"type": "elemental"
"alignment": "Neutral"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "114"
"hit_dice": "12d10 + 48"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "14"
  - !!int "18"
  - !!int "5"
  - !!int "10"
  - !!int "8"
"speed": "30 ft., swim 90 ft."
"damage_resistances": "acid; bludgeoning, piercing, slashing from nonmagical attacks"
"damage_immunities": "poison"
"condition_immunities": "[exhaustion](/3-Mechanics/CLI/Rules/conditions.md#Exhaustion),\
  \ [grappled](/3-Mechanics/CLI/Rules/conditions.md#Grappled), [paralyzed](/3-Mechanics/CLI/Rules/conditions.md#Paralyzed),\
  \ [petrified](/3-Mechanics/CLI/Rules/conditions.md#Petrified), [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned),\
  \ [prone](/3-Mechanics/CLI/Rules/conditions.md#Prone), [restrained](/3-Mechanics/CLI/Rules/conditions.md#Restrained),\
  \ [unconscious](/3-Mechanics/CLI/Rules/conditions.md#Unconscious)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Aquan"
"cr": "5"
"traits":
  - "desc": "The elemental can enter a hostile creature's space and stop there. It\
      \ can move through a space as narrow as 1 inch wide without squeezing."
    "name": "Water Form"
  - "desc": "If the elemental takes cold damage, it partially freezes; its speed is\
      \ reduced by 20 feet until the end of its next turn."
    "name": "Freeze"
"actions":
  - "desc": "The elemental makes two slam attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13\
      \ (2d8 + 4) bludgeoning damage."
    "name": "Slam"
  - "desc": "Each creature in the elemental's space must make a DC 15 Strength saving\
      \ throw. On a failure, a target takes 13 (2d8 + 4) bludgeoning damage. If it\
      \ is Large or smaller, it is also [grappled](/3-Mechanics/CLI/Rules/conditions.md#Grappled)\
      \ (escape DC 14). Until this grapple ends, the target is [restrained](/3-Mechanics/CLI/Rules/conditions.md#Restrained)\
      \ and unable to breathe unless it can breathe water. If the saving throw is\
      \ successful, the target is pushed out of the elemental's space.\n\nThe elemental\
      \ can grapple one Large creature or up to two Medium or smaller creatures at\
      \ one time. At the start of each of the elemental's turns, each target [grappled](/3-Mechanics/CLI/Rules/conditions.md#Grappled)\
      \ by it takes 13 (2d8 + 4) bludgeoning damage. A creature within 5 feet of the\
      \ elemental can pull a creature or object out of it by taking an action to make\
      \ a DC 14 Strength check and succeeding."
    "name": "Whelm (Recharge 4-6)"
"source":
  - "MM"
  - "DIP"
  - "TCE"
"image": "/3-Mechanics/CLI/Compendium/bestiary/elemental/token/water-elemental.webp"
```
^statblock

## Environment

underwater, swamp, coastal