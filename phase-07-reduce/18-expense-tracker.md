# Exercise 18 — Expense Tracker

**Trains:** returning a wrapped result
**Difficulty:** 🟢 Easy

## What you're solving

A plain sum, but the answer must come back as `{ total: 35 }` rather than `35`.

Small distinction, real consequence. An object with a named field is
**extensible** — tomorrow you add `count`, or `average`, or `byCategory`, and
every caller keeps working. A bare number is a dead end; adding anything means
changing the return type and breaking everyone.

This is why real APIs return `{ data: [...] }` instead of the array directly. The
wrapper leaves room to grow.

Two ways to build it, and the choice is a small lesson in itself.

## Starter data

```javascript
const expenses = [{title:"Food",amount:20},{title:"Transport",amount:10},{title:"Coffee",amount:5}];
```

Create `{ total:35 }`.

## Expected output

```javascript
{ total: 35 }
```

## Toolbox

- 🎯 **Focus:** returning a *wrapped* result (`{ total: 35 }`, room to grow)
- ✅ **Allowed:** `.reduce()` · object result · shorthand `{ total }` · `console.log()`
- ❌ **Not allowed:** loops — and don't force the wrapping *into* the reduce if
  summing plainly then wrapping at the end reads cleaner (it does here).

## Requirements

- Use `reduce()`
- Result is an object with a `total` key, not a bare number

## Hint

<details>
<summary>Show hint</summary>

Accumulate the object directly:

```javascript
const summary = expenses.reduce(
  (acc, expense) => ({ total: acc.total + expense.amount }),
  { total: 0 }
);
```

Or sum plainly and wrap at the end — simpler, and easier to read:

```javascript
const total = expenses.reduce((sum, e) => sum + e.amount, 0);
const summary = { total };
```

The second is better here. Don't force work into the reduce that's clearer
outside it — same lesson as Exercise 16.

`{ total }` is shorthand for `{ total: total }`, from Phase 5's Exercise 14.

</details>
