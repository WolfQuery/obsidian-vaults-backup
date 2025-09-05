---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdmm
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/any-race
statblock: inline
statblock-link: "#^statblock"
aliases:
- Torbit
---
# [Torbit](3-Mechanics\CLI\Compendium\bestiary\npc/torbit-wdmm.md)
*Source: Waterdeep: Dungeon of the Mad Mage p. 115*  

Trained in the use of poison, assassins are remorseless killers who work for nobles, guildmasters, sovereigns, and anyone else who can afford them.

```statblock
"name": "Torbit (WDMM)"
"size": "Medium"
"type": "humanoid"
"subtype": "any race"
"alignment": "Chaotic Evil"
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
"languages": "Thieves' cant plus any two languages, Bullywug"
"cr": "8"
"traits":
  - "desc": "During its first turn, Torbit has advantage on attack rolls against any\
      \ creature that hasn't taken a turn. Any hit Torbit scores against a [surprised](/3-Mechanics/CLI/Rules/conditions.md#Surprised)\
      \ creature is a critical hit."
    "name": "Assassinate"
  - "desc": "If Torbit is subjected to an effect that allows it to make a Dexterity\
      \ saving throw to take only half damage, Torbit instead takes no damage if it\
      \ succeeds on the saving throw, and only half damage if it fails."
    "name": "Evasion"
  - "desc": "Torbit deals an extra 14 (4d6) damage when it hits a target with a weapon\
      \ attack and has advantage on the attack roll, or when the target is within\
      \ 5 feet of an ally of Torbit that isn't [incapacitated](/3-Mechanics/CLI/Rules/conditions.md#Incapacitated)\
      \ and Torbit doesn't have disadvantage on the attack roll."
    "name": "Sneak Attack (1/Turn)"
  - "desc": "Torbit"
    "name": "Amphibious"
  - "desc": "Torbit"
    "name": "Swamp Camouflage"
  - "desc": "Torbit"
    "name": "Standing Leap"
"actions":
  - "desc": "Torbit makes two shortsword attacks."
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
  - "WDMM"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/torbit-wdmm.webp"
```
^statblock