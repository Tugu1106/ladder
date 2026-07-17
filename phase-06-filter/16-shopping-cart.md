# Exercise 16 — Shopping Cart

**Trains:** filtering on one field while others ride along
**Difficulty:** 🟢 Easy

## What you're solving

Removing zero-quantity items from a cart — the cleanup before you total it up.

Note the objects carry `price` and `name` too, and your condition ignores both.
That's normal: you filter on one field, and the whole record survives or doesn't.
The other fields are still there in the result, waiting for whatever comes next.

## Starter data

```javascript
const cart = [{name:"Keyboard",price:50,quantity:2},{name:"Mouse",price:20,quantity:0},{name:"Monitor",price:300,quantity:1}];
```

Remove items with quantity 0.

Result: `[Keyboard, Monitor]`

## Expected output

```javascript
[
  { name: 'Keyboard', price: 50, quantity: 2 },
  { name: 'Monitor', price: 300, quantity: 1 }
]
```

## Requirements

- Use `filter()`
- Survivors keep all three properties
- Express it as a keep condition

## Hint

<details>
<summary>Show hint</summary>

```javascript
const real = cart.filter(item => item.quantity > 0);
```

Same as Exercise 14, different field.

This is step one of a genuine pipeline: filter out the empties, then multiply
`price * quantity`, then sum. You've done all three separately now — Phase 8
joins them up.

</details>
