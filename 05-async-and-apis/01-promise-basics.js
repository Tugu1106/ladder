// Drill 1 — Promise Basics
// A PROMISE = "a value that arrives LATER."
//
// Below is a promise that resolves (finishes) after 1 second with the value
// "Done!". Your job: read that value with .then() and print it.
//
//   promise.then((value) => console.log(value));
//
// Run:  node 01-promise-basics.js
// WATCH: "Waiting..." prints FIRST, then "Done!" a second later — the value
//        arrived LATER. That delay is the whole reason async exists.

const promise = new Promise((resolve) => {
  setTimeout(() => resolve("Done!"), 1000); // resolves after 1000ms
});

console.log("Waiting...");

// --- your code below: use .then() on `promise` to print the value ---
promise.then((value) => {
  console.log(value);
});
