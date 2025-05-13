---
tags: "#Exercise"
Context: "[[Using Engage current file feature]]"
Access at level: 0
From template: "[[Get lvl 1 - Using the Engage current file feature]]"
Completed on: 2025-04-04
Archived: true
---


> [!info]
> ![[Engage the current file feature description#Introduction]]
> 
> You can review how the standard "Engage" feature algorithm works here [[Engage feature description]]

> [!success] In practice
> - This file contains a file backlog from the [[File backlog example]] and action backlogs from the [[Action backlog examples]]
> - Generate training files by using the following button. then observe how they appear in this file backlogs




## Due actions
Show  available actions in "Handled by" files, they need to have either a schedule date or a due date in the past.
```tasks
(scheduled before tomorrow) OR (due before tomorrow) OR (no happens date)
not done
sort by happens
filter by function \
let sourcePath = query.file.path ; \
let taskPath = task.file.path ; \
let pageHandlePath = app.plugins.plugins['dataview'].api.page(taskPath)['Handled By']?.path; \
let go = (sourcePath == pageHandlePath) ;\
return go
```


## Next actions
Shows actions that can be done "as soon as possible" in "Handled by" files, either because the start date has passed or because there is no date. Note that this backlog removed actions from files that contains a scheduled action. 

```tasks
((has start date) AND (starts before tomorrow) AND (no scheduled date) AND (no due date)) OR (no happens date)
not done
hide recurrence rule
filter by function \
let dv = app.plugins.plugins['dataview'].api;\
const hasStarted = (p) =>\
  p.file.tasks\
    .where((t) => !t.completed && !t.fullyCompleted)\
    .where((t) => t.status != "-")\
    .where((t) => t.start && dv.date(t.start) <= dv.date("today").ts && !t.scheduled)\
    .length > 0;\
const allEmptyTask = (p) =>\
  (\
    p.file.tasks\
      .where((t) =>\
        t.start ||\
        t.due ||\
        t.scheduled ||\
        t.text.contains("[[Someday]]") ||\
        t.text.contains("#Someday")\
      )\
      .where((t) => !t.completed && !t.fullyCompleted)\
      .where((t) => t.status != "-")\
      .length == 0\
  )\
  &&\
  (\
    p.file.tasks\
      .where((t) => !t.completed && !t.fullyCompleted)\
      .where((t) => t.status != "-")\
      .length > 0\
  );\
let sourcePath = query.file.path;\
let taskPath = task.file.path;\
let pageHandlePath = dv.page(taskPath)['Handled By']?.path;\
let sameHandler = (sourcePath == pageHandlePath);\
let page = dv.page(taskPath);\
let fileOK = hasStarted(page) || allEmptyTask(page);\
return sameHandler && fileOK

```


## File backlog 
**List of "Handled by" referencing files that are not in the "frontlinks" of the current file**


```dataviewjs
let currentPath = dv.current().file.path;
let Outlinks = dv.current().file.outlinks.values

const items = dv.pages()
  .where(p => p['Archived'] != true)
  .where(p => p['Handled By']?.path == currentPath)
  .where(p => !Outlinks.some(l => l.path == p.file?.path))
  .file.link

if(items.length === 0) {
	dv.el("b", "All items are ordered 👌")
} else {
	dv.list(items);
}
```


> [!success] In practice
> - Use the "Engage current file" feature multiple times (ALT + 3) 
> - Confirm that files in this file backlog are automatically open. 

>[!Info]
>![[How to use Engage current file feature#Ways to use the Engage current file feature]]

> [!important] Tip
> "Engage current file" can be apply to any type of backlog, file backlogs AND actions backlogs, since it's based on the "Handled By" property of related files. 

# Wrap-up

- [x] When you feel confident about your potential use of backlogs, complete this action and finish the exercise ⏳ 2025-04-04 ✅ 2025-04-04

## Exercise completed ! 👍 

# Rewards

- Unlock [[Using Engage current file feature]] [level::1] ✔️

![[Pasted image 20241022050958.png|400]]

