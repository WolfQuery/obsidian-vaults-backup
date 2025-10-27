---
dg-publish: true
---
# School
## Biology
```dataview
TABLE WITHOUT ID
link(file.name, title) AS Name, type AS Type, quarter AS Quarter, date AS Date
FROM "3. School"
WHERE dg-publish = true AND subject = "biology"
SORT date
```
---
## Čeština
```dataview
TABLE WITHOUT ID
link(file.name, title) AS Name, type AS Type, quarter AS Quarter, date AS Date
FROM "3. School"
WHERE dg-publish = true AND subject = "czech"
SORT date
```
---
## Math
```dataview
TABLE WITHOUT ID
link(file.name, title) AS Name, type AS Type, quarter AS Quarter, date AS Date
FROM "3. School"
WHERE dg-publish = true AND subject = "math"
SORT date
```
---
## Math in Sciences
```dataview
TABLE WITHOUT ID
link(file.name, title) AS Name, type AS Type, quarter AS Quarter, date AS Date
FROM "3. School"
WHERE dg-publish = true AND subject = "mathinscience"
SORT date
```

## OSZ
```dataview
TABLE WITHOUT ID
link(file.name, title) AS Name, type AS Type, quarter AS Quarter, date AS Date
FROM "3. School"
WHERE dg-publish = true AND subject = "osz"
SORT date
```
## Physics
```dataview
TABLE WITHOUT ID
link(file.name, title) AS Name, type AS Type, quarter AS Quarter, date AS Date
FROM "3. School"
WHERE dg-publish = true AND subject = "physics"
SORT date
```