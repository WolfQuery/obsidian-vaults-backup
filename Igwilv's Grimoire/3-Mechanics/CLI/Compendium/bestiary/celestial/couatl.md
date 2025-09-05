---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/celestial
statblock: inline
statblock-link: "#^statblock"
aliases:
- Couatl
---
# [Couatl](3-Mechanics\CLI\Compendium\bestiary\celestial/couatl.md)
*Source: Monster Manual p. 43, Waterdeep: Dungeon of the Mad Mage. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*  

Couatls are benevolent serpentine beings of great intellect and insight. Their brilliantly colored wings and gentle manner speak to their celestial origins.

## Divine Caretakers

Couatls were created as guardians and caretakers by a benevolent god not worshiped since the dawn of time, and which is forgotten now by all but the couatls themselves. Most of the divine mandates given to these beings are long since fulfilled or failed. However, a number of couatls still watch over ancient power, await fulfillment of prophecy, or safeguard the heirs of creatures they once guided and protected. Regardless of a couatl's task, it prefers to remain hidden, revealing itself only as a last resort.

## Truth Tellers

A couatl can't lie, but it can withhold information, answer questions vaguely, or allow others to jump to the wrong conclusions if doing so is necessary to protect something, to keep promises, or to hide the secret of its existence.

## Ancient and Few

A couatl can live for ages without sustenance, even surviving without air, but these creatures can die of disease or the passage of time. A couatl can sense its end up to a century beforehand, but it has no insight into the manner of its demise. If a couatl has already accomplished what it set out to do, it accepts its fate. However, if its imminent death endangers the completion of its goals, it actively seeks out another couatl with which to produce offspring.

The mating ritual of couatls is a beautiful and elaborate dance of magic and light, which results in a gem-like egg from which a new couatl hatches. The parent that sought out the mate raises the newborn couatl and instructs it as to its duties, so that it can complete whatever task the parent leaves unfinished.

```statblock
"name": "Couatl"
"size": "Medium"
"type": "celestial"
"alignment": "Lawful Good"
"ac": !!int "19"
"ac_class": "natural armor"
"hp": !!int "97"
"hit_dice": "13d8 + 39"
"modifier": !!int "5"
"stats":
  - !!int "16"
  - !!int "20"
  - !!int "17"
  - !!int "18"
  - !!int "20"
  - !!int "18"
"speed": "30 ft., fly 90 ft."
"saves":
  - "constitution": !!int "5"
  - "wisdom": !!int "7"
  - "charisma": !!int "6"
"damage_resistances": "radiant"
"damage_immunities": "psychic; bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "truesight 120 ft., passive Perception 15"
"languages": "all, telepathy 120 ft."
"cr": "4"
"traits":
  - "desc": "The couatl's spellcasting ability is Charisma (spell save DC 14). It\
      \ can innately cast the following spells, requiring only verbal components:\n\
      \nAt will: [detect evil and good](/3-Mechanics/CLI/Compendium/spells/detect-evil-and-good.md),\
      \ [detect magic](/3-Mechanics/CLI/Compendium/spells/detect-magic.md), [detect\
      \ thoughts](/3-Mechanics/CLI/Compendium/spells/detect-thoughts.md)\n\n3/day\
      \ each: [bless](/3-Mechanics/CLI/Compendium/spells/bless.md), [create food\
      \ and water](/3-Mechanics/CLI/Compendium/spells/create-food-and-water.md), [cure\
      \ wounds](/3-Mechanics/CLI/Compendium/spells/cure-wounds.md), [lesser restoration](/3-Mechanics/CLI/Compendium/spells/lesser-restoration.md),\
      \ [protection from poison](/3-Mechanics/CLI/Compendium/spells/protection-from-poison.md),\
      \ [sanctuary](/3-Mechanics/CLI/Compendium/spells/sanctuary.md), [shield](/3-Mechanics/CLI/Compendium/spells/shield.md)\n\
      \n1/day each: [dream](/3-Mechanics/CLI/Compendium/spells/dream.md), [greater\
      \ restoration](/3-Mechanics/CLI/Compendium/spells/greater-restoration.md), [scrying](/3-Mechanics/CLI/Compendium/spells/scrying.md)"
    "name": "Innate Spellcasting"
  - "desc": "The couatl's weapon attacks are magical."
    "name": "Magic Weapons"
  - "desc": "The couatl is immune to scrying and to any effect that would sense its\
      \ emotions, read its thoughts, or detect its location."
    "name": "Shielded Mind"
"actions":
  - "desc": "Melee Weapon Attack: +8 to hit, reach 5 ft., one creature. Hit: 8\
      \ (1d6 + 5) piercing damage, and the target must succeed on a DC 13 Constitution\
      \ saving throw or be [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned)\
      \ for 24 hours. Until this poison ends, the target is [unconscious](/3-Mechanics/CLI/Rules/conditions.md#Unconscious).\
      \ Another creature can use an action to shake the target awake."
    "name": "Bite"
  - "desc": "Melee Weapon Attack: +6 to hit, reach 10 ft., one Medium or smaller\
      \ creature. Hit: 10 (2d6 + 3) bludgeoning damage, and the target is [grappled](/3-Mechanics/CLI/Rules/conditions.md#Grappled)\
      \ (escape DC 15). Until this grapple ends, the target is [restrained](/3-Mechanics/CLI/Rules/conditions.md#Restrained),\
      \ and the couatl can't constrict another target."
    "name": "Constrict"
  - "desc": "The couatl magically polymorphs into a humanoid or beast that has a challenge\
      \ rating equal to or less than its own, or back into its true form. It reverts\
      \ to its true form if it dies. Any equipment it is wearing or carrying is absorbed\
      \ or borne by the new form (the couatl's choice).\n\nIn a new form, the couatl\
      \ retains its game statistics and ability to speak, but its AC, movement modes,\
      \ Strength, Dexterity, and other actions are replaced by those of the new form,\
      \ and it gains any statistics and capabilities (except class features, legendary\
      \ actions, and lair actions) that the new form has but that it lacks. If the\
      \ new form has a bite attack, the couatl can use its bite in that form."
    "name": "Change Shape"
"source":
  - "MM"
  - "WDMM"
"image": "/3-Mechanics/CLI/Compendium/bestiary/celestial/token/couatl.webp"
```
^statblock

## Environment

grassland, forest, urban, desert