---
tags:
  - Exercise-Template
Context: "[[Collecting]]"
Access at level: 0
From template: "[[Understanding the collection habit]]"
---
<% tp.file.rename("Understanding the collection habit "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>
> [!success] In practice
>- Review and reflect the following knowledge. Take your time as those are central to the Personal OS methodology. 
# The inbox concept

> [!info] 
> ![[The inbox concept#^2g35jc]]
# Reducing your number of Inboxes

![[The inbox concept#Managing inboxes is no longer optional]]
# Make collection a habit

> [!important] 
> ![[Collection as a habit]]
# Wrap-up

- [ ] When you're finished reviewing and reflecting on the above information, complete this action and finish the exercise  ⏳ <% tp.date.now("YYYY-MM-DD") %>

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
