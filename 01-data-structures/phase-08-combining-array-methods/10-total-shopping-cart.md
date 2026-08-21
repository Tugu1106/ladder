# Exercise 10 — Total Shopping Cart

**Trains:** multiply-and-sum in one reduce
**Difficulty:** 🟢 Easy

## What you're solving

Phase 7's Exercise 8, unchanged — the cart total with quantities.

Third time you've seen this exact calculation. That repetition is deliberate:
`price × quantity`, summed, is the most commercially important line of code in
this entire course.

## Starter data

```javascript
const cart = [{name:"Laptop",price:1000,quantity:2},{name:"Mouse",price:50,quantity:3}];
```

Calculate total money. Expected: `2150`

## Expected output

```javascript
2150
```

## Toolbox

- 🎯 **Focus:** multiply-and-sum in one `reduce()` (`price * quantity`)
- ✅ **Allowed:** `.reduce()` · arithmetic · dot notation · `console.log()`
- ❌ **Not allowed:** loops · `.forEach()` with an outside total — the most
  commercially important line in the course; one sweep.

## Requirements

- `reduce()`
- Multiply inside the callback
- One number

## Hint

<details>
<summary>Show hint</summary>

```javascript
const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
```

`2000 + 150 = 2150`.

</details>
