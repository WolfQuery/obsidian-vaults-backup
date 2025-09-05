---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/23
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Zuggtmoy
---
# [Zuggtmoy](3-Mechanics\CLI\Compendium\bestiary\npc/zuggtmoy-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 281*  

The Demon Queen of Fungi, Lady of Rot and Decay, Zuggtmoy is an alien creature whose only desire is to infect the living with spores, transforming them into her mindless servants and, eventually, into decomposing hosts for the mushrooms, molds, and other fungi that she spawns.

Utterly inhuman, Zuggtmoy can mold her fungoid form into an approximation of a humanoid shape, including the skeletal-thin figure depicted in grimoires and ancient art, draped and veiled in mycelia and lichen. Indeed, much of her appearance and manner, and that of her servants, is a soulless mockery of mortal life and its many facets.

Zuggtmoy's cultists often follow her unwittingly. Most are fungi—infected to some degree, whether through inhaling her mind-controlling spores or being transformed to the point where flesh and fungus become one. Such cultists are fungal extensions of the Demon Queen's will.

Their devotion might begin with the seemingly harmless promises offered by exotic spores and mushrooms, but quickly consumes them, body and soul.

## Cultists of Zuggtmoy

> [!note]
> See the Cult of Zuggtmoy entry.

## Zuggtmoy's Lair

Zuggtmoy's principal lair is her palace on Shedaklah. It consists of two dozen mushrooms of pale yellow and rancid brown. These massive fungi are some of the largest in existence. They are surrounded by a field of acidic puffballs and poisonous vapors. The mushrooms themselves are all interconnected by bridges of shelf-fungi, and countless chambers have been hollowed out from within their rubbery, fibrous stalks.

```statblock
"name": "Zuggtmoy (MPMM)"
"size": "Large"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "304"
"hit_dice": "32d10 + 128"
"modifier": !!int "2"
"stats":
  - !!int "22"
  - !!int "15"
  - !!int "18"
  - !!int "20"
  - !!int "19"
  - !!int "24"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "9"
  - "constitution": !!int "11"
  - "wisdom": !!int "11"
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+11"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison; bludgeoning, piercing, slashing that is nonmagical"
"condition_immunities": "[charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed),\
  \ [exhaustion](/3-Mechanics/CLI/Rules/conditions.md#Exhaustion), [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened),\
  \ [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned)"
"senses": "truesight 120 ft., passive Perception 21"
"languages": "all, telepathy 120 ft."
"cr": "23"
"traits":
  - "desc": "If Zuggtmoy fails a saving throw, she can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Zuggtmoy has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
"actions":
  - "desc": "Zuggtmoy makes three Pseudopod attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 15\
      \ (2d8 + 6) force damage plus 9 (2d8) poison damage."
    "name": "Pseudopod"
  - "desc": "Zuggtmoy casts one of the following spells, requiring no material components\
      \ and using Charisma as the spellcasting ability (spell save DC 22):\n\nAt\
      \ will: [detect magic](/3-Mechanics/CLI/Compendium/spells/detect-magic.md),\
      \ [locate animals or plants](/3-Mechanics/CLI/Compendium/spells/locate-animals-or-plants.md)\n\
      \n3/day each: [dispel magic](/3-Mechanics/CLI/Compendium/spells/dispel-magic.md),\
      \ [entangle](/3-Mechanics/CLI/Compendium/spells/entangle.md), [plant growth](/3-Mechanics/CLI/Compendium/spells/plant-growth.md)\n\
      \n1/day each: [etherealness](/3-Mechanics/CLI/Compendium/spells/etherealness.md),\
      \ [teleport](/3-Mechanics/CLI/Compendium/spells/teleport.md)"
    "name": "Spellcasting"
"bonus_actions":
  - "desc": "Zuggtmoy releases spores that burst out in a cloud that fills a 20-foot-radius\
      \ sphere centered on her, and it lingers for 1 minute. Any creature in the cloud\
      \ when it appears, or that enters it later, must make a DC 19 Constitution saving\
      \ throw. On a successful save, the creature can't be infected by these spores\
      \ for 24 hours. On a failed save, the creature is infected with a disease called\
      \ the spores of Zuggtmoy, which lasts until the creature is cured of the disease\
      \ or dies. While infected in this way, the creature can't be reinfected, and\
      \ it must repeat the saving throw at the end of every 24 hours, ending the infection\
      \ on a success. On a failure, the infected creature's body is slowly taken over\
      \ by fungal growth, and after three such failed saves, the creature dies and\
      \ is reanimated as a [spore servant](/3-Mechanics/CLI/Compendium/bestiary/plant/quaggoth-spore-servant.md)\
      \ if it's a type of creature that can be."
    "name": "Infestation Spores (3/Day)"
  - "desc": "Zuggtmoy releases spores that burst out in a cloud that fills a 20-foot-radius\
      \ sphere centered on her, and it lingers for 1 minute. Humanoids and Beasts\
      \ in the cloud when it appears, or that enter it later, must make a DC 19 Wisdom\
      \ saving throw. On a successful save, a creature can't be infected by these\
      \ spores for 24 hours. On a failed save, the creature is infected with a disease\
      \ called the influence of Zuggtmoy for 24 hours. While infected in this way,\
      \ the creature is [charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed) by\
      \ her and can't be reinfected by these spores."
    "name": "Mind Control Spores (Recharge 5-6)"
"reactions":
  - "desc": "When Zuggtmoy is hit by an attack roll, one creature within 10 feet of\
      \ her that is [charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed) by her\
      \ is hit by the attack instead."
    "name": "Protective Thrall"
"legendary_actions":
  - "desc": "Zuggtmoy makes one Pseudopod attack."
    "name": "Attack"
  - "desc": "One creature [charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed)\
      \ by Zuggtmoy that she can see must use its reaction, if a available, to move\
      \ up to its speed as she directs or to make one weapon attack against a target\
      \ that she designates."
    "name": "Exert Will"
"lair_actions":
  - "desc": "On Initiative count 20 (losing initiative ties), Zuggtmoy can take a\
      \ lair action to cause one of the following effects; she can't use the same\
      \ effect two rounds in a row:"
    "name": ""
  - "desc": "- Rally Plants. Up to four plant creatures that are friendly to Zuggtmoy\
      \ and that Zuggtmoy can see can use their reactions to move up to their speed\
      \ and make one weapon attack.  \n- Summon Fungi. Zuggtmoy causes four [gas\
      \ spores](/3-Mechanics/CLI/Compendium/bestiary/plant/gas-spore.md) or [violet\
      \ fungi](/3-Mechanics/CLI/Compendium/bestiary/plant/violet-fungus.md) to appear\
      \ in unoccupied spaces that she chooses within the lair. They vanish after 1\
      \ hour.  \n- Unleash Spores. Zuggtmoy uses either her Infestation Spores\
      \ or her Mind Control Spores, centered on a mushroom or other fungus within\
      \ her lair, instead of on herself.  "
    "name": ""
"regional_effects":
  - "desc": "The region containing Zuggtmoy's lair is warped by his magic, creating\
      \ one or more of the following effects:"
    "name": ""
  - "desc": "- Corrupted Nature. Within 6 miles of the lair, all Wisdom ([Medicine](/3-Mechanics/CLI/Rules/skills.md#Medicine))\
      \ and Wisdom ([Survival](/3-Mechanics/CLI/Rules/skills.md#Survival)) checks\
      \ have disadvantage.  \n- Fungal Infestation. Molds and fungi grow on surfaces\
      \ within 6 miles of the lair, even where they would normally find no purchase.\
      \  \n- Mutating Vegetation. Vegetation within 1 mile of the lair becomes\
      \ infested with parasitic fungi, slowly mutating as it is overwhelmed.  \n-\
      \ If Zuggtmoy dies, these effects fade over the course of d10 days.  "
    "name": ""
"source":
  - "MPMM"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/zuggtmoy-mpmm.webp"
```
^statblock