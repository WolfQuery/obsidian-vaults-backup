---
tags:
  - Routine
Context: 
Handled By: "[[Batch system processing routine]]"
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

// Example usage:
let dateArray = ["2024-01-19", "2024-01-18", "2024-01-21", "2024-01-22"];
let dates= dv.current().file.tasks.completion;
let streak = calculateDateStreak(dates);

dv.header(1,"Streak : "+streak);
```
- [ ] Personal OS Inbox 0 🔁 every day 📅 2025-12-31