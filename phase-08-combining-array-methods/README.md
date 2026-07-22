# Phase 8 — Combining Array Methods & Real-World Data Processing (20 Exercises)

**Status: ✅ complete — all 20 reviewed and running correctly.**

| # | Exercise | Status |
| --- | --- | --- |
| 01 | Adult Names | ✅ |
| 02 | Double Even Numbers | ✅ |
| 03 | Total Expensive Products | ✅ |
| 04 | Active User Count | ✅ |
| 05 | Product Names | ✅ |
| 06 | User Cards | ✅ |
| 07 | Price Formatting | ✅ |
| 08 | Search System | ✅ · lowercase the keyword too |
| 09 | Average Score | ✅ |
| 10 | Total Shopping Cart | ✅ |
| 11 | Group Products By Category | ✅ |
| 12 | Count By Category | ✅ |
| 13 | Group Users By Age | ✅ |
| 14 | Dashboard Statistics | ✅ filter-once, use-twice |
| 15 | Employee Report | ✅ |
| 16 | Inventory System | ✅ |
| 17 | Movie Database | ✅ |
| 18 | Online Store Analytics ⭐ | ✅ filter → reduce into object |
| 19 | Social Media Analytics ⭐ | ✅ sum + winner |
| 20 | Final Boss ⭐⭐⭐ | ✅ fixed — `totalUsers` key + `active && age >= 18` |

## 📖 Introduction

This is the phase where everything starts clicking. You now know:

| Method | Purpose |
| --- | --- |
| `forEach()` | Do something for every item |
| `map()` | Transform every item |
| `filter()` | Keep only matching items |
| `reduce()` | Combine into one result |

Now you stop practicing isolated methods. Real developers usually write
pipelines: `data.filter().map().reduce()`

Example:

```javascript
const total = products
  .filter(product => product.stock > 0)
  .map(product => product.price)
  .reduce((sum, price) => sum + price, 0);
```

Meaning: 1) remove unavailable products, 2) extract prices, 3) add all prices.

## 📌 Rules

**Allowed**

✅ objects · ✅ arrays · ✅ `forEach` · ✅ `map` · ✅ `filter` · ✅ `reduce` ·
✅ arrow functions · ✅ conditions

**Avoid**

❌ `for` loops · ❌ `while` loops

Goal: think like a modern JavaScript developer.

## 🏁 Wrap-up

After Phase 8 you should be able to read code like:

```javascript
const result = users
  .filter(user => user.active)
  .map(user => user.orders)
  .flat()
  .reduce((sum, order) => sum + order.price, 0);
```

and understand: "Get active users → get their orders → flatten orders →
calculate total money."

This is the same thinking used when handling REST API responses, React state,
backend data, database results, analytics dashboards.

🔥 After this phase, your next step should be **Phase 9 — JavaScript practical
mini projects (without tutorials)** where you use these skills to build actual
systems.
