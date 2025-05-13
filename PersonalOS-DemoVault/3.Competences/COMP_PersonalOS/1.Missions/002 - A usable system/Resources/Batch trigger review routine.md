---
tags:
  - Routine
Context: 
Archived:
---

```dataviewjs
function calculateDateStreak(dateArray) {
  const currentDate = new Date(); // Get the current date
  let streak = 0;
  let streakAdjust= 0;

  // Convert the date strings in the array to Date objects and sort them
  const sortedDates = dateArray
    .map(dateString => new Date(dateString))
    .sort((a, b) => b - a);

	// check the first date it it's today or yesterday. 
	let diffInDays = Math.floor((currentDate - sortedDates[0]) / (24 * 60 * 60 * 1000));
	if (diffInDays === 1) {
	streakAdjust = -1;
	streak++;
	}
  for (let date of sortedDates) {
    // Calculate the difference in days between the current date and the date in the array
    let diffInDays = Math.floor((currentDate - date) / (24 * 60 * 60 * 1000));

    if (diffInDays === streak) {
      // If the difference is equal to the current streak, increment the streak
      streak++;
    } else if (diffInDays > streak) {
      // If the difference is more than the streak, it's not consecutive
      return (streak + streakAdjust);
    }
  }
  return (streak + streakAdjust);
}

// Extract all tasks containing "Review"
let tasks = dv.current().file.tasks;

// Extract completed tasks
let completedTasks = tasks.where(t => t.completed);

// Extract addressed tasks (completed or canceled)
let addressedTasks = tasks.where(t => t.completed || t.status === "-");

// Limit to the last 21 addressed tasks
let last21AddressedTasks = addressedTasks
  .sort((a, b) => new Date(b.due) - new Date(a.due)) // Sort by due date in descending order
  .slice(0, 21);

// Calculate reliability as % of completed tasks in the last 21 addressed tasks
let totalLast21AddressedTasks = last21AddressedTasks.length;
let completedInLast21 = last21AddressedTasks.where(t => t.completed).length;
let reliabilityPercentage = totalLast21AddressedTasks > 0
  ? Math.round((completedInLast21 / totalLast21AddressedTasks) * 100)
  : 0;

// Calculate streak based on all completed tasks
let streak = calculateDateStreak(completedTasks.map(t => t.completion));

// Calculate total tasks and completed tasks
let global = tasks.length; // Total "Review" tasks
let completed = completedTasks.length; // Total completed "Review" tasks
let globalPercentage = global > 0 ? Math.round((completed / global) * 100) : 0;

// Display results
dv.header(1, "Streak: " + streak);
dv.header(1, "Completed: " + completed);
dv.header(1, "Reliability (21): " + reliabilityPercentage + "%" + " | "+globalPercentage+"%");

```

- [ ] Read and review all triggers ⌚12:00 🔁 every day 📅 2024-12-09
## Batch Actions List 
```tasks
(happens before tomorrow) OR (no happens date)
not done
hide recurrence rule
filter by function \
let sourcePath = query.file.path ; \
let taskPath = task.file.path ; \
let pageHandlePath = app.plugins.plugins['dataview'].api.page(taskPath)['Handled By']?.path || 0; \
let go = (sourcePath == pageHandlePath) ;\
return go
group by backlink
hide backlink
```

