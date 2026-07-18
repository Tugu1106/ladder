# Exercise 8 — Delete Property

**Trains:** `delete` through an index · uneven object shapes
**Difficulty:** 🟢 Easy

## What you're solving

Phase 1's `delete`, now aimed at one object inside an array.

The interesting part is the aftermath. Delete `age` from just the second user and
your array is no longer uniform — one object has a different shape from the
others. Reading `users[1].age` now gives `undefined` rather than an error, which
is exactly the kind of quiet inconsistency that causes bugs in real data. Print
the array and look at what you've made.

## Starter data

```javascript
const users = [
  { name: "Tugu", age: 22, country: "Mongolia" },
  { name: "Alex", age: 25, country: "Mongolia" },
  { name: "John", age: 30, country: "Mongolia" }
];
```

Remove `age` from the second user.

## Expected output

Only the second user loses `age`:

```javascript
[
  { name: 'Tugu', age: 22, country: 'Mongolia' },
  { name: 'Alex', country: 'Mongolia' },
  { name: 'John', age: 30, country: 'Mongolia' }
]
```

## Toolbox

- 🎯 **Focus:** `delete` through an index (`delete users[1].age`)
- ✅ **Allowed:** `delete` · index access · dot notation · `console.log()`
- ❌ **Not allowed:** a loop · touching the other users — delete from one object
  only, then notice the array is no longer uniform.

## Requirements

- Use `delete`
- Only the second user is affected
- Print the array to see the uneven shape

## Hint

<details>
<summary>Show hint</summary>

```javascript
delete users[1].age;
```

Afterwards, try `console.log(users[1].age)` — you get `undefined`, not a crash.
JavaScript won't warn you that the property is gone. That's your job.

</details>
