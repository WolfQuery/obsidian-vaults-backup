---
dg-publish: true
title: Fundamentals - Repetition using loops
chapter: "1.6"
---
# Repetition using loops
> [!summary] Repetition
> - Called "looping" or "iteration"
> - Multiple types of loops
> 	- "loop" - infinite loop
> 	- "while" - conditional loop

## Loop
![[Pasted image 20250726201731.png|400]]
```rust
let mut a = 0;
loop {
	if a == 5 {
		break;
	}
	println!"{:?}", a);
	a = a + 1;
}
```



