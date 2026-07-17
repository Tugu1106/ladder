# Exercise 19 — Filter + Map + Reduce

**Trains:** the full pipeline · the payoff of the whole course
**Difficulty:** ⭐⭐

## What you're solving

All three methods, chained. This is the line you've been building toward since
Phase 4.

```javascript
data.filter(...).map(...).reduce(...)
```

Read it as a sentence: keep what matters, reshape it, combine it. Three verbs,
left to right, each handing its result to the next. Every dashboard, every
report, every analytics number you'll ever write is some version of this.

Order is not optional. Filter first so you don't transform items you're about to
discard — and more importantly, `available` only exists on the objects, so
filtering *after* mapping to prices would be impossible. Each step destroys
information the next step might have needed. Filter, then map, then reduce.

## Starter data

```javascript
const products = [{name:"Laptop",price:1000,available:true},{name:"Mouse",price:50,available:false},{name:"Keyboard",price:100,available:true}];
```

Steps: keep available products → get prices → add them.

Result `1100`.

## Expected output

```javascript
1100
```

## Requirements

- Chain all three in one statement
- That exact order
- One number out

## Hint

<details>
<summary>Show hint</summary>

```javascript
const revenue = products
  .filter(product => product.available)
  .map(product => product.price)
  .reduce((sum, price) => sum + price, 0);
```

Each line indented under the one before — the standard way to write a pipeline.

Trace it: filter leaves Laptop and Keyboard → map gives `[1000, 100]` → reduce
gives `1100`. The Mouse never reaches the map at all.

Try `.map()` before `.filter()` and it breaks — after mapping you hold bare
numbers, and `price.available` is `undefined`.

You *could* do it in one `reduce()` with an `if` inside. It'd work. But the
chained version says what it does, and that's worth more than the saved pass.

</details>
