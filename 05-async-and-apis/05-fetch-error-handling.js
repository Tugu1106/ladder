// Drill 5 — Handle Failures (try / catch)
// The network can fail (no internet, bad URL, server down). Wrap the fetch so a
// failure is handled gracefully instead of crashing.
//
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Failed:", error.message);
//   }
//
// Goal: do a fetch inside try/catch. Then TEST the failure path: change the URL
//       to a broken one (e.g. "https://this-is-not-a-real-domain-xyz.com") and
//       run again — you should see your "Failed: ..." message, not a crash.
//
// Run:  node 05-fetch-error-handling.js

// --- your code below (async function with try/catch) ---
async function getData() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    if (response.status === 200) {
      const data = await response.json();
      console.log(data);
    } else {
      console.log("status is not ok");
    }
  } catch (error) {
    console.error("Error" + error.message);
  }
}

getData();
