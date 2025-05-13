---
tags:
  - Widget
Context: "[[Applying Personal OS]]"
Archived: true
---
### Debuff Bar
```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;
let DebuffList = ""
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

if (LateSubjectsCount > 0) {DebuffList=DebuffList+"[[Late Debuff|⏰]]"}

if(DebuffList === "") {
	;
} else {
	dv.el("h1",DebuffList);
}
```

^aea62d

### Late Debuff
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
  
if(LateSubjectsCount === 0) {
	;
} else {
	dv.el("h1","[[Late Debuff|⏰]]");
}
```
[[Late Debuff|⏰]]
