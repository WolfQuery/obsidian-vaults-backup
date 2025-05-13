---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tce
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
aliases: ["Undead Spirit"]
---
# Undead Spirit
*Source: Tasha's Cauldron of Everything p. 114*  

```ad-statblock
title: Undead Spirit
![](bestiary/tokens/TCE/Undead Spirit.webp#token)
*Medium undead, Unaligned*


- **Speed** 30 ft., fly 40 ft. (ghostly only; hover)

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|12 (+1)|16 (+3)|15 (+2)| 4 (-3)|10 (+0)| 9 (-1)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 10
- **Damage Immunities** necrotic, poison
- **Condition Immunities** [exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion), [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed), [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)
- **Languages** understands the languages you speak
- **Challenge** 

## Traits

***Incorporeal Passage (Ghostly Only).*** The spirit can move through other creatures and objects as if they were difficult terrain. If it ends its turn inside an object, it is shunted to the nearest unoccupied space and takes `1d10` force damage for every 5 feet traveled.

***Festering Aura (Putrid Only).*** Any creature, other than you, that starts its turn within 5 feet of the spirit must succeed on a Constitution saving throw against your spell save DC or be [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned) until the start of its next turn.

## Actions

***Multiattack.*** The spirit makes a number of attacks equal to half this spell's level (rounded down).

***Deathly Touch (Ghostly Only).*** *Melee Weapon Attack:* `YourSpellAttack` to hit, reach 5 ft., one creature. *Hit:* `1d8 + 3` + the spell's level necrotic damage, and the creature must succeed on a Wisdom saving throw against your spell save DC or be [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened) of the undead until the end of the target's next turn.

***Grave Bolt (Skeletal Only).*** *Ranged Spell Attack:* `YourSpellAttack` to hit, range 150 ft., one target. *Hit:* `2d4 + 3` + the spell's level necrotic damage.

***Rotting Claw (Putrid Only).*** *Melee Weapon Attack:* `YourSpellAttack` to hit, reach 5 ft., one target. *Hit:* `1d6 + 3` + the spell's level slashing damage. If the target is [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned), it must succeed on a Constitution saving throw against your spell save DC or be [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed) until the end of its next turn.
```
^statblock