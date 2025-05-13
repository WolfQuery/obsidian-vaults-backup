---
tags:
  - Widget
Context: "[[Applying Personal OS]]"
Archived: true
---
# Current Projects

```dataviewjs 
dv.table( 
	['Context','Project'],
	dv.pages("#Project")
		.where(p=> p.status == "In progress")
		.sort(p => p['Context'],'asc')
		.map(p => [
		p['Context'],
		p.file.link
		])
)
```


# All Projects

```dataviewjs 
dv.table( 
	['Context','Project','Status'],
	dv.pages("#Project")
		.sort(p => p['Context'],'asc')
		.sort(p => p['Status'],'asc')
		.map(p => [
		p['Context'],
		p.file.link,
		p['Status']
		])
)
```
