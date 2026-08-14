# Exercise 17 — Calculate Total Per Item

**Trains:** `map()` combining two fields arithmetically
**Difficulty:** 🟢 Easy

## What you're solving

Two fields multiplied into one number per item — a **line total**, the thing that
appears at the right of every row on a receipt.

This is the setup for something. `map()` gives you the per-line numbers; Phase 7's
`reduce()` collapses them into a cart total. Together they're `map().reduce()`,
and you'll write that chain for the rest of your career.

## Starter data

```javascript
const cart = [{name:"Keyboard",price:50,quantity:2},{name:"Mouse",price:20,quantity:3}];
```

Create `[100,60]` (formula: `price * quantity`).

## Expected output

```javascript
[100, 60]
```

## Toolbox

- 🎯 **Focus:** combining two fields into one number per item (`price * quantity`)
- ✅ **Allowed:** `.map()` · arithmetic · dot notation · `console.log()`
- ❌ **Not allowed:** `.reduce()` (no total yet — that's Phase 7) · `for` /
  `.forEach()` — `map()` gives the per-line numbers; `reduce()` collapses them later.

## Requirements

- Use `map()`
- Numbers out, one per line item
- No total yet — that's Phase 7

## Hint

<details>
<summary>Show hint</summary>

```javascript
const lineTotals = cart.map(item => item.price * item.quantity);
```

50×2 = 100, 20×3 = 60. Both fields from the same object.

</details>
