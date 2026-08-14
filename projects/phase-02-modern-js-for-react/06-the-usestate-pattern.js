// ✅ DONE — correct.
// Exercise 6 — Destructure a Returned Pair  (the useState shape)
// Phase 2: Modern JS for React
//
// Goal: minMax(numbers) returns a two-item array [min, max]. Destructure the
//       returned pair into two named variables and print them.
//
//   const [lowest, highest] = minMax(scores);
//
// >>> This is the SHAPE of React's useState, which returns a pair you destructure:
//        const [count, setCount] = useState(0);
//     Same move exactly: array-destructure a returned pair. That's all the
//     weird-looking useState syntax is.
//
// Expected output:
//   3
//   99

function minMax(numbers) {
  return [Math.min(...numbers), Math.max(...numbers)];
}

const scores = [42, 3, 99, 17];

// --- your code below ---
const [lowest, highest] = minMax(scores);

console.log(lowest);
console.log(highest);
