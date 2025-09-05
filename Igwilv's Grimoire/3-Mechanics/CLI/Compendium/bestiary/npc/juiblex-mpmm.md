---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/23
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Juiblex
---
# [Juiblex](3-Mechanics\CLI\Compendium\bestiary\npc/juiblex-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 160*  

Called the Faceless Lord and the Oozing Hunger in ancient grimoires, Juiblex is demon lord of slime and ooze, a noxious creature that doesn't care about the plots and schemes of others of its kind. It exists only to consume, digesting and transforming living matter into more of itself.

A true horror, Juiblex is a mass of bubbling slime, swirling black and green, with glaring red eyes floating and shifting within it. It can rise up like a 20-foot hill, lashing out with dripping pseudopods to drag victims into its bulk. Those consumed by Juiblex are obliterated.

## Cultists of Juiblex

> [!note]
> See the Cult of Juiblex entry.

## Juiblex's Lair

Juiblex's principal lair is known as the Slime Pits, a realm that Juiblex shares with [Zuggtmoy](/3-Mechanics/CLI/Compendium/bestiary/npc/zuggtmoy-mpmm.md) (who also appears in this book). This layer of the Abyss, which is also known as Shedaklah, is a bubbling morass of fetid sludge. The landscape is covered in vast expanses of caustic slimes, and strange organic forms rise from the oceans of ooze at Juiblex's command.

Juiblex's challenge rating is 24 (62,000 XP) when encountered in its lair.

```statblock
"name": "Juiblex (MPMM)"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "350"
"hit_dice": "28d12 + 168"
"modifier": !!int "0"
"stats":
  - !!int "24"
  - !!int "10"
  - !!int "23"
  - !!int "20"
  - !!int "20"
  - !!int "16"
"speed": "30 ft., climb 30 ft."
"saves":
  - "dexterity": !!int "7"
  - "constitution": !!int "13"
  - "wisdom": !!int "12"
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+12"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "acid; poison; bludgeoning, piercing, slashing that is nonmagical"
"condition_immunities": "[blinded](/3-Mechanics/CLI/Rules/conditions.md#Blinded),\
  \ [charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed), [deafened](/3-Mechanics/CLI/Rules/conditions.md#Deafened),\
  \ [exhaustion](/3-Mechanics/CLI/Rules/conditions.md#Exhaustion), [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened),\
  \ [grappled](/3-Mechanics/CLI/Rules/conditions.md#Grappled), [paralyzed](/3-Mechanics/CLI/Rules/conditions.md#Paralyzed),\
  \ [petrified](/3-Mechanics/CLI/Rules/conditions.md#Petrified), [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned),\
  \ [prone](/3-Mechanics/CLI/Rules/conditions.md#Prone), [restrained](/3-Mechanics/CLI/Rules/conditions.md#Restrained),\
  \ [stunned](/3-Mechanics/CLI/Rules/conditions.md#Stunned), [unconscious](/3-Mechanics/CLI/Rules/conditions.md#Unconscious)"
"senses": "truesight 120 ft., passive Perception 22"
"languages": "all, telepathy 120 ft."
"cr": "23"
"traits":
  - "desc": "Any creature other than an Ooze that starts its turn within 10 feet of\
      \ Juiblex must succeed on a DC 21 Constitution saving throw or be [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned)\
      \ until the start of the creature's next turn."
    "name": "Foul"
  - "desc": "If Juiblex fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Juiblex has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "Juiblex regains 20 hit points at the start of its turn. If it takes fire\
      \ or radiant damage, this trait doesn't function at the start of its next turn.\
      \ Juiblex dies only if it starts its turn with 0 hit points and doesn't regenerate."
    "name": "Regeneration"
  - "desc": "Juiblex can climb difficult surfaces, including upside down on ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
"actions":
  - "desc": "Juiblex makes three Acid Lash attacks."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Weapon Attack: +14 to hit, reach 10 ft. or range 60/120\
      \ ft., one target. Hit: 21 (4d6 + 7) acid damage. Any creature killed by this\
      \ attack is drawn into Juiblex's body, where the corpse is dissolved after 1\
      \ minute."
    "name": "Acid Lash"
  - "desc": "Juiblex spews out a corrosive slime, targeting one creature that it can\
      \ see within 60 feet of it. The target must succeed on a DC 21 Dexterity saving\
      \ throw or take 55 (10d10) acid damage. Unless the target avoids taking all\
      \ of this damage, any metal armor worn by the target takes a permanent −1 penalty\
      \ to the AC it offers, and any metal weapon the target is carrying or wearing\
      \ takes a permanent −1 penalty to damage rolls. The penalty worsens each time\
      \ a target is subjected to this effect. If the penalty on an object drops to\
      \ −5, the object is destroyed. The penalty on an object can be removed by the\
      \ [mending](/3-Mechanics/CLI/Compendium/spells/mending.md) spell."
    "name": "Eject Slime (Recharge 5-6)"
  - "desc": "Juiblex casts one of the following spells, requiring no material components\
      \ and using Wisdom as the spellcasting ability (spell save DC 20):\n\nAt will:\
      \ [detect magic](/3-Mechanics/CLI/Compendium/spells/detect-magic.md)\n\n3/day\
      \ each: [contagion](/3-Mechanics/CLI/Compendium/spells/contagion.md), [gaseous\
      \ form](/3-Mechanics/CLI/Compendium/spells/gaseous-form.md)"
    "name": "Spellcasting"
"legendary_actions":
  - "desc": "Juiblex makes one Acid Lash attack."
    "name": "Attack"
  - "desc": "Melee Weapon Attack: +14 to hit, reach 10 ft., one creature. Hit:\
      \ 21 (4d6 + 7) poison damage, and the target is slimed. Until the slime is scraped\
      \ off with an action, the target is [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned),\
      \ and any creature, other than an Ooze, is [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned)\
      \ while within 10 feet of the target."
    "name": "Corrupting Touch (Costs 2 Actions)"
"lair_actions":
  - "desc": "On initiative count 20 (losing initiative ties), Juiblex can take one\
      \ of the following lair actions; it can't take the same lair action two rounds\
      \ in a row:"
    "name": ""
  - "desc": "- Green Slime. A [green slime](/3-Mechanics/CLI/Compendium/traps-hazards/green-slime.md)\
      \ (see the \"Dungeon Master's Guide\") appears on a spot on the ceiling that\
      \ Juiblex chooses within the lair. The slime disintegrates after 1 hour.  \n\
      - Slippery Slime. Juiblex slimes a square area of ground it can see within\
      \ the lair. The area can be up to 10 feet on a side. When the slime appears,\
      \ each creature on it must succeed on a DC 21 Dexterity saving throw or fall\
      \ [prone](/3-Mechanics/CLI/Rules/conditions.md#Prone) and slide 10 feet in a\
      \ random direction determined by a d8 roll. When a creature enters the area\
      \ for the first time on a turn or ends its turn there, that creature must make\
      \ the same save.  \n\n    The slime lasts for 1 hour or until it is burned away\
      \ with fire. If the slime is set on fire, it burns away after 1 round. Any creature\
      \ that starts its turn in the burning slime takes 22 (4d10) fire damage.  \n\
      - Sticky Slime. Juiblex slimes a square area of ground it can see within\
      \ the lair. The area can be up to 10 feet on a side. When the slime appears,\
      \ each creature in that area must succeed on a DC 21 Strength saving throw or\
      \ become [restrained](/3-Mechanics/CLI/Rules/conditions.md#Restrained). When\
      \ a creature enters the area for the first time on a turn or ends its turn there,\
      \ that creature must make the same save.  \n\n    A [restrained](/3-Mechanics/CLI/Rules/conditions.md#Restrained)\
      \ creature is stuck as long as it remains in the slimy area or until it breaks\
      \ free. The [restrained](/3-Mechanics/CLI/Rules/conditions.md#Restrained) creature,\
      \ or another creature that can reach it, can use its action to try to break\
      \ free and must succeed on a DC 21 Strength check. The slime lasts for 1 hour\
      \ or until it is burned away with fire. If the slime is set on fire, it burns\
      \ away after 1 round. Any creature that starts its turn in the burning slime\
      \ takes 22 (4d10) fire damage.  "
    "name": ""
"regional_effects":
  - "desc": "The region containing Juiblex's lair is warped by its magic, creating\
      \ one or more of the following effects:"
    "name": ""
  - "desc": "- Acidic Water. Small bodies of water, such as ponds or wells, within\
      \ 1 mile of the lair turn highly acidic, corroding any object that touches them.\
      \  \n- Corrupted Nature. Within 6 miles of the lair, all Wisdom ([Medicine](/3-Mechanics/CLI/Rules/skills.md#Medicine))\
      \ and Wisdom ([Survival](/3-Mechanics/CLI/Rules/skills.md#Survival)) checks\
      \ have disadvantage.  \n- Slime. Surfaces within 6 miles of the lair are\
      \ frequently covered by a thin film of slime, which is slick and sticks to anything\
      \ that touches it.  "
    "name": ""
  - "desc": "If Juiblex dies, these effects fade over the course of d10 days."
    "name": ""
"source":
  - "MPMM"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/juiblex-mpmm.webp"
```
^statblock