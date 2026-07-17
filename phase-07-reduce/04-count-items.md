# Exercise 4 — Count Items

**Trains:** an accumulator that ignores the item
**Difficulty:** 🟢 Easy

## What you're solving

Counting with `reduce()`: add `1` per item, ignoring what the item actually is.

And the same honesty as Phase 4's Exercise 4 — **you would never write this.**
`fruits.length` is instant and free. Reducing over an array to count it is
strictly worse in every way.

It's here for the rep, and for one genuine insight: when your callback ignores
the current item entirely, that's a signal. Either you want `.length`, or you've
misunderstood the problem.

## Starter data

```javascript
const fruits = ["apple","banana","orange"];
```

Result `3`.

## Expected output

```javascript
3
```

## Requirements

- Use `reduce()` for the practice
- Then print `fruits.length` and note it's the same answer for no work

## Hint

<details>
<summary>Show hint</summary>

```javascript
const count = fruits.reduce((total, fruit) => total + 1, 0);
```

`fruit` is never used — you add `1` regardless of what's there.

Some linters will warn about the unused parameter. They're right.

</details>
