---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/mm
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/kenku
statblock: inline
statblock-link: "#^statblock"
aliases:
- Kenku
---
# [Kenku](3-Mechanics\CLI\Compendium\bestiary\humanoid/kenku.md)
*Source: Monster Manual p. 194, Waterdeep: Dragon Heist, Waterdeep: Dungeon of the Mad Mage*  

Kenku are feathered humanoids that wander the world as vagabonds, driven by greed. They can perfectly imitate any sound they hear.

## Fallen Flocks

Kenku wear ill-fitting cloaks, robes, and rags. These garments cover the soft, sleek feathers of their bodies, shrouding their bare arms and legs. They tread lightly when they walk, on talons made for grasping the branches of trees and seizing prey from the lofty skies. Soft as the wind they move, so as not to draw attention to their shameful forms.

Once, the kenku held the wind in their wings, embracing the gusty sky and singing the sweet language of birdsong. Serving a master whose identity is now lost to their memory, the kenku coveted the glittering baubles of his household, and longed to speak so that they could cajole and swindle others out of such treasures. Stealing the secret of speech from a volume in their master's library, they disguised themselves in rags to beg for pretty things. When their master learned of their greed, he stripped away their wings as punishment, forcing them to beg forever.

### Speech in Pantomime

Kenku can mimic the sound of anything they hear. A kenku asking for money might make the sound of coins clinking together, and a kenku referring to a busy marketplace can reproduce the cacophony of hawking vendors, barking dogs, bleating sheep, and the cries of street urchins. When mimicking voices, they can only repeat words and phrases they have heard, not create new sentences. To converse with a kenku is to witness a performance of imitated sounds and almost nonsensical verse.

Kenku speak to one another in much the same way. Because they are adept at interpreting one another's glances and gestures, the sounds they make to communicate complex ideas or emotions can be succinct. Groups of kenku also develop secret codes. For example, a cat's meow might be the secret code for "Prepare to attack!" or "Flee for your lives!" Their talent for mimicry extends to handwriting, and criminal organizations often employ kenku to forge documents. When a kenku commits a crime, it might forge evidence to implicate another creature.

## The Wistful Wingless

All kenku pine for the ability to fly, and thus the punishments they mete out to one another often involve false wings, such as heavy wings of wood borne as a mark of shame. As a final, tragic reminder of the wings they once had, kenku carry out executions by hurling their condemned from tall buildings or cliffs.

> [!quote] A quote from Endroth Knag, City Watch corporal in Waterdeep  
> 
> If you hear a baby crying in an alley, walk the other way. That's my advice to you.


```statblock
"name": "Kenku"
"size": "Medium"
"type": "humanoid"
"subtype": "kenku"
"alignment": "Chaotic Neutral"
"ac": !!int "13"
"hp": !!int "13"
"hit_dice": "3d8"
"modifier": !!int "3"
"stats":
  - !!int "10"
  - !!int "16"
  - !!int "10"
  - !!int "11"
  - !!int "10"
  - !!int "10"
"speed": "30 ft."
"skillsaves":
  - "name": "[Deception](/3-Mechanics/CLI/Rules/skills.md#Deception)"
    "desc": "+4"
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+2"
  - "name": "[Stealth](/3-Mechanics/CLI/Rules/skills.md#Stealth)"
    "desc": "+5"
"senses": "passive Perception 12"
"languages": "understands Auran and Common but speaks only through the use of its\
  \ Mimicry trait"
"cr": "1/4"
"traits":
  - "desc": "In the first round of a combat, the kenku has advantage on attack rolls\
      \ against any creature it [surprised](/3-Mechanics/CLI/Rules/conditions.md#Surprised)."
    "name": "Ambusher"
  - "desc": "The kenku can mimic any sounds it has heard, including voices. A creature\
      \ that hears the sounds can tell they are imitations with a successful DC 14\
      \ Wisdom ([Insight](/3-Mechanics/CLI/Rules/skills.md#Insight)) check."
    "name": "Mimicry"
"actions":
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
      \ + 3) piercing damage."
    "name": "Shortsword"
  - "desc": "Ranged Weapon Attack: +5 to hit, range 80/320 ft., one target. Hit:\
      \ 6 (1d6 + 3) piercing damage."
    "name": "Shortbow"
"source":
  - "MM"
  - "WDH"
  - "WDMM"
"image": "/3-Mechanics/CLI/Compendium/bestiary/humanoid/token/kenku.webp"
```
^statblock

## Environment

forest, urban