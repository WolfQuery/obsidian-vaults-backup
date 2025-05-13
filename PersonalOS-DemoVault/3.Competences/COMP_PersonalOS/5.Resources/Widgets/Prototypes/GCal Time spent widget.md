---
tags:
  - Widget
Context: "[[Applying Personal OS]]"
Archived: true
---
# Day Time spent pie

```dataviewjs
let pos = app.plugins.plugins['personal-os-alpha'];  
let calendarDurations = await pos.google.calendar.getTotalTimeSpentToday();  
let durations = []; 
let labels = [];
for(let calendarIndex in calendarDurations.totalTimeByCalendar){  
  let current = calendarDurations.totalTimeByCalendar[calendarIndex];  
  durations.push(current.hours*3600+current.minutes*60+current.seconds);
  labels.push(calendarIndex)  
}  

dv.paragraph(`\`\`\`chart
	type: pie
	labels: [${labels}]
	series:
	  - title: Time spent
	    data: [${durations}]
	tension: 0.15
	width: 80%
	labelColors: true
	fill: false
	beginAtZero: false
	bestFit: false
	bestFitTitle: undefined
	bestFitNumber: 0
\`\`\``)
```

^8ac0b6


# Week time spent pie
```dataviewjs
function getFormattedDate(offset = 0) {
  const today = new Date();
  today.setDate(today.getDate() - offset);

  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = today.getFullYear();

  return `${day}/${month}/${year}`;
}

let today = getFormattedDate(1);
let sevenDaysAgo = getFormattedDate(7);


let pos = app.plugins.plugins['personal-os-alpha'];  
let calendarDurations = await pos.google.calendar.getTotalTimeSpentBetweenDates(sevenDaysAgo,today);
let durations = []; 
let labels = [];
for(let calendarIndex in calendarDurations.totalTimeByCalendar){  
  let current = calendarDurations.totalTimeByCalendar[calendarIndex];  
  durations.push(current);
  labels.push(calendarIndex)  
}  

dv.paragraph(`\`\`\`chart
	type: pie
	labels: [${labels}]
	series:
	  - title: Time spent
	    data: [${durations}]
	tension: 0.15
	width: 80%
	labelColors: true
	fill: false
	beginAtZero: false
	bestFit: false
	bestFitTitle: undefined
	bestFitNumber: 0
\`\`\``)
```

#  Volume curve


```dataviewjs
function getFormattedDate(offset = 0) {
  const today = new Date();
  today.setDate(today.getDate() - offset);

  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = today.getFullYear();

  return `${day}/${month}/${year}`;
}


let today = getFormattedDate();;
let yesterday = getFormattedDate(1);;
let twoDaysAgo = getFormattedDate(2);;

let pos = app.plugins.plugins['personal-os-alpha'];  
let twoDaysAgoDuration = (await pos.google.calendar.getTotalTimeSpentBetweenDates(twoDaysAgo,twoDaysAgo)).totalTimeByCalendar["1. Grow"];
let yesterdayDuration = (await pos.google.calendar.getTotalTimeSpentBetweenDates(yesterday,yesterday)).totalTimeByCalendar["1. Grow"];
let todayDuration = (await pos.google.calendar.getTotalTimeSpentBetweenDates(today,today)).totalTimeByCalendar["1. Grow"];
let durations = [(twoDaysAgoDuration?.hours)+((twoDaysAgoDuration?.minutes)/60) || 0,yesterdayDuration?.hours+((yesterdayDuration?.minutes)/60)|| 0,todayDuration?.hours +((todayDuration?.minutes)/60)|| 0]; 

dv.paragraph(`\`\`\`chart
	type: bar
	labels: [2 days ago, Yesterday, Today]
	series:
	  - title: Growth time
	    data: [${durations}]
	tension: 0.2
	width: 80%
	labelColors: false
	fill: false
	beginAtZero: true
	bestFit: false
	bestFitTitle: undefined
	bestFitNumber: 0
\`\`\``)
```

^bc725d

