# Exercise 3 — Add All Numbers

**Trains:** an accumulator outside the callback · closures
**Difficulty:** 🟢 Easy

## What you're solving

Phase 2's accumulator, now with `forEach()` — and there's a real lesson buried in
it.

The `total` variable lives **outside** the callback, but the callback can still
reach it and add to it. That's a **closure**: a function keeps access to the
variables that surrounded it where it was written. You've been relying on it
already; this is just the first time it's obvious.

Put `let total = 0` inside the callback and it resets to 0 on every single item.
You'd print nothing and end with nothing. Outside is the only place it works.

## Starter data

```javascript
const numbers = [5, 10, 15];
```

Use `forEach()` to calculate the total.

## Expected output

```javascript
30
```

## Requirements

- Use `forEach()`
- Declare `total` before the `forEach()`, print it after
- Print only the final total

## Hint

<details>
<summary>Show hint</summary>

```javascript
let total = 0;
numbers.forEach(number => {
  total += number;
});
console.log(total);
```

`let`, not `const` — it's reassigned every pass.

This works, but it's slightly against the grain: `forEach()` is built for side
effects, and you're using one to build a value. Phase 7's `reduce()` is the tool
designed for this exact job.

</details>
