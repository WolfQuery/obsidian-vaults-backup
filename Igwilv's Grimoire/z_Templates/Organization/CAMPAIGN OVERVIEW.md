---
obsidianUIMode: preview
title: 
PartyLevel: 
StoryCompletion: true
NumberOfCharacters: 
description:
---
# Characters
```dataview
table without id portrait AS Portrait, link(file.name, title) AS Name, pronouns AS Pronouns, race AS Race, link(gender, orientation) AS "Gender & Orientation", class AS Class, subclass AS Subclass, quote as Quote
FROM "<insert folder name>"
WHERE active = true
```