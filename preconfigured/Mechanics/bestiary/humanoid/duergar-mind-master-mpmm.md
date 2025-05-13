---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/dwarf
aliases: ["Duergar Mind Master"]
---
# Duergar Mind Master
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 108*  

Wearing fearsome masks, duergar mind masters usually operate as spies, both inside and beyond a duergar stronghold. Their psionically augmented abilities enable them to see through illusions with ease and shrink down to miniature size to spy on their targets.

## Duergar

> [!quote] A quote from Mordenkainen  
> 
> Duergar architecture is remarkable for its brutalist grandeur. It is not a style I would use for my towers—I prefer gold, gems, and tracery—but I admire the boldness of dwarven stonework.

> [!quote] A quote from Mordenkainen  
> 
> The mental power that duergar wield was given to them by illithids. But why would illithids create servants who could turn invisible or grow to ogre size?
> 
> Most likely because those servants would excel at herding their masters' other minions. In retrospect, it seems arguable that duergar escaped bondage because their jailers had given them the keys.

Duergar are dwarves of the deep reaches of the Underdark and other sunless realms. Their personalities and abilities have been deeply impacted by their ancestors' captivity and torment by mind flayers; they were infused with powerful psionic abilities but also a profound gloom. In some, this strain of sorrow inspires works of grand but melancholic beauty, while in others, it manifests as rage.

Like many who dwell in the Underdark, duergar must constantly be on guard against the raids and plots of their neighbors. To this end, duergar warriors fulfill a variety of combat roles, often marrying their fury in battle with their psionic abilities or training dangerous Underdark creatures as mounts.

Denigrated by some as joyless, duergar are in fact deeply passionate in all that they do—even if that passion rarely manifests as mirth. They bring an emotional intensity to their lives, whether they're exploring neighboring tunnels, defending their homes, engaging with their families, or crafting bold new works. The bonds of friendship and kinship are strong, though navigating the inevitable outbursts of frustration and despair is not always easy. Similarly, duergar tend to be very community-minded—in the Underdark, all must cooperate to survive.

Among the duergar of the Forgotten Realms, creation is a fiercely passionate process. They tend to favor works that are sturdy and grand, but in a bare, stripped-down fashion that favors geometric forms. The strongholds they design are blocky and stark, and the weapons they forge are blatantly tools of violence. While others may decry their creations as cold and bare of ornamentation to the point of austerity, duergar see them as honoring the materials used and honest about their purpose.

## Statblock

```ad-statblock
title: Duergar Mind Master
![](bestiary/tokens/MPMM/Duergar Mind Master.webp#token)
*Medium humanoid (dwarf), Any alignment*

- **Armor Class** 14 ([leather armor](3-Mechanics/CLI/items/leather-armor.md))
- **Hit Points** 39 (`6d8 + 12`)
- **Speed** 25 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|11 (+0)|17 (+3)|14 (+2)|15 (+2)|10 (+0)|12 (+1)|

- **Proficiency Bonus** +2
- **Saving Throws** Wisdom +2
- **Skills** Perception +2, Stealth +5
- **Senses** darkvision 120 ft., truesight 30 ft., passive Perception 12
- **Damage Resistances** poison
- **Languages** Dwarvish, Undercommon
- **Challenge** 2

## Traits

***Duergar Resilience.*** The duergar has advantage on saving throws against spells and the [charmed](3-Mechanics/CLI/rules/conditions.md#Charmed), [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed), and [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned) conditions.

***Sunlight Sensitivity.*** While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom ([Perception](3-Mechanics/CLI/rules/skills.md#Perception)) checks that rely on sight.

## Actions

***Multiattack.*** The duergar makes two Mind-Poison Dagger attacks. It can replace one attack with a use of Mind Mastery.

***Mind-Poison Dagger.*** *Melee Weapon Attack:* `+5` to hit, reach 5 ft., one target. *Hit:* 5 (`1d4 + 3`) piercing damage plus 10 (`3d6`) psychic damage, or 1 piercing damage plus 10 (`3d6`) psychic damage while under the effect of Reduce.

***Invisibility (Recharge 4-6).*** The duergar magically turns [invisible](3-Mechanics/CLI/rules/conditions.md#Invisible) for up to 1 hour or until it attacks, it forces a creature to make a saving throw, or its [concentration](3-Mechanics/CLI/rules/conditions.md#Concentration) is broken (as if [concentrating](3-Mechanics/CLI/rules/conditions.md#Concentration) on a spell). Any equipment the duergar wears or carries is [invisible](3-Mechanics/CLI/rules/conditions.md#Invisible) with it.

***Mind Mastery.*** The duergar targets one creature it can see within 60 feet of it. The target must succeed on a DC 12 Intelligence saving throw, or the duergar causes it to use its reaction, if available, either to make one weapon attack against another creature the duergar can see or to move up to 10 feet in a direction of the duergar's choice. Creatures that can't be [charmed](3-Mechanics/CLI/rules/conditions.md#Charmed) are immune to this effect.

## Bonus Actions

***Reduce (Recharges after a Short or Long Rest).*** For 1 minute, the duergar magically decreases in size, along with anything it is wearing or carrying. While reduced, the duergar is Tiny, reduces its weapon damage to 1, and makes attack rolls, ability checks, and saving throws with disadvantage if they use Strength. It gains a +5 bonus to all Dexterity ([Stealth](3-Mechanics/CLI/rules/skills.md#Stealth)) checks and a +5 bonus to its AC. It can also take a bonus action on each of its turns to take the [Hide](3-Mechanics/CLI/rules/actions.md#Hide) action.
```
^statblock

## Environment

mountain, underdark