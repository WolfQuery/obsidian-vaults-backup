---
tags:
  - Resource
Archived: true
---
# Arc Progress Widgets 

```dataviewjs
/****************************************************************
 * Progress bar calculation based on completed files vs all linked files.
 ****************************************************************/

let page = dv.page(dv.currentFilePath);
if (!page?.file?.lists || page.file.lists.length === 0) {
  dv.paragraph("No list items found in this file.");
} else {
  // Find referencing file in "2.Activities" folder
  function findReferencingFile(templatePath) {
    let referencing = dv
      .pages('"2.Activities" AND (#Course OR #Mission OR #Exercise)')
      .where(f => f["From template"]?.path === templatePath);
    return referencing.length > 0 ? referencing[0] : null;
  }

  let totalTasksCount = 0;
  let doneTasksCount = 0;

  for (let item of page.file.lists) {
    if (item.outlinks?.length > 0) {
      let linkedFilePath = item.outlinks[0].path;
      let linkedPage = dv.page(linkedFilePath);

      if (linkedPage) {
        totalTasksCount++;

        let referencingFile = findReferencingFile(linkedPage.file.path);

        if (referencingFile && referencingFile.Archived) {
          doneTasksCount++;
        } else if (linkedPage.Archived) {
          doneTasksCount++;
        }
      }
    }
  }

  let percentTask = totalTasksCount === 0 ? 0 : Math.round((doneTasksCount / totalTasksCount) * 100);
  let pb = dv.el("progress-bar", "", { attr: { value: percentTask, style: `width: 50%;` } });

  dv.paragraph(pb);
  dv.paragraph(` ${doneTasksCount} missions completed`);
}

```

^e41ef9

```dataviewjs
/****************************************************************
 * Enhanced code to handle non-existent links and status indicators.
 ****************************************************************/

let page = dv.page(dv.currentFilePath);
if (!page?.file?.lists || page.file.lists.length === 0) {
  dv.paragraph("No list items found in this file.");
} else {
  // Sort each list item’s children by line number
  function sortChildrenByLine(item) {
    item.children.sort((a, b) => a.line - b.line);
    for (let child of item.children) {
      sortChildrenByLine(child);
    }
  }
  for (let item of page.file.lists) {
    sortChildrenByLine(item);
  }

  // Identify top-level items
  let childLines = new Set();
  for (let i of page.file.lists) {
    for (let c of i.children) {
      childLines.add(c.line);
    }
  }
  let topLevel = page.file.lists.filter(i => !childLines.has(i.line));
  topLevel.sort((a, b) => a.line - b.line);

  // Find referencing file in "2.Activities" folder
  function findReferencingFile(templatePath) {
    let referencing = dv
      .pages('"2.Activities" AND (#Course OR #Mission OR #Exercise)')
      .where(f => f["From template"]?.path === templatePath);
    return referencing.length > 0 ? referencing[0] : null;
  }

  // Build nested array with status indicators
  function buildNestedArr(item) {
    let arr = [];

    if (item.outlinks?.length > 0) {
      let linkedFilePath = item.outlinks[0].path;
      let linkedPage = dv.page(linkedFilePath);

      if (!linkedPage) {
        arr.push(item.outlinks[0].display);  // Show name if link doesn't exist
      } else {
        let referencingFile = findReferencingFile(linkedPage.file.path);
        let status = "";

        if (referencingFile) {
          status = referencingFile.Archived ? "<span style='float: right;'>Completed ✅</span>" : "<span style='float: right;'>In progress ⏩</span>";
          arr.push(`[[${referencingFile.file.path}|${referencingFile.file.name}]] ${status}`);
        } else {
          arr.push(linkedPage.file.name); // Show text if no referencing file is found
        }
      }
    } else {
      arr.push(item.text);
    }

    for (let child of item.children) {
      let sub = buildNestedArr(child);
      if (sub.length > 0) {
        arr.push(sub);
      }
    }
    return arr;
  }

  // Build the top-level array
  let finalList = [];
  for (let t of topLevel) {
    let nestedArray = buildNestedArr(t);
    if (nestedArray.length > 0) {
      finalList.push(nestedArray);
    }
  }

  // Render the final nested array with headers
  for (let i = 0; i < finalList.length; i++) {
    dv.header(1, `Mission #${i + 1}`);
    dv.list(finalList[i]);
  }
}

```


# Outline 
-  [[Get lvl 1 - Applying Personal OS]]
	-  [[Get lvl 1 - Engaging]]
		- [[Get lvl 1 - Using Engage feature]]
		- [[Get lvl 1 - Using Engage Dashboard]]
		- [[Understanding the Personal OS workflow]]
	- [[Get lvl 1 - Collecting]]
		- [[Get lvl 1 - Creating and deleting files]]
		- [[Get lvl 1 - Moving files]]
		- [[Understanding the collection habit]]
	- [[Get lvl 1 - Processing]]
		- [[Get lvl 1 - Using Process Dashboard]]
		- [[Get lvl 1 - Using Process feature]]
		- [[Get lvl 1 - Tagging a file]]
		- [[Get lvl 1 - Adding actions to a file]]
		- [[Get lvl 1 - Organizing files]]
		- [[Reviewing the simple processing flow chart]]
- [[Making your Personal OS usable]]
	- [[Get lvl 2 - Engaging]]
		- [[Get lvl 1 - Using obsidian workspaces]]
		- [[Review personal OS major workspaces]]
		- [[Integrate Personal OS core routines]]
	- [[Get lvl 1 - Managing competences]] 
		- [[Get lvl 1 - Using Competence Dashboard]]
		- [[Get lvl 1 - Accessing competence and skill resources]]
	- [[Get lvl 1 - Customizing your vault]]
- [[Reclaiming your mind]]
	- [[Get lvl 1 - Using tactics]]
	- [[Get lvl 1 - Mind sweeping]]
- [[Get lvl 2 - Applying Personal OS]]
	- [[Get lvl 2 - Managing actions]] 
		- [[Get lvl 1 - Using the 3 types of dates]]
		- [[Get lvl 1 - Creating recurring actions]]
		- [[Get lvl 1 - Hiding completed actions]]
		- [[Get lvl 1 - Delaying actions]]
		- [[Get lvl 1 - Failing actions]]
		- [[Practicing managing actions]]
	- [[Get lvl 3 - Engaging]]
		- [[Get lvl 1 - Using file backlog]] 
		- [[Get lvl 1 - Using action backlogs]] 
		- [[Get lvl 1 - Using the Engage current file feature]]
	- [[Get lvl 1 - Using templates]] 
		- [[Get lvl 1 - Applying a template]]   
		- [[Get lvl 1 - Using activity templates]]
			- [[Get lvl 1 - Using the responsibility template]]
			- [[Get lvl 1 - Using the project template]]
			- [[Get lvl 1 - Using the routine template]] 
			- [[Get lvl 1 - Using the backlog template]]
	- [[Get lvl 2 - Processing a file]]
		- [[Get lvl 1 - Using the context property]]
		- [[Get lvl 1 - Using the 2mn rule]]
		- [[Get lvl 1 - Shelving]]
			- [[Get lvl 1 - Shelving activity resources]]
			- [[Get lvl 1 - Shelving competence resources]]
			- [[Get lvl 1 - Shelving global resources]]
		- [[Reviewing the advanced processing flow chart]]
- [[Getting your system 100% online]]
	- [[Practicing advanced processing]]


