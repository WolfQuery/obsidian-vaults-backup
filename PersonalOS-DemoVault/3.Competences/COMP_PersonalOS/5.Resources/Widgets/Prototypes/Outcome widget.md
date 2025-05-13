---
tags:
  - Widget
Context: "[[Applying Personal OS]]"
Archived: true
---
# Goal List


```dataviewjs
dv.table( 
  ['Goals', 'Priority'],
  dv.pages('#Goal')
  .sort(p => p.priority,'desc')
  .map(p => [
    p.file.link,
    p['Priority']
  ])
);
```


# Active Goals and childs (Visions / Strats / Subgoals)

```dataviewjs
let contexts = []; 

function listRecursive(page, depth) {
	let files = [] ;
	if(contexts.find(p => p == page.file.path)) return files;	
	if(depth <= 0) return files;
	contexts.push(page.file.path);

	// All pages in the context of the current file
	let pages = dv.pages('#Strategy OR #Task OR #Project OR #Routine OR #Vision OR #AreaOfResponsibility OR #Rule OR #Goal')
		.where(p => p.Context?.path == page.file.path)
		.where(p=> (!p.investment && p.investment != 0) || p.investment > 0);
	pages.forEach(p => {
				files.push(p.file.link + " Invest :" + p.investment);
				let subFiles = listRecursive(p, depth - 1);
				if(subFiles.length >0) files.push(subFiles);
			});
	return files;
}


let finalList =[]
let pages = dv.pages('#Goal')
  .sort(p => p.priority,'desc');

pages.forEach(page =>  {
finalList.push(page.file.link);
finalList.push(listRecursive(page, 3));
});
dv.list(finalList);
```


# All Goals and childs (Visions / Strats / Subgoals)

```dataviewjs
let contexts = []; 

function listRecursive(page, depth) {
	let files = [] ;
	if(contexts.find(p => p == page.file.path)) return files;	
	if(depth <= 0) return files;
	contexts.push(page.file.path);

	// All pages in the context of the current file
	let pages = dv.pages('#Strategy OR #TaskList OR #Project OR #Routine OR #Vision OR #AreaOfResponsibility  OR #Goal')
		.where(p => p.Context?.path == page.file.path);

	pages.forEach(p => {
				files.push(p.file.link);
				let subFiles = listRecursive(p, depth - 1);
				if(subFiles.length >0) files.push(subFiles);
			});
	return files;
}


let finalList =[]
let pages = dv.pages('#Goal')
  .sort(p => p.priority,'desc');

pages.forEach(page =>  {
finalList.push(page.file.link);
finalList.push(listRecursive(page, 3));
});
dv.list(finalList);
```

