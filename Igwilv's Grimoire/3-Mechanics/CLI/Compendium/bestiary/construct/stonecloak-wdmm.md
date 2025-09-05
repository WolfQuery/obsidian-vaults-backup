---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdmm
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/construct
statblock: inline
statblock-link: "#^statblock"
aliases:
- Stonecloak
---
# [Stonecloak](3-Mechanics\CLI\Compendium\bestiary\construct/stonecloak-wdmm.md)
*Source: Waterdeep: Dungeon of the Mad Mage p. 253*  

Stone golems are magical constructs cut and chiseled from stone to appear as tall, impressive statues. Like other golems, they are nearly impervious to spells and ordinary weapons.

Halaster created stone golems in his own likeness and used fragments of the Runestone to imbue them with intelligence. Then he set them loose on this level. Called Stonecloaks, these 10-foot-tall golems worship the Mad Mage as a god and regard the Runestone as his eye into their dark domain.

```statblock
"name": "Stonecloak (WDMM)"
"size": "Large"
"type": "construct"
"alignment": "Unaligned"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "178"
"hit_dice": "17d10 + 85"
"modifier": !!int "-1"
"stats":
  - !!int "22"
  - !!int "9"
  - !!int "20"
  - !!int "9"
  - !!int "11"
  - !!int "9"
"speed": "30 ft."
"damage_immunities": "poison; psychic; bludgeoning, piercing, slashing from nonmagical\
  \ attacks that aren't adamantine"
"condition_immunities": "[charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed),\
  \ [exhaustion](/3-Mechanics/CLI/Rules/conditions.md#Exhaustion), [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened),\
  \ [paralyzed](/3-Mechanics/CLI/Rules/conditions.md#Paralyzed), [petrified](/3-Mechanics/CLI/Rules/conditions.md#Petrified),\
  \ [poisoned](/3-Mechanics/CLI/Rules/conditions.md#Poisoned)"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "understands Abyssal, Celestial, Common, Draconic, Dwarvish, Elvish,\
  \ Infernal, and Undercommon but can't speak"
"cr": "10"
"traits":
  - "desc": "The stonecloak is immune to any spell or effect that would alter its\
      \ form."
    "name": "Immutable Form"
  - "desc": "The stonecloak has advantage on saving throws against spells and other\
      \ magical effects."
    "name": "Magic Resistance"
  - "desc": "The stonecloak's weapon attacks are magical."
    "name": "Magic Weapons"
"actions":
  - "desc": "The stonecloak makes two slam attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 19\
      \ (3d8 + 6) bludgeoning damage."
    "name": "Slam"
  - "desc": "The stonecloak targets one or more creatures it can see within 10 feet\
      \ of it. Each target must make a DC 17 Wisdom saving throw against this magic.\
      \ On a failed save, a target can't use reactions, its speed is halved, and it\
      \ can't make more than one attack on its turn. In addition, the target can take\
      \ either an action or a bonus action on its turn, not both. These effects last\
      \ for 1 minute. A target can repeat the saving throw at the end of each of its\
      \ turns, ending the effect on itself on a success."
    "name": "Slow (Recharge 5-6)"
"source":
  - "WDMM"
"image": "/3-Mechanics/CLI/Compendium/bestiary/construct/token/stonecloak-wdmm.webp"
```
^statblock