# Exercise 11 — Apply Discount

**Trains:** `map()` with percentage arithmetic
**Difficulty:** 🟢 Easy

## What you're solving

Numbers in, numbers out, with real-world arithmetic — the shape of every "sale
price" calculation.

There are two ways to think about a 10% discount: subtract 10% (`n - n * 0.1`) or
keep 90% (`n * 0.9`). Same answer, and the second is what you'll see in real code
because it's one operation.

## Starter data

```javascript
const prices = [100, 200, 300];
```

Create a new array with 10% discount.

## Expected output

```javascript
[90, 180, 270]
```

## Toolbox

- 🎯 **Focus:** `.map()` with percentage arithmetic (`price * 0.9`)
- ✅ **Allowed:** `.map()` · arithmetic · `console.log()`
- ❌ **Not allowed:** `for` / `.forEach()` · mutating `prices` — build a new
  array of sale prices, leaving the originals intact.

## Requirements

- Use `map()`
- Original prices unchanged
- Whole numbers out — no `90.00000000001`

## Hint

<details>
<summary>Show hint</summary>

```javascript
const discounted = prices.map(price => price * 0.9);
```

These particular numbers divide cleanly. With awkward prices you'd hit floating
point — `0.1 + 0.2 !== 0.3` in JavaScript — and real money code stores cents as
integers to sidestep it. Not needed here, but worth filing away.

</details>
