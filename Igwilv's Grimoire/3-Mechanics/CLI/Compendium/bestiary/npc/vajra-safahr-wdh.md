---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdh
- ttrpg-cli/monster/cr/13
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
statblock-link: "#^statblock"
aliases:
- Vajra Safahr
---
# [Vajra Safahr](3-Mechanics\CLI\Compendium\bestiary\npc/vajra-safahr-wdh.md)
*Source: Waterdeep: Dragon Heist p. 217*  

Vajra is a capable wizard in her mid-thirties, the youngest person ever to hold the position of Blackstaff. As the High Wizard of Waterdeep, she is charged with using all the magic and resources at her disposal to defend the city against threats. She was handpicked for the job by Khelben Arunsun, and wields the Blackstaff from which Khelben derived his name and the title of the office. Vajra isn't the city's most powerful wizard, but she can hold her own. Despite her many gifts, she still questions her ability to meet the demands of her role, and she rarely makes a decision without first soliciting the advice of the Blackstaff, which contains Khelben Arunsun's spirit as well as the spirits of all the other Blackstaffs who preceded her. She also gets intelligence from many other sources, both through her own network of spies and from Harper agents.

Vajra runs Blackstaff Academy, a school for mages, out of Blackstaff Tower in the Castle Ward. She is also in charge of Force Grey, an order of highly skilled adventurers who are called upon to defend the city in times of need. Vajra is always looking for new adventurers to fill the ranks of Force Grey, and she is particularly interested in those who can bring unique skills, abilities, or spells to the mix.

Several of the older and more seasoned wizards in Waterdeep consider Vajra an upstart, but they are smart enough not to challenge her. Only the Open Lord, currently Laeral Silverhand, can strip Vajra of her title.

```statblock
"name": "Vajra Safahr (WDH)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Neutral"
"ac": !!int "14"
"ac_class": "17 with [mage armor](/3-Mechanics/CLI/Compendium/spells/mage-armor.md)"
"hp": !!int "126"
"hit_dice": "23d8 + 23"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "14"
  - !!int "12"
  - !!int "20"
  - !!int "11"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "strength": !!int "2"
  - "dexterity": !!int "4"
  - "constitution": !!int "3"
  - "intelligence": !!int "12"
  - "wisdom": !!int "7"
  - "charisma": !!int "5"
"skillsaves":
  - "name": "[Arcana](/3-Mechanics/CLI/Rules/skills.md#Arcana)"
    "desc": "+10"
  - "name": "[History](/3-Mechanics/CLI/Rules/skills.md#History)"
    "desc": "+10"
"senses": "passive Perception 10"
"languages": "Common, Dwarvish, Elvish, Giant, Halfling, Undercommon"
"cr": "13"
"traits":
  - "desc": "Vajra is an 18th-level spellcaster. Her spellcasting ability is Intelligence\
      \ (spell save DC 18, +12 to hit with spell attacks). She has the following wizard\
      \ spells prepared:\n\nCantrips (at will): [fire bolt](/3-Mechanics/CLI/Compendium/spells/fire-bolt.md),\
      \ [light](/3-Mechanics/CLI/Compendium/spells/light.md), [mage hand](/3-Mechanics/CLI/Compendium/spells/mage-hand.md),\
      \ [message](/3-Mechanics/CLI/Compendium/spells/message.md), [prestidigitation](/3-Mechanics/CLI/Compendium/spells/prestidigitation.md)\n\
      \n1st level (4 slots): [detect magic](/3-Mechanics/CLI/Compendium/spells/detect-magic.md),\
      \ [identify](/3-Mechanics/CLI/Compendium/spells/identify.md), [mage armor](/3-Mechanics/CLI/Compendium/spells/mage-armor.md),\
      \ [thunderwave](/3-Mechanics/CLI/Compendium/spells/thunderwave.md)\n\n2nd\
      \ level (3 slots): [invisibility](/3-Mechanics/CLI/Compendium/spells/invisibility.md),\
      \ [misty step](/3-Mechanics/CLI/Compendium/spells/misty-step.md), [web](/3-Mechanics/CLI/Compendium/spells/web.md)\n\
      \n3rd level (3 slots): [counterspell](/3-Mechanics/CLI/Compendium/spells/counterspell.md),\
      \ [fly](/3-Mechanics/CLI/Compendium/spells/fly.md), [sending](/3-Mechanics/CLI/Compendium/spells/sending.md)\n\
      \n4th level (3 slots): [banishment](/3-Mechanics/CLI/Compendium/spells/banishment.md),\
      \ [fire shield](/3-Mechanics/CLI/Compendium/spells/fire-shield.md), [stoneskin](/3-Mechanics/CLI/Compendium/spells/stoneskin.md)\n\
      \n5th level (3 slots): [Bigby's hand](/3-Mechanics/CLI/Compendium/spells/bigbys-hand.md),\
      \ [geas](/3-Mechanics/CLI/Compendium/spells/geas.md), [telekinesis](/3-Mechanics/CLI/Compendium/spells/telekinesis.md)\n\
      \n6th level (1 slots): [chain lightning](/3-Mechanics/CLI/Compendium/spells/chain-lightning.md),\
      \ [globe of invulnerability](/3-Mechanics/CLI/Compendium/spells/globe-of-invulnerability.md)\n\
      \n7th level (1 slots): [forcecage](/3-Mechanics/CLI/Compendium/spells/forcecage.md),\
      \ [prismatic spray](/3-Mechanics/CLI/Compendium/spells/prismatic-spray.md)\n\
      \n8th level (1 slots): [antimagic field](/3-Mechanics/CLI/Compendium/spells/antimagic-field.md),\
      \ [power word stun](/3-Mechanics/CLI/Compendium/spells/power-word-stun.md)\n\
      \n9th level (1 slots): [imprisonment](/3-Mechanics/CLI/Compendium/spells/imprisonment.md)"
    "name": "Spellcasting"
  - "desc": "Vajra wields the [Blackstaff](/3-Mechanics/CLI/Compendium/items/blackstaff-wdh.md),\
      \ accounted for in her statistics. Roll 2d10 to determine how many charges the\
      \ staff has remaining."
    "name": "Special Equipment"
  - "desc": "Vajra has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "While holding the [Blackstaff](/3-Mechanics/CLI/Compendium/items/blackstaff-wdh.md),\
      \ Vajra can use an action to expend 1 or more of its charges to cast one of\
      \ the following spells from it, using her spell save DC and spell attack bonus:\
      \ [cone of cold](/3-Mechanics/CLI/Compendium/spells/cone-of-cold.md) (5 charges),\
      \ [fireball](/3-Mechanics/CLI/Compendium/spells/fireball.md) (5th-level version,\
      \ 5 charges), [globe of invulnerability](/3-Mechanics/CLI/Compendium/spells/globe-of-invulnerability.md)\
      \ (6 charges), [hold monster](/3-Mechanics/CLI/Compendium/spells/hold-monster.md)\
      \ (5 charges), [levitate](/3-Mechanics/CLI/Compendium/spells/levitate.md) (2\
      \ charges), [lightning bolt](/3-Mechanics/CLI/Compendium/spells/lightning-bolt.md)\
      \ (5th-level version, 5 charges), [magic missile](/3-Mechanics/CLI/Compendium/spells/magic-missile.md)\
      \ (1 charge), [ray of enfeeblement](/3-Mechanics/CLI/Compendium/spells/ray-of-enfeeblement.md)\
      \ (1 charge), or [wall of force](/3-Mechanics/CLI/Compendium/spells/wall-of-force.md)\
      \ (5 charges)."
    "name": "Staff Spells"
"actions":
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 5 (1d6\
      \ + 2) bludgeoning, magic damage, or 6 (1d8 + 2) bludgeoning, magic damage when\
      \ used with two hands. Vajra can expend 1 of the staff's charges to deal an\
      \ extra 3 (d6) force damage on a hit."
    "name": "Blackstaff"
"source":
  - "WDH"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/vajra-safahr-wdh.webp"
```
^statblock