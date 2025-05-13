---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mpmm
- ttrpg-cli/monster/cr/24
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
aliases: ["Yeenoghu"]
---
# [Yeenoghu](3-Mechanics\CLI\bestiary\npc/yeenoghu-mpmm.md)
*Source: Mordenkainen Presents: Monsters of the Multiverse p. 270*  

The Beast of Butchery appears as a great scarred gnoll, towering 14 feet tall. Yeenoghu is the Gnoll Lord, and his creations are made in his twisted image. When the demon lord hunted across the Material Plane, packs of hyenas followed in his wake, and those that ate of great Yeenoghu's kills became gnolls. Few others worship the Beast of Butchery, but those who do tend to take on a gnoll-like aspect, hunching over and filing their teeth down to points.

Yeenoghu wants nothing more than slaughter and senseless destruction. Gnolls are his favorite instruments, and he drives his gnoll followers to ever-greater atrocities in his name, even imbuing some of their commanders with his powers, which transforms them into flinds (in this book). Yeenoghu takes pleasure in causing fear before death, and he sows sorrow and despair through destroying beloved things. He doesn't parlay; to meet him is to do battle with him—unless he becomes bored and wanders away. The Beast of Butchery has a long rivalry with Baphomet, the Horned King, and the two demon lords and their followers attack one another on sight.

The Gnoll Lord is covered in matted fur and leathery hide, and his face resembles a grinning predator's skull. He wields a triple-headed flail called the Butcher, which he can summon into his hand at will, although he is as likely to tear his prey apart with his teeth.

## Cultists of Yeenoghu

> [!note]
> See the Cult of Yeenoghu entry.

## Yeenoghu's Lair

Yeenoghu's lair in the Abyss is called the Death Dells. Its barren hills and ravines serve as a hunting ground, where he pursues captured mortals in a cruel game. Yeenoghu's lair is a place of blood and death, populated by [gnolls](3-Mechanics/CLI/bestiary/humanoid/gnoll.md), [hyenas](3-Mechanics/CLI/bestiary/beast/hyena.md), and [ghouls](3-Mechanics/CLI/bestiary/undead/ghoul.md), and there are few structures or signs of civilization on his layer of the Abyss.

The challenge rating of Yeenoghu is 25 (75,000 XP) when he's encountered in his lair.

```statblock
"name": "Yeenoghu (MPMM)"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "20"
"ac_class": "natural armor"
"hp": !!int "333"
"hit_dice": "23d12 + 184"
"stats":
- !!int "29"
- !!int "16"
- !!int "26"
- !!int "16"
- !!int "24"
- !!int "15"
"speed": "50 ft."
"saves":
  "Dexterity": !!int "10"
  "Wisdom": !!int "14"
  "Constitution": !!int "15"
"skillsaves":
  "Intimidation": !!int "9"
  "Perception": !!int "14"
"damage_resistances": "cold, fire, lightning"
"damage_immunities": "poison; bludgeoning, piercing, slashing that is nonmagical"
"condition_immunities": "[charmed](3-Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](3-Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](3-Mechanics/CLI/rules/conditions.md#Frightened), [poisoned](3-Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "truesight 120 ft., passive Perception 24"
"languages": "all, telepathy 120 ft."
"cr": "24"
"traits":
- "desc": "Yeenoghu casts one of the following spells, requiring no material components\
    \ and using Charisma as the spellcasting ability (spell save DC 17):\n\nAt will:\
    \ [detect magic](3-Mechanics/CLI/spells/detect-magic.md)\n\n1/day: [teleport](3-Mechanics/CLI/spells/teleport.md)\n\
    \n3/day each: [dispel magic](3-Mechanics/CLI/spells/dispel-magic.md), [fear](3-Mechanics/CLI/spells/fear.md),\
    \ [invisibility](3-Mechanics/CLI/spells/invisibility.md)"
  "name": "Spellcasting"
- "desc": "If Yeenoghu fails a saving throw, he can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "Yeenoghu has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
"actions":
- "desc": "Yeenoghu makes three Flail attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: dice:1d20+16|noform|noparens|text(+16) to hit,\
    \ reach 15 ft., one target. Hit: dice:2d12+9|noform|noparens|avg|text(22)\
    \ (2d12 + 9) force damage. If it's his turn, Yeenoghu can cause the target to\
    \ suffer one of the following additional effects, each of which he can apply only\
    \ once per turn\n\n- Confusion. The target must succeed on a DC 17 Wisdom\
    \ saving throw or be affected by the confusion spell until the start of Yeenoghu's\
    \ next turn.  \n- Force. The target takes an extra dice:2d12|noform|noparens|avg|text(13)\
    \ (2d12) force damage.  \n- Paralysis. The target must succeed on a DC 17\
    \ Constitution saving throw or be [paralyzed](3-Mechanics/CLI/rules/conditions.md#Paralyzed)\
    \ until the start of Yeenoghu's next turn.  "
  "name": "Flail"
- "desc": "Melee Weapon Attack: dice:1d20+16|noform|noparens|text(+16) to hit,\
    \ reach 10 ft., one target. Hit: dice:2d10+9|noform|noparens|avg|text(20)\
    \ (2d10 + 9) acid damage."
  "name": "Bite"
"bonus_actions":
- "desc": "When Yeenoghu reduces a creature to 0 hit points with a melee attack, he\
    \ moves up to half his speed and makes one Bite attack."
  "name": "Rampage"
"legendary_actions":
- "desc": "Yeenoghu moves up to his speed."
  "name": "Charge"
- "desc": "Yeenoghu makes one Flail attack. If the attack hits, the target must succeed\
    \ on a DC 24 Strength saving throw or be pushed up to 15 feet in a straight line\
    \ away from Yeenoghu. If the saving throw fails by 5 or more, the target is also\
    \ knocked [prone](3-Mechanics/CLI/rules/conditions.md#Prone)."
  "name": "Swat Away"
- "desc": "Yeenoghu makes a separate Bite attack against each creature within 10 feet\
    \ of him."
  "name": "Savage (Costs 2 Actions)"
"lair_actions":
- "desc": "On initiative count 20 (losing initiative ties), Yeenoghu can take one\
    \ of the following lair actions; he can't take the same lair action two rounds\
    \ in a row:"
  "name": ""
- "desc": "- Incite the Pack. Until the next initiative count 20, all gnolls and\
    \ hyenas within the lair are enraged, causing them to have advantage on melee\
    \ weapon attack rolls and causing attack rolls to have advantage against them.\
    \  \n- Iron Spike. Yeenoghu causes an iron spike—5 feet tall and 1 inch in\
    \ diameter—to burst from the ground at a point he can see within 100 feet of him.\
    \ Any creature in the space where the spike emerges must make a DC 24 Dexterity\
    \ saving throw. On a failed save, the creature takes dice:6d8|noform|noparens|avg|text(27)\
    \ (6d8) piercing damage and is [restrained](3-Mechanics/CLI/rules/conditions.md#Restrained)\
    \ by being impaled on the spike. A creature can use an action to remove itself\
    \ (or a creature it can reach) from the spike, ending the restrained condition.\
    \  \n- Pack Rush. Each gnoll or hyena that Yeenoghu can see can use its reaction\
    \ to move up to its speed.  "
  "name": ""
"regional_effects":
- "desc": "The region containing Yeenoghu's lair is warped by his magic, creating\
    \ one or more of the following effects:"
  "name": ""
- "desc": "- Savage Predators. Predatory beasts within 6 miles of the lair become\
    \ unusually savage, killing far more than what they need for food. Carcasses of\
    \ prey are left to rot in an unnatural display of wasteful slaughter.  \n- Spiky\
    \ Terrain. Within 1 mile of the lair, large iron spikes grow out of the ground\
    \ and stone surfaces. Yeenoghu impales the bodies of the slain on these spikes.\
    \  \n- If Yeenoghu dies, these effects fade over the course of dice:1d10|noform|noparens|avg\
    \ (1d10) days.  "
  "name": ""
"source":
- "MPMM"
"image": "3-Mechanics/CLI/bestiary/npc/token/yeenoghu-mpmm.webp"
```
^statblock