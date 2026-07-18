# Project 2 — Shopping Cart System

**Trains:** two functions, one dataset · returning an object
**Difficulty:** ⭐

## What you're solving

The cart total you've now written four times, wrapped in a function — plus a
summary that reports two numbers at once.

Watch the distinction in `getCartSummary()`. `items: 5` is the number of
**things**, summing the quantities (2 + 3). Not `2`, the number of lines in the
cart. A cart with two products can hold five objects, and shoppers count objects.

## Starter data

```javascript
const cart = [{name:"Laptop",price:1000,quantity:2},{name:"Mouse",price:50,quantity:3}];
```

## Build these

**`getCartTotal()`** → `2150`

**`getCartSummary()`** → `{ items:5, total:2150 }`

## Expected output

```javascript
2150
{ items: 5, total: 2150 }
```

## Toolbox

- 🎯 **Focus:** two functions over one dataset · `getCartSummary` reuses `getCartTotal`
- ✅ **Allowed:** `function` · `.reduce()` · a result object · loops if needed
- ❌ **Avoid:** copy-pasting the total `reduce()` into both — keep the total logic
  in one place. `items` sums quantities (5), not line count (2).

## Requirements

- `getCartTotal` returns a number
- `getCartSummary` returns an object with `items` and `total`
- `items` sums quantities (5), not line count (2)
- `getCartSummary` should reuse `getCartTotal`

## Hint

<details>
<summary>Show hint</summary>

```javascript
function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

function getCartSummary() {
  return {
    items: cart.reduce((sum, item) => sum + item.quantity, 0),
    total: getCartTotal()
  };
}
```

`getCartSummary` calling `getCartTotal` means the total logic lives in exactly one
place. Change how totals work — add tax, say — and both functions stay correct.
Copy-pasting the reduce would mean two places to fix and one you'd forget.

`1000×2 + 50×3 = 2150`. Quantities `2 + 3 = 5`.

</details>
