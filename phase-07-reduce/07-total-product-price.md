# Exercise 7 — Total Product Price

**Trains:** summing a property · recognising the pattern
**Difficulty:** 🟢 Easy

## What you're solving

Exercise 6 with `price` instead of `age`. Deliberately repetitive.

By now you should see `array.reduce((sum, item) => sum + item.field, 0)` as **one
shape** you fill in, not three decisions. That fluency is the whole point of the
repetition — it's the most-written `reduce()` in existence.

## Starter data

```javascript
const products = [{name:"Keyboard",price:50},{name:"Mouse",price:20}];
```

Result `70`.

## Expected output

```javascript
70
```

## Requirements

- Use `reduce()`
- One number out

## Hint

<details>
<summary>Show hint</summary>

```javascript
const total = products.reduce((sum, product) => sum + product.price, 0);
```

Same shape as Exercise 6, one word different.

</details>
