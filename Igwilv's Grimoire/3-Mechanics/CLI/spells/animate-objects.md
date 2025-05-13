---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
- ttrpg-cli/compendium/src/5e/phb
- ttrpg-cli/spell/class/bard
- ttrpg-cli/spell/class/sorcerer
- ttrpg-cli/spell/class/wizard
- ttrpg-cli/spell/level/5th-level
- ttrpg-cli/spell/school/transmutation
classes:
- Bard
- Sorcerer
- Wizard
aliases: ["Animate Objects"]
---
# Animate Objects
*5th-level, Transmutation*  


- **Casting time:** 1 Action
- **Range:** 120 feet
- **Components:** V, S
- **Duration:** Concentration, up to 1 minute

Objects come to life at your command. Choose up to ten nonmagical objects within range that are not being worn or carried. Medium targets count as two objects, Large targets count as four objects, Huge targets count as eight objects. You can't animate any object larger than Huge. Each target animates and becomes a creature under your control until the spell ends or until reduced to 0 hit points.

As a bonus action, you can mentally command any creature you made with this spell if the creature is within 500 feet of you (if you control multiple creatures, you can command any or all of them at the same time, issuing the same command to each one). You decide what action the creature will take and where it will move during its next turn, or you can issue a general command, such as to guard a particular chamber or corridor. If you issue no commands, the creature only defends itself against hostile creatures. Once given an order, the creature continues to follow it until its task is complete.

**Animated Object Statistics**

| Size | HP | AC | Attack | Str | Dex |
|------|----|----|--------|-----|-----|
| [Tiny](3-Mechanics/CLI/bestiary/construct/animated-object-tiny.md) | 20 | 18 | `dice:1d20+8\|noform\|noparens\|text(+8)` to hit, `dice:1d4+4\|noform\|noparens\|avg` (`1d4 + 4`) damage | `dice:1d20-3\|noform\|noparens\|avg\|text(4)` (` - 3`) | `dice:1d20+4\|noform\|noparens\|avg\|text(18)` (` + 4`) |
| [Small](3-Mechanics/CLI/bestiary/construct/animated-object-small.md) | 25 | 16 | `dice:1d20+6\|noform\|noparens\|text(+6)` to hit, `dice:1d8+2\|noform\|noparens\|avg` (`1d8 + 2`) damage | `dice:1d20-2\|noform\|noparens\|avg\|text(6)` (` - 2`) | `dice:1d20+2\|noform\|noparens\|avg\|text(14)` (` + 2`) |
| [Medium](3-Mechanics/CLI/bestiary/construct/animated-object-medium.md) | 40 | 13 | `dice:1d20+5\|noform\|noparens\|text(+5)` to hit, `dice:2d6+1\|noform\|noparens\|avg` (`2d6 + 1`) damage | `dice:1d20\|noform\|noparens\|avg\|text(d20)` | `dice:1d20+1\|noform\|noparens\|avg\|text(12)` (` + 1`) |
| [Large](3-Mechanics/CLI/bestiary/construct/animated-object-large.md) | 50 | 10 | `dice:1d20+6\|noform\|noparens\|text(+6)` to hit, `dice:2d10+2\|noform\|noparens\|avg` (`2d10 + 2`) damage | `dice:1d20+2\|noform\|noparens\|avg\|text(14)` (` + 2`) | `dice:1d20\|noform\|noparens\|avg\|text(d20)` |
| [Huge](3-Mechanics/CLI/bestiary/construct/animated-object-huge.md) | 80 | 10 | `dice:1d20+8\|noform\|noparens\|text(+8)` to hit, `dice:2d12+4\|noform\|noparens\|avg` (`2d12 + 4`) damage | `dice:1d20+4\|noform\|noparens\|avg\|text(18)` (` + 4`) | `dice:1d20-3\|noform\|noparens\|avg\|text(6)` (` - 3`) |
^animated-object-statistics

An animated object is a construct with AC, hit points, attacks, Strength, and Dexterity determined by its size. Its Constitution is 10 and its Intelligence and Wisdom are 3, and its Charisma is 1. Its speed is 30 feet; if the object lacks legs or other appendages it can use for locomotion, it instead has a flying speed of 30 feet and can hover. If the object is securely attached to a surface or a larger object, such as a chain bolted to a wall, its speed is 0. It has blindsight with a radius of 30 feet and is blind beyond that distance. When the animated object drops to 0 hit points, it reverts to its original object form, and any remaining damage carries over to its original object form.

If you command an object to attack, it can make a single melee attack against a creature within 5 feet of it. It makes a slam attack with an attack bonus and bludgeoning damage determined by its size. The DM might rule that a specific object inflicts slashing or piercing damage based on its form.

**At Higher Levels.** If you cast this spell using a spell slot of 6th level or higher, you can animate two additional objects for each slot level above 5th.

**Classes**: [Sorcerer](3-Mechanics/CLI/lists/list-spells-classes-sorcerer.md); [Bard](3-Mechanics/CLI/lists/list-spells-classes-bard.md); [Wizard](3-Mechanics/CLI/lists/list-spells-classes-wizard.md)

*Source: Player's Handbook p. 213. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*