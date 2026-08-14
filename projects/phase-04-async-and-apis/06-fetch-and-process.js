// Drill 6 — Fetch a List + Process It  (your DS skills return!)
// This URL returns an ARRAY of user objects. Fetch it, then use the array
// methods you already know (map / filter) on the result.
//
// URL:  https://jsonplaceholder.typicode.com/users   (an array of ~10 users)
//
// Goal (inside an async function, with try/catch):
//   1. fetch the users and read the JSON (an array)
//   2. print how many users there are        -> users.length
//   3. print just their names                -> users.map((u) => u.name)
//   4. print names of users whose company... -> filter, your choice
//
// Run:  node 06-fetch-and-process.js
//
// >>> THE POINT: once the data is in, it's just an array of objects. Everything
//     you learned in the data-structures course (map, filter, reduce) works on
//     real API data exactly the same. Getting the data in was the only new part.

// --- your code below ---
async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  console.log(data.map((u) => u.name));
}

getData();
