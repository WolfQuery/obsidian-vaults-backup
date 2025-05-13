---
tags:
  - Description
Supports:
  - "[[Using Engage feature]]"
---
# Scheduled with time
A "scheduled with time" file contains at least one scheduled action with time. 
Scheduled actions with a specific time are at the top of the priority for the engage feature. They are ordered by time, meaning that earliest actions come first. 
They contain either a scheduled (⏳) date or a due (📅) date on the current day and a time (⌚) in HH:mm format (ex : 19:00).  ^55g2y9


# Scheduled without time

A "scheduled" file contains at least one scheduled action and does not contain any scheduled action with time. 
Once "scheduled with time" actions are done,  "scheduled without time" actions are retrieved randomly inside groups of priorities. Higher priority actions will always come first. 
They contain either a scheduled (⏳) date or a due (📅) date on the current day. ^1kyub6


# Next 

A "next" file does not contain any scheduled action (with or without time) and contains at least one "next" action. You can see a "next" action as something that you can do "As soon as possible" when other priorities are done. Next actions are only retrieved when all possible scheduled (with or without time) files are done, that means that they show up even if a scheduled with time action exists for the current day but the time is not yes attained. 
Next actions contains either no dates or a start (🛫) date in the past.  ^vdgqwv