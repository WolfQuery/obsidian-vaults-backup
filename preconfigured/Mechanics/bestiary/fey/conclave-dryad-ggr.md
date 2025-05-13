---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ggr
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey
aliases: ["Conclave Dryad"]
---
# Conclave Dryad
*Source: Guildmasters' Guide to Ravnica p. 194*  

The lush forests that once grew on Ravnica are gone, but the dryads remain, striving to bring the sprawling city and the verdant green of nature into harmony. Dryads believe that their efforts are the will of Mat'Selesnya, the soul of the world, and they spread their teachings through every Selesnya enclave.

Thanks to their attunement to Mat'Selesnya, dryads serve as visionaries and spiritual intermediaries for the Selesnya Conclave. They hold positions of great respect as spiritual leaders, and also share their vision of harmonious construction as architects, working with stonemasons and woodshapers to create Selesnya enclaves.

## Summoned Mount

When leading its guild into battle, a dryad rides a magically summoned creature woven of living branches, vines, and grasses and imbued with a fey spirit.

## Statblock

```ad-statblock
title: Conclave Dryad
![](bestiary/tokens/GGR/Conclave Dryad.webp#token)
*Medium fey, Lawful Good*

- **Armor Class** 16 (natural armor)
- **Hit Points** 143 (`22d8 + 44`)
- **Speed** 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|12 (+1)|19 (+4)|14 (+2)|19 (+4)|20 (+5)|21 (+5)|

- **Proficiency Bonus** +4
- **Saving Throws** Intelligence +8, Wisdom +9, Charisma +9
- **Skills** Arcana +8, Nature +8, Perception +9
- **Senses** darkvision 60 ft., passive Perception 19
- **Languages** Common, Elvish, Sylvan
- **Challenge** 9

## Traits

***Magic Resistance.*** The dryad has advantage on saving throws against spells and other magical effects.

***Speak with Beasts and Plants.*** The dryad can communicate with beasts and plants as if they and the dryad shared a language.

***Innate Spellcasting.*** The dryad's innate spellcasting ability is Charisma (spell save DC 17). The dryad can innately cast the following spells, requiring no material components:

**At will**: [druidcraft](3-Mechanics/CLI/spells/druidcraft.md)

**1/day each**: [moonbeam](3-Mechanics/CLI/spells/moonbeam.md), [grasping vine](3-Mechanics/CLI/spells/grasping-vine.md), [wall of thorns](3-Mechanics/CLI/spells/wall-of-thorns.md)

**3/day each**: [dispel magic](3-Mechanics/CLI/spells/dispel-magic.md), [entangle](3-Mechanics/CLI/spells/entangle.md), [plant growth](3-Mechanics/CLI/spells/plant-growth.md), [spike growth](3-Mechanics/CLI/spells/spike-growth.md)

## Actions

***Multiattack.*** The dryad makes three attacks, using its vine staff, its longbow, or both.

***Vine Staff.*** *Melee Weapon Attack:* `+9` to hit, reach 5 ft., one target. *Hit:* 12 (`2d6 + 5`) bludgeoning damage. If the target is a creature, it must succeed on a DC 17 Dexterity saving throw or become [restrained](3-Mechanics/CLI/rules/conditions.md#Restrained) by twisting vines for 1 minute. A target [restrained](3-Mechanics/CLI/rules/conditions.md#Restrained) in this way can use an action to make a DC 17 Strength ([Athletics](3-Mechanics/CLI/rules/skills.md#Athletics)) or Dexterity ([Acrobatics](3-Mechanics/CLI/rules/skills.md#Acrobatics)) check, ending the effect on itself on a success.

***Longbow.*** *Ranged Weapon Attack:* `+8` to hit, range 150/600 ft., one target. *Hit:* 8 (`1d8 + 4`) piercing damage.

***Summon Mount (1/Day).*** The dryad magically summons a mount, which appears in an unoccupied space within 60 feet of the dryad. The mount remains for 8 hours, until it or the dryad dies, or until the dryad dismisses it as an action. The mount uses the stat block of an [elk](3-Mechanics/CLI/bestiary/beast/elk.md) (see the Monster Manual) with these changes: it is a plant instead of a beast, it has an Intelligence of 6, and it understands Sylvan but can't speak. While within 1 mile of the mount, the dryad can communicate with it telepathically.

***Suppress Magic (Recharge 5-6).*** The dryad targets one magic item it can see within 120 feet of it. If the magic item isn't an artifact, its magical properties are suppressed for 10 minutes, until the dryad is [incapacitated](3-Mechanics/CLI/rules/conditions.md#Incapacitated) or dies, or until the dryad uses a bonus action to end the effect.
```
^statblock