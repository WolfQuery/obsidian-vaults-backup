---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdh
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/lightfoot-halfling
statblock: inline
statblock-link: "#^statblock"
aliases:
- Zhent Martial Arts Adept
---
# [Zhent Martial Arts Adept](3-Mechanics\CLI\Compendium\bestiary\humanoid/zhent-martial-arts-adept-wdh.md)
*Source: Waterdeep: Dragon Heist p. 160*  

The adepts believe that Manshoon should be the Zhantarim leader and serves him fearlessly

```statblock
"name": "Zhent Martial Arts Adept (WDH)"
"size": "Small"
"type": "humanoid"
"subtype": "Lightfoot halfling"
"alignment": "Lawful Evil"
"ac": !!int "16"
"hp": !!int "49"
"hit_dice": "11d6 + 11"
"modifier": !!int "3"
"stats":
  - !!int "11"
  - !!int "17"
  - !!int "13"
  - !!int "11"
  - !!int "16"
  - !!int "10"
"speed": "25 ft."
"skillsaves":
  - "name": "[Acrobatics](/3-Mechanics/CLI/Rules/skills.md#Acrobatics)"
    "desc": "+5"
  - "name": "[Insight](/3-Mechanics/CLI/Rules/skills.md#Insight)"
    "desc": "+5"
  - "name": "[Stealth](/3-Mechanics/CLI/Rules/skills.md#Stealth)"
    "desc": "+5"
"senses": "passive Perception 13"
"languages": "Common, Halfling"
"cr": "3"
"traits":
  - "desc": "The adept can move through the space of a medium of larger creature."
    "name": "Halfling Nimbleness"
  - "desc": "The adept has advantage on any saving throws against being [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened)."
    "name": "Brave"
  - "desc": "While the adept is wearing no armor and wielding no shield, their AC\
      \ includes their Wisdom modifier."
    "name": "Unarmored Defense"
"actions":
  - "desc": "The adept makes three unarmed strikes or three dart attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8\
      \ + 3) bludgeoning damage. If the target is a creature, the adept can choose\
      \ one of the following additional effects:\n\n- The target must succeed on a\
      \ DC 13 Strength saving throw or drop one item it is holding (adept's choice).\
      \  \n- The target must succeed on a DC 13 Dexterity saving throw or be knocked\
      \ [prone](/3-Mechanics/CLI/Rules/conditions.md#Prone).  \n- The target must\
      \ succeed on a DC 13 Constitution saving throw or be [stunned](/3-Mechanics/CLI/Rules/conditions.md#Stunned)\
      \ until the end of the adept's next turn.  "
    "name": "Unarmed Strike"
  - "desc": "Ranged Weapon Attack: +5 to hit, range 20/60 ft., one target. Hit:\
      \ 5 (1d4 + 3) piercing damage."
    "name": "Dart"
"reactions":
  - "desc": "In response to being hit by a ranged weapon attack, the adept deflects\
      \ the missile. The damage it takes from the attack is reduced by 1d10 + 3. If\
      \ the damage is reduced to 0, the adept catches the missile if it's small enough\
      \ to hold in one hand and the adept has a hand free."
    "name": "Deflect Missile"
"source":
  - "WDH"
"image": "/3-Mechanics/CLI/Compendium/bestiary/humanoid/token/zhent-martial-arts-adept-wdh.webp"
```
^statblock