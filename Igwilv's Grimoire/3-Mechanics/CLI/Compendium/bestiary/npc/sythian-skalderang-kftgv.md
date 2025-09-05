---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/kftgv
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/bard
- ttrpg-cli/monster/type/humanoid/tiefling
statblock: inline
statblock-link: "#^statblock"
aliases:
- Sythian Skalderang
---
# [Sythian Skalderang](3-Mechanics\CLI\Compendium\bestiary\npc/sythian-skalderang-kftgv.md)
*Source: Keys from the Golden Vault p. 117*  

Sythian Skalderang has been blessed by the demon lord Graz'zt. Graz'zt's gift to Sythian manifests in several ways, including Sythian's ability to conjure demonic whispers that can fray enemy minds.

When he was a young boy, Sythian went on a hunting trip with his father. A giant toad attacked them and swallowed Sythian. Although Sythian escaped after his father slew the monster, the attack left Sythian with an acute fear of frogs and toads.

Sythian's parents hoped his interest in music would lead Sythian to become an extraordinary musician; he became a mediocre one instead, despite the help of several renowned tutors. Years later, Sythian resents their efforts, as the money his parents lavished on his education left him with many unpaid debts. Now that his parents are dead, he is determined to hold on to his estate and will do whatever it takes to keep what he has left.

Sythian has attuned to Golden Axe so that he can learn and exercise the Canaith mandolin's properties. Although he hopes Golden Axe will earn him the good graces and financial support of the van Timmels, Sythian would sooner lose the instrument than see any harm befall his students, as his reputation and financial success hinge on their well-being. He gladly gives up the instrument to save himself.

Sythian is an impatient and demanding teacher who holds his students to a rigorous schedule. His bone conductor's wand doubles as a spellcasting focus.

```statblock
"name": "Sythian Skalderang (KftGV)"
"size": "Medium"
"type": "humanoid"
"subtype": "bard, tiefling"
"alignment": "Chaotic Evil"
"ac": !!int "15"
"ac_class": "Graz'zt's gift"
"hp": !!int "99"
"hit_dice": "18d8 + 18"
"modifier": !!int "2"
"stats":
  - !!int "10"
  - !!int "15"
  - !!int "13"
  - !!int "14"
  - !!int "11"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "5"
  - "wisdom": !!int "3"
"skillsaves":
  - "name": "[Arcana](/3-Mechanics/CLI/Rules/skills.md#Arcana)"
    "desc": "+5"
  - "name": "[Deception](/3-Mechanics/CLI/Rules/skills.md#Deception)"
    "desc": "+6"
  - "name": "[Performance](/3-Mechanics/CLI/Rules/skills.md#Performance)"
    "desc": "+6"
"damage_resistances": "fire"
"senses": "darkvision 60 ft., passive Perception 10"
"languages": "Abyssal, Common"
"cr": "7"
"traits":
  - "desc": "Sythian is [frightened](/3-Mechanics/CLI/Rules/conditions.md#Frightened)\
      \ while he is within 20 feet of a frog or a toad (of any size) that he can see."
    "name": "Fear of Frogs and Toads"
  - "desc": "Sythian's AC includes his Charisma modifier."
    "name": "Graz'zt's Gift"
"actions":
  - "desc": "Sythian makes two Poisoned Shortsword or Poisoned Dart attacks and uses\
      \ Whispers of Azzagrat."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6\
      \ + 2) piercing damage plus 5 (d10) poison damage."
    "name": "Poisoned Shortsword"
  - "desc": "Ranged Weapon Attack: +5 to hit, range 20/60 ft., one target. Hit:\
      \ 4 (1d4 + 2) piercing damage plus 5 (d10) poison damage."
    "name": "Poisoned Dart"
  - "desc": "Each creature in a 15-foot cube originating from Sythian must make a\
      \ DC 14 Wisdom saving throw. On a failed save, a creature takes 18 (4d8) psychic\
      \ damage and is [incapacitated](/3-Mechanics/CLI/Rules/conditions.md#Incapacitated)\
      \ until the end of its next turn. On a successful save, the creature takes half\
      \ as much damage and isn't [incapacitated](/3-Mechanics/CLI/Rules/conditions.md#Incapacitated)."
    "name": "Whispers of Azzagrat"
  - "desc": "Sythian casts one of the following spells, using Charisma as the spellcasting\
      \ ability (spell save DC 14):\n\nAt will: [mage hand](/3-Mechanics/CLI/Compendium/spells/mage-hand.md),\
      \ [prestidigitation](/3-Mechanics/CLI/Compendium/spells/prestidigitation.md)\n\
      \n1/day each: [charm person](/3-Mechanics/CLI/Compendium/spells/charm-person.md),\
      \ [faerie fire](/3-Mechanics/CLI/Compendium/spells/faerie-fire.md), [unseen\
      \ servant](/3-Mechanics/CLI/Compendium/spells/unseen-servant.md)"
    "name": "Spellcasting"
"reactions":
  - "desc": "Immediately after a creature within 5 feet of Sythian hits him with an\
      \ attack roll, Sythian forces that creature to make a DC 14 Constitution saving\
      \ throw. The creature takes 14 (4d6) fire damage on a failed saving throw, or\
      \ half as much damage on a successful one."
    "name": "Fiendish Rebuke (3/Day)"
"source":
  - "KftGV"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/sythian-skalderang-kftgv.webp"
```
^statblock