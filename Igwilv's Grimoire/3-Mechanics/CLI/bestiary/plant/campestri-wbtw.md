---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/0
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/plant
statblock: inline
aliases: ["Campestri"]
---
# [Campestri](3-Mechanics\CLI\bestiary\plant/campestri-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 232*  

Campestris are happy-go-lucky mushroom-like creatures with few cares or worries. They are captivated by music, though they can't distinguish a well-played performance from a bad one. If anyone plays an instrument or sings in the campestris' vicinity, the little creatures will happily sing along, each in an obnoxiously nasal falsetto, as they dance and caper around whoever is making the music.

Campestris can easily imitate lyrics and music. After a campestri has practiced a song or a piece of music three or four times, the creature remembers it forever.

Campestris vary widely in color, from white to tan to dark brown, but they always have red or purple caps and speckles. A campestri moves by manipulating the mycelium that grows out of the base of its stem and supports it. The mushroom creatures eat salty soil, filter out the salt, and excrete a slippery paste of purified soil (stripped of things nourishing to fungi, of course). Eating salt is also a defense mechanism, because it makes the campestris taste salty and thus unpleasant to most creatures, though bullywugs consider them a delicacy.

```statblock
"name": "Campestri (WBtW)"
"size": "Tiny"
"type": "plant"
"alignment": "Unaligned"
"ac": !!int "12"
"ac_class": "natural armor"
"hp": !!int "2"
"hit_dice": "1d4"
"stats":
- !!int "1"
- !!int "7"
- !!int "10"
- !!int "4"
- !!int "10"
- !!int "8"
"speed": "5 ft."
"skillsaves":
  "Perception": !!int "4"
"senses": "tremorsense 30 ft., passive Perception 14"
"languages": "understands Common but speaks only through the use of its Mimicry trait"
"cr": "0"
"traits":
- "desc": "The campestri can mimic any voice or song it has heard, albeit in a nasal\
    \ falsetto."
  "name": "Mimicry"
"actions":
- "desc": "Melee Weapon Attack: dice:1d20+0|noform|noparens|text(+0) to hit, reach\
    \ 5 ft., one target. Hit: 1 bludgeoning damage."
  "name": "Head Butt"
- "desc": "A 5-foot radius of spores extends from the campestri. These spores can\
    \ go around corners, and they have no effect on Constructs, Elementals, Plants,\
    \ or Undead. Each other creature in the area must make a DC 10 Wisdom saving throw.\
    \ On a failed save, the creature is [incapacitated](3-Mechanics/CLI/rules/conditions.md#Incapacitated)\
    \ and its speed is halved, both for 1 minute. A creature can repeat the saving\
    \ throw at the end of each of its turns, ending the effect on itself on a success."
  "name": "Spores (1/Day)"
"source":
- "WBtW"
"image": "3-Mechanics/CLI/bestiary/plant/token/campestri-wbtw.webp"
```
^statblock