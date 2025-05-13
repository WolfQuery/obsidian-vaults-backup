---
tags:
  - Exercise-Template
Context: "[[Adding actions to a file]]"
Access at level: 0
From template: "[[Get lvl 1 - Adding actions to a file]]"
---
[<% tp.file.rename("Get lvl 1 - Adding actions to a file "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>


> [!info] 
> ![[Actions in Personal OS#^lmguai]]

# Adding actions to your files

> [!success] In practice
> Transform the following lines into actions by following  the recommended method. 

Right click in this line, select "Paragraph/Task list", then complete the action by clicking into the checkbox

Place your cursor in this line, use **"CTRL+L" (Control Action List)** 2 times, then complete the action by using the same shortcut again

Place your cursor at the start of this line, type "- [ ] "(there is a space after the dash, between the 2 bracket, and another after the brackets), then complete the action by using **"CTRL+L" (Control action List)**

Place your cursor in this line, use **"CTRL + P" (Control Command Pallet)** , search for "Create or edit tasks", fill the modal with relevant information, then complete the action 

> [!tip] 
> Note that a completed date is automatically filled when an action is completed. This date in important for a lot of statistics in Personal OS. 

> [!Info] 
> ![[How to add actions to a file#Ways to add actions]]


# Adding properties to your actions 

> [!success] In practice
> Transform the following lines into actions, then add properties by following  the recommended method. 

Transform this line into an action, then add a scheduled date by moving to the end of the line,  typing "sc" and selecting scheduled date, then start typing "Today" to fill the date, finally complete the action. 

Transform this line into an action then add a start date by moving to the end of the line,  typing "st" and selecting start date, then start typing "Tomorrow" to fill the date, finally complete the action.

Transform this line into an action, then add a due date by moving to the end of the line,  typing "due" and selecting due date, then start typing "Monday" to fill the date, finally complete the action.

Transform this line into an action, then add a high priority date by moving to the end of the line,  typing "hi" and selecting "highest priority", add a scheduled date then type "June 22" to fill the date, finally complete the action.

Transform this line into an action, then add a time moving to the end of the line,  insert the watch emoji by using "Alt + A" (alternative action time) shortcut ( or use "CTRL+P " shortcut , search for "emoji", then after opening the emoji picker  search for "watch"),  follow it with a time in 24h format (see example bellow), add a scheduled date then start typing "next week" to fill the date, finally complete the action. 

- Example time : ⌚16:00


> [!tip] 
> Note that time should always be the first "property" in a task, if you add time after some date the tasks plugin is malfunctioning. 

# Wrap-up

- [ ] After transforming all the lines into actions using various methods, finish this action and complete this exercise ⏳ <% tp.date.now("YYYY-MM-DD") %>

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
      
      - Unlock [[Adding actions to a file]] [level::1]
      - Unlock [[Managing actions]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```
