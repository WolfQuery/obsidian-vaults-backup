---
tags:
  - Widget
Context: "[[Applying Personal OS]]"
Archived: true
---
### 1-4 Weeks  count

```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;
const isBetween = (num1,num2,value) => value > num1 && value < num2 ;
const IsDueNextWeekPage = (p) => p.file.tasks
  .where((t) => !t.completed)
  .where(t => (t.status != "-"))
  .where(
    (t) =>(
      (t.due && (isBetween(-30,-7,DateTime.now().diff(dv.date(t.due),'days').days))) ||
      (t.start && (isBetween(-30,-7,DateTime.now().diff(dv.date(t.start),'days').days))) ||
      (t.scheduled && (isBetween(-30,-7,DateTime.now().diff(dv.date(t.scheduled),'days').days))))
      ).length>0;

const DueNextWeekCount = dv.pages(`${OfficeFilter.map(el => `"${el}"`).join(' or ')}`)
  .where(p => p['Archived'] != true)
  .where(p => !p['Handled By']?.path)
  .where(IsDueNextWeekPage)
  .length; 

dv.header(1,DueNextWeekCount+" / 50");
```

^6e18fe


### 1-4 Weeks subjects


```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;
const isBetween = (num1,num2,value) => value > num1 && value < num2 ;
const IsDueNextWeekPage = (p) => p.file.tasks
  .where((t) => !t.completed)
  .where(t => (t.status != "-"))
  .where(
    (t) =>(
      (t.due && (isBetween(-30,-7,DateTime.now().diff(dv.date(t.due),'days').days))) ||
      (t.start && (isBetween(-30,-7,DateTime.now().diff(dv.date(t.start),'days').days))) ||
      (t.scheduled && (isBetween(-30,-7,DateTime.now().diff(dv.date(t.scheduled),'days').days))))
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

### 1-4 Weeks Start count

```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;
const isBetween = (num1,num2,value) => value > num1 && value < num2 ;
const IsStartNextWeekPage = (p) => p.file.tasks
  .where((t) => !t.completed)
  .where(t => (t.status != "-"))
  .where((t) => (t.start && (isBetween(-30,-7,DateTime.now().diff(dv.date(t.start),'days').days))))
  .where(
    (t) =>(
	    ((!t.due) ||
	    (t.due && (!isBetween(-30,-7,DateTime.now().diff(dv.date(t.due),'days').days)))) &&
	    ((!t.scheduled) ||
	    (t.scheduled && (!isBetween(-30,-7,DateTime.now().diff(dv.date(t.scheduled),'days').days)))))
	    ).length>0;

const StartNextWeekCount = dv.pages(`${OfficeFilter.map(el => `"${el}"`).join(' or ')}`)
  .where(p => p['Archived'] != true)
  .where(p => !p['Handled By']?.path)
  .where(IsStartNextWeekPage)
  .length; 

dv.header(1,StartNextWeekCount);
```

^c5ee72

### 1-4 Weeks starting subjects


```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;
const isBetween = (num1,num2,value) => value > num1 && value < num2 ;
const IsStartNextWeekPage = (p) => p.file.tasks
  .where((t) => !t.completed)
  .where(t => (t.status != "-"))
  .where((t) => (t.start && (isBetween(-30,-7,DateTime.now().diff(dv.date(t.start),'days').days))))
  .where(
    (t) =>(
	    ((!t.due) ||
	    (t.due && (!isBetween(-30,-7,DateTime.now().diff(dv.date(t.due),'days').days)))) &&
	    ((!t.scheduled) ||
	    (t.scheduled && (!isBetween(-30,-7,DateTime.now().diff(dv.date(t.scheduled),'days').days)))))
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
### 1-4 Weeks Due count

```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;
const isBetween = (num1,num2,value) => value > num1 && value < num2 ;
const IsDueNextWeekPage = (p) => p.file.tasks
  .where((t) => !t.completed)
  .where(t => (t.status != "-"))
  .where(
    (t) =>(
      (t.due && (isBetween(-30,-7,DateTime.now().diff(dv.date(t.due),'days').days))) ||
      (t.scheduled && (isBetween(-30,-7,DateTime.now().diff(dv.date(t.scheduled),'days').days))))
      ).length>0;

const DueNextWeekCount = dv.pages(`${OfficeFilter.map(el => `"${el}"`).join(' or ')}`)
  .where(p => p['Archived'] != true)
  .where(p => !p['Handled By']?.path)
  .where(IsDueNextWeekPage)
  .length; 

dv.header(1,DueNextWeekCount);
```

^8a90ba

### 1-4 Weeks Due subjects


```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;
const isBetween = (num1,num2,value) => value > num1 && value < num2 ;
const IsDueNextWeekPage = (p) => p.file.tasks
  .where((t) => !t.completed)
  .where(t => (t.status != "-"))
  .where(
    (t) =>(
      (t.due && (isBetween(-30,-7,DateTime.now().diff(dv.date(t.due),'days').days))) ||
      (t.scheduled && (isBetween(-30,-7,DateTime.now().diff(dv.date(t.scheduled),'days').days))))
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
