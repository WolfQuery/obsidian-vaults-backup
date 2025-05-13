---
tags:
  - Exercise-Template
Context: "[[Using Process Dashboard]]"
Access at level: 0
From template: "[[Get lvl 1 - Using Process Dashboard]]"
---
<% tp.file.rename("Get lvl 1 - Using Process Dashboard "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>
![[Personal OS Dashboards#^emhfzc]]

![[Personal OS Dashboards#^rqckko]]

> [!success] In practice
> Access the Process dashboard, review the tutorial notes positioned in the dashboard and delete them as desired. Come back to this exercise using the engage feature once done. 

> [!tip] Tip
> You can Pin a tab by right clicking on it or using the "ALT+! " keyboard shortcut, doing it prevent that tab from being replaced by a new one. Try pinning the dashboard so you can reference it as you advance in the course.

> [!info] 
> ![[How to access dashboards#Ways to access dashboards]]

# Wrap-up

- [ ] Once everything else is done, finish this action and complete this exercise ⏳ <% tp.date.now("YYYY-MM-DD") %>

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
      
      - Unlock [[Using Process Dashboard]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```
