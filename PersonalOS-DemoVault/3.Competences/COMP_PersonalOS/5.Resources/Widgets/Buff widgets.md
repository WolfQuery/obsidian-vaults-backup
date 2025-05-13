---
tags:
  - Widget
Context: "[[Applying Personal OS]]"
Archived: true
---
### Buff Bar
```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;

let buffList = "";

const isDuePage = (p) => p.file.tasks
  .where((t) => !t.completed)
  .where(t => (t.status != "-"))
  .where(
    (t) =>(
      (t.due && (t.due.ts == dv.date('today').ts)) ||
      (t.scheduled && (t.scheduled.ts == dv.date('today').ts)))
      ).length>0;


const IsDonePage = (p) => p.file.tasks
  .where((t) => t.completed || t.status== "-")
  .where(t => t.completion && t.completion == dv.date('today').ts)
  .length >0;
  
const DoneSubjectsCount = dv.pages(`${OfficeFilter.map(el => `"${el}"`).join(' or ')}`)
  .where(IsDonePage)
  .where(p => !p['Handled By']?.path)
  .length; 


const DueSubjectsCount = dv.pages(`${OfficeFilter.map(el => `"${el}"`).join(' or ')}`)
  .where(p => p['Archived'] != true)
  .where(p => !p['Handled By']?.path)
  .where(isDuePage)
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

if (DueSubjectsCount == 0) {buffList=buffList+"[[Dues Done|💸]]"}
if (percentTask >= 50) {buffList=buffList+"[[50% Handled Buff|😼]]"};


if(buffList === "") {
	;
} else {
	dv.el("h1",buffList);
}
```

^fcc2ed


### Dues Done buff

```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;

let buffList = ""
const isDuePage = (p) => p.file.tasks
  .where((t) => !t.completed)
  .where(t => (t.status != "-"))
  .where(
    (t) =>(
      (t.due && (t.due.ts == dv.date('today').ts)) ||
      (t.scheduled && (t.scheduled.ts == dv.date('today').ts)))
      ).length>0;

const dueSubjectsCount = dv.pages(`${OfficeFilter.map(el => `"${el}"`).join(' or ')}`)
  .where(p => p['Archived'] != true)
  .where(isDuePage)
  .length; 

if (dueSubjectsCount == 0) {buffList=buffList+"[[Dues Done Buff|💸]]"}

if(buffList === "") {
	;
} else {
	dv.el("h1",buffList);
}
```
[[3.Competences/COMP_PersonalOS/Buffs and Debuffs/Dues Done Buff|💸]]


### Handled % buffs

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
let buff = "";
if (percentTask >= 50) {buff="[[50% Handled Buff|😼]]"};




dv.paragraph(  
buff
)  
```
[[3.Competences/COMP_PersonalOS/Buffs and Debuffs/50% Handled Buff|😼]]

