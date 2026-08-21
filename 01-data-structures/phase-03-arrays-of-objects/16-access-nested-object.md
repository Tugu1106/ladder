# Exercise 16 — Access Nested Object

**Trains:** nested objects · chained dot notation
**Difficulty:** 🟢 Easy

## What you're solving

A short break from arrays, back to Phase 1's nesting — because the next few
exercises combine nesting with arrays, and it's worth re-warming the chain first.

An object's property can hold another object. Reaching in means one dot per level.

## Starter data

```javascript
const user = {
  name: "Tugu",
  address: { city: "Ulaanbaatar", country: "Mongolia" }
};
```

Print:

```javascript
Ulaanbaatar
```

## Expected output

```javascript
Ulaanbaatar
```

## Toolbox

- 🎯 **Focus:** chained dot notation into a nested object (`user.address.city`)
- ✅ **Allowed:** dot notation · `console.log()`
- ❌ **Not allowed:** storing `user.address` first · a loop — one expression,
  one dot per level.

## Requirements

- Reach it in one expression
- Print only the city

## Hint

<details>
<summary>Show hint</summary>

Two dots — into `address`, then to `city`:

```javascript
user.address.city
```

Stop one dot short and you print the whole address object instead.

</details>
