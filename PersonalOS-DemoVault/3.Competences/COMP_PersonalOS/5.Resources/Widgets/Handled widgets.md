---
tags:
  - Widget
Context: "[[Applying Personal OS]]"
Archived: true
---
### Handled progress
```dataviewjs

let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;

const IsDonePage = (p) => p.file.tasks
  .where((t) => t.completed || t.status== "-")
  .where(t => t.completion && t.completion == dv.date('today').ts)
  .length >0;
  
const DoneSubjectsCount = dv.pages(`${OfficeFilter.map(el => `"${el}"`).join(' or ')}`)
  .where(IsDonePage)
  .where(p => !p['Handled By']?.path)
  .length; 

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

const hasStarted = (p) =>
(p.file.tasks
  .where((t) => !t.completed && !t.fullyCompleted)
  .where(t => (t.status != "-"))
  .where((t) => t.start && (dv.date(t.start) <= dv.date('today').ts) && !t.scheduled)
  .length > 0 );
 
const allEmptyTask = (p) => ((p.file.tasks
  .where((t) => t.start || t.due || t.scheduled || t.text.contains('[[Someday]]')||t.text.contains('#Someday'))
  .where((t) => !t.completed && !t.fullyCompleted)
  .where(t => (t.status != "-"))
  .length == 0)
  &&
  (p.file.tasks
    .where((t) => !t.completed && !t.fullyCompleted)
    .where(t => (t.status != "-"))
    .length > 0));

const NextSubjectCount = dv.pages(`${OfficeFilter.map(el => `"${el}"`).join(' or ')}`)
  .where(p => p['Archived'] != true)
  .where(p => !p['Handled By']?.path)
  .where(p => hasStarted(p) || allEmptyTask(p))
  .file.length;

let totalTask = NextSubjectCount + DueSubjectsCount + DoneSubjectsCount
let percentTask = Math.round((DoneSubjectsCount / totalTask) * 100)  
let pb = dv.el("progress-bar", "", { attr: {value: percentTask, style:"width=50%;"}})


dv.paragraph(  
pb 
)  
```
^cf21a0

### Handled subjects count

```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;

const IsDonePage = (p) => p.file.tasks
  .where((t) => t.completed || t.status== "-")
  .where(t => t.completion && t.completion == dv.date('today').ts)
  .length >0;
  
const DoneSubjectsCount = dv.pages(`${OfficeFilter.map(el => `"${el}"`).join(' or ')}`)
  .where(IsDonePage)
  .where(p => !p['Handled By']?.path)
  .length; 

dv.header(1,DoneSubjectsCount);
```
^0646c5

### Handled subjects
```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;

const IsDonePage = (p) => p.file.tasks
  .where((t) => t.completed || t.status== "-")
  .where(t => t.completion && t.completion == dv.date('today').ts)
  .length >0;
  

dv.table( 
  ['Done'],
  dv.pages(`${OfficeFilter.map(el => `"${el}"`).join(' or ')}`)
  .where(IsDonePage)
  .where(p => !p['Handled By']?.path)
  .sort(p => p.file.mtime,'asc')
  .map(p => [
    p.file.link
  ])
);
```
