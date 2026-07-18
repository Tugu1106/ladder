# Exercise 12 — Nested Object Update

**Trains:** writing to a nested property
**Difficulty:** 🟢 Easy

## What you're solving

Exercise 11 read a nested value. Now write to one.

The rule is the same as it was at the top level: the chain that reads a value
also writes to it, you just put it on the left of the `=`. Depth changes nothing.

## Starter data

```javascript
const person = {
  name: "Tugu",
  age: 23,
  address: { city: "Ulaanbaatar", district: "Bayanzurkh" }
};
```

Change the city, then print the entire `address` object.

## Expected output

Your values will differ. Note you print the whole address, not just the city:

```javascript
{ city: 'Darkhan', district: 'Bayanzurkh' }
```

## Toolbox

- 🎯 **Focus:** writing to a nested key (the read-chain on the left of `=`)
- ✅ **Allowed:** chained dot notation · assignment `=` · `console.log()`
- ❌ **Not allowed:** reassigning the whole `address` object · spread — that wipes
  `district`; reach in and change only the one key.

## Requirements

- Change `city` inside `address` — don't replace the whole `address` object
- `district` must survive unchanged
- Print the whole `address` object

## Hint

<details>
<summary>Show hint</summary>

Take the chain you used to *read* the city and put it on the left of an `=`.

If you assign a fresh object to `address` instead, you'll wipe out `district`.
Reach in and change just the one property.

</details>
