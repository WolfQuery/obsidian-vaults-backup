---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/gnoll
aliases: ["Flind"]
---
# Flind
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 127*  

When the demon lord Yeenoghu wants to create a particularly fearsome war band leader, he transforms an excep tionally strong and vicious gnoll into a demonic warrior known as a flind.

A war band of demon-worshiping gnolls typically contains only one flind, and that creature sets the war band's path. Because of its special connection to Yeenoghu, a flind uses demonic insight to guide the gnolls toward weak prey ripe for slaughter.

Unlike other leaders who might skulk behind their minions, a flind leads the charge in battle. Its flail causes wracking pain, paralysis, and disorientation in those it strikes.

```ad-statblock
title: Flind
![](bestiary/tokens/MPMM/Flind.webp#token)
*Medium fiend (gnoll), Typically  Chaotic Evil*

- **Armor Class** 16 ([breastplate](3-Mechanics/CLI/items/breastplate.md))
- **Hit Points** 127 (`15d8 + 60`)
- **Speed** 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|20 (+5)|14 (+2)|19 (+4)|11 (+0)|13 (+1)|12 (+1)|

- **Proficiency Bonus** +4
- **Saving Throws** Constitution +8, Wisdom +5
- **Skills** Intimidation +5, Perception +5
- **Senses** darkvision 60 ft., passive Perception 15
- **Languages** Gnoll, Abyssal
- **Challenge** 9

## Traits

***Aura of Blood Thirst.*** If the flind isn't [incapacitated](3-Mechanics/CLI/rules/conditions.md#Incapacitated), any creature with the Rampage trait can make a Bite attack as a bonus action while within 10 feet of the flind.

## Actions

***Multiattack.*** The flind makes one Flail of Chaos attack, one Flail of Pain attack, and one Flail of Paralysis attack, or it makes three Longbow attacks.

***Flail of Chaos.*** *Melee Weapon Attack:* `+9` to hit, reach 10 ft., one target. *Hit:* 10 (`1d10 + 5`) bludgeoning damage, and the target must make a DC 16 Wisdom saving throw. On a failed save, the target must use its reaction, if available, to make one melee attack against a random creature, other than the flind, within its reach. If there's no creature within reach, the target instead moves half its speed in a random direction.

***Flail of Pain.*** *Melee Weapon Attack:* `+9` to hit, reach 10 ft., one target. *Hit:* 10 (`1d10 + 5`) bludgeoning damage plus 16 (`3d10`) psychic damage.

***Flail of Paralysis.*** *Melee Weapon Attack:* `+9` to hit, reach 10 ft., one target. *Hit:* 10 (`1d10 + 5`) bludgeoning damage, and the target must succeed on a DC 16 Constitution saving throw or be [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed) until the end of its next turn.

***Longbow.*** *Ranged Weapon Attack:* `+6` to hit, range 150/600 ft., one target. *Hit:* 6 (`1d8 + 2`) piercing damage.
```
^statblock

## Environment

coastal, forest, grassland, hill