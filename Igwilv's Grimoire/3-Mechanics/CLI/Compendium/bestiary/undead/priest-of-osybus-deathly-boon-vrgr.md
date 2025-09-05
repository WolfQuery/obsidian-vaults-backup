---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/vrgr
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Priest of Osybus (Deathly Boon)
---
# [Priest of Osybus (Deathly Boon)](3-Mechanics\CLI\Compendium\bestiary\undead/priest-of-osybus-deathly-boon-vrgr.md)
*Source: Van Richten's Guide to Ravenloft p. 241*  

```statblock
"name": "Priest of Osybus (Deathly Boon) (VRGR)"
"size": "Medium"
"type": "undead"
"alignment": "Unaligned"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "60"
"hit_dice": "8d8 + 24"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "14"
  - !!int "16"
  - !!int "18"
  - !!int "17"
  - !!int "11"
"speed": "30 ft."
"saves":
  - "intelligence": !!int "7"
  - "wisdom": !!int "6"
  - "charisma": !!int "3"
"condition_immunities": "[frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened)"
"senses": "darkvision 120 ft., passive Perception 13"
"languages": "any three languages"
"cr": "7"
"traits":
  - "desc": "If the priest drops to 0 hit points, roll on the Boons of Undeath table\
      \ for the boon the priest receives. The priest dies if it receives a boon it\
      \ already has. If it receives a new boon, it revives at the start of its next\
      \ turn with half its hit points restored, and its creature type is now Undead.\n\
      \nTo prevent this revival, the Tattoo of Osybus on the priest's body must be\
      \ destroyed. The tattoo is invulnerable while the priest has at least 1 hit\
      \ point. The tattoo is otherwise an object with AC 15, and it is immune to poison\
      \ and psychic damage. It has 15 hit points, but it regains all its hit points\
      \ at the end of every combatant's turn."
    "name": "Tattoo of Osybus"
"actions":
  - "desc": "The priest attacks twice."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (2d4\
      \ + 2) piercing damage, and if the target is a creature, it is [paralyzed](/3-Mechanics/CLI/Rules/conditions.md#Paralyzed)\
      \ until the start of the priest's next turn. If this damage reduces a Medium\
      \ or smaller creature to 0 hit points, the creature dies, and its soul is trapped\
      \ in the priest's body, manifesting as a shadowy Soul Tattoo on the priest.\
      \ The soul is freed if the priest dies."
    "name": "Soul Blade"
  - "desc": "Ranged Spell Attack: +7 to hit, range 120 ft., one target. Hit: 17\
      \ (3d8 + 4) necrotic damage, and the target can't regain hit points until the\
      \ start of the priest's next turn."
    "name": "Necrotic Bolt"
  - "desc": "Each creature in a 60-foot-radius sphere centered on a point the priest\
      \ can see within 150 feet of it must make a DC 15 Constitution saving throw,\
      \ taking 28 (8d6) necrotic damage on a failed save, or half as much damage on\
      \ a successful one.)"
    "name": "Circle of Death (Spell; (Recharge 5|m-6))"
  - "desc": "The priest casts one of the following spells, requiring no components\
      \ and using Intelligence as the spellcasting ability (spell save DC 15):\n\n\
      1/day each: [animate dead](/3-Mechanics/CLI/Compendium/spells/animate-dead.md),\
      \ [create undead](/3-Mechanics/CLI/Compendium/spells/create-undead.md)"
    "name": "Innate Spellcasting"
"bonus_actions":
  - "desc": "The priest touches one of the Soul Tattoos on its body. The tattoo vanishes\
      \ as the trapped soul manifests as a shadowy creature that appears in an unoccupied\
      \ space the priest can see within 30 feet of it. The creature has the size and\
      \ silhouette of its original body, but it otherwise uses the stat block of a\
      \ shadow.\n\nThe shadow obeys the priest's mental commands (no action required)\
      \ and takes its turn immediately after the priest. If the creature is within\
      \ 5 feet of the priest, it can turn back into a tattoo as an action, reappearing\
      \ on the priest's flesh and regaining all its hit points."
    "name": "Soul Tattoo (Recharge 5-6)"
"source":
  - "VRGR"
```
^statblock