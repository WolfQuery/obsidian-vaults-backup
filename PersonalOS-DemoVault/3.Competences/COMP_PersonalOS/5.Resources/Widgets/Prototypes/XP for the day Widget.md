---
tags:
  - Widget
Context: "[[Applying Personal OS]]"
Archived: true
---
### Tasks XP done Today
```dataviewjs
const tasks = dv.pages().file.tasks
		.where(t => {
                // exclude completed tasks and ones w/out due dates
		if(!t.fullyCompleted || !dv.date(t.completion)) {
		  return false;
		}
		const diff = DateTime.now().diff(dv.date(t.completion),'days').days;
		return (diff >= 0 && diff < 1);
	});

if(tasks.length === 0) {
	dv.el("b", "Let's Go !! ;-)")
} else {
	dv.header(1,tasks.length*10);
}
```

