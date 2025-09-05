---
dg-publish: true
title: Fundamentals - Functions
chapter: "1.3"
---
# Functions
> [!summary] What are functions?
> - A way to encapsulate program functionality
> - They can *optionally* accept data
> - or *optionally* return data
> - Utilized for code organization
> 	- Also makes code easier to read

## Anatomy of a function
```rust
fn add(a: i32, b:i32) -> i32 {
	a + b
}
```
![[Pasted image 20250726151756.png]]
## Using a function
```rust
fn add(a: i32, b:i32) -> i32 {
	a + b
}

let x = add(1, 1);
let y = add(3, 0);
let z = add(x, 1);
```