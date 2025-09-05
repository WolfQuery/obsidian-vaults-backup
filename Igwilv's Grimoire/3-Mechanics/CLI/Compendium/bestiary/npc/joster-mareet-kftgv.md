---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/kftgv
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/shapechanger
statblock: inline
statblock-link: "#^statblock"
aliases:
- Joster Mareet
---
# [Joster Mareet](3-Mechanics\CLI\Compendium\bestiary\npc/joster-mareet-kftgv.md)
*Source: Keys from the Golden Vault p. 107*  

```statblock
"name": "Joster Mareet (KftGV)"
"size": "Medium"
"type": "fiend"
"subtype": "shapechanger"
"alignment": "Neutral Evil"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"modifier": !!int "3"
"stats":
  - !!int "8"
  - !!int "17"
  - !!int "13"
  - !!int "15"
  - !!int "12"
  - !!int "20"
"speed": "30 ft., fly 60 ft."
"skillsaves":
  - "name": "[Deception](/3-Mechanics/CLI/Rules/skills.md#Deception)"
    "desc": "+9"
  - "name": "[Insight](/3-Mechanics/CLI/Rules/skills.md#Insight)"
    "desc": "+5"
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Persuasion](/3-Mechanics/CLI/Rules/skills.md#Persuasion)"
    "desc": "+9"
  - "name": "[Stealth](/3-Mechanics/CLI/Rules/skills.md#Stealth)"
    "desc": "+7"
"damage_resistances": "cold; fire; lightning; poison; bludgeoning, piercing, slashing\
  \ from nonmagical attacks"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Abyssal, Common, Infernal, telepathy 60 ft."
"cr": "4"
"traits":
  - "desc": "Joster Mareet ignores the range restriction on its telepathy when communicating\
      \ with a creature it has [charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed).\
      \ The two don't even need to be on the same plane of existence."
    "name": "Telepathic Bond"
  - "desc": "Joster Mareet can use its action to polymorph into a Small or Medium\
      \ humanoid, or back into its true form. Without wings, Joster Mareet loses its\
      \ flying speed. Other than its size and speed, its statistics are the same in\
      \ each form. Any equipment it is wearing or carrying isn't transformed. It reverts\
      \ to its true form if it dies."
    "name": "Shapechanger"
"actions":
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
      \ + 3) slashing damage."
    "name": "Claw (Fiend Form Only)"
  - "desc": "One humanoid Joster Mareet can see within 30 feet of it must succeed\
      \ on a DC 15 Wisdom saving throw or be magically [charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed)\
      \ for 1 day. The [charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed) target\
      \ obeys Joster Mareet's verbal or telepathic commands. If the target suffers\
      \ any harm or receives a suicidal command, it can repeat the saving throw, ending\
      \ the effect on a success. If the target successfully saves against the effect,\
      \ or if the effect on it ends, the target is immune to this fiend's Charm for\
      \ the next 24 hours.\n\nJoster Mareet can have only one target [charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed)\
      \ at a time. If it charms another, the effect on the previous target ends."
    "name": "Charm"
  - "desc": "Joster Mareet kisses a creature [charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed)\
      \ by it or a willing creature. The target must make a DC 15 Constitution saving\
      \ throw against this magic, taking 32 (5d10 + 5) psychic damage on a failed\
      \ save, or half as much damage on a successful one. The target's hit point maximum\
      \ is reduced by an amount equal to the damage taken. This reduction lasts until\
      \ the target finishes a long rest. The target dies if this effect reduces its\
      \ hit point maximum to 0."
    "name": "Draining Kiss"
  - "desc": "Joster Mareet magically enters the Ethereal Plane from the Material Plane,\
      \ or vice versa."
    "name": "Etherealness"
"source":
  - "KftGV"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/joster-mareet-kftgv.webp"
```
^statblock