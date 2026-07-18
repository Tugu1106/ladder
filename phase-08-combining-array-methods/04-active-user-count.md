# Exercise 4 — Active User Count

**Trains:** `filter().length` · not over-reaching for reduce
**Difficulty:** 🟢 Easy

## What you're solving

A counting question — and the point is that the *simplest* pipeline wins.

You could `reduce()` this (Phase 7's Exercise 9 did). You could `map()` to 1s and
sum them. Both work. Both are worse than filtering and reading `.length`.

Part of learning these methods is learning to stop. The fanciest tool that
produces the answer isn't the right one; the clearest is. `filter(...).length`
says "how many are active" almost in English.

## Starter data

```javascript
const users = [{name:"Alex",active:true},{name:"John",active:false},{name:"Sarah",active:true}];
```

How many active users? Result: `2`

## Expected output

```javascript
2
```

## Toolbox

- 🎯 **Focus:** `filter().length` — choosing the *simplest* pipeline
- ✅ **Allowed:** `.filter()` · `.length` · `console.log()`
- ❌ **Not allowed:** `.reduce()` · `.map()` to 1s · loops — the fanciest tool
  that works isn't the right one; the clearest is.

## Requirements

- Use `filter()` then `.length`
- No `reduce()` here — the simple version is the right one

## Hint

<details>
<summary>Show hint</summary>

```javascript
const count = users.filter(user => user.active).length;
```

`filter()` returns an array; arrays have `.length`. Done.

Compare Phase 7's Exercise 9, which reduced to the same `2` in four lines. Both
correct. This one you can read at a glance.

</details>
