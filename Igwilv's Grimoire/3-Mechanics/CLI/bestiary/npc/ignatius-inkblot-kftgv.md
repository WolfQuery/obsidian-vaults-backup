---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/kftgv
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
statblock: inline
aliases: ["Ignatius Inkblot"]
---
# [Ignatius Inkblot](3-Mechanics\CLI\bestiary\npc/ignatius-inkblot-kftgv.md)
*Source: Keys from the Golden Vault p. 169*  

```statblock
"name": "Ignatius Inkblot (KftGV)"
"size": "Medium"
"type": "aberration"
"alignment": "Lawful Neutral"
"ac": !!int "15"
"ac_class": "[breastplate](3-Mechanics/CLI/items/breastplate.md)"
"hp": !!int "71"
"hit_dice": "13d8 + 13"
"stats":
- !!int "11"
- !!int "12"
- !!int "12"
- !!int "19"
- !!int "17"
- !!int "17"
"speed": "30 ft."
"saves":
  "Charisma": !!int "6"
  "Wisdom": !!int "6"
  "Intelligence": !!int "7"
"skillsaves":
  "Deception": !!int "6"
  "Stealth": !!int "4"
  "Insight": !!int "6"
  "Perception": !!int "6"
  "Arcana": !!int "7"
  "Persuasion": !!int "6"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Deep Speech, Undercommon, telepathy 120 ft."
"cr": "7"
"traits":
- "desc": "Ignatius Inkblot's innate spellcasting ability is Intelligence (spell save\
    \ DC 15). It can innately cast the following spells, requiring no components:\n\
    \nAt will: [detect thoughts](3-Mechanics/CLI/spells/detect-thoughts.md), [levitate](3-Mechanics/CLI/spells/levitate.md)\n\
    \n1/day each: [dominate monster](3-Mechanics/CLI/spells/dominate-monster.md),\
    \ [plane shift](3-Mechanics/CLI/spells/plane-shift.md) (self only)"
  "name": "Innate Spellcasting (Psionics)"
- "desc": "Ignatius Inkblot has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- "desc": "Melee Weapon Attack: dice:1d20+7|noform|noparens|text(+7) to hit, reach\
    \ 5 ft., one creature. Hit: dice:2d10+4|noform|noparens|avg|text(15) (2d10\
    \ + 4) psychic damage. If the target is Medium or smaller, it is [grappled](3-Mechanics/CLI/rules/conditions.md#Grappled)\
    \ (escape DC 15) and must succeed on a DC 15 Intelligence saving throw or be [stunned](3-Mechanics/CLI/rules/conditions.md#Stunned)\
    \ until this grapple ends."
  "name": "Tentacles"
- "desc": "Melee Weapon Attack: dice:1d20+7|noform|noparens|text(+7) to hit, reach\
    \ 5 ft., one [incapacitated](3-Mechanics/CLI/rules/conditions.md#Incapacitated)\
    \ humanoid [grappled](3-Mechanics/CLI/rules/conditions.md#Grappled) by Ignatius\
    \ Inkblot. Hit: The target takes dice:10d10|noform|noparens|avg|text(55) (10d10)\
    \ piercing damage. If this damage reduces the target to 0 hit points, Ignatius\
    \ Inkblot kills the target by extracting and devouring its brain."
  "name": "Extract Brain"
- "desc": "Ignatius Inkblot magically emits psychic energy in a 60-foot cone. Each\
    \ creature in that area must succeed on a DC 15 Intelligence saving throw or take\
    \ dice:4d8+4|noform|noparens|avg|text(22) (4d8 + 4) psychic damage and be\
    \ [stunned](3-Mechanics/CLI/rules/conditions.md#Stunned) for 1 minute. A creature\
    \ can repeat the saving throw at the end of each of its turns, ending the effect\
    \ on itself on a success."
  "name": "Mind Blast (Recharge 5-6)"
"source":
- "KftGV"
"image": "3-Mechanics/CLI/bestiary/npc/token/ignatius-inkblot-kftgv.webp"
```
^statblock