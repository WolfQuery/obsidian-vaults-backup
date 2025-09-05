---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdmm
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Captain N'ghathrod
---
# [Captain N'ghathrod](3-Mechanics\CLI\Compendium\bestiary\npc/captain-nghathrod-wdmm.md)
*Source: Waterdeep: Dungeon of the Mad Mage p. 250*  

Before it turned to a life of space piracy, N'ghathrod lived in a mind flayer colony on the ringed planet of Glyth, which is farther from the sun than Toril.

```statblock
"name": "Captain N'ghathrod (WDMM)"
"size": "Medium"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "15"
"ac_class": "[breastplate](/3-Mechanics/CLI/Compendium/items/breastplate.md)"
"hp": !!int "111"
"hit_dice": "13d8 + 13"
"modifier": !!int "1"
"stats":
  - !!int "11"
  - !!int "12"
  - !!int "12"
  - !!int "19"
  - !!int "17"
  - !!int "17"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "7"
  - "wisdom": !!int "6"
  - "charisma": !!int "6"
"skillsaves":
  - "name": "[Arcana](/3-Mechanics/CLI/Rules/skills.md#Arcana)"
    "desc": "+7"
  - "name": "[Deception](/3-Mechanics/CLI/Rules/skills.md#Deception)"
    "desc": "+6"
  - "name": "[Insight](/3-Mechanics/CLI/Rules/skills.md#Insight)"
    "desc": "+6"
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+6"
  - "name": "[Persuasion](/3-Mechanics/CLI/Rules/skills.md#Persuasion)"
    "desc": "+6"
  - "name": "[Stealth](/3-Mechanics/CLI/Rules/skills.md#Stealth)"
    "desc": "+4"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Deep Speech, Undercommon, telepathy 120 ft."
"cr": "8"
"traits":
  - "desc": "Captain N'ghathrod is a 10th-level spellcaster. Its spellcasting ability\
      \ is Intelligence (save DC 15, +7 to hit with spell attacks). Captain N'ghathrod\
      \ has the following wizard spells prepared:\n\nCantrips (at will): [blade\
      \ ward](/3-Mechanics/CLI/Compendium/spells/blade-ward.md), [dancing lights](/3-Mechanics/CLI/Compendium/spells/dancing-lights.md),\
      \ [mage hand](/3-Mechanics/CLI/Compendium/spells/mage-hand.md), [shocking grasp](/3-Mechanics/CLI/Compendium/spells/shocking-grasp.md)\n\
      \n1st level (4 slots): [detect magic](/3-Mechanics/CLI/Compendium/spells/detect-magic.md),\
      \ [disguise self](/3-Mechanics/CLI/Compendium/spells/disguise-self.md), [shield](/3-Mechanics/CLI/Compendium/spells/shield.md),\
      \ [sleep](/3-Mechanics/CLI/Compendium/spells/sleep.md)\n\n2nd level (3 slots):\
      \ [blur](/3-Mechanics/CLI/Compendium/spells/blur.md), [invisibility](/3-Mechanics/CLI/Compendium/spells/invisibility.md),\
      \ [ray of enfeeblement](/3-Mechanics/CLI/Compendium/spells/ray-of-enfeeblement.md)\n\
      \n3rd level (3 slots): [clairvoyance](/3-Mechanics/CLI/Compendium/spells/clairvoyance.md),\
      \ [lightning bolt](/3-Mechanics/CLI/Compendium/spells/lightning-bolt.md), [sending](/3-Mechanics/CLI/Compendium/spells/sending.md)\n\
      \n4th level (3 slots): [confusion](/3-Mechanics/CLI/Compendium/spells/confusion.md),\
      \ [hallucinatory terrain](/3-Mechanics/CLI/Compendium/spells/hallucinatory-terrain.md)\n\
      \n5th level (2 slots): [telekinesis](/3-Mechanics/CLI/Compendium/spells/telekinesis.md),\
      \ [wall of force](/3-Mechanics/CLI/Compendium/spells/wall-of-force.md)"
    "name": "Spellcasting"
  - "desc": "Captain N'ghathrod's innate spellcasting ability is Intelligence (spell\
      \ save DC 15). It can innately cast the following spells, requiring no components:\n\
      \nAt will: [detect thoughts](/3-Mechanics/CLI/Compendium/spells/detect-thoughts.md),\
      \ [levitate](/3-Mechanics/CLI/Compendium/spells/levitate.md)\n\n1/day each:\
      \ [dominate monster](/3-Mechanics/CLI/Compendium/spells/dominate-monster.md),\
      \ [plane shift](/3-Mechanics/CLI/Compendium/spells/plane-shift.md) (self only)"
    "name": "Innate Spellcasting (Psionics)"
  - "desc": "Captain N'ghathrod has advantage on saving throws against spells and\
      \ other magical effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 15\
      \ (2d10 + 4) psychic damage. If the target is Medium or smaller, it is [grappled](/3-Mechanics/CLI/Rules/conditions.md#Grappled)\
      \ (escape DC 15) and must succeed on a DC 15 Intelligence saving throw or be\
      \ [stunned](/3-Mechanics/CLI/Rules/conditions.md#Stunned) until this grapple\
      \ ends."
    "name": "Tentacles"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one [incapacitated](/3-Mechanics/CLI/Rules/conditions.md#Incapacitated)\
      \ humanoid [grappled](/3-Mechanics/CLI/Rules/conditions.md#Grappled) by Captain\
      \ N'ghathrod. Hit: The target takes 55 (10d10) piercing damage. If this damage\
      \ reduces the target to 0 hit points, Captain N'ghathrod kills the target by\
      \ extracting and devouring its brain."
    "name": "Extract Brain"
  - "desc": "Captain N'ghathrod magically emits psychic energy in a 60-foot cone.\
      \ Each creature in that area must succeed on a DC 15 Intelligence saving throw\
      \ or take 22 (4d8 + 4) psychic damage and be [stunned](/3-Mechanics/CLI/Rules/conditions.md#Stunned)\
      \ for 1 minute. A creature can repeat the saving throw at the end of each of\
      \ its turns, ending the effect on itself on a success."
    "name": "Mind Blast (Recharge 5-6)"
"lair_actions":
  - "desc": "When fighting aboard the Scavenger, N'ghathrod can take lair actions.\
      \ On initiative count 20 (losing initiative ties), N'ghathrod can take one lair\
      \ action to cause one of the following effects:"
    "name": ""
  - "desc": "- N'ghathrod creates a magical duplicate of itself anywhere aboard the\
      \ ship. Formed out of psionic energy, this duplicate lasts until it is reduced\
      \ to 0 hit points, until it is dispelled (DC 15), or until N'ghathrod takes\
      \ another lair action. The duplicate has the statistics of a normal mind flayer\
      \ and is friendly toward N'ghathrod, but not under its control. It cannot leave\
      \ the Scavenger.  \n- N'ghathrod fills all interior areas of the ship with mind-warping\
      \ images and sounds of the Far Realm that last until initiative count 20 on\
      \ the next round. Any creature that isn't an aberration that starts its turn\
      \ inside the ship must succeed on a DC 15 Wisdom saving throw or take 10 (3d6)\
      \ psychic damage.  "
    "name": ""
"source":
  - "WDMM"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/captain-nghathrod-wdmm.webp"
```
^statblock