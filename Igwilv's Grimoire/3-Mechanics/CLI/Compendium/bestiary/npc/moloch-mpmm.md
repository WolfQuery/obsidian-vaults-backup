---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/21
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend/devil
statblock: inline
statblock-link: "#^statblock"
aliases:
- Moloch
---
# [Moloch](3-Mechanics\CLI\Compendium\bestiary\npc/moloch-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 183*  

> [!quote] A quote from Mordenkainen  
> 
> Moloch obsesses over the power he lost, rather than thinking of the power he could gain elsewhere in the planes. What a pity he so wastes his potential.

Exiled from the Nine Hells, Moloch would do anything to reclaim his position. Long ago, Moloch earned his place among the other archdevils through the glory he won driving demons out of the Nine Hells. Asmodeus rewarded him by elevating him to the rulership of Malbolge.

For eons, Moloch ruled his domain, vying against the other archdevils as he sought still greater power. This animosity worked in Asmodeus's favor, since Asmodeus knew that Moloch's scheming helped keep the other archdevils in check. The arrangement unraveled, however, when Moloch took the night hag named Malagard for his advisor. Her poisonous words gradually convinced him to attempt to topple Asmodeus. The conspiracy nearly succeeded, but was ultimately thwarted. Moloch was stripped of his station and sentenced to death—only the timely use of a planar portal allowed him to escape.

Moloch wasted no time in preparing for his return. He amassed an army of devils and monsters and left them to make final preparations for invading the Nine Hells, while he ventured to the Material Plane in search of an artifact that would ensure his success. But while there, he became trapped, leaving his armies at the mercy of his enemies. They were destroyed in short order.

Moloch was rendered nearly powerless by this failure. He schemes of ways to reclaim his former status, but every time he enters the Nine Hells, he is demoted to an [imp](/3-Mechanics/CLI/Compendium/bestiary/fiend/imp.md) and can't regain his normal powers until he leaves. Thus, he lives a split existence, sometimes plotting in Malbolge or other layers of the Hells and at other times wandering the planes in search of magical might or secrets that might help him win back his title.

Rumors suggest that he can often be found in Sigil, where he bargains with yugoloths to build yet another army with which he might invade Malbolge and wrest the throne from Glasya. Bereft as he is, he has little to offer in exchange, so he might bargain with mortals to gain their aid in acquiring coin, jewels, and other riches in return for knowledge about the Nine Hells and the other planes.

Most of Moloch's cultists have switched allegiance to one of the other archdevils, but idols constructed to honor him still stand in deep dungeons, their jeweled eyes and the remnants of power they hold drawing monstrous worshipers and unwise adventurers into places where his foul influence remains.

```statblock
"name": "Moloch (MPMM)"
"size": "Large"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "253"
"hit_dice": "22d10 + 132"
"modifier": !!int "4"
"stats":
  - !!int "26"
  - !!int "19"
  - !!int "22"
  - !!int "21"
  - !!int "18"
  - !!int "23"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "11"
  - "constitution": !!int "13"
  - "wisdom": !!int "11"
  - "charisma": !!int "13"
"skillsaves":
  - "name": "[Deception](/3-Mechanics/CLI/Rules/skills.md#Deception)"
    "desc": "+13"
  - "name": "[Intimidation](/3-Mechanics/CLI/Rules/skills.md#Intimidation)"
    "desc": "+13"
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+11"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical attacks\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "[charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed),\
  \ [exhaustion](/3-Mechanics/CLI/Rules/conditions.md#Exhaustion), [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened),\
  \ [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned)"
"senses": "darkvision 120 ft., passive Perception 21"
"languages": "all, telepathy 120 ft."
"cr": "21"
"traits":
  - "desc": "If Moloch fails a saving throw, he can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Moloch has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "Moloch regains 20 hit points at the start of his turn. If he takes radiant\
      \ damage, this trait doesn't function at the start of his next turn. Moloch\
      \ dies only if he starts his turn with 0 hit points and doesn't regenerate."
    "name": "Regeneration"
"actions":
  - "desc": "Moloch makes one Bite attack, one Claw attack, and one Many-Tailed Whip\
      \ attack."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +15 to hit, reach 5 ft., one target. Hit: 26\
      \ (4d8 + 8) fire damage."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 17\
      \ (2d8 + 8) force damage."
    "name": "Claw"
  - "desc": "Melee Weapon Attack: +15 to hit, reach 30 ft., one target. Hit: 13\
      \ (2d4 + 8) lightning damage plus 11 (2d10) thunder damage. If the target is\
      \ a creature, it must succeed on a DC 24 Strength saving throw or be pulled\
      \ up to 30 feet in a straight line toward Moloch."
    "name": "Many-Tailed Whip"
  - "desc": "Moloch exhales in a 30-foot cube. Each creature in that area must succeed\
      \ on a DC 21 Wisdom saving throw or take 27 (5d10) psychic damage, drop whatever\
      \ it is holding, and become [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened)\
      \ of Moloch for 1 minute. While [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened)\
      \ in this way, a creature must take the [Dash](/3-Mechanics/CLI/Rules/actions.md#Dash)\
      \ action and move away from Moloch by the safest available route on each of\
      \ its turns, unless there is nowhere to move, in which case it needn't take\
      \ the [Dash](/3-Mechanics/CLI/Rules/actions.md#Dash) action. If the creature\
      \ ends its turn in a location where it doesn't have line of sight to Moloch,\
      \ the creature can repeat the saving throw, ending the effect on itself on a\
      \ success."
    "name": "Breath of Despair (Recharge 5-6)"
  - "desc": "Moloch teleports, along with any equipment he is wearing or carrying,\
      \ up to 120 feet to an unoccupied space he can see."
    "name": "Teleport"
  - "desc": "Moloch casts one of the following spells, requiring no material components\
      \ and using Charisma as the spellcasting ability (spell save DC 21):\n\nAt\
      \ will: [alter self](/3-Mechanics/CLI/Compendium/spells/alter-self.md) (can\
      \ become Medium when changing his appearance), [confusion](/3-Mechanics/CLI/Compendium/spells/confusion.md),\
      \ [detect magic](/3-Mechanics/CLI/Compendium/spells/detect-magic.md), [fly](/3-Mechanics/CLI/Compendium/spells/fly.md),\
      \ [major image](/3-Mechanics/CLI/Compendium/spells/major-image.md), [stinking\
      \ cloud](/3-Mechanics/CLI/Compendium/spells/stinking-cloud.md), [suggestion](/3-Mechanics/CLI/Compendium/spells/suggestion.md),\
      \ [wall of fire](/3-Mechanics/CLI/Compendium/spells/wall-of-fire.md)"
    "name": "Spellcasting"
"legendary_actions":
  - "desc": "Moloch makes one Bite, Claw, or Many-Tailed Whip attack."
    "name": "Attack"
  - "desc": "Moloch uses Teleport."
    "name": "Teleport"
  - "desc": "Moloch uses Spellcasting."
    "name": "Cast a Spell (Costs 2 Actions)"
"source":
  - "MPMM"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/moloch-mpmm.webp"
```
^statblock