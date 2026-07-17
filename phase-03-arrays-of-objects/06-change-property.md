# Exercise 6 — Change Property

**Trains:** writing to a property through an index
**Difficulty:** 🟢 Easy

## What you're solving

The read chain from Exercise 3, now on the left of an `=`.

There's something subtle worth noticing. `const users` doesn't stop you, and
neither does the object being inside an array — you're reaching two levels in and
changing a value. That reach is what makes arrays of objects genuinely useful,
and also what makes accidental mutation a real hazard later.

## Starter data

```javascript
const users = [
  { name: "Tugu", age: 22 },
  { name: "Alex", age: 25 },
  { name: "John", age: 30 }
];
```

Change Tugu's age from `22` to `23`. Print users.

## Expected output

```javascript
[
  { name: 'Tugu', age: 23 },
  { name: 'Alex', age: 25 },
  { name: 'John', age: 30 }
]
```

## Requirements

- Reach the property through its index
- Only Tugu changes
- Print the whole array afterwards

## Hint

<details>
<summary>Show hint</summary>

```javascript
users[0].age = 23;
```

Tugu is first. Same chain as reading — it's just on the left now.

</details>
