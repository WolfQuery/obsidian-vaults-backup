---
tags:
  - Exercise-Template
Context: "[[Using Personal OS core routines]]"
Access at level: 0
From template: "[[Integrate Personal OS core routines]]"
---
<% tp.file.rename("Integrate Personal OS core routines "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Exercise";
  });
}); 
%>
> [!tip]  
>Using action backlogs to batch actions together helps with efficiency and flexibility in the routines. 

>[!Info] 
>![[Batch processing routine description#The batch processing routine]]

> [!success] In practice
> 1. Look for the 2 following routines in this mission "Resources" (3.Competences/COMP_PersonalOS/1.Missions/002 - A usable system) folder : 
> 	- Batch system processing 
> 	- Personal OS Inbox 0
> 2. Move those routines in your "2.Activities" folder (directly in it or in a subfolder of your choosing)
> 3. Make sure to update the due dates for both of them to a date in the future and to adapt the recurrence and the time to your liking. **Note that we strongly advise to keep both as daily routines.**  

>[!Info] 
>![[Batch reviewing routine description#The batch reviewing routine]]

> [!success] In practice
> 1. Look for the 2 following routines in this mission (3.Competences/COMP_PersonalOS/1.Missions/002 - A usable system) "Resources" folder  : 
> 	- Batch trigger review 
> 	- Make collecting a habit
> 2. Move those routines in your "2.Activities" folder (directly in it or in a subfolder of your choosing)
> 3. Make sure to update the due dates for both of them to a date in the future and to adapt the recurrence and the time to your liking. **Note that we strongly advise to keep both as daily routines, but you can decrease the frequency of reviewing a habit trigger when it becomes second nature**

> [!tip]  
>Remember that if you fall out of the wagon and don't complete your routines on time, you can always use the "Auto-fail work in progress" command to avoid manually updating the missed dates. That's the main reason why we use "Due" dates for those routines. 

# Wrap-up

- [ ] When you finished integrating the core routines, complete this action and finish the exercise ⏳ <% tp.date.now("YYYY-MM-DD") %>

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
      
      - Unlock [[Using Personal OS core routines]] [level::1]
      - Unlock [[Managing routines]] [level::1]
      
      `BUTTON[obtain-rewards-skill]`
      
    templater: false
```
