---
tags:
  - Exercise-Template
Context: "[[Applying a template]]"
Access at level: 0
From template: "[[Get lvl 1 - Applying a template]]"
---
<% tp.file.rename("Get lvl 1 - Applying a template "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>
![[Obsidian Templater Templates description#Introduction]]

> [!question] If you are wondering
> Yes every mission,  course, exercise or even helper files created during your journey are generated using templates ! 


> [!success] In practice
> - Create a new file directly from a template by using the "ALT + N (Alternative New file)" and selecting any template
> - Create a new file, then add a template to that file by using the "ALT + T (Alternative Template)" and selecting any template
> - Delete the previously created files to keep your system clean. 


>[!Info]
>![[How to apply a template#Ways to apply a template]]

# Wrap-up

- [ ] When you have succeeded in applying a template,  complete this action and finish the exercise ⏫ ⏳ <% tp.date.now("YYYY-MM-DD") %>

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
      
      - Unlock [[Applying a template]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```
