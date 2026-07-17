# Challenge 1 — E-commerce Analytics System ⭐⭐⭐⭐

**Trains:** nested reduce · grouping · ranking · aggregation
**Difficulty:** ⭐⭐⭐⭐

## ⚠️ Note on the expected value

The original spec says total revenue → `260`. **It's 340**, and the spec
contradicts itself:

- Alex: `100×2 + 50×1` = **250**
- John: `30×3` = **90**
- Total: **340**

The spec's own category breakdown says `{ electronics:250, education:90 }` — which
adds to 340, not 260. Use **340**.

Also `260` appears nowhere in any reading of this data, so it looks like a typo
rather than a different formula.

## What you're solving

Phase 10 is where nobody holds your hand. The data is nested two levels, the
questions are the ones a real business asks, and you get no step-by-step.

Four questions, escalating:

1. **Total revenue** — nested reduce. Sum `price × quantity` across items inside
   orders. Phase 8's Exercise 20.
2. **Highest spending customer** — per-order totals, then a maximum. Two ideas
   composed.
3. **Best selling product** — ambiguous on purpose. By *units* Book wins (3 vs 2).
   By *money* Keyboard wins (200 vs 90). The spec says Keyboard, so it means
   revenue. Notice that you had to decide.
4. **Revenue by category** — grouping, where the category is on the **item**, not
   the order. So you're grouping across a level of nesting.

## Starter data

```javascript
const orders = [
  { id:1, customer:"Alex", items:[
      {name:"Keyboard",category:"electronics",price:100,quantity:2},
      {name:"Mouse",category:"electronics",price:50,quantity:1}
  ]},
  { id:2, customer:"John", items:[
      {name:"Book",category:"education",price:30,quantity:3}
  ]}
];
```

## Tasks

1. Calculate total revenue → `340` (see note)
2. Find highest spending customer → `Alex`
3. Find best selling product **by revenue** → `Keyboard`
4. Group revenue by category → `{ electronics:250, education:90 }`

## Expected output

```javascript
340
Alex
Keyboard
{ electronics: 250, education: 90 }
```

## Requirements

- No `for` loops — `map`/`filter`/`reduce`/`flatMap`/`find`/`sort` are all allowed
- Task 3 ranks by revenue, not units
- Task 4's categories come from the items

## Hint

<details>
<summary>Show hint</summary>

Write a helper first. Everything else gets easier:

```javascript
const orderTotal = order =>
  order.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
```

**Task 1:**

```javascript
const revenue = orders.reduce((sum, o) => sum + orderTotal(o), 0);
```

**Task 2** — reduce to the order with the biggest total, then take the customer:

```javascript
const topCustomer = orders.reduce(
  (best, o) => orderTotal(o) > orderTotal(best) ? o : best
).customer;
```

**Tasks 3 and 4** both want items, not orders — so flatten first:

```javascript
const items = orders.flatMap(o => o.items);
```

Task 3 — the item with the highest `price × quantity`:

```javascript
const bestSeller = items.reduce(
  (best, i) => i.price * i.quantity > best.price * best.quantity ? i : best
).name;
```

Task 4 — group over the flattened items:

```javascript
const byCategory = items.reduce((acc, i) => {
  acc[i.category] = (acc[i.category] || 0) + i.price * i.quantity;
  return acc;
}, {});
```

`flatMap()` is the key move. Once items are flat, Tasks 3 and 4 are ordinary
Phase 7 problems — the nesting was the only thing making them hard.

Check: electronics = 200 + 50 = 250, education = 90. Sum 340 — matching Task 1 is
your proof both are right.

</details>
