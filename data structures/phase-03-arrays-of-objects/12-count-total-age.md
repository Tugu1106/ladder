# Exercise 12 — Count Total Age

**Trains:** the accumulator pattern on object properties
**Difficulty:** 🟢 Easy

## What you're solving

Phase 2's Exercise 20 summed an array of plain numbers. Now the numbers are
buried inside objects, so each pass has to reach in and pull `.age` out before
adding it.

That's the only difference: `total += numbers[i]` becomes `total += users[i].age`.
Same accumulator, one extra hop.

## Starter data

Build it yourself — John (20), Jane (30), Bob (40):

```javascript
const users = [
  { name: "John", age: 20 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 40 }
];
```

Calculate the total age. Use a loop.

## Expected output

```javascript
90
```

## Toolbox

- 🎯 **Focus:** the accumulator, reaching into each object (`total += users[i].age`)
- ✅ **Allowed:** `for` / `for...of` · a `let` total · `+=` · `console.log()`
- ❌ **Not allowed:** `.reduce()` (Phase 7) · `Math` helpers — same accumulator
  as Phase 2, just one extra hop to `.age`.

## Requirements

- Use a loop — no `reduce()`, that's Phase 7
- Declare the total before the loop, print after
- Print only the final number

## Hint

<details>
<summary>Show hint</summary>

Same three parts as Phase 2's Exercise 20:

```javascript
let total = 0;
// in the loop:  total += users[i].age;
console.log(total);
```

If you get `NaN`, you're adding the object instead of its `age`. If you get a
long string of digits, your total started as `""` instead of `0`.

</details>
