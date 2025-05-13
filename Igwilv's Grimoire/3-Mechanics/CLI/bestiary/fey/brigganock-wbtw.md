---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wbtw
- ttrpg-cli/monster/cr/1-8
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/fey
statblock: inline
aliases: ["Brigganock"]
---
# [Brigganock](3-Mechanics\CLI\bestiary\fey/brigganock-wbtw.md)
*Source: The Wild Beyond the Witchlight p. 230*  

Brigganocks are frantic, mouse-sized creatures that live in mines. Whenever a mortal makes a nonmagical wish, perhaps while blowing out the candles on a birthday cake or tossing a coin down a well, an echo of that wish becomes lodged in a stone buried deep in the earth of the Feywild. Brigganocks seek out these wish stones, discarding the ones that contain wishes of ill intent and keeping those that hold good wishes. Brigganocks refine wish stones into gems and use them to decorate their architecture and crafts, or they trade them to other Fey for food and favors. A more powerful Fey creature can use a wish stone to scry on the maker of the wish, empower a supernatural charm, or provide the spark needed to create an animated object. Other uses are possible as well.

A brigganock's soul lives outside its body, manifesting as a bulb of pale light that floats alongside it and helps the brigganock see in the dark. Brigganocks have minor spellcasting abilities that help them survive. They also have the ability to manipulate time, allowing them to accomplish hour-long tasks in a matter of seconds, though a brigganock must rest between these bursts of temporal acceleration.

Brigganocks like to nibble on cheese, lettuce, and other soft foods. They eat quite a lot for creatures of their size and never turn down a good meal.

```statblock
"name": "Brigganock (WBtW)"
"size": "Tiny"
"type": "fey"
"alignment": "typically  Neutral Good"
"ac": !!int "12"
"hp": !!int "9"
"hit_dice": "2d4 + 4"
"stats":
- !!int "4"
- !!int "15"
- !!int "14"
- !!int "10"
- !!int "11"
- !!int "13"
"speed": "15 ft."
"saves":
  "Dexterity": !!int "4"
  "Constitution": !!int "4"
"condition_immunities": "[exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion)"
"senses": "passive Perception 10"
"languages": "Common, Sylvan"
"cr": "1/8"
"traits":
- "desc": "The brigganock casts one of the following spells, requiring no material\
    \ components and using Charisma as the spellcasting ability (spell save DC 11):\n\
    \nAt will: [minor illusion](3-Mechanics/CLI/spells/minor-illusion.md), [spare\
    \ the dying](3-Mechanics/CLI/spells/spare-the-dying.md)\n\n1/day each: [animal\
    \ friendship](3-Mechanics/CLI/spells/animal-friendship.md), [faerie fire](3-Mechanics/CLI/spells/faerie-fire.md),\
    \ [meld into stone](3-Mechanics/CLI/spells/meld-into-stone.md), [silence](3-Mechanics/CLI/spells/silence.md)"
  "name": "Spellcasting"
- "desc": "The brigganock has advantage on saving throws against being [charmed](3-Mechanics/CLI/rules/conditions.md#Charmed),\
    \ and magic can't put it to sleep."
  "name": "Fey Ancestry"
- "desc": "The brigganock is accompanied by an insubstantial, invulnerable ball of\
    \ light that contains its soul. The brigganock can't turn off the light or control\
    \ its brightness. The soul light sheds bright light in a 10-foot radius and dim\
    \ light for an additional 10 feet. If the brigganock dies, its soul light fades\
    \ away."
  "name": "Soul Light"
- "desc": "Using a pickaxe or similar tool, a brigganock can burrow through solid\
    \ rock at a speed of 5 feet, leaving a 6-inch-diameter tunnel in its wake."
  "name": "Tunneler"
"actions":
- "desc": "Melee Weapon Attack: dice:1d20+4|noform|noparens|text(+4) to hit, reach\
    \ 5 ft., one target. Hit: dice:1d4+2|noform|noparens|avg|text(4) (1d4 + 2)\
    \ piercing damage."
  "name": "Pickaxe"
- "desc": "The brigganock accelerates the passage of time around itself, enabling\
    \ it to accomplish up to 1 hour of work in a matter of seconds. This work can't\
    \ affect any creature other than the brigganock, or any object being worn or carried\
    \ by another creature, and the activity must take place within a 10-foot cube.\
    \ For example, the brigganock could use this action to rapidly carve a pumpkin,\
    \ cook and eat dinner, move a pile of stones, or tie a dozen knots in a length\
    \ of rope."
  "name": "Time Lapse (Recharges after a Short or Long Rest)"
"bonus_actions":
- "desc": "The brigganock moves its soul light up to 30 feet in any direction to an\
    \ unoccupied space it can see. At the end of the current turn, the light returns\
    \ to the brigganock."
  "name": "Move Soul Light"
"source":
- "WBtW"
"image": "3-Mechanics/CLI/bestiary/fey/token/brigganock-wbtw.webp"
```
^statblock