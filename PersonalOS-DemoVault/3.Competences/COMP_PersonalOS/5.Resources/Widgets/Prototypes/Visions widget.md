---
tags:
  - Widget
Context: "[[Applying Personal OS]]"
Archived: true
---
# Top Vision List


```dataviewjs
dv.table( 
  ['Visions', 'Priority'],
  dv.pages('#Vision')
  .where(p => p.Context.path.contains('William'))
  .sort(p => p.priority,'desc')
  .map(p => [
    p.file.link,
    p['Priority']
  ])
);
```


# Visions and childs (Visions, Goals, Strategies)
```dataviewjs
let contexts = []; 

function listRecursive(page, depth) {
	let files = [] ;
	if(contexts.find(p => p == page.file.path)) return files;	
	if(depth <= 0) return files;
	contexts.push(page.file.path);

	// All pages in the context of the current file
	let pages = dv.pages('(#Strategy OR #Task OR #Project OR #Routine OR #Vision OR #AreaOfResponsibility OR #Rule OR #Goal  )')
		.where(p => p.Context?.path == page.file.path)
		.where(p=> (!p.investment && p.investment != 0) || p.investment > 0);
	pages.forEach(p => {
				files.push(p.file.link);
				let subFiles = listRecursive(p, depth - 1);
				if(subFiles.length >0) files.push(subFiles);
			});
	return files;
}


let finalList =[]
let pages=  dv.pages('#Vision')
  .where(p => p.Context.path.contains('William'))
  .sort(p => p.priority,'desc')

pages.forEach(page =>  {
finalList.push(page.file.link);
finalList.push(listRecursive(page, 6));
});
dv.list(finalList);
```


# Visions and childs

```dataviewjs
let contexts = []; 

function listRecursive(page, depth) {
	let files = [] ;
	if(contexts.find(p => p == page.file.path)) return files;	
	if(depth <= 0) return files;
	contexts.push(page.file.path);

	// All pages in the context of the current file
	let pages = dv.pages('"1.Office"').where(p => p.Context?.path == page.file.path);
	pages.forEach(p => {
				files.push(p.file.link);
				let subFiles = listRecursive(p, depth - 1);
				if(subFiles.length >0) files.push(subFiles);
			});
	return files;
}


let finalList =[]
let pages = dv.pages('#Vision')
  .where(p => p.Context.path.contains('William'))
  .sort(p => p.priority,'desc');

pages.forEach(page =>  {
finalList.push(page.file.link);
finalList.push(listRecursive(page, 1));
});
dv.list(finalList);
```


# Visions and goal tree


```dataviewjs
let contexts = []; 

function listRecursive(page, depth) {
	let files = [] ;
	if(contexts.find(p => p == page.file.path)) return files;	
	if(depth <= 0) return files;
	contexts.push(page.file.path);

	// All pages in the context of the current file
	let pages = dv.pages('"1.Office" AND (#Vision OR #Goal)')
		.where(p => p.Context?.path == page.file.path)
		.sort(p => p.priority,'desc');
	pages.forEach(p => {
				files.push(p.file.link);
				let subFiles = listRecursive(p, depth - 1);
				if(subFiles.length >0) files.push(subFiles);
			});
	return files;
}

let Source = dv.page('1.Office/Persons/William.md')
let finalList = listRecursive(Source, 3)
dv.list(finalList);
```


