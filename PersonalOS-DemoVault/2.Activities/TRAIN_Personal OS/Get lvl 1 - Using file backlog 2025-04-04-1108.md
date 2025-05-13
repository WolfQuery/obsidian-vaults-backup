---
tags: "#Exercise"
Context: "[[Using file backlog]]"
Access at level: 0
From template: "[[Get lvl 1 - Using file backlog]]"
Completed on: 2025-04-04
Archived: true
---


> [!info] 
> ![[Backlog in Personal OS description#Introduction]]
# Using the file backlog widget

> [!success] In practice
> - This file contains a file backlog from the [[File backlog example]] 
> - Generate training files by using the following button. then observe how they appear in this file backlog






**List of "Handled by" referencing files that are not in the "frontlinks" of the current file**


```dataviewjs
let currentPath = dv.current().file.path;
let Outlinks = dv.current().file.outlinks.values

const items = dv.pages()
  .where(p => p['Archived'] != true)
  .where(p => p['Handled By']?.path == currentPath)
  .where(p => !Outlinks.some(l => l.path == p.file?.path))
  .file.link

if(items.length === 0) {
	dv.el("b", "All items are ordered 👌")
} else {
	dv.list(items);
}
```


> [!success] In practice
> - Create a new file,
> - add the "Handled By" property (ALT + P then type "Handled By). Then add a link to this file by typing "[[]]" and inserting inside the double braket the name of this file, note that this file name should resemble "Get lvl 1 - Using file backlog YYYY-MM-DD-HHmm"
> - Confirm that the newly created file appear in the backlog

> [!tip] 
> The backlog widget only show files that are 'Handled By' the current file AND are not directly reference in the current file. 
> If you want to prioritize your backlog you can do so by adding links to high priority item directly into the backlog file. 

> [!success] In practice
> - Add a link to the file you just created in this file by typing "[[]]" and searching for your newly created file name. 
> - Confirm that the newly linked file does not appear in the backlog widget anymore.
[[testing handling]]
# Wrap-up

- [x] When you feel confident about your potential use of file backlogs, complete this action and finish the exercise ⏳ 2025-04-04 ✅ 2025-04-04

## Exercise completed ! 👍 

# Rewards

- Unlock [[Using file backlog]] [level::1] ✔️

![[Pasted image 20241022050958.png|400]]

