// Challenge 8 — Delivery Tracking System ⭐⭐⭐⭐⭐
// Instructions: 08-delivery-tracking-system.md
//
// ⚠️  A second delivery is added below so the filters actually do something.
//
// Deliveries with a status and nested items — every order-tracking backend.
//
//   getDeliveredOrders()        -> status === "delivered"
//   calculateDeliveryRevenue()  -> 500, DELIVERED ONLY. Pending money isn't
//                                  earned yet. Counting undelivered orders as
//                                  revenue makes a dashboard lie in a
//                                  direction management enjoys.
//   getPendingCustomers()       -> ["John"]
//
// THE INTERESTING PART is getPendingCustomers. "Pending" means
// status !== "delivered" — but should it? What about "cancelled", "failed",
// "returned"? Negating one status quietly lumps every other state into
// "pending", including ones that will never arrive.
//
// That's a real bug pattern: statuses GROW. Someone adds "cancelled" a year
// later and your !== "delivered" check silently starts reporting cancelled
// orders as pending. Filter FOR what you mean, not AGAINST what you don't.
//
// With two statuses you can't tell the difference. That's exactly when the
// habit should form.
//
// Have calculateDeliveryRevenue call getDeliveredOrders() — then "delivered"
// is defined in one place.

const deliveries = [
  { customer: "Alex", status: "delivered", items: [{ name: "Phone", price: 500 }] },
  { customer: "John", status: "pending", items: [{ name: "Laptop", price: 1000 }] }
];

function getDeliveredOrders() {
  //
}

function calculateDeliveryRevenue() {
  // delivered only -> 500
}

function getPendingCustomers() {
  //
}

// console.log(getDeliveredOrders());
// console.log(calculateDeliveryRevenue());   // 500
// console.log(getPendingCustomers());        // ["John"]
