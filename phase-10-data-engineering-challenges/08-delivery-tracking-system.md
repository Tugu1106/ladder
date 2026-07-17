# Challenge 8 — Delivery Tracking System ⭐⭐⭐⭐⭐

**Trains:** status filtering · nested item totals · backend data shapes
**Difficulty:** ⭐⭐⭐⭐

## What you're solving

Deliveries with a status and nested items — the shape every order-tracking backend
has.

The interesting part is `getPendingCustomers()`. "Pending" means `status !== "delivered"`
— but should it? What if a delivery is `"cancelled"`, or `"failed"`, or `"returned"`?
Negating one status quietly lumps every other state into "pending", including ones
that will never arrive.

That's a real bug pattern. Statuses grow over time — someone adds `"cancelled"` a
year later, and your `!== "delivered"` check silently starts reporting cancelled
orders as pending. Listing the statuses you *mean* is safer than negating the one
you don't.

With two statuses you can't tell the difference. That's exactly when the habit
should form.

## Starter data

```javascript
const deliveries = [{ customer:"Alex", status:"delivered", items:[{name:"Phone",price:500}] }];
```

Add a second so the filters do something:

```javascript
const deliveries = [
  { customer:"Alex", status:"delivered", items:[{name:"Phone",price:500}] },
  { customer:"John", status:"pending", items:[{name:"Laptop",price:1000}] }
];
```

## Tasks

**`getDeliveredOrders()`** — deliveries with `status === "delivered"`

**`calculateDeliveryRevenue()`** — total value of **delivered** orders only

**`getPendingCustomers()`** — customers whose orders haven't arrived

## Expected output

With the two-delivery data above:

```javascript
[{ customer: 'Alex', status: 'delivered', items: [ { name: 'Phone', price: 500 } ] }]
500
["John"]
```

## Requirements

- No `for` loops
- Revenue counts **delivered only** — pending money isn't earned yet
- Items are nested, so revenue reaches through a level
- Think about how you define "pending"

## Hint

<details>
<summary>Show hint</summary>

```javascript
function getDeliveredOrders() {
  return deliveries.filter(d => d.status === "delivered");
}

function calculateDeliveryRevenue() {
  return getDeliveredOrders()
    .flatMap(d => d.items)
    .reduce((sum, item) => sum + item.price, 0);
}

function getPendingCustomers() {
  return deliveries
    .filter(d => d.status === "pending")
    .map(d => d.customer);
}
```

`calculateDeliveryRevenue` calling `getDeliveredOrders()` means the definition of
"delivered" lives in one place. Change it once, both stay correct.

Revenue is `500` — John's 1000 isn't counted, because it hasn't arrived. Counting
undelivered orders as revenue is the kind of mistake that makes a dashboard lie in
a direction management enjoys.

Note `getPendingCustomers` filters **for** `"pending"` rather than **against**
`"delivered"`. Same answer today; different answer the day someone adds
`"cancelled"`.

</details>
