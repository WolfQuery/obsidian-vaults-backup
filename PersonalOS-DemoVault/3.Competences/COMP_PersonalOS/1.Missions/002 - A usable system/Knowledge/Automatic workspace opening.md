---
tags:
  - Description
Supports:
  - "[[Using obsidian workspaces]]"
  - "[[Using Engage feature]]"
---
## How automatic workspace opening works
To encourage workspace usage to streamline specific activities, it's possible to automatically open workspaces when the engage feature brings a file with the "Workspace" property filled with an existing workspace name.  Note that when automatically switching between workspace, the current layout will be saved under the "OSPrevious" workspace to prevent your currently working layout to be lost and allow you to go back to it if needed. 

This feature works separately on desktop and mobile as due to technical constraints desktop workspace don't work properly on mobile. If a corresponding workspace exists with "Mobile" in it's name, this one will be opened on mobile application. 

When opening a workspace, the directing file will not be added by default, if it's required you should add this file to the corresponding workspace layout. 

Example usage : 
- When starting a routine processing, we wish for the ""Processing" workspace to be opened. 
- In a Routine file containing a recurring action to process your system inbox, you can add the "Workspace" property with the "Processing" value. 
- When the engage feature brings back that file, the "Processing" workspace will automatically be opened on desktop, if you are on mobile and a "Processing Mobile" workspace exists, that specific workspace will be opened instead. 


This exact example is shown as part of the "Personal OS core routine" exercise. 