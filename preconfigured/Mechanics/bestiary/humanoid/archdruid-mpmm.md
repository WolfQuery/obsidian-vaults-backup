---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/12
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/druid
aliases: ["Archdruid"]
---
# Archdruid
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 48*  

Archdruids watch over the natural wonders of their domains. They seldom interact with folk away from their druid groves and shrines, unless there is a great threat to the natural order or to a nearby community. An archdruid typically has one or more pupils who are [druids](3-Mechanics/CLI/bestiary/humanoid/druid.md), and the archdruid's lair is usually guarded by loyal Beasts and Fey creatures.

When an archdruid uses their Change Shape action, you may choose the creature they turn into, abiding by the action's restrictions. Or you may roll on the Archdruid Favored Shapes table to determine the form the archdruid adopts.

**Archdruid Favored Shapes**

`dice: [](archdruid-mpmm.md#^archdruid-favored-shapes)`

| dice: d8 | Favored Shape |
|----------|---------------|
| 1 | [Air elemental](3-Mechanics/CLI/bestiary/elemental/air-elemental.md) |
| 2 | [Earth elemental](3-Mechanics/CLI/bestiary/elemental/earth-elemental.md) |
| 3 | [Fire elemental](3-Mechanics/CLI/bestiary/elemental/fire-elemental.md) |
| 4 | [Giant crocodile](3-Mechanics/CLI/bestiary/beast/giant-crocodile.md) |
| 5 | [Mammoth](3-Mechanics/CLI/bestiary/beast/mammoth.md) |
| 6 | [Flail snail](3-Mechanics/CLI/bestiary/elemental/flail-snail-mpmm.md) |
| 7 | [Triceratops](3-Mechanics/CLI/bestiary/beast/triceratops.md) |
| 8 | [Water elemental](3-Mechanics/CLI/bestiary/elemental/water-elemental.md) |
^archdruid-favored-shapes

```ad-statblock
title: Archdruid
![](bestiary/tokens/MPMM/Archdruid.webp#token)
*Medium humanoid (druid), Any alignment*

- **Armor Class** 14 ([hide armor](3-Mechanics/CLI/items/hide-armor.md))
- **Hit Points** 154 (`28d8 + 28`)
- **Speed** 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|14 (+2)|14 (+2)|12 (+1)|12 (+1)|20 (+5)|11 (+0)|

- **Proficiency Bonus** +4
- **Saving Throws** Intelligence +5, Wisdom +9
- **Skills** Medicine +9, Nature +5, Perception +9
- **Senses** passive Perception 19
- **Languages** Druidic plus any two languages
- **Challenge** 12

***Spellcasting.*** The archdruid casts one of the following spells, using Wisdom as the spellcasting ability (spell save DC 17):

**At will**: [beast sense](3-Mechanics/CLI/spells/beast-sense.md), [entangle](3-Mechanics/CLI/spells/entangle.md), [speak with animals](3-Mechanics/CLI/spells/speak-with-animals.md)

**1/day each**: [commune with nature](3-Mechanics/CLI/spells/commune-with-nature.md) (as an action), [mass cure wounds](3-Mechanics/CLI/spells/mass-cure-wounds.md)

**3/day each**: [animal messenger](3-Mechanics/CLI/spells/animal-messenger.md), [dominate beast](3-Mechanics/CLI/spells/dominate-beast.md), [faerie fire](3-Mechanics/CLI/spells/faerie-fire.md), [tree stride](3-Mechanics/CLI/spells/tree-stride.md)

## Actions

***Multiattack.*** The archdruid makes three Staff or Wildfire attacks. It can replace one attack with a use of Spellcasting.

***Staff.*** *Melee Weapon Attack:* `+6` to hit, reach 5 ft., one target. *Hit:* 5 (`1d6 + 2`) bludgeoning damage plus 21 (`6d6`) poison damage.

***Wildfire.*** *Ranged Spell Attack:* `+9` to hit, range 120 ft., one target. *Hit:* 26 (`6d6 + 5`) fire damage, and the target is [blinded](3-Mechanics/CLI/rules/conditions.md#Blinded) until the start of the druid's next turn.

## Bonus Actions

***Change Shape (2/Day).*** The archdruid magically transforms into a Beast or an Elemental with a challenge rating of 6 or less and can remain in that form for up to 9 hours. The archdruid can choose whether its equipment falls to the ground, melds with its new form, or is worn by the new form. The archdruid reverts to its true form if it dies or falls [unconscious](3-Mechanics/CLI/rules/conditions.md#Unconscious). The archdruid can revert to its true form using a bonus action.

While in a new form, the archdruid's stat block is replaced by the stat block of that form, except the archdruid keeps its current hit points, its hit point maximum, this bonus action, its languages and ability to speak, and its Spellcasting action.

The new form's attacks count as magical for the purpose of overcoming resistances and immunity to nonmagical attacks.
```
^statblock

## Environment

forest, mountain, swamp, underwater