# Exercise 1 — Create User List

**Trains:** arrays of objects · the shape of real data
**Difficulty:** 🟢 Easy

## What you're solving

Phase 1 gave you one object. Phase 2 gave you a list. Put them together and you
get an **array of objects** — the single most common data shape in all of
JavaScript.

Every API response, every database query result, every list in a React app looks
like this. Learn to see it as "a list, where each slot holds a person" rather
than a wall of brackets, and the rest of this phase is straightforward.

## Starter data

Build it yourself:

```javascript
const users = [
  { name: "Tugu", age: 22 },
  { name: "Alex", age: 25 },
  { name: "John", age: 30 }
];
```

Print the whole array.

## Expected output

```javascript
[
  { name: 'Tugu', age: 22 },
  { name: 'Alex', age: 25 },
  { name: 'John', age: 30 }
]
```

## Requirements

- The array holds three objects
- Every object has the same shape — both `name` and `age`
- Print the whole array

## Hint

<details>
<summary>Show hint</summary>

Nothing new here — it's Phase 2's `[]` with Phase 1's `{}` inside, commas
between each object.

The consistent shape matters. Real data is uniform like this, which is what makes
looping over it possible.

</details>
