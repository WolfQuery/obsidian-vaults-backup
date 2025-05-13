---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/26
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/fiend/demon
aliases: ["Orcus"]
---
# Orcus
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 204*  

Orcus is the Demon Prince of Undeath, also known as the Blood Lord. While he takes pleasure in the sufferings of the living, he far prefers the company and service of Undead. His desire is to see all life quenched and the multiverse transformed into a vast necropolis populated solely by Undead creatures under his command.

Orcus rewards those who spread death in his name by granting them a small portion of his power. The least of these become [ghouls](3-Mechanics/CLI/bestiary/undead/ghoul.md) and [zombies](3-Mechanics/CLI/bestiary/undead/zombie.md) that serve in his legions, while his favored servants are the cultists and necromancers who murder the living and then manipulate the dead, emulating their dread master.

Orcus is a bestial creature of corruption with a diseased, decaying look. He has the lower torso of a goat and a humanlike upper body with a belly swollen with rot. Great bat wings sprout from his shoulders, and his head is like the skull of a goat, the flesh nearly rotted from it. In one hand, he wields the legendary Wand of Orcus, which is described in the *Dungeon Master's Guide*.

## Cultists of Orcus

> [!note]
> See the Cult of Orcus entry.

## Orcus's Lair

Orcus makes his lair in the fortress city of Naratyr, which is on Thanatos, the layer of the Abyss that he rules. Surrounded by a moat fed by the River Styx, Naratyr is an eerily quiet and cold city, its streets empty for hours at a time. The central castle of bone has interior walls of flesh and carpets made of woven hair. The city contains wandering Undead, many of which are engaged in continuous battles with one another.

## Statblock

```ad-statblock
title: Orcus
![](bestiary/tokens/MPMM/Orcus.webp#token)
*Huge fiend (demon), Chaotic Evil*

- **Armor Class** 17 (natural armor; 20 from with the Wand of Orcus)
- **Hit Points** 405 (`30d12 + 210`)
- **Speed** 40 ft., fly 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|27 (+8)|14 (+2)|25 (+7)|20 (+5)|20 (+5)|25 (+7)|

- **Proficiency Bonus** +8
- **Saving Throws** Dexterity +10, Constitution +15, Wisdom +13
- **Skills** Arcana +13, Perception +13
- **Senses** truesight 120 ft., passive Perception 22
- **Damage Resistances** cold, fire, lightning
- **Damage Immunities** necrotic; poison; bludgeoning, piercing, slashing that is nonmagical
- **Condition Immunities** [charmed](3-Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion), [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened), [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)
- **Languages** all, telepathy 120 ft.
- **Challenge** 26

## Traits

***Legendary Resistance (3/Day).*** If Orcus fails a saving throw, he can choose to succeed instead.

***Magic Resistance.*** Orcus has advantage on saving throws against spells and other magical effects.

***Master of Undeath.*** Orcus can cast [animate dead](3-Mechanics/CLI/spells/animate-dead.md) (at will) and [create undead](3-Mechanics/CLI/spells/create-undead.md) (3/day). He chooses the level at which the spells are cast, and the creatures created by them remain under his control indefinitely. Additionally, he can cast [create undead](3-Mechanics/CLI/spells/create-undead.md) even when it isn't night.

***Special Equipment.*** Orcus wields the Wand of Orcus.

***Spellcasting.*** Orcus casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save DC 23):

**At will**: [detect magic](3-Mechanics/CLI/spells/detect-magic.md)

**1/day**: [time stop](3-Mechanics/CLI/spells/time-stop.md)

**3/day**: [dispel magic](3-Mechanics/CLI/spells/dispel-magic.md)

***Wand Spellcasting.*** While holding the Wand of Orcus, Orcus casts one of the following spells (spell save DC 18), some of which require charges; the wand has 7 charges to fuel these spells, and it regains `1d4 + 3` charges daily at dawn:

**At will**: [animate dead](3-Mechanics/CLI/spells/animate-dead.md) (as an action), [blight](3-Mechanics/CLI/spells/blight.md), [speak with dead](3-Mechanics/CLI/spells/speak-with-dead.md)

## Actions

***Multiattack.*** Orcus makes three Wand of Orcus, Tail, or Necrotic Bolt attacks.

***Wand of Orcus.*** *Melee Weapon Attack:* `+19` to hit, reach 10 ft., one target. *Hit:* 24 (`3d8 + 11`) bludgeoning damage plus 13 (`2d12`) necrotic damage.

***Tail.*** *Melee Weapon Attack:* `+16` to hit, reach 10 ft., one target. *Hit:* 21 (`3d8 + 8`) force damage plus 9 (`2d8`) poison damage.

***Necrotic Bolt.*** *Ranged Spell Attack:* `+15` to hit, range 120 ft., one target. *Hit:* 29 (`5d8 + 7`) necrotic damage.

***Conjure Undead (1/Day).*** While holding the Wand of Orcus, Orcus conjures Undead creatures whose combined average hit points don't exceed 500. These creatures magically rise up from the ground or otherwise form in unoccupied spaces within 300 feet of Orcus and obey his commands until they are destroyed or until he dismisses them as an action.

## Legendary Actions

Orcus can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. Orcus regains spent legendary actions at the start of his turn.

***Attack.*** Orcus makes one Tail or Necrotic Bolt attack.

***Creeping Death (Costs 2 Actions).*** Orcus chooses a point on the ground that he can see within 100 feet of him. A cylinder of swirling necrotic energy 60 feet tall and with a 10-foot radius rises from that point and lasts until the end of Orcus's next turn. Creatures in that area have vulnerability to necrotic damage.

![Orcus](3-Mechanics/CLI/bestiary/legendary-group/orcus-mpmm.md)
```
^statblock