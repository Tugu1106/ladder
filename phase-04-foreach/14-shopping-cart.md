# Exercise 14 — Shopping Cart

**Trains:** accumulating a total from objects · a real-world shape
**Difficulty:** 🟢 Easy

## What you're solving

The accumulator again, on data that finally looks like something real.

Nothing new technically — it's Exercise 8 with `price` instead of `age`. But
recognise the shape: this is a cart subtotal, the single most-written calculation
in e-commerce. You've now built it well enough that Phase 7's one-line `reduce()`
version will be a relief rather than a mystery.

## Starter data

```javascript
const cart = [
  {name:"Keyboard",price:50},
  {name:"Mouse",price:20},
  {name:"Monitor",price:200}
];
```

Using `forEach()`, calculate total price.

## Expected output

```javascript
270
```

## Requirements

- Use `forEach()`
- `total` before, print after
- One number out

## Hint

<details>
<summary>Show hint</summary>

```javascript
let total = 0;
cart.forEach(item => {
  total += item.price;
});
console.log(total);
```

No quantities here — each item counts once. Exercise 20 of Phase 5 adds that
wrinkle.

</details>
