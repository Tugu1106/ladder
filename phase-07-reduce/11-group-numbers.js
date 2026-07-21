// ✅ DONE — object accumulator, perfect.
//    You created the { even: [], odd: [] } initial value, pushed into the
//    right array, and returned the accumulator every pass. This is where most
//    people forget the return and get 'cannot read property of undefined'.
// Exercise 11 — Group Numbers
// Instructions: 11-group-numbers.md
//
// Goal: { even: [2,4,6], odd: [1,3,5] }
//
// THE exercise where reduce() stops being a fancy sum and becomes something
// map() and filter() genuinely cannot do.
//
// The accumulator is an OBJECT. It starts as { even: [], odd: [] } and each
// pass pushes into one of its arrays. Neither map() (same length out) nor
// filter() (a subset) can produce this. Only reduce() can collapse a list
// into an arbitrary structure of your choosing.
//
// THE MECHANICAL CATCH: you must `return group` at the end of every pass.
// push() returns a NUMBER, not the object — so `=> group[key].push(n)` hands
// the next pass a number and everything falls apart.
//
// The initial value matters twice: it's the shape you're building, and it
// guarantees both keys exist so .push() never hits undefined.
//
// Expected output:
//   { even: [ 2, 4, 6 ], odd: [ 1, 3, 5 ] }

const numbers = [1, 2, 3, 4, 5, 6];

// --- your code below ---
const grouped = numbers.reduce(
  (grouped, number) => {
    if (number % 2 === 0) {
      grouped.even.push(number);
    } else {
      grouped.odd.push(number);
    }
    return grouped;
  },
  { even: [], odd: [] },
);

console.log(grouped);
