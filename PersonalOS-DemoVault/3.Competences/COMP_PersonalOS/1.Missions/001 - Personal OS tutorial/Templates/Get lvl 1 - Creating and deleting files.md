---
tags:
  - Exercise-Template
Context: "[[Creating and Deleting files]]"
Access at level: 0
From template: "[[Get lvl 1 - Creating and deleting files]]"
---
<% tp.file.rename("Get lvl 1 - Creating and deleting files "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>
# Creating files

> [!tip] Tip
> Creating a file is the simplest but also the most frequently used action in obsidian. By default in Personal OS, every new file is created in the "1.Inbox" folder. 

> [!success] In practice
> Create several new "test" files using various methods. 

> [!info]
> ![[How to create and delete files#Ways to create files]]


# Deleting a file

> [!success] In practice
>  ### Do not delete this file 😏
>  Delete all the test files previously created using various methods. 

> [!info]
> ![[How to create and delete files#Ways to delete files]]

> [!tip] Tip
>  Note that if you wrongly deleted a file, you can restore it from your system trash-bin. 


# Wrap-up

- [ ] When all the files have been created and deleted, , complete this action and finish the exercise ⏳ <% tp.date.now("YYYY-MM-DD") %>

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
      
      - Unlock [[Creating and Deleting files]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```