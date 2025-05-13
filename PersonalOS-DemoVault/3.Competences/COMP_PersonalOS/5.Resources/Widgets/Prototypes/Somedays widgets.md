---
tags:
  - Dashboard
Context: "[[Personal OS]]"
Archived: true
---
# Someday count
```dataviewjs
const SomedaySubjectsCount = dv.pages()
		.where (p => p.file.tasks
			.where(t => !t.completed)
			.where(t => t.text.contains("Someday"))
			.length > 0)
		.where (p => p['Archived'] != "true")
		.length

dv.header(1,SomedaySubjectsCount);
```
^1defa3

```dataviewjs 
dv.table( 
	['Someday subjects'],
	dv.pages()
		.where (p => p.file.tasks
			.where(t => !t.completed)
			.where(t => t.text.contains("Someday"))
			.length > 0)
		.where (p => p['Archived'] != "true")
		.sort (p => p.file.mtime,'asc')
		.map (p => [
		p.file.link
		])
)
```
