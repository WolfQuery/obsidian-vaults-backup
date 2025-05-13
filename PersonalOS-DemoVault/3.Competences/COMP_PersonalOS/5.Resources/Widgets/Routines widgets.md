---
tags:
  - Widget
Context: "[[Applying Personal OS]]"
Archived: true
---

# Dailies

## Count

```dataviewjs
const dailyCount =dv.pages('#Routine')
  .where(p => p['Archived'] != true)
  .where(p => p.Frequency == "Daily")
  .length;

dv.header(1,dailyCount);
```

^2fde7a

## Full duration
```dataviewjs
const dailyDuration =dv.pages('#Routine')
  .where(p => p['Archived'] != true)
  .where(p => p.Frequency == "Daily" && p.Duration)
  .values.reduce((sum, p) => sum + p.Duration, 0)

dv.header(1,dailyDuration+ " mn");
```

^72f62b

## Dailies
```dataviewjs
dv.table( 
  ['Dailies'],
  dv.pages('#Routine')
  .where(p => p['Archived'] != true)
  .where(p => p.Frequency == "Daily")
  .sort(p => p.file.mtime,'asc')
  .map(p => [
    p.file.link
  ])
);
```

# Weeklies


# All

```dataviewjs
dv.table( 
  ['Dailies'],
  dv.pages('#Routine')
  .sort(p => p.file.mtime,'asc')
  .map(p => [
    p.file.link
  ])
);
```


# Dailys and Weeklys

```dataviewjs 
const statusList = ["Growing","Integrated"]
dv.table( 
	['Context','Routine','Frequency','Status'],
	dv.pages("#Routine")
		.where(p=> p.frequency && statusList.includes(p.status))
		.sort(p => p['Frequency'],'asc')
		.sort(p => p['Status'],'asc')
		.map(p => [
		p['Context'],
		p.file.link,
		p.frequency,
		p['Status']
		])
)
```

# All Routines
```dataviewjs 
dv.table( 
	['Context','Project','Frequency','Status'],
	dv.pages("#Routine")
		.sort(p => p['Context'],'asc')
		.sort(p => p['Status'],'asc')
		.map(p => [
		p['Context'],
		p.file.link,
		p.frequency,
		p['Status']
		])
)
```

