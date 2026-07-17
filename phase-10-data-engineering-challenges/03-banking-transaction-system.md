# Challenge 3 — Banking Transaction System ⭐⭐⭐⭐⭐

**Trains:** derived state · signed accumulation · financial logic
**Difficulty:** ⭐⭐⭐⭐

## What you're solving

The idea worth taking from this one: `balance: 1000` is the **starting** balance,
not the current one. The current balance is `1000` plus everything that happened
since.

That's how real ledgers work, and it matters. You don't store "the balance" and
mutate it — you store an opening figure and an immutable list of transactions, and
*derive* the balance whenever you need it. Every transaction is auditable, nothing
is lost, and you can reconstruct the balance at any point in history.

Systems that store a mutable balance and update it in place lose the ability to
answer "why is it this number?" Banks, accounting software, and event-sourced
systems all do it this way.

So `reduce()` here doesn't start at `0` — it starts at `user.balance`. That's the
whole insight.

## Starter data

```javascript
const users = [
  { name:"Alex", balance:1000, transactions:[{type:"deposit",amount:500},{type:"withdraw",amount:200}] }
];
```

## Tasks

**`calculateBalance(user)`** → `1300`

**`findRichestUser()`** → `Alex`

**`totalMoneyTransferred()`** — sum of all withdrawals across all users → `200`

## Expected output

```javascript
1300
Alex
200
```

## Requirements

- No `for` loops
- `calculateBalance` seeds from `user.balance`, not `0`
- Deposits add, withdrawals subtract
- `findRichestUser` compares **calculated** balances, not the starting ones
- `totalMoneyTransferred` counts only withdrawals

## Hint

<details>
<summary>Show hint</summary>

Check: 1000 + 500 − 200 = 1300.

```javascript
function calculateBalance(user) {
  return user.transactions.reduce(
    (balance, t) => t.type === "deposit" ? balance + t.amount : balance - t.amount,
    user.balance                      // ← the seed, not 0
  );
}
```

Seeding with `0` gives you `300` — the *change*, not the balance. Both are real
numbers a bank might want; only one is what was asked.

```javascript
function findRichestUser() {
  return users.reduce(
    (best, u) => calculateBalance(u) > calculateBalance(best) ? u : best
  ).name;
}
```

Comparing `u.balance` instead of `calculateBalance(u)` would rank people by their
opening balance and ignore everything that happened since. With one user you'd
never notice. Add a second and it's wrong.

```javascript
function totalMoneyTransferred() {
  return users
    .flatMap(u => u.transactions)
    .filter(t => t.type === "withdraw")
    .reduce((sum, t) => sum + t.amount, 0);
}
```

`flatMap` to get every transaction across every user, filter to withdrawals, sum.

</details>
