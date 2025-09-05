---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Living Doll
---
# [Living Doll](3-Mechanics\CLI\Compendium\bestiary\construct/living-doll-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 238*  

A living doll is easily mistaken for an inanimate doll or a stuffed animal until it moves. Trapped within each living doll is a mean spirit that encourages those around it to behave badly toward others. The doll takes pleasure in tormenting the guilt-ridden and despondent, hastening their descent into depression or paranoia. Because it fears its own destruction, the doll rarely causes direct harm to others. When forced to defend itself, it debilitates opponents with its maniacal cackle and assaults the minds of its enemies by turning their worst fears against them.

```statblock
"name": "Living Doll (WBtW)"
"size": "Tiny"
"type": "construct"
"alignment": "typically  Neutral Evil"
"ac": !!int "11"
"ac_class": "natural armor"
"hp": !!int "28"
"hit_dice": "8d4 + 8"
"modifier": !!int "0"
"stats":
  - !!int "3"
  - !!int "11"
  - !!int "13"
  - !!int "10"
  - !!int "10"
  - !!int "7"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "2"
  - "wisdom": !!int "2"
  - "charisma": !!int "0"
"damage_immunities": "poison"
"condition_immunities": "[paralyzed](/3-Mechanics/CLI/Rules/conditions.md#Paralyzed),\
  \ [petrified](/3-Mechanics/CLI/Rules/conditions.md#Petrified), [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned)"
"senses": "darkvision 30 ft., passive Perception 10"
"languages": "Common"
"cr": "2"
"traits":
  - "desc": "If the doll is motionless at the start of combat, it has advantage on\
      \ its initiative roll. Moreover, if a creature hasn't observed the doll move\
      \ or act, that creature must succeed on a DC 18 Intelligence ([Investigation](/3-Mechanics/CLI/Rules/skills.md#Investigation))\
      \ check to discern that the doll is animate."
    "name": "False Appearance"
  - "desc": "The doll regains 5 hit points at the start of its turn. If the doll takes\
      \ fire or psychic damage, this trait doesn't function at the start of the doll's\
      \ next turn. The doll is destroyed only if it starts its turn with 0 hit points\
      \ and doesn't regenerate."
    "name": "Regeneration"
  - "desc": "The doll doesn't require air, food, drink, or sleep."
    "name": "Unusual Nature"
"actions":
  - "desc": "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: The\
      \ target is [grappled](/3-Mechanics/CLI/Rules/conditions.md#Grappled) (escape\
      \ DC 6) and takes 11 (2d10) psychic damage at the start of each of its turns\
      \ until this grapple ends. The doll can grapple only one creature at a time."
    "name": "Grabby Hands"
"bonus_actions":
  - "desc": "The doll cackles as it targets one or two creatures it can see within\
      \ 30 feet of it. Each target that can hear the doll's cackling must make a DC\
      \ 11 Wisdom saving throw, succeeding automatically if it has an Intelligence\
      \ of 4 or lower. On a failed saving throw, the creature takes 5 (2d4) psychic\
      \ damage and is [incapacitated](/3-Mechanics/CLI/Rules/conditions.md#Incapacitated)\
      \ for 1 minute as it is overcome by a fit of laughter. At the end of each of\
      \ its turns, the creature can repeat the saving throw, ending the effect on\
      \ itself on a success. A creature that succeeds on this saving throw is immune\
      \ to this doll's Cackle for 24 hours."
    "name": "Cackle (Recharge 4-6)"
"source":
  - "WBtW"
"image": "/3-Mechanics/CLI/Compendium/bestiary/construct/token/living-doll-wbtw.webp"
```
^statblock