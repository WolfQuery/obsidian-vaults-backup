---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/cleric
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
aliases: ["Zargash"]
---
# [Zargash](3-Mechanics\CLI\bestiary\npc/zargash-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 223*  

Zargash worships Orcus, the Demon Prince of Undeath, who has promised to transform Zargash into a vampire after a lifetime of faithful service. For a living priest to worship Orcus is utter folly, but Zargash is twisted beyond any hope of redemption. His hobbies include slaying the living and animating the dead.

```statblock
"name": "Zargash (WBtW)"
"size": "Medium"
"type": "humanoid"
"subtype": "cleric, human"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"ac_class": "[chain shirt](3-Mechanics/CLI/items/chain-shirt.md)"
"hp": !!int "45"
"hit_dice": "7d8 + 14"
"stats":
- !!int "14"
- !!int "10"
- !!int "14"
- !!int "12"
- !!int "16"
- !!int "15"
"speed": "30 ft."
"saves":
  "Charisma": !!int "4"
  "Wisdom": !!int "5"
"skillsaves":
  "Deception": !!int "6"
  "Insight": !!int "5"
"senses": "passive Perception 13"
"languages": "Common"
"cr": "3"
"traits":
- "desc": "Zargash casts one of the following spells, using Wisdom as the spellcasting\
    \ ability (spell save DC 13):\n\nAt will: [light](3-Mechanics/CLI/spells/light.md),\
    \ [thaumaturgy](3-Mechanics/CLI/spells/thaumaturgy.md)\n\n1/day each: [command](3-Mechanics/CLI/spells/command.md),\
    \ [gaseous form](3-Mechanics/CLI/spells/gaseous-form.md), [hold person](3-Mechanics/CLI/spells/hold-person.md),\
    \ [silence](3-Mechanics/CLI/spells/silence.md), [speak with dead](3-Mechanics/CLI/spells/speak-with-dead.md)"
  "name": "Spellcasting"
- "desc": "The first time Zargash would drop to 0 hit points as a result of taking\
    \ damage, he instead drops to 1 hit point."
  "name": "Cling to Life (Recharges after a Long Rest)"
- "desc": "Zargash wears a bat-shaped amulet that has the properties of a [ring of\
    \ feather falling](3-Mechanics/CLI/items/ring-of-feather-falling.md)."
  "name": "Special Equipment"
"actions":
- "desc": "Melee Weapon Attack: dice:1d20+4|noform|noparens|text(+4) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d8+2|noform|noparens|avg|text(6) (1d8 + 2)\
    \ bludgeoning damage, or dice:1d10+2|noform|noparens|avg|text(7) (1d10 + 2)\
    \ bludgeoning damage when used with two hands."
  "name": "Warhammer"
- "desc": "Ranged Spell Attack: dice:1d20+5|noform|noparens|text(+5) to hit, range\
    \ 60 ft., one creature. Hit: dice:4d10+3|noform|noparens|avg|text(25) (4d10\
    \ + 3) necrotic damage."
  "name": "Deathly Ray"
"bonus_actions":
- "desc": "Zargash targets the lifeless corpse of one Humanoid he can see within 30\
    \ feet of him and commands it to rise, transforming it into a zombie under his\
    \ control. The zombie takes its turn immediately after Zargash. Animating the\
    \ zombie requires Zargash's [concentration](3-Mechanics/CLI/rules/conditions.md#Concentration)\
    \ (as if [concentrating](3-Mechanics/CLI/rules/conditions.md#Concentration) on\
    \ a spell). The zombie reverts to an inanimate corpse after 10 minutes, when it\
    \ drops to 0 hit points, or when Zargash's [concentration](3-Mechanics/CLI/rules/conditions.md#Concentration)\
    \ ends."
  "name": "Animate Corpse (1/Day)"
"source":
- "WBtW"
"image": "3-Mechanics/CLI/bestiary/npc/token/zargash-wbtw.webp"
```
^statblock