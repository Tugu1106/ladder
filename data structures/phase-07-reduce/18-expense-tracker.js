// ✅ DONE — output correct.
//    Naming note: the const is `total` and it holds an object with a `total`
//    key — so you write total.total. It works, but 'total.total' reads oddly.
//    Naming the const `summary` (holding { total: 35 }) would read cleaner.
//    Or the simpler route the .md mentions: sum plainly, then wrap: { total }.
// Exercise 18 — Expense Tracker
// Instructions: 18-expense-tracker.md
//
// Goal: { total: 35 } — an OBJECT with a named field, not a bare number.
//
//       Small distinction, real consequence. An object is EXTENSIBLE:
//       tomorrow you add `count` or `average` and every caller keeps working.
//       A bare number is a dead end. It's why real APIs return { data: [...] }.
//
//       Two ways: accumulate the object directly, or sum plainly and wrap at
//       the end. The second is simpler — don't force work into the reduce
//       that's clearer outside it.
//
//       { total } is shorthand for { total: total }.
//
// Expected output:
//   { total: 35 }

const expenses = [
  { title: "Food", amount: 20 },
  { title: "Transport", amount: 10 },
  { title: "Coffee", amount: 5 },
];

// --- your code below ---
const total = expenses.reduce(
  (total, expense) => {
    total.total += expense.amount;
    return total;
  },
  { total: 0 },
);
console.log(total);
