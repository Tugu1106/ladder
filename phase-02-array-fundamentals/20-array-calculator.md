# Exercise 20 — Array Calculator ⭐

**Trains:** looping with an accumulator · everything in Phase 2
**Difficulty:** 🟢 Easy → ⭐ Boss

## What you're solving

Exercise 19 looped to *print*. This one loops to **build up a result** — a
running total that survives across iterations.

That pattern has a name: an **accumulator**. You declare a variable outside the
loop, add to it on every pass, and read it once the loop is done. If the variable
goes inside the loop it resets every time and you get the wrong answer.

Remember this exercise. In Phase 7 you'll meet `reduce()`, which is this exact
pattern with the loop hidden. People find `reduce()` confusing precisely because
they never did it by hand first — you will have.

## Starter data

```javascript
const numbers = [10, 20, 30, 40];
```

Using a loop, calculate the total.

## Expected output

```javascript
100
```

## Requirements

- Use a loop — no `reduce()`, that's Phase 7
- Declare the total **before** the loop, print it **after**
- Print only the final total, not each step

## Hint

<details>
<summary>Show hint</summary>

Three parts:

```javascript
let total = 0;              // before the loop
// inside the loop:  total = total + things[i];
console.log(total);         // after the loop
```

Use `let`, not `const` — the total genuinely gets reassigned every pass.

Starting at `0` matters: adding to an undeclared or empty-string variable gives
you `NaN` or a glued-together string like `"010203040"`.

`total += things[i]` is shorthand for the same thing.

</details>
