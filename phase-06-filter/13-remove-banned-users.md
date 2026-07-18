# Exercise 13 — Remove Banned Users

**Trains:** negating a boolean with `!`
**Difficulty:** 🟢 Easy

## What you're solving

Exercise 3's "remove means keep the opposite", now on a boolean field.

`banned: true` marks the ones you want **gone**, so the keep condition is the
negation: `!user.banned`. Read `!` out loud as "not" and the line says exactly
what you mean — "keep users that are not banned."

This is the one place `!` is clearly the right tool. `user.banned === false`
works, but it's four extra characters saying the same thing.

## Starter data

```javascript
const users = [{name:"Alex",banned:false},{name:"John",banned:true}];
```

Keep users who are not banned.

## Expected output

```javascript
[{ name: 'Alex', banned: false }]
```

## Toolbox

- 🎯 **Focus:** negating a boolean with `!` (`!user.banned`)
- ✅ **Allowed:** `.filter()` · `!` · dot notation · `console.log()`
- ❌ **Not allowed:** `.splice()` / mutation · `.map()` — "remove banned" becomes
  "keep not-banned"; `!` reads out loud as "not."

## Requirements

- Use `filter()` with `!`
- Alex survives, John doesn't

## Hint

<details>
<summary>Show hint</summary>

```javascript
const allowed = users.filter(user => !user.banned);
```

`!` flips a boolean. `banned: false` → `!false` → `true` → kept.

Careful in real data: `!undefined` is also `true`, so a user with no `banned`
field at all would survive. Here that's the sensible default, but it's worth
knowing it's a default and not a check.

</details>
