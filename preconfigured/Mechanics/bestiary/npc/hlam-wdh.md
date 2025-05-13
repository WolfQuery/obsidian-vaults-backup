---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdh
- ttrpg-cli/monster/cr/16
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
aliases: ["Hlam"]
---
# Hlam
*Source: Waterdeep: Dragon Heist p. 204*  

This venerable human monk lives in a cave halfway up the side of Mount Waterdeep. Hlam is the grand master of the Order of the Even-Handed, a small monastic group devoted to Tyr. Would-be students periodically visit him to learn the Way of the Sacred Fists, which combines cleric magic and monk training. They usually return to the city confused, bruised, and not inclined to visit again.

In times of great peril, Hlam can be called on to help. Sometimes he offers pearls of wisdom, and sometimes he descends from his cave to set things right with fisticuffs. He can show up at any point in the story as a helpful figure, and the characters can visit him in his cave if they need guidance or training. The Order of the Gauntlet considers him a staunch ally.

Hlam is immune to disease and doesn't require food or water. Although he ages, he suffers none of the frailty of old age.

```ad-statblock
title: Hlam
![](bestiary/tokens/WDH/Hlam.webp#token)
*Medium humanoid (human), Lawful Good*

- **Armor Class** 22 (Unarmored Defense)
- **Hit Points** 137 (`25d8 + 25`)
- **Speed** 60 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|11 (+0)|24 (+7)|13 (+1)|14 (+2)|21 (+5)|14 (+2)|

- **Proficiency Bonus** +5
- **Saving Throws** Strength +5, Dexterity +12
- **Skills** Athletics +5, Religion +7
- **Senses** passive Perception 15
- **Damage Immunities** poison
- **Condition Immunities** [charmed](3-Mechanics/CLI/rules/conditions.md#Charmed), [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened), [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned), disease
- **Languages** all spoken languages
- **Challenge** 16

## Traits

***Evasion.*** If Hlam is subjected to an effect that allows him to make a Dexterity saving throw to take only half damage, he instead takes no damage if he succeeds on the saving throw, and only half damage if he fails. He can't use this trait if he's [incapacitated](3-Mechanics/CLI/rules/conditions.md#Incapacitated).

***Magic Attacks.*** Hlam's unarmed strikes are magical.

***Unarmored Defense.*** While Hlam is wearing no armor and wielding no shield, his AC includes his Wisdom modifier.

***Spellcasting.*** Hlam is a 5th-level spellcaster. His spellcasting ability is Wisdom (spell save DC 18, `+10` to hit with spell attacks) He has the following cleric spells prepared:

**Cantrips (at will)**: [guidance](3-Mechanics/CLI/spells/guidance.md), [light](3-Mechanics/CLI/spells/light.md), [sacred flame](3-Mechanics/CLI/spells/sacred-flame.md), [spare the dying](3-Mechanics/CLI/spells/spare-the-dying.md)

**1st level (4 slots)**: [detect evil and good](3-Mechanics/CLI/spells/detect-evil-and-good.md), [healing word](3-Mechanics/CLI/spells/healing-word.md), [sanctuary](3-Mechanics/CLI/spells/sanctuary.md), [shield of faith](3-Mechanics/CLI/spells/shield-of-faith.md)

**2nd level (3 slots)**: [calm emotions](3-Mechanics/CLI/spells/calm-emotions.md), [prayer of healing](3-Mechanics/CLI/spells/prayer-of-healing.md), [silence](3-Mechanics/CLI/spells/silence.md)

**3rd level (2 slots)**: [protection from energy](3-Mechanics/CLI/spells/protection-from-energy.md), [remove curse](3-Mechanics/CLI/spells/remove-curse.md), [sending](3-Mechanics/CLI/spells/sending.md)

## Actions

***Multiattack.*** Hlam attacks three times using his unarmed strike, darts, or both.

***Unarmed Strike.*** *Melee Weapon Attack:* `+12` to hit, reach 5 ft., one target. *Hit:* 12 (`1d10 + 7`) bludgeoning, magic damage. If the target is a creature, Hlam can choose one of the following additional effects:

The target must succeed on a DC 18 Strength saving throw or drop one item it is holding (Hlam's choice).

The target must succeed on a DC 18 Dexterity saving throw or be knocked [prone](3-Mechanics/CLI/rules/conditions.md#Prone).

The target must succeed on a DC 18 Constitution saving throw or be [stunned](3-Mechanics/CLI/rules/conditions.md#Stunned) until the end of Hlam's next turn.

***Dart.*** *Ranged Weapon Attack:* `+12` to hit, range 20/60 ft., one target. *Hit:* 9 (`1d4 + 7`) piercing damage.

***Quivering Palm (Recharge 6).*** *Melee Weapon Attack:* `+12` to hit, reach 5 ft., one creature. *Hit:* The target must make a DC 18 Constitution saving throw. On a failed save, the target is reduced to 0 hit points. On a successful save, the target takes 55 (`10d10`) necrotic damage.

***Wholeness of Body (Recharges after a Long Rest).*** Hlam regains 60 hit points.

## Reactions

***Deflect Missile.*** In response to being hit by a ranged weapon attack, Hlam deflects the missile. The damage he takes from the attack is reduced by `1d10 + 27`. If the damage is reduced to 0, Hlam catches the missile if it's small enough to hold in one hand and he has a hand free.

***Slow Fall.*** Hlam reduces the bludgeoning damage he takes from a fall by 100.

## Legendary Actions

***Quick Step.*** Hlam moves up to his speed without provoking opportunity attacks.

***Unarmed Strike (Costs 2 Actions).*** Hlam makes one unarmed strike.

***Invisibility (Costs 3 Actions).*** Hlam becomes [invisible](3-Mechanics/CLI/rules/conditions.md#Invisible) until the end of his next turn. The effect ends if Hlam attacks or casts a spell.
```
^statblock