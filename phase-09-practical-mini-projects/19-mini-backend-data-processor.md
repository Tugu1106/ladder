# Project 19 — Mini Backend Data Processor ⭐⭐⭐

**Trains:** generating a report from API data
**Difficulty:** ⭐⭐

## What you're solving

Pretend this arrived over the network. Your job is to turn raw records into the
two numbers someone actually wants.

That's what "backend data processing" means, stripped of ceremony: filter to what
counts, compute, return a named structure. No new technique — Phase 8's Exercise
14 in a function.

The word **report** is doing work in the name. `generateReport()` returns an
object with named fields, not a loose number, so it can grow later without
breaking callers.

## Starter data

```javascript
const orders = [{user:"Alex",status:"completed",amount:100},{user:"John",status:"pending",amount:200}];
```

## Build this

**`generateReport()`** → `{ completedOrders:1, revenue:100 }`

## Expected output

```javascript
{ completedOrders: 1, revenue: 100 }
```

## Requirements

- Only `completed` orders count
- John's pending 200 is excluded from **both** numbers
- Returns one object with both keys

## Hint

<details>
<summary>Show hint</summary>

```javascript
function generateReport() {
  const completed = orders.filter(order => order.status === "completed");

  return {
    completedOrders: completed.length,
    revenue: completed.reduce((sum, order) => sum + order.amount, 0)
  };
}
```

Filter once, use it twice — the count and the sum both come from `completed`.

Revenue is `100`. If you get `300`, the pending order slipped through — a bug that
would overstate revenue by 3× and take a while to notice, because the number
looks plausible.

</details>
