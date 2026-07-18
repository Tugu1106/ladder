# Exercise 13 — Object Inside Object

**Trains:** nested objects · reaching a specific nested value
**Difficulty:** 🟢 Easy

## What you're solving

More reps on nesting, with a second nested object living alongside the first.

One object can hold many nested objects at once — `person` now has both an
`address` and a `favoriteFood`, each with its own inner keys. This is how real
data grows: sideways as well as downwards.

## Starter data

```javascript
const person = {
  name: "Tugu",
  age: 23,
  address: { city: "Darkhan", district: "Bayanzurkh" }
};
```

Add a `favoriteFood` object:

```javascript
favoriteFood
    breakfast
    lunch
    dinner
```

Print **only** dinner.

## Expected output

Your values will differ:

```javascript
Buuz
```

## Toolbox

- 🎯 **Focus:** a second nested object alongside the first
- ✅ **Allowed:** nested object literal · chained dot notation · `console.log()`
- ❌ **Not allowed:** replacing `address` · loops — add `favoriteFood` without
  disturbing what's already there.

## Requirements

- `favoriteFood` must be an object with all three meals
- `address` stays where it is
- Print only dinner

## Hint

<details>
<summary>Show hint</summary>

Same move as Exercise 11 — assign an object literal, then chain dots to reach in.

</details>
