---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend
statblock: inline
statblock-link: "#^statblock"
aliases:
- Night Hag (Coven)
---
# [Night Hag (Coven)](3-Mechanics\CLI\Compendium\bestiary\fiend/night-hag-coven.md)
*Source: Monster Manual p. 178, Waterdeep: Dungeon of the Mad Mage, Tasha's Cauldron of Everything, Keys from the Golden Vault. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*  

```statblock
"name": "Night Hag (Coven)"
"size": "Medium"
"type": "fiend"
"alignment": "Neutral Evil"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "112"
"hit_dice": "15d8 + 45"
"modifier": !!int "2"
"stats":
  - !!int "18"
  - !!int "15"
  - !!int "16"
  - !!int "16"
  - !!int "14"
  - !!int "16"
"speed": "30 ft."
"skillsaves":
  - "name": "[Deception](/3-Mechanics/CLI/Rules/skills.md#Deception)"
    "desc": "+6"
  - "name": "[Insight](/3-Mechanics/CLI/Rules/skills.md#Insight)"
    "desc": "+5"
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Stealth](/3-Mechanics/CLI/Rules/skills.md#Stealth)"
    "desc": "+5"
"damage_resistances": "cold; fire; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't silvered"
"condition_immunities": "[charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed)"
"senses": "darkvision 120 ft., passive Perception 16"
"languages": "Abyssal, Common, Infernal, Primordial"
"cr": "7"
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
      \ as her spellcasting ability. The spell save DC 15, and the spell attack bonus\
      \ is +7."
    "name": "Shared Spellcasting (Coven Only)"
  - "desc": "The hag's innate spellcasting ability is Charisma (spell save DC 14,\
      \ +6 to hit with spell attacks). She can innately cast the following spells,\
      \ requiring no material components:\n\nAt will: [detect magic](/3-Mechanics/CLI/Compendium/spells/detect-magic.md),\
      \ [magic missile](/3-Mechanics/CLI/Compendium/spells/magic-missile.md)\n\n2/day\
      \ each: [plane shift](/3-Mechanics/CLI/Compendium/spells/plane-shift.md) (self\
      \ only), [ray of enfeeblement](/3-Mechanics/CLI/Compendium/spells/ray-of-enfeeblement.md),\
      \ [sleep](/3-Mechanics/CLI/Compendium/spells/sleep.md)"
    "name": "Innate Spellcasting"
  - "desc": "The hag has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "A night hag carries two very rare magic items that she must craft for\
      \ herself. If either object is lost, the night hag will go to great lengths\
      \ to retrieve it, as creating a new tool takes time and effort.\n\nHeartstone:\
      \ This lustrous black gem allows a night hag to become ethereal while it is\
      \ in her possession. The touch of a heartstone also cures any disease. Crafting\
      \ a heartstone takes 30 days.\n\nSoul Bag: When an evil humanoid dies as a result\
      \ of a night hag's Nightmare Haunting, the hag catches the soul in this black\
      \ sack made of stitched flesh. A soul bag can hold only one evil soul at a time,\
      \ and only the night hag who crafted the bag can catch a soul with it. Crafting\
      \ a soul bag takes 7 days and a humanoid sacrifice (whose flesh is used to make\
      \ the bag)."
    "name": "Night Hag Items"
"actions":
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13\
      \ (2d8 + 4) slashing damage."
    "name": "Claws (Hag Form Only)"
  - "desc": "The hag magically polymorphs into a Small or Medium female humanoid,\
      \ or back into her true form. Her statistics are the same in each form. Any\
      \ equipment she is wearing or carrying isn't transformed. She reverts to her\
      \ true form if she dies."
    "name": "Change Shape"
  - "desc": "The hag magically enters the Ethereal Plane from the Material Plane,\
      \ or vice versa. To do so, the hag must have a heartstone in her possession."
    "name": "Etherealness"
  - "desc": "While on the Ethereal Plane, the hag magically touches a sleeping humanoid\
      \ on the Material Plane. A [protection from evil and good](/3-Mechanics/CLI/Compendium/spells/protection-from-evil-and-good.md)\
      \ spell cast on the target prevents this contact, as does a magic circle. As\
      \ long as the contact persists, the target has dreadful visions. If these visions\
      \ last for at least 1 hour, the target gains no benefit from its rest, and its\
      \ hit point maximum is reduced by 5 (d10). If this effect reduces the target's\
      \ hit point maximum to 0, the target dies, and if the target was evil, its soul\
      \ is trapped in the hag's soul bag. The reduction to the target's hit point\
      \ maximum lasts until removed by the  [greater restoration](/3-Mechanics/CLI/Compendium/spells/greater-restoration.md)\
      \ spell or similar magic."
    "name": "Nightmare Haunting (1/Day)"
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
  - "desc": "A powerful night hag might have the following additional lair actions:"
    "name": ""
  - "desc": "- One creature the hag can see within 120 feet of her must succeed on\
      \ a DC 15 Charisma saving throw or be banished to a prison demiplane. To escape,\
      \ the creature must use its action to make a Charisma check contested by the\
      \ hag's. If the creature wins, it escapes the demiplane. Otherwise, the effect\
      \ ends on initiative count 20 on the next round. When the effect ends, the creature\
      \ reappears in the space it left or in the nearest unoccupied space if that\
      \ one is occupied.  \n- The hag targets up to three creatures that she can see\
      \ within 60 feet of her. Each target must succeed on a DC 15 Constitution saving\
      \ throw or be flung up to 30 feet through the air. A creature that strikes a\
      \ solid object or is released in midair takes d6 bludgeoning damage for every\
      \ 10 feet moved or fallen.  "
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
  - "desc": "A powerful night hag creates one or more of the following additional\
      \ regional effects within 1 mile of her lair:"
    "name": ""
  - "desc": "- Shadows seem abnormally gaunt and sometimes move on their own as though\
      \ alive.  \n- Creatures are transported to a harmless but eerie demiplane filled\
      \ with shadowy forms, waxy corpses, and cackling. The creatures are trapped\
      \ there for a minute or two, and then returned to the place where they vanished\
      \ from.  \n- Intelligent creatures see hallucinations of dead friends, family\
      \ members, and even themselves littering the hag's realm. Any attempt to interact\
      \ with a hallucinatory image causes it to disappear.  "
    "name": ""
"source":
  - "MM"
  - "WDMM"
  - "TCE"
  - "KftGV"
```
^statblock