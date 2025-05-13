---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/environment/desert
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend/devil
aliases: ["Orthon"]
---
# Orthon
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 205*  

When an archduke of the Nine Hells needs a creature tracked, found, and either done away with or captured, the task usually falls to an orthon. These devils are infernal bounty hunters, tireless in their pursuit of their quarry across the multiverse.

Orthons are infamous for their sharp senses. Because an orthon can become invisible at will, its quarry is often unaware of being hunted until the orthon strikes. This invisibility can be disrupted when the devil is attacked, however, so a strong counterattack is often the best defense against it.

Orthons value the challenge of the chase and the thrill of one-on-one combat above all else. An orthon's first loyalty is to its archduke, but one with no immediate assignment might work for anyone who promises it a worthy struggle against a lethal foe. Because they travel widely, orthons are unequaled as guides through the layers of the Nine Hells.

```ad-statblock
title: Orthon
![](bestiary/tokens/MPMM/Orthon.webp#token)
*Large fiend (devil), Typically  Lawful Evil*

- **Armor Class** 17 ([half plate](3-Mechanics/CLI/items/half-plate-armor.md))
- **Hit Points** 105 (`10d10 + 50`)
- **Speed** 30 ft., climb 30 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|22 (+6)|16 (+3)|21 (+5)|15 (+2)|15 (+2)|16 (+3)|

- **Proficiency Bonus** +4
- **Saving Throws** Dexterity +7, Constitution +9, Wisdom +6
- **Skills** Perception +10, Stealth +11, Survival +10
- **Senses** darkvision 120 ft., truesight 30 ft., passive Perception 20
- **Damage Resistances** cold; bludgeoning, piercing, slashing from nonmagical attacks that aren't silvered
- **Damage Immunities** fire, poison
- **Condition Immunities** [charmed](3-Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion), [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)
- **Languages** Common, Infernal, telepathy 120 ft.
- **Challenge** 10

## Traits

***Magic Resistance.*** The orthon has advantage on saving throws against spells and other magical effects.

## Actions

***Infernal Dagger.*** *Melee Weapon Attack:* `+10` to hit, reach 5 ft., one target. *Hit:* 11 (`2d4 + 6`) force damage, and the target must make a DC 17 Constitution saving throw, taking 22 (`4d10`) poison damage on a failed save, or half as much damage on a successful one. On a failure, the target is [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned) for 1 minute. The [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned) target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.

***Brass Crossbow.*** *Ranged Weapon Attack:* `+7` to hit, range 100/400 ft., one target. *Hit:* 14 (`2d10 + 3`) force damage. The target also suffers one of the following effects of the orthon's choice; the orthon can't use the same effect two rounds in a row:

- **Acid.** The target must make a DC 17 Constitution saving throw, taking an additional 17 (`5d6`) acid damage on a failed save, or half as much damage on a successful one.  
- **Blindness.** The target takes 5 (`1d10`) radiant damage. In addition, the target and all other creatures within 20 feet of it must each make a successful DC 17 Dexterity saving throw or be [blinded](3-Mechanics/CLI/rules/conditions.md#Blinded) until the end of the orthon's next turn.  
- **Concussion.** The target and each creature within 20 feet of it must make a DC 17 Constitution saving throw, taking 13 (`2d12`) thunder damage on a failed save, or half as much damage on a successful one.  
- **Entanglement.** The target must make a successful DC 17 Dexterity saving throw or be [restrained](3-Mechanics/CLI/rules/conditions.md#Restrained) for 1 hour by strands of sticky webbing. The target can escape by taking an action to make a DC 17 Strength or Dexterity check and succeeding.  
- **Paralysis.** The target takes 22 (`4d10`) lightning damage and must make a successful DC 17 Constitution saving throw or be [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed) for 1 minute. The [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed) target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.  
- **Tracking.** For the next 24 hours, the orthon knows the direction and distance to the target, as long as it's on the same plane of existence. If the target is on a different plane, the orthon knows which one, but not the exact location there.  

## Bonus Actions

***Invisibility Field (Recharge 4-6).*** The orthon becomes [invisible](3-Mechanics/CLI/rules/conditions.md#Invisible). Any equipment it wears or carries is also [invisible](3-Mechanics/CLI/rules/conditions.md#Invisible) as long as the equipment is on its person. This invisibility ends immediately after it makes an attack roll or is hit by an attack roll.

## Reactions

***Explosive Retribution.*** In response to dropping to 15 hit points or fewer, the orthon explodes. All other creatures within 30 feet of it must each make a DC 17 Dexterity saving throw, taking 9 (`2d8`) fire damage plus 9 (`2d8`) thunder damage on a failed save, or half as much damage on a successful one. The orthon, its infernal dagger, and its brass crossbow are destroyed.
```
^statblock

## Environment

desert, underdark, urban