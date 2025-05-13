---
tags:
  - Widget
Context: "[[Applying Personal OS]]"
Archived: true
---
# Last 7 days

```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;

let columnHeader = []
    for (let i = 0; i < 7; i++) {
        let date = new Date();
        date.setDate(date.getDate() - i);
        columnHeader.unshift(date.toISOString().split('T')[0]); // Keep only the date part
    }
columnHeader.unshift('Routine');


function maptaskToDay(file) {
	let row = []
	let fileTasks = file.tasks;
    for (let i = 0; i < 7; i++) {
	    let date = new Date();
	    date.setDate(date.getDate() - i);
	    let dateString = date.toISOString().split('T')[0]; // Format the date as YYYY-MM-DD
	
	    // Check if there's a task completed on this date
	    if (fileTasks.some(task => task.completion?.ts == dv.date(dateString).ts)) {
	        row.unshift("✅");
	    // Cancelation date does not exist so this does not work
	    } else if (fileTasks.some(task => task.cancelation?.ts == dv.date(dateString).ts)) {
	        row.unshift("❌");
	    } else {
		    row.unshift("❌");
	    }
	}
    row.unshift(file.link)
	return row;
}

let routineList = '"1.Office/Habits/Morning Routine 40mn.md" OR "1.Office/Habits/Batch System Processing.md" OR "1.Office/@P_HeroWorkout 09 2023/P_HeroWorkout 2023-09.md" OR "1.Office/Habits/Batch Trigger review.md" OR "1.Office/Habits/Evening routine 10mn.md" OR "1.Office/Projects/Hero month 03-2024 Accountability.md"'

dv.table( 
  columnHeader,
  dv.pages(`${OfficeFilter.map(el => `"${el}"`).join(' or ')}`)
  .where(p => p.streak)
  .where(p => !p.archived)
  .map(p => maptaskToDay(p.file))
);

```
