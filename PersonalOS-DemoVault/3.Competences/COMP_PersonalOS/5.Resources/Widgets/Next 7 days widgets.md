---
tags:
  - Widget
Context: "[[Applying Personal OS]]"
Archived: true
---

### Next 7 days Subjects count

```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;
const isBetween = (num1,num2,value) => value > num1 && value < num2 ;
const IsDueNextWeekPage = (p) => p.file.tasks
  .where((t) => !t.completed)
  .where(t => (t.status != "-"))
  .where(
    (t) =>(
      (t.due && (isBetween(-7,0,DateTime.now().diff(dv.date(t.due),'days').days))) ||
      (t.start && (isBetween(-7,0,DateTime.now().diff(dv.date(t.start),'days').days))) ||
      (t.scheduled && (isBetween(-7,0,DateTime.now().diff(dv.date(t.scheduled),'days').days))))
      ).length>0;

const DueNextWeekCount = dv.pages(`${OfficeFilter.map(el => `"${el}"`).join(' or ')}`)
  .where(p => p['Archived'] != true)
  .where(p => !p['Handled By']?.path)
  .where(IsDueNextWeekPage)
  .length; 

dv.header(1,DueNextWeekCount+" / 25");
```

^b3f304

### Next 7 days Subjects

```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;
const isBetween = (num1,num2,value) => value > num1 && value < num2 ;
const IsDueNextWeekPage = (p) => p.file.tasks
  .where((t) => !t.completed)
  .where(t => (t.status != "-"))
  .where(
    (t) =>(
      (t.due && (isBetween(-7,0,DateTime.now().diff(dv.date(t.due),'days').days))) ||
      (t.start && (isBetween(-7,0,DateTime.now().diff(dv.date(t.start),'days').days))) ||      
      (t.scheduled && (isBetween(-7,0,DateTime.now().diff(dv.date(t.scheduled),'days').days))))
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

### Next 7 days Start count

```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;
const isBetween = (num1,num2,value) => value > num1 && value < num2 ;
const IsStartNextWeekPage = (p) => p.file.tasks
  .where((t) => !t.completed)
  .where(t => (t.status != "-"))
  .where((t) => (t.start && (isBetween(-7,0,DateTime.now().diff(dv.date(t.start),'days').days))))
  .where(
    (t) =>(
	    ((!t.due) ||
	    (t.due && (!isBetween(-7,0,DateTime.now().diff(dv.date(t.due),'days').days)))) &&
	    ((!t.scheduled) ||
	    (t.scheduled && (!isBetween(-7,0,DateTime.now().diff(dv.date(t.scheduled),'days').days)))))
	    ).length>0;

const StartNextWeekCount = dv.pages(`${OfficeFilter.map(el => `"${el}"`).join(' or ')}`)
  .where(p => p['Archived'] != true)
  .where(p => !p['Handled By']?.path)
  .where(IsStartNextWeekPage)
  .length; 

dv.header(1,StartNextWeekCount);
```

^c5ee72

### Next 7 days starting subjects


```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;
const isBetween = (num1,num2,value) => value > num1 && value < num2 ;
const IsStartNextWeekPage = (p) => p.file.tasks
  .where((t) => !t.completed)
  .where(t => (t.status != "-"))
  .where((t) => (t.start && (isBetween(-7,0,DateTime.now().diff(dv.date(t.start),'days').days))))
  .where(
    (t) =>(
	    ((!t.due) ||
	    (t.due && (!isBetween(-7,0,DateTime.now().diff(dv.date(t.due),'days').days)))) &&
	    ((!t.scheduled) ||
	    (t.scheduled && (!isBetween(-7,0,DateTime.now().diff(dv.date(t.scheduled),'days').days)))))
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
### Next 7 days Due count

```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;
const isBetween = (num1,num2,value) => value > num1 && value < num2 ;
const IsDueNextWeekPage = (p) => p.file.tasks
  .where((t) => !t.completed)
  .where(t => (t.status != "-"))
  .where(
    (t) =>(
      (t.due && (isBetween(-7,0,DateTime.now().diff(dv.date(t.due),'days').days))) ||
      (t.scheduled && (isBetween(-7,0,DateTime.now().diff(dv.date(t.scheduled),'days').days))))
      ).length>0;

const DueNextWeekCount = dv.pages(`${OfficeFilter.map(el => `"${el}"`).join(' or ')}`)
  .where(p => p['Archived'] != true)
  .where(p => !p['Handled By']?.path)
  .where(IsDueNextWeekPage)
  .length; 

dv.header(1,DueNextWeekCount);
```

^8a90ba

### Next 7 days Due subjects


```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;
const isBetween = (num1,num2,value) => value > num1 && value < num2 ;
const IsDueNextWeekPage = (p) => p.file.tasks
  .where((t) => !t.completed)
  .where(t => (t.status != "-"))
  .where(
    (t) =>(
      (t.due && (isBetween(-7,0,DateTime.now().diff(dv.date(t.due),'days').days))) ||
      (t.scheduled && (isBetween(-7,0,DateTime.now().diff(dv.date(t.scheduled),'days').days))))
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

