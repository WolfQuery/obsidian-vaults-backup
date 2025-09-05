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
statblock-link: "#^statblock"
aliases:
- Zargash
---
# [Zargash](3-Mechanics\CLI\Compendium\bestiary\npc/zargash-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 223*  

Zargash worships Orcus, the Demon Prince of Undeath, who has promised to transform Zargash into a vampire after a lifetime of faithful service. For a living priest to worship Orcus is utter folly, but Zargash is twisted beyond any hope of redemption. His hobbies include slaying the living and animating the dead.

```statblock
"name": "Zargash (WBtW)"
"size": "Medium"
"type": "humanoid"
"subtype": "cleric, human"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"ac_class": "[chain shirt](/3-Mechanics/CLI/Compendium/items/chain-shirt.md)"
"hp": !!int "45"
"hit_dice": "7d8 + 14"
"modifier": !!int "0"
"stats":
  - !!int "14"
  - !!int "10"
  - !!int "14"
  - !!int "12"
  - !!int "16"
  - !!int "15"
"speed": "30 ft."
"saves":
  - "wisdom": !!int "5"
  - "charisma": !!int "4"
"skillsaves":
  - "name": "[Deception](/3-Mechanics/CLI/Rules/skills.md#Deception)"
    "desc": "+6"
  - "name": "[Insight](/3-Mechanics/CLI/Rules/skills.md#Insight)"
    "desc": "+5"
"senses": "passive Perception 13"
"languages": "Common"
"cr": "3"
"traits":
  - "desc": "The first time Zargash would drop to 0 hit points as a result of taking\
      \ damage, he instead drops to 1 hit point."
    "name": "Cling to Life (Recharges after a Long Rest)"
  - "desc": "Zargash wears a bat-shaped amulet that has the properties of a [ring\
      \ of feather falling](/3-Mechanics/CLI/Compendium/items/ring-of-feather-falling.md)."
    "name": "Special Equipment"
"actions":
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
      \ + 2) bludgeoning damage, or 7 (1d10 + 2) bludgeoning damage when used with\
      \ two hands."
    "name": "Warhammer"
  - "desc": "Ranged Spell Attack: +5 to hit, range 60 ft., one creature. Hit:\
      \ 25 (4d10 + 3) necrotic damage."
    "name": "Deathly Ray"
  - "desc": "Zargash casts one of the following spells, using Wisdom as the spellcasting\
      \ ability (spell save DC 13):\n\nAt will: [light](/3-Mechanics/CLI/Compendium/spells/light.md),\
      \ [thaumaturgy](/3-Mechanics/CLI/Compendium/spells/thaumaturgy.md)\n\n1/day\
      \ each: [command](/3-Mechanics/CLI/Compendium/spells/command.md), [gaseous\
      \ form](/3-Mechanics/CLI/Compendium/spells/gaseous-form.md), [hold person](/3-Mechanics/CLI/Compendium/spells/hold-person.md),\
      \ [silence](/3-Mechanics/CLI/Compendium/spells/silence.md), [speak with dead](/3-Mechanics/CLI/Compendium/spells/speak-with-dead.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "Zargash targets the lifeless corpse of one Humanoid he can see within\
      \ 30 feet of him and commands it to rise, transforming it into a zombie under\
      \ his control. The zombie takes its turn immediately after Zargash. Animating\
      \ the zombie requires Zargash's [concentration](/3-Mechanics/CLI/Rules/conditions.md#Concentration)\
      \ (as if [concentrating](/3-Mechanics/CLI/Rules/conditions.md#Concentration)\
      \ on a spell). The zombie reverts to an inanimate corpse after 10 minutes, when\
      \ it drops to 0 hit points, or when Zargash's [concentration](/3-Mechanics/CLI/Rules/conditions.md#Concentration)\
      \ ends."
    "name": "Animate Corpse (1/Day)"
"source":
  - "WBtW"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/zargash-wbtw.webp"
```
^statblock