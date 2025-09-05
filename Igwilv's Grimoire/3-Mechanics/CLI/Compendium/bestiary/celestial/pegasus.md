---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/celestial
statblock: inline
statblock-link: "#^statblock"
aliases:
- Pegasus
---
# [Pegasus](3-Mechanics\CLI\Compendium\bestiary\celestial/pegasus.md)
*Source: Monster Manual p. 250, The Wild Beyond the Witchlight. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

The white winged horses known as pegasi soar through the skies, a vision of grace and majesty. When they touch down on solid ground, they linger only for a moment, drinking from mountain springs and pristine lakes. Any sound or sign of another creature startles them, sending them off to fly once more among the clouds.

## Noble Mounts

Pegasi are highly prized as swift and reliable steeds, being faster and less temperamental than griffons, hippogriffs, and wyverns. However, these wild and shy creatures are as intelligent as humanoids, and so can't be traditionally broken and tamed. A pegasus must be persuaded to serve a good-aligned creature as a mount, but when it does so, it forges a lifelong bond with its new companion.

## Born of the Planes

Pegasi trace their origins to the Olympian Glades of Arborea, where they soar through the skies of that plane and serve as faithful mounts to the Seldarine, the pantheon of elven gods. These gods have been known to send pegasi to the Material Plane to aid those in need.

## Pegasi Nests

Pegasi mate for life, build their nests in hard-to-reach locations, and give birth to live young.

> [!quote] A quote from Tyllenvane d'Orien, dragonmarked scion arguing to change the symbol of House Orien from the unicorn to the pegasus  
> 
> Behold, the pegasus. It can outrace a dragon in the open sky, and only the best among us can ever hope to ride one. A fitting emblem for our great house, don't you think?


```statblock
"name": "Pegasus"
"size": "Large"
"type": "celestial"
"alignment": "Chaotic Good"
"ac": !!int "12"
"hp": !!int "59"
"hit_dice": "7d10 + 21"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "15"
  - !!int "16"
  - !!int "10"
  - !!int "15"
  - !!int "13"
"speed": "60 ft., fly 90 ft."
"saves":
  - "dexterity": !!int "4"
  - "wisdom": !!int "4"
  - "charisma": !!int "3"
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+6"
"senses": "passive Perception 16"
"languages": "understands Celestial, Common, Elvish, and Sylvan but can't speak"
"cr": "2"
"actions":
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11\
      \ (2d6 + 4) bludgeoning damage."
    "name": "Hooves"
"source":
  - "MM"
  - "WBtW"
"image": "/3-Mechanics/CLI/Compendium/bestiary/celestial/token/pegasus.webp"
```
^statblock

## Environment

grassland, forest, hill