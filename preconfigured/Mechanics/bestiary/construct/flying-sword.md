---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/construct
aliases: ["Flying Sword"]
---
# Flying Sword
*Source: Monster Manual p. 20, Waterdeep: Dragon Heist, Tasha's Cauldron of Everything. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

A flying sword dances through the air, fighting with the confidence of a warrior that can't be injured. Swords are the most common weapons animated with magic. Axes, clubs, daggers, maces, spears, and even self-loading crossbows are also known to exist in animated object form.

> [!quote] A quote from Levity Quickstitch, halfling rogue  
> 
> Lyin' next to the chest were the bones of Cap'n Scornblade himself, still clutchin' his rusty sword. Imagine my surprise when the blade flew from his bony grasp! Still go the scar.

## Animated Objects

Animated objects are crafted with potent magic to follow the commands of their creators. When not commanded, they follow the last order they received to the best of their ability, and can act independently to fulfill simple instructions. Some animated objects (including many of those created in the Feywild) might converse fluently or adopt a persona, but most are simple automatons.

### Constructed Nature

An animated object doesn't require air, food, drink, or sleep. The magic that animates an object is dispelled when the construct drops to 0 hit points. An animated object reduced to 0 hit points becomes inanimate and is too damaged to be of much use or value to anyone.

## Statblock

```ad-statblock
title: Flying Sword
![](bestiary/tokens/MM/Flying Sword.webp#token)
*Small construct, Unaligned*

- **Armor Class** 17 (natural armor)
- **Hit Points** 17 (`5d6`)
- **Speed** 0 ft., fly 50 ft. (hover)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|12 (+1)|15 (+2)|11 (+0)| 1 (-5)| 5 (-3)| 1 (-5)|

- **Proficiency Bonus** +2
- **Saving Throws** Dexterity +4
- **Skills** ⏤
- **Senses** blindsight 60 ft. (blind beyond this radius), passive Perception 7
- **Damage Immunities** poison, psychic
- **Condition Immunities** [blinded](3-Mechanics/CLI/rules/conditions.md#Blinded), [charmed](3-Mechanics/CLI/rules/conditions.md#Charmed), [deafened](3-Mechanics/CLI/rules/conditions.md#Deafened), [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](3-Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)
- **Languages** —
- **Challenge** 1/4

## Traits

***Antimagic Susceptibility.*** The sword is [incapacitated](3-Mechanics/CLI/rules/conditions.md#Incapacitated) while in the area of an [antimagic field](3-Mechanics/CLI/spells/antimagic-field.md). If targeted by [dispel magic](3-Mechanics/CLI/spells/dispel-magic.md), the sword must succeed on a Constitution saving throw against the caster's spell save DC or fall [unconscious](3-Mechanics/CLI/rules/conditions.md#Unconscious) for 1 minute.

***False Appearance.*** While the sword remains motionless and isn't flying, it is indistinguishable from a normal sword.

## Actions

***Longsword.*** *Melee Weapon Attack:* `+3` to hit, reach 5 ft., one target. *Hit:* 5 (`1d8 + 1`) slashing damage.
```
^statblock