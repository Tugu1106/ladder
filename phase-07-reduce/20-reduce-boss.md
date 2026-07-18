# Exercise 20 — Final Boss ⭐

**Trains:** nested reduce · reducing over arrays inside objects
**Difficulty:** ⭐⭐⭐⭐ Boss

## What you're solving

The hardest exercise so far, and worth the time.

Each order holds an **array of items**. So the total isn't a sum over orders —
it's a sum over *items inside* orders. Two levels, and the natural answer is a
`reduce()` whose callback contains another `reduce()`.

That sounds worse than it is. The inner reduce answers "what is this one order
worth?" The outer one adds those up. Solve them separately in your head and the
nesting stops being scary — it's just Exercise 8, called from inside Exercise 1.

This is real API data. Orders with line items is exactly what an e-commerce
backend hands you, and this calculation is its revenue.

## Starter data

```javascript
const orders = [
  { customer:"Alex", items:[{name:"Laptop",price:1000,quantity:1},{name:"Mouse",price:50,quantity:2}] },
  { customer:"John", items:[{name:"Keyboard",price:100,quantity:1}] }
];
```

Using `reduce()`, calculate total revenue.

Expected `1200`.

## Expected output

```javascript
1200
```

## Toolbox

- 🎯 **Focus:** nested `reduce()` — reducing over arrays inside objects
- ✅ **Allowed:** `.reduce()` (inner + outer) · `.flatMap()` · arithmetic · `console.log()`
- ❌ **Not allowed:** loops — inner reduce totals one order, outer sums the
  orders; name `orderTotal` rather than inlining it so the nesting stays readable.

## Requirements

- Use `reduce()` — nested is fine and expected
- Every item in every order counts, with its quantity
- One number: `1200`

## Hint

<details>
<summary>Show hint</summary>

Check the arithmetic first: Alex is `1000×1 + 50×2 = 1100`, John is `100×1 = 100`.
Total `1200`.

Nested reduce — inner totals one order, outer sums the orders:

```javascript
const revenue = orders.reduce((total, order) => {
  const orderTotal = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return total + orderTotal;
}, 0);
```

Naming `orderTotal` rather than inlining it is what keeps this readable. You can
write it as one expression; you shouldn't.

There's another route — `flatMap()` flattens the items out first, then one reduce
finishes it:

```javascript
const revenue = orders
  .flatMap(order => order.items)
  .reduce((sum, item) => sum + item.price * item.quantity, 0);
```

That's arguably nicer, and Phase 8's wrap-up mentions `.flat()` for the same
reason. Both are correct — try both.

</details>
