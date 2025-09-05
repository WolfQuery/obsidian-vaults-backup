---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/plant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Treant Sapling
---
# [Treant Sapling](3-Mechanics\CLI\Compendium\bestiary\plant/treant-sapling-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 36*  

```statblock
"name": "Treant Sapling (WBtW)"
"size": "Large"
"type": "plant"
"alignment": "typically  Chaotic Good"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "45"
"hit_dice": "6d10 + 12"
"modifier": !!int "-1"
"stats":
  - !!int "17"
  - !!int "8"
  - !!int "15"
  - !!int "12"
  - !!int "12"
  - !!int "10"
"speed": "30 ft."
"damage_vulnerabilities": "fire"
"damage_resistances": "bludgeoning, piercing"
"senses": "passive Perception 11"
"languages": "Common, Druidic, Elvish, Sylvan"
"cr": "2"
"traits":
  - "desc": "If the treant is motionless at the start of combat, it has advantage\
      \ on its initiative roll. Moreover, if a creature hasn't observed the treant\
      \ move or act, that creature must succeed on a DC 18 Intelligence ([Investigation](/3-Mechanics/CLI/Rules/skills.md#Investigation))\
      \ check to discern that the treant is animate."
    "name": "False Appearance"
"actions":
  - "desc": "The treant makes two Slam attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10\
      \ + 3) bludgeoning damage."
    "name": "Slam"
  - "desc": "Ranged Weapon Attack: +5 to hit, range 20/60 ft., one target. Hit:\
      \ 14 (2d10 + 3) bludgeoning damage."
    "name": "Rock"
  - "desc": "The treant magically animates one or two trees it can see within 60 feet\
      \ of it. These trees have the same statistics as an awakened tree (see the Monster\
      \ Manual), except they can't speak. An animated tree acts as an ally of the\
      \ treant. The tree remains animate for 1 day or until it dies, until the treant\
      \ dies or is more than 120 feet from the tree, or until the treant takes a bonus\
      \ action to turn it back into an inanimate tree. The tree then takes root if\
      \ possible."
    "name": "Animate Trees (1/Day)"
"source":
  - "WBtW"
"image": "/3-Mechanics/CLI/Compendium/bestiary/plant/token/treant-sapling-wbtw.webp"
```
^statblock