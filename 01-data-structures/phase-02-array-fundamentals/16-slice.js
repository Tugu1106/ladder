// ✅ DONE — the slice is correct.
//    But the task asked you to print BOTH arrays (original AND new) to prove
//    slice() didn't touch the original. You only printed the new one. Add:
//        console.log("original:", numbers);
//    and you'll see [1,2,3,4,5] survived — which is the whole lesson of slice.
// Exercise 16 — slice()
// Instructions: 16-slice.md
//
// Goal: create a NEW array containing 2, 3, 4 without changing the original.
//       Print both arrays, to prove the original survived.
//
// Note: slice(start, end) — the END is exclusive, so it stops BEFORE that index.
//       slice() does not touch the original, so you MUST capture what it returns.
//
// Expected output:
//   original: [ 1, 2, 3, 4, 5 ]
//   new: [ 2, 3, 4 ]

const numbers = [1, 2, 3, 4, 5];

// --- your code below ---
console.log(numbers.slice(1, 4));
