---
obsidianUIMode: preview
title: D&D@NTK
PartyLevel: 2
StoryCompletion: false
NumberOfCharacters: 3
description: Discontinued
dg-publish: true
---
# Characters
```dataview
table without id portrait AS Portrait, link(file.name, title) AS Name, pronouns AS Pronouns, race AS Race, (gender + "/" + orientation) AS "Gender & Orientation", class AS Class, subclass AS Subclass, alignment AS Alignment, quote as Quote
FROM "D&D@NTK" AND #PlayerCharacter
WHERE active = true AND dg-publish = true
```

# Lore
1. [[Party Backstory]]
# Session Notes
```dataview
table without id link(file.name, date) as Date, number as "Session Number", summary AS "Session Summary"
FROM "D&D@NTK" AND #session-notes
WHERE occured=true AND dg-publish = true
limit 15
```
# Active Quests
```dataview
table without id link(file.name, title) AS Name, description AS Description, location AS Location, contractor AS Contractor, reward AS Reward
FROM "D&D@NTK" AND #quest 
WHERE active=true AND dg-publish = true
```

# Recent NPCs
```dataview
table without id link(file.name, title) AS Name, gender AS Gender, pronouns AS Pronouns, description AS Description, RelatedQuests AS "Related Quests", RelatedLocations AS "Related Locations"
FROM "D&D@NTK" AND #NPC 
WHERE dg-publish = true
limit 10
```

# Factions
```dataview
table without id link(file.name, title) AS Name, alignment AS Alignment, description AS Description, RelatedLocations AS "Related Locations", RelatedQuests AS "Related Quests", RelatedNPCs AS "Related NPCs"
FROM "D&D@NTK" AND #Faction 
WHERE dg-publish = true
limit 10
```
# Recent Locations
```dataview
table without id link(file.name, title) AS Name, description AS Description, RelatedQuests AS Quests, RelatedLocations AS "Related Locations"
FROM "D&D@NTK" AND #location 
WHERE dg-publish = true
limit 15
```