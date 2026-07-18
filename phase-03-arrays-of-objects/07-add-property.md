# Exercise 7 — Add Property

**Trains:** adding a property to every object in a loop
**Difficulty:** 🟢 Easy

## What you're solving

Phase 1's Exercise 5 added a property to one object. Now do it to **every**
object in a list — which means a loop.

This is a real and constant task: data arrives from one place and you enrich each
record with a field it didn't have. The lesson is that "add a property" and "do
it to all of them" compose without any new syntax.

## Starter data

```javascript
const users = [
  { name: "Tugu", age: 22 },
  { name: "Alex", age: 25 },
  { name: "John", age: 30 }
];
```

Add `country: "Mongolia"` to every user.

## Expected output

Each user now carries the new property:

```javascript
{ name: "Tugu", age: 22, country: "Mongolia" }
```

## Toolbox

- 🎯 **Focus:** adding a property to *every* object via a loop
- ✅ **Allowed:** `for` / `for...of` · dot assignment · `console.log()`
- ❌ **Not allowed:** `.map()` / `.forEach()` (later phases) · writing it three
  times — one loop enriches the whole list.

## Requirements

- Use a loop — don't write it out three times
- Every user gets it, with the same value
- Print the array afterwards to check

## Hint

<details>
<summary>Show hint</summary>

Inside the loop, assign to a property that doesn't exist yet — it gets created,
exactly as in Phase 1:

```javascript
users[i].country = "Mongolia";
```

`country` lands at the end of each object, after `age`.

</details>
