---
tags:
  - Widget
Context: "[[Applying Personal OS]]"
Archived: true
---
## Quick Actions
```meta-bind-button
label: ""
icon: file-plus
hidden: true
class: ""
tooltip: "New file (Ctrl + N)"
id: new-file
style: primary
actions:
  - type: command
    command: file-explorer:new-file

```
```meta-bind-button
label: ""
icon: crosshair
hidden: true
class: ""
tooltip: Start Work
id: start-work
style: primary
actions:
  - type: command
    command: personal-os:start-work

```
```meta-bind-button
label: ""
icon: scroll-text
hidden: true
class: ""
tooltip: New file from template
id: new-template
style: primary
actions:
  - type: command
    command: templater-obsidian:create-new-note-from-template

```
```meta-bind-button
label: ""
icon: layout-dashboard
hidden: true
class: ""
tooltip: "Select Workspace (Alt + W) "
id: open-workspaces
style: primary
actions:
  - type: command
    command: workspaces-plus:open-workspaces-plus

```
`BUTTON[open-workspaces,new-file,new-template,start-work]` 


# Examples
## New file button

```meta-bind-button
label: ""
icon: file-plus
hidden: false
class: ""
tooltip: "New file (Ctrl + N)"
id: new-file
style: primary
actions:
  - type: command
    command: file-explorer:new-file

```

## Start work button

```meta-bind-button
label: ""
icon: crosshair
hidden: false
class: ""
tooltip: Start Work
id: start-work
style: primary
actions:
  - type: command
    command: personal-os:start-work

```

## New note from template button

```meta-bind-button
label: ""
icon: scroll-text
hidden: false
class: ""
tooltip: New file from template
id: new-template
style: primary
actions:
  - type: command
    command: templater-obsidian:create-new-note-from-template

```

## Select Workspace

```meta-bind-button
label: ""
icon: layout-dashboard
hidden: false
class: ""
tooltip: "Select Workspace (Alt + W) "
id: open-workspaces
style: primary
actions:
  - type: command
    command: workspaces-plus:open-workspaces-plus

```

## Example list Actions
There need to be the buttons hidden fot it to work in canvas. 

```meta-bind-button
label: ""
icon: file-plus
hidden: true
class: ""
tooltip: "New file (Ctrl + N)"
id: new-file
style: primary
actions:
  - type: command
    command: file-explorer:new-file

```
```meta-bind-button
label: ""
icon: crosshair
hidden: true
class: ""
tooltip: Start Work
id: start-work
style: primary
actions:
  - type: command
    command: personal-os:start-work

```
```meta-bind-button
label: ""
icon: scroll-text
hidden: true
class: ""
tooltip: New file from template
id: new-template
style: primary
actions:
  - type: command
    command: templater-obsidian:create-new-note-from-template

```
```meta-bind-button
label: ""
icon: layout-dashboard
hidden: true
class: ""
tooltip: "Select Workspace (Alt + W) "
id: open-workspaces
style: primary
actions:
  - type: command
    command: workspaces-plus:open-workspaces-plus

```
`BUTTON[open-workspaces]` `BUTTON[new-file]`  `BUTTON[new-template]`  `BUTTON[start-work]`
^5ddc5b