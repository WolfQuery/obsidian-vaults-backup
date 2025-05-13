---
tags:
  - Tool
Supports:
  - "[[Using file backlog]]"
---


# File backlog 

**List of "Handled by" referencing files that are not in the "frontlinks" of the current file**


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


