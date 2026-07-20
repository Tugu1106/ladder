// ✅ DONE — ran it, output correct.
// Exercise 1 — Double Numbers
// Instructions: 01-double-numbers.md
//
// Goal: use map() to create [2,4,6,8]. Save it in a new variable and print it.
//       Do NOT modify `numbers` — print it afterwards to check.
//
// forEach() couldn't do this: it throws away whatever your callback returns.
// map() KEEPS those return values and collects them into a new array.
// That's the entire difference between the two.
//
//   const result = array.map(item => {
//     return /* something */;
//   });
//
// Forget the `return` and you get [undefined, undefined, ...] — the classic
// first map() bug. And you must capture the result: map() doesn't touch the
// original, so calling it on its own line accomplishes nothing.
//
// Expected output:
//   [ 2, 4, 6, 8 ]

const numbers = [1, 2, 3, 4];

// --- your code below ---
const doubled = numbers.map((number) => {
  return number * 2;
});
console.log(doubled);
