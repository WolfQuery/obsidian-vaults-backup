---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/humanoid
aliases: ["Grung Wildling"]
---
# Grung Wildling
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 150*  

Gifted with druidic magic, a grung wildling typically serves as an advisor, a healer, and a nurturer of crops.

## Grungs

Grungs are frog-like folk found in rain forests and tropical jungles. These amphibians prefer shade and live in trees, but they maintain hatcheries for their offspring in well-guarded ground-level pools. About three months after hatching, a grung tadpole takes on the shape of an adult, and after another six months, the grung reaches maturity.

Born in a wide range of colors, grungs most often appear in shades of green, blue, purple, red, orange, and gold. All grungs secrete a substance that is harmless to them but poisonous to other creatures, and sometimes that substance has a special effect based on the grung's color (see "Variant: Grung Poison"). They also use this venom to poison their weapons.

## Statblock

```ad-statblock
title: Grung Wildling
![](bestiary/tokens/MPMM/Grung Wildling.webp#token)
*Small humanoid, Any alignment*

- **Armor Class** 16 (natural armor)
- **Hit Points** 27 (`5d6 + 10`)
- **Speed** 25 ft., climb 25 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
| 7 (-2)|16 (+3)|15 (+2)|10 (+0)|15 (+2)|11 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** Dexterity +5
- **Skills** Athletics +2, Perception +4, Stealth +5, Survival +4
- **Senses** passive Perception 14
- **Damage Immunities** poison
- **Condition Immunities** [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)
- **Languages** Grung
- **Challenge** 1

## Traits

***Amphibious.*** The grung can breathe air and water.

***Poisonous Skin.*** Any creature that grapples the grung or otherwise comes into direct contact with the grung's skin must succeed on a DC 12 Constitution saving throw or become [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned) for 1 minute. A [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned) creature no longer in direct contact with the grung can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

***Standing Leap.*** The grung's long jump is up to 25 feet and its high jump is up to 15 feet, with or without a running start.

***Water Dependency.*** If the grung isn't immersed in water for at least 1 hour during a day, it suffers 1 level of [exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion) at the end of that day. The grung can recover from this [exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion) only through magic or by immersing itself in water for at least 1 hour.

***Spellcasting.*** The grung casts one of the following spells, using Wisdom as the spellcasting ability (spell save DC 12):

**At will**: [druidcraft](3-Mechanics/CLI/spells/druidcraft.md)

**2/day**: [plant growth](3-Mechanics/CLI/spells/plant-growth.md)

**3/day each**: [cure wounds](3-Mechanics/CLI/spells/cure-wounds.md), [spike growth](3-Mechanics/CLI/spells/spike-growth.md)

## Actions

***Dagger.*** *Melee or Ranged Weapon Attack:* `+5` to hit, reach 5 ft. or range 20/60 ft., one target. *Hit:* 5 (`1d4 + 3`) piercing damage plus 5 (`2d4`) poison damage.

***Shortbow.*** *Ranged Weapon Attack:* `+5` to hit, range 80/320 ft., one target. *Hit:* 6 (`1d6 + 3`) piercing damage plus 5 (`2d4`) poison damage.
```
^statblock

## Environment

forest