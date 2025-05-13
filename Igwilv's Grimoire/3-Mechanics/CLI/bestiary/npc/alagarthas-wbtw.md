---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/elf
statblock: inline
aliases: ["Alagarthas"]
---
# [Alagarthas](3-Mechanics\CLI\bestiary\npc/alagarthas-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 144*  

This prince made a bargain with Endelyn Moongrave and is paying the price. He longs to return to his home in the Misty Forest and deal with the threat of an evil green dragon that nests there.

```statblock
"name": "Alagarthas (WBtW)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Chaotic Good"
"ac": !!int "10"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"stats":
- !!int "16"
- !!int "11"
- !!int "14"
- !!int "11"
- !!int "11"
- !!int "15"
"speed": "30 ft."
"saves":
  "Wisdom": !!int "2"
  "Constitution": !!int "4"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Common, Elvish"
"cr": "3"
"traits":
- "desc": "Alagarthas has advantage on saving throws against being [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened)."
  "name": "Brave"
- "desc": "Alagarthas has advantage on saving throws against being [charmed](3-Mechanics/CLI/rules/conditions.md#Charmed),\
    \ and magic can't put him to sleep."
  "name": "Fey Ancestry"
"actions":
- "desc": "Alagarthas makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice:1d20+5|noform|noparens|text(+5) to hit, reach\
    \ 5 ft., one target. Hit: 4 bludgeoning damage."
  "name": "Unarmed Strike"
- "desc": "For 1 minute, Alagarthas can utter a special command or warning whenever\
    \ a nonhostile creature that it can see within 30 feet of it makes an attack roll\
    \ or a saving throw. The creature can add a dice:d4|noform|noparens|avg (d4)\
    \ to its roll provided it can hear and understand him. A creature can benefit\
    \ from only one Leadership die at a time. This effect ends if Alagarthas is [incapacitated](3-Mechanics/CLI/rules/conditions.md#Incapacitated)."
  "name": "Leadership (Recharges after a Short or Long Rest)"
"source":
- "WBtW"
"image": "3-Mechanics/CLI/bestiary/npc/token/alagarthas-wbtw.webp"
```
^statblock