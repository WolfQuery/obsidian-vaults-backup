---
tags:
  - Tactic
Supports:
  - "[[Planning your day]]"
From template: "[[Planning your day tactic 01]]"
---
<% tp.file.rename("Planning your day "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Task";
  });
}); 
%>

- [ ] Start by Pining this file "ALT + !" so it stays in your workspace while you create new files
# Collect


> [!success] In practice
> ## Brainstorm and create a new file for every subject that comes to mind that your might need to handle today ! 

Don't really judge quantity or quality, just think about everything you want to do today, and for each thing create a separate file. 


# Process

> [!success] In practice
> ## Use the processing feature until your Inbox is empty ! 

Make sure to clearly define the next action on each file and schedule those actions ! 
You can use the [[Personal OS simple file processing flowchart]] if you need some help. 


# Engage

Review your Engage dashboard, finish this task and start using the engage feature to advance on your day ! 

- [ ] Complete this task when you're finished planning your day, also don't forget to Archive this file  🔺 ⏳ <% tp.date.now("YYYY-MM-DD") %>




