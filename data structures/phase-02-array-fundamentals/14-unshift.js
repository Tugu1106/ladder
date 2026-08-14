// ✅ DONE — ran it, output correct.
// Exercise 14 — unshift()
// Instructions: 14-unshift.md
//
// Goal: add "first" to the BEGINNING, then print the array.
//
//   |        | add        | remove    |
//   | front  | unshift()  | shift()   |
//   | back   | push()     | pop()     |
//
// Expected output:
//   [ 'first', 'b', 'c' ]

let letters = ["b", "c"];

// --- your code below ---
letters.unshift("first");
console.log(letters);
