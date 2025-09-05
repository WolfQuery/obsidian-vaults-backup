---
dg-publish: true
title: Demo - Basic arithmetic
chapter: "2.2"
---
# Basic arithmetic
> [!summary] Operators
> - `+` = addition
> - `-` = subtraction
> - `*` = multiplication
> - `/` = division
> - `%` = remainder division (returns the remainder of a division)
> 	- *useful for for example determining if a number is odd or equal*


## Example:
```rust
fn main() {
	let sum = 2 + 2;
	let value = 10 - 5;
	let division = 10 / 2;
	let mult = 5 * 5;
	
	let five = sub(8, 3);
	
	let rem = 6 % 3; //output returns 0 since there is no remainder
	let rem2 = 6 % 4; //output returs 2 since 4 goes into 6 once and we are left with 2 as the remainder
}

fn sub(a: i32, b: i32) -> i32 {
	a - b
}
```