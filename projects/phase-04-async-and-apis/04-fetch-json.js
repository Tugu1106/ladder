// Drill 4 — Read the Data (.json())
// The response from fetch is a WRAPPER — you pull the real data out with .json(),
// which is ALSO a promise, so you await it too. TWO awaits total.
//
//   const response = await fetch(url);      // 1. get the response
//   const data = await response.json();     // 2. read the JSON into a JS object
//   console.log(data);
//
// Goal: fetch the todo below, read its JSON, and print the data (a real object).
// URL:  https://jsonplaceholder.typicode.com/todos/1
//
// Expected output (a JS object):
//   { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
//
// Run:  node 04-fetch-json.js
// Once `data` is a JS object, you can read data.title, data.completed, etc. —
// it's just an object now, like everything in the DS course.

// --- your code below (async function + two awaits + print data) ---
async function helloWorld() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log(data);
}

helloWorld(); // ← call it!
