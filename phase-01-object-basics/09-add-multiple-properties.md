# Exercise 9 — Add Multiple Properties

**Trains:** adding several properties · mixing value types
**Difficulty:** 🟢 Easy

## What you're solving

Exercise 5 added one property. Now add three at once, and notice they don't all
hold the same *kind* of value: a string, a number, and a boolean.

Objects don't care. One object can mix any types across its properties, which is
what makes them good at describing real things — a user has a name (string), an
age (number), and a verified flag (boolean).

## Starter data

```javascript
const person = { name: "Tugu", age: 23 };
```

Add these three properties, choosing sensible values yourself:

- `job` — a string
- `height` — a number
- `isStudent` — a boolean (`true` or `false`)

Print the object.

## Expected output

Your values will differ; the shape is what matters:

```javascript
{
  name: 'Tugu',
  age: 23,
  job: 'Developer',
  height: 175,
  isStudent: true
}
```

## Requirements

- Add all three to the existing object
- `job` must be a string, `height` a number, `isStudent` a boolean
- No quotes around the number or the boolean — `height: 175` not `height: "175"`

## Hint

<details>
<summary>Show hint</summary>

Same as Exercise 5, three times over — one assignment per line.

Booleans are bare words: `true` and `false`, no quotes. `"true"` in quotes is a
*string*, and it behaves differently in conditions later.

</details>
