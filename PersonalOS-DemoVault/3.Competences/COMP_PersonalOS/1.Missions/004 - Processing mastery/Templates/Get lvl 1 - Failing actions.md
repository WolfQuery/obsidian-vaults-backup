---
tags:
  - Exercise-Template
Context: "[[Failing actions]]"
Access at level: 0
From template: "[[Get lvl 1 - Failing actions]]"
---
<% tp.file.rename("Get lvl 1 - Failing actions "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>
![[Failing action description#Introduction]]


> [!success] In practice
> Fail the 2 following actions by using the "**Auto fail work in progress files**" automation.

*Notice that this is recurringly failed until the current day.* 

- [ ] Get Inbox 0 on my e-mails 🔁 every day 📅 <% tp.date.now("YYYY-MM-DD", -5) %>

*Notice that it is replaced by a scheduled action that will be handled during processing as a "late" action.* 

- [ ] Clean and rearrange the fridge 📅 <% tp.date.now("YYYY-MM-DD", -2) %>


> [!success] In practice
> Fail the 2 following actions by using the "**Auto fail current file**" automation. Note that it will also affect the previous "Get inbox 0" recurrence that was repositioned to the current day, as failing the current file also take into account current day actions. 

*Notice that the current day is also failed.* 

- [ ] Play some ping-ping with my little brother 🔁 every day 📅 <% tp.date.now("YYYY-MM-DD") %>

*Notice that it is replaced by a scheduled action that should be delayed.*  

- [ ] Grow wings and fly to Bali 📅 <% tp.date.now("YYYY-MM-DD") %>

>[!Info]
>![[How to use failing action automations#Ways to automatically fail actions]]

> [!tip] 
> Don't underestimate the use of these automations, remember to use it if you failed to complete a lot of your programmed routines, also this means that you should emphasis the use of 📅 due dates in routines. Particularly on daily routines. 

# Wrap-up

- [ ] Once you understand how failing action works, complete this action and finish the exercise ⏳ <% tp.date.now("YYYY-MM-DD") %>

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
      
      - Unlock [[Failing actions]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```
