# Exercise 3 — Remove Negative Numbers

**Trains:** thinking in "keep", not "remove"
**Difficulty:** 🟢 Easy

## What you're solving

The task says *remove* negatives. `filter()` has no way to remove anything — it
only keeps. So you must flip the sentence in your head: "remove the negatives"
becomes "keep the ones that are positive."

That inversion is the one real mental adjustment `filter()` demands. Every
"remove X" task is really a "keep not-X" task. Exercise 13 leans on this again.

## Starter data

```javascript
const numbers = [10, -5, 20, -3, 30];
```

Create `[10,20,30]`.

## Expected output

```javascript
[10, 20, 30]
```

## Requirements

- Use `filter()`
- Express it as a keep condition

## Hint

<details>
<summary>Show hint</summary>

```javascript
const positives = numbers.filter(n => n > 0);
```

"Keep the ones greater than 0" — the negatives are gone because they were never
kept, not because you removed them.

`>= 0` would also keep zero. No zeros here, so both pass, but decide deliberately
rather than by accident.

</details>
