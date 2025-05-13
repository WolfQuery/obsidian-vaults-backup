---
tags:
  - Widget
Context: "[[Applying Personal OS]]"
Archived: true
---
# My skills count
```dataviewjs

const SkillsCount = dv.pages('"3.Competences" AND (#Skill)')
    .where(c => c.Level && c.Level > 0)
    .length; 

if(SkillsCount === 0) {
	dv.header(2, "No skills yet")
} else {
	dv.header(2,"Skills:\n"+SkillsCount);
}

```

^a0207c



