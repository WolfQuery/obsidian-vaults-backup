---
tags:
  - Widget
Context: "[[Applying Personal OS]]"
Archived: true
---
# Focus on
```dataviewjs
const pos = app.plugins.plugins['personal-os'];  
let currentContext = pos.engage.focus?.file.link || dv.page("9.Archives/z.Obsidian Settings/PersonalOS/Getting Started.md").file.link;
dv.header(1, "Focus on " + currentContext);

```

^f75b84

# Focus tree
```dataviewjs
const pos = app.plugins.plugins['personal-os'];  
let currentContext = pos.engage.focus?.file.link || dv.page("9.Archives/z.Obsidian Settings/PersonalOS/Getting Started.md").file.link;

let contexts = [];

const isDuePage = (p) => p.file.tasks
  .where((t) => !t.completed)
  .where(t => (t.status != "-"))
  .where(
    (t) =>(
      (t.due && (t.due.ts == dv.date('today').ts)))
      ).length>0;

const isScheduledPage = (p) => p.file.tasks
  .where((t) => !t.completed)
  .where(t => (t.status != "-"))
  .where(
    (t) =>(
      (t.scheduled && (t.scheduled.ts == dv.date('today').ts)))
      ).length>0;

const isStartPage = (p) => p.file.tasks
  .where((t) => !t.completed)
  .where(t => (t.status != "-"))
  .where(
    (t) =>(
      (t.start && (t.start.ts <= dv.date('today').ts)))
      ).length>0;

function pageIcon(page){
	if (isDuePage(page)) return "📅"
	else if (isScheduledPage(page)) return "⏳"
	else if (isStartPage(page)) return "🛫"
	else return ""
}

function listRecursive(filePath, depth) {
	let files = [];
	if(contexts.find(p => p == filePath)) return files;	
	contexts.push(filePath);

	// All pages in the context of the current file
	let pages = dv.pages('"1.Office"').where(p => p.Context?.path == filePath);
	pages.forEach(page => {
				let icon = pageIcon(page);
				let subFiles = listRecursive(page.file.path, depth + 1);
				if(subFiles.length >0) {
				files.push(icon+" "+ page.file.link);
				files.push(subFiles);
				}
				else if(icon!="") {
				files.push(icon +" "+ page.file.link);
				}
			});
	return files;
}
let finalList = []
finalList = listRecursive(currentContext.path);
dv.header(1, currentContext);
dv.list(finalList);
```


