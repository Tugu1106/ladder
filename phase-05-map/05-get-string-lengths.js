// ✅ DONE — output correct.
//    Naming note: you called it `length` (singular), but it holds an ARRAY of
//    lengths — so `lengths` (plural) reads truer. Plural names for arrays is a
//    tiny habit that makes code self-explaining: `lengths.map(...)` tells you
//    it's many, `length` suggests one number.
// Exercise 5 — Get String Lengths
// Instructions: 05-get-string-lengths.md
//
// Goal: create [5,6,3] — the length of each word.
//
// The important lesson: the OUTPUT TYPE doesn't have to match the input.
// Strings go in, numbers come out. map() only guarantees the array LENGTH
// stays the same; what's in the slots is up to your callback.
//
// Expected output:
//   [ 5, 6, 3 ]

const words = ["apple", "banana", "cat"];

// --- your code below ---
const length = words.map((word) => word.length);
console.log(length);
