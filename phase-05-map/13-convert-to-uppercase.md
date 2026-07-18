# Exercise 13 — Convert To Uppercase

**Trains:** chaining a method inside a callback
**Difficulty:** 🟢 Easy

## What you're solving

Two steps in one expression: pluck the name, then transform it.

`user.name.toUpperCase()` reads left to right — get the user's name, then
uppercase it. Chaining like this is normal and you should be comfortable with it,
because Phase 8 chains whole array methods the same way.

Note `toUpperCase()` returns a **new** string rather than changing the original.
Strings in JavaScript are immutable — you can never modify one, only produce
another. That's why the result must be returned to be useful.

## Starter data

```javascript
const users = [{name:"john"},{name:"jane"}];
```

Create `["JOHN","JANE"]`.

## Expected output

```javascript
["JOHN", "JANE"]
```

## Toolbox

- 🎯 **Focus:** chaining a method inside the callback (`user.name.toUpperCase()`)
- ✅ **Allowed:** `.map()` · `.toUpperCase()` · dot notation · `console.log()`
- ❌ **Not allowed:** `for` / `.forEach()` — `toUpperCase()` returns a *new*
  string (strings are immutable), so the result must be returned to matter.

## Requirements

- Use `map()`
- Flat array of strings, not objects
- The originals stay lowercase

## Hint

<details>
<summary>Show hint</summary>

```javascript
const upper = users.map(user => user.name.toUpperCase());
```

Parentheses required — `toUpperCase` is a method, unlike `.length`.

</details>
