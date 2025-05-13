---
tags:
  - Exercise-Template
Context: "[[Shelving activity resources]]"
Access at level: 0
From template: "[[Get lvl 1 - Shelving activity resources]]"
---
<% tp.file.rename("Get lvl 1 - Shelving activity resources "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>
![[Activity in Personal OS description#^16rywo]]

![[Activity resource description#^idk5gt]]

> [!success] In practice
> ### If you have done a mind sweep and reserved files for processing 
> - Check the "2.Activity" folder and look for already created projects folders or files
> - Look for 3 to 4 candidate files from your mind sweep that can represent a resource for one of those projects
> - Process them and add the "Context" property, referencing their relevant project 
> - Check in the project file how those newly created files are appearing in the Activity tree and in the context tree
> ### Else
> - Choose one of you project file in which you used the project template
> - Create a new file and add the tag "Reflection" in the "tags" property
> - Since that reflection only make sense in the context of that project, add a link to that project in the "Context" property
> - Reflect for 1mn about your project 
> - Add a next action to that reflection and either delay it or handle it to your project using the "Handled By" property
> - Move that reflection to your project folder
> - Verify your project file and confirm that your reflection is shown in the Full context tree

> [!info]
> ![[How to shelve an activity resource#Process to shelve an activity resource]]

# Wrap-up

- [ ] When you're finished shelving your first activity resource, complete this action and finish the exercise ⏫ ⏳ <% tp.date.now("YYYY-MM-DD") %>

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
      
      - Unlock [[Shelving activity resources]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```
