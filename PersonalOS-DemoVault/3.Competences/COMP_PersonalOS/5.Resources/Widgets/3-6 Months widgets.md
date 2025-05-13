---
tags:
  - Widget
Context: "[[Applying Personal OS]]"
Archived: true
---
### 3-6 Months count

```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;
const isBetween = (num1,num2,value) => value > num1 && value < num2 ;
const IsDueNextWeekPage = (p) => p.file.tasks
  .where((t) => !t.completed)
  .where(t => (t.status != "-"))
  .where(
    (t) =>(
      (t.due && (isBetween(-6,-3,DateTime.now().diff(dv.date(t.due),'months').months))) ||
      (t.start && (isBetween(-6,-3,DateTime.now().diff(dv.date(t.start),'months').months))) ||
      (t.scheduled && (isBetween(-6,-3,DateTime.now().diff(dv.date(t.scheduled),'months').months))))
      ).length>0;
      
const DueNextWeekCount = dv.pages(`${OfficeFilter.map(el => `"${el}"`).join(' or ')}`)
  .where(p => p['Archived'] != true)
  .where(p => !p['Handled By']?.path)
  .where(IsDueNextWeekPage)
  .length; 

dv.header(1,DueNextWeekCount +" / 100");
```

^14f396


### 3-6 Months subjects

```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;
const isBetween = (num1,num2,value) => value > num1 && value < num2 ;
const IsDueNextWeekPage = (p) => p.file.tasks
  .where((t) => !t.completed)
  .where(t => (t.status != "-"))
  .where(
    (t) =>(
      (t.due && (isBetween(-6,-3,DateTime.now().diff(dv.date(t.due),'months').months))) ||
      (t.start && (isBetween(-6,-3,DateTime.now().diff(dv.date(t.start),'months').months))) ||
      (t.scheduled && (isBetween(-6,-3,DateTime.now().diff(dv.date(t.scheduled),'months').months))))
      ).length>0;

dv.table( 
  ['Due subject','Context','Type'],
  dv.pages(`${OfficeFilter.map(el => `"${el}"`).join(' or ')}`)
  .where(p => p['Archived'] != true)
  .where(p => !p['Handled By']?.path)
  .where(IsDueNextWeekPage)
  .sort(p => p.file.mtime,'asc')
  .map(p => [
    p.file.link,
    p['Context'],
    p['tags']
  ])
);
```

### 3-6 Months Start count

```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;
const isBetween = (num1,num2,value) => value > num1 && value < num2 ;
const IsStartNextWeekPage = (p) => p.file.tasks
  .where((t) => !t.completed)
  .where(t => (t.status != "-"))
  .where((t) => (t.start && (isBetween(-6,-3,DateTime.now().diff(dv.date(t.start),'months').months))))
  .where(
    (t) =>(
	    ((!t.due) ||
	    (t.due && (!isBetween(-6,-3,DateTime.now().diff(dv.date(t.due),'months').months)))) &&
	    ((!t.scheduled) ||
	    (t.scheduled && (!isBetween(-6,-3,DateTime.now().diff(dv.date(t.scheduled),'months').months)))))
	    ).length>0;

const StartNextWeekCount = dv.pages(`${OfficeFilter.map(el => `"${el}"`).join(' or ')}`)
  .where(p => p['Archived'] != true)
  .where(p => !p['Handled By']?.path)
  .where(IsStartNextWeekPage)
  .length; 

dv.header(1,StartNextWeekCount);
```

^69f303

### 3-6 Months starting subjects

```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;
const isBetween = (num1,num2,value) => value > num1 && value < num2 ;
const IsStartNextWeekPage = (p) => p.file.tasks
  .where((t) => !t.completed)
  .where(t => (t.status != "-"))
  .where((t) => (t.start && (isBetween(-6,-3,DateTime.now().diff(dv.date(t.start),'months').months))))
  .where(
    (t) =>(
	    ((!t.due) ||
	    (t.due && (!isBetween(-6,-3,DateTime.now().diff(dv.date(t.due),'months').months)))) &&
	    ((!t.scheduled) ||
	    (t.scheduled && (!isBetween(-6,-3,DateTime.now().diff(dv.date(t.scheduled),'months').months)))))
	    ).length>0;

dv.table( 
  ['Next Week','Context','Type'],
  dv.pages(`${OfficeFilter.map(el => `"${el}"`).join(' or ')}`)
  .where(p => p['Archived'] != true)
  .where(p => !p['Handled By']?.path)
  .where(IsStartNextWeekPage)
  .sort(p => p.file.mtime,'asc')
  .map(p => [
    p.file.link,
    p['Context'],
    p['tags']
  ])
);
```
### 3-6 Months Due count

```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;
const isBetween = (num1,num2,value) => value > num1 && value < num2 ;
const IsDueNextWeekPage = (p) => p.file.tasks
  .where((t) => !t.completed)
  .where(t => (t.status != "-"))
  .where(
    (t) =>(
      (t.due && (isBetween(-6,-3,DateTime.now().diff(dv.date(t.due),'months').months))) ||
      (t.scheduled && (isBetween(-6,-3,DateTime.now().diff(dv.date(t.scheduled),'months').months))))
      ).length>0;
      
const DueNextWeekCount = dv.pages(`${OfficeFilter.map(el => `"${el}"`).join(' or ')}`)
  .where(p => p['Archived'] != true)
  .where(p => !p['Handled By']?.path)
  .where(IsDueNextWeekPage)
  .length; 

dv.header(1,DueNextWeekCount);
```

^c0693b

### 3-6 Months Due subjects

```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;
const isBetween = (num1,num2,value) => value > num1 && value < num2 ;
const IsDueNextWeekPage = (p) => p.file.tasks
  .where((t) => !t.completed)
  .where(t => (t.status != "-"))
  .where(
    (t) =>(
      (t.due && (isBetween(-6,-3,DateTime.now().diff(dv.date(t.due),'months').months))) ||
      (t.scheduled && (isBetween(-6,-3,DateTime.now().diff(dv.date(t.scheduled),'months').months))))
      ).length>0;

dv.table( 
  ['Due subject','Context','Type'],
  dv.pages(`${OfficeFilter.map(el => `"${el}"`).join(' or ')}`)
  .where(p => p['Archived'] != true)
  .where(p => !p['Handled By']?.path)
  .where(IsDueNextWeekPage)
  .sort(p => p.file.mtime,'asc')
  .map(p => [
    p.file.link,
    p['Context'],
    p['tags']
  ])
);
```
