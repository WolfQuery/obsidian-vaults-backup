---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
- ttrpg-cli/compendium/src/5e/phb
- ttrpg-cli/spell/class/bard
- ttrpg-cli/spell/class/druid
- ttrpg-cli/spell/class/sorcerer
- ttrpg-cli/spell/class/wizard
- ttrpg-cli/spell/level/4th-level
- ttrpg-cli/spell/optfeature/dreadful-word
- ttrpg-cli/spell/school/enchantment
- ttrpg-cli/spell/subclass/arcane-trickster
- ttrpg-cli/spell/subclass/circle-of-spores
- ttrpg-cli/spell/subclass/eldritch-knight
- ttrpg-cli/spell/subclass/knowledge-domain
- ttrpg-cli/spell/subclass/oathbreaker
classes:
- Bard
- Cleric (Knowledge Domain)
- Druid
- Druid (Circle of Spores)
- Fighter (Eldritch Knight)
- Paladin (Oathbreaker)
- Rogue (Arcane Trickster)
- Sorcerer
- Wizard
aliases:
- Confusion
---
# Confusion
*4th-level, Enchantment*  


- **Casting time:** 1 Action
- **Range:** 90 feet
- **Components:** V, S, M (three nut shells)
- **Duration:** Concentration, up to 1 minute

This spell assaults and twists creatures' minds, spawning delusions and provoking uncontrolled action. Each creature in a 10-foot-radius sphere centered on a point you choose within range must succeed on a Wisdom saving throw when you cast this spell or be affected by it.

An affected target can't take reactions and must roll a `dice:d10|noform|noparens|avg` (`d10`) at the start of each of its turns to determine its behavior for that turn.

**Confusion Behavior**

`dice: [](confusion.md#^confusion-behavior)`

| dice: d10 | Behavior |
|-----------|----------|
| 1 | The creature uses all its movement to move in a random direction. To determine the direction, roll a `dice:d8\|noform\|noparens\|avg` (`d8`) and assign a direction to each die face. The creature doesn't take an action this turn. |
| 2-6 | The creature doesn't move or take actions this turn. |
| 7-8 | The creature uses its action to make a melee attack against a randomly determined creature within its reach. If there is no creature within its reach, the creature does nothing this turn. |
| 9-10 | The creature can act and move normally. |
^confusion-behavior

At the end of each of its turns, an affected target can make a Wisdom saving throw. If it succeeds, this effect ends for that target.

**At Higher Levels.** When you cast this spell using a spell slot of 5th level or higher, the radius of the sphere increases by 5 feet for each slot level above 4th.

**Classes**: [Bard](/3-Mechanics/CLI/Compendium/lists/list-spells-classes-bard.md); [Sorcerer](/3-Mechanics/CLI/Compendium/lists/list-spells-classes-sorcerer.md); [Rogue (Arcane Trickster)](/3-Mechanics/CLI/Compendium/lists/list-spells-classes-arcane-trickster.md); [Wizard](/3-Mechanics/CLI/Compendium/lists/list-spells-classes-wizard.md); [Cleric (Knowledge Domain)](/3-Mechanics/CLI/Compendium/lists/list-spells-classes-knowledge-domain.md); [Druid (Circle of Spores)](/3-Mechanics/CLI/Compendium/lists/list-spells-classes-circle-of-spores-tce.md "subclass=TCE"); [Paladin (Oathbreaker)](/3-Mechanics/CLI/Compendium/lists/list-spells-classes-oathbreaker-dmg.md "subclass=DMG"); [Fighter (Eldritch Knight)](/3-Mechanics/CLI/Compendium/lists/list-spells-classes-eldritch-knight.md); [Druid](/3-Mechanics/CLI/Compendium/lists/list-spells-classes-druid.md)

*Source: Player's Handbook p. 224. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*