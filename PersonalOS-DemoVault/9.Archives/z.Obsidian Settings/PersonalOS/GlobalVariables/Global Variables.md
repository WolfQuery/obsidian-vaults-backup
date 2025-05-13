currentContext:: [[R_Health]]
currentFocus::[[5 first books in Zettel|5 first books in Zettel]]





```dataviewjs
let currentContext = (dv.pages('"9.Config/GlobalVariables/Global Variables.md"')[0].currentContext?.path || false)

dv.table( 
	['Subjects','Type'],
	dv.pages('"1.Office"')
	.where(p =>p.Context?.path== currentContext)
	.limit(10)
	.map (p => [
		p.file.link,
		p.file.tags
		])
	)
```


