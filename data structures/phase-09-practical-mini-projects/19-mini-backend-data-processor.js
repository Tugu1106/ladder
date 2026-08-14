// Project 19 — Mini Backend Data Processor ⭐⭐⭐
// Instructions: 19-mini-backend-data-processor.md
//
// Pretend this arrived over the network. That's what "backend data processing"
// means, stripped of ceremony: filter to what counts, compute, return a named
// structure.
//
// Only COMPLETED orders count — John's pending 200 is excluded from BOTH
// numbers. Filter once, use it twice.
//
// Revenue is 100. If you get 300, the pending order slipped through — a bug
// that would overstate revenue by 3x and take a while to notice, because the
// number looks plausible.
//
// Expected output:
//   { completedOrders: 1, revenue: 100 }

const orders = [
  { user: "Alex", status: "completed", amount: 100 },
  { user: "John", status: "pending", amount: 200 }
];

function generateReport() {
  // returns { completedOrders, revenue }
}

// console.log(generateReport());   // { completedOrders: 1, revenue: 100 }
