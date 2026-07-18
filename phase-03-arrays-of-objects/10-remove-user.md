# Exercise 10 — Remove User

**Trains:** `pop()` on an array of objects
**Difficulty:** 🟢 Easy

## What you're solving

`pop()` from Phase 2, unchanged. It removes the last slot and returns whatever
was in it — here, a whole user object.

Together with Exercise 9 you now have add and remove on a real record list. That's
the beginning of CRUD, which is most of what backend code does.

## Starter data

```javascript
const users = [
  { name: "Tugu", age: 22 },
  { name: "Alex", age: 25 },
  { name: "John", age: 30 },
  { name: "Sarah", age: 28 }
];
```

Remove the last user using `pop()`.

## Expected output

```javascript
[
  { name: 'Tugu', age: 22 },
  { name: 'Alex', age: 25 },
  { name: 'John', age: 30 }
]
```

## Toolbox

- 🎯 **Focus:** `.pop()` on a list of objects (removes + returns the last record)
- ✅ **Allowed:** `.pop()` · `console.log()`
- ❌ **Not allowed:** `.splice()` · index math — `pop()` works identically whether
  the slot holds a string or a whole user.

## Requirements

- Use `pop()`
- Print the array afterwards

## Hint

<details>
<summary>Show hint</summary>

```javascript
users.pop();
```

Identical to Phase 2. Try storing what it returns and printing that — you'll get
Sarah's whole object back.

</details>
