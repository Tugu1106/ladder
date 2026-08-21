# Exercise 3 — Find Maximum Number

**Trains:** `reduce()` for something other than arithmetic
**Difficulty:** 🟢 Easy → ⭐

## What you're solving

The first sign that `reduce()` isn't a "summing tool."

The accumulator doesn't have to be a running total — here it's the **largest seen
so far**. Each pass compares and returns whichever is bigger. Same machinery,
completely different job.

This is Phase 3's Exercise 15 without the manual loop. And the same starting-value
question applies: `0` works for this data but would break on all-negative numbers.
Starting from the first item is the safe habit.

## Starter data

```javascript
const numbers = [5, 10, 3, 20, 8];
```

Result `20`.

## Expected output

```javascript
20
```

## Toolbox

- 🎯 **Focus:** an accumulator holding "largest so far" (not a total) · the ternary `? :`
- ✅ **Allowed:** `.reduce()` · comparison · ternary / `if` · `console.log()`
- ❌ **Not allowed:** `Math.max()` · `.sort()` · loops — do the compare-and-keep
  yourself; start from `numbers[0]` so negatives don't break it.

## Requirements

- Use `reduce()`
- No `Math.max(...numbers)` — do the comparison yourself
- Print one number

## Hint

<details>
<summary>Show hint</summary>

```javascript
const max = numbers.reduce((biggest, number) => {
  return number > biggest ? number : biggest;
}, numbers[0]);
```

`condition ? a : b` is the **ternary operator** — "if condition, use a, else b."
It's an `if`/`else` that produces a value, which is what you need when you must
return something.

Starting from `numbers[0]` rather than `0` makes it correct for negatives too.
Comparing the first item against itself on pass one is harmless.

Longer but identical:

```javascript
if (number > biggest) { return number; } else { return biggest; }
```

</details>
