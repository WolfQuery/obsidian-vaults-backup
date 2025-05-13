---
tags:
  - Description
Supports:
  - "[[Using the 3 types of dates]]"
---
### Action anatomy

#### Overview
Understanding dates within actions is crucial, as they dictate the action's visibility and priority:

- **Start Date**: The earliest date an action becomes relevant.
- **Scheduled Date**: The planned date for action execution.
- **Due Date**: The final deadline for action completion.

#### 🛫Start Date

This date represents the date when you CAN "Start" doing this action. Before that date there is no need for the system to bring the file to your attention, but after that date it will be taken into account in the "Engage" command.

#### ⏳Scheduled Date (or Do Date)

This date represent the date when you SCHEDULED to work on this action. Before that date there is no need for the system to consider this file, but at the desired date it needs to be brought to attention!  
An action having a start date AND a scheduled date will not come before the schedule date.  
An action having a scheduled date in the past is considered **late** but **not failed**.

#### 📅Due Date

This date represent the ultimate possible date where this action should be finished. Before that date, the file can be brought to your attention if it has a start date or a scheduled date.  
An action having a Due date in the past is considered **late** and **failed**.

#### ⌚ Time

It's possible to add a time to an action (before the date and the recurrence). by using the "⌚" emoji.  
A timed action will only be brought to attention after the dedicated time and with a high priority. Time is in 24h format, here is an example : ⌚15:00 for 3pm. 

#### Actions example

- [ ] Study for exam 🛫 2024-03-05 ⏳ 2024-03-15

This action means that you "can" study between the 05th and the 15th of March.

- It will show starting on the 05th and until the 15th
- It will be considered late and failed on the 16th

- [ ] Study for exam⌚15:00 🛫 2024-03-05 ⏳ 2024-03-11 📅 2024-03-15

This action means that you "Can" study between the 05th and the 15th of March.  
You've scheduled to actually study on the 11th after 15:00

- It won't show before the 11th at 15:00.
- It will be considered late on the 12th.
- It will be considered late and failed on the 16th

