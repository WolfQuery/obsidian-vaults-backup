---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/wdh
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/human
statblock: inline
statblock-link: "#^statblock"
aliases:
- Jalester Silvermane
---
# [Jalester Silvermane](3-Mechanics\CLI\Compendium\bestiary\npc/jalester-silvermane-wdh.md)
*Source: Waterdeep: Dragon Heist p. 205*  

*Human patron*

> [!quote]  
> 
> Want to know what's going on in our fine city? Grab a stool. Stay a while.

An earnest man in his mid-twenties, Jalester hails from the distant land of Cormyr, where he earned his spurs working for a mercenary company called the Steel Shadows. A few years ago, Jalester left the Dales and traveled to Waterdeep with several other members of the company, one of whom-Faerrel Dunblade-would become his best friend and lover.

The wizard Elminster befriended the two young men and brought them to the attention of Laeral Silverhand, who put them to work as deputies and spies. Jalester and Faerrel helped the Open Lord expose a plot to overthrow the government, but Faerrel was killed while helping bring the perpetrators to justice. Jalester remained in Waterdeep afterward, becoming one of Laeral's field operatives in the service of Waterdeep and the Lords' Alliance. He has been romantically unattached ever since Faerrel's death but longs again for love.

## Treasure

Jalester carries a badge of the Watch (+2 bonus to AC if not using a shield). If the badge is lost or taken from him, it returns to Laeral Silverhand.

```statblock
"name": "Jalester Silvermane (WDH)"
"size": "Medium"
"type": "humanoid"
"subtype": "human"
"alignment": "Lawful Good"
"ac": !!int "18"
"ac_class": "[chain mail](/3-Mechanics/CLI/Compendium/items/chain-mail.md), [Badge\
  \ of the Watch](/3-Mechanics/CLI/Compendium/items/badge-of-the-watch-wdh.md)"
"hp": !!int "71"
"hit_dice": "13d8 + 13"
"modifier": !!int "2"
"stats":
  - !!int "14"
  - !!int "14"
  - !!int "13"
  - !!int "12"
  - !!int "14"
  - !!int "13"
"speed": "30 ft."
"saves":
  - "strength": !!int "4"
  - "constitution": !!int "3"
"skillsaves":
  - "name": "[Athletics](/3-Mechanics/CLI/Rules/skills.md#Athletics)"
    "desc": "+4"
  - "name": "[Survival](/3-Mechanics/CLI/Rules/skills.md#Survival)"
    "desc": "+4"
"senses": "passive Perception 12"
"languages": "Common, Elvish"
"cr": "4"
"traits":
  - "desc": "Jalester carries a [badge of the Watch](/3-Mechanics/CLI/Compendium/items/badge-of-the-watch-wdh.md)."
    "name": "Special Equipment"
  - "desc": "As a bonus action, Jalester can regain 16 (1d10 + 11) hit points."
    "name": "Second Wind (Recharges after a Short or Long Rest)"
"actions":
  - "desc": "Jalester makes two weapon attacks."
    "name": "Multiattack"
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8\
      \ + 2) slashing damage, or 7 (1d10 + 2) slashing damage when used with two hands."
    "name": "Longsword"
  - "desc": "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4\
      \ + 2) piercing damage. Or Ranged Weapon Attack: +4 to hit, range 20/60 ft.,\
      \ one target. Hit: 4 (1d4 + 2) piercing damage."
    "name": "Dagger"
"reactions":
  - "desc": "When a creature that Jalester can see misses him with a melee attack,\
      \ he can use his reaction to make a melee weapon attack against that creature.\
      \ On a hit, the target takes an extra 4 damage from the weapon."
    "name": "Riposte"
"source":
  - "WDH"
"image": "/3-Mechanics/CLI/Compendium/bestiary/npc/token/jalester-silvermane-wdh.webp"
```
^statblock