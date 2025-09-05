---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/gos
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/bullywug
statblock: inline
statblock-link: "#^statblock"
aliases:
- Bullywug Royal
---
# [Bullywug Royal](3-Mechanics\CLI\Compendium\bestiary\humanoid/bullywug-royal-gos.md)
*Source: Ghosts of Saltmarsh p. 232, The Wild Beyond the Witchlight*  

The largest and most intelligent bullywugs invariably end up leading their kind. These sneering specimens dress in robes made from leather, rough cloth, and bits of marsh plants. As seen in Danger at Dunwater, a bullywug royal is often accompanied by and mounted astride a giant toad.

```statblock
"name": "Bullywug Royal (GoS)"
"size": "Medium"
"type": "humanoid"
"subtype": "bullywug"
"alignment": "Neutral Evil"
"ac": !!int "15"
"ac_class": "[hide armor](/3-Mechanics/CLI/Compendium/items/hide-armor.md), [shield](/3-Mechanics/CLI/Compendium/items/shield.md)"
"hp": !!int "52"
"hit_dice": "8d8 + 16"
"modifier": !!int "1"
"stats":
  - !!int "16"
  - !!int "12"
  - !!int "14"
  - !!int "10"
  - !!int "11"
  - !!int "14"
"speed": "20 ft., swim 40 ft."
"saves":
  - "strength": !!int "5"
  - "dexterity": !!int "3"
"skillsaves":
  - "name": "[Athletics](/3-Mechanics/CLI/Rules/skills.md#Athletics)"
    "desc": "+5"
  - "name": "[Intimidation](/3-Mechanics/CLI/Rules/skills.md#Intimidation)"
    "desc": "+4"
  - "name": "[Stealth](/3-Mechanics/CLI/Rules/skills.md#Stealth)"
    "desc": "+3"
"senses": "passive Perception 10"
"languages": "Bullywug"
"cr": "3"
"traits":
  - "desc": "The royal can breathe air and water."
    "name": "Amphibious"
  - "desc": "A melee weapon deals one extra die of its damage when the royal hits\
      \ with it (included in the attack)."
    "name": "Brute"
  - "desc": "The royal has advantage on melee attacks made while riding a frog mount."
    "name": "Frog Rider"
  - "desc": "The royal can communicate simple concepts to frogs and toads when it\
      \ speaks in Bullywug."
    "name": "Speak with Frogs and Toads"
  - "desc": "The royal's long jump is up to 20 feet and its high jump is up to 10\
      \ feet, with or without a running start."
    "name": "Standing Leap"
  - "desc": "The royal has advantage on Dexterity ([Stealth](/3-Mechanics/CLI/Rules/skills.md#Stealth))\
      \ checks made to hide in swampy terrain."
    "name": "Swamp Camouflage"
"actions":
  - "desc": "The royal makes two attacks: one with its royal spear and one with its\
      \ bite."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Weapon Attack: +5 to hit, reach 10 ft. or range 20/60\
      \ ft., one target. Hit: 10 (2d6 + 3) piercing damage, or 12 (2d8 + 3) piercing\
      \ damage if used with two hands to make a melee attack. If the target is a Medium\
      \ or smaller creature, it must succeed on a DC 13 Strength saving throw or be\
      \ knocked [prone](/3-Mechanics/CLI/Rules/conditions.md#Prone)."
    "name": "Royal Spear"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
      \ + 3) piercing damage."
    "name": "Bite"
  - "desc": "The royal makes a loud pronouncement. Each bullywug within 60 feet of\
      \ the royal that can hear the pronouncement has advantage on its next attack\
      \ roll."
    "name": "Croaked Decree (1/Day)"
"source":
  - "GoS"
  - "WBtW"
"image": "/3-Mechanics/CLI/Compendium/bestiary/humanoid/token/bullywug-royal-gos.webp"
```
^statblock