// ✅ DONE — both fixes in, output matches spec exactly.
//    Fixed: key is now `totalUsers` (plural), and activeAdults filters on
//    `user.active && user.age >= 18` — so it's correct by LOGIC now, not by
//    luck. An active 16-year-old would correctly be excluded.
//    (totalRevenue nested reduce was right all along: 300+50+300 = 650.)
//    Style-only: the inner reduce reuses the name `total`, shadowing the
//    outer one. Works fine; naming it `orderTotal` would read clearer.
// Exercise 20 — Final Boss: User Dashboard ⭐⭐⭐
// Instructions: 20-user-dashboard-boss.md
//
// Goal: { totalUsers: 3, activeAdults: ["Alex","Sarah"], totalRevenue: 650 }
//
// The most realistic thing you've built — an API response, and you're
// producing the dashboard from it. Three questions, three shapes of answer:
//
//   totalUsers   — a plain count, everyone included. Just .length.
//   activeAdults — age >= 18 AND active, then names.
//   totalRevenue — orders are NESTED inside each user, so reach through one
//                  level. EVERY order counts, including John's — even though
//                  he's neither active nor an adult.
//
// THE TRAP: two of the three filter; the third doesn't. It's tempting to
// compute revenue from activeAdults because it's sitting right there — and
// you'd silently lose John's 50 and report 600. Read each requirement alone.
//
// 100 + 200 + 50 + 300 = 650, not 600.
//
// Hint: flatMap() is map() plus one level of flattening. users.map(u => u.orders)
// gives [[...],[...],[...]] — an array of arrays, which reduce can't sum.
// flatMap() gives you one flat list of orders instead.

const users = [
  {
    name: "Alex",
    age: 25,
    active: true,
    orders: [{ price: 100 }, { price: 200 }],
  },
  { name: "John", age: 17, active: false, orders: [{ price: 50 }] },
  { name: "Sarah", age: 30, active: true, orders: [{ price: 300 }] },
];

// --- your code below ---
const activeAdults = users
  .filter((user) => user.active && user.age >= 18)
  .map((user) => user.name);

const totalRevenue = users.reduce(
  (total, user) =>
    (total += user.orders.reduce((total, order) => (total += order.price), 0)),
  0,
);

const dashboard = {
  totalUsers: users.length,
  activeAdults: activeAdults,
  totalRevenue: totalRevenue,
};

console.log(dashboard);
