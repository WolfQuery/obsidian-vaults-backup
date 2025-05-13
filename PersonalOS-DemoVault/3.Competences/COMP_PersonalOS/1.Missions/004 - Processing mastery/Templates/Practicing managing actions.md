---
tags:
  - Exercise-Template
Context: "[[Managing actions]]"
Access at level: 2
From template: "[[Practicing managing actions]]"
---
<% tp.file.rename("Practicing managing actions "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>
**As a recap of all you previously learned, let's practice everything we can do with actions.** 

> [!success] In practice
> Transform the following line into an action (CTRL+L 2 times), schedule it for today (use "sc", then "today), then finish the action (CTRL+L)

Photograph a transformer


> [!success] In practice
> Transform the following line into an action (CTRL+L 2 times), add an every day recurrence ("rec" then "every day"),  schedule it for today (use "sc", then "today), then finish the action (CTRL+L)

Shampoo my cat


> [!success] In practice
> Transform the following line into an action (CTRL+L 2 times),  add a start date (use "st") , then generate a random delayed date between 1 and 3 month (ALT+D)

Eat some vegetables


> [!success] In practice
> Transform the following line into an action (CTRL+L 2 times),  add a start date for tomorrow (use "st", then tomorrow) , then globally delay all this file action by 1-4 weeks (ALT+ Shift + D)

Burn a stick


> [!success] In practice
> Transform the following line into an action (CTRL+L 2 times), add an every day recurrence ("rec" then "every day"),  add a due date for  for today (use "due", then "today), then fail the action using auto fail current file (CTRL + P then search for auto fail current file)

Do 15 000 push-ups


> [!success] In practice
> Play with showing then hiding completed or failed action by using the "Toggle action hider" command (CTRL +R or search in the command palette)



# Wrap-up

- [ ] When you finished practicing managing actions, complete this action and finish the exercise ⏳ <% tp.date.now("YYYY-MM-DD") %>

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
    templater: false
```
