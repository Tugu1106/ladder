# Exercise 7 — Empty Array

**Trains:** starting empty · filling by index
**Difficulty:** 🟢 Easy

## What you're solving

Arrays don't have to start with contents. An empty array is a perfectly good
starting point that you fill as data arrives.

This is extremely common in real code: you declare `const results = []` before
you know what goes in it, then add items as you find them. Watch `.length` climb
from 0 to 3 as you go.

## Starter data

```javascript
let inventory = [];
```

Add `sword`, `shield`, `potion` using indexes.

## Expected output

```javascript
["sword", "shield", "potion"]
```

## Toolbox

- 🎯 **Focus:** starting empty · filling by index (0, 1, 2…)
- ✅ **Allowed:** empty array `[]` · index assignment · `console.log()`
- ❌ **Not allowed:** `.push()` yet — same as Exercise 5, count the slots
  yourself so the index-grows-the-array rule stays in your hands.

## Requirements

- Start from the empty array
- Use index assignment — no `push()` yet
- Items must end up in that order, with no gaps

## Hint

<details>
<summary>Show hint</summary>

An empty array's first free slot is `0`, then `1`, then `2`.

Same idea as Exercise 5, just starting from nothing.

</details>
