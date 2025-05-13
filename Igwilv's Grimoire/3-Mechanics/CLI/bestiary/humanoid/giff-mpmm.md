---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
aliases: ["Giff"]
---
# [Giff](3-Mechanics\CLI\bestiary\humanoid/giff-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 138*  

> [!quote] A quote from Mordenkainen  
> 
> My travels in Wildspace are always brightened by my giff associates. Their use of gunpowder reminds me of my own explosive wizardry. Spectacular!

It's easy to spot giff in a room: these burly folk are 7-foot-tall, hippopotamus-headed people. In Wildspace and the associated ports, giff are most often encountered as spacefaring mercenaries. These troops are renowned for their martial training and love of explosives and are typically armed with gleaming pistols and muskets. The stat block here represents one of those mercenaries.

Every aspect of these spacefaring giff's society is organized along military lines. From birth until death, each has a military rank. Promotions don't depend on age but are granted by a superior as a reward for valor.

Muskets and grenades are the specialties of many giff regiments. The bigger the boom, the brighter the flash, and the thicker the smoke it produces, the greater the glory for the one wielding the weapon. Giff mercenaries have been known to accept payment in kegs of gunpowder in preference to gold, gems, or other currency.

## Gunpowder by the Keg

In addition to their personal gunpowder weapons, giff ships and mercenary companies carry spare gunpowder in kegs. In an emergency, or if a large explosion is needed, a whole keg can be detonated. A giff lights the fuse on the keg and can then throw the keg up to 15 feet as part of the same action. The keg explodes at the start of the giff's next turn. Each creature within 20 feet of the exploding keg must make a DC 12 Dexterity saving throw. On a failed save, a creature takes `dice:7d6|noform|noparens|avg|text(24)` (`7d6`) fire damage and is knocked [prone](3-Mechanics/CLI/rules/conditions.md#Prone). On a successful save, a creature takes half as much damage and isn't knocked [prone](3-Mechanics/CLI/rules/conditions.md#Prone).

Every other keg of gunpowder within 20 feet of an exploding keg has a 50 percent chance of also exploding. Check each keg only once per turn, no matter how many other kegs explode around it.

```statblock
"name": "Giff (MPMM)"
"size": "Medium"
"type": "humanoid"
"alignment": "Any alignment"
"ac": !!int "16"
"ac_class": "[breastplate](3-Mechanics/CLI/items/breastplate.md)"
"hp": !!int "60"
"hit_dice": "8d8 + 24"
"stats":
- !!int "18"
- !!int "14"
- !!int "17"
- !!int "11"
- !!int "12"
- !!int "12"
"speed": "30 ft."
"senses": "passive Perception 11"
"languages": "Common"
"cr": "3"
"traits":
- "desc": "The giff's mastery of its weapons enables it to ignore the loading property\
    \ of muskets and pistols."
  "name": "Firearms Knowledge"
- "desc": "The giff can try to knock a creature over; if the giff moves at least 20\
    \ feet in a straight line and ends within 5 feet of a Large or smaller creature,\
    \ that creature must succeed on a DC 14 Strength saving throw or take dice:2d6|noform|noparens|avg|text(7)\
    \ (2d6) bludgeoning damage and be knocked [prone](3-Mechanics/CLI/rules/conditions.md#Prone)."
  "name": "Headfirst Charge"
"actions":
- "desc": "The giff makes two Longsword, Musket, or Pistol attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice:1d20+6|noform|noparens|text(+6) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d8+4|noform|noparens|avg|text(8) (1d8 + 4)\
    \ slashing damage, or dice:1d10+4|noform|noparens|avg|text(9) (1d10 + 4) slashing\
    \ damage if used with two hands."
  "name": "Longsword"
- "desc": "Ranged Weapon Attack: dice:1d20+4|noform|noparens|text(+4) to hit,\
    \ range 40/120 ft., one target. Hit: dice:1d12+2|noform|noparens|avg|text(8)\
    \ (1d12 + 2) piercing damage."
  "name": "Musket"
- "desc": "Ranged Weapon Attack: dice:1d20+4|noform|noparens|text(+4) to hit,\
    \ range 30/90 ft., one target. Hit: dice:1d10+2|noform|noparens|avg|text(7)\
    \ (1d10 + 2) piercing damage."
  "name": "Pistol"
- "desc": "The giff throws a grenade up to 60 feet, and the grenade explodes in a\
    \ 20-foot-radius sphere. Each creature in that area must make a DC 15 Dexterity\
    \ saving throw, taking dice:5d6|noform|noparens|avg|text(17) (5d6) piercing\
    \ damage on a failed save, or half as much damage on a successful one."
  "name": "Fragmentation Grenade (1/Day)"
"source":
- "MPMM"
"image": "3-Mechanics/CLI/bestiary/humanoid/token/giff-mpmm.webp"
```
^statblock

## Environment

urban