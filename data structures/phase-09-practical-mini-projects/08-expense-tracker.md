# Project 8 — Expense Tracker

**Trains:** a total and a grouped breakdown
**Difficulty:** ⭐⭐

## What you're solving

Two views of the same spending: one number, and the same money split by category.

`groupExpenses()` is Phase 7's tally with a twist — you're not counting
occurrences, you're **summing amounts** per key. `{ food: 50 }` isn't "two food
expenses", it's "50 spent on food". The accumulator adds `amount` rather than `1`.

Sanity check that pays off: the grouped values must add up to the total. 50 + 10 =
60 ✓. If they don't, one of the two functions is wrong.

## Starter data

```javascript
const expenses = [{category:"food",amount:20},{category:"transport",amount:10},{category:"food",amount:30}];
```

## Build these

**`getTotalExpense()`** → `60`

**`groupExpenses()`** → `{ food:50, transport:10 }`

## Expected output

```javascript
60
{ food: 50, transport: 10 }
```

## Toolbox

- 🎯 **Focus:** grouping that *sums amounts* per key (not counting occurrences)
- ✅ **Allowed:** `function` · `.reduce()` · `{}` accumulator · `|| 0` · loops if needed
- ❌ **Avoid:** adding `1` (that tallies, giving `{food: 2}`) — add `e.amount`;
  the grouped values must sum back to the total. Parenthesise the `|| 0`.

## Requirements

- `getTotalExpense` sums everything: 20 + 10 + 30 = 60
- `groupExpenses` sums **per category** — food is 20 + 30 = 50
- Categories come from the data
- The grouped values must sum to the total

## Hint

<details>
<summary>Show hint</summary>

```javascript
function getTotalExpense() {
  return expenses.reduce((sum, e) => sum + e.amount, 0);
}

function groupExpenses() {
  return expenses.reduce((groups, e) => {
    groups[e.category] = (groups[e.category] || 0) + e.amount;
    return groups;
  }, {});
}
```

`(groups[e.category] || 0) + e.amount` — the default-to-zero trick from Phase 7's
Exercise 12, adding `e.amount` instead of `1`.

Get `{ food: 2, transport: 1 }` and you counted instead of summing.

Parentheses required around the `||`.

</details>
