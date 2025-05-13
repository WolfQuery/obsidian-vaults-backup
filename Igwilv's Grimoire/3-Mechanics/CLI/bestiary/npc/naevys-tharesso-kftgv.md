---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/kftgv
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/elf
statblock: inline
aliases: ["Naevys Tharesso"]
---
# [Naevys Tharesso](3-Mechanics\CLI\bestiary\npc/naevys-tharesso-kftgv.md)
*Source: Keys from the Golden Vault p. 150*  

```statblock
"name": "Naevys Tharesso (KftGV)"
"size": "Medium"
"type": "humanoid"
"subtype": "elf"
"alignment": "Lawful Good"
"ac": !!int "18"
"ac_class": "[plate armor](3-Mechanics/CLI/items/plate-armor.md)"
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
"senses": "passive Perception 10"
"languages": "any one language (usually Common)"
"cr": "3"
"traits":
- "desc": "Naevys Tharesso has advantage on saving throws against being [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened)."
  "name": "Brave"
"actions":
- "desc": "Naevys Tharesso makes two melee attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice:1d20+4|noform|noparens|text(+4) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d8+2|noform|noparens|avg|text(6) (1d8 + 2)\
    \ slashing damage, or dice:1d10+2|noform|noparens|avg|text(7) (1d10 + 2) slashing\
    \ damage if used with two hands. The knight can use a bonus action to speak this\
    \ magic sword's command word, causing flames to erupt from the blade. These flames\
    \ shed bright light in a 40-foot radius and dim light for an additional 40 feet.\
    \ While the sword is ablaze, it deals an extra 2d6 fire damage to any target it\
    \ hits. The flames last until she uses a bonus action to speak the command word\
    \ again or until she drops or sheathes the sword."
  "name": "Flame Tongue Longsword"
- "desc": "Ranged Weapon Attack: dice:1d20+2|noform|noparens|text(+2) to hit,\
    \ range 100/400 ft., one target. Hit: dice:1d10|noform|noparens|avg|text(5)\
    \ (1d10) piercing damage."
  "name": "Heavy Crossbow"
- "desc": "For 1 minute, Naevys Tharesso can utter a special command or warning whenever\
    \ a nonhostile creature that it can see within 30 feet of it makes an attack roll\
    \ or a saving throw. The creature can add a dice:d4|noform|noparens|avg (d4)\
    \ to its roll provided it can hear and understand Naevys Tharesso. A creature\
    \ can benefit from only one Leadership die at a time. This effect ends if Naevys\
    \ Tharesso is [incapacitated](3-Mechanics/CLI/rules/conditions.md#Incapacitated)."
  "name": "Leadership (Recharges after a Short or Long Rest)"
"reactions":
- "desc": "Naevys Tharesso adds 2 to its AC against one melee attack that would hit\
    \ it. To do so, Naevys Tharesso must see the attacker and be wielding a melee\
    \ weapon."
  "name": "Parry"
"source":
- "KftGV"
"image": "3-Mechanics/CLI/bestiary/npc/token/naevys-tharesso-kftgv.webp"
```
^statblock