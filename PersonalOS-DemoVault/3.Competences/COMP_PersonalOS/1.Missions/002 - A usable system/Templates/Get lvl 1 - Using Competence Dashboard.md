---
tags:
  - Exercise-Template
Context: "[[Using Competence Dashboard]]"
Access at level: 0
From template: "[[Get lvl 1 - Using Competence Dashboard]]"
---
<% tp.file.rename("Get lvl 1 - Using Competence Dashboard "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>
![[Personal OS Competence Dashboard#^wvfymw]]

> [!success] In practice
> Access the Competence dashboard, review the tutorial notes positioned in the dashboard and delete them as desired. Come back to this exercise using the engage feature once done. 

> [!info] 
> ![[How to access dashboards#Ways to access dashboards]]

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
      
      - Unlock [[Using Competence Dashboard]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```
