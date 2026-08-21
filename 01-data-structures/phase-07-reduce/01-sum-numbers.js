// ✅ DONE — ran it, output correct.
// Exercise 1 — Sum Numbers
// Instructions: 01-sum-numbers.md
//
// Goal: calculate 15 with reduce(). No loops, no forEach().
//
// reduce() has a reputation for being confusing. It isn't — you've already
// written it by hand three times (Phase 2 Ex 20, Phase 3 Ex 12, Phase 4 Ex 3).
// Every one was "declare a total, add to it each pass, read it at the end".
// The only change is that the variable now lives INSIDE the method.
//
// Line for line:
//
//   let total = 0;                   ->  the 0 at the end of reduce()
//   numbers.forEach(n => {
//     total = total + n;             ->  (sum, n) => sum + n
//   });
//
//   const total = array.reduce((sum, item) => sum + item, 0);
//                               ^accumulator  ^current      ^initial value
//
// Whatever your callback RETURNS becomes the accumulator for the next item.
// That's the one rule, and forgetting to return is the one bug.
//
// Trace it: 0+1=1, 1+2=3, 3+3=6, 6+4=10, 10+5=15
//
// Expected output:
//   15

const numbers = [1, 2, 3, 4, 5];

// --- your code below ---
const sum = numbers.reduce((sum, number) => sum + number, 0);
console.log(sum);
