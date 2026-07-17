# Exercise 1 — Sum Numbers

**Trains:** `reduce()` · accumulator · initial value
**Difficulty:** 🟢 Easy

## What you're solving

`reduce()` has a reputation for being confusing. It isn't — you have already
written it by hand three times.

Phase 2 Exercise 20, Phase 3 Exercise 12, Phase 4 Exercise 3: every one was
"declare a total, add to it each pass, read it at the end." That's `reduce()`.
The only change is that the variable now lives *inside* the method instead of
outside it.

Here's the mapping, line for line:

```javascript
let total = 0;                        // → the 0 at the end of reduce()
numbers.forEach(n => {
  total = total + n;                  // → (sum, n) => sum + n
});
```

The accumulator is the running total. Whatever your callback **returns** becomes
the accumulator for the next item. That's the one rule, and forgetting to return
is the one bug.

## Starter data

```javascript
const numbers = [1, 2, 3, 4, 5];
```

Calculate `15`.

## Expected output

```javascript
15
```

## Requirements

- Use `reduce()` — no loops, no `forEach()`
- Pass `0` as the initial value
- Print one number

## Hint

<details>
<summary>Show hint</summary>

```javascript
const total = numbers.reduce((sum, number) => sum + number, 0);
console.log(total);
```

Two parameters: `sum` is the accumulator, `number` is the current item.

The `0` after the callback is the **initial value** — where `sum` starts. Easy to
miss, sitting outside the arrow function like that, but it's the second argument
to `reduce()`.

Trace it: `0+1=1`, `1+2=3`, `3+3=6`, `6+4=10`, `10+5=15`. Each result becomes the
next `sum`.

</details>
