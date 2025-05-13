---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/tce
- ttrpg-cli/monster/cr/
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/fiend
statblock: inline
aliases: ["Fiendish Spirit (Demon)"]
---
# [Fiendish Spirit (Demon)](3-Mechanics\CLI\bestiary\fiend/fiendish-spirit-demon-tce.md)
*Source: Tasha's Cauldron of Everything p. 112*  

```statblock
"name": "Fiendish Spirit (Demon) (TCE)"
"size": "Large"
"type": "fiend"
"alignment": "Unaligned"
"ac_class": "12 + the level of the spell (natural armor)"
"stats":
- !!int "13"
- !!int "16"
- !!int "15"
- !!int "10"
- !!int "10"
- !!int "16"
"speed": "40 ft., climb 40 ft."
"damage_resistances": "fire"
"damage_immunities": "poison"
"condition_immunities": "[poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Abyssal, Infernal, telepathy 60 ft."
"traits":
- "desc": "The fiend has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "When the fiend drops to 0 hit points or the spell ends, the fiend explodes,\
    \ and each creature within 10 feet of it must make a Dexterity saving throw against\
    \ your spell save DC. A creature takes 2d10 + the spell's level fire damage\
    \ on a failed save, or half as much damage on a successful one."
  "name": "Death Throes"
"actions":
- "desc": "The fiend makes a number of attacks equal to half this spell's level (rounded\
    \ down)."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: YourSpellAttack to hit, reach 5 ft., one target.\
    \ Hit: 1d12 + 3 + the spell's level necrotic damage."
  "name": "Bite"
"source":
- "TCE"
```
^statblock