# Exercise 4 — Access Second User Age

**Trains:** the same chain, different position and property
**Difficulty:** 🟢 Easy

## What you're solving

Reps on Exercise 3's chain, with both halves changed: a different index and a
different property.

Trivial-looking, but it's checking one thing — that "the second user" instantly
maps to index `1` in your head, without counting on your fingers.

## Starter data

```javascript
const users = [
  { name: "Tugu", age: 22 },
  { name: "Alex", age: 25 },
  { name: "John", age: 30 }
];
```

Print:

```javascript
25
```

## Expected output

```javascript
25
```

## Requirements

- One expression: index, then property
- The output is a number — no quotes around it

## Hint

<details>
<summary>Show hint</summary>

Same shape as Exercise 3. The second user lives at index `1`, and you want `age`
this time.

</details>
