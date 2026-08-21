// Project 18 — Banking Analytics ⭐⭐
// Instructions: 18-banking-analytics.md
//
// Two functions you've now written several times. The repetition across
// Projects 16 and 18 is deliberate — sum and max over a list of records is
// such a common pair that it should cost you no thought by now.
//
// getRichestCustomer returns the NAME. Reduce to the whole account, then take
// .name at the end — accumulating the name alone would leave you nothing to
// compare balances against.
//
// (Real money code doesn't store balances as floats: 0.1 + 0.2 !== 0.3 in
// JavaScript, and rounding errors in a bank are unacceptable. Production
// systems store integer cents. Not needed here — but that's why.)
//
// Expected output:
//   7000
//   Alex

const accounts = [
  { name: "Alex", balance: 5000 },
  { name: "John", balance: 2000 }
];

function getTotalMoney() {
  // 5000 + 2000 = 7000
}

function getRichestCustomer() {
  // returns the name string
}

// console.log(getTotalMoney());         // 7000
// console.log(getRichestCustomer());    // "Alex"
