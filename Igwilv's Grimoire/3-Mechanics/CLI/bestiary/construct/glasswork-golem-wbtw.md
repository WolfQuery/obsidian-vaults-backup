---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct
statblock: inline
aliases: ["Glasswork Golem"]
---
# [Glasswork Golem](3-Mechanics\CLI\bestiary\construct/glasswork-golem-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 193*  

```statblock
"name": "Glasswork Golem (WBtW)"
"size": "Medium"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "36"
"hit_dice": "8d8"
"stats":
- !!int "13"
- !!int "10"
- !!int "10"
- !!int "1"
- !!int "10"
- !!int "1"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "2"
  "Wisdom": !!int "2"
  "Constitution": !!int "2"
"damage_immunities": "poison, psychic"
"condition_immunities": "[blinded](3-Mechanics/CLI/rules/conditions.md#Blinded), [charmed](3-Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [deafened](3-Mechanics/CLI/rules/conditions.md#Deafened), [exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed),\
  \ [petrified](3-Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "blindsight 60 ft. (blind beyond this radius), passive Perception 10"
"languages": ""
"cr": "2"
"traits":
- "desc": "If the golem is embedded in a window and motionless at the start of combat,\
    \ it has advantage on its initiative roll. Moreover, if a creature hasn't observed\
    \ the golem move or act, that creature must succeed on a DC 18 Intelligence ([Investigation](3-Mechanics/CLI/rules/skills.md#Investigation))\
    \ check to discern that the golem is animate."
  "name": "False Appearance"
- "desc": "The golem is immune to any spell or effect that would alter its form."
  "name": "Immutable Form"
- "desc": "The golem regains 10 hit points at the start of its turn. If the golem\
    \ takes bludgeoning or thunder damage, this trait doesn't function at the start\
    \ of the golem's next turn. The golem is destroyed only if it starts its turn\
    \ with 0 hit points and doesn't regenerate."
  "name": "Regeneration"
- "desc": "The golem doesn't require air, food, drink, or sleep."
  "name": "Unusual Nature"
"actions":
- "desc": "The golem makes two Glass Sword attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice:1d20+3|noform|noparens|text(+3) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d8+1|noform|noparens|avg|text(5) (1d8 + 1)\
    \ slashing damage."
  "name": "Glass Sword"
"bonus_actions":
- "desc": "Magical, colored light springs from the golem in a 15-foot cone. Each creature\
    \ in the cone must succeed on a DC 10 Constitution saving throw or be [blinded](3-Mechanics/CLI/rules/conditions.md#Blinded)\
    \ for 1 minute. A creature can repeat the saving throw at the end of each of its\
    \ turns, ending the effect on itself on a success."
  "name": "Dazzling Light (Recharge 5-6)"
"source":
- "WBtW"
"image": "3-Mechanics/CLI/bestiary/construct/token/glasswork-golem-wbtw.webp"
```
^statblock