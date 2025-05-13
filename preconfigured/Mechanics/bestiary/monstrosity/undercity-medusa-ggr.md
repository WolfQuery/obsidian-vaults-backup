---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ggr
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
aliases: ["Undercity Medusa"]
---
# Undercity Medusa
*Source: Guildmasters' Guide to Ravnica p. 222*  

The medusas of Ravnica, often called gorgons, are a monstrous race of creatures that appear superficially similar to human women. In place of hair, a gorgon has a writhing mass of black, serpentine cables, and its hands are scaly claws.

The gaze of a medusa's glowing eyes causes living tissue to petrify. The transformation is rapid, leaving the victim as a stone statue, usually frozen in a position of abject fear or agony-a fine trophy for the medusa's macabre collection. The medusa must exert its will to effect this transformation, so the gaze of a surprised or friendly Ravnican medusa is harmless.

This deadly gaze attack gives medusas a degree of power among the Golgari that is out of proportion with their small numbers. Medusas command a significant share of the guild's smaller cells around Ravnica, and at least one medusa is thought to be angling for control of the entire guild at the moment.

Not all gorgons are so ambitious; some prefer to simply stalk the endless shadows of the undercity like hungry predators.

```ad-statblock
title: Undercity Medusa
![](bestiary/tokens/GGR/Undercity Medusa.webp#token)
*Medium monstrosity, Neutral Evil*

- **Armor Class** 16 (natural armor)
- **Hit Points** 120 (`16d8 + 48`)
- **Speed** 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|16 (+3)|18 (+4)|16 (+3)|17 (+3)|12 (+1)|15 (+2)|

- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** Deception +5, Insight +4, Perception +4, Stealth +7
- **Senses** darkvision 60 ft., passive Perception 14
- **Languages** Common, Elvish
- **Challenge** 6

## Traits

***Magic Resistance.*** The medusa has advantage on saving throws against spells and other magical effects.

***Surprise Attack.*** During the first round of combat, the medusa has advantage on attack rolls against any creature that is [surprised](3-Mechanics/CLI/rules/conditions.md#Surprised), and it deals an extra 10 (`3d6`) damage each time it hits such a creature with an attack.

***Innate Spellcasting.*** The medusa's innate spellcasting ability is Intelligence (spell save DC 14). The medusa can innately cast the following spells, requiring no material components:

**1/day each**: [expeditious retreat](3-Mechanics/CLI/spells/expeditious-retreat.md), [fog cloud](3-Mechanics/CLI/spells/fog-cloud.md), [misty step](3-Mechanics/CLI/spells/misty-step.md)

## Actions

***Multiattack.*** The medusa makes two claw attacks. It can also use Petrifying Gaze before or after making these attacks.

***Claw.*** *Melee Weapon Attack:* `+7` to hit, reach 5 ft., one target. *Hit:* 13 (`2d8 + 4`) slashing damage.

***Petrifying Gaze.*** The medusa fixes its gaze on one creature within 60 feet of it that it can see and that can see its eyes. The target must make a DC 14 Constitution saving throw. If the saving throw fails by 5 or more, the creature is instantly [petrified](3-Mechanics/CLI/rules/conditions.md#Petrified). Otherwise, a creature that fails the save begins to turn to stone and is [restrained](3-Mechanics/CLI/rules/conditions.md#Restrained). The [restrained](3-Mechanics/CLI/rules/conditions.md#Restrained) creature must repeat the saving throw at the end of its next turn, becoming [petrified](3-Mechanics/CLI/rules/conditions.md#Petrified) on a failure or ending the effect on a success. The petrification lasts until the creature is freed by a [greater restoration](3-Mechanics/CLI/spells/greater-restoration.md) spell or similar magic.
```
^statblock