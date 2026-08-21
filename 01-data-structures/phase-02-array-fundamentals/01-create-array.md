# Exercise 1 — Create an Array

**Trains:** array literal syntax · `console.log()`
**Difficulty:** 🟢 Easy

## What you're solving

Phase 1 taught you objects: **one thing** with many properties. An **array** is
the other half — **many things**, in order.

The order is the whole point. An array remembers that `apple` came first and
`orange` came third, and it will hand them back in exactly that sequence. That's
why every list you'll ever render — search results, messages, products — is an
array.

## Starter data

Build it yourself. Create an array called `fruits` containing `apple`, `banana`,
`orange`, then print the whole array.

## Expected output

```javascript
["apple", "banana", "orange"]
```

## Toolbox

- 🎯 **Focus:** array literal syntax `[]`
- ✅ **Allowed:** `[]` · `console.log()`
- ❌ **Not allowed:** `new Array()` · `.push()` (that's Exercise 9) — the literal
  with all values inside is how arrays are really written.

## Requirements

- Use array literal syntax (`[]`)
- All three values go in when you create it
- Print the whole array

## Hint

<details>
<summary>Show hint</summary>

An array literal is square brackets with values separated by commas:

```javascript
const things = ["a", "b", "c"];
```

Objects use `{}` and named keys. Arrays use `[]` and positions. That's the whole
difference.

</details>
