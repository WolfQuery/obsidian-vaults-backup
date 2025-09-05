---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Gas Spore
---
# [Gas Spore](3-Mechanics\CLI\Compendium\bestiary\plant/gas-spore.md)
*Source: Monster Manual p. 138, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage*  

The first gas spores are thought to have been spawned from dead beholders, whose moldering corpses fed a parasitic fungus with aberrant magic. Having long since adapted into a unique plant creature, a gas spore grows quickly and purposefully out of any corpse, creating a malevolent-looking mockery of the most feared denizen of the Underdark.

## Eye Tyrant's Form

A gas spore is a spherical, balloon-like fungus that resembles a beholder from a distance, though its true nature becomes increasingly obvious as one approaches it. The monster possesses a blind central "eye" and rhizome growths sprouting from its upper surface, superficially resembling a beholder's eyestalks.

## Death Burst

A gas spore is a hollow shell filled with a lighter-than-air gas that enables it to float as a beholder does. Piercing the shell with even the weakest attack causes the creature to burst apart, releasing a cloud of deadly spores. A creature that inhales the spores becomes host to them, and is often dead within a day. Its corpse then becomes the spawning ground from which new gas spores arise.

## Beholder Memories

A gas spore that sprouts from a beholder's corpse sometimes carries within it memories of its deceased parent. When the gas spore explodes, its deadly spores cast those memories adrift. Any creature that inhales the spores and survives inherits one or more of the beholder's fragmented memories, and might gain useful information about the beholder's former lair and other nearby places and creatures of interest.

## Fungi

With its sky of jagged stone and perpetual night, the Underdark is home to all manner of fungi. Taking the place of plants in the subterranean realm, fungi are vital to the survival of many underground species, providing nourishment and shelter in the unforgiving darkness.

Fungi spawn in organic matter, then break that matter down to consume it, feeding on filth and corpses. As they mature, fungi eject spores that drift on the lightest breeze to spawn new fungi.

Not needing sunlight or warmth to grow, fungi thrive in every corner and crevice of the Underdark. Transformed by the magic that permeates that underground realm, Underdark fungi often develop potent defensive mechanisms or abilities of mimicry and attack. The largest specimens can spread to create vast subterranean forests in which countless creatures live and feed.

```statblock
"name": "Gas Spore"
"size": "Large"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "5"
"hp": !!int "1"
"hit_dice": "1d10 - 4"
"modifier": !!int "-5"
"stats":
  - !!int "5"
  - !!int "1"
  - !!int "3"
  - !!int "1"
  - !!int "1"
  - !!int "1"
"speed": "0 ft., fly 10 ft. (hover)"
"damage_immunities": "poison"
"condition_immunities": "[blinded](/3-Mechanics/CLI/Rules/conditions.md#Blinded),\
  \ [deafened](/3-Mechanics/CLI/Rules/conditions.md#Deafened), [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened),\
  \ [paralyzed](/3-Mechanics/CLI/Rules/conditions.md#Paralyzed), [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned),\
  \ [prone](/3-Mechanics/CLI/Rules/conditions.md#Prone)"
"senses": "blindsight 30 ft. (blind beyond this radius), passive Perception 5"
"languages": ""
"cr": "1/2"
"traits":
  - "desc": "The gas spore explodes when it drops to 0 hit points. Each creature within\
      \ 20 feet of it must succeed on a DC 15 Constitution saving throw or take 10\
      \ (3d6) poison damage and become infected with a disease on a failed save. Creatures\
      \ immune to the [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned) condition\
      \ are immune to this disease.\n\nSpores invade an infected creature's system,\
      \ killing the creature in a number of hours equal to d12 + the creature's Constitution\
      \ score, unless the disease is removed. In half that time, the creature becomes\
      \ [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned) for the rest of\
      \ the duration. After the creature dies, it sprouts 2d4 Tiny gas spores that\
      \ grow to full size in 7 days."
    "name": "Death Burst"
  - "desc": "The gas spore resembles a beholder. A creature that can see the gas spore\
      \ can discern its true nature with a successful DC 15 Intelligence ([Nature](/3-Mechanics/CLI/Rules/skills.md#Nature))\
      \ check."
    "name": "Eerie Resemblance"
"actions":
  - "desc": "Melee Weapon Attack: +0 to hit, reach 5 ft., one creature. Hit: 1\
      \ poison damage, and the creature must succeed on a DC 10 Constitution saving\
      \ throw or become infected with the disease described in the Death Burst trait."
    "name": "Touch"
"source":
  - "MM"
  - "WDH"
  - "WDMM"
"image": "/3-Mechanics/CLI/Compendium/bestiary/plant/token/gas-spore.webp"
```
^statblock

## Environment

underdark