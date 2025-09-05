---
obsidianUIMode: preview
cssclasses: json5e-spell
tags:
- ttrpg-cli/compendium/src/5e/phb
- ttrpg-cli/spell/class/bard
- ttrpg-cli/spell/class/sorcerer
- ttrpg-cli/spell/class/wizard
- ttrpg-cli/spell/feat/fey-touched
- ttrpg-cli/spell/feat/magic-initiate
- ttrpg-cli/spell/level/1st-level
- ttrpg-cli/spell/school/enchantment
- ttrpg-cli/spell/subclass/arcane-trickster
- ttrpg-cli/spell/subclass/eldritch-knight
- ttrpg-cli/spell/subclass/oath-of-redemption
- ttrpg-cli/spell/subclass/the-archfey
- ttrpg-cli/spell/subclass/twilight-domain
classes:
- Bard
- Cleric (Twilight Domain)
- Fighter (Eldritch Knight)
- Paladin (Oath of Redemption)
- Rogue (Arcane Trickster)
- Sorcerer
- Warlock (The Archfey)
- Wizard
aliases:
- Sleep
---
# Sleep
*1st-level, Enchantment*  


- **Casting time:** 1 Action
- **Range:** 90 feet
- **Components:** V, S, M (a pinch of fine sand, rose petals, or a cricket)
- **Duration:** 1 minute

This spell sends creatures into a magical slumber. Roll `dice:5d8|noform|noparens|avg` (`5d8`); the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring [unconscious](/3-Mechanics/CLI/Rules/conditions.md#Unconscious) creatures).

Starting with the creature that has the lowest current hit points, each creature affected by this spell falls [unconscious](/3-Mechanics/CLI/Rules/conditions.md#Unconscious) until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected.

Undead and creatures immune to being [charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed) aren't affected by this spell.

**At Higher Levels.** When you cast this spell using a spell slot of 2nd level or higher, roll an additional `dice:2d8|noform|noparens|avg|text(2d8)` for each slot level above 1st.

**Classes**: [Bard](/3-Mechanics/CLI/Compendium/lists/list-spells-classes-bard.md); [Sorcerer](/3-Mechanics/CLI/Compendium/lists/list-spells-classes-sorcerer.md); [Rogue (Arcane Trickster)](/3-Mechanics/CLI/Compendium/lists/list-spells-classes-arcane-trickster.md); [Wizard](/3-Mechanics/CLI/Compendium/lists/list-spells-classes-wizard.md); [Warlock (The Archfey)](/3-Mechanics/CLI/Compendium/lists/list-spells-classes-the-archfey.md); [Cleric (Twilight Domain)](/3-Mechanics/CLI/Compendium/lists/list-spells-classes-twilight-domain-tce.md "subclass=TCE"); [Fighter (Eldritch Knight)](/3-Mechanics/CLI/Compendium/lists/list-spells-classes-eldritch-knight.md); [Paladin (Oath of Redemption)](/3-Mechanics/CLI/Compendium/lists/list-spells-classes-oath-of-redemption-xge.md "subclass=XGE")

*Source: Player's Handbook p. 276. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*