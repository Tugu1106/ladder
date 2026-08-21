# Exercise 5 — Add Element Manually

**Trains:** growing an array by index · why `push()` exists
**Difficulty:** 🟢 Easy

## What you're solving

Assigning to an index **past the end** of an array makes the array grow — the
same "assign to something that isn't there and it appears" rule you saw with
object properties in Phase 1.

This exercise exists to make you feel the annoyance. You have to *know* the array
has 3 items to write `fruits[3]`. Count wrong and you either overwrite something
or leave an empty hole. Exercise 9 introduces `push()`, which does this without
you having to count — and you'll appreciate it more having done it the hard way.

## Starter data

```javascript
const fruits = ["apple", "mango", "orange"];
```

Add `grape` to the end using index assignment, e.g. `array[3] = ...`

## Expected output

```javascript
["apple", "mango", "orange", "grape"]
```

## Toolbox

- 🎯 **Focus:** growing an array by writing past the end (`arr[arr.length] = value`)
- ✅ **Allowed:** `.length` · index assignment · `console.log()`
- ❌ **Not allowed:** `.push()` (that's Exercise 9) — the point is to *feel* the
  counting yourself so you appreciate why `push()` exists.

## Requirements

- Use index assignment — not `push()` (that's Exercise 9)
- `grape` must land at the end, with no gaps before it

## Hint

<details>
<summary>Show hint</summary>

The array has 3 items, so its last index is `2`. The next free slot is `3`.

Try `fruits[7] = "kiwi"` afterwards and print — you'll see empty slots appear.
That's what makes manual indexing risky.

</details>
