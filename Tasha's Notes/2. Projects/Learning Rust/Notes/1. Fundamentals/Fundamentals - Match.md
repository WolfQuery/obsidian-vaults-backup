---
dg-publish: true
title: Fundamentals - Match
chapter: "1.7"
---
# Match
>
> [!Summary]
>
> - Add logic to a program
> - Similar to *if..else*
> - Exhaustive
>   - **All options** must be accounted for

## Example with boolean

```rust
fn main() {
 let some_bool = true;
 match some_bool {
  true => println!("its true"), //do this if some_bool is true
  false => println!("its false"), //do this if some_bool is false
 }
}
```

## Example with int

```rust
fn main() {
 let some_int = 3;
 match some_int {
  1 => println!("its 1"),
  2 => println!("its 2"),
  3 => println!("its 3"),
  _ => println!("its something else"), // when using an underscore it means "anything else"
 }
}
```

> [!faq] *match* vs *else..if*
>
> - match will be checked by the compiler
>   - if a new possibility is added, you will be notified of it
> - else..if is **not** checked by the compiler
>   - if a new possibility is added, your code may contain a bug
