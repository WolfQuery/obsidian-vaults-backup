---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/elemental
aliases: ["Water Weird"]
---
# Water Weird
*Source: Monster Manual p. 299*  

A water weird is an elemental guardian bound to a specific water-filled location, such as a pool or fountain.

Invisible while immersed in water, its serpentine shape becomes clear only when it emerges to attack, using its coils to crush any creature other than its summoner and those its summoner declares as off limits. When slain, a water weird becomes an inanimate pool of water.

## Good and Evil Weirds

Like most elementals, a water weird has no concept of good or evil. However, a water weird bound to a sacred or befouled source of water begins to take on the nature of that site, becoming neutral good or neutral evil.

A neutral good water weird tries to frighten away interlopers rather than kill them, while a neutral evil water weird kills its victims for pleasure and might turn against its summoner. A water weird loses its evil alignment if its waters are cleansed with a [purify food and drink](3-Mechanics/CLI/spells/purify-food-and-drink.md) spell.

## Elemental Nature

A water weird doesn't require air, food, drink, or sleep.

> [!quote] A quote from X the Mystic's 2nd rule of dungeon survival  
> 
> Before you drink from a fountain or pool, toss a copper coin into it. It's a small price to pay for your life.


## Statblock

```ad-statblock
title: Water Weird
![](bestiary/tokens/MM/Water Weird.webp#token)
*Large elemental, Neutral*

- **Armor Class** 13
- **Hit Points** 58 (`9d10 + 9`)
- **Speed** 0 ft., swim 60 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|17 (+3)|16 (+3)|13 (+1)|11 (+0)|10 (+0)|10 (+0)|

- **Proficiency Bonus** +2
- **Saving Throws** ⏤
- **Skills** ⏤
- **Senses** blindsight 30 ft., passive Perception 10
- **Damage Resistances** fire; bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** poison
- **Condition Immunities** [exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion), [grappled](3-Mechanics/CLI/rules/conditions.md#Grappled), [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed), [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned), [restrained](3-Mechanics/CLI/rules/conditions.md#Restrained), [prone](3-Mechanics/CLI/rules/conditions.md#Prone), [unconscious](3-Mechanics/CLI/rules/conditions.md#Unconscious)
- **Languages** understands Aquan but doesn't speak
- **Challenge** 3

## Traits

***Invisible in Water.*** The water weird is [invisible](3-Mechanics/CLI/rules/conditions.md#Invisible) while fully immersed in water.

***Water Bound.*** The water weird dies if it leaves the water to which it is bound or if that water is destroyed.

## Actions

***Constrict.*** *Melee Weapon Attack:* `+5` to hit, reach 10 ft., one creature. *Hit:* 13 (`3d6 + 3`) bludgeoning damage. If the target is Medium or smaller, it is [grappled](3-Mechanics/CLI/rules/conditions.md#Grappled) (escape DC 13) and pulled 5 feet toward the water weird. Until this grapple ends, the target is [restrained](3-Mechanics/CLI/rules/conditions.md#Restrained), the water weird tries to drown it, and the water weird can't constrict another target.
```
^statblock

## Environment

underdark, urban