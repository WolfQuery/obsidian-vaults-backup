---
tags:
  - Project
Context: 
Status: In progress
End Date: 2025-08-31
---
> [!success] Goal 
> Create a full fledged magical system 
>

```dataviewjs
function getCurrentPage() {
    const activeFile = app.workspace.getActiveFile();
    return dv.page(activeFile.path);
}

let currentPage = getCurrentPage();
const endDate = currentPage.file.frontmatter["End Date"];

if (endDate) {
    const now = moment();
    const end = moment(endDate);
    
    // Calculate the difference
    const duration = moment.duration(end.diff(now));
    const days = Math.floor(duration.asDays());
    const hours = duration.hours();
    const minutes = duration.minutes();

    // Display the result
    if (end.isAfter(now)) {
        dv.el("h2", `You have ${days} days, ${hours} hours, and ${minutes} minutes left.`);
    } else {
        dv.el("h2", "The end date has passed.");
    }
} else {
    dv.el("h2", "No 'End date' property found in this file.");
}
```
# Actions
- [x] Finish Level 0 runes ✅ 2025-04-04
- [x] Finish Level 1 runes ✅ 2025-04-04
- [x] Finish energy system ✅ 2025-04-04
- [ ] Finish casting guide 🛫 2025-04-05 ⏳ 2025-04-09 

# Current priority
- *Link priority backlog items here.* 

# Backlog 

```dataviewjs
// Ensure always getting the latest active file state
function getCurrentPage() {
    const activeFile = app.workspace.getActiveFile();
    return dv.page(activeFile.path);
}

let currentPage = getCurrentPage();
let currentPath = currentPage.file.path;
let outlinks = currentPage.file.outlinks?.values || [];

const items = dv.pages()
    .where(p => p['Archived'] != true)
    .where(p => p['Handled By']?.path == currentPath)
    .where(p => !outlinks.some(l => l.path == p.file?.path))
    .file.link;

if (items.length === 0) {
    dv.el("b", "All items are ordered 👌");
} else {
    dv.list(items);
}
```

# Sub activities 
```dataviewjs
function getCurrentPage() {
    const activeFile = app.workspace.getActiveFile();
    return dv.page(activeFile.path);
}

let contexts = []; 
let childs = dv.pages('#Project OR #Task OR #Routine OR #Responsibility').where(p => p.Archived != true);

function listRecursive(page, depth) {
    let subjects = [];
    if (contexts.includes(page.file.path)) return subjects;
    if (depth <= 0) return subjects;
    contexts.push(page.file.path);

    let pages = childs.where(p => p["Context"]?.path == page.file.path);
    pages.forEach(p => {
        subjects.push(p.file.link);
        let subsubjects = listRecursive(p, depth - 1);
        if (subsubjects.length > 0) {
            subjects.push(subsubjects);
        }
    });

    return subjects;
}

let finalList = [];
let currentPage = getCurrentPage();

finalList.push(currentPage.file.link);
let childItems = listRecursive(currentPage, 10);
if (childItems.length > 0) {
    finalList.push(childItems);
}

dv.list(finalList);

```
# Full context tree
```dataviewjs
function getCurrentPage() {
    const activeFile = app.workspace.getActiveFile();
    return dv.page(activeFile.path);
}

let contexts = []; 
let childs = dv.pages();

function listRecursive(page, depth) {
    let subjects = [];
    if (contexts.includes(page.file.path)) return subjects;
    if (depth <= 0) return subjects;
    contexts.push(page.file.path);

    let pages = childs.where(p => p["Context"]?.path == page.file.path);
    pages.forEach(p => {
        subjects.push(p.file.link);
        let subsubjects = listRecursive(p, depth - 1);
        if (subsubjects.length > 0) {
            subjects.push(subsubjects);
        }
    });

    return subjects;
}

let finalList = [];
let currentPage = getCurrentPage();

finalList.push(currentPage.file.link);
let childItems = listRecursive(currentPage, 10);
if (childItems.length > 0) {
    finalList.push(childItems);
}

dv.list(finalList);

```
# Brainstorming 
*Free form brainstorm about your project there* 


