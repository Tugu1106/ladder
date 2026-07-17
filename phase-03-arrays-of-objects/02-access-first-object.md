# Exercise 2 — Access First Object

**Trains:** indexing into an array of objects
**Difficulty:** 🟢 Easy

## What you're solving

Indexing works exactly as it did in Phase 2 — the only change is what comes back.
`fruits[0]` gave you a string. `users[0]` gives you a whole **object**.

That's the mental step: an array doesn't care what it holds. Position 0 is
position 0, whether the slot contains `"apple"` or a user record.

## Starter data

```javascript
const users = [
  { name: "Tugu", age: 22 },
  { name: "Alex", age: 25 },
  { name: "John", age: 30 }
];
```

Print the first user's whole object.

## Expected output

```javascript
{ name: "Tugu", age: 22 }
```

## Requirements

- Use index access
- Print the whole object — not just the name

## Hint

<details>
<summary>Show hint</summary>

```javascript
users[0]
```

Same as `fruits[0]`. The braces in the output tell you an object came back.

</details>
