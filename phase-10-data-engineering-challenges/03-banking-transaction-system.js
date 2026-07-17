// Challenge 3 — Banking Transaction System ⭐⭐⭐⭐⭐
// Instructions: 03-banking-transaction-system.md
//
// THE INSIGHT: `balance: 1000` is the STARTING balance, not the current one.
// The current balance is 1000 plus everything that happened since.
//
// So reduce() here doesn't start at 0 — it starts at user.balance. Seeding
// with 0 gives you 300, the CHANGE rather than the balance. Both are real
// numbers a bank might want; only one was asked for.
//
// That's how real ledgers work: an opening figure plus an immutable list of
// transactions, with the balance DERIVED whenever you need it. Every
// transaction is auditable and nothing is lost. Systems that store a mutable
// balance can't answer "why is it this number?"
//
//   calculateBalance(user)   -> 1300   (1000 + 500 - 200)
//   findRichestUser()        -> Alex   (compare CALCULATED balances, not
//                                       the starting ones — with one user
//                                       you'd never notice the difference)
//   totalMoneyTransferred()  -> 200    (all withdrawals, across all users)

const users = [
  {
    name: "Alex",
    balance: 1000,
    transactions: [
      { type: "deposit", amount: 500 },
      { type: "withdraw", amount: 200 }
    ]
  }
];

function calculateBalance(user) {
  // seed from user.balance, not 0
}

function findRichestUser() {
  // compare calculateBalance(u), not u.balance
}

function totalMoneyTransferred() {
  // sum of all withdrawals
}

// console.log(calculateBalance(users[0]));   // 1300
// console.log(findRichestUser());            // "Alex"
// console.log(totalMoneyTransferred());      // 200
