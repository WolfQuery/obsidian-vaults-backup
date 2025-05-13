---
tags:
  - Debuff
---

```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;

const IsLatePage = (p) => p.file.tasks
  .where((t) => !t.completed)
  .where(t => (t.status != "-"))
  .where(
    (t) =>(
      (t.due && (t.due < dv.date('today').ts)) ||
      (t.scheduled && (t.scheduled < dv.date('today').ts)))
      ).length>0;

const LateSubjectsCount = dv.pages(`${OfficeFilter.map(el => `"${el}"`).join(' or ')}`)
  .where(p => p['Archived'] != true)
  .where(p => !p['Handled By']?.path)
  .where(IsLatePage)
  .length; 

dv.header(1,LateSubjectsCount+ " Subjects are overdues");
```
```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;
const IsLatePage = (p) => p.file.tasks
  .where((t) => !t.completed)
  .where(t => (t.status != "-"))
  .where(
    (t) =>(
      (t.due && (t.due < dv.date('today').ts)) ||
      (t.scheduled && (t.scheduled < dv.date('today').ts)))
      ).length>0;

dv.table( 
  ['Late'],
  dv.pages(`${OfficeFilter.map(el => `"${el}"`).join(' or ')}`)
  .where(p => p['Archived'] != true)
  .where(p => !p['Handled By']?.path)
  .where(IsLatePage)
  .sort(p => p.file.mtime,'asc')
  .map(p => [
    p.file.link
  ])
);
```