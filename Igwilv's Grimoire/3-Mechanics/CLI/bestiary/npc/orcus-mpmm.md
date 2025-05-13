---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/26
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
aliases: ["Orcus"]
---
# [Orcus](3-Mechanics\CLI\bestiary\npc/orcus-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 204*  

Orcus is the Demon Prince of Undeath, also known as the Blood Lord. While he takes pleasure in the sufferings of the living, he far prefers the company and service of Undead. His desire is to see all life quenched and the multiverse transformed into a vast necropolis populated solely by Undead creatures under his command.

Orcus rewards those who spread death in his name by granting them a small portion of his power. The least of these become [ghouls](3-Mechanics/CLI/bestiary/undead/ghoul.md) and [zombies](3-Mechanics/CLI/bestiary/undead/zombie.md) that serve in his legions, while his favored servants are the cultists and necromancers who murder the living and then manipulate the dead, emulating their dread master.

Orcus is a bestial creature of corruption with a diseased, decaying look. He has the lower torso of a goat and a humanlike upper body with a belly swollen with rot. Great bat wings sprout from his shoulders, and his head is like the skull of a goat, the flesh nearly rotted from it. In one hand, he wields the legendary [Wand of Orcus](3-Mechanics/CLI/items/wand-of-orcus.md), which is described in the *Dungeon Master's Guide*.

## Cultists of Orcus

> [!note]
> See the Cult of Orcus entry.

## Orcus's Lair

Orcus makes his lair in the fortress city of Naratyr, which is on Thanatos, the layer of the Abyss that he rules. Surrounded by a moat fed by the River Styx, Naratyr is an eerily quiet and cold city, its streets empty for hours at a time. The central castle of bone has interior walls of flesh and carpets made of woven hair. The city contains wandering Undead, many of which are engaged in continuous battles with one another.

```statblock
"name": "Orcus (MPMM)"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "17"
"ac_class": "natural armor; 20 from with the [Wand of Orcus](3-Mechanics/CLI/items/wand-of-orcus.md)"
"hp": !!int "405"
"hit_dice": "30d12 + 210"
"stats":
- !!int "27"
- !!int "14"
- !!int "25"
- !!int "20"
- !!int "20"
- !!int "25"
"speed": "40 ft., fly 40 ft."
"saves":
  "Dexterity": !!int "10"
  "Wisdom": !!int "13"
  "Constitution": !!int "15"
"skillsaves":
  "Perception": !!int "13"
  "Arcana": !!int "13"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "necrotic; poison; bludgeoning, piercing, slashing that is nonmagical"
"condition_immunities": "[charmed](3-Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened), [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "truesight 120 ft., passive Perception 22"
"languages": "all, telepathy 120 ft."
"cr": "26"
"traits":
- "desc": "Orcus casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 23):\n\nAt will:\
    \ [detect magic](3-Mechanics/CLI/spells/detect-magic.md)\n\n1/day: [time stop](3-Mechanics/CLI/spells/time-stop.md)\n\
    \n3/day: [dispel magic](3-Mechanics/CLI/spells/dispel-magic.md)"
  "name": "Spellcasting"
- "desc": "While holding the [Wand of Orcus](3-Mechanics/CLI/items/wand-of-orcus.md),\
    \ Orcus casts one of the following spells (spell save DC 18), some of which require\
    \ charges; the wand has 7 charges to fuel these spells, and it regains dice:1d4+3|noform|noparens|avg\
    \ (1d4 + 3) charges daily at dawn:\n\nAt will: [animate dead](3-Mechanics/CLI/spells/animate-dead.md)\
    \ (as an action), [blight](3-Mechanics/CLI/spells/blight.md), [speak with dead](3-Mechanics/CLI/spells/speak-with-dead.md)"
  "name": "Wand Spellcasting"
- "desc": "If Orcus fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Orcus has advantage on saving throws against spells and other magical effects."
  "name": "Magic Resistance"
- "desc": "Orcus can cast [animate dead](3-Mechanics/CLI/spells/animate-dead.md) (at\
    \ will) and [create undead](3-Mechanics/CLI/spells/create-undead.md) (3/day).\
    \ He chooses the level at which the spells are cast, and the creatures created\
    \ by them remain under his control indefinitely. Additionally, he can cast [create\
    \ undead](3-Mechanics/CLI/spells/create-undead.md) even when it isn't night."
  "name": "Master of Undeath"
- "desc": "Orcus wields the [Wand of Orcus](3-Mechanics/CLI/items/wand-of-orcus.md)."
  "name": "Special Equipment"
"actions":
- "desc": "Orcus makes three Wand of Orcus, Tail, or Necrotic Bolt attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice:1d20+19|noform|noparens|text(+19) to hit,\
    \ reach 10 ft., one target. Hit: dice:3d8+11|noform|noparens|avg|text(24)\
    \ (3d8 + 11) bludgeoning damage plus dice:2d12|noform|noparens|avg|text(13)\
    \ (2d12) necrotic damage."
  "name": "Wand of Orcus"
- "desc": "Melee Weapon Attack: dice:1d20+16|noform|noparens|text(+16) to hit,\
    \ reach 10 ft., one target. Hit: dice:3d8+8|noform|noparens|avg|text(21) (3d8\
    \ + 8) force damage plus dice:2d8|noform|noparens|avg|text(9) (2d8) poison\
    \ damage."
  "name": "Tail"
- "desc": "Ranged Spell Attack: dice:1d20+15|noform|noparens|text(+15) to hit,\
    \ range 120 ft., one target. Hit: dice:5d8+7|noform|noparens|avg|text(29)\
    \ (5d8 + 7) necrotic damage."
  "name": "Necrotic Bolt"
- "desc": "While holding the [Wand of Orcus](3-Mechanics/CLI/items/wand-of-orcus.md),\
    \ Orcus conjures Undead creatures whose combined average hit points don't exceed\
    \ 500. These creatures magically rise up from the ground or otherwise form in\
    \ unoccupied spaces within 300 feet of Orcus and obey his commands until they\
    \ are destroyed or until he dismisses them as an action."
  "name": "Conjure Undead (1/Day)"
"legendary_actions":
- "desc": "Orcus can take 3 legendary actions, choosing from the options below. Only\
    \ one legendary action option can be used at a time and only at the end of another\
    \ creature's turn. Orcus regains spent legendary actions at the start of his turn."
  "name": ""
- "desc": "Orcus makes one Tail or Necrotic Bolt attack."
  "name": "Attack"
- "desc": "Orcus chooses a point on the ground that he can see within 100 feet of\
    \ him. A cylinder of swirling necrotic energy 60 feet tall and with a 10-foot\
    \ radius rises from that point and lasts until the end of Orcus's next turn. Creatures\
    \ in that area have vulnerability to necrotic damage."
  "name": "Creeping Death (Costs 2 Actions)"
"lair_actions":
- "desc": "On Initiative count 20 (losing initiative ties), Orcus can take a lair\
    \ action to cause one of the following effects; he can't use the same effect two\
    \ rounds in a row:"
  "name": ""
- "desc": "- Deadly Utterance. Orcus's voice booms throughout the lair. His utterance\
    \ causes one creature of his choice to be subjected to [power word kill](3-Mechanics/CLI/spells/power-word-kill.md).\
    \ Orcus needn't see the creature, but he must be aware that the individual is\
    \ in the lair.  \n- Grasp of the Dead. Orcus causes skeletal arms to rise\
    \ from an area on the ground in a 20-foot square that he can see. They last until\
    \ the next initiative count 20. Each creature in that area when the arms appear\
    \ must succeed on a DC 23 Strength saving throw or be [restrained](3-Mechanics/CLI/rules/conditions.md#Restrained)\
    \ until the arms disappear or until Orcus releases them (no action required).\
    \  \n- Undead Servants. Orcus causes up to six corpses within the lair to\
    \ rise as [skeletons](3-Mechanics/CLI/bestiary/undead/skeleton.md), [zombies](3-Mechanics/CLI/bestiary/undead/zombie.md),\
    \ or [ghouls](3-Mechanics/CLI/bestiary/undead/ghoul.md). These undead obey his\
    \ telepathic commands, which can reach anywhere in the lair.  "
  "name": ""
"regional_effects":
- "desc": "The region containing Orcus's lair is warped by his magic, creating one\
    \ or more of the following effects:"
  "name": ""
- "desc": "- Charnel Realm. The air is filled with the stench of rotting flesh,\
    \ and buzzing flies grow thick within the region.  \n- Undead Beasts. Dead\
    \ Beasts periodically animate as Undead mockeries of their former selves. Skeletal\
    \ and zombie versions of local wildlife are commonly seen in the area.  "
  "name": ""
- "desc": "If Orcus dies, these effects fade over the course of dice:1d10|noform|noparens|avg\
    \ (1d10) days."
  "name": ""
"source":
- "MPMM"
"image": "3-Mechanics/CLI/bestiary/npc/token/orcus-mpmm.webp"
```
^statblock