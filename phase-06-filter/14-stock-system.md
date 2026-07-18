# Exercise 14 — Stock System

**Trains:** a numeric condition that's really a boolean question · truthiness
**Difficulty:** 🟢 Easy

## What you're solving

"In stock" means `stock > 0` — a count treated as a yes/no.

There's a trap here worth meeting deliberately. You could write
`filter(p => p.stock)` and it would work, because `0` is falsy and every other
number is truthy. It gives the right answer for the wrong reason, and it breaks
the moment stock can go negative (returns, corrections) — `-1` is truthy, so a
product with negative stock would show as available.

Say what you mean: `p.stock > 0`.

## Starter data

```javascript
const products = [{name:"Laptop",stock:5},{name:"Mouse",stock:0}];
```

Keep available products (`stock > 0`).

## Expected output

```javascript
[{ name: 'Laptop', stock: 5 }]
```

## Toolbox

- 🎯 **Focus:** an explicit numeric comparison over bare truthiness (`stock > 0`)
- ✅ **Allowed:** `.filter()` · dot notation · comparison · `console.log()`
- ❌ **Not allowed:** bare `p.stock` as the condition — it works by accident (0 is
  falsy) but breaks on negative stock; say what you mean.

## Requirements

- Use `filter()`
- Write the comparison explicitly — not bare truthiness
- Mouse is out

## Hint

<details>
<summary>Show hint</summary>

```javascript
const available = products.filter(product => product.stock > 0);
```

Explicit beats clever. The next person to read this — probably you — shouldn't
have to know JavaScript's falsy rules to follow it.

</details>
