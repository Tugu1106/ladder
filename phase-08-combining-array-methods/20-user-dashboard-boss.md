# Exercise 20 — Final Boss: User Dashboard ⭐⭐⭐

**Trains:** everything · nested data · three stats from one API payload
**Difficulty:** ⭐⭐⭐ Boss

## What you're solving

The phase boss, and the most realistic thing you've built. This is an API
response, and you're producing the dashboard from it.

Three questions, three different shapes of answer:

- **totalUsers** — a plain count, everyone included.
- **activeAdults** — a compound filter, then names.
- **totalRevenue** — the hard one. Orders are **nested inside** each user, so you
  must reach through one level to sum them. Every order counts, including John's,
  even though he's neither active nor an adult.

That last point is the trap. Two of the three stats filter; the third doesn't.
It's tempting to compute everything from `activeAdults` because it's sitting
there — and you'd silently lose John's 50 and report 600. Read each requirement
on its own.

## Starter data

```javascript
const users = [
  { name:"Alex", age:25, active:true, orders:[{price:100},{price:200}] },
  { name:"John", age:17, active:false, orders:[{price:50}] },
  { name:"Sarah", age:30, active:true, orders:[{price:300}] }
];
```

Create:

```javascript
{ totalUsers:3, activeAdults:["Alex","Sarah"], totalRevenue:650 }
```

Rules: active adult = age >= 18 AND active true; revenue = sum every order price.

## Expected output

```javascript
{ totalUsers: 3, activeAdults: [ 'Alex', 'Sarah' ], totalRevenue: 650 }
```

## Toolbox

- 🎯 **Focus:** three differently-shaped stats from nested API data
- ✅ **Allowed:** `.length` · `.filter()` · `.map()` · `.flatMap()` · `.reduce()` ·
  `&&` · a result object · `console.log()`
- ❌ **Not allowed:** loops — read each requirement on its own; two stats filter,
  `totalRevenue` does not, so it's 650 (John's order counts), not 600.

## Requirements

- `totalUsers` counts everyone: `3`
- `activeAdults` needs both conditions — John fails on both, Sarah's inactive... check the data
- `totalRevenue` is **every** user's orders: 100+200+50+300 = `650`
- No loops
- One object out

## Hint

<details>
<summary>Show hint</summary>

Check the data before coding. Alex: 25, active → in. John: 17, inactive → out.
Sarah: 30, active → in. So `["Alex","Sarah"]`.

```javascript
const dashboard = {
  totalUsers: users.length,

  activeAdults: users
    .filter(u => u.age >= 18 && u.active)
    .map(u => u.name),

  totalRevenue: users
    .flatMap(u => u.orders)
    .reduce((sum, order) => sum + order.price, 0)
};
```

`totalUsers` is just `.length` — no filtering.

`flatMap()` is `map()` followed by one level of flattening. `users.map(u => u.orders)`
gives `[[100,200],[50],[300]]` — an array of arrays, which `reduce()` can't sum.
`flatMap()` gives you one flat list of orders instead.

The nested-reduce version from Phase 7's Exercise 20 works identically:

```javascript
users.reduce((total, user) =>
  total + user.orders.reduce((s, o) => s + o.price, 0), 0)
```

Both correct. `flatMap()` reads better.

**650, not 600.** John's order counts even though John doesn't.

</details>
