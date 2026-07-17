# Exercise 16 — slice()

**Trains:** `slice()` · copying without mutating
**Difficulty:** 🟢 Easy

## What you're solving

Every method so far changed the original array. `slice()` is the first one that
**doesn't** — it reads a section and hands you a brand-new array, leaving the
source untouched.

This is the single most important distinction in the whole phase. Printing both
arrays at the end isn't busywork; it's the proof that the original survived.
Phase 5's `map()` is built on this same non-mutating idea.

Also note how the arguments work: `slice(1, 4)` starts at index 1 and stops
**before** index 4. The end is exclusive. That catches everyone the first time.

## Starter data

```javascript
const numbers = [1, 2, 3, 4, 5];
```

Create a new array containing `2, 3, 4` without changing the original.

## Expected output

```javascript
original: [1,2,3,4,5]
new: [2,3,4]
```

## Requirements

- Use `slice()`
- Store the result in a new variable
- Print both arrays, to prove the original is unchanged

## Hint

<details>
<summary>Show hint</summary>

```javascript
const part = things.slice(startIndex, endIndex);
```

You want values `2,3,4`, which sit at indexes 1, 2, and 3. Since the end is
exclusive, the second argument must be one past the last index you want.

Unlike `push()`, you **must** capture the return value — `slice()` doesn't touch
the original, so ignoring what it returns accomplishes nothing.

</details>
