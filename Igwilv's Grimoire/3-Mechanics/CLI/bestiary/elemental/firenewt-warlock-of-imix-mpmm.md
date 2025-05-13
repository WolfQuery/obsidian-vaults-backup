---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/hill
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/elemental
statblock: inline
aliases: ["Firenewt Warlock of Imix"]
---
# [Firenewt Warlock of Imix](3-Mechanics\CLI\bestiary\elemental/firenewt-warlock-of-imix-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 125*  

Firenewts who serve Imix, Prince of Evil Fire, live in militaristic theocracies that revere elemental fire in its most destructive incarnation and promote aggression and cruelty. Firenewt warlocks of Imix lead these theocracies or serve as advisors to a high priest.

## Firenewts

Originally from the Elemental Plane of Fire, firenewts can be found on the Material Plane near hot springs and volcanoes. These amphibians need hot water to live, becoming sluggish after spending a week away from a source of moist heat. Firenewts therefore delve for sources of heat in the earth, and a firenewt lair features a network of channels and sluices to circulate hot liquid through the area.

```statblock
"name": "Firenewt Warlock of Imix (MPMM)"
"size": "Medium"
"type": "elemental"
"alignment": "Typically  Neutral Evil"
"ac": !!int "10"
"hp": !!int "33"
"hit_dice": "6d8 + 6"
"stats":
- !!int "13"
- !!int "11"
- !!int "12"
- !!int "9"
- !!int "11"
- !!int "14"
"speed": "30 ft."
"damage_immunities": "fire"
"senses": "darkvision 120 ft., passive Perception 10"
"languages": "Draconic, Ignan"
"cr": "1"
"traits":
- "desc": "The firenewt casts one of the following spells, using Charisma as the spellcasting\
    \ ability (spell save DC 12):\n\nAt will: [guidance](3-Mechanics/CLI/spells/guidance.md),\
    \ [light](3-Mechanics/CLI/spells/light.md), [mage armor](3-Mechanics/CLI/spells/mage-armor.md),\
    \ [mage hand](3-Mechanics/CLI/spells/mage-hand.md), [prestidigitation](3-Mechanics/CLI/spells/prestidigitation.md)"
  "name": "Spellcasting"
- "desc": "The firenewt can breathe air and water."
  "name": "Amphibious"
- "desc": "Magical darkness doesn't impede the firenewt's [darkvision](3-Mechanics/CLI/rules/senses.md#Darkvision)."
  "name": "Devil's Sight"
- "desc": "When the firenewt reduces an enemy to 0 hit points, the firenewt gains\
    \ 5 temporary hit points."
  "name": "Imix's Blessing"
"actions":
- "desc": "The firenewt makes three Morningstar or Fire Ray attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice:1d20+3|noform|noparens|text(+3) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d8+1|noform|noparens|avg|text(5) (1d8 + 1)\
    \ piercing damage."
  "name": "Morningstar"
- "desc": "Ranged Spell Attack: dice:1d20+4|noform|noparens|text(+4) to hit, range\
    \ 120 ft., one target. Hit: dice:1d6+2|noform|noparens|avg|text(5) (1d6 +\
    \ 2) fire damage."
  "name": "Fire Ray"
"source":
- "MPMM"
"image": "3-Mechanics/CLI/bestiary/elemental/token/firenewt-warlock-of-imix-mpmm.webp"
```
^statblock

## Environment

hill, mountain, underdark