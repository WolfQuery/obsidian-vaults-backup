---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Death Dog"]
---
# [Death Dog](3-Mechanics\CLI\bestiary\monstrosity/death-dog.md)
*Source: Monster Manual p. 321. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

A death dog is an ugly two-headed hound that roams plains, deserts, and the Underdark. Hate burns in a death dog's heart, and a taste for humanoid flesh drives it to attack travelers and explorers. Death dog saliva carries a foul disease that causes a victim's flesh to slowly rot off the bone.

```statblock
"name": "Death Dog"
"size": "Medium"
"type": "monstrosity"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "39"
"hit_dice": "6d8 + 12"
"stats":
- !!int "15"
- !!int "14"
- !!int "14"
- !!int "3"
- !!int "13"
- !!int "6"
"speed": "40 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "5"
"senses": "darkvision 120 ft., passive Perception 15"
"languages": ""
"cr": "1"
"traits":
- "desc": "The dog has advantage on Wisdom ([Perception](3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks and on saving throws against being [blinded](3-Mechanics/CLI/rules/conditions.md#Blinded),\
    \ [charmed](3-Mechanics/CLI/rules/conditions.md#Charmed), [deafened](3-Mechanics/CLI/rules/conditions.md#Deafened),\
    \ [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened), [stunned](3-Mechanics/CLI/rules/conditions.md#Stunned),\
    \ or knocked [unconscious](3-Mechanics/CLI/rules/conditions.md#Unconscious)."
  "name": "Two-Headed"
"actions":
- "desc": "The dog makes two bite attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice:1d20+4|noform|noparens|text(+4) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d6+2|noform|noparens|avg|text(5) (1d6 + 2)\
    \ piercing damage. If the target is a creature, it must succeed on a DC 12 Constitution\
    \ saving throw against disease or become [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)\
    \ until the disease is cured. Every 24 hours that elapse, the creature must repeat\
    \ the saving throw, reducing its hit point maximum by dice:1d10|noform|noparens|avg|text(5)\
    \ (1d10) on a failure. This reduction lasts until the disease is cured. The\
    \ creature dies if the disease reduces its hit point maximum to 0."
  "name": "Bite"
"source":
- "MM"
"image": "3-Mechanics/CLI/bestiary/monstrosity/token/death-dog.webp"
```
^statblock

## Environment

desert