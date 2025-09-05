---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdh
- ttrpg-cli/monster/cr/13
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Xanathar
---
# [Xanathar](3-Mechanics\CLI\Compendium\bestiary\npc/xanathar-wdh.md)
*Source: Waterdeep: Dragon Heist p. 220*  

Xanathar is the name given to the beholder crime lord that lives in the dungeons under Waterdeep. It isn't the first beholder to claim this mantle, nor will it be the last.

Like all beholders, Xanathar is a paranoid tyrant that charms and bullies its minions into servitude. The Xanathar Guild is made up of some of Waterdeep's most disreputable folk, as well as monsters forced into subservience or drawn to the beholder by the promise of treasure, food, or power. Treachery within the ranks of the guild is common as servants vie for the beholder's favor and affection. Such boons are fleeting, though, as the beholder is quick to distrust those who finagle their way into its good graces.

Xanathar lives in a dungeon under Skullport, a subterranean settlement connected to Undermountain's third level. The place resembles a ramshackle town, built inside a giant cavern connected to an underground river. Members of the Xanathar Guild haunt Skullport's dilapidated buildings, and flameskulls patrol its streets.

The only creature Xanathar truly cares about aside from itself is a fish, named Sylgar, that it keeps in a large glass tank. Xanathar has minions that look after the fish constantly, but even their ministrations can't keep such a creature alive forever. Whenever the fish dies, panic spreads through the occupants of the lair as minions try to replace the fish before Xanathar realizes what has happened. Luckily for them, the beholder can't tell one fish from another.

Xanathar is extremely fond of gold. A few years ago, its spies stole the [Stone of Golorr](/3-Mechanics/CLI/Compendium/items/stone-of-golorr-wdh.md), which contained information that led to the discovery of a dwarven vault under Waterdeep. Xanathar was able to open the vault, but was forced out by the dragon inside the place. Recently, someone stole the [Stone of Golorr](/3-Mechanics/CLI/Compendium/items/stone-of-golorr-wdh.md) from where it was hidden inside its lair, and the beholder is convinced that the Black Network is behind the theft.

The beholder is caught up in the unbreakable grip of its own paranoia. It sees enemies everywhere, and lashes out at anyone it suspects of being a Zhentarim spy or assassin. Adventurers who attract its attention by dealing with known or suspected Black Network operatives are quickly branded as enemies that must be destroyed.

```statblock
"name": "Xanathar (WDH)"
"size": "Large"
"type": "aberration"
"alignment": "Lawful Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "180"
"hit_dice": "19d10 + 76"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "14"
  - !!int "18"
  - !!int "17"
  - !!int "15"
  - !!int "17"
"speed": "0 ft., fly 20 ft. (hover)"
"saves":
  - "intelligence": !!int "8"
  - "wisdom": !!int "7"
  - "charisma": !!int "8"
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+12"
"condition_immunities": "[prone](/3-Mechanics/CLI/Rules/conditions.md#Prone)"
"senses": "darkvision 120 ft., passive Perception 22"
"languages": "Deep Speech, Undercommon"
"cr": "13"
"traits":
  - "desc": "Xanathar wears a [ring of invisibility](/3-Mechanics/CLI/Compendium/items/ring-of-invisibility.md),\
      \ a [ring of mind shielding](/3-Mechanics/CLI/Compendium/items/ring-of-mind-shielding.md),\
      \ and a [ring of resistance (force)](/3-Mechanics/CLI/Compendium/items/ring-of-force-resistance.md)."
    "name": "Special Equipment"
  - "desc": "Xanathar's central eye creates an area of antimagic, as in the [antimagic\
      \ field](/3-Mechanics/CLI/Compendium/spells/antimagic-field.md) spell, in a\
      \ 150-foot cone. At the start of each of its turns, Xanathar decides which way\
      \ the cone faces and whether the cone is active. The area works against Xanathar's\
      \ own eye rays."
    "name": "Antimagic Cone"
"actions":
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14\
      \ (4d6) piercing damage."
    "name": "Bite"
  - "desc": "Xanathar shoots three of the following magical eye rays at random (reroll\
      \ duplicates), choosing one to three targets it can see within 120 feet of it:\n\
      \n- 1. Charm Ray. The targeted creature must succeed on a DC 16 Wisdom saving\
      \ throw or be [charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed) by Xanathar\
      \ for 1 hour, or until Xanathar harms the creature.  \n- 2. Paralyzing Ray.\
      \ The targeted creature must succeed on a DC 16 Constitution saving throw or\
      \ be [paralyzed](/3-Mechanics/CLI/Rules/conditions.md#Paralyzed) for 1 minute.\
      \ The target can repeat the saving throw at the end of each of its turns, ending\
      \ the effect on itself on a success.  \n- 3. Fear Ray. The targeted creature\
      \ must succeed on a DC 16 Wisdom saving throw or be [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened)\
      \ for 1 minute. The target can repeat the saving throw at the end of each of\
      \ its turns, ending the effect on itself on a success.  \n- 4. Slowing Ray.\
      \ The targeted creature must succeed on a DC 16 Dexterity saving throw. On a\
      \ failed save, the target's speed is halved for 1 minute. In addition, the creature\
      \ can't take reactions, and it can take either an action or a bonus action on\
      \ its turn, not both. The creature can repeat the saving throw at the end of\
      \ each of its turns, ending the effect on itself on a success.  \n- 5. Enervation\
      \ Ray. The targeted creature must make a DC 16 Constitution saving throw,\
      \ taking 36 (8d8) necrotic damage on a failed save, or half as much damage on\
      \ a successful one.  \n- 6. Telekinetic Ray. If the target is a creature,\
      \ it must succeed on a DC 16 Strength saving throw or Xanathar moves it up to\
      \ 30 feet in any direction. It is [restrained](/3-Mechanics/CLI/Rules/conditions.md#Restrained)\
      \ by the ray's telekinetic grip until the start of Xanathar's next turn or until\
      \ Xanathar is [incapacitated](/3-Mechanics/CLI/Rules/conditions.md#Incapacitated).\
      \  \n\n    If the target is an object weighing 300 pounds or less that isn't\
      \ being worn or carried, it is moved up to 30 feet in any direction. Xanathar\
      \ can also exert fine control on objects with this ray, such as manipulating\
      \ a simple tool or opening a door or a container.  \n- 7. Sleep Ray. The\
      \ targeted creature must succeed on a DC 16 Wisdom saving throw or fall asleep\
      \ and remain [unconscious](/3-Mechanics/CLI/Rules/conditions.md#Unconscious)\
      \ for 1 minute. The target awakens if it takes damage or another creature takes\
      \ an action to wake it. This ray has no effect on constructs and undead.  \n\
      - 8. Petrification Ray. The targeted creature must make a DC 16 Dexterity\
      \ saving throw. On a failed save, the creature begins to turn to stone and is\
      \ [restrained](/3-Mechanics/CLI/Rules/conditions.md#Restrained). It must repeat\
      \ the saving throw at the end of its next turn. On a success, the effect ends.\
      \ On a failure, the creature is [petrified](/3-Mechanics/CLI/Rules/conditions.md#Petrified)\
      \ until freed by the  [greater restoration](/3-Mechanics/CLI/Compendium/spells/greater-restoration.md)\
      \ spell or other magic.  \n- 9. Disintegration Ray. If the target is a creature,\
      \ it must succeed on a DC 16 Dexterity saving throw or take 45 (10d8) force\
      \ damage. If this damage reduces the creature to 0 hit points, its body becomes\
      \ a pile of fine gray dust.  \n\n    If the target is a Large or smaller nonmagical\
      \ object or creation of magical force, it is disintegrated without a saving\
      \ throw. If the target is a Huge or larger object or creation of magical force,\
      \ this ray disintegrates a 10-foot cube of it.  \n- 10. Death Ray. The targeted\
      \ creature must succeed on a DC 16 Dexterity saving throw or take 55 (10d10)\
      \ necrotic damage. The target dies if the ray reduces it to 0 hit points.  "
    "name": "Eye Rays"
"legendary_actions":
  - "desc": "Xanathar can take 3 legendary actions, using the Eye Ray option below.\
      \ It can take only one legendary action at a time and only at the end of another\
      \ creature's turn. Xanathar regains spent legendary actions at the start of\
      \ its turn."
    "name": ""
  - "desc": "Xanathar uses one random eye ray."
    "name": "Eye Ray"
"lair_actions":
  - "desc": "When fighting inside its lair, a beholder can invoke the ambient magic\
      \ to take lair actions. On initiative count 20 (losing initiative ties), the\
      \ beholder can take one lair action to cause one of the following effects:"
    "name": ""
  - "desc": "- A 50-foot-square area of ground within 120 feet of the beholder becomes\
      \ slimy; that area is difficult terrain until initiative count 20 on the next\
      \ round.  \n- Walls within 120 feet of the beholder sprout grasping appendages\
      \ until initiative count 20 on the round after next. Each creature of the beholder's\
      \ choice that starts its turn within 10 feet of such a wall must succeed on\
      \ a DC 15 Dexterity saving throw or be [grappled](/3-Mechanics/CLI/Rules/conditions.md#Grappled).\
      \ Escaping requires a successful DC 15 Strength ([Athletics](/3-Mechanics/CLI/Rules/skills.md#Athletics))\
      \ or Dexterity ([Acrobatics](/3-Mechanics/CLI/Rules/skills.md#Acrobatics)) check.\
      \  \n- An eye opens on a solid surface within 60 feet of the beholder. One random\
      \ eye ray of the beholder shoots from that eye at a target of the beholder's\
      \ choice that it can see. The eye then closes and disappears.  "
    "name": ""
  - "desc": "The beholder can't repeat an effect until they have all been used, and\
      \ it can't use the same effect two rounds in a row."
    "name": ""
"regional_effects":
  - "desc": "A region containing a beholder's lair is warped by the creature's unnatural\
      \ presence, which creates one or more of the following effects:"
    "name": ""
  - "desc": "- Creatures within 1 mile of the beholder's lair sometimes feel as if\
      \ they're being watched when they aren't.  \n- When the beholder sleeps, minor\
      \ warps in reality occur within 1 mile of its lair and then vanish 24 hours\
      \ later. Marks on cave walls might change subtly, an eerie trinket might appear\
      \ where none existed before, harmless slime might coat a statue, and so on.\
      \ These effects apply only to natural surfaces and to nonmagical objects that\
      \ aren't on anyone's person.  "
    "name": ""
  - "desc": "If the beholder dies, these effects fade over the course of d10 days."
    "name": ""
"source":
  - "WDH"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/xanathar-wdh.webp"
```
^statblock