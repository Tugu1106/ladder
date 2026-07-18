# Exercise 13 — shift()

**Trains:** `shift()` · removing from the front
**Difficulty:** 🟢 Easy

## What you're solving

`shift()` is `pop()`'s mirror image: it removes the **first** item and returns it.

There's a hidden cost worth knowing. Removing the front item means every
remaining item has to slide down one position — what was at index 1 becomes index
0, and so on. For small arrays nobody cares, but that's why `shift()` is slower
than `pop()` on huge arrays.

## Starter data

```javascript
let letters = ["a", "b", "c"];
```

Remove the first item, so `["a","b","c"]` becomes `["b","c"]`.

## Expected output

```javascript
["b", "c"]
```

## Toolbox

- 🎯 **Focus:** `.shift()` — remove (and return) the first item
- ✅ **Allowed:** `.shift()` · `console.log()`
- ❌ **Not allowed:** `.splice(0, 1)` · index tricks — `shift()` is the dedicated
  tool for the front, the mirror of `pop()`.

## Requirements

- Use `shift()`
- No arguments — it always takes the first one

## Hint

<details>
<summary>Show hint</summary>

```javascript
things.shift();
```

Like `pop()`, it returns the removed item if you want it. And like `pop()`, it
changes the array in place.

</details>
