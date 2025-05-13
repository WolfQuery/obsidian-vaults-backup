---
tags:
  - Widget
Context: "[[Applying Personal OS]]"
Archived: true
---
### Next subjects count

```dataviewjs 
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;
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

if(NextSubjectCount === 0) {
	dv.header(1, "👌")
} else {
	dv.header(1,NextSubjectCount);
}

```
^3122e0

### Next count vs advised

```dataviewjs 
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;
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

dv.header(1,NextSubjectCount+" / 3");
```

^5fcde9

### Next subjects

```dataviewjs 
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;
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

dv.table( 
  ['Next'],
  dv.pages(`${OfficeFilter.map(el => `"${el}"`).join(' or ')}`)
  .where(p => p['Archived'] != true)
  .where(p => !p['Handled By']?.path)
  .where(p => allEmptyTask(p) || hasStarted(p))
  .sort (p => p.file.mtime,'asc')
  .map (p => [
    p.file.link
  ])
);
```
