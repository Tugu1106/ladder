// Exercise 14 — Dashboard Statistics
// Instructions: 14-dashboard-statistics.md
//
// Goal: { completedOrders: 2, completedRevenue: 400 }
//       Only completed orders count — the pending 200 is excluded from both.
//
//       Both questions share a filter, so filter ONCE and answer both from
//       the result. .length for the count, reduce() for the money.
//
//       If you get 600, the pending order slipped through.
//
// Expected output:
//   { completedOrders: 2, completedRevenue: 400 }

const orders = [
  { status: "completed", price: 100 },
  { status: "pending", price: 200 },
  { status: "completed", price: 300 }
];

// --- your code below ---
