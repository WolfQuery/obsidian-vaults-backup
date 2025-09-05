---
dg-publish: true
title: Lecture - Working with data - Enum
chapter: "3.1"
---
# Working with data - Enum
> [!summary] Enumeration
> - Data that can be one of multiple different possibilities
> 	- Each possibility is called a "variant"
> - Provides information about your program to the compiler
> 	- More robust programs
> - Used to make custom types

## Example
```rust
enum Direction {
	Up,
	Down,
	Left,
	Right
}

fn which_way(gp: Direction) {
	match go {
		Direction::Up => "up",
		Direction::Down => "down",
		Direction::Left => "left",
		Direction::Right => "right",
	}
}
```
> [!faq] Recap
> - Enums can only be one variant at a time
> - More robust programs when paired with *match*
> - Make program code easier to read

