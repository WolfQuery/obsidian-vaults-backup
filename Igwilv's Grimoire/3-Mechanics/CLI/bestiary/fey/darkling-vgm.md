---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/vgm
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/swamp
- ttrpg-cli/monster/environment/underdark
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/fey
statblock: inline
aliases: ["Darkling"]
---
# [Darkling](3-Mechanics\CLI\bestiary\fey/darkling-vgm.md)
*Source: Volo's Guide to Monsters p. 134, The Wild Beyond the Witchlight*  

Ancient legends speak of a seelie fey who betrayed the Summer Queen. His true name has been stricken from history, but the stories call him Dubh Catha ("Dark Crow" in Common). So great was the Summer Queen's wrath that she cursed every member of his house. Other fey refer to the descendants of Dubh Catha's house as the dubh sith-or, in Common, "darklings." Darklings most often settle in secluded caverns and chambers beneath the towns of other species. From such enclaves, they quietly ply their trade as thieves and assassins.

## The Killing Light

The Summer Queen's curse causes a darkling's body to absorb light, and doing so wizens the creature, much like the effect of rapid aging. For this reason, darklings cover every part of their body with clothing when exposure to light is a risk. The light a darkling absorbs over the course of its lifetime explodes outward when the darkling dies, incinerating the creature and much of its possessions.

## Love of Art

Despite their curse, darklings retain a fondness for the beauty of art. A darkling might risk taking a peek at a sunset or lighting a tiny candle to glimpse the colors in a painting or a jewel.

## Elder Transformation

A wise and respected darkling can qualify to undergo a ritual to become an elder. Other elders mark the supplicant with glowing tattoos, channeling some of the darkling's absorbed light away from its body. If the ritual succeeds, the darkling grows into a tall and fair form, like that of a gray-skinned elf. The darkling perishes if the ritual fails.

```statblock
"name": "Darkling (VGM)"
"size": "Small"
"type": "fey"
"alignment": "Chaotic Neutral"
"ac": !!int "14"
"ac_class": "[leather armor](3-Mechanics/CLI/items/leather-armor.md)"
"hp": !!int "13"
"hit_dice": "3d6 + 3"
"stats":
- !!int "9"
- !!int "16"
- !!int "12"
- !!int "10"
- !!int "12"
- !!int "10"
"speed": "30 ft."
"skillsaves":
  "Deception": !!int "2"
  "Stealth": !!int "7"
  "Perception": !!int "5"
  "Acrobatics": !!int "5"
"senses": "blindsight 30 ft., darkvision 120 ft., passive Perception 15"
"languages": "Elvish, Sylvan"
"cr": "1/2"
"traits":
- "desc": "When the darkling dies, nonmagical light flashes out from it in a 10-foot\
    \ radius as its body and possessions, other than metal or magic objects, burn\
    \ to ash. Any creature in that area and able to see the bright light must succeed\
    \ on a DC 10 Constitution saving throw or be [blinded](3-Mechanics/CLI/rules/conditions.md#Blinded)\
    \ until the end of the creature's next turn."
  "name": "Death Flash"
- "desc": "While in bright light, the darkling has disadvantage on attack rolls, as\
    \ well as on Wisdom ([Perception](3-Mechanics/CLI/rules/skills.md#Perception))\
    \ checks that rely on sight."
  "name": "Light Sensitivity"
"actions":
- "desc": "Melee or Ranged Weapon Attack: dice:1d20+5|noform|noparens|text(+5)\
    \ to hit, reach 5 ft. or range 20/60 ft., one target. Hit: dice:1d4+3|noform|noparens|avg|text(5)\
    \ (1d4 + 3) piercing damage. If the darkling has advantage on the attack roll,\
    \ the attack deals an extra dice:2d6|noform|noparens|avg|text(7) (2d6) piercing\
    \ damage."
  "name": "Dagger"
"source":
- "VGM"
- "WBtW"
"image": "3-Mechanics/CLI/bestiary/fey/token/darkling-vgm.webp"
```
^statblock

## Environment

underdark, forest, swamp, urban