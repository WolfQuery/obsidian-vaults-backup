---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/construct
aliases: ["Animated Armor"]
---
# Animated Armor
*Source: Monster Manual p. 19, Waterdeep: Dragon Heist, Tasha's Cauldron of Everything. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*  

This empty steel shell clamors as it moves, heavy plates banging and grinding against one another like the vengeful spirit of a fallen knight. Ponderous but persistent, this magical guardian is almost always a suit of plate armor.

To add to its menace, animated armor is frequently enchanted with scripted speech, so the armor can utter warnings, demand passwords, or deliver riddles. Rare suits of animated armor are able to carry on an actual conversation.

## Animated Objects

Animated objects are crafted with potent magic to follow the commands of their creators. When not commanded, they follow the last order they received to the best of their ability, and can act independently to fulfill simple instructions. Some animated objects (including many of those created in the Feywild) might converse fluently or adopt a persona, but most are simple automatons.

### Constructed Nature

An animated object doesn't require air, food, drink, or sleep. The magic that animates an object is dispelled when the construct drops to 0 hit points. An animated object reduced to 0 hit points becomes inanimate and is too damaged to be of much use or value to anyone.

## Statblock

```ad-statblock
title: Animated Armor
![](bestiary/tokens/MM/Animated Armor.webp#token)
*Medium construct, Unaligned*

- **Armor Class** 18 (natural armor)
- **Hit Points** 33 (`6d8 + 6`)
- **Speed** 25 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|14 (+2)|11 (+0)|13 (+1)| 1 (-5)| 3 (-4)| 1 (-5)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** blindsight 60 ft. (blind beyond this radius), passive Perception 6
- **Damage Immunities** poison, psychic
- **Condition Immunities** [blinded](3-Mechanics/CLI/rules/conditions.md#Blinded), [charmed](3-Mechanics/CLI/rules/conditions.md#Charmed), [deafened](3-Mechanics/CLI/rules/conditions.md#Deafened), [exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion), [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](3-Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)
- **Languages** —
- **Challenge** 1

## Traits

***Antimagic Susceptibility.*** The armor is [incapacitated](3-Mechanics/CLI/rules/conditions.md#Incapacitated) while in the area of an [antimagic field](3-Mechanics/CLI/spells/antimagic-field.md). If targeted by [dispel magic](3-Mechanics/CLI/spells/dispel-magic.md), the armor must succeed on a Constitution saving throw against the caster's spell save DC or fall [unconscious](3-Mechanics/CLI/rules/conditions.md#Unconscious) for 1 minute.

***False Appearance.*** While the armor remains motionless, it is indistinguishable from a normal suit of armor.

## Actions

***Multiattack.*** The armor makes two melee attacks.

***Slam.*** *Melee Weapon Attack:* `+4` to hit, reach 5 ft., one target. *Hit:* 5 (`1d6 + 2`) bludgeoning damage.
```
^statblock