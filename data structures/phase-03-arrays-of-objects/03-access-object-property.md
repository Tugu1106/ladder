# Exercise 3 — Access Object Property

**Trains:** chaining index access and dot notation
**Difficulty:** 🟢 Easy

## What you're solving

Exercise 2 got you an object. Now go one step further and pull a property out of
it — in a single expression.

`users[0].name` reads left to right: go to position 0, then take `name` from what
you find there. This chain is the fundamental move of the whole phase. Once
`orders[0].items[2].name` stops looking scary, you can read real API code.

## Starter data

```javascript
const users = [
  { name: "Tugu", age: 22 },
  { name: "Alex", age: 25 },
  { name: "John", age: 30 }
];
```

Print only the first user's name.

## Expected output

```javascript
Tugu
```

## Toolbox

- 🎯 **Focus:** chaining index + dot in one expression (`users[0].name`)
- ✅ **Allowed:** index access · dot notation · `console.log()`
- ❌ **Not allowed:** storing `users[0]` in a variable first · a loop — the whole
  point is reading the chain left to right in a single expression.

## Requirements

- Do it in one expression — don't store the object in a variable first
- Print just the name

## Hint

<details>
<summary>Show hint</summary>

Glue Exercise 2's `users[0]` and Phase 1's dot notation together:

```javascript
users[0].name
```

Brackets go where you need a position; dots go where you need a named property.
That's the only rule, and it scales to any depth.

</details>
