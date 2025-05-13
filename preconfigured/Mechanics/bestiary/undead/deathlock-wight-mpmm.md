---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead/warlock
aliases: ["Deathlock Wight"]
---
# Deathlock Wight
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 87*  

Deprived of much of its magic as a special punishment, a deathlock wight lingers between the warlock it was and the wretched existence of a wight.

## Deathlocks

The forging of a pact between a warlock and a patron is no minor occasion—at least not for the warlock. The consequences of breaking that pact can be dire and, in some cases, lethal. A warlock who fails to live up to a bargain with an evil patron runs the risk of rising from the dead as a deathlock, a foul Undead driven to serve its otherworldly patron.

An powerful necromancer might also discover the wicked methods of creating a deathlock and then subjugate it, acting as the deathlock's patron.

## Statblock

```ad-statblock
title: Deathlock Wight
![](bestiary/tokens/MPMM/Deathlock Wight.webp#token)
*Medium undead (warlock), Typically  Neutral Evil*

- **Armor Class** 12
- **Hit Points** 37 (`5d8 + 15`)
- **Speed** 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|11 (+0)|14 (+2)|16 (+3)|12 (+1)|14 (+2)|16 (+3)|

- **Proficiency Bonus** +2
- **Saving Throws** Wisdom +4
- **Skills** Arcana +3, Perception +4
- **Senses** darkvision 60 ft., passive Perception 14
- **Damage Resistances** necrotic; bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** poison
- **Condition Immunities** [exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion), [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)
- **Languages** the languages it knew in life
- **Challenge** 3

## Traits

***Sunlight Sensitivity.*** While in sunlight, the deathlock has disadvantage on attack rolls, as well as on Wisdom ([Perception](3-Mechanics/CLI/rules/skills.md#Perception)) checks that rely on sight.

***Unusual Nature.*** The deathlock doesn't require air, food, drink, or sleep.

***Spellcasting.*** The deathlock casts one of the following spells, using Charisma as the spellcasting ability (spell save DC 13):

**At will**: [detect magic](3-Mechanics/CLI/spells/detect-magic.md), [disguise self](3-Mechanics/CLI/spells/disguise-self.md), [mage armor](3-Mechanics/CLI/spells/mage-armor.md)

**1/day each**: [fear](3-Mechanics/CLI/spells/fear.md), [hold person](3-Mechanics/CLI/spells/hold-person.md)

## Actions

***Multiattack.*** The deathlock makes two Life Drain or Grave Bolt attacks.

***Life Drain.*** *Melee Weapon Attack:* `+4` to hit, reach 5 ft., one creature. *Hit:* 6 (`1d8 + 2`) necrotic damage. The target must succeed on a DC 13 Constitution saving throw, or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if its hit point maximum is reduced to 0.

A Humanoid slain by this attack rises 24 hours later as a [zombie](3-Mechanics/CLI/bestiary/undead/zombie.md) under the deathlock's control, unless the Humanoid is restored to life or its body is destroyed. The deathlock can have no more than twelve zombies under its control at one time.

***Grave Bolt.*** *Ranged Spell Attack:* `+5` to hit, range 60 ft., one target. *Hit:* 12 (`2d8 + 3`) necrotic damage.
```
^statblock