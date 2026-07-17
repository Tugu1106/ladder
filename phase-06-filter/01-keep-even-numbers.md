# Exercise 1 — Keep Even Numbers

**Trains:** `filter()` · callbacks that return a boolean · the modulo operator
**Difficulty:** 🟢 Easy

## What you're solving

`filter()` is `map()`'s sibling, and the difference is what your callback returns.

`map()` wants a **value** — whatever you return becomes the new item. `filter()`
wants a **verdict** — return `true` to keep the item as-is, `false` to drop it.
`filter()` never changes items; it only decides which survive.

That's also why the output length varies. `map()` always gives you the same
number of items back. `filter()` gives you anywhere from all of them to none.

The tool for "is this even" is `%` — the **modulo** operator, which gives the
remainder after division. `6 % 2` is `0` because 2 divides 6 exactly. Any even
number has remainder 0.

## Starter data

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
```

Create `[2,4,6]`.

## Expected output

```javascript
[2, 4, 6]
```

## Requirements

- Use `filter()`
- Callback returns a boolean, not a number
- Original unchanged
- Capture the result in a new variable

## Hint

<details>
<summary>Show hint</summary>

```javascript
const evens = numbers.filter(n => n % 2 === 0);
```

`n % 2` is the remainder when divided by 2 — `0` for evens, `1` for odds.

`=== 0` turns that into the boolean `filter()` needs. Writing `n => n % 2` looks
close but is subtly broken: it returns `0` or `1`, and JavaScript treats `0` as
falsy and `1` as truthy — so you'd get the **odd** numbers. Always make the
comparison explicit.

</details>
