---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid/goblinoid
- ttrpg-cli/monster/type/humanoid/shapechanger
statblock: inline
statblock-link: "#^statblock"
aliases:
- Mobar
---
# [Mobar](3-Mechanics\CLI\Compendium\bestiary\npc/mobar-wdmm.md)
*Source: Waterdeep: Dungeon of the Mad Mage p. 77*  

```statblock
"name": "Mobar (WDMM)"
"size": "Small"
"type": "humanoid"
"subtype": "goblinoid, shapechanger"
"alignment": "Neutral Evil"
"ac": !!int "13"
"hp": !!int "42"
"hit_dice": "7d6"
"modifier": !!int "3"
"stats":
  - !!int "8"
  - !!int "17"
  - !!int "10"
  - !!int "10"
  - !!int "12"
  - !!int "8"
"speed": "30 ft. (climb 30 ft. fly 60 ft. in bat or hybrid form)"
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](/3-Mechanics/CLI/Rules/skills.md#Stealth)"
    "desc": "+5"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"senses": "darkvision 60 ft., passive Perception 13"
"languages": "Goblin (can't speak in bat form)"
"cr": "2"
"traits":
  - "desc": "Mobar can use its action to polymorph into a Medium bat-humanoid hybrid,\
      \ or into a Large giant bat, or back into its true form, which is humanoid.\
      \ Its statistics, other than its size, are the same in each form. Any equipment\
      \ it is wearing or carrying isn't transformed. It reverts to its true form if\
      \ it dies."
    "name": "Shapechanger"
  - "desc": "Mobar has blindsight out to a range of 60 feet as long as it's not [deafened](/3-Mechanics/CLI/Rules/conditions.md#Deafened)."
    "name": "Echolocation (Bat or Hybrid Form Only)"
  - "desc": "Mobar has advantage on Wisdom ([Perception](/3-Mechanics/CLI/Rules/skills.md#Perception))\
      \ checks that rely on hearing."
    "name": "Keen Hearing"
  - "desc": "Mobar can take the Disengage or Hide action as a bonus action on each\
      \ of its turns."
    "name": "Nimble Escape (Humanoid Form Only)"
  - "desc": "While in sunlight, Mobar has disadvantage on attack rolls, as well as\
      \ on Wisdom ([Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)) checks\
      \ that rely on sight."
    "name": "Sunlight Sensitivity"
  - "desc": "Due to poor depth perception, Mobar has disadvantage on any attack roll\
      \ against a target more than 30 feet away."
    "name": "Blind Eye"
"actions":
  - "desc": "In humanoid form, Mobar makes two scimitar attacks or two shortbow attacks.\
      \ In hybrid form, it can make one bite attack and one scimitar attack."
    "name": "Multiattack (Humanoid or Hybrid Form Only)"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6\
      \ (1d6 + 3) piercing damage, and Mobar gains temporary hit points equal to the\
      \ damage dealt. If the target is a humanoid, it must succeed on a DC 10 Constitution\
      \ saving throw or be cursed with werebat lycanthropy."
    "name": "Bite (Bat or Hybrid Form Only)"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
      \ + 3) slashing damage."
    "name": "Scimitar (Humanoid or Hybrid Form Only)"
  - "desc": "Ranged Weapon Attack: +5 to hit, range 80/320 ft., one target. Hit:\
      \ 6 (1d6 + 3) piercing damage."
    "name": "Shortbow (Humanoid or Hybrid Form Only)"
"source":
  - "WDMM"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/mobar-wdmm.webp"
```
^statblock