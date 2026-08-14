# Exercise 11 — Group Products By Category

**Trains:** groupBy with dynamic keys
**Difficulty:** ⭐⭐

## What you're solving

Phase 7's Exercise 14 with products instead of users.

The guard is the whole exercise: create the array before pushing into it. First
time you meet `"computer"` there's no array at that key, and `undefined.push()`
crashes.

Note the values are **names**, not whole products.

## Starter data

```javascript
const products = [{name:"Laptop",category:"computer"},{name:"Phone",category:"mobile"},{name:"Mouse",category:"computer"}];
```

Create: `{ computer:["Laptop","Mouse"], mobile:["Phone"] }`

## Expected output

```javascript
{ computer: [ 'Laptop', 'Mouse' ], mobile: [ 'Phone' ] }
```

## Toolbox

- 🎯 **Focus:** groupBy with dynamic keys (an object accumulator of arrays)
- ✅ **Allowed:** `.reduce()` · `{}` start · bracket keys · `.push()` · `|| []` · `console.log()`
- ❌ **Not allowed:** loops · `Object.groupBy()` · hardcoded categories — create
  each array on first sighting, push names, and `return group` every pass.

## Requirements

- `reduce()` with `{}` initial value
- Categories come from the data
- Arrays hold names
- Return the accumulator every pass

## Hint

<details>
<summary>Show hint</summary>

```javascript
const grouped = products.reduce((group, product) => {
  group[product.category] = group[product.category] || [];
  group[product.category].push(product.name);
  return group;
}, {});
```

`|| []` creates the array on first sighting. `push(product.name)`, not
`push(product)` — the spec wants names.

</details>
