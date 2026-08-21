# Project 18 — Banking Analytics ⭐⭐

**Trains:** sum and maximum over accounts
**Difficulty:** ⭐

## What you're solving

Two functions you've now written several times, on account balances.

`getRichestCustomer()` is worth one thought: return the name or the account? The
function says "customer", so a name is defensible; returning the account gives the
caller both. Either is fine — decide, don't drift.

The repetition across Projects 16 and 18 is deliberate. Sum and max over a list of
records is such a common pair that it should cost you no thought at all by now.

## Starter data

```javascript
const accounts = [{name:"Alex",balance:5000},{name:"John",balance:2000}];
```

## Build these

**`getTotalMoney()`** → `7000`

**`getRichestCustomer()`** → `"Alex"`

## Expected output

```javascript
7000
Alex
```

## Toolbox

- 🎯 **Focus:** sum and max over records — reduce to the object, then narrow (`.name`)
- ✅ **Allowed:** `function` · `.reduce()` · ternary · comparison
- ❌ **Avoid:** `.sort()` · accumulating the name alone (you'd lose the balance to
  compare against) — this sum+max pair should cost you no thought by now.

## Requirements

- `getTotalMoney` returns a number: 5000 + 2000 = 7000
- `getRichestCustomer` returns the name string
- No `sort()`

## Hint

<details>
<summary>Show hint</summary>

```javascript
function getTotalMoney() {
  return accounts.reduce((sum, account) => sum + account.balance, 0);
}

function getRichestCustomer() {
  return accounts.reduce(
    (richest, account) => account.balance > richest.balance ? account : richest,
    accounts[0]
  ).name;
}
```

The `.name` at the end pulls the name off the winning account — reduce to the
whole object, then narrow. Trying to accumulate the name alone would leave you
with nothing to compare balances against.

Real money code doesn't store balances as floats — `0.1 + 0.2 !== 0.3` in
JavaScript, and rounding errors in a bank are unacceptable. Production systems
store integer cents. Not needed here, but that's why.

</details>
