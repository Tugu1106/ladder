# Exercise 15 — Shopping Cart Receipt

**Trains:** accumulating two values at once
**Difficulty:** ⭐⭐

## What you're solving

Two answers, one pass. The accumulator is an object holding **both** a running
count and a running total.

This is a genuinely good reason to use `reduce()` over anything else. You could
write two separate reduces — one for items, one for money — but that's two passes
over the same data to answer two questions that belong together. A receipt has
both numbers on it; compute them together.

The shape of your initial value **is** the shape of your answer. Write
`{ items: 0, total: 0 }` and you've already described what you're building.

## Starter data

```javascript
const cart = [{name:"Keyboard",price:50,quantity:2},{name:"Mouse",price:20,quantity:1}];
```

Create `{ items:3, total:120 }`.

## Expected output

```javascript
{ items: 3, total: 120 }
```

## Toolbox

- 🎯 **Focus:** accumulating two values at once in one object (`{ items, total }`)
- ✅ **Allowed:** `.reduce()` · object accumulator · arithmetic · `console.log()`
- ❌ **Not allowed:** two separate reduces (that's two passes for related numbers)
  — the initial value's shape *is* the answer's shape.

## Requirements

- Use `reduce()` — one pass, not two
- `items` sums the quantities (2 + 1 = 3), not the number of lines
- `total` is `price * quantity` summed: 100 + 20 = 120

## Hint

<details>
<summary>Show hint</summary>

```javascript
const receipt = cart.reduce((acc, item) => {
  acc.items += item.quantity;
  acc.total += item.price * item.quantity;
  return acc;
}, { items: 0, total: 0 });
```

Read the requirement carefully: `items` is `3` because quantities are 2 and 1 —
not `2` for two line entries. Two products, three things in the bag.

Both counters start at `0` in the initial value, per Exercise 2's rule.

</details>
