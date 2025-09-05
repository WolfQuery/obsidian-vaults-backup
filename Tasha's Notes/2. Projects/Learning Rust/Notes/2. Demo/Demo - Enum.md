---
dg-publish: true
chapter: "2.6"
title: Demo - Enum
---
# Demo - Enum

```rust
fn main() {
	let go = Direction::Left;
	match go {
		Direction::Left => println!("go left"),
		Direction::Right => println!("go right"),
	}
}

enum Direction {
	Left,
	Right
}
```