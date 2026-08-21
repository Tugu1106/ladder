# Exercise 5 — Product Names

**Trains:** `filter().map()` on stock
**Difficulty:** 🟢 Easy

## What you're solving

Exercise 1's pipeline with a different condition — the "what can we actually
sell" list every shop needs.

Routine by now, which is the point. These early Phase 8 exercises are drilling the
pipeline until it's muscle memory, so the harder ones later are about the
*problem* rather than the syntax.

## Starter data

```javascript
const products = [{name:"Laptop",stock:5},{name:"Mouse",stock:0},{name:"Keyboard",stock:3}];
```

Steps: keep products in stock → get names.

Result: `["Laptop","Keyboard"]`

## Expected output

```javascript
["Laptop", "Keyboard"]
```

## Toolbox

- 🎯 **Focus:** `filter().map()` drilled to muscle memory (in-stock → names)
- ✅ **Allowed:** `.filter()` · `.map()` · comparison · dot notation · `console.log()`
- ❌ **Not allowed:** `for` / `while` loops · bare `p.stock` as the condition —
  write `p.stock > 0` explicitly.

## Requirements

- `filter()` then `map()`
- In stock means `stock > 0`

## Hint

<details>
<summary>Show hint</summary>

```javascript
const available = products
  .filter(p => p.stock > 0)
  .map(p => p.name);
```

Write `p.stock > 0`, not bare `p.stock` — Phase 6's Exercise 14 explains why.

</details>
