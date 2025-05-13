---
tags:
  - Widget
Context: "[[Applying Personal OS]]"
Archived: true
---
### Total points / xp

```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;

function calculateTaskPoints(task, pageMulti) {
    // Only default to 1 if task['✳️'] is undefined
    let taskMulti = task['✳️'] !== undefined ? task['✳️'] : 1;
    return 10 * taskMulti * pageMulti;
}

function calculatePagePoints(page) {
    // Only default to 1 if page['✳️'] is undefined
    let pageMulti = page['✳️'] !== undefined ? page['✳️'] : 1;
    let sum = page.file.tasks
        .where(t => t.completed && t.fullyCompleted)
        .values.reduce(
            (acc, task) => acc + calculateTaskPoints(task, pageMulti), 0
        );
    return sum;
}

function calculateTotalPoints() {
    let sum = dv.pages()
        .values.reduce(
            (acc, page) => acc + calculatePagePoints(page), 0
        );
    return sum;
}

let points = calculateTotalPoints();

dv.header(1, points);


```

^f5c717

### Character level

```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;


function calculateTaskPoints(task,pageMulti) {
	let taskMulti = task['✳️'] !== undefined ? task['✳️'] : 1;
	return 10 * taskMulti * pageMulti;
}

function calculatePagePoints(page) {
	let pageMulti = page['✳️'] !== undefined ? page['✳️'] : 1;
	let sum = page.file.tasks
		.where(t=> t.completed && t.fullyCompleted)
		.values.reduce(
			(acc,task) => acc + calculateTaskPoints(task,pageMulti) ,0
		);
	return sum;
}

function calculateTotalPoints() {
	let sum = dv.pages()
		.values.reduce(
			(acc,page) => acc + calculatePagePoints(page) ,0
		);
	return sum;
}

function currentLevelBasedOnXp(totalXp, x, y) {
    let level = 0;
    let xpNeeded = 0;

    while (xpNeeded <= totalXp) {
        level++;
        xpNeeded += Math.pow(x * level, y);
    }

    // Subtract 1 because it increments level one time too many in the loop
    return level - 1;
}

let x=2;
let y=2;

let points = calculateTotalPoints();
let level = Math.floor(currentLevelBasedOnXp(points,x,y));

dv.header(1,"Level " +level);

```

^dc09fb

### Xp bar helper

```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;


function calculateTaskPoints(task,pageMulti) {
	let taskMulti = task['✳️'] !== undefined ? task['✳️'] : 1;
	return 10 * taskMulti * pageMulti;
}

function calculatePagePoints(page) {
	let pageMulti = page['✳️'] !== undefined ? page['✳️'] : 1;
	let sum = page.file.tasks
		.where(t=> t.completed && t.fullyCompleted)
		.values.reduce(
			(acc,task) => acc + calculateTaskPoints(task,pageMulti) ,0
		);
	return sum;
}

function calculateTotalPoints() {
	let sum = dv.pages()
		.values.reduce(
			(acc,page) => acc + calculatePagePoints(page) ,0
		);
	return sum;
}

function xpForNextLevel(currentLevel, x, y) {
    return Math.pow(x * (currentLevel + 1), y);
}

function totalXpToTargetLevel(targetLevel, x, y) {
    let totalXp = 0;
    for (let level = 1; level <= targetLevel; level++) {
        totalXp += Math.pow(x * level, y);
    }
    return totalXp;
}

function currentLevelBasedOnXp(totalXp, x, y) {
    let level = 0;
    let xpNeeded = 0;

    while (xpNeeded <= totalXp) {
        level++;
        xpNeeded += Math.pow(x * level, y);
    }

    // Subtract 1 because it increments level one time too many in the loop
    return level - 1;
}


let x=2;
let y=2;
let points = calculateTotalPoints();
let level = Math.floor(currentLevelBasedOnXp(points,x,y));
let nextLevel = level+1
let neededXp = Math.floor(totalXpToTargetLevel(level,x,y));
let xpRequired = Math.ceil(xpForNextLevel(level,x,y));
let differencialXp = points - neededXp

dv.header(1,points+" "+level+" "+ nextLevel+" "+ neededXp +" "+xpRequired+" "+ differencialXp);

```

### Xp bar

```dataviewjs

let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;

function calculateTaskPoints(task,pageMulti) {
	let taskMulti = task['✳️'] !== undefined ? task['✳️'] : 1;
	return 10 * taskMulti * pageMulti;
}

function calculatePagePoints(page) {
	let pageMulti = page['✳️'] !== undefined ? page['✳️'] : 1;
	let sum = page.file.tasks
		.where(t=> t.completed && t.fullyCompleted)
		.values.reduce(
			(acc,task) => acc + calculateTaskPoints(task,pageMulti) ,0
		);
	return sum;
}

function calculateTotalPoints() {
	let sum = dv.pages()
		.values.reduce(
			(acc,page) => acc + calculatePagePoints(page) ,0
		);
	return sum;
}

function xpForNextLevel(currentLevel, x, y) {
    return Math.pow(x * (currentLevel + 1), y);
}

function totalXpToTargetLevel(targetLevel, x, y) {
    let totalXp = 0;
    for (let level = 1; level <= targetLevel; level++) {
        totalXp += Math.pow(x * level, y);
    }
    return totalXp;
}

function currentLevelBasedOnXp(totalXp, x, y) {
    let level = 0;
    let xpNeeded = 0;

    while (xpNeeded <= totalXp) {
        level++;
        xpNeeded += Math.pow(x * level, y);
    }

    // Subtract 1 because it increments level one time too many in the loop
    return level - 1;
}


let x=2;
let y=2
let points = calculateTotalPoints();
let level = Math.floor(currentLevelBasedOnXp(points,x,y));
let nextLevel = level+1
let neededXp = Math.floor(totalXpToTargetLevel(level,x,y));
let xpRequired = Math.ceil(xpForNextLevel(level,x,y));
let differencialXp = points - neededXp


let percent = Math.round((differencialXp / xpRequired) * 100)  
let pb = dv.el("progress-bar", "", { attr: {value: percent, style:"width=50%;"}})


dv.paragraph(  
pb 
)  
dv.paragraph(`<p>${differencialXp} / ${xpRequired} xp</p>`);
```

^e1e67b

### Current level xp

```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;


function calculateTaskPoints(task,pageMulti) {
	let taskMulti = task['✳️'] !== undefined ? task['✳️'] : 1;
	return 10 * taskMulti * pageMulti;
}

function calculatePagePoints(page) {
	let pageMulti = page['✳️'] !== undefined ? page['✳️'] : 1;
	let sum = page.file.tasks
		.where(t=> t.completed && t.fullyCompleted)
		.values.reduce(
			(acc,task) => acc + calculateTaskPoints(task,pageMulti) ,0
		);
	return sum;
}

function calculateTotalPoints() {
	let sum = dv.pages()
		.values.reduce(
			(acc,page) => acc + calculatePagePoints(page) ,0
		);
	return sum;
}

function xpForNextLevel(currentLevel, x, y) {
    return Math.pow(x * (currentLevel + 1), y);
}

function totalXpToTargetLevel(targetLevel, x, y) {
    let totalXp = 0;
    for (let level = 1; level <= targetLevel; level++) {
        totalXp += Math.pow(x * level, y);
    }
    return totalXp;
}

function currentLevelBasedOnXp(totalXp, x, y) {
    let level = 0;
    let xpNeeded = 0;

    while (xpNeeded <= totalXp) {
        level++;
        xpNeeded += Math.pow(x * level, y);
    }

    // Subtract 1 because it increments level one time too many in the loop
    return level - 1;
}


let x=2;
let y=2;
let points = calculateTotalPoints();
let level = Math.floor(currentLevelBasedOnXp(points,x,y));
let nextLevel = level+1
let neededXp = Math.floor(totalXpToTargetLevel(level,x,y));
let xpRequired = Math.ceil(xpForNextLevel(level,x,y));
let differencialXp = points - neededXp

dv.header(1, `${differencialXp}/
${xpRequired} xp`);

```

^93fe67

### Points the last 3 days

```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;

function getFormattedDate(offset = 0) {
  const today = new Date();
  today.setDate(today.getDate() - offset);

  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = today.getFullYear();

  return `${year}-${month}-${day}`;
}

function calculatePoints(task) {
	let fileMulti = dv.page(task.path)['✳️'] || 1;
	return 10*(task['✳️']||1)*(fileMulti||1)
}

function calculateDayPagePoints(page,date) {
	return page.file.tasks
	.where(t=> t.completed && t.fullyCompleted)
	.where(t=> t.done && (t.done.ts == dv.date(date).ts))
	.values.reduce(
		(acc,task) => acc + calculatePoints(task) ,0
	);
}

function calculateDayContextPointsRecursive(page, depth, date) {
	let sum = 0;
	if(contexts.find(p => p == page.file.path)) return sum;	
	if(depth <= 0) return sum;
	contexts.push(page.file.path);

	// All pages in the context of the current file
	let pages = dv.pages(`${OfficeFilter.map(el => `"${el}"`).join(' or ')}`)
		.where(p => p.Context?.path == page.file.path);
	pages.forEach(p => {
				sum = sum + calculateDayPagePoints(p,date)
				let subSum = calculateDayContextPointsRecursive(p, depth - 1,date);
				sum = sum+subSum;
			});
	return sum;
}

function calculateDayPageContextPoints(page, depth, date) {
	let sum = calculateDayPagePoints(page,date) + calculateDayContextPointsRecursive(page, depth,date);
	return sum;
}

function calculateDayPoints(date) {
	let sum = dv.pages(`${OfficeFilter.map(el => `"${el}"`).join(' or ')}`).file.tasks
		.where(t=> t.completed && t.fullyCompleted)
		.where(t=> t.completion && (t.completion.ts == dv.date(date).ts))
		.values.reduce(
			(acc,task) => acc + calculatePoints(task) ,0
		);
	return sum;
}


let labels = [];
let contexts = []; 
let today = getFormattedDate();
let yesterday = getFormattedDate(1);
let twoDaysAgo = getFormattedDate(2);

let points = [calculateDayPoints(getFormattedDate(2)),calculateDayPoints(getFormattedDate(1)),calculateDayPoints(getFormattedDate())]; 


dv.paragraph(`\`\`\`chart
	type: bar
	labels: [2 days ago, Yesterday, Today]
	series:
	  - title: Points
	    data: [${points}]
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

^16ea5e

### Total points per Vision


```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;

let labels = [];
let points = []; 
let contexts = []; 
let officePages = dv.pages(`${OfficeFilter.map(el => `"${el}"`).join(' or ')}`)


function calculatePoints(task) {
	let fileMulti = (dv.page(task.path)['✳️'] || 1);
	return 10*(task['✳️']||1)*(fileMulti||1)
}

function calculatePagePoints(page) {
	return page.file.tasks
	.where(t=> t.completed && t.fullyCompleted)
	.values.reduce(
		(acc,task) => acc + calculatePoints(task) ,0
	);
}

function calculateContextPointsRecursive(page, depth) {
	let sum = 0;
	if(contexts.find(p => p == page.file.path)) return sum;	
	if(depth <= 0) return sum;
	contexts.push(page.file.path);

	// All pages in the context of the current file
	let pos = app.plugins.plugins['personal-os'];  
	let pages = officePages
		.where(p => p.Context?.path == page.file.path);
	pages.forEach(p => {
				sum = sum + calculatePagePoints(p)
				let subSum = calculateContextPointsRecursive(p, depth - 1);
				sum = sum+subSum;
			});
	return sum;
}

function calculatePageContextPoints(page, depth) {
	let sum = calculatePagePoints(page) + calculateContextPointsRecursive(page, depth);
	return sum;
}

let visionList = dv.pages('#Vision')
	.where(p => p.Context.path.contains('William'))
	.sort(p => p.priority,'desc')


for(let vision of visionList){
	labels.push(vision.file.name);
	points.push(calculatePageContextPoints(vision,5));
}


dv.paragraph(`\`\`\`chart
	type: pie
	labels: [${labels}]
	series:
	  - title: Time spent
	    data: [${points}]
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

^8f5484

