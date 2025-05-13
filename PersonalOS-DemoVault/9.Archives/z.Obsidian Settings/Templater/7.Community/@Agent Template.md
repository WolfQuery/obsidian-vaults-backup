<%*_
const file = tp.file.find_tfile(tp.file.path(true));
let content = await app.vault.read(file);
if (content === "") {
  tR+= await tp.file.include("[[Agent Metadata 999]]");
}
-%>
# Available delegated actions
Show all available actions referencing that agent file, by default this list hides recurrence rule for better readability. 
```tasks
((has start date) AND (starts before tomorrow) AND (no scheduled date)) \
OR (scheduled before tomorrow) OR (due before tomorrow) OR (no happens date)
description includes {{query.file.filenameWithoutExtension}}
not done
hide recurrence rule
```

# Other delegated actions
Show all other actions referencing that agent file, by default this list hides recurrence rule for better readability. 
```tasks
(scheduled after today) OR (due after today) OR (no happens date)
description includes {{query.file.filenameWithoutExtension}}
not done
hide recurrence rule
```

# Delegated files 
**List of "Delegated To" referencing files that are not in the "frontlinks" of the current file**
```dataviewjs
let currentPath = dv.current().file.path;
let Outlinks = dv.current().file.outlinks.values

const items = dv.pages()
  .where(p => p['Archived'] != true)
  .where(p => p['Delegated To']?.path == currentPath)
  .where(p => !Outlinks.some(l => l.path == p.file?.path))
  .file.link

if(items.length === 0) {
	dv.el("b", "All delegated files are ordered 👌")
} else {
	dv.list(items);
}
```

# Agent info

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
          frontmatter["tags"] = "Agent";
        });
      } catch (error) {
        console.error("An error occurred while processing frontmatter:", error);
      }
    });
  }
})();
%>

