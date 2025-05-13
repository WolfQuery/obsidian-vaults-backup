---
tags:
  - Tactic
Supports:
  - "[[Focusing on MIT]]"
From template: "[[Focus on MIT tactic]]"
---
<% tp.file.rename("Focus on MIT "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Task";
  });
}); 
%>

# Clearly define your MIT for today
- [ ] this file is created in the 2.Activity folder. Move it to another Work-in Progress folder if you wish to better organize it, then  complete this action.
- [ ] Pin this file by using the command "Alt + !"
- [ ] Check what is already planed for today in [[Due widgets]] and [[Next widgets]]
- [ ] Do a quick brainstorm of things that are not already planned but needs to be done today

- *brainstorm here in list format* 

- [ ] Choose your MIT and create a dedicated file for it or select an already existing file.  
- [ ] Make sure that the MIT file is correctly processed (with a tag, an action, and in a work-in-progress folder) with a high priority action or even better a timed action 

> [!tip] Start with a Mini-Win
> Make the first action of your MIT small (less than 5mn) and very detailed.
> Something like "close all your other apps, put your phone into no disturb mode, then outline what needs to be done " is a very good example of a first action for your MIT. 
> Also, The dedicated file is there to allow you to take note or brainstorm around that specific task, don't hesitate to use it. 

# Optional : improve your chances

If your MIT is a challenge, you can use one or both of the following buttons to get actionable tips to improve the chances of successfully completing it.


```meta-bind-button
label: It's a challenge !
icon: ""
hidden: false
class: ""
tooltip: ""
id: ""
style: default
actions:
  - type: replaceSelf
    replacement: |-
      ## Prepare for your MIT


      - [ ] Set a dedicated time block in your calendar

      > [!tip] Time blocking
      > Schedule a specific time in your day when you’re most focused (often in the morning) and dedicate it solely to the MIT. Treat this time as a non-negotiable appointment, giving it the same priority as any other important commitment.


      - [ ] Break down your MIT in the dedicated file in multiple actions. Start by a brainstorm then create an ordered action list


      > [!tip] Clarify and simplify 
      >If the task feels overwhelming, break it into smaller, manageable steps. Having a clear starting point can reduce procrastination and make the task less intimidating.


      If you still fear that you will not complete your MIT, you can try the following tips to improve your chances further 
    templater: false

```

```meta-bind-button
label: I fear I might not do it !
icon: ""
hidden: false
class: ""
tooltip: ""
id: ""
style: default
actions:
  - type: replaceSelf
    replacement: |
      ## Ensure success


      - [ ] Encourage single-tasking by adding an action to your MIT to Eliminate distraction

      > [!tip] Eliminate Distraction  
      > Create an environment conducive to focus by removing common distractions, such as turning off notifications, closing unrelated tabs, or using focus apps to block distracting websites. Even physical clutter can impact concentration, so keep your workspace organized.

      - [ ] Write a introduction phrase in your MIT describing why you choose to do this task as a priority

      > [!tip]  Reframe your mindset
      > Rather than seeing the MIT as something you “have to do,” reframe it as something you “choose to do” because it aligns with your goals. This mental shift can reduce resistance and make the task feel less like a chore.

      - [ ] Tell someone that this task will be done today

      > [!tip] Use accountability
      > Share your MIT with someone or write it down in a visible place. Knowing that someone else is aware of your goal can provide extra motivation to stay focused and complete it.
    templater: false

```

# Complete your MIT 

- [ ] Once your MIT is correctly scheduled and prepared. You can finish this action and archive this file. 

> [!tip] 
> If the result of your brainstorming in this file contains tasks or project that are not yet handled by your system, instead of archiving this file you can schedule a task for latter to create specific files for those. Don't bother with them yet, Focus on your MIT ! 

