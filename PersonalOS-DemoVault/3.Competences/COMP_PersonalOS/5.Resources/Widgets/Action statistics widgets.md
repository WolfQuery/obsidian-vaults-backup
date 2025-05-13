---
tags:
  - Widget
Context: "[[Applying Personal OS]]"
Archived: true
---
### Actions done Today
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
	dv.header(1,tasks.length);
}
```

### Actions done the last 7 days
```dataviewjs
const tasks = dv.pages().file.tasks
		.where(t => {
                // exclude completed tasks and ones w/out due dates
		if(!t.fullyCompleted || !dv.date(t.completion)) {
		  return false;
		}
		const diff = DateTime.now().diff(dv.date(t.completion),'days').days;
		return (diff >= 0 && diff <= 7);
	});

if(tasks.length === 0) {
	dv.el("b", "Noob ;-)")
} else {
	dv.header(1,tasks.length);
}
```

### All time actions done
```dataviewjs
const tasks = dv.pages().file.tasks
		.where(t => {
                // exclude completed tasks and ones w/out due dates
		if(!t.fullyCompleted || !dv.date(t.completion)) {
		  return false;
		}
		const diff = DateTime.now().diff(dv.date(t.completion),'days').days;
		return (diff >= 0);
	});

if(tasks.length === 0) {
	dv.el("b", "Noob ;-)")
} else {
	dv.header(1,tasks.length);
}
```

### Actions failed Today
```dataviewjs
const tasks = dv.pages().file.tasks.filter(t => 
    t.status === "-" && dv.date(t.due) &&
    DateTime.now().diff(dv.date(t.due), 'days').days < 1
);

tasks.length === 0 
    ? dv.el("b", "Let's Go !! ;-)") 
    : dv.header(1, tasks.length);

```

### Actions failed the last 7 days
```dataviewjs
const tasks = dv.pages().file.tasks.filter(t => 
    t.status === "-" && dv.date(t.due) &&
    DateTime.now().diff(dv.date(t.due), 'days').days < 7
);

tasks.length === 0 
    ? dv.el("b", "Let's Go !! ;-)") 
    : dv.header(1, tasks.length);

```

### Actions addressed the last 7 days 

```dataviewjs
const today = DateTime.now().startOf("day");

const tasks = dv.pages().file.tasks.filter(t => {
    const taskDate = dv.date(t.completion) || dv.date(t.due);
    if (!taskDate) return false;

    const diff = today.diff(taskDate, 'days').days;
    return diff < 7 && (t.fullyCompleted || t.status === "-");
});

dv.header(1, tasks.length);

```

### Action success rate the last 7 days 
```dataviewjs
const today = DateTime.now().startOf("day");

const tasks = dv.pages().file.tasks.filter(t => {
    const taskDate = dv.date(t.completion) || dv.date(t.due);
    if (!taskDate) return false;
    
    return today.diff(taskDate, 'days').days < 7 && (t.fullyCompleted || t.status === "-");
});

const completedTasks = tasks.filter(t => t.fullyCompleted).length;
const canceledTasks = tasks.filter(t => t.status === "-").length;
const addressedTasks = completedTasks + canceledTasks;

const successRate = addressedTasks > 0 ? (completedTasks / addressedTasks) * 100 : 0;

dv.header(3,"7 days success rate")
dv.header(1,`✅**${successRate.toFixed(2)}%**`);

```

^5c9835

