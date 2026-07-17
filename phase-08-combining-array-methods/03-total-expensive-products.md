# Exercise 3 — Total Expensive Products

**Trains:** the full three-step pipeline
**Difficulty:** 🟢 Easy

## What you're solving

All three methods, and by now this should feel like one move rather than three
decisions.

Keep, reshape, combine. `filter().map().reduce()`. Say the steps, write the
steps.

## Starter data

```javascript
const products = [{name:"Mouse",price:20},{name:"Keyboard",price:100},{name:"Monitor",price:300}];
```

Steps: keep products above 50 → get prices → add them.

Result: `400`

## Expected output

```javascript
400
```

## Requirements

- Chain all three
- "Above 50" is strict — `> 50`
- One number

## Hint

<details>
<summary>Show hint</summary>

```javascript
const total = products
  .filter(p => p.price > 50)
  .map(p => p.price)
  .reduce((sum, price) => sum + price, 0);
```

Keyboard (100) and Monitor (300) survive; Mouse (20) doesn't. 100 + 300 = 400.

You could skip the `map()` and reduce straight from the filtered objects:

```javascript
.reduce((sum, p) => sum + p.price, 0)
```

Both correct, one pass fewer. The three-step version says the steps out loud,
which is often worth more.

</details>
