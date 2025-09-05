---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/kftgv
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
- ttrpg-cli/monster/type/humanoid/shapechanger
statblock: inline
statblock-link: "#^statblock"
aliases:
- Eliphas Adulare
---
# [Eliphas Adulare](3-Mechanics\CLI\Compendium\bestiary\npc/eliphas-adulare-kftgv.md)
*Source: Keys from the Golden Vault p. 188*  

Eliphas is a gentleman and a tinkerer. For years, he offered his services to the Golden Vault, an organization dedicated to preserving historical relics and keeping powerful items out of evil hands. Eliphas designed the magical music boxes that the Golden Vault uses to communicate with its field operatives.

Eliphas is a neutral good, human werebear who can adopt the form of a polar bear.

```statblock
"name": "Eliphas Adulare (KftGV)"
"size": "Medium"
"type": "humanoid"
"subtype": "human, shapechanger"
"alignment": "Neutral Good"
"ac": !!int "10"
"ac_class": "11 from natural armor in bear or hybrid form"
"hp": !!int "135"
"hit_dice": "18d8 + 54"
"modifier": !!int "0"
"stats":
  - !!int "19"
  - !!int "10"
  - !!int "17"
  - !!int "18"
  - !!int "12"
  - !!int "12"
"speed": "30 ft. (40 ft., climb 30 ft. in bear or hybrid form)"
"skillsaves":
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+7"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical attacks that\
  \ aren't silvered"
"senses": "passive Perception 17"
"languages": "Common (can't speak in bear form)"
"cr": "5"
"traits":
  - "desc": "Eliphas can use its action to polymorph into a Large bear-humanoid hybrid\
      \ or into a Large bear, or back into its true form, which is humanoid. Its statistics,\
      \ other than its size and AC, are the same in each form. Any equipment it is\
      \ wearing or carrying isn't transformed. It reverts to its true form if it dies."
    "name": "Shapechanger"
  - "desc": "Eliphas has advantage on Wisdom ([Perception](/3-Mechanics/CLI/Rules/skills.md#Perception))\
      \ checks that rely on smell."
    "name": "Keen Smell"
"actions":
  - "desc": "In bear form, Eliphas makes two claw attacks. In humanoid form, it makes\
      \ two greataxe attacks. In hybrid form, it can attack like a bear or a humanoid."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15\
      \ (2d10 + 4) piercing damage. If the target is a humanoid, it must succeed on\
      \ a DC 14 Constitution saving throw or be cursed with werebear lycanthropy."
    "name": "Bite (Bear or Hybrid Form Only)"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13\
      \ (2d8 + 4) slashing damage."
    "name": "Claw (Bear or Hybrid Form Only)"
  - "desc": "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 10\
      \ (1d12 + 4) slashing damage."
    "name": "Greataxe (Humanoid or Hybrid Form Only)"
  - "desc": "Eliphas casts one of the following spells, using Intelligence as the\
      \ spellcasting ability (save DC 15):\n\nAt will: [light](/3-Mechanics/CLI/Compendium/spells/light.md),\
      \ [minor illusion](/3-Mechanics/CLI/Compendium/spells/minor-illusion.md), [prestidigitation](/3-Mechanics/CLI/Compendium/spells/prestidigitation.md)\n\
      \n2/day each: [detect magic](/3-Mechanics/CLI/Compendium/spells/detect-magic.md),\
      \ [fog cloud](/3-Mechanics/CLI/Compendium/spells/fog-cloud.md)\n\n1/day each:\
      \ [phantasmal force](/3-Mechanics/CLI/Compendium/spells/phantasmal-force.md),\
      \ [shatter](/3-Mechanics/CLI/Compendium/spells/shatter.md)"
    "name": "Spellcasting (Humanoid or Hybrid Form Only)"
"source":
  - "KftGV"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/eliphas-adulare-kftgv.webp"
```
^statblock