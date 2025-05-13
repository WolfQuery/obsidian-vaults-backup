---
tags:
  - Exercise-Template
Context: "[[Engaging]]"
Access at level: 0
From template: "[[Understanding the Personal OS workflow]]"
---
<% tp.file.rename("Understanding the Personal OS workflow "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>
> [!success] In practice
> Read and reflect on the content of this exercise to better understand the Personal OS workflow. 
# Workflow overview

![[Personal OS workflow simple overview.png]]

>[!Info]
>![[The Personal OS Workflow#Simple description]]

> [!important] Important
> ![[The collection habit description#^ucoi5u]]

# Wrap-up

- [ ] Once you understand the workflow and the importance of collecting, complete this action and finish the exercise 🔽⏳ <% tp.date.now("YYYY-MM-DD") %>

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
