---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ggr
- ttrpg-cli/monster/cr/17
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity/shapechanger
aliases: ["Lazav"]
---
# Lazav
*Source: Guildmasters' Guide to Ravnica p. 232*  

Lazav is uniquely qualified to be the Dimir guildmaster: he is a shapechanger whose mysterious genius is informed by agents from the entire Dimir network. He takes on a tremendous variety of guises as his needs and plans require. He might step out into the Ravnican streets as an elderly widow to eavesdrop at the bazaar, become a vedalken hussar of the Azorius Senate to sidestep a checkpoint, or transform into a Tin Street merchant to deceive a passing noble. His true form might be that of a doppelganger or some other creature; no one has ever seen it.

```ad-statblock
title: Lazav
![](bestiary/tokens/GGR/Lazav.webp#token)
*Medium monstrosity (shapechanger), Neutral Evil*

- **Armor Class** 18 (natural armor)
- **Hit Points** 204 (`24d8 + 96`)
- **Speed** 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|16 (+3)|24 (+7)|18 (+4)|22 (+6)|20 (+5)|22 (+6)|

- **Proficiency Bonus** +6
- **Saving Throws** Dexterity +13, Intelligence +12, Wisdom +11, Charisma +12
- **Skills** Deception +18, Insight +11, Perception +11, Stealth +19
- **Senses** darkvision 120 ft., passive Perception 21
- **Damage Resistances** necrotic, psychic
- **Damage Immunities** poison
- **Condition Immunities** [charmed](3-Mechanics/CLI/rules/conditions.md#Charmed), [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened), [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)
- **Languages** Common, Thieves' cant
- **Challenge** 17

## Traits

***Elusive.*** No attack roll has advantage against Lazav unless he is [incapacitated](3-Mechanics/CLI/rules/conditions.md#Incapacitated).

***Legendary Resistance (3/Day).*** If Lazav fails a saving throw, he can choose to succeed instead.

***Shapechanger Savant.*** Lazav can use a bonus action to polymorph into a Small or Medium humanoid he has seen. His statistics, other than his size, are the same in each form. Any equipment he is wearing or carrying isn't transformed.

***Psychic Defenses.*** Unless Lazav is [incapacitated](3-Mechanics/CLI/rules/conditions.md#Incapacitated), he is immune to magic that allows other creatures to read his thoughts, determine whether he is lying, know his alignment, or know his creature type. Creatures can telepathically communicate with Lazav only if he allows it.

***Innate Spellcasting.*** Lazav's innate spellcasting ability is Intelligence (spell save DC 20). He can innately cast the following spells, requiring no material components:

**At will**: [detect thoughts](3-Mechanics/CLI/spells/detect-thoughts.md), [encode thoughts](3-Mechanics/CLI/spells/encode-thoughts-ggr.md) (see chapter 2), [freedom of movement](3-Mechanics/CLI/spells/freedom-of-movement.md), [vicious mockery](3-Mechanics/CLI/spells/vicious-mockery.md) (`4d4` psychic damage)

**1/day each**: [modify memory](3-Mechanics/CLI/spells/modify-memory.md), [Rary's telepathic bond](3-Mechanics/CLI/spells/rarys-telepathic-bond.md)

**3/day each**: [blur](3-Mechanics/CLI/spells/blur.md), [confusion](3-Mechanics/CLI/spells/confusion.md), [mirror image](3-Mechanics/CLI/spells/mirror-image.md)

## Actions

***Multiattack.*** Lazav makes three shortsword attacks.

***Shortsword.*** *Melee Weapon Attack:* `+13` to hit, reach 5 ft., one target. *Hit:* 10 (`1d6 + 7`) piercing damage plus 10 (`3d6`) psychic damage, and the target has disadvantage on the next attack roll it makes before Lazav's next turn.

## Legendary Actions

***Attack.*** Lazav makes a weapon attack.

***Cast a Spell (Costs 2 Actions).*** Lazav casts one of his innate spells.

***Shifting Nightmare (Costs 3 Actions).*** Lazav rapidly takes the form of several nightmarish creatures, lashing out at all nearby. Each creature within 10 feet of Lazav must succeed on a DC 21 Dexterity saving throw or take 18 (`4d8`) damage of a type chosen by Lazav: acid, cold, fire, lightning, or necrotic.
```
^statblock