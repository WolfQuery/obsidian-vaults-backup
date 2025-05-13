---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/9
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/cleric
aliases: ["War Priest"]
---
# War Priest
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 254*  

War priests worship deities of war, protection, and strategy. They plan tactics, lead soldiers into battle, confront enemy spellcasters, and tend to casualties. A war priest might command an army or serve as the right hand of a [warlord](3-Mechanics/CLI/bestiary/humanoid/warlord-mpmm.md) (appears in "this book") on the battlefield.

War priests typically adorn themselves with a symbol of their faith. You can roll on the War Priest Holy Symbols table below, or choose one that fits your campaign.

**War Priest Holy Symbols**

`dice: [](war-priest-mpmm.md#^war-priest-holy-symbols)`

| dice: d8 | Holy Symbol |
|----------|-------------|
| 1 | Vial of iridescent liquid |
| 2 | Hilt of a broken sword |
| 3 | Piece of stained glass from a shrine |
| 4 | Clay figurine of a [ki-rin](3-Mechanics/CLI/bestiary/celestial/ki-rin-mpmm.md) or another Celestial |
| 5 | [Torch](3-Mechanics/CLI/items/torch.md) carved so that a hand appears to be holding the flame |
| 6 | Circlet of woven reeds |
| 7 | Scrimshawed bone |
| 8 | Vessel such as a cup, a [jug](3-Mechanics/CLI/items/jug.md), an urn, or an amphora |
^war-priest-holy-symbols

```ad-statblock
title: War Priest
![](bestiary/tokens/MPMM/War Priest.webp#token)
*Medium humanoid (cleric), Any alignment*

- **Armor Class** 18 ([plate](3-Mechanics/CLI/items/plate-armor.md))
- **Hit Points** 117 (`18d8 + 36`)
- **Speed** 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|16 (+3)|10 (+0)|14 (+2)|11 (+0)|17 (+3)|13 (+1)|

- **Proficiency Bonus** +4
- **Saving Throws** Constitution +6, Wisdom +7
- **Skills** Intimidation +5, Religion +4
- **Senses** passive Perception 13
- **Languages** any two languages
- **Challenge** 9

***Spellcasting.*** The war priest casts one of the following spells, using Wisdom as the spellcasting ability (spell save DC 15):

**At will**: [light](3-Mechanics/CLI/spells/light.md), [spare the dying](3-Mechanics/CLI/spells/spare-the-dying.md), [thaumaturgy](3-Mechanics/CLI/spells/thaumaturgy.md)

**1/day each**: [banishment](3-Mechanics/CLI/spells/banishment.md), [command](3-Mechanics/CLI/spells/command.md), [dispel magic](3-Mechanics/CLI/spells/dispel-magic.md), [flame strike](3-Mechanics/CLI/spells/flame-strike.md), [guardian of faith](3-Mechanics/CLI/spells/guardian-of-faith.md), [hold person](3-Mechanics/CLI/spells/hold-person.md), [lesser restoration](3-Mechanics/CLI/spells/lesser-restoration.md), [revivify](3-Mechanics/CLI/spells/revivify.md)

## Actions

***Multiattack.*** The war priest makes two Maul attacks, and it uses Holy Fire.

***Maul.*** *Melee Weapon Attack:* `+7` to hit, reach 5 ft., one target. *Hit:* 10 (`2d6 + 3`) bludgeoning damage  plus *Hit:* 10 (`3d6`) radiant damage.

***Holy Fire.*** The war priest targets one creature it can see within 60 feet of it. The target must make a DC 15 Wisdom saving throw. On a failed save, the target takes 12 (`2d8 + 3`) radiant damage, and it is [blinded](3-Mechanics/CLI/rules/conditions.md#Blinded) until the start of the war priest's next turn. On a successful save, the target takes half as much damage and isn't [blinded](3-Mechanics/CLI/rules/conditions.md#Blinded).

## Bonus Actions

***Healing Light (Recharge 4-6).*** The war priest or one creature of its choice within 60 feet of it regains 12 (`2d8 + 3`) hit points.
```
^statblock

## Environment

desert, urban