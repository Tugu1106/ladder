# Exercise 6 — Print Object Property

**Trains:** `forEach()` over an array of objects
**Difficulty:** 🟢 Easy

## What you're solving

Now the array holds objects, so the callback parameter receives a whole object
each time — and you take a property from it.

This is where `forEach()` starts to feel genuinely nice. Compare Phase 3's
`users[i].name`, where `i` is loop bookkeeping you had to maintain, against
`user.name`, where `user` is just... the user. The noise is gone and the intent
is all that's left.

## Starter data

```javascript
const users = [{name:"John",age:20},{name:"Jane",age:25}];
```

Using `forEach()`, print names.

## Expected output

```javascript
John
Jane
```

## Toolbox

- 🎯 **Focus:** `forEach()` over objects — the callback param *is* the object
- ✅ **Allowed:** `.forEach()` · dot notation · `console.log()`
- ❌ **Not allowed:** index access (`users[i]`) · `for` loops — name the parameter
  `user` and reach `user.name`, no counter in sight.

## Requirements

- Use `forEach()`
- Print only names
- Name the parameter `user`, not `item` — it makes the body read properly

## Hint

<details>
<summary>Show hint</summary>

```javascript
users.forEach(user => {
  console.log(user.name);
});
```

No index anywhere. `user` **is** the object.

If you see `[object Object]`, you printed `user` instead of `user.name`.

</details>
