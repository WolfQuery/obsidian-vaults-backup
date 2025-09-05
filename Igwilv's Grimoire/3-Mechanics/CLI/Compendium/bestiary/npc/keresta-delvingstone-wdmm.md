---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdmm
- ttrpg-cli/monster/cr/13
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead/shapechanger
statblock: inline
statblock-link: "#^statblock"
aliases:
- Keresta Delvingstone
---
# [Keresta Delvingstone](3-Mechanics\CLI\Compendium\bestiary\npc/keresta-delvingstone-wdmm.md)
*Source: Waterdeep: Dungeon of the Mad Mage p. 232*  

Keresta Delvingstone grew up in the streets of Waterdeep and is no stranger to hardship. Hoping to make a better life for herself, she became an adventurer and sought fame and fortune in Undermountain. Keresta met her end in the lair of a vampire and became a vampire spawn under its command.

After Vanrak destroyed the vampire and conquered its lair, he took Keresta under his wing. Consumed by darkness and loss, Keresta was drawn to Shar like a moth to a flame and rose to become a vampire cleric of the evil god. She now leads Shar's debased cult in Vanrakdoom and intends to send the group on a mission to destroy the Spires of the Morning, the temple of Lathander (god of birth and renewal) in Waterdeep. She also has her sights set on destroying the House of the Moon—Waterdeep's temple of Selûne, whom she blames for the destruction of Vanrak Moonstar.

```statblock
"name": "Keresta Delvingstone (WDMM)"
"size": "Medium"
"type": "undead"
"subtype": "shapechanger"
"alignment": "Lawful Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "144"
"hit_dice": "17d8 + 68"
"modifier": !!int "4"
"stats":
  - !!int "18"
  - !!int "18"
  - !!int "18"
  - !!int "17"
  - !!int "15"
  - !!int "18"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "9"
  - "wisdom": !!int "7"
  - "charisma": !!int "9"
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+7"
  - "name": "[Stealth](/3-Mechanics/CLI/Rules/skills.md#Stealth)"
    "desc": "+9"
"damage_resistances": "necrotic; bludgeoning, piercing, slashing from nonmagical attacks"
"senses": "darkvision 120 ft., passive Perception 17"
"languages": "the languages it knew in life"
"cr": "13"
"traits":
  - "desc": "Keresta is a 9th-level spellcaster. Her spellcasting ability is Wisdom\
      \ (spell save DC 15, +7 to hit with spell attacks). She has the following cleric\
      \ spells prepared:\n\nCantrips (at will): [guidance](/3-Mechanics/CLI/Compendium/spells/guidance.md),\
      \ [mending](/3-Mechanics/CLI/Compendium/spells/mending.md), [resistance](/3-Mechanics/CLI/Compendium/spells/resistance.md),\
      \ [thaumaturgy](/3-Mechanics/CLI/Compendium/spells/thaumaturgy.md)\n\n1st\
      \ level (4 slots): [bane](/3-Mechanics/CLI/Compendium/spells/bane.md), [command](/3-Mechanics/CLI/Compendium/spells/command.md),\
      \ [inflict wounds](/3-Mechanics/CLI/Compendium/spells/inflict-wounds.md), [ray\
      \ of sickness](/3-Mechanics/CLI/Compendium/spells/ray-of-sickness.md)\n\n2nd\
      \ level (3 slots): [blindness/deafness](/3-Mechanics/CLI/Compendium/spells/blindness-deafness.md),\
      \ [ray of enfeeblement](/3-Mechanics/CLI/Compendium/spells/ray-of-enfeeblement.md),\
      \ [spiritual weapon](/3-Mechanics/CLI/Compendium/spells/spiritual-weapon.md)\n\
      \n3rd level (3 slots): [animate dead](/3-Mechanics/CLI/Compendium/spells/animate-dead.md),\
      \ [bestow curse](/3-Mechanics/CLI/Compendium/spells/bestow-curse.md), [dispel\
      \ magic](/3-Mechanics/CLI/Compendium/spells/dispel-magic.md), [spirit guardians](/3-Mechanics/CLI/Compendium/spells/spirit-guardians.md)\n\
      \n4th level (3 slots): [blight](/3-Mechanics/CLI/Compendium/spells/blight.md),\
      \ [death ward](/3-Mechanics/CLI/Compendium/spells/death-ward.md), [divination](/3-Mechanics/CLI/Compendium/spells/divination.md)\n\
      \n5th level (1 slots): [antilife shell](/3-Mechanics/CLI/Compendium/spells/antilife-shell.md),\
      \ [destructive wave](/3-Mechanics/CLI/Compendium/spells/destructive-wave.md)"
    "name": "Spellcasting"
  - "desc": "If Keresta isn't in sunlight or running water, it can use its action\
      \ to polymorph into a Tiny bat or a Medium cloud of mist, or back into its true\
      \ form.\n\nWhile in bat form, Keresta can't speak, its walking speed is 5 feet,\
      \ and it has a flying speed of 30 feet. Its statistics, other than its size\
      \ and speed, are unchanged. Anything it is wearing transforms with it, but nothing\
      \ it is carrying does. It reverts to its true form if it dies.\n\nWhile in mist\
      \ form, Keresta can't take any actions, speak, or manipulate objects. It is\
      \ weightless, has a flying speed of 20 feet, can hover, and can enter a hostile\
      \ creature's space and stop there. In addition, if air can pass through a space,\
      \ the mist can do so without squeezing, and it can't pass through water. It\
      \ has advantage on Strength, Dexterity, and Constitution saving throws, and\
      \ it is immune to all nonmagical damage, except the damage it takes from sunlight."
    "name": "Shapechanger"
  - "desc": "If Keresta fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "When it drops to 0 hit points outside its resting place, Keresta transforms\
      \ into a cloud of mist (as in the Shapechanger trait) instead of falling [unconscious](/3-Mechanics/CLI/Rules/conditions.md#Unconscious),\
      \ provided that it isn't in sunlight or running water. If it can't transform,\
      \ it is destroyed.\n\nWhile it has 0 hit points in mist form, it can't revert\
      \ to its vampire form, and it must reach its resting place within 2 hours or\
      \ be destroyed. Once in its resting place, it reverts to its vampire form. It\
      \ is then [paralyzed](/3-Mechanics/CLI/Rules/conditions.md#Paralyzed) until\
      \ it regains at least 1 hit point. After spending 1 hour in its resting place\
      \ with 0 hit points, it regains 1 hit point."
    "name": "Misty Escape"
  - "desc": "Keresta regains 20 hit points at the start of its turn if it has at least\
      \ 1 hit point and isn't in sunlight or running water. If Keresta takes radiant\
      \ damage or damage from holy water, this trait doesn't function at the start\
      \ of Keresta's next turn."
    "name": "Regeneration"
  - "desc": "Keresta can climb difficult surfaces, including upside down on ceilings,\
      \ without needing to make an ability check."
    "name": "Spider Climb"
  - "desc": "Keresta has the following flaws:\n\n- Forbiddance. Keresta can't\
      \ enter a residence without an invitation from one of the occupants.  \n- Harmed\
      \ by Running Water. Keresta takes 20 acid damage if it ends its turn in running\
      \ water.  \n- Stake to the Heart. If a piercing weapon made of wood is driven\
      \ into Keresta's heart while Keresta is [incapacitated](/3-Mechanics/CLI/Rules/conditions.md#Incapacitated)\
      \ in its resting place, Keresta is [paralyzed](/3-Mechanics/CLI/Rules/conditions.md#Paralyzed)\
      \ until the stake is removed.  \n- Sunlight Hypersensitivity. Keresta takes\
      \ 20 radiant damage when it starts its turn in sunlight. While in sunlight,\
      \ it has disadvantage on attack rolls and ability checks.  "
    "name": "Vampire Weaknesses"
"actions":
  - "desc": "Keresta makes two attacks, only one of which can be a bite attack."
    "name": "Multiattack (Vampire Form Only)"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one creature. Hit: 8\
      \ (1d8 + 4) bludgeoning damage. Instead of dealing damage, Keresta can grapple\
      \ the target (escape DC 18)."
    "name": "Unarmed Strike (Vampire Form Only)"
  - "desc": "Melee Weapon Attack: +9 to hit, reach 5 ft., one willing creature,\
      \ or a creature that is [grappled](/3-Mechanics/CLI/Rules/conditions.md#Grappled)\
      \ by Keresta, [incapacitated](/3-Mechanics/CLI/Rules/conditions.md#Incapacitated),\
      \ or [restrained](/3-Mechanics/CLI/Rules/conditions.md#Restrained). Hit: 7\
      \ (1d6 + 4) piercing damage plus 10 (3d6) necrotic damage. The target's hit\
      \ point maximum is reduced by an amount equal to the necrotic damage taken,\
      \ and Keresta regains hit points equal to that amount. The reduction lasts until\
      \ the target finishes a long rest. The target dies if this effect reduces its\
      \ hit point maximum to 0. A humanoid slain in this way and then buried in the\
      \ ground rises the following night as a [vampire spawn](/3-Mechanics/CLI/Compendium/bestiary/undead/vampire-spawn.md)\
      \ under Keresta's control."
    "name": "Bite (Bat or Vampire Form Only)"
  - "desc": "Keresta targets one humanoid it can see within 30 feet of it. If the\
      \ target can see Keresta, the target must succeed on a DC 17 Wisdom saving throw\
      \ against this magic or be [charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed)\
      \ by Keresta. The [charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed) target\
      \ regards Keresta as a trusted friend to be heeded and protected. Although the\
      \ target isn't under Keresta's control, it takes Keresta's requests or actions\
      \ in the most favorable way it can, and it is a willing target for Keresta's\
      \ bite attack.\n\nEach time Keresta or Keresta's companions do anything harmful\
      \ to the target, it can repeat the saving throw, ending the effect on itself\
      \ on a success. Otherwise, the effect lasts 24 hours or until Keresta is destroyed,\
      \ is on a different plane of existence than the target, or takes a bonus action\
      \ to end the effect."
    "name": "Charm"
  - "desc": "The vampire magically calls 2d4 swarms of [bats](/3-Mechanics/CLI/Compendium/bestiary/beast/swarm-of-bats.md)\
      \ or [rats](/3-Mechanics/CLI/Compendium/bestiary/beast/swarm-of-rats.md), provided\
      \ that the sun isn't up. While outdoors, the vampire can call 3d6 [giant centipedes](/3-Mechanics/CLI/Compendium/bestiary/beast/giant-centipede.md)\
      \ instead. The called creatures arrive in d4 rounds, acting as allies of the\
      \ vampire and obeying its spoken commands. The beasts remain for 1 hour, until\
      \ the vampire dies, or until the vampire dismisses them as a bonus action."
    "name": "Children of the Night (1/Day)"
"legendary_actions":
  - "desc": "Keresta moves up to its speed without provoking opportunity attacks."
    "name": "Move"
  - "desc": "Keresta makes one unarmed strike."
    "name": "Unarmed Strike"
  - "desc": "Keresta makes one bite attack."
    "name": "Bite (Costs 2 Actions)"
"regional_effects":
  - "desc": "Vanrakdoom is Keresta's lair, and the following regional effects are\
      \ noticeable throughout it:"
    "name": ""
  - "desc": "- Fog creeps into areas of dim light or darkness. It vanishes when light\
      \ is brought to bear on it but reappears when the light passes. A permanent\
      \ fog hangs in some areas regardless of light, as noted in the descriptions\
      \ of those areas.  \n- Rats and bats are plentiful. In areas where they are\
      \ not specifically mentioned, droppings and guano betray their presence, and\
      \ they can be heard constantly scuttling and shrieking in the distant darkness.\
      \  "
    "name": ""
  - "desc": "If Keresta is destroyed, the fog disperses, and the rats and bats gradually\
      \ die off until only a scattered few remain."
    "name": ""
"source":
  - "WDMM"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/keresta-delvingstone-wdmm.webp"
```
^statblock