---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/arctic
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/elemental
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ice Mephit
---
# [Ice Mephit](3-Mechanics\CLI\Compendium\bestiary\elemental/ice-mephit.md)
*Source: Monster Manual p. 215, Keys from the Golden Vault. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*  

## Mephits

Mephits are capricious, imp-like creatures native to the elemental planes. They come in six varieties, each one representing the mixture of two elements.

Ageless tricksters, mephits gather in large numbers on the Elemental Planes and in the Elemental Chaos. They also find their way to the Material Plane, where they prefer to dwell in places where their base elements are abundant. For example, a magma mephit is composed of earth and fire, and it favors volcanic lairs, while an ice mephit, which is composed of air and water, favors frigid locales.

### Elemental Nature

A mephit doesn't require food, drink, or sleep.

## Ice Mephit

Comprising frigid air and water, ice mephits are aloof and cold, surpassing all other mephits in pitiless cruelty

```statblock
"name": "Ice Mephit"
"size": "Small"
"type": "elemental"
"alignment": "Neutral Evil"
"ac": !!int "11"
"hp": !!int "21"
"hit_dice": "6d6"
"modifier": !!int "1"
"stats":
  - !!int "7"
  - !!int "13"
  - !!int "10"
  - !!int "9"
  - !!int "11"
  - !!int "12"
"speed": "30 ft., fly 30 ft."
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+2"
  - "name": "[Stealth](/3-Mechanics/CLI/Rules/skills.md#Stealth)"
    "desc": "+3"
"damage_vulnerabilities": "bludgeoning, fire"
"damage_immunities": "cold, poison"
"condition_immunities": "[poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Aquan, Auran"
"cr": "1/2"
"traits":
  - "desc": "The mephit can innately cast [fog cloud](/3-Mechanics/CLI/Compendium/spells/fog-cloud.md),\
      \ requiring no material components. Its innate spellcasting ability is Charisma.\n"
    "name": "Innate Spellcasting (1/Day)"
  - "desc": "When the mephit dies, it explodes in a burst of jagged ice. Each creature\
      \ within 5 feet of it must make a DC 10 Dexterity saving throw, taking 4 (d8)\
      \ slashing damage on a failed save, or half as much damage on a successful one."
    "name": "Death Burst"
  - "desc": "While the mephit remains motionless, it is indistinguishable from an\
      \ ordinary shard of ice."
    "name": "False Appearance"
"actions":
  - "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 3\
      \ (1d4 + 1) slashing damage plus 2 (d4) cold damage."
    "name": "Claws"
  - "desc": "The mephit exhales a 15-foot cone of cold air. Each creature in that\
      \ area must succeed on a DC 10 Dexterity saving throw, taking 5 (2d4) cold damage\
      \ on a failed save, or half as much damage on a successful one."
    "name": "Frost Breath (Recharge 6)"
"source":
  - "MM"
  - "KftGV"
"image": "/3-Mechanics/CLI/Compendium/bestiary/elemental/token/ice-mephit.webp"
```
^statblock

## Environment

arctic