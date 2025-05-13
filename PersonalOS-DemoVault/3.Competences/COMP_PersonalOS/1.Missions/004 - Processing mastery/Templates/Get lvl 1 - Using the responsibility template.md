---
tags:
  - Exercise-Template
Context: "[[Using the responsibility template]]"
Access at level: 0
From template: "[[Get lvl 1 - Using the responsibility template]]"
---
<% tp.file.rename("Get lvl 1 - Using the responsibility template "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>
![[Responsibility in Personal OS description#^28man4]]

> [!info] 
> ![[Responsibility Template description#The Responsibility template comes with]]

> [!success ] In practice
> ### If you have done a mind sweep and reserved files for processing 
> - Look for 3 to 4 candidate files from your mind sweep that can represent a responsibility
> - Apply the template then move them into your activity folder, note that you can create dedicated folders for responsibilities or use the already existing ones
> ### Else
> - Think about one responsibility that you have (ex: Health)
> - Create a new file, name it then apply the responsibility template using Alt + T
> - Add the archive property to that responsibility then move it to your activity folder 

- [ ] Complete this action after you used the responsibility template 

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
      
      - Unlock [[Using the responsibility template]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```
