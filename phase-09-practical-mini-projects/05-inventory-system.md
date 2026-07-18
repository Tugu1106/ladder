# Project 5 — Inventory System

**Trains:** filter and reduce over the same data
**Difficulty:** 🟢 Easy

## ⚠️ Note on the expected value

The original spec says `getInventoryValue()` → `5250`. **With this data that's
5000**, and the two requirements contradict each other:

- `Laptop`: 1000 × 5 = 5000
- `Mouse`: 50 × 0 = **0** (stock is zero)

For `5250` the Mouse would need `stock: 5` — but then `getAvailableProducts()`
would return `["Laptop","Mouse"]`, not `["Laptop"]`. The data can satisfy one or
the other, not both.

**Use `5000`**, which matches the data as written. If you'd rather have `5250`,
change the Mouse's stock to `5` and accept that it's then available.

## What you're solving

Two questions about a product list: what can we sell, and what is it all worth.

The zero-stock Mouse is the interesting part. It's excluded from availability but
still *counted* in the value — contributing 0, because 50 × 0 is 0. You don't
need to skip it; the arithmetic handles it. Filtering it out first would give the
same answer for more work.

## Starter data

```javascript
const products = [{name:"Laptop",price:1000,stock:5},{name:"Mouse",price:50,stock:0}];
```

## Build these

**`getAvailableProducts()`** → `["Laptop"]`

**`getInventoryValue()`** → `5000` (see the note above)

## Expected output

```javascript
["Laptop"]
5000
```

## Toolbox

- 🎯 **Focus:** two different pipelines over one array (filter→map vs. reduce)
- ✅ **Allowed:** `function` · `.filter()` · `.map()` · `.reduce()` · loops if needed
- ❌ **Avoid:** filtering zero-stock out before the value sum — `50 * 0` is `0`,
  so the arithmetic already handles it; no filter needed there.

## Requirements

- `getAvailableProducts` returns names of products with `stock > 0`
- `getInventoryValue` sums `price * stock` across **all** products
- No filter needed for the value — zero stock contributes zero

## Hint

<details>
<summary>Show hint</summary>

```javascript
function getAvailableProducts() {
  return products
    .filter(p => p.stock > 0)
    .map(p => p.name);
}

function getInventoryValue() {
  return products.reduce((sum, p) => sum + p.price * p.stock, 0);
}
```

Two functions, two different pipelines, same source array. That's normal — the
data is the data, and each question shapes its own path through it.

</details>
