# Exercise 14 — Dashboard Statistics

**Trains:** two related numbers from one filtered set
**Difficulty:** ⭐⭐

## What you're solving

Two stats about the same subset — how many completed orders, and what they earned.

The neat move is that both questions share a filter. Filter once, then answer
both from the result. Filtering twice works and is arguably clearer; filtering
once and reusing is what you'd do with real data volumes.

This is a dashboard tile, more or less exactly as you'd build it.

## Starter data

```javascript
const orders = [{status:"completed",price:100},{status:"pending",price:200},{status:"completed",price:300}];
```

Create: `{ completedOrders:2, completedRevenue:400 }`

## Expected output

```javascript
{ completedOrders: 2, completedRevenue: 400 }
```

## Toolbox

- 🎯 **Focus:** two related stats from one filtered set (filter once, reuse)
- ✅ **Allowed:** `.filter()` · `.length` · `.reduce()` · a result object · `console.log()`
- ❌ **Not allowed:** loops — `.length` for the count, `reduce()` for the money,
  both from the same filtered array.

## Requirements

- Only completed orders count — the pending 200 is excluded
- `completedOrders` is a count, `completedRevenue` a sum
- Result is one object with both keys

## Hint

<details>
<summary>Show hint</summary>

Filter once, reuse:

```javascript
const completed = orders.filter(o => o.status === "completed");

const stats = {
  completedOrders: completed.length,
  completedRevenue: completed.reduce((sum, o) => sum + o.price, 0)
};
```

`.length` for the count (Exercise 4), `reduce()` for the money.

100 + 300 = 400. If you get 600, the pending order slipped through.

A single `reduce()` accumulating `{completedOrders, completedRevenue}` with an
`if` inside also works — Phase 7's Exercise 15 shape. The filter-first version is
easier to read.

</details>
