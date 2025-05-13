---
tags:
  - Exercise-Template
Context: "[[Shelving global resources]]"
Access at level: 0
From template: "[[Get lvl 1 - Shelving global resources]]"
---
[<% tp.file.rename("Get lvl 1 - Shelving global resources "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>
![[Global resource description#^0igw2m]]

> [!success] In practice
> ### If you have done a mind sweep and reserved files for processing 
> - Look for 3 to 4 candidate files from your mind sweep that can represent a global resource
> - Process them and add them to a relevant folder in 4.Resources
> - Check in the file tree to make sure you find them back
> ### Else
> - Create a new file and add the tag "Quote" in the "tags" property
> - Create a "RESO_Quotes" subfolder in the 4.Resources folder
> - Find a nice quote that you like and write it in the file :)
> - Move that quote to the newly created folder

> [!info]
> ![[How to shelve an global resource#Process to shelve a global resource]]

# Wrap-up

- [ ] When you're finished shelving your global resource, complete this action and finish the exercise ⏫ ⏳ <% tp.date.now("YYYY-MM-DD") %>

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
      
      - Unlock [[Shelving global resources]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```
