# Exercise 7 — Active Users

**Trains:** filtering on a boolean property directly
**Difficulty:** 🟢 Easy

## What you're solving

When the property is **already a boolean**, you don't need a comparison at all.
`user.active` is `true` or `false` — exactly what `filter()` wants.

Writing `user.active === true` works and isn't wrong, but it's redundant in the
same way `if (x === true)` is. Idiomatic JavaScript just passes the boolean
through, and you should be able to read that fluently.

## Starter data

```javascript
const users = [{name:"Alex",active:true},{name:"John",active:false},{name:"Sarah",active:true}];
```

Keep only active users.

## Expected output

```javascript
[{name:"Alex",active:true},{name:"Sarah",active:true}]
```

## Requirements

- Use `filter()`
- Return the property itself — no `=== true`
- Whole objects in the result

## Hint

<details>
<summary>Show hint</summary>

```javascript
const active = users.filter(user => user.active);
```

That's the whole thing. The property *is* the verdict.

For the opposite — inactive users — use `!user.active`. That's where `!` genuinely
earns its place.

Careful in real code: this also drops users where `active` is missing,
`undefined`, `0`, or `""`, because all of those are falsy. Usually what you want,
occasionally not.

</details>
