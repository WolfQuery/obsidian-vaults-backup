---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/demon
aliases: ["Maurezhi"]
---
# Maurezhi
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 175*  

When Doresain, the King of Ghouls, corrupted a society of elves, he created a new sort of demon—the maurezhi—to lead packs of [ghouls](3-Mechanics/CLI/bestiary/undead/ghoul.md) and [ghasts](3-Mechanics/CLI/bestiary/undead/ghast.md) on the Material Plane.

When a maurezhi consumes the corpse of a Humanoid it has slain—a process that takes about 10 minutes—it instantly assumes the creature's appearance as it was in life. The new appearance begins to rot away over the next few days, eventually revealing the demon's original form.

A maurezhi is contagion incarnate. Its bite can drain a victim's sense of self. If this affliction is allowed to go far enough, the victim is infected with an unholy hunger for flesh that overpowers their personality and transforms them into a ghoul.

```ad-statblock
title: Maurezhi
![](bestiary/tokens/MPMM/Maurezhi.webp#token)
*Medium fiend (demon), Typically  Chaotic Evil*

- **Armor Class** 15 (natural armor)
- **Hit Points** 88 (`16d8 + 16`)
- **Speed** 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|14 (+2)|17 (+3)|12 (+1)|11 (+0)|12 (+1)|15 (+2)|

- **Proficiency Bonus** +3
- **Saving Throws** ⏤
- **Skills** Deception +5
- **Senses** darkvision 120 ft., passive Perception 11
- **Damage Resistances** cold; fire; lightning; necrotic; bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** poison
- **Condition Immunities** [charmed](3-Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion), [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)
- **Languages** Abyssal, Elvish, telepathy 120 ft.
- **Challenge** 7

## Traits

***Assume Form.*** The maurezhi can assume the appearance of any Medium Humanoid it eats. It remains in this form for `1d6` days, during which time the form gradually decays until, when the effect ends, the form sloughs from the demon's body.

***Magic Resistance.*** The maurezhi has advantage on saving throws against spells and other magical effects.

## Actions

***Multiattack.*** The maurezhi makes one Bite attack and one Claw attack.

***Bite.*** *Melee Weapon Attack:* `+6` to hit, reach 5 ft., one target. *Hit:* 14 (`2d10 + 3`) piercing damage. If the target is a Humanoid, its Charisma score is reduced by `1d4`. This reduction lasts until the target finishes a short or long rest. The target dies if this reduces its Charisma to 0. It rises 24 hours later as a [ghoul](3-Mechanics/CLI/bestiary/undead/ghoul.md)  unless it has been revived or its corpse has been destroyed.

***Claw.*** *Melee Weapon Attack:* `+6` to hit, reach 5 ft., one target. *Hit:* 12 (`2d8 + 3`) slashing damage. If the target is a creature other than an Undead, it must succeed on a DC 12 Constitution saving throw or be [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed) for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

***Raise Ghoul (Recharge 5-6).*** The maurezhi targets one dead ghoul or [ghast](3-Mechanics/CLI/bestiary/undead/ghast.md) it can see within 30 feet of it. The target is revived with all its hit points.
```
^statblock

## Environment

swamp, urban