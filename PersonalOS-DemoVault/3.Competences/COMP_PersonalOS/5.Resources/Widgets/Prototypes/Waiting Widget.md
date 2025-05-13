---
tags:
  - Widget
Context: "[[Applying Personal OS]]"
Archived: true
---



Future taskList

```dataviewjs 
let today = new Date().toISOString().slice(0, 10);
dv.taskList(
	dv.pages().file.tasks
	.where(t => !t.fullyCompleted)
	.where(t => !t.parent)
	.where(t => dv.date(t.due) > dv.date(today))
	, true
) 
```
