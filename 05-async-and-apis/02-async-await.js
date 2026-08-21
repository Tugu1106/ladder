// Drill 2 — async / await  (the modern way)
// Same promise as Drill 1, but read it with async/await instead of .then().
//
//   async function run() {
//     const value = await promise;   // pause here until it resolves
//     console.log(value);            // then use the value
//   }
//   run();
//
// RULES: `await` pauses until the promise finishes, then gives you the value.
//        `await` only works INSIDE an `async` function.
//
// Run:  node 02-async-await.js
// Expected: "Waiting..." then (1s later) "Done!"  — same result as Drill 1.

const promise = new Promise((resolve) => {
  setTimeout(() => resolve("Done!"), 1000);
});

console.log("Waiting...");

// --- your code below: write an async function that awaits `promise` & prints it, then call it ---

async function run() {
  const value = await promise;
  console.log(value);
}

run();
