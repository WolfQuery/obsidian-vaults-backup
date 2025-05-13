---
tags:
  - Exercise-Template
Context: "[[Delaying actions]]"
Access at level: 0
From template: "[[Get lvl 1 - Delaying actions]]"
---
<% tp.file.rename("Get lvl 1 - Delaying actions "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>


![[Delaying action decription#^4azfhx]]

> [!success] In practice
> Add a start date and generate a random date in an interval for the following tasks using the "ALT+D" (Alternative delay) hotkey. 

- [ ] Find a nice book on string theory 
- [ ] Organize some vacations in Italy
- [ ] Start going to the gym 


>[!Info]
>![[How to delay actions#Ways to delay actions]]

> [!tip] 
>![[How to delay actions#^cn8slc]]

# Wrap-up

- [ ] When you come back to this file using the Engage feature, complete this action and finish the exercise ⏳ <% tp.date.now("YYYY-MM-DD") %>

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
      
      - Unlock [[Delaying actions]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```
