---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdh
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/illuskan-human
statblock: inline
statblock-link: "#^statblock"
aliases:
- Urstul Floxin
---
# [Urstul Floxin](3-Mechanics\CLI\Compendium\bestiary\npc/urstul-floxin-wdh.md)
*Source: Waterdeep: Dragon Heist p. 216*  

Urstul Floxin works for Manshoon, and he is the highest-ranking member of the Zhentarim squad stationed at House Gralhund. Urstul is a glorified thug with all the charm and breeding of a snake, but the Gralhunds tolerate him because he feeds them useful information culled from his spies throughout the city. Urstul takes his orders from Manshoon's current simulacrum, which comes and goes from House Gralhund by way of a teleportation circle (connected to the circle in Kolat Towers).

Urstul is a large, heavyset man in his forties. He storms about House Gralhund like he owns the place. He has a collection of black flying snakes that he uses as couriers to deliver messages to underlings throughout the city.

```statblock
"name": "Urstul Floxin (WDH)"
"size": "Medium"
"type": "humanoid"
"subtype": "Illuskan human"
"alignment": "Lawful Evil"
"ac": !!int "15"
"ac_class": "[studded leather](/3-Mechanics/CLI/Compendium/items/studded-leather-armor.md)"
"hp": !!int "78"
"hit_dice": "12d8 + 24"
"modifier": !!int "3"
"stats":
  - !!int "11"
  - !!int "16"
  - !!int "14"
  - !!int "13"
  - !!int "11"
  - !!int "10"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "6"
  - "intelligence": !!int "4"
"skillsaves":
  - "name": "[Acrobatics](/3-Mechanics/CLI/Rules/skills.md#Acrobatics)"
    "desc": "+6"
  - "name": "[Deception](/3-Mechanics/CLI/Rules/skills.md#Deception)"
    "desc": "+3"
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](/3-Mechanics/CLI/Rules/skills.md#Stealth)"
    "desc": "+9"
"damage_resistances": "poison"
"senses": "passive Perception 13"
"languages": "Common, Orc, Thieves' cant"
"cr": "8"
"traits":
  - "desc": "During its first turn, Urstul has advantage on attack rolls against any\
      \ creature that hasn't taken a turn. Any hit Urstul scores against a [surprised](/3-Mechanics/CLI/Rules/conditions.md#Surprised)\
      \ creature is a critical hit."
    "name": "Assassinate"
  - "desc": "If Urstul is subjected to an effect that allows him to make a Dexterity\
      \ saving throw to take only half damage, Urstul instead takes no damage if he\
      \ succeeds on the saving throw, and only half damage if it fails."
    "name": "Evasion"
  - "desc": "Urstul deals an extra 14 (4d6) damage when he hits a target with a weapon\
      \ attack and has advantage on the attack roll, or when the target is within\
      \ 5 feet of an ally of Urstul that isn't [incapacitated](/3-Mechanics/CLI/Rules/conditions.md#Incapacitated)\
      \ and Urstul doesn't have disadvantage on the attack roll."
    "name": "Sneak Attack (1/Turn)"
"actions":
  - "desc": "Urstul makes two shortsword attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6\
      \ + 3) piercing damage, and the target must make a DC 15 Constitution saving\
      \ throw, taking 24 (7d6) poison damage on a failed save, or half as much damage\
      \ on a successful one."
    "name": "Shortsword"
  - "desc": "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit:\
      \ 7 (1d8 + 3) piercing damage, and the target must make a DC 15 Constitution\
      \ saving throw, taking 24 (7d6) poison damage on a failed save, or half as much\
      \ damage on a successful one."
    "name": "Light Crossbow"
"source":
  - "WDH"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/urstul-floxin-wdh.webp"
```
^statblock