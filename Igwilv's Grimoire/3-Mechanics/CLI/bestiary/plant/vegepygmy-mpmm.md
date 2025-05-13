---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/plant
statblock: inline
aliases: ["Vegepygmy"]
---
# [Vegepygmy](3-Mechanics\CLI\bestiary\plant/vegepygmy-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 252*  

Typical vegepygmies originate from the remains left behind when a Humanoid or a Giant is killed by [russet mold](3-Mechanics/CLI/traps-hazards/russet-mold-vgm.md). One or more vegepygmies emerge from the corpse a day later.

## Vegepygmies

Vegepygmies are fungus creatures that live in simple bands, hunting for sustenance and spreading the spores by which they reproduce. Also called mold folk or moldies, vegepygmies inhabit dark, moist areas, so they're most commonly found underground or in forests where little sunlight penetrates. A vegepygmy feels kinship with other plant and fungus creatures, and thus vegepygmy bands coexist well with creatures such as [myconid adults](3-Mechanics/CLI/bestiary/plant/myconid-adult.md), [shriekers](3-Mechanics/CLI/bestiary/plant/shrieker.md), and [violet fungi](3-Mechanics/CLI/bestiary/plant/violet-fungus.md).

Although they prefer to eat fresh meat, bone, and blood, vegepygmies can absorb nutrients from soil and many sorts of organic matter, so they rarely go hungry. A vegepygmy can hiss and make other noises by forcing air through its mouth, but it can't speak in a conventional sense. Among themselves, vegepygmies communicate by hissing, gestures, and tapping. Vegepygmies build and craft little; any gear they have is acquired from other creatures or built by copying simple construction they have witnessed.

```statblock
"name": "Vegepygmy (MPMM)"
"size": "Small"
"type": "plant"
"alignment": "Typically  Neutral"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "13"
"hit_dice": "3d6 + 3"
"stats":
- !!int "7"
- !!int "14"
- !!int "13"
- !!int "6"
- !!int "11"
- !!int "7"
"speed": "30 ft."
"skillsaves":
  "Stealth": !!int "4"
  "Perception": !!int "2"
"damage_resistances": "lightning, piercing"
"senses": "darkvision 60 ft., passive Perception 12"
"languages": "Vegepygmy"
"cr": "1/4"
"traits":
- "desc": "The vegepygmy has advantage on Dexterity ([Stealth](3-Mechanics/CLI/rules/skills.md#Stealth))\
    \ checks it makes in any terrain with ample obscuring vegetation."
  "name": "Plant Camouflage"
- "desc": "The vegepygmy regains 3 hit points at the start of its turn. If it takes\
    \ cold, fire, or necrotic damage, this trait doesn't function at the start of\
    \ the vegepygmy's next turn. The vegepygmy dies only if it starts its turn with\
    \ 0 hit points and doesn't regenerate."
  "name": "Regeneration"
"actions":
- "desc": "Melee Weapon Attack: dice:1d20+4|noform|noparens|text(+4) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d6+2|noform|noparens|avg|text(5) (1d6 + 2)\
    \ slashing damage."
  "name": "Claws"
- "desc": "Ranged Weapon Attack: dice:1d20+4|noform|noparens|text(+4) to hit,\
    \ range 30/120 ft., one target. Hit: dice:1d4+2|noform|noparens|avg|text(4)\
    \ (1d4 + 2) bludgeoning damage."
  "name": "Sling"
"source":
- "MPMM"
"image": "3-Mechanics/CLI/bestiary/plant/token/vegepygmy-mpmm.webp"
```
^statblock

## Environment

forest, swamp