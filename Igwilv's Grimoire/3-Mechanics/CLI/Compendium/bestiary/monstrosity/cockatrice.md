---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Cockatrice
---
# [Cockatrice](3-Mechanics\CLI\Compendium\bestiary\monstrosity/cockatrice.md)
*Source: Monster Manual p. 42, The Wild Beyond the Witchlight. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

The cockatrice looks like a hideous hybrid of lizard, bird, and bat, and it is infamous for its ability to turn flesh to stone. These omnivores have a diet that consists of berries, nuts, flowers, and small animals such as insects, mice, and frogs-things they can swallow whole. They would be no threat to anything else if not for their fierce and frenzied response to even a hint of danger. A cockatrice flies into the face of any threat, squawking and madly beating its wings as its head darts out to peck. The smallest scratch from a cockatrice's beak can spell doom as its victim slowly turns to stone from the injury.

```statblock
"name": "Cockatrice"
"size": "Small"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "27"
"hit_dice": "6d6 + 6"
"modifier": !!int "1"
"stats":
  - !!int "6"
  - !!int "12"
  - !!int "12"
  - !!int "2"
  - !!int "13"
  - !!int "5"
"speed": "20 ft., fly 40 ft."
"senses": "darkvision 60 ft., passive Perception 11"
"languages": ""
"cr": "1/2"
"actions":
  - "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3\
      \ (1d4 + 1) piercing damage, and the target must succeed on a DC 11 Constitution\
      \ saving throw against being magically [petrified](/3-Mechanics/CLI/Rules/conditions.md#Petrified).\
      \ On a failed save, the creature begins to turn to stone and is [restrained](/3-Mechanics/CLI/Rules/conditions.md#Restrained).\
      \ It must repeat the saving throw at the end of its next turn. On a success,\
      \ the effect ends. On a failure, the creature is [petrified](/3-Mechanics/CLI/Rules/conditions.md#Petrified)\
      \ for 24 hours."
    "name": "Bite"
"source":
  - "MM"
  - "WBtW"
"image": "/3-Mechanics/CLI/Compendium/bestiary/monstrosity/token/cockatrice.webp"
```
^statblock

## Environment

grassland