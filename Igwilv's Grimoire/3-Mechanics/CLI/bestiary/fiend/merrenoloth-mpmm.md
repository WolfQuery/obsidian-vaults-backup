---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/yugoloth
statblock: inline
aliases: ["Merrenoloth"]
---
# [Merrenoloth](3-Mechanics\CLI\bestiary\fiend/merrenoloth-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 180*  

The grim captains of the ferries on the River Styx, merrenoloths can navigate safely through the worst storms and always stay on course. Wielding fiery oars, merrenoloths strike fear into anyone who forcefully boards their vessels.

```statblock
"name": "Merrenoloth (MPMM)"
"size": "Medium"
"type": "fiend"
"subtype": "yugoloth"
"alignment": "Typically  Neutral Evil"
"ac": !!int "13"
"hp": !!int "40"
"hit_dice": "9d8"
"stats":
- !!int "8"
- !!int "17"
- !!int "10"
- !!int "17"
- !!int "14"
- !!int "11"
"speed": "30 ft., swim 40 ft."
"saves":
  "Dexterity": !!int "5"
  "Intelligence": !!int "5"
"skillsaves":
  "Nature": !!int "5"
  "Perception": !!int "4"
  "History": !!int "5"
  "Survival": !!int "4"
"damage_resistances": "cold; fire; lightning; bludgeoning, piercing, slashing from\
  \ nonmagical attacks"
"damage_immunities": "acid, poison"
"condition_immunities": "[poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "blindsight 60 ft., darkvision 60 ft., passive Perception 14"
"languages": "Abyssal, Infernal, telepathy 60 ft."
"cr": "3"
"traits":
- "desc": "The merrenoloth casts one of the following spells, requiring no material\
    \ components and using Intelligence as the spellcasting ability (spell save DC\
    \ 13):\n\nAt will: [charm person](3-Mechanics/CLI/spells/charm-person.md),\
    \ [darkness](3-Mechanics/CLI/spells/darkness.md), [detect magic](3-Mechanics/CLI/spells/detect-magic.md),\
    \ [dispel magic](3-Mechanics/CLI/spells/dispel-magic.md), [gust of wind](3-Mechanics/CLI/spells/gust-of-wind.md)\n\
    \n3/day: [control water](3-Mechanics/CLI/spells/control-water.md)"
  "name": "Spellcasting"
- "desc": "The merrenoloth has advantage on saving throws against spells and other\
    \ magical effects."
  "name": "Magic Resistance"
"actions":
- "desc": "The merrenoloth makes one Oar attack and uses Fear Gaze."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice:1d20+5|noform|noparens|text(+5) to hit, reach\
    \ 5 ft., one target. Hit: dice:2d4+3|noform|noparens|avg|text(8) (2d4 + 3)\
    \ fire damage."
  "name": "Oar"
- "desc": "The merrenoloth targets one creature it can see within 60 feet of it. The\
    \ target must succeed on a DC 13 Wisdom saving throw or become [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened)\
    \ of the merrenoloth for 1 minute. The [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened)\
    \ target can repeat the saving throw at the end of each of its turns, ending the\
    \ effect on itself on a success."
  "name": "Fear Gaze"
"bonus_actions":
- "desc": "The merrenoloth teleports, along with any equipment it is wearing or carrying,\
    \ up to 60 feet to an unoccupied space it can see."
  "name": "Teleport"
"lair_actions":
- "desc": "On initiative count 20 (losing initiative ties) while captaining a vessel,\
    \ the merrenoloth can take one of the following lair actions; it can't take the\
    \ same lair action two rounds in a row:"
  "name": ""
- "desc": "- Gale. The air within 60 feet of the vessel is filled with wind. Until\
    \ initiative count 20 on the next round, that area is difficult terrain, and when\
    \ a Medium or smaller creature flies into that area or starts its turn flying\
    \ there, it must succeed on a DC 13 Strength saving throw or be knocked [prone](3-Mechanics/CLI/rules/conditions.md#Prone).\
    \  \n- Propel. A strong wind propels the vessel, increasing its speed by 30\
    \ feet until initiative count 20 on the next round.  \n- Repair. The vessel\
    \ regains dice:4d10|noform|noparens|avg|text(22) (4d10) hit points.  "
  "name": ""
"regional_effects":
- "desc": "A merrenoloth imbues its vessel with magic that creates one or more of\
    \ the following effects:"
  "name": ""
- "desc": "- Unerring. The vessel always stays on course to the destination the\
    \ merrenoloth names.  \n- Unsinkable. The vessel doesn't sink even if its\
    \ hull is breached.  "
  "name": ""
- "desc": "If the merrenoloth dies, these effects fade over the course of dice:1d6|noform|noparens|avg\
    \ (1d6) hours."
  "name": ""
"source":
- "MPMM"
"image": "3-Mechanics/CLI/bestiary/fiend/token/merrenoloth-mpmm.webp"
```
^statblock

## Environment

coastal