---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdh
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/devil
statblock: inline
statblock-link: "#^statblock"
aliases:
- Osvaldo Cassalanter
---
# [Osvaldo Cassalanter](3-Mechanics\CLI\Compendium\bestiary\npc/osvaldo-cassalanter-wdh.md)
*Source: Waterdeep: Dragon Heist p. 124*  

```statblock
"name": "Osvaldo Cassalanter (WDH)"
"size": "Medium"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "85"
"hit_dice": "10d8 + 40"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "15"
  - !!int "18"
  - !!int "11"
  - !!int "12"
  - !!int "14"
"speed": "30 ft."
"saves":
  - "constitution": !!int "7"
  - "wisdom": !!int "4"
  - "charisma": !!int "5"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned)"
"senses": "darkvision 120 ft., passive Perception 11"
"languages": "Infernal, telepathy 120 ft."
"cr": "8"
"traits":
  - "desc": "Magical darkness doesn't impede Osvaldo's darkvision."
    "name": "Devil's Sight"
  - "desc": "Osvaldo has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Osvaldo makes two attacks with its chains."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 11\
      \ (2d6 + 4) slashing damage. The target is [grappled](/3-Mechanics/CLI/Rules/conditions.md#Grappled)\
      \ (escape DC 14) if Osvaldo isn't already grappling a creature. Until this grapple\
      \ ends, the target is [restrained](/3-Mechanics/CLI/Rules/conditions.md#Restrained)\
      \ and takes 7 (2d6) piercing damage at the start of each of its turns."
    "name": "Chain"
  - "desc": "Up to four chains Osvaldo can see within 60 feet of it magically sprout\
      \ razor-edged barbs and animate under Osvaldo's control, provided that the chains\
      \ aren't being worn or carried.\n\nEach animated chain is an object with AC\
      \ 20, 20 hit points, resistance to piercing damage, and immunity to psychic\
      \ and thunder damage. When Osvaldo uses Multiattack on its turn, it can use\
      \ each animated chain to make one additional chain attack. An animated chain\
      \ can grapple one creature of its own but can't make attacks while grappling.\
      \ An animated chain reverts to its inanimate state if reduced to 0 hit points\
      \ or if Osvaldo is [incapacitated](/3-Mechanics/CLI/Rules/conditions.md#Incapacitated)\
      \ or dies."
    "name": "Animate Chains (Recharges after a Short or Long Rest)"
"reactions":
  - "desc": "When a creature Osvaldo can see starts its turn within 30 feet of Osvaldo,\
      \ Osvaldo can create the illusion that it looks like one of the creature's departed\
      \ loved ones or bitter enemies. If the creature can see Osvaldo, it must succeed\
      \ on a DC 14 Wisdom saving throw or be [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened)\
      \ until the end of its turn."
    "name": "Unnerving Mask"
"source":
  - "WDH"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/osvaldo-cassalanter-wdh.webp"
```
^statblock