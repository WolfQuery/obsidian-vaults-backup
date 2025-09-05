---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/kftgv
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/dwarf
- ttrpg-cli/monster/type/humanoid/monk
statblock: inline
statblock-link: "#^statblock"
aliases:
- Prisoner 13
---
# [Prisoner 13](3-Mechanics\CLI\Compendium\bestiary\npc/prisoner-13-kftgv.md)
*Source: Keys from the Golden Vault p. 68*  

Prisoner 13 is a dwarf named Korda Glintstone. Prior to her incarceration years ago, Korda was an ally and agent of Clan Axebreaker, a moderately influential dwarf clan in a stronghold called Gauntlgrym. Korda built a network of informants and agents, ostensibly all to the benefit of Clan Axebreaker. With each success, she paid tattooists to inscribe a memorial of her triumph onto her skin. Using ancient rituals, Korda infused many of these artful etchings with the magic of Gauntlgrym's forges, granting her wondrous gifts.

Korda grew too ambitious for her role as an agent, so she devised a plan to take power for herself. Over five years she took careful stock of Clan Axebreaker's wealth and, in one fell swoop, used her network of lieutenants to steal away most of the clan's gold, leaving only a pittance.

Prisoner 13 is a cunning schemer, ruthless and patient. She listens and watches, absorbing every detail she can, and shares as little as she can get away with.

## Prisoner 13's Tattoos

Most of Prisoner 13's inkwork is covered by her uniform. Her tattoos include the following:

- **Dwarven Poetry..** An excerpt from a poem in Dwarvish script on her neck and across her shoulder blades reads, "Endless dreams entombed in stone."  
- **Flames..** A roiling storm of brilliant flames covers her back and ribs.  
- **Shroud..** Black and gray smoke and shadows coil down her left arm, ending in runes on the fingers of her left hand.  
- **Knotwork..** Purple and blue knotwork and runes run down her right arm, across the back of her right hand, and down the length of each finger. The runes on her fingers, known as the keystone tattoo, form the key to the vault in Gauntlgrym.  
- **Mountain..** Silver and brown mountain peaks cover her chest, the tips following the angles of her collarbones.  
- **River..** Swirling green and blue waters form a cascading river across her stomach, with scaly creatures leering from the water.  
- **Power and Plunder..** Dwarvish script on her hips reads "Power" and "Plunder.  

Traced among Prisoner 13's tattoos are tiny magical sigils, each one matching a twin tattooed on one of her agents. A character who examines any visible tattoos and succeeds on a DC 15 Intelligence (Investigation) check notices some of the hidden marks.

A character who succeeds on a DC 15 Intelligence (Arcana) check determines that the sigils have something to do with minds or telepathy.

```statblock
"name": "Prisoner 13 (KftGV)"
"size": "Medium"
"type": "humanoid"
"subtype": "dwarf, monk"
"alignment": "Neutral Evil"
"ac": !!int "17"
"ac_class": "mountain tattoo"
"hp": !!int "102"
"hit_dice": "12d8 + 48"
"modifier": !!int "3"
"stats":
  - !!int "15"
  - !!int "17"
  - !!int "18"
  - !!int "16"
  - !!int "14"
  - !!int "16"
"speed": "30 ft."
"saves":
  - "constitution": !!int "7"
  - "wisdom": !!int "5"
"skillsaves":
  - "name": "[Athletics](/3-Mechanics/CLI/Rules/skills.md#Athletics)"
    "desc": "+5"
  - "name": "[Deception](/3-Mechanics/CLI/Rules/skills.md#Deception)"
    "desc": "+9"
  - "name": "[Insight](/3-Mechanics/CLI/Rules/skills.md#Insight)"
    "desc": "+5"
  - "name": "[Perception](/3-Mechanics/CLI/Rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Stealth](/3-Mechanics/CLI/Rules/skills.md#Stealth)"
    "desc": "+6"
"damage_resistances": "poison"
"damage_immunities": "psychic"
"condition_immunities": "[charmed](/3-Mechanics/CLI/Rules/conditions.md#Charmed)"
"senses": "darkvision 60 ft., passive Perception 15"
"languages": "Common, Dwarvish, Elvish, Thieves' cant, Undercommon"
"cr": "5"
"traits":
  - "desc": "In an area of antimagic, Prisoner 13's tattoos and reactions don't function,\
      \ and she suffers the following modifications to her statistics: her AC becomes\
      \ 13, she loses her immunity to psychic damage and the charmed condition, and\
      \ her Tattooed Strike becomes a melee attack that deals 7 (1d8 + 3) bludgeoning\
      \ damage on a hit."
    "name": "Antimagic Susceptibility"
  - "desc": "Prisoner 13 has telepathic links with dozens of agents operating throughout\
      \ the land. The links allow Prisoner 13 to communicate telepathically with each\
      \ of these agents while they are both on the same plane of existence."
    "name": "Mindlink Tattoos"
  - "desc": "Prisoner 13's AC includes her Constitution modifier."
    "name": "Mountain Tattoo"
  - "desc": "Prisoner 13 can't be targeted by divination spells or any feature that\
      \ would read her thoughts, and she can't be perceived through magical scrying\
      \ sensors. She can't be contacted telepathically unless she allows such contact."
    "name": "Shroud Tattoo"
"actions":
  - "desc": "Prisoner 13 makes two Tattooed Strike attacks."
    "name": "Multiattack"
  - "desc": "Melee  or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 60\
      \ ft., one target. Hit: 12 (2d8 + 3) force damage."
    "name": "Tattooed Strike"
  - "desc": "Prisoner 13 magically unleashes flame from the tattoo across her back,\
      \ filling a 20-foot-radius sphere centered on her. Each other creature in that\
      \ area must make a DC 15 Dexterity saving throw. On a failed save, the creature\
      \ takes 13 (3d8) fire damage and is knocked [prone](/3-Mechanics/CLI/Rules/conditions.md#Prone).\
      \ On a successful save, it takes half as much damage and isn't knocked [prone](/3-Mechanics/CLI/Rules/conditions.md#Prone)."
    "name": "Firestorm Tattoo (Recharge 5-6)"
  - "desc": "Prisoner 13 magically ends any effects causing the [grappled](/3-Mechanics/CLI/Rules/conditions.md#Grappled)\
      \ or [restrained](/3-Mechanics/CLI/Rules/conditions.md#Restrained) conditions\
      \ on herself. If she is bound with nonmagical restraints, she slips out of them."
    "name": "River Tattoo"
"reactions":
  - "desc": "When a creature Prisoner 13 can see within 60 feet of herself ends its\
      \ turn, Prisoner 13 makes one Tattooed Strike attack or uses River Tattoo. She\
      \ can then move up to her speed without provoking opportunity attacks."
    "name": "Readiness"
"source":
  - "KftGV"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/prisoner-13-kftgv.webp"
```
^statblock