---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Giant Toad
---
# [Giant Toad](3-Mechanics\CLI\Compendium\bestiary\beast/giant-toad.md)
*Source: Monster Manual p. 329, Waterdeep: Dungeon of the Mad Mage, Tasha's Cauldron of Everything, The Wild Beyond the Witchlight, Keys from the Golden Vault. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

```statblock
"name": "Giant Toad"
"size": "Large"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "11"
"hp": !!int "39"
"hit_dice": "6d10 + 6"
"modifier": !!int "1"
"stats":
  - !!int "15"
  - !!int "13"
  - !!int "13"
  - !!int "2"
  - !!int "10"
  - !!int "3"
"speed": "20 ft., swim 40 ft."
"senses": "darkvision 30 ft., passive Perception 10"
"languages": ""
"cr": "1"
"traits":
  - "desc": "The toad can breathe air and water."
    "name": "Amphibious"
  - "desc": "The toad's long jump is up to 20 feet and its high jump is up to 10 feet,\
      \ with or without a running start."
    "name": "Standing Leap"
"actions":
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10\
      \ + 2) piercing damage plus 5 (d10) poison damage, and the target is [grappled](/3-Mechanics/CLI/Rules/conditions.md#Grappled)\
      \ (escape DC 13). Until this grapple ends, the target is [restrained](/3-Mechanics/CLI/Rules/conditions.md#Restrained),\
      \ and the toad can't bite another target."
    "name": "Bite"
  - "desc": "The toad makes one bite attack against a Medium or smaller target it\
      \ is grappling. If the attack hits, the target is swallowed, and the grapple\
      \ ends. The swallowed target is [blinded](/3-Mechanics/CLI/Rules/conditions.md#Blinded)\
      \ and [restrained](/3-Mechanics/CLI/Rules/conditions.md#Restrained), it has\
      \ total cover against attacks and other effects outside the toad, and it takes\
      \ 10 (3d6) acid damage at the start of each of the toad's turns. The toad can\
      \ have only one target swallowed at a time.\n\nIf the toad dies, a swallowed\
      \ creature is no longer [restrained](/3-Mechanics/CLI/Rules/conditions.md#Restrained)\
      \ by it and can escape from the corpse using 5 feet of movement, exiting [prone](/3-Mechanics/CLI/Rules/conditions.md#Prone)."
    "name": "Swallow"
"source":
  - "MM"
  - "WDMM"
  - "TCE"
  - "WBtW"
  - "KftGV"
"image": "/3-Mechanics/CLI/Compendium/bestiary/beast/token/giant-toad.webp"
```
^statblock

## Environment

underdark, forest, swamp, desert, coastal