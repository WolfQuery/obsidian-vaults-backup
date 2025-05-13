---
tags:
  - Exercise-Template
Context: "[[Using the context property]]"
Access at level: 0
From template: "[[Get lvl 1 - Using the context property]]"
---
<% tp.file.rename("Get lvl 1 - Using the context property "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>

![[Context property description#What is a context]]

![[Context property description#Why use contexts]]

> [!tip] 
> Projects are usually very good targets for other files "context" property ! 
> Large responsibility are also very good targets for other files "context" property, remember that any "project" that you can think of that does not have an end date is a responsibility. So they can also be active and require actions. 

> [!success] In practice
> ### If you have done a mind sweep and reserved files for processing 
> - Check the "2.Activity" folder and look for already created projects folders or files
> - Look for 3 to 4 candidate files from your mind sweep that can represent a task or a sub-project for those projects
> - Process them and add the "Context" property, referencing their relevant project 
> - Check in the project file how those newly created files are appearing in the Activity tree and in the context tree
> ### Else
> - Create a new file and apply the project template to it
> - Create another file and fill the "context" property with a link to the project just created
> - Check in the project file how those newly created files are appearing in the Activity tree and in the context tree
> - Delete the newly created files to keep your system clean

>[!Info]
>## How to add a context ? 
>- Simple add the context property (ALT + P) and put a link to the context file in the property. (use double bracket for a link)

# Wrap-up

- [ ] When you understand how to add a context to a file, complete this action and finish the exercise ⏳ <% tp.date.now("YYYY-MM-DD") %>

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
      
      - Unlock [[Using the context property]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```
