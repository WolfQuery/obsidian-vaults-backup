---
tags:
  - Exercise-Template
Context: "[[Using the backlog template]]"
Access at level: 0
From template: "[[Get lvl 1 - Using the backlog template]]"
---
<% tp.file.rename("Get lvl 1 - Using the backlog template "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%> 
![[Backlog in Personal OS description#Introduction]]

![[Backlog Template description#^iznx4s]]
 
> [!success ] In practice
> - Create a new test file, add the backlog template into it. 
> - Try creating other files handled by your new backlog and see how it impacts the various widgets. 
> - When finished, delete the created files to keep your system clean

- [ ] Complete this action after you tried the backlog template 

> [!info]
> ![[How to apply a template#Ways to apply a template]]
# Wrap-up

- [ ] Once you're done, complete this action and finish the exercise ⏫ ⏳ <% tp.date.now("YYYY-MM-DD") %>

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
      
      - Unlock [[Using the backlog template]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```
