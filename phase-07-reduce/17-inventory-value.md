# Exercise 17 — Inventory Value

**Trains:** the multiply-then-sum pattern
**Difficulty:** 🟢 Easy

## What you're solving

Exercise 8's shape with `stock` instead of `quantity` — what the warehouse is
worth, rather than what the cart costs.

Same maths, different story. That's worth noticing: `price * count` summed across
items answers "cart total", "inventory value", "payroll", "revenue". One pattern,
many names. Recognising the shape under the vocabulary is a large part of getting
good at this.

## Starter data

```javascript
const products = [{name:"Laptop",price:1000,stock:5},{name:"Mouse",price:50,stock:10}];
```

Calculate `5500` (formula `price * stock`).

## Expected output

```javascript
5500
```

## Toolbox

- 🎯 **Focus:** the multiply-then-sum shape again (`price * stock`)
- ✅ **Allowed:** `.reduce()` · arithmetic · dot notation · `console.log()`
- ❌ **Not allowed:** loops · `.forEach()` — recognise it's Exercise 8 with a
  different field; one pattern behind cart total, inventory, payroll, revenue.

## Requirements

- Use `reduce()`
- One number out

## Hint

<details>
<summary>Show hint</summary>

```javascript
const value = products.reduce((sum, p) => sum + p.price * p.stock, 0);
```

`1000×5 = 5000`, `50×10 = 500`, total `5500`.

Identical to Exercise 8 apart from the field name. Compare Phase 3's Exercise 20,
where you wrote this with a manual loop — same answer, a third of the code.

</details>
