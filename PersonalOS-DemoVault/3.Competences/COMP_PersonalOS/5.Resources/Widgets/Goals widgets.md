---
tags:
  - Widget
Context: "[[Applying Personal OS]]"
Archived: true
---
# No Zero Goals
```dataviewjs 
dv.list( 
	dv.pages("#Goal")
		.where(p => p.Status == "In progress")
		.sort(p => p['Context'],'asc')
		.file.link
)
```

# Current Goals

```dataviewjs 
dv.table( 
	['Context','Goal'],
	dv.pages("#Goal")
		.where(p => p.Status == "In progress")
		.sort(p => p['Context'],'asc')
		.map(p => [
		p['Context'],
		p.file.link
		])
)
```


# All Goals

```dataviewjs 
dv.table( 
	['Context','Goal','Status'],
	dv.pages("#Goal")
		.sort(p => p['Context'],'asc')
		.sort(p => p['Status'],'asc')
		.map(p => [
		p['Context'],
		p.file.link,
		p['Status']
		])
)
```

