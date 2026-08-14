// ✅ DONE — ran it, output correct.
// Exercise 19 — Print Every Item
// Instructions: 19-print-every-item.md
//
// Goal: print every name using a LOOP — not three console.log calls.
//       It must still work if a fourth name is added.
//
//       Either a classic `for` loop or `for...of` is fine. Try both.
//
// Expected output:
//   John
//   Jane
//   Bob

const names = ["John", "Jane", "Bob"];

// --- your code below ---
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
