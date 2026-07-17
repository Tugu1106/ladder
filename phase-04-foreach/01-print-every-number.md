# Exercise 1 — Print Every Number

**Trains:** `forEach()` · callbacks · arrow functions
**Difficulty:** 🟢 Easy

## What you're solving

Your first **array method that takes a function**. This is the doorway to modern
JavaScript, so it's worth going slowly.

A `for` loop makes you manage a counter, a condition, and an increment — three
pieces of bookkeeping that have nothing to do with what you actually want.
`forEach()` deletes all of it. You hand it a function; it calls that function
once per item, passing the item in.

The function you hand over is called a **callback** — you don't call it yourself,
`forEach()` calls it back for you. That inversion feels strange for about a day,
and then it's invisible.

## Starter data

```javascript
const numbers = [10, 20, 30, 40];
```

Use `forEach()` to print every number.

## Expected output

```javascript
10
20
30
40
```

## Requirements

- Use `forEach()` — no `for` loop
- No index, no `.length`, no counter

## Hint

<details>
<summary>Show hint</summary>

```javascript
numbers.forEach(number => {
  console.log(number);
});
```

`number` is a parameter name you choose — `forEach()` fills it with each item in
turn. Naming it for what it holds (`number`, `user`, `product`) is what makes
this style readable.

Compare against Phase 2's Exercise 19. Same output, no bookkeeping.

</details>
