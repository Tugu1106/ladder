# Exercise 15 — Add Index

**Trains:** the index in a template literal
**Difficulty:** 🟢 Easy

## What you're solving

The index again, this time formatted into a string rather than stored as a field.

Note it's `0: red` here — the raw index, no `+ 1`. Exercise 14 added one because
IDs conventionally start at 1; this one doesn't because it's showing positions.
Read the expected output before assuming.

## Starter data

```javascript
const colors = ["red","blue","green"];
```

Create `["0: red","1: blue","2: green"]`.

## Expected output

```javascript
["0: red", "1: blue", "2: green"]
```

## Toolbox

- 🎯 **Focus:** the index inside a template literal (`` `${index}: ${color}` ``)
- ✅ **Allowed:** `.map()` with `(item, index)` · template literals · `console.log()`
- ❌ **Not allowed:** `for` / `.forEach()` · a manual counter · `+ 1` — this one
  shows raw positions, so the index stays as-is.

## Requirements

- Use `map()` with the index
- Starts at 0 — no `+ 1`
- Mind the colon and space

## Hint

<details>
<summary>Show hint</summary>

```javascript
const labelled = colors.map((color, index) => `${index}: ${color}`);
```

The `: ` between the two slots is literal text.

</details>
