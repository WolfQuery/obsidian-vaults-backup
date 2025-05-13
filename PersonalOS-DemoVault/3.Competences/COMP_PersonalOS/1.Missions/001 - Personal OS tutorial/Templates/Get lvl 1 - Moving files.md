---
tags:
  - Exercise-Template
Context: "[[Moving files]]"
Access at level: 0
From template: "[[Get lvl 1 - Moving files]]"
---
<% tp.file.rename("Get lvl 1 - Moving files "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>
# Moving a file

> [!success] In practice
> Move the current file to different folders then back to the current one

> [!tip] Tip
> You can see path of the currently open file at the top of the page. It's also possible to open the folder tree to one of the path folder by clicking on it in that path. 

> [!info] 
> ![[How to move files#Ways to move files]]

# Wrap-up

- [ ] When you understand how to move files, , complete this action and finish the exercise ⏳ <% tp.date.now("YYYY-MM-DD") %>

> [!tip] tip
> Moving or renaming files sometimes breaks queries. If it happens just put your cursor above the error, then use the keyboard arrow to go inside the code block then go back out, it should fix the error. You can also close the file and relaunch it by searching for it.  

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
      
      - Unlock [[Moving files]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```
