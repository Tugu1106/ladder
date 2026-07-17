# Project 4 — Bank Account System

**Trains:** conditional accumulation · signed arithmetic
**Difficulty:** ⭐

## What you're solving

A balance from a transaction log — and the first time the operation itself depends
on the data.

Deposits add. Withdrawals **subtract**. So the callback branches on `type` and
picks its arithmetic accordingly. Every earlier reduce did the same thing to every
item; this one doesn't.

This is genuinely how ledgers work. You don't store a balance — you store the
transactions and derive the balance, so there's an audit trail. Every bank, every
accounting system.

## Starter data

```javascript
const transactions = [{type:"deposit",amount:1000},{type:"withdraw",amount:300},{type:"deposit",amount:500}];
```

## Build this

**`calculateBalance()`** → `1200`

## Expected output

```javascript
1200
```

## Requirements

- Deposits add, withdrawals subtract
- Start from `0`
- Returns a number

## Hint

<details>
<summary>Show hint</summary>

Check: +1000 − 300 + 500 = 1200.

```javascript
function calculateBalance() {
  return transactions.reduce((balance, t) => {
    if (t.type === "deposit") {
      return balance + t.amount;
    }
    return balance - t.amount;
  }, 0);
}
```

Ternary version:

```javascript
(balance, t) => t.type === "deposit" ? balance + t.amount : balance - t.amount
```

`amount` is always positive — the **type** decides the sign. Adding everything
blindly gives 1800.

The `else`-less version treats anything that isn't a deposit as a withdrawal.
Fine for two types; with a third (`"fee"`, `"transfer"`) you'd want an explicit
check and a sensible default for unknown types.

</details>
