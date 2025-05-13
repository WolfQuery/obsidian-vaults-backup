---
tags: []
Status: In progress
End Date: 2026-06-25
---
<% tp.file.rename("Master Personal OS "+ tp.date.now("YYYY-MM-DD-HHmm")) %>
<%* tp.hooks.on_all_templates_executed(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  await app.fileManager.processFrontMatter(file, (frontmatter) => {
    frontmatter["tags"] = "#Project";
  });
}); 
%>

> [!success] In practice
> This project next action is late. But you don't need to do it right now
> On the other hand you realize you need to ask a friend to send you a pdf of a book he advised you to read
> - Delay the current action by 1-4 weeks using Alt+Shift+D
> - Pin this file using Alt + ! to keep it il your layout until your finished with it. 
> - Create a new Agent using Alt+N and name it @John. Archive that agent and move it to the "Process folder"
> - Create a new action in the "Actions" section : "Send advised book" and add a link to the newly created "@John" agent file (use double bracket before searching for @John) , then add "follow-up on it" and schedule it for 2 days from now
> - Don't bother with the task backlog, you've looked at it but decided you'll handle that another time
> - This file is now processed, use Alt+2 again

> [!success] Goal 
> Become an uncontested inter-galactic master in self-management
>

```dataviewjs
const endDate = dv.current().file.frontmatter["End Date"]; // Retrieve the "End date" property from frontmatter
if (endDate) {
    const now = moment(); // Current time
    const end = moment(endDate); // Parse the "End date"
    
    // Calculate the difference
    const duration = moment.duration(end.diff(now));
    const days = Math.floor(duration.asDays());
    const hours = duration.hours();
    const minutes = duration.minutes();

    // Display the result
    if (end.isAfter(now)) {
        dv.el("h2", `You have ${days} days, ${hours} hours, and ${minutes} minutes left.`);
    } else {
        dv.el("h2", `The end date has passed.`);
    }
} else {
    dv.el("h2", "No 'End date' property found in this file.");
}

```
# Actions
- [ ] Share some of your knowledge on personal organization with a collegue ⏳ <% tp.date.now("YYYY-MM-DD",-5) %>

# Current priority
- *Link priority backlog items here.* 

# Backlog 

```dataviewjs
let currentPath = dv.current().file.path;
let Outlinks = dv.current().file.outlinks.values

const items = dv.pages()
  .where(p => p['Archived'] != true)
  .where(p => p['Handled By']?.path == currentPath)
  .where(p => !Outlinks.some(l => l.path == p.file?.path))
  .file.link

if(items.length === 0) {
	dv.el("b", "All items are ordered 👌")
} else {
	dv.list(items);
}
```

# Sub activities 
```dataviewjs
let contexts = []; 
let childs = dv.pages('#Project OR #Task OR #Routine OR #Responsibility').where(p => p.Archived != true);

function listRecursive(page, depth) {
    let subjects = [];
    if (contexts.includes(page.file.path)) return subjects; // Use includes for clarity
    if (depth <= 0) return subjects;
    contexts.push(page.file.path);

    // All pages in the context of the current file
    let pages = childs
		.where(p => p["Context"]?.path == page.file.path);
    pages.forEach(p => {
        subjects.push(p.file.link);
        let subsubjects = listRecursive(p, depth - 1);
        if (subsubjects.length > 0) {
            subjects.push(subsubjects); // Flatten the array before adding
        }
    });

    return subjects; // Always return an array, avoid returning null
}

let finalList = [];
let page = dv.current();


finalList.push(page.file.link);
let childItems = listRecursive(page, 10);
if (childItems.length > 0) {
	finalList.push(childItems); // Flatten the array before adding
}


dv.list(finalList);
```
# Full context tree
```dataviewjs
let contexts = []; 
let childs = dv.pages();

function listRecursive(page, depth) {
    let subjects = [];
    if (contexts.includes(page.file.path)) return subjects; // Use includes for clarity
    if (depth <= 0) return subjects;
    contexts.push(page.file.path);

    // All pages in the context of the current file
    let pages = childs
		.where(p => p["Context"]?.path == page.file.path);
    pages.forEach(p => {
        subjects.push(p.file.link);
        let subsubjects = listRecursive(p, depth - 1);
        if (subsubjects.length > 0) {
            subjects.push(subsubjects); // Flatten the array before adding
        }
    });

    return subjects; // Always return an array, avoid returning null
}

let finalList = [];
let page = dv.current();


finalList.push(page.file.link);
let childItems = listRecursive(page, 10);
if (childItems.length > 0) {
	finalList.push(childItems); // Flatten the array before adding
}


dv.list(finalList);
```
# Brainstorming 
*Free form brainstorm about your project there* 

I guess it does not sound like a bad idea. 