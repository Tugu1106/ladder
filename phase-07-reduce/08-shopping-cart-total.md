# Exercise 8 — Shopping Cart Total

**Trains:** computing inside the accumulator · `map().reduce()` in one step
**Difficulty:** 🟢 Easy → ⭐

## What you're solving

The real cart total, and the first `reduce()` that does more than read a field.

Each pass computes `price * quantity` and adds *that*. The multiplication happens
inside the callback, before the addition.

Worth seeing what this replaces. Phase 5's Exercise 17 mapped to line totals
`[2000, 150]`; summing them would need a second pass. Here one `reduce()` does
both — compute and combine, per item, in one sweep. Both approaches are valid;
the chained version reads better, the single reduce does less work. At this scale
it makes no difference, and clarity wins.

## Starter data

```javascript
const cart = [{name:"Laptop",price:1000,quantity:2},{name:"Mouse",price:50,quantity:3}];
```

Calculate `2150` (formula `price * quantity`).

## Expected output

```javascript
2150
```

## Requirements

- Use `reduce()`
- Multiply inside the callback
- One number: `2150`

## Hint

<details>
<summary>Show hint</summary>

```javascript
const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
```

`*` binds tighter than `+`, so it multiplies before adding — exactly right. Add
parentheses if it reads better to you:

```javascript
sum + (item.price * item.quantity)
```

Check: `1000×2 = 2000`, `50×3 = 150`, total `2150`.

</details>
