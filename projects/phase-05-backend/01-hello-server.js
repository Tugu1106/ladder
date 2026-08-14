// DRILL 01 — Hello Server
// Your first backend: a program that starts, listens, and answers.
//
// GOAL: run this file, then open http://localhost:3000/  in your browser
//       and see your server's answer.
//
// RUN:  node 01-hello-server.js      (then visit the URL; Ctrl+C to stop)
//
// ---------------------------------------------------------------------------
// The skeleton is here. Fill in the 3 TODOs.

import express from "express";

const app = express();
const PORT = 3000;

// TODO 1: make a GET route at "/"
//   app.get("/", (req, res) => { ... })
//   inside, send a response with:  res.send("Hello from my first server!")


// TODO 2: start the server listening on PORT.
//   app.listen(PORT, () => { ... })
//   inside the callback, console.log a message like:
//   `Server running at http://localhost:${PORT}`


// WHAT TO NOTICE:
// - The program does NOT exit — it stays alive, waiting. That's a server.
// - You visited the URL in a browser = you sent a GET request. Your route answered.
// - Try changing the message and refreshing — you must stop (Ctrl+C) and re-run
//   for changes to show. (We'll add auto-restart later.)
