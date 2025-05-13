---
tags:
  - Tool
Supports:
  - "[[Using action backlog]]"
---
# Action backlogs

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


