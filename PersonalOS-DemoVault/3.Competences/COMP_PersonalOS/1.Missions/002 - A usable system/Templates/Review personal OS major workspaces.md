---
tags:
  - Exercise-Template
Context: "[[Using obsidian workspaces]]"
Access at level: 0
From template: "[[Review personal OS major workspaces]]"
---
<% tp.file.rename("Review personal OS major workspaces "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>
> [!Important] Tip
> Launching a workspace can be disorienting, don't forget to use "Engage" feature to get this file back ! 

>[!Info]
>## "Engaging" workspace
>![[Engaging workspace description#^8z1vji]]

> [!success] In practice
> Tour the engaging workspace then reopen this file using the engage feature. (CTRL+P and search for Load : "Engaging")

>[!Info]
>## "Collecting" workspace
>![[Collecting workspace description#^akmsmr]]

> [!success] In practice
> Tour the collecting workspace then reopen this file using the engage feature. 

>[!Info]
>## "Processing" workspace
>![[Processing workspace description#^o6wvb9]]

> [!success] In practice
> Tour the processing workspace then reopen this file using the engage feature. 


# Wrap-up

- [ ] When you finished touring the major workspaces, complete this action and finish the exercise ⏳ <% tp.date.now("YYYY-MM-DD") %>

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
    templater: false
```
