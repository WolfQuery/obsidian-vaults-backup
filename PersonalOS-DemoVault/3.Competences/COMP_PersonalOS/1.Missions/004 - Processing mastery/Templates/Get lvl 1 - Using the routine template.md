---
tags:
  - Exercise-Template
Context: "[[Using the routine template]]"
Access at level: 0
From template: "[[Get lvl 1 - Using the routine template]]"
---
<% tp.file.rename("Get lvl 1 - Using the routine template "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>
![[Routine in Personal OS description#^g4oiv6]]

> [!info] 
>![[Routine Template description#The routine template comes with]]

> [!success ] In practice
> ### If you have done a mind sweep and reserved files for processing 
> - Look for 3 to 4 candidate files from your mind sweep that can represent a routine
> - Apply the template then move them into your activity folder, note that routines are usually moved to dedicated projects or responsibility folders. 
> ### Else
> - Think about one routine that you would like to respect
> - Create a new file, name it then apply the routine template using Alt + T
> - Add a recurring action then move that routine into one of your activity folders

- [ ] Complete this action after you used the routine template 

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
      
      - Unlock [[Using the routine template]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```
