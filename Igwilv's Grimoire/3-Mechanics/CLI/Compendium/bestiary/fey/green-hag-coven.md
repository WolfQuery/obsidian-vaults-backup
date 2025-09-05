---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- Green Hag (Coven)
---
# [Green Hag (Coven)](3-Mechanics\CLI\Compendium\bestiary\fey/green-hag-coven.md)
*Source: Monster Manual p. 177, Tasha's Cauldron of Everything, The Wild Beyond the Witchlight. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*  

```statblock
"name": "Green Hag (Coven)"
"size": "Medium"
"type": "fey"
"alignment": "Neutral Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "82"
"hit_dice": "11d8 + 33"
"modifier": !!int "1"
"stats":
  - !!int "18"
  - !!int "12"
  - !!int "16"
  - !!int "13"
  - !!int "14"
  - !!int "14"
"speed": "30 ft."
"skillsaves":
  - "name": "[Arcana](/3-Mechanics/CLI/Rules/skills.md#Arcana)"
    "desc": "+3"
  - "name": "[Deception](/3-Mechanics/CLI/Rules/skills.md#Deception)"
    "desc": "+4"
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](/3-Mechanics/CLI/Rules/skills.md#Stealth)"
    "desc": "+3"
"senses": "darkvision 60 ft., passive Perception 14"
"languages": "Common, Draconic, Sylvan"
"cr": "5"
"traits":
  - "desc": "While all three members of a hag coven are within 30 feet of one another,\
      \ they can each cast the following spells from the wizard's spell list but must\
      \ share the spell slots among themselves:\n\n1st level (4 slots): [identify](/3-Mechanics/CLI/Compendium/spells/identify.md),\
      \ [ray of sickness](/3-Mechanics/CLI/Compendium/spells/ray-of-sickness.md)\n\
      \n2nd level (3 slots): [hold person](/3-Mechanics/CLI/Compendium/spells/hold-person.md),\
      \ [locate object](/3-Mechanics/CLI/Compendium/spells/locate-object.md)\n\n3rd\
      \ level (3 slots): [bestow curse](/3-Mechanics/CLI/Compendium/spells/bestow-curse.md),\
      \ [counterspell](/3-Mechanics/CLI/Compendium/spells/counterspell.md), [lightning\
      \ bolt](/3-Mechanics/CLI/Compendium/spells/lightning-bolt.md)\n\n4th level\
      \ (3 slots): [phantasmal killer](/3-Mechanics/CLI/Compendium/spells/phantasmal-killer.md),\
      \ [polymorph](/3-Mechanics/CLI/Compendium/spells/polymorph.md)\n\n5th level\
      \ (2 slots): [contact other plane](/3-Mechanics/CLI/Compendium/spells/contact-other-plane.md),\
      \ [scrying](/3-Mechanics/CLI/Compendium/spells/scrying.md)\n\n6th level (1\
      \ slots): [eyebite](/3-Mechanics/CLI/Compendium/spells/eyebite.md)\n\nFor\
      \ casting these spells, each hag is a 12th-level spellcaster that uses Intelligence\
      \ as her spellcasting ability. The spell save DC 13, and the spell attack bonus\
      \ is +5."
    "name": "Shared Spellcasting (Coven Only)"
  - "desc": "The hag's innate spellcasting ability is Charisma (spell save DC 12).\
      \ She can innately cast the following spells, requiring no material components:\n\
      \nAt will: [dancing lights](/3-Mechanics/CLI/Compendium/spells/dancing-lights.md),\
      \ [minor illusion](/3-Mechanics/CLI/Compendium/spells/minor-illusion.md), [vicious\
      \ mockery](/3-Mechanics/CLI/Compendium/spells/vicious-mockery.md)"
    "name": "Innate Spellcasting"
  - "desc": "The hag can breathe air and water."
    "name": "Amphibious"
  - "desc": "The hag can mimic animal sounds and humanoid voices. A creature that\
      \ hears the sounds can tell they are imitations with a successful DC 14 Wisdom\
      \ ([Insight](/3-Mechanics/CLI/Rules/skills.md#Insight)) check."
    "name": "Mimicry"
"actions":
  - "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13\
      \ (2d8 + 4) slashing damage."
    "name": "Claws"
  - "desc": "The hag covers herself and anything she is wearing or carrying with a\
      \ magical illusion that makes her look like another creature of her general\
      \ size and humanoid shape. The illusion ends if the hag takes a bonus action\
      \ to end it or if she dies.\n\nThe changes wrought by this effect fail to hold\
      \ up to physical inspection. For example, the hag could appear to have smooth\
      \ skin, but someone touching her would feel her rough flesh. Otherwise, a creature\
      \ must take an action to visually inspect the illusion and succeed on a DC 20\
      \ Intelligence ([Investigation](/3-Mechanics/CLI/Rules/skills.md#Investigation))\
      \ check to discern that the hag is disguised."
    "name": "Illusory Appearance"
  - "desc": "The hag magically turns [invisible](/3-Mechanics/CLI/Rules/conditions.md#Invisible)\
      \ until she attacks or casts a spell, or until her [concentration](/3-Mechanics/CLI/Rules/conditions.md#Concentration)\
      \ ends (as if [concentrating](/3-Mechanics/CLI/Rules/conditions.md#Concentration)\
      \ on a spell). While [invisible](/3-Mechanics/CLI/Rules/conditions.md#Invisible),\
      \ she leaves no physical evidence of her passage, so she can be tracked only\
      \ by magic. Any equipment she wears or carries is [invisible](/3-Mechanics/CLI/Rules/conditions.md#Invisible)\
      \ with her."
    "name": "Invisible Passage"
"lair_actions":
  - "desc": "The following lair actions are options for grandmothers and powerful\
      \ aunties. Grandmothers usually have three to five lair actions, aunties usually\
      \ only one (if they have any at all). Unless otherwise noted, any lair action\
      \ that requires a creature to make a saving throw uses the save DC of the hag's\
      \ most powerful ability."
    "name": ""
  - "desc": "On initiative count 20 (losing initiative ties), the hag can take a lair\
      \ action to cause one of the following effects, but can't use the same effect\
      \ two rounds in a row:"
    "name": ""
  - "desc": "- Until initiative count 20 on the next round, the hag can pass through\
      \ solid walls, doors, ceilings, and floors as if the surfaces weren't there.\
      \  \n- The hag targets any number of doors and windows that she can see, causing\
      \ each one to either open or close as she wishes. Closed doors can be magically\
      \ locked (requiring a successful DC 20 Strength check to force open) until she\
      \ chooses to make them unlocked, or until she uses this lair action again to\
      \ open them.  "
    "name": ""
  - "desc": "A powerful green hag might have the following additional lair action:"
    "name": ""
  - "desc": "- The hag creates an illusory duplicate of herself, which appears in\
      \ its own space. As long as she can see her duplicate, the hag can move it a\
      \ distance equal to her walking speed as well as make the illusion speak on\
      \ her turn (no action required). The illusion has the same statistics as the\
      \ hag but can't take actions or reactions. It can interact with its environment\
      \ and even pick up and hold real objects. The illusion seems real in every way\
      \ but disappears if it takes any amount of damage. Otherwise, it lasts until\
      \ the hag dismisses it (no action required) or can no longer see it. If the\
      \ hag uses this lair action to create a new duplicate, the previous one vanishes,\
      \ dropping any real objects in its possession.  "
    "name": ""
"regional_effects":
  - "desc": "Each hag's lair is the source of three to five regional effects; the\
      \ home of a grandmother, an auntie, or a coven has more effects than the lair\
      \ of a single hag, including some that can directly harm intruders. Any regional\
      \ effect that requires a creature to make a saving throw uses the save DC of\
      \ the hag's most powerful ability. These effects either end immediately if the\
      \ hag dies or abandons the lair, or take up to 2d10 days to fade away."
    "name": ""
  - "desc": "The region within 1 mile of a grandmother hag's lair is warped by the\
      \ creature's fell magic, which creates one or more of the following effects:"
    "name": ""
  - "desc": "- Birds, rodents, snakes, spiders, or toads (or some other creatures\
      \ appropriate to the hag) are found in great profusion.  \n- Beasts that have\
      \ an Intelligence score of 2 or lower are [charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed)\
      \ by the hag and directed to be aggressive toward intruders in the area.  \n\
      - Strange carved figurines, twig fetishes, or rag dolls magically appear in\
      \ trees.  "
    "name": ""
  - "desc": "A powerful green hag creates one or more of the following additional\
      \ regional effects within 1 mile of her lair:"
    "name": ""
  - "desc": "- Illusory duplicates of the hag appear in random places at random times\
      \ (but never more than one in any given location). An illusory duplicate has\
      \ no substance, but it looks, sounds, and moves like the hag. The hag can sense\
      \ when one or more creatures are within 60 feet of her duplicate and can interact\
      \ with them as if she were present and standing in the duplicate's space. If\
      \ the illusory duplicate takes any damage, it disappears.  \n- The region takes\
      \ twice as long as normal to traverse, since the plants grow thick and twisted,\
      \ and the swamps are thick with reeking mud.  \n- Trees transform into [awakened\
      \ trees](/3-Mechanics/CLI/Compendium/bestiary/plant/awakened-tree.md) and attack\
      \ when hostile intruders are near.  "
    "name": ""
"source":
  - "MM"
  - "TCE"
  - "WBtW"
```
^statblock

## Environment

forest, swamp, hill