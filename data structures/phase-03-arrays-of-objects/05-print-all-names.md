# Exercise 5 — Print All Names

**Trains:** looping over objects · reaching a property each pass
**Difficulty:** 🟢 Easy

## What you're solving

Phase 2's Exercise 19 looped over strings and printed each one directly. Here
each item is an **object**, so printing it raw would dump `{ name: 'Tugu', age: 22 }`.
You want just the name.

So inside the loop you do Exercise 3's chain — except the index is now the loop
counter instead of a hardcoded number. That's the whole idea: `users[i].name`
where `i` changes every pass.

## Starter data

```javascript
const users = [
  { name: "Tugu", age: 22 },
  { name: "Alex", age: 25 },
  { name: "John", age: 30 }
];
```

Using a loop, output every name.

## Expected output

```javascript
Tugu
Alex
John
```

## Toolbox

- 🎯 **Focus:** looping and reaching a property each pass (`users[i].name`)
- ✅ **Allowed:** `for` / `for...of` · dot notation · `console.log()`
- ❌ **Not allowed:** `.forEach()` / `.map()` (Phases 4–5) · hardcoding three
  logs — the counter or loop variable replaces the fixed index.

## Requirements

- Use a loop
- Print only names — no ages, no braces
- Must still work if a fourth user is added

## Hint

<details>
<summary>Show hint</summary>

With a classic `for` loop, the counter goes where the number was:

```javascript
users[i].name
```

With `for...of`, you get the object directly and just take `.name` from it:

```javascript
for (const user of users) {
  console.log(user.name);
}
```

If you see `[object Object]`, you printed the object instead of its property.

</details>
