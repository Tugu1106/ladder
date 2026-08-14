// ✅ DONE — ran it, output correct.
// Exercise 1 — Print Every Number
// Instructions: 01-print-every-number.md
//
// Goal: print every number using forEach() — no for loop, no counter, no .length.
//
// Your first array method that takes a FUNCTION. You hand it a function;
// it calls that function once per item, passing the item in. The function
// you hand over is called a CALLBACK — you don't call it, forEach calls it
// back for you.
//
//   array.forEach(item => {
//     // ...
//   });
//
// Expected output:
//   10
//   20
//   30
//   40

const numbers = [10, 20, 30, 40];

// --- your code below ---
numbers.forEach((number) => {
  console.log(number);
});
