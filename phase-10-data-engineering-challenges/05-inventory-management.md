# Challenge 5 — Inventory Management ⭐⭐⭐⭐⭐

**Trains:** CRUD thinking · mutation vs. immutability · a function with side effects
**Difficulty:** ⭐⭐⭐⭐

## What you're solving

The first two tasks are routine. The third — `restockProduct(name, amount)` — is
different from everything you've written so far, and that's the point.

Every function until now has been a **query**: given data, return an answer,
change nothing. This one is a **command**: it changes the world. That distinction
is one of the most useful ideas in programming.

Which forces a real decision. Do you mutate the product in place, or return a new
array with the product replaced? Both are defensible:

- **Mutate** — simple, direct, and what the spec implies with `stock:20`. But now
  callers holding a reference see it change under them, and React wouldn't
  re-render.
- **Return new** — immutable, safe, works with React. But callers must remember to
  use the return value, and forgetting is silent.

There's no universal right answer. Pick one, know why, be consistent. That's what
this challenge is actually testing.

## Starter data

```javascript
const products = [{name:"Laptop",stock:5,sales:100},{name:"Mouse",stock:0,sales:200}];
```

## Tasks

**`getOutOfStockProducts()`** → `Mouse`

**`getBestSeller()`** → `Mouse`

**`restockProduct(name, amount)`** → `restockProduct("Mouse", 20)` → Mouse's `stock` becomes `20`

## Expected output

```javascript
[{ name: 'Mouse', stock: 0, sales: 200 }]
Mouse
{ name: 'Mouse', stock: 20, sales: 200 }
```

## Requirements

- No `for` loops
- Out of stock means `stock === 0`
- Best seller ranks by `sales`
- `restockProduct` takes two parameters
- Decide mutate vs. immutable, and say which in a comment

## Hint

<details>
<summary>Show hint</summary>

Note Mouse is both out of stock and the best seller — that's realistic, not a
coincidence. Things sell out *because* they sell well.

```javascript
function getOutOfStockProducts() {
  return products.filter(p => p.stock === 0);
}

function getBestSeller() {
  return products.reduce((best, p) => p.sales > best.sales ? p : best).name;
}
```

The mutable restock — sets stock **to** the amount, per the spec's `stock:20`:

```javascript
function restockProduct(name, amount) {
  const product = products.find(p => p.name === name);
  if (!product) return;                 // handle "not found"
  product.stock = amount;
  return product;
}
```

The immutable version returns a new array and leaves the old one alone:

```javascript
function restockProduct(name, amount) {
  return products.map(p =>
    p.name === name ? { ...p, stock: amount } : p
  );
}
```

The `map` with a ternary is the standard immutable-update idiom — change the one
that matches, pass the rest through untouched. You'll write this constantly in
React.

Note the ambiguity: does restocking **set** stock to 20 or **add** 20 to it? The
spec's `stock:20` from a starting `0` can't tell you — both give 20. Real specs are
like this. `stock += amount` would be "add"; ask, or pick and document.

</details>
