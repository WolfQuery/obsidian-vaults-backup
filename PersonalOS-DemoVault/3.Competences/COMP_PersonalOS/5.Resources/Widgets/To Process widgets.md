---
tags:
  - Widget
Context: "[[Applying Personal OS]]"
Archived: true
---
```dataviewjs
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;
let InboxFilter= pos.startProcess.inboxPages

const InboxCount = dv.pages(`${InboxFilter.map(el => `"${el}"`).join(' or ')}`).file.length;

const OpenNotaskCount = dv.pages(`${OfficeFilter.map(el => `"${el}"`).join(' or ')}`)
		.where(p => p.file.tasks
			.where(t => !t.completed)
			.where(t => (t.status != "-"))
			.length == 0)
		.where(p => p['Archived'] != true)
			.file.length;
			
const ToProcessCount = OpenNotaskCount + InboxCount
		
dv.header(1,ToProcessCount);

```
^c1cba6


# Inbox
```dataviewjs 
let pos = app.plugins.plugins['personal-os'];
let InboxFilter= pos.startProcess.inboxPages

dv.table( 
	['Inbox'],
	dv.pages(`${InboxFilter.map(el => `"${el}"`).join(' or ')}`)
		.sort (p => p.file.mtime,'asc')
		.limit(10)
		.map (p => [
		p.file.link
		])
)
```

# Open no tasks
```dataviewjs 
let pos = app.plugins.plugins['personal-os'];
let OfficeFilter = pos.graph.officePages;

dv.table( 
	['Open no tasks'],
	dv.pages(`${OfficeFilter.map(el => `"${el}"`).join(' or ')}`)
		.where (p => p['Archived'] != true)
		.where (p => (p.file.tasks
			.where(t => !t.completed)
			.where(t => (t.status != "-"))
			.length == 0))
		.sort (p => p.file.mtime,'asc')
		.limit(1000)
		.map (p => [
		p.file.link
		])
)
```
