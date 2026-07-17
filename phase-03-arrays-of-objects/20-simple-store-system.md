# Exercise 20 — Simple Store System ⭐

**Trains:** everything in Phase 3 · three passes over one dataset
**Difficulty:** ⭐⭐⭐ Boss

## What you're solving

The phase boss. One realistic dataset, three different questions — printing,
filtering, and totalling — each a separate loop.

This is what real data work actually looks like. You don't get one clever
one-liner; you get a list and a handful of questions, and you answer them one at
a time. Task 3 is the important one: `price * stock` per item, accumulated. That
combines the arithmetic-per-item idea with the accumulator, which is the seed of
every dashboard you'll ever build.

Phase 8 revisits this exact problem with `filter().map().reduce()` and it becomes
three lines. Do it the long way now so that shrinkage means something.

## Starter data

```javascript
const products = [
  { name: "Keyboard", price: 50, stock: 10 },
  { name: "Mouse", price: 20, stock: 0 },
  { name: "Monitor", price: 200, stock: 5 }
];
```

### Task 1 — Print every product

```javascript
Keyboard - $50
Mouse - $20
Monitor - $200
```

### Task 2 — Find products that are available

Available means `stock > 0`, so Mouse is out:

```javascript
Keyboard
Monitor
```

### Task 3 — Calculate total inventory value

Each product contributes `price * stock`:

```javascript
50*10 + 20*0 + 200*5 = 1500
```

## Expected output

```javascript
1500
```

## Requirements

- Loops only — no `map()`, `filter()`, or `reduce()`
- Three separate tasks; a loop each is fine and clearer than one clever loop
- Task 3 prints one number: `1500`

## Hint

<details>
<summary>Show hint</summary>

Task 1 is Exercise 11 — a template literal with `$` as fixed text:

```javascript
`${product.name} - $${product.price}`
```

Two `$` in a row is correct: one is literal, one starts the `${}`.

Task 2 is Exercise 14's `if` inside a loop, printing instead of counting.

Task 3 is Exercise 12's accumulator, but you add `price * stock` rather than a
bare property:

```javascript
total += products[i].price * products[i].stock;
```

Mouse contributes `20 * 0 = 0` — it's included in the loop and adds nothing. You
don't need to skip it.

</details>
