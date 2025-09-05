---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/20
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/cleric
- ttrpg-cli/monster/type/humanoid/elf
statblock: inline
statblock-link: "#^statblock"
aliases:
- Drow Matron Mother
---
# [Drow Matron Mother](3-Mechanics\CLI\Compendium\bestiary\humanoid/drow-matron-mother-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 104*  

Among drow followers of Lolth, each noble house is led by a matron mother, an influential priestess of Lolth charged with carrying out the god's will while also advancing the interests of the family. Matron mothers embody the scheming and treachery associated with the Queen of Spiders. Each stands at the center of a vast conspiratorial web, with demons, spiders, and conscripted soldiers positioned between them and their enemies. Although matron mothers command great power, that power depends on maintaining the Spider Queen's favor, and the goddess sometimes capriciously takes back what she has given. The stat block here represents a matron mother at the height of her power.

A matron mother is almost never encountered alone. She is typically accompanied by a [drow favored consort](/3-Mechanics/CLI/Compendium/bestiary/humanoid/drow-favored-consort-mpmm.md) and a [drow house captain](/3-Mechanics/CLI/Compendium/bestiary/humanoid/drow-house-captain-mpmm.md), each of whom appears in this book. Other Underdark creatures might also be in the priestess's presence, providing protection or advice.

## Mothers of Rebellion

Some matron mothers renounce Lolth and join the war against their former goddess. Such drow could be of any alignment, and they lose the following abilities in the stat block: Lolth's Fickle Favor, Summon Servant, and Compel Demon. Even without these abilities, drow matron mothers are formidable opponents, and several of them hold positions of great influence in the Underdark armies arrayed against the followers of Lolth.

## A Matron Mother's Lair

The palace of a drow matron mother is her home and fortress. Sigils throughout the building allow the matron mother to use the following lair actions while within it.

Any temple of Lolth also functions as a matron mother's lair while she is inside it, unless she has renounced Lolth or another matron mother is present. When two or more matron mothers gather within a temple of their goddess, none of them can use it as their lair.

```statblock
"name": "Drow Matron Mother (MPMM)"
"size": "Medium"
"type": "humanoid"
"subtype": "cleric, elf"
"alignment": "Typically  Neutral Evil"
"ac": !!int "17"
"ac_class": "[half plate](/3-Mechanics/CLI/Compendium/items/half-plate-armor.md)"
"hp": !!int "247"
"hit_dice": "33d8 + 99"
"modifier": !!int "4"
"stats":
  - !!int "12"
  - !!int "18"
  - !!int "16"
  - !!int "17"
  - !!int "21"
  - !!int "22"
"speed": "30 ft."
"saves":
  - "constitution": !!int "9"
  - "wisdom": !!int "11"
  - "charisma": !!int "12"
"skillsaves":
  - "name": "[Insight](/3-Mechanics/CLI/Rules/skills.md#Insight)"
    "desc": "+11"
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+11"
  - "name": "[Religion](/3-Mechanics/CLI/Rules/skills.md#Religion)"
    "desc": "+9"
  - "name": "[Stealth](/3-Mechanics/CLI/Rules/skills.md#Stealth)"
    "desc": "+10"
"condition_immunities": "[charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed),\
  \ [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened), [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned)"
"senses": "darkvision 120 ft., passive Perception 21"
"languages": "Elvish, Undercommon"
"cr": "20"
"traits":
  - "desc": "The drow has advantage on saving throws against being [charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed),\
      \ and magic can't put the drow to sleep."
    "name": "Fey Ancestry"
  - "desc": "The drow wields a [tentacle rod](/3-Mechanics/CLI/Compendium/items/tentacle-rod.md)."
    "name": "Special Equipment"
  - "desc": "While in sunlight, the drow has disadvantage on attack rolls, as well\
      \ as on Wisdom ([Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)) checks\
      \ that rely on sight."
    "name": "Sunlight Sensitivity"
"actions":
  - "desc": "The drow makes two Demon Staff attacks or one Demon Staff attack and\
      \ three Tentacle Rod attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 7\
      \ (1d6 + 4) bludgeoning damage, or 8 (1d8 + 4) bludgeoning damage if used with\
      \ two hands, plus 14 (4d6) psychic damage. The target must succeed on a DC 19\
      \ Wisdom saving throw or become [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened)\
      \ of the drow for 1 minute. The [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened)\
      \ target can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success."
    "name": "Demon Staff"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 15 ft., one creature. Hit:\
      \ 3 (d6) bludgeoning damage. If the target is hit three times by the [rod](/3-Mechanics/CLI/Compendium/items/tentacle-rod.md)\
      \ on one turn, the target must succeed on a DC 15 Constitution saving throw\
      \ or suffer the following effects for 1 minute: the target's speed is halved,\
      \ it has disadvantage on Dexterity saving throws, and it can't use reactions.\
      \ Moreover, on each of its turns, it can take either an action or a bonus action,\
      \ but not both. At the end of each of its turns, it can repeat the saving throw,\
      \ ending the effect on itself on a success."
    "name": "Tentacle Rod"
  - "desc": "A 10-foot-radius, 40-foot-high column of divine fire sprouts in an area\
      \ up to 120 feet away from the drow. Each creature in the column must make a\
      \ DC 20 Dexterity saving throw, taking 14 (4d6) fire damage and 14 (4d6) radiant\
      \ damage on a failed save, or half as much damage on a successful one."
    "name": "Divine Flame (2/Day)"
  - "desc": "The drow casts one of the following spells, requiring no material components\
      \ and using Charisma as the spellcasting ability (spell save DC 20):\n\nAt\
      \ will: [command](/3-Mechanics/CLI/Compendium/spells/command.md), [dancing\
      \ lights](/3-Mechanics/CLI/Compendium/spells/dancing-lights.md), [detect magic](/3-Mechanics/CLI/Compendium/spells/detect-magic.md),\
      \ [thaumaturgy](/3-Mechanics/CLI/Compendium/spells/thaumaturgy.md)\n\n2/day\
      \ each: [banishment](/3-Mechanics/CLI/Compendium/spells/banishment.md), [blade\
      \ barrier](/3-Mechanics/CLI/Compendium/spells/blade-barrier.md), [cure wounds](/3-Mechanics/CLI/Compendium/spells/cure-wounds.md),\
      \ [hold person](/3-Mechanics/CLI/Compendium/spells/hold-person.md), [plane shift](/3-Mechanics/CLI/Compendium/spells/plane-shift.md),\
      \ [silence](/3-Mechanics/CLI/Compendium/spells/silence.md)\n\n1/day each:\
      \ [clairvoyance](/3-Mechanics/CLI/Compendium/spells/clairvoyance.md), [darkness](/3-Mechanics/CLI/Compendium/spells/darkness.md),\
      \ [detect thoughts](/3-Mechanics/CLI/Compendium/spells/detect-thoughts.md),\
      \ [dispel magic](/3-Mechanics/CLI/Compendium/spells/dispel-magic.md), [faerie\
      \ fire](/3-Mechanics/CLI/Compendium/spells/faerie-fire.md), [gate](/3-Mechanics/CLI/Compendium/spells/gate.md),\
      \ [levitate](/3-Mechanics/CLI/Compendium/spells/levitate.md) (self only), [suggestion](/3-Mechanics/CLI/Compendium/spells/suggestion.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "The drow bestows the Spider Queen's blessing on one ally she can see\
      \ within 30 feet of her. The ally takes 7 (2d6) psychic damage but has advantage\
      \ on the next attack roll it makes before the end of its next turn."
    "name": "Lolth's Fickle Favor"
  - "desc": "The drow magically summons a [glabrezu](/3-Mechanics/CLI/Compendium/bestiary/fiend/glabrezu.md)\
      \ or a [yochlol](/3-Mechanics/CLI/Compendium/bestiary/fiend/yochlol.md). The\
      \ summoned creature appears in an unoccupied space within 60 feet of its summoner,\
      \ acts as an ally of its summoner, and can't summon other demons. It remains\
      \ for 10 minutes, until it or its summoner dies, or until its summoner dismisses\
      \ it as an action."
    "name": "Summon Servant (1/Day)"
"legendary_actions":
  - "desc": "An allied demon within 30 feet of the drow uses its reaction to make\
      \ one attack against a target of the drow's choice that she can see."
    "name": "Compel Demon"
  - "desc": "The drow makes one Demon Staff attack."
    "name": "Demon Staff"
  - "desc": "The drow uses Spellcasting."
    "name": "Cast a Spell (Costs 2 Actions)"
"lair_actions":
  - "desc": "On initiative count 20 (losing initiative ties), the drow can take one\
      \ of the following lair actions when in her lair; she can't take the same lair\
      \ action two rounds in a row:"
    "name": ""
  - "desc": "- Perceive Interlopers. The drow projects her mind throughout her\
      \ lair, marking any potential threats against her or her retinue. Until initiative\
      \ count 20 of the next round, hostile creatures within the lair can't become\
      \ hidden from her and gain no benefit from the [invisible](/3-Mechanics/CLI/Rules/conditions.md#Invisible)\
      \ condition against her.  \n- Spectral Web. A glistening spectral spider\
      \ web erupts from a point the drow can see within 120 feet of her. Each creature\
      \ within 60 feet of that point must succeed a DC 19 Dexterity saving throw or\
      \ be [restrained](/3-Mechanics/CLI/Rules/conditions.md#Restrained) for 1 minute.\
      \ A creature can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success.  \n- Telekinetic Throw. The drow targets\
      \ one creature she can see within 60 feet of her and attempts to expel it from\
      \ her presence. The target must succeed on a DC 19 Strength saving throw or\
      \ be flung 2d6 × 10 feet through the air. A creature smashed into a solid object\
      \ takes d6 bludgeoning damage for every 10 feet moved. If released in midair,\
      \ the creature takes falling damage as normal.  "
    "name": ""
"source":
  - "MPMM"
"image": "/3-Mechanics/CLI/Compendium/bestiary/humanoid/token/drow-matron-mother-mpmm.webp"
```
^statblock

## Environment

underdark