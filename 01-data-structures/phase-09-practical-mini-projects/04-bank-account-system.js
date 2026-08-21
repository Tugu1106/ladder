// Project 4 — Bank Account System
// Instructions: 04-bank-account-system.md
//
// The first time the OPERATION depends on the data: deposits add,
// withdrawals SUBTRACT. So the callback branches on `type` and picks its
// arithmetic. Every earlier reduce did the same thing to every item.
//
// `amount` is always positive — the TYPE decides the sign. Adding everything
// blindly gives 1800.
//
// This is how ledgers really work: you don't store a balance, you store the
// transactions and derive it. That's the audit trail.
//
// Check: +1000 - 300 + 500 = 1200
//
// Expected output:
//   1200

const transactions = [
  { type: "deposit", amount: 1000 },
  { type: "withdraw", amount: 300 },
  { type: "deposit", amount: 500 },
];

function calculateBalance() {
  return transactions.reduce((balance, trans) => {
    if (trans.type === "deposit") {
      return (balance += trans.amount);
    } else {
      return (balance -= trans.amount);
    }
  }, 0);
}

console.log(calculateBalance()); // 1200
