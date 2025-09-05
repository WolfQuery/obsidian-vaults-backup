---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdh
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/monstrosity/shapechanger
statblock: inline
statblock-link: "#^statblock"
aliases:
- Dining Table Mimic
---
# [Dining Table Mimic](3-Mechanics\CLI\Compendium\bestiary\monstrosity/dining-table-mimic-wdh.md)
*Source: Waterdeep: Dragon Heist p. 122*  

```statblock
"name": "Dining Table Mimic (WDH)"
"size": "Large"
"type": "monstrosity"
"subtype": "shapechanger"
"alignment": "Neutral"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "75"
"hit_dice": "10d10 + 20"
"modifier": !!int "1"
"stats":
  - !!int "17"
  - !!int "12"
  - !!int "15"
  - !!int "5"
  - !!int "13"
  - !!int "8"
"speed": "15 ft."
"skillsaves":
  - "name": "[Stealth](/3-Mechanics/CLI/Rules/skills.md#Stealth)"
    "desc": "+5"
"damage_immunities": "acid"
"condition_immunities": "[prone](/3-Mechanics/CLI/Rules/conditions.md#Prone)"
"senses": "darkvision 60 ft., passive Perception 11"
"languages": ""
"cr": "3"
"traits":
  - "desc": "The mimic can use its action to polymorph into an object or back into\
      \ its true, amorphous form. Its statistics are the same in each form. Any equipment\
      \ it is wearing or carrying isn't transformed. It reverts to its true form if\
      \ it dies."
    "name": "Shapechanger"
  - "desc": "The mimic adheres to anything that touches it. A Huge or smaller creature\
      \ adhered to the mimic is also [grappled](/3-Mechanics/CLI/Rules/conditions.md#Grappled)\
      \ by it (escape DC 13). Ability checks made to escape this grapple have disadvantage."
    "name": "Adhesive (Object Form Only)"
  - "desc": "While the mimic remains motionless, it is indistinguishable from an ordinary\
      \ object."
    "name": "False Appearance (Object Form Only)"
  - "desc": "The mimic has advantage on attack rolls against any creature [grappled](/3-Mechanics/CLI/Rules/conditions.md#Grappled)\
      \ by it."
    "name": "Grappler"
"actions":
  - "desc": "The mimic can make three attacks; two with its pseudopods and one with\
      \ its bite"
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
      \ + 3) bludgeoning damage. If the mimic is in object form, the target is subjected\
      \ to its Adhesive trait."
    "name": "Pseudopod"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
      \ + 3) piercing damage plus 4 (d8) acid damage."
    "name": "Bite"
"source":
  - "WDH"
"image": "/3-Mechanics/CLI/Compendium/bestiary/monstrosity/token/dining-table-mimic-wdh.webp"
```
^statblock