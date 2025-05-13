---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/kftgv
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
statblock: inline
aliases: ["Zala Morphus"]
---
# [Zala Morphus](3-Mechanics\CLI\bestiary\npc/zala-morphus-kftgv.md)
*Source: Keys from the Golden Vault p. 47*  

```statblock
"name": "Zala Morphus (KftGV)"
"size": "Medium"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "45"
"hit_dice": "6d8 + 18"
"stats":
- !!int "14"
- !!int "16"
- !!int "16"
- !!int "13"
- !!int "10"
- !!int "8"
"speed": "30 ft."
"skillsaves":
  "Stealth": !!int "5"
  "Insight": !!int "4"
  "Perception": !!int "2"
  "Arcana": !!int "3"
"senses": "truesight 120 ft., passive Perception 12"
"languages": "Common, Deep Speech, Elvish"
"cr": "2"
"traits":
- "desc": "Zala Morphus has advantage on Wisdom ([Perception](3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on sight."
  "name": "Keen Sight"
"actions":
- "desc": "Zala Morphus makes two claw attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice:1d20+4|noform|noparens|text(+4) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d6+3|noform|noparens|avg|text(6) (1d6 + 3)\
    \ slashing damage."
  "name": "Claw"
- "desc": "Zala Morphus targets one creature it can see within 30 feet of it. The\
    \ target must succeed on a DC 12 Constitution saving throw against this magic\
    \ or take dice:3d6|noform|noparens|avg|text(10) (3d6) necrotic damage."
  "name": "Rotting Gaze"
- "desc": "Zala Morphus targets one creature it can see within 30 feet of it. The\
    \ target must contest its Charisma ([Deception](3-Mechanics/CLI/rules/skills.md#Deception))\
    \ check against Zala Morphus's Wisdom ([Insight](3-Mechanics/CLI/rules/skills.md#Insight))\
    \ check. If Zala Morphus wins, it magically learns one fact or secret about the\
    \ target. The target automatically wins if it is immune to being [charmed](3-Mechanics/CLI/rules/conditions.md#Charmed)."
  "name": "Weird Insight"
"source":
- "KftGV"
"image": "3-Mechanics/CLI/bestiary/npc/token/zala-morphus-kftgv.webp"
```
^statblock