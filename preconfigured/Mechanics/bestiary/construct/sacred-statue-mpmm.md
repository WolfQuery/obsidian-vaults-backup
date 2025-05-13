---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct
aliases: ["Sacred Statue"]
---
# Sacred Statue
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 114*  

To protect sites they deem holy, gods often rely on eidolons, ghostly spirits bound to safeguard a sacred place. Forged from the souls of those with unwavering devotion, eidolons stalk temples and vaults to ensure that no enemy defiles, damages, or plunders these sites. If an enemy sets foot inside a warded location, the [eidolon](3-Mechanics/CLI/bestiary/undead/eidolon-mpmm.md) plunges into a [statue](3-Mechanics/CLI/bestiary/construct/sacred-statue-mpmm.md) specially prepared to house its soul; it then animates this effigy and uses the statue to drive out the intruders.

```ad-statblock
title: Sacred Statue
![](bestiary/tokens/MPMM/Sacred Statue.webp#token)
*Large construct, as the eidolon's alignment*

- **Armor Class** 19 (natural armor)
- **Hit Points** 95 (`10d10 + 40`)
- **Speed** 25 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|19 (+4)| 8 (-1)|19 (+4)|14 (+2)|19 (+4)|16 (+3)|

- **Proficiency Bonus** +2
- **Saving Throws** Wisdom +8
- **Skills** ⏤
- **Senses** darkvision 60 ft., passive Perception 14
- **Damage Resistances** acid; fire; lightning; bludgeoning, piercing, slashing from nonmagical attacks
- **Damage Immunities** cold, necrotic, poison
- **Condition Immunities** [charmed](3-Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion), [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened), [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](3-Mechanics/CLI/rules/conditions.md#Petrified), [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)
- **Languages** the languages the [eidolon](3-Mechanics/CLI/bestiary/undead/eidolon-mpmm.md) knew in life
- **Challenge** 

## Traits

***False Appearance.*** If the statue is motionless at the start of combat, it has advantage on its initiative roll. Moreover, if a creature hasn't observed the statue move or act, that creature must succeed on a DC 18 Intelligence ([Investigation](3-Mechanics/CLI/rules/skills.md#Investigation)) check to discern that the statue isn't an object.

***Ghostly Inhabitant.*** The [eidolon](3-Mechanics/CLI/bestiary/undead/eidolon-mpmm.md) that enters the statue remains inside it until the statue drops to 0 hit points, the eidolon uses a bonus action to move out of the statue, or the eidolon is turned or forced out by an effect such as the [dispel evil and good](3-Mechanics/CLI/spells/dispel-evil-and-good.md) spell. When the eidolon leaves the statue, it appears in an unoccupied space within 5 feet of the statue.

***Inert.*** Without an [eidolon](3-Mechanics/CLI/bestiary/undead/eidolon-mpmm.md) inside, the statue is an object.

***Unusual Nature.*** The statue doesn't require air, food, drink, or sleep.

## Actions

***Multiattack.*** The statue makes two Slam or Rock attacks.

***Slam.*** *Melee Weapon Attack:* `+8` to hit, reach 10 ft., one target. *Hit:* 43 (`6d12 + 4`) bludgeoning damage.

***Rock.*** *Ranged Weapon Attack:* `+8` to hit, range 60 ft./240 ft., one target. *Hit:* 37 (`6d10 + 4`) bludgeoning damage.
```
^statblock