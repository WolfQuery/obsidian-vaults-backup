---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdh
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/dwarf
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ahmaergo
---
# [Ahmaergo](3-Mechanics\CLI\Compendium\bestiary\npc/ahmaergo-wdh.md)
*Source: Waterdeep: Dragon Heist p. 193*  

Ahmaergo, Xanathar's majordomo, has a fascination with minotaurs. Although outwardly civil, the shield dwarf is as devious and corrupt as the worst devil, yet also unflinchingly loyal to his beholder master.

After the beholder, Ahmaergo is the most influential member of the Xanathar Guild.

```statblock
"name": "Ahmaergo (WDH)"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf"
"alignment": "Lawful Evil"
"ac": !!int "18"
"ac_class": "[plate armor](/3-Mechanics/CLI/Compendium/items/plate-armor.md)"
"hp": !!int "143"
"hit_dice": "22d8 + 44"
"modifier": !!int "2"
"stats":
  - !!int "20"
  - !!int "15"
  - !!int "14"
  - !!int "15"
  - !!int "14"
  - !!int "12"
"speed": "25 ft."
"saves":
  - "strength": !!int "9"
  - "constitution": !!int "6"
"skillsaves":
  - "name": "[Athletics](/3-Mechanics/CLI/Rules/skills.md#Athletics)"
    "desc": "+9"
  - "name": "[Intimidation](/3-Mechanics/CLI/Rules/skills.md#Intimidation)"
    "desc": "+5"
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+6"
"damage_resistances": "poison"
"senses": "darkvision 60 ft., passive Perception 16"
"languages": "Common, Dwarvish, Undercommon"
"cr": "9"
"traits":
  - "desc": "Ahmaergo has advantage on saving throws against being [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned)."
    "name": "Dwarven Resilience"
  - "desc": "Ahmaergo can reroll a saving throw that he fails. He must use the new\
      \ roll."
    "name": "Indomitable (2/Day)"
  - "desc": "As a bonus action, Ahmaergo can regain 20 hit points."
    "name": "Second Wind (Recharges after a Short or Long Rest)"
  - "desc": "If Ahmaergo has more than half his hit points remaining he deals an extra\
      \ 7 (2d6) slashing damage on every hit."
    "name": "Extra Damage"
"actions":
  - "desc": "Ahmaergo makes three attacks with his greataxe."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 11\
      \ (1d12 + 5) slashing damage"
    "name": "Greataxe"
  - "desc": "Ranged Weapon Attack: +6 to hit, range 100/400 ft., one target. Hit:\
      \ 7 (1d10 + 2) piercing damage."
    "name": "Heavy Crossbow"
"source":
  - "WDH"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/ahmaergo-wdh.webp"
```
^statblock