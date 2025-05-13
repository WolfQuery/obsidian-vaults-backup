# Action backlog

## Due actions
Show  available actions in "Handled by" files, they need to have either a schedule date or a due date in the past.
```tasks
(happens before tomorrow)
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
((has start date) AND (starts before tomorrow) AND (no scheduled date)) OR (no happens date)
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


# File backlog 

**List of "Handled by" referencing files that are not in the "frontlinks" of the current file**


```dataviewjs
function getCurrentPage() {
    const activeFile = app.workspace.getActiveFile();
    return dv.page(activeFile.path);
}

let currentPage = getCurrentPage();
let currentPath = currentPage.file.path;
let Outlinks = currentPage.file.outlinks.values;

const items = dv.pages()
    .where(p => p['Archived'] != true)
    .where(p => p['Handled By']?.path == currentPath)
    .where(p => !Outlinks.some(l => l.path == p.file?.path))
    .file.link;

if (items.length === 0) {
    dv.el("b", "All items are ordered 👌");
} else {
    dv.list(items);
}

```


