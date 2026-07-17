# Exercise 9 — Count Active Users

**Trains:** conditional accumulation
**Difficulty:** 🟢 Easy

## What you're solving

Counting only what matches — the accumulator grows on some passes and stays put
on others.

The trap: you must **always return the accumulator**, even when you're not
changing it. `reduce()` replaces the accumulator with whatever comes back, so a
callback that returns nothing on the "no" branch hands you `undefined`, and every
pass after that is broken.

This is where `if` without `else` goes wrong in a `reduce()`. Every path must
return.

## Starter data

```javascript
const users = [{name:"Alex",active:true},{name:"John",active:false},{name:"Sarah",active:true}];
```

Result `2`.

## Expected output

```javascript
2
```

## Requirements

- Use `reduce()`
- Return the accumulator on both branches
- Print one number

## Hint

<details>
<summary>Show hint</summary>

Ternary — both branches return something:

```javascript
const count = users.reduce((total, user) => user.active ? total + 1 : total, 0);
```

Read the `: total` as "otherwise leave it alone." Dropping it — `user.active ? total + 1 : undefined`
— destroys the accumulator on the first inactive user.

Longer form, same idea:

```javascript
const count = users.reduce((total, user) => {
  if (user.active) {
    return total + 1;
  }
  return total;      // ← this line is mandatory
}, 0);
```

Also fine: `users.filter(u => u.active).length`. Clearer for a pure count, and
Phase 8 will make that choice properly.

</details>
