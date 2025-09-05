---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Giant Elk
---
# [Giant Elk](3-Mechanics\CLI\Compendium\bestiary\beast/giant-elk.md)
*Source: Monster Manual p. 325. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

The majestic giant elk is rare to the point that its appearance is often taken as a foreshadowing of an important event, such as the birth of a king. Legends tell of gods that take the form of giant elk when visiting the Material Plane. Many cultures therefore believe that to hunt these creatures is to invite divine wrath.

```statblock
"name": "Giant Elk"
"size": "Huge"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "42"
"hit_dice": "5d12 + 10"
"modifier": !!int "3"
"stats":
  - !!int "19"
  - !!int "16"
  - !!int "14"
  - !!int "7"
  - !!int "14"
  - !!int "10"
"speed": "60 ft."
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+4"
"senses": "passive Perception 14"
"languages": "Giant Elk, understands Common, Elvish, Sylvan but can't speak them"
"cr": "2"
"traits":
  - "desc": "If the elk moves at least 20 feet straight toward a target and then hits\
      \ it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage.\
      \ If the target is a creature, it must succeed on a DC 14 Strength saving throw\
      \ or be knocked [prone](/3-Mechanics/CLI/Rules/conditions.md#Prone)."
    "name": "Charge"
"actions":
  - "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11\
      \ (2d6 + 4) bludgeoning damage."
    "name": "Ram"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one [prone](/3-Mechanics/CLI/Rules/conditions.md#Prone)\
      \ creature. Hit: 22 (4d8 + 4) bludgeoning damage."
    "name": "Hooves"
"source":
  - "MM"
"image": "/3-Mechanics/CLI/Compendium/bestiary/beast/token/giant-elk.webp"
```
^statblock

## Environment

mountain, grassland, forest, hill