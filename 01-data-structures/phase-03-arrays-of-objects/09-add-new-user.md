# Exercise 9 — Add New User

**Trains:** `push()` with an object argument
**Difficulty:** 🟢 Easy

## What you're solving

`push()` from Phase 2, except the thing you're pushing is a whole object rather
than a string.

That's the entire lesson: `push()` doesn't care what it's given. This is what
"add a record" looks like in real code — a new signup, a new message, a new item
in a cart.

## Starter data

```javascript
const users = [
  { name: "Tugu", age: 22 },
  { name: "Alex", age: 25 },
  { name: "John", age: 30 }
];
```

Add `{ name: "Sarah", age: 28 }` to the array using `push()`.

## Expected output

```javascript
[
  { name: 'Tugu', age: 22 },
  { name: 'Alex', age: 25 },
  { name: 'John', age: 30 },
  { name: 'Sarah', age: 28 }
]
```

## Toolbox

- 🎯 **Focus:** `.push()` with an object argument (adding a whole record)
- ✅ **Allowed:** `.push()` · object literal · `console.log()`
- ❌ **Not allowed:** index assignment · rebuilding the array — `push()` doesn't
  care that the item is an object rather than a string.

## Requirements

- Use `push()`
- Sarah's object must match the others' shape
- She lands at the end

## Hint

<details>
<summary>Show hint</summary>

Write the object literal straight inside the parentheses:

```javascript
users.push({ name: "Sarah", age: 28 });
```

The braces go inside the parentheses. `users.push{...}` won't parse.

</details>
