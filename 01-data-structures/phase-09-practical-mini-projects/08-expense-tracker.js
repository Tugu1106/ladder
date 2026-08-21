// Project 8 — Expense Tracker
// Instructions: 08-expense-tracker.md
//
// groupExpenses is Phase 7's tally with a twist: you're not counting
// occurrences, you're SUMMING amounts per key. { food: 50 } isn't "two food
// expenses" — it's "50 spent on food". So the accumulator adds `amount`,
// not 1. Get { food: 2 } and you counted instead of summing.
//
// Sanity check that pays off: the grouped values must add up to the total.
// 50 + 10 = 60 ✓
//
// Expected output:
//   60
//   { food: 50, transport: 10 }

const expenses = [
  { category: "food", amount: 20 },
  { category: "transport", amount: 10 },
  { category: "food", amount: 30 },
];

function getTotalExpense() {
  return expenses.reduce((total, expense) => (total += expense.amount), 0);
}

function groupExpenses() {
  return expenses.reduce((grouped, expense) => {
    if (grouped[expense.category] === undefined) {
      grouped[expense.category] = expense.amount;
    } else {
      grouped[expense.category] += expense.amount;
    }

    return grouped;
  }, {});
}

console.log(getTotalExpense()); // 60
console.log(groupExpenses()); // { food: 50, transport: 10 }
