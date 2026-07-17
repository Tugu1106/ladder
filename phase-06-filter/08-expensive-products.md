# Exercise 8 — Expensive Products

**Trains:** a threshold on an object property
**Difficulty:** 🟢 Easy

## What you're solving

Exercise 4's threshold, now reaching into objects — the "show me items over $50"
filter every shop has.

Note the expected output is written as `[Keyboard, Monitor]`, which is shorthand
for the two objects. Your actual result contains the full objects with their
prices.

## Starter data

```javascript
const products = [{name:"Mouse",price:20},{name:"Keyboard",price:100},{name:"Monitor",price:300}];
```

Keep products above $50.

Expected: `[Keyboard, Monitor]`

## Expected output

```javascript
[
  { name: 'Keyboard', price: 100 },
  { name: 'Monitor', price: 300 }
]
```

## Requirements

- Use `filter()`
- "Above $50" is strict — `> 50`
- Full objects out

## Hint

<details>
<summary>Show hint</summary>

```javascript
const expensive = products.filter(product => product.price > 50);
```

The `$` in "above $50" is just how prices are written — your comparison is
against the plain number `50`.

</details>
