---
tags:
  - Widget
Context: "[[Applying Personal OS]]"
Archived: true
---
### Due subjects count
```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;

const IsDuePage = (p) => p.file.tasks
  .where((t) => !t.completed)
  .where(t => (t.status != "-"))
  .where(
    (t) =>(
      (t.due && (t.due == dv.date('today').ts)) ||
      (t.scheduled && (t.scheduled == dv.date('today').ts)))
      ).length>0;

const DueSubjectsCount = dv.pages(`${OfficeFilter.map(el => `"${el}"`).join(' or ')}`)
  .where(p => p['Archived'] != true)
  .where(p => !p['Handled By']?.path)
  .where(IsDuePage)
  .length; 

if(DueSubjectsCount === 0) {
	dv.header(1, "👌")
} else {
	dv.header(1,DueSubjectsCount);
}

```
^79d4d8

### Due subjects
```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;

const IsDuePage = (p) => p.file.tasks
  .where((t) => !t.completed)
  .where(t => (t.status != "-"))
  .where(
    (t) =>(
      (t.due && (t.due == dv.date('today').ts)) ||
      (t.scheduled && (t.scheduled == dv.date('today').ts)))
      ).length>0;

dv.table( 
  ['Due'],
  dv.pages(`${OfficeFilter.map(el => `"${el}"`).join(' or ')}`)
  .where(p => p['Archived'] != true)
  .where(p => !p['Handled By']?.path)
  .where(IsDuePage)
  .sort(p => p.file.mtime,'asc')
  .map(p => [
    p.file.link
  ])
);
```


```Taskido  
pages: "2.Activities"  
disableRecurrence: false  
numberOfDays: 1  
hideFileWithProps: Archived, Handled By
```
