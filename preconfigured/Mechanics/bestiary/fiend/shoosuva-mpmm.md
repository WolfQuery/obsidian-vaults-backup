---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend/demon
aliases: ["Shoosuva"]
---
# Shoosuva
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 216*  

> [!quote] A quote from Mordenkainen  
> 
> What? Are you expecting me to comment on these creatures? Fine, how's this: a loyal pet deserves a loyal pet.

> [!quote] A quote from Tasha  
> 
> Trust Mordenkainen to look down on any sort of companionship—even the slavering, venomous, demonic puppy kind.

A shoosuva is a hyena-demon gifted by [Yeenoghu](3-Mechanics/CLI/bestiary/npc/yeenoghu-mpmm.md) to an especially powerful worshiper (typically a [fang of Yeenoghu](3-Mechanics/CLI/bestiary/fiend/gnoll-fang-of-yeenoghu.md)). A shoosuva manifests shortly after a Yeenoghu-worshiping war band achieves a great victory, emerging from a billowing, fetid cloud of smoke as it arrives from the Abyss. In battle, the demon wraps its slavering jaws around one victim while lashing out with the poisonous stinger on its tail to bring down another. A creature immobilized by the poison becomes easy pickings for any nearby members of the war band.

Each shoosuva is bonded to a particular worshiper of Yeenoghu and fights alongside its master. A gnoll that has been gifted with a shoosuva is second only to a flind in status within a war band dedicated to Yeenoghu.

```ad-statblock
title: Shoosuva
![](bestiary/tokens/MPMM/Shoosuva.webp#token)
*Large fiend (demon), Typically  Chaotic Evil*

- **Armor Class** 14 (natural armor)
- **Hit Points** 136 (`16d10 + 48`)
- **Speed** 40 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|13 (+1)|17 (+3)| 7 (-2)|14 (+2)| 9 (-1)|

- **Proficiency Bonus** +3
- **Saving Throws** Dexterity +4, Constitution +6, Wisdom +5
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 12
- **Damage Resistances** cold, fire, lightning
- **Damage Immunities** poison
- **Condition Immunities** [charmed](3-Mechanics/CLI/rules/conditions.md#Charmed), [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened), [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)
- **Languages** Abyssal, Gnoll, telepathy 120 ft.
- **Challenge** 8

## Actions

***Multiattack.*** The shoosuva makes one Bite attack and one Tail Stinger attack.

***Bite.*** *Melee Weapon Attack:* `+7` to hit, reach 5 ft., one target. *Hit:* 26 (`4d10 + 4`) piercing damage.

***Tail Stinger.*** *Melee Weapon Attack:* `+7` to hit, reach 15 ft., one creature. *Hit:* 13 (`2d8 + 4`) piercing damage, and the target must succeed on a DC 14 Constitution saving throw or become [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned). While [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned) in this way, the target is also [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed). The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

## Bonus Actions

***Rampage.*** When it reduces a creature to 0 hit points with a melee attack on its turn, the shoosuva can move up to half its speed and make one Bite attack.
```
^statblock

## Environment

coastal, forest, grassland, hill