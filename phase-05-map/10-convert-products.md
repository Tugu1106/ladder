# Exercise 10 — Convert Products

**Trains:** objects to formatted strings
**Difficulty:** 🟢 Easy

## What you're solving

Exercise 8's shape with two fields and a currency symbol — objects in, display
strings out.

The `$` next to a `${}` is worth noticing. `$${product.price}` looks like a typo
and isn't: the first `$` is literal text, the second starts the interpolation.

## Starter data

```javascript
const products = [{name:"Keyboard",price:50},{name:"Mouse",price:20}];
```

Create `["Keyboard costs $50","Mouse costs $20"]`.

## Expected output

```javascript
["Keyboard costs $50", "Mouse costs $20"]
```

## Requirements

- Use `map()`
- Include the `$` before each price
- Return, don't print

## Hint

<details>
<summary>Show hint</summary>

```javascript
const labels = products.map(p => `${p.name} costs $${p.price}`);
```

`$${p.price}` — literal `$`, then `${p.price}`. Only one `$` and you'd print the
price with no currency symbol.

</details>
