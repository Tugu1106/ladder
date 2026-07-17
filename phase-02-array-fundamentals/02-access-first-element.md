# Exercise 2 — Access First Element

**Trains:** index access · zero-based counting
**Difficulty:** 🟢 Easy

## What you're solving

You reach into an array by **position**, using a number in square brackets.

Here's the catch that bites every beginner exactly once: positions start at
**0**, not 1. The first item is at index `0`, the second at `1`. Get this into
your fingers now and the "off by one" bugs that plague new programmers mostly
won't happen to you.

## Starter data

```javascript
const fruits = ["apple", "banana", "orange"];
```

Print the first fruit.

## Expected output

```javascript
apple
```

## Requirements

- Use index access
- Print just the fruit, not the whole array

## Hint

<details>
<summary>Show hint</summary>

Square brackets with a **number** inside:

```javascript
things[0]
```

This looks like the bracket notation from Phase 1, and that's not a coincidence —
it's the same operation. Objects look up by key, arrays look up by position.

</details>
