---
dg-publish: true
title: Fundamentals - println macro
chapter: "1.4"
---
# println macro

> [!summary] The printl macro
>  - Macros expand into additional code
>  - ***println*** "Prints" (displays) information to the terminal
>  - Useful for debugging
>  > [!faq] Tokens
>  > We use the `{:?}` token to mark where a variable should be displayed in the `println!` with the ":?" marking it as a debug statement that shouldn't be visible to the end user. We can also use variables directly in the token
> >
>  > If we want to print something that will be visible to the end user, we can remove the ":?" and just use `"{}", <variable>` or `"{<variable>}"`

```rust
let life = 42;
println!("hello");
println!("{:?}", life);
println!("{:?} {:?}", life, life);
println!("the meaning id {:?}", life);
println!("{life:?}")
println!("{life}")
```
> [!important]
> The exclamation mark in `println!()` tells the program that we're running a macro *not a function*

