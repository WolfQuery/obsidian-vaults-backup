---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/beast
statblock: inline
statblock-link: "#^statblock"
aliases:
- Stirge
---
# [Stirge](3-Mechanics\CLI\Compendium\bestiary\beast/stirge.md)
*Source: Monster Manual p. 284, Lost Mine of Phandelver, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage, Dragon of Icespire Peak, Keys from the Golden Vault. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

This horrid flying creature looks like a cross between a large bat and an oversized mosquito. Its legs end in sharp pincers, and its long, needle-like proboscis slashes the air as it seeks its next meal.

Stirges feed on the blood of living creatures, attaching and draining them slowly. Although they pose little danger in small numbers, packs of stirges can be a formidable threat, reattaching as quickly as their weakening prey can pluck them off.

## Blood Drain

A stirge attacks by landing on a victim, finding a vulnerable spot, and plunging its proboscis into the flesh while using its pincer legs to latch on to the victim. Once the stirge has sated itself, it detaches and flies off to digest its meal.

```statblock
"name": "Stirge"
"size": "Tiny"
"type": "beast"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "2"
"hit_dice": "1d4"
"modifier": !!int "3"
"stats":
  - !!int "4"
  - !!int "16"
  - !!int "11"
  - !!int "2"
  - !!int "8"
  - !!int "6"
"speed": "10 ft., fly 40 ft."
"senses": "darkvision 60 ft., passive Perception 9"
"languages": ""
"cr": "1/8"
"actions":
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5\
      \ (1d4 + 3) piercing damage, and the stirge attaches to the target. While attached,\
      \ the stirge doesn't attack. Instead, at the start of each of the stirge's turns,\
      \ the target loses 5 (1d4 + 3) hit points due to blood loss.\n\nThe stirge can\
      \ detach itself by spending 5 feet of its movement. It does so after it drains\
      \ 10 hit points of blood from the target or the target dies. A creature, including\
      \ the target, can use its action to detach the stirge."
    "name": "Blood Drain"
"source":
  - "MM"
  - "LMoP"
  - "WDH"
  - "WDMM"
  - "DIP"
  - "KftGV"
"image": "/3-Mechanics/CLI/Compendium/bestiary/beast/token/stirge.webp"
```
^statblock

## Environment

grassland, forest, swamp, hill, urban, desert, coastal, mountain, underdark