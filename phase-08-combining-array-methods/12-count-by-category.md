# Exercise 12 — Count By Category

**Trains:** tallying with dynamic keys
**Difficulty:** ⭐

## What you're solving

Phase 7's Exercise 12 — a tally, counting rather than collecting.

Compare against Exercise 11 above. Grouping pushes items into arrays; tallying
adds to numbers. Same dynamic-key machinery, different accumulator type — and the
default changes with it: `|| []` becomes `|| 0`.

Notice the objects here have only a `category` field. Nothing else to collect, so
counting is all you can do.

## Starter data

```javascript
const items = [{category:"food"},{category:"food"},{category:"drink"}];
```

Output: `{ food:2, drink:1 }`

## Expected output

```javascript
{ food: 2, drink: 1 }
```

## Requirements

- `reduce()` with `{}` initial value
- Categories from the data
- Values are numbers

## Hint

<details>
<summary>Show hint</summary>

```javascript
const counts = items.reduce((tally, item) => {
  tally[item.category] = (tally[item.category] || 0) + 1;
  return tally;
}, {});
```

Parentheses around `(tally[...] || 0)` are required — `+` binds tighter than `||`,
so without them you'd get `tally[...] || 1` and every count would be `1`.

</details>
