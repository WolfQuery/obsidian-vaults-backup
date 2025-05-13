<%*
const file = tp.file.find_tfile(tp.file.path(true));
let content = await app.vault.read(file);
if (content === "") {
  tR+= await tp.file.include("[[Responsibility Metadata 999]]");
}
-%>
# Sub activities 
```dataviewjs
function getCurrentPage() {
    const activeFile = app.workspace.getActiveFile();
    return dv.page(activeFile.path);
}

let contexts = []; 
let childs = dv.pages('#Project OR #Task OR #Routine OR #Responsibility').where(p => p.Archived != true);

function listRecursive(page, depth) {
    let subjects = [];
    if (contexts.includes(page.file.path)) return subjects;
    if (depth <= 0) return subjects;
    contexts.push(page.file.path);

    let pages = childs.where(p => p["Context"]?.path == page.file.path);
    pages.forEach(p => {
        subjects.push(p.file.link);
        let subsubjects = listRecursive(p, depth - 1);
        if (subsubjects.length > 0) {
            subjects.push(subsubjects);
        }
    });

    return subjects;
}

let finalList = [];
let currentPage = getCurrentPage();

finalList.push(currentPage.file.link);
let childItems = listRecursive(currentPage, 10);
if (childItems.length > 0) {
    finalList.push(childItems);
}

dv.list(finalList);

```
# Full context tree
```dataviewjs
function getCurrentPage() {
    const activeFile = app.workspace.getActiveFile();
    return dv.page(activeFile.path);
}

let contexts = []; 
let childs = dv.pages();

function listRecursive(page, depth) {
    let subjects = [];
    if (contexts.includes(page.file.path)) return subjects;
    if (depth <= 0) return subjects;
    contexts.push(page.file.path);

    let pages = childs.where(p => p["Context"]?.path == page.file.path);
    pages.forEach(p => {
        subjects.push(p.file.link);
        let subsubjects = listRecursive(p, depth - 1);
        if (subsubjects.length > 0) {
            subjects.push(subsubjects);
        }
    });

    return subjects;
}

let finalList = [];
let currentPage = getCurrentPage();

finalList.push(currentPage.file.link);
let childItems = listRecursive(currentPage, 10);
if (childItems.length > 0) {
    finalList.push(childItems);
}

dv.list(finalList);

```

<%*
(async () => {
  const file = tp.file.find_tfile(tp.file.path(true));
  let content = await app.vault.read(file);
  if (content === "") {
    // Handle empty content if needed
  } else {
    tp.hooks.on_all_templates_executed(async () => {
      try {
        const file = tp.file.find_tfile(tp.file.path(true));
        await tp.app.fileManager.processFrontMatter(file, (frontmatter) => {
          frontmatter["tags"] = "Responsibility";
          frontmatter["Context"] = '';
        });
      } catch (error) {
        console.error("An error occurred while processing frontmatter:", error);
      }
    });
  }
})();
%>

