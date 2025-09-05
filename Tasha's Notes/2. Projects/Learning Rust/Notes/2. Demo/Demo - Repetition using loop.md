---
dg-publish: true
title: Demo - repetition using loop
chapter: "2.4"
---
# Repetition using loop

![[Pasted image 20250727214043.png|200]]
```rust
fn main() {
	let mut i = 5;
	loop {
		println!("{i}");
		i = i - 1;
		
		if i ==0 {
			break;
		}
	}
	println!("Done");
}
```