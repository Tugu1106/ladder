# Exercise 20 — Mini Boss ⭐

**Trains:** everything in Phase 6 · progressive narrowing
**Difficulty:** ⭐⭐ Boss

## What you're solving

The phase boss, built in three steps that each narrow further:

- **Task 1** — one condition (Exercise 17). Four products down to three.
- **Task 2** — two conditions with `&&` (Exercise 11). Three down to two.
- **Task 3** — filter, then map (Exercise 19). Two objects down to two strings.

That's how real queries get built: start broad, add conditions, shape the output
last. Each task's answer feeds the next, and by Task 3 you're writing a genuine
pipeline.

## Starter data

```javascript
const products = [
  {name:"Laptop",price:1000,category:"computer"},
  {name:"Phone",price:500,category:"mobile"},
  {name:"Mouse",price:50,category:"computer"},
  {name:"Keyboard",price:100,category:"computer"}
];
```

### Task 1 — Get only computer products

`[Laptop, Mouse, Keyboard]`

### Task 2 — Get only expensive computers

(`category === "computer"` AND `price >= 100`) → `[Laptop, Keyboard]`

### Task 3 — Get their names only

`["Laptop","Keyboard"]`

## Expected output

```javascript
[
  { name: 'Laptop', price: 1000, category: 'computer' },
  { name: 'Mouse', price: 50, category: 'computer' },
  { name: 'Keyboard', price: 100, category: 'computer' }
]
[
  { name: 'Laptop', price: 1000, category: 'computer' },
  { name: 'Keyboard', price: 100, category: 'computer' }
]
["Laptop", "Keyboard"]
```

## Toolbox

- 🎯 **Focus:** progressive narrowing — one condition, then `&&`, then filter→map
- ✅ **Allowed:** `.filter()` · `.map()` · `&&` · `===` · comparison · `console.log()`
- ❌ **Not allowed:** loops · `.forEach()` — start broad, add conditions, shape
  the output last; `filter()` never mutates, so all three tasks read the same data.

## Requirements

- `filter()` and `map()` only — no loops
- Task 2 uses `>= 100`, so Keyboard's exactly-100 price stays in
- Task 3 chains filter into map
- Print `products` at the end — all four still there

## Hint

<details>
<summary>Show hint</summary>

Task 1:

```javascript
const computers = products.filter(p => p.category === "computer");
```

Task 2 — both conditions in one `filter()`:

```javascript
const expensive = products.filter(p => p.category === "computer" && p.price >= 100);
```

Mouse fails on price (50), Phone fails on category. Keyboard is exactly 100 and
`>=` keeps it — with `>` you'd lose it and get only `["Laptop"]`.

Task 3:

```javascript
const names = products
  .filter(p => p.category === "computer" && p.price >= 100)
  .map(p => p.name);
```

`filter()` never mutates, so all three tasks read the same untouched `products`.
That's what makes chaining safe.

</details>
