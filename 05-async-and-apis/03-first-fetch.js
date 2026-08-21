// Drill 3 — Your First API Call
// fetch(url) calls an API and returns a PROMISE, so you `await` it.
// This URL returns one fake "todo" object from a free practice API.
//
// Goal: fetch the URL, then print response.status (200 means success).
//
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   console.log(response.status);
//
// NOTE: `response` is NOT the data yet — it's a wrapper describing the reply.
//       (Drill 4 reads the actual data out of it.)
//
// Run:  node 03-first-fetch.js   (needs internet)
// TIP:  wrap it in an async function (await needs async), then call the function.

// --- your code below ---
async function helloWorld() {
  const value = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(value.status);
}

helloWorld(); // ← call it!
