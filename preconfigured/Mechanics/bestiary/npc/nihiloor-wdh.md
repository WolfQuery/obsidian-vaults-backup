---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdh
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/aberration
aliases: ["Nihiloor"]
---
# Nihiloor
*Source: Waterdeep: Dragon Heist p. 212*  

```ad-statblock
title: Nihiloor
![](bestiary/tokens/WDH/Nihiloor.webp#token)
*Medium aberration, Lawful Evil*

- **Armor Class** 15 ([breastplate](3-Mechanics/CLI/items/breastplate.md))
- **Hit Points** 71 (`13d8 + 13`)
- **Speed** 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|11 (+0)|12 (+1)|12 (+1)|19 (+4)|17 (+3)|17 (+3)|

- **Proficiency Bonus** +3
- **Saving Throws** Intelligence +7, Wisdom +6, Charisma +6
- **Skills** Arcana +7, Deception +6, Insight +6, Perception +6, Persuasion +6, Stealth +4
- **Senses** darkvision 120 ft., passive Perception 16
- **Languages** Deep Speech, Undercommon, telepathy 120 ft.
- **Challenge** 7

## Traits

***Magic Resistance.*** Nihiloor has advantage on saving throws against spells and other magical effects.

***Innate Spellcasting (Psionics).*** Nihiloor's innate spellcasting ability is Intelligence (spell save DC 15). It can innately cast the following spells, requiring no components:

**At will**: [detect thoughts](3-Mechanics/CLI/spells/detect-thoughts.md), [levitate](3-Mechanics/CLI/spells/levitate.md)

**1/day each**: [dominate monster](3-Mechanics/CLI/spells/dominate-monster.md), [plane shift](3-Mechanics/CLI/spells/plane-shift.md) (self only)

## Actions

***Tentacles.*** *Melee Weapon Attack:* `+7` to hit, reach 5 ft., one creature. *Hit:* 15 (`2d10 + 4`) psychic damage. If the target is Medium or smaller, it is [grappled](3-Mechanics/CLI/rules/conditions.md#Grappled) (escape DC 15) and must succeed on a DC 15 Intelligence saving throw or be [stunned](3-Mechanics/CLI/rules/conditions.md#Stunned) until this grapple ends.

***Extract Brain.*** *Melee Weapon Attack:* `+7` to hit, reach 5 ft., one [incapacitated](3-Mechanics/CLI/rules/conditions.md#Incapacitated) humanoid [grappled](3-Mechanics/CLI/rules/conditions.md#Grappled) by Nihiloor. *Hit:* The target takes 55 (`10d10`) piercing damage. If this damage reduces the target to 0 hit points, Nihiloor kills the target by extracting and devouring its brain.

***Mind Blast (Recharge 5-6).*** Nihiloor magically emits psychic energy in a 60-foot cone. Each creature in that area must succeed on a DC 15 Intelligence saving throw or take 22 (`4d8 + 4`) psychic damage and be [stunned](3-Mechanics/CLI/rules/conditions.md#Stunned) for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.
```
^statblock