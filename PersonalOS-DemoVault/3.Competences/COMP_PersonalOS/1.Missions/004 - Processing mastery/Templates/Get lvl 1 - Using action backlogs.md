---
tags:
  - Exercise-Template
Context: "[[Using action backlog]]"
Access at level: 0
From template: "[[Get lvl 1 - Using action backlogs]]"
---
<% tp.file.rename("Get lvl 1 - Using action backlogs "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>
> [!info]
> ![[Action backlog description#Introduction]]

> [!success] In practice
> - This file contains action backlogs from the [[Action backlog examples]]
> - Generate training files by using the following button. then observe how they appear in this file backlog


```meta-bind-button
label: Generate files
icon: ""
hidden: false
class: ""
tooltip: ""
id: ""
style: primary
actions:
  - type: replaceSelf
    replacement: "3.Competences/COMP_PersonalOS/1.Missions/004 - Processing mastery/Templates/Get lvl 1 - Using action backlog - Generate files template.md"
    templater: true
```

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



> [!success] In practice
> - Empty the action backlog by following each task instruction. 

# Wrap-up

- [ ] When your action backlogs are empty, complete this action and finish the exercise ⏳ <% tp.date.now("YYYY-MM-DD") %>

```meta-bind-button
label: Click this only after you finished the exercise !
icon: ""
hidden: false
class: ""
tooltip: ""
id: ""
style: destructive
actions:
  - type: updateMetadata
    bindTarget: '["Completed on"]'
    evaluate: true
    value : "new Date().toISOString().split('T')[0];" 
  - type: updateMetadata
    bindTarget: Archived
    evaluate: false
    value : "true" 
  - type: replaceSelf
    replacement: |
      ## Exercise completed ! 👍 
      
      # Rewards
      
      - Unlock [[Using action backlog]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```
