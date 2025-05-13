---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/kftgv
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/elemental/wizard
statblock: inline
aliases: ["Charmayne Daymore"]
---
# [Charmayne Daymore](3-Mechanics\CLI\bestiary\npc/charmayne-daymore-kftgv.md)
*Source: Keys from the Golden Vault p. 159*  

A powerful spellcaster, Charmayne had become jealous of the king's passion and warmth. Longing to possess those qualities, she painstakingly created rituals to drain Jhaeros's vitality and charm, and to funnel these qualities into herself. However, the magic only enhanced her greed and jealousy; the more she took from Jhaeros, the hungrier for power Charmayne became, going so far as to murder her fellow councilor, Regine, while she slept.

As she came to realize the people of Ghalasine didn't love her as they did the king, Charmayne became filled with rage. She used magic to tear out Jhaeros's heart while keeping it alive. She then used the still-beating heart as the focus of a ritual to destroy Ghalasine.

```statblock
"name": "Charmayne Daymore (KftGV)"
"size": "Medium"
"type": "elemental"
"subtype": "wizard"
"alignment": "Neutral Evil"
"ac": !!int "12"
"hp": !!int "123"
"hit_dice": "19d8 + 38"
"stats":
- !!int "8"
- !!int "14"
- !!int "15"
- !!int "20"
- !!int "14"
- !!int "16"
"speed": "30 ft., fly 30 ft. (hover)"
"saves":
  "Charisma": !!int "7"
  "Wisdom": !!int "6"
  "Intelligence": !!int "9"
"skillsaves":
  "Deception": !!int "7"
  "Perception": !!int "6"
  "Arcana": !!int "9"
"damage_immunities": "fire"
"senses": "passive Perception 16"
"languages": "Common, Draconic, Elvish, Ignan"
"cr": "10"
"traits":
- "desc": "Charmayne casts one of the following spells, using Intelligence as the\
    \ spellcasting ability (spell save DC 17):\n\nAt will: [dancing lights](3-Mechanics/CLI/spells/dancing-lights.md),\
    \ [mage hand](3-Mechanics/CLI/spells/mage-hand.md)\n\n1/day each: [dispel\
    \ magic](3-Mechanics/CLI/spells/dispel-magic.md), [invisibility](3-Mechanics/CLI/spells/invisibility.md),\
    \ [polymorph](3-Mechanics/CLI/spells/polymorph.md)\n\n3/day: [mage armor](3-Mechanics/CLI/spells/mage-armor.md)"
  "name": "Spellcasting"
- "desc": "If Charmayne fails a saving throw, she can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
"actions":
- "desc": "Charmayne makes three Ashen Burst attacks. She can replace one of these\
    \ attacks with one use of Spellcasting."
  "name": "Multiattack"
- "desc": "Melee or Ranged Spell Attack: dice:1d20+9|noform|noparens|text(+9)\
    \ to hit, reach 5 ft. or range 60 ft., one target. Hit: dice:5d6|noform|noparens|avg|text(17)\
    \ (5d6) fire damage."
  "name": "Ashen Burst"
- "desc": "Charmayne creates a magical explosion of fire centered on a point she can\
    \ see within 120 feet of herself. Each creature in a 20-foot-radius sphere centered\
    \ on that point must make a DC 17 Dexterity saving throw, taking dice:10d6|noform|noparens|avg|text(35)\
    \ (10d6) fire damage on a failed save, or half as much damage on a successful\
    \ one. A Humanoid reduced to 0 hit points by this damage dies and is transformed\
    \ into a Tiny charcoal figurine."
  "name": "Cinder Spite (Recharge 5-6)"
"reactions":
- "desc": ""
  "name": "Charmayne can take up to three reactions per round but only one per turn."
- "desc": "In response to being hit by an attack, Charmayne utters a word in Ignan,\
    \ dealing dice:3d6|noform|noparens|avg|text(10) (3d6) fire damage to the attacker.\
    \ Charmayne then teleports, along with any equipment she is wearing or carrying,\
    \ up to 30 feet to an unoccupied space she can see, leaving a harmless cloud of\
    \ ash and embers in the space she just left."
  "name": "Elemental Rebuke"
- "desc": "Charmayne interrupts a creature she can see within 60 feet of herself that\
    \ is casting a spell. If the spell is 4th level or lower, it fails and has no\
    \ effect. If the spell is 5th level or higher, Charmayne makes an Intelligence\
    \ check (DC 10 + the spell's level). On a success, the spell fails and has no\
    \ effect. Whatever the spell's level, the caster takes dice:3d6|noform|noparens|avg|text(10)\
    \ (3d6) fire damage if the spell fails."
  "name": "Fiery Counterspell"
"source":
- "KftGV"
"image": "3-Mechanics/CLI/bestiary/npc/token/charmayne-daymore-kftgv.webp"
```
^statblock