---
tags:
  - Exercise-Template
Context: "[[Delegating files]]"
Access at level: 0
From template: "[[Get lvl 1 - Delegating files]]"
---
<% tp.file.rename("Get lvl 1 - Delegating files "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>
![[Delegating description#^7wyiu6]]

> [!success] In practice
> - Think of a person you can delegate a task to
> - Create that person file by using the "@Agent" template. 
> - Make sure to name that file using "@" before the person name, then move that file to the 7.Community folder. 
> - Create the task file to delegate to that person. 
> - Make sure to fill the file properties "tags" and "Context"
> - Fill the "Delegated To" property with a link to the created person
> - Add an action to the file to be sure to follow-up on the delegation
> - Confirm in that person file that you can see the delegated file in the corresponding widget

> [!info] 
> ![[How to delegate a file#Process to delegate a file]]

# Wrap-up

- [ ] When you're finished with your first file delegation, complete this action and finish the exercise ⏫ ⏳ <% tp.date.now("YYYY-MM-DD") %>

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
      
      - Unlock [[Delegating files]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```
