# Exercise 16 — Inventory System

**Trains:** multiply-and-sum, no filter
**Difficulty:** 🟢 Easy

## What you're solving

Phase 7's Exercise 17 — warehouse value, every product counted.

No filter this time. Read the requirement: nothing says to exclude anything, so
everything is in. Adding a filter nobody asked for is its own kind of bug.

## Starter data

```javascript
const products = [{name:"Laptop",price:1000,stock:3},{name:"Mouse",price:50,stock:20}];
```

Calculate inventory value (`price * stock`). Result: `4000`

## Expected output

```javascript
4000
```

## Toolbox

- 🎯 **Focus:** multiply-and-sum with *no* filter (`price * stock`, everything counts)
- ✅ **Allowed:** `.reduce()` · arithmetic · dot notation · `console.log()`
- ❌ **Not allowed:** loops · an uninvited `.filter()` — nothing asks to exclude
  anything; adding a filter nobody wanted is its own bug.

## Requirements

- `reduce()`, no filter
- One number

## Hint

<details>
<summary>Show hint</summary>

```javascript
const value = products.reduce((sum, p) => sum + p.price * p.stock, 0);
```

`1000×3 = 3000`, `50×20 = 1000`, total `4000`.

</details>
