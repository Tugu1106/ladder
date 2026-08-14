# Phase 7 — reduce() (20 Exercises)

**Status: ✅ complete — all 20 correct on the first pass. The hardest phase, clean.**

| # | Exercise | Status |
| --- | --- | --- |
| 01 | Sum Numbers | ✅ |
| 02 | Multiply Numbers | ✅ initial value `1` — got the trap |
| 03 | Find Maximum Number | ✅ seeded `numbers[0]` |
| 04 | Count Items | ✅ |
| 05 | Join Strings | ✅ handled the leading-space trap |
| 06 | Total Ages | ✅ |
| 07 | Total Product Price | ✅ |
| 08 | Shopping Cart Total | ✅ |
| 09 | Count Active Users | ✅ returned accumulator on both branches |
| 10 | Find Longest Name | ✅ seeded `users[0].name` |
| 11 | Group Numbers | ✅ object accumulator |
| 12 | Count Occurrences | ✅ `|| 0` tally |
| 13 | Convert Array To Object | ✅ lookup table |
| 14 | Group Users By Role | ✅ groupBy with guard |
| 15 | Shopping Cart Receipt | ✅ two accumulators, one pass |
| 16 | Calculate Average Score | ✅ divided outside the reduce |
| 17 | Inventory Value | ✅ |
| 18 | Expense Tracker | ✅ · `total.total` reads oddly — name it `summary` |
| 19 | Filter + Map + Reduce | ✅ full pipeline · `sum + price` cleaner than `sum += price` |
| 20 | Final Boss ⭐ | ✅ nested reduce — nailed it |

## 📖 Introduction

This is the most difficult and most powerful array method so far. After
mastering `forEach()` (execute something for each item), `map()` (transform
every item), and `filter()` (keep only matching items), now: **`reduce()`** —
"Take an array and reduce it into ONE final value." That value can be a number,
string, object, array, anything.

Mental model:

- `map()`: `[1,2,3,4]` → transform → `[2,4,6,8]`
- `filter()`: `[1,2,3,4]` → remove → `[2,4]`
- `reduce()`: `[1,2,3,4]` → combine → `10`

### Basic syntax

```javascript
array.reduce((accumulator, currentValue) => {}, initialValue);
```

Example:

```javascript
const numbers = [1,2,3,4];
const total = numbers.reduce((sum, number) => sum + number, 0);
```

Process: `0+1=1, 1+2=3, 3+3=6, 6+4=10` → result `10`

- **accumulator** — the thing you're building (sum, total, result, cart, object)
- **currentValue** — the current item from the array (number, user, product)
- **initialValue** — the starting point: `0` for numbers, `""` for strings, `[]` for arrays, `{}` for objects

## 📌 Rules

**Allowed**

✅ `reduce` · ✅ objects · ✅ arrays · ✅ map/filter inside reduce · ✅ conditions

**Avoid**

❌ `for` loops (try to think functional)

## 🏁 Mastery examples

```javascript
numbers.reduce((sum, n) => sum + n, 0);            // Sum
items.reduce((count, item) => count + 1, 0);       // Count
array.reduce((obj, item) => { obj[item.name] = item; return obj; }, {});  // Object building
array.reduce((group, item) => { group[item.category].push(item); return group; }, {}); // Grouping
```

After Phase 7 you basically know 80% of daily JavaScript array work — real apps
constantly do `data.filter().map().reduce()`, e.g.:

```javascript
const total = products
  .filter(product => product.available)
  .map(product => product.price)
  .reduce((sum, price) => sum + price, 0);
```

This pattern appears everywhere: ecommerce carts, dashboards, analytics, API
data processing, React state handling.

After this phase, next is **Phase 8 — combining all methods + mini real-world
projects**.
