---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/11
- ttrpg-cli/monster/environment/coastal
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/elemental
statblock: inline
aliases: ["Marid (Wishes)"]
---
# [Marid (Wishes)](3-Mechanics\CLI\bestiary\elemental/marid-wishes.md)
*Source: Monster Manual p. 146*  

```statblock
"name": "Marid (Wishes)"
"size": "Large"
"type": "elemental"
"alignment": "Chaotic Neutral"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "229"
"hit_dice": "17d10 + 136"
"stats":
- !!int "22"
- !!int "12"
- !!int "26"
- !!int "18"
- !!int "17"
- !!int "18"
"speed": "30 ft., fly 60 ft., swim 90 ft."
"saves":
  "Charisma": !!int "8"
  "Dexterity": !!int "5"
  "Wisdom": !!int "7"
"damage_resistances": "acid, cold, lightning"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 13"
"languages": "Aquan"
"cr": "11"
"traits":
- "desc": "The marid's innate spellcasting ability is Charisma (spell save DC 16,\
    \ dice:1d20+8|noform|noparens|text(+8) to hit with spell attacks). It can innately\
    \ cast the following spells, requiring no material components:\n\nAt will:\
    \ [create or destroy water](3-Mechanics/CLI/spells/create-or-destroy-water.md),\
    \ [detect evil and good](3-Mechanics/CLI/spells/detect-evil-and-good.md), [detect\
    \ magic](3-Mechanics/CLI/spells/detect-magic.md), [fog cloud](3-Mechanics/CLI/spells/fog-cloud.md),\
    \ [purify food and drink](3-Mechanics/CLI/spells/purify-food-and-drink.md)\n\n\
    1/day each: [conjure elemental](3-Mechanics/CLI/spells/conjure-elemental.md)\
    \ ([water elemental](3-Mechanics/CLI/bestiary/elemental/water-elemental.md) only),\
    \ [control water](3-Mechanics/CLI/spells/control-water.md), [gaseous form](3-Mechanics/CLI/spells/gaseous-form.md),\
    \ [invisibility](3-Mechanics/CLI/spells/invisibility.md), [plane shift](3-Mechanics/CLI/spells/plane-shift.md)\n\
    \n3/day each: [tongues](3-Mechanics/CLI/spells/tongues.md), [water breathing](3-Mechanics/CLI/spells/water-breathing.md),\
    \ [water walk](3-Mechanics/CLI/spells/water-walk.md)"
  "name": "Innate Spellcasting"
- "desc": "The marid can breathe air and water."
  "name": "Amphibious"
- "desc": "If the marid dies, its body disintegrates into a burst of water and foam,\
    \ leaving behind only equipment the marid was wearing or carrying."
  "name": "Elemental Demise"
- "desc": "The genie power to grant wishes is legendary among mortals. Only the most\
    \ potent genies, such as those among the nobility, can do so. A particular genie\
    \ that has this power can grant one to three wishes to a creature that isn't a\
    \ genie. Once a genie has granted its limit of wishes, it can't grant wishes again\
    \ for some amount of time (usually 1 year), and cosmic law dictates that the same\
    \ genie can expend its limit of wishes on a specific creature only once in that\
    \ creature's existence.\n\nTo be granted a wish, a creature within 60 feet of\
    \ the genie states a desired effect to it. The genie can then cast the [wish](3-Mechanics/CLI/spells/wish.md)\
    \ spell on the creature's behalf to bring about the effect. Depending on the genie's\
    \ nature, the genie might try to pervert the intent of the wish by exploiting\
    \ the wish's poor wording. The perversion of the wording is usually crafted to\
    \ be to the genie's benefit."
  "name": "Wishes"
"actions":
- "desc": "The marid makes two trident attacks."
  "name": "Multiattack"
- "desc": "Melee or Ranged Weapon Attack: dice:1d20+10|noform|noparens|text(+10)\
    \ to hit, reach 5 ft. or range 20/60 ft., one target. Hit: dice:2d6+6|noform|noparens|avg|text(13)\
    \ (2d6 + 6) piercing damage, or dice:2d8+6|noform|noparens|avg|text(15) (2d8\
    \ + 6) piercing damage if used with two hands to make a melee attack."
  "name": "Trident"
- "desc": "The marid magically shoots water in a 60-foot line that is 5 feet wide.\
    \ Each creature in that line must make a DC 16 Dexterity saving throw. On a failure,\
    \ a target takes dice:6d6|noform|noparens|avg|text(21) (6d6) bludgeoning damage\
    \ and, if it is Huge or smaller, is pushed up to 20 feet away from the marid and\
    \ knocked [prone](3-Mechanics/CLI/rules/conditions.md#Prone). On a success, a\
    \ target takes half the bludgeoning damage, but is neither pushed nor knocked\
    \ [prone](3-Mechanics/CLI/rules/conditions.md#Prone)."
  "name": "Water Jet"
"source":
- "MM"
```
^statblock

## Environment

underwater, coastal