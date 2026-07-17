# Exercise 20 — Mini Boss ⭐

**Trains:** everything in Phase 5 · three transformations of one dataset
**Difficulty:** ⭐⭐ Boss

## What you're solving

The phase boss: one dataset, three `map()` calls, three different output shapes.

- **Task 1** — plucking (Exercise 6). Objects → strings.
- **Task 2** — arithmetic (Exercise 17). Objects → numbers.
- **Task 3** — reshaping (Exercise 18). Objects → different objects.

Same method, same data, three unrelated results. That's the takeaway: `map()`
isn't a "doubling tool" or a "plucking tool," it's *"give me one thing per item,
you decide what."*

And through all three, `products` never changes. Print it at the end.

## Starter data

```javascript
const products = [
  {name:"Laptop",price:1000,quantity:2},
  {name:"Phone",price:500,quantity:3},
  {name:"Mouse",price:50,quantity:10}
];
```

### Task 1 — Create product names

```javascript
["Laptop","Phone","Mouse"]
```

### Task 2 — Create total values (`price * quantity`)

```javascript
[2000,1500,500]
```

### Task 3 — Create

```javascript
[{name:"Laptop",total:2000},{name:"Phone",total:1500},{name:"Mouse",total:500}]
```

## Expected output

```javascript
["Laptop", "Phone", "Mouse"]
[2000, 1500, 500]
[
  { name: 'Laptop', total: 2000 },
  { name: 'Phone', total: 1500 },
  { name: 'Mouse', total: 500 }
]
```

## Requirements

- `map()` only — no loops, no `forEach()`, no `filter()`/`reduce()`
- Three separate `map()` calls
- Task 3's objects have exactly `name` and `total` — no `price`, no `quantity`
- Print `products` at the end to prove it's untouched

## Hint

<details>
<summary>Show hint</summary>

Task 1:

```javascript
const names = products.map(p => p.name);
```

Task 2 — Exercise 17's multiplication:

```javascript
const totals = products.map(p => p.price * p.quantity);
```

Task 3 — build a fresh object, no spread, since `price` and `quantity` aren't
wanted:

```javascript
const summaries = products.map(p => ({ name: p.name, total: p.price * p.quantity }));
```

Notice Task 3 contains all of Task 1 and Task 2's work. If it helps, see that
one `map()` can do what two did separately — that's the seed of Phase 8.

</details>
