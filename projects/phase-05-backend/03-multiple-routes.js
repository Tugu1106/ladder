// DRILL 03 — Multiple Routes
// A server is a switchboard: different URLs → different answers.
//
// GOAL: build 3 routes and visit each in the browser.
//   GET /            → a welcome message
//   GET /users       → an array of user objects
//   GET /posts       → an array of post objects
//
// RUN:  node 03-multiple-routes.js
//
// ---------------------------------------------------------------------------

import express from "express";

const app = express();
const PORT = 3000;
app.use(express.json());

// Some fake data to serve (pretend this is your "database" for now):
const users = [
  { id: 1, name: "Tugu" },
  { id: 2, name: "Ada" },
  { id: 3, name: "Linus" },
];

const posts = [
  { id: 1, title: "Hello backend" },
  { id: 2, title: "Express is fun" },
];

// TODO 1: GET "/"        → res.send a welcome message

app.get("/", (req, res) => {
  res.send("welcome");
});
// TODO 2: GET "/users"   → res.json(users)

app.get("/users", (req, res) => {
  res.json(users);
});
// TODO 3: GET "/posts"   → res.json(posts)
app.get("/posts", (req, res) => {
  res.json(posts);
});
// TODO 4: app.listen(...) with a console.log.
app.listen(PORT, () => {
  console.log("Your server is running");
});
// WHAT TO NOTICE:
// - Each route is independent — its own path, its own handler, its own answer.
// - You now have a mini API. Visit /users and /posts — real JSON endpoints you
//   built. A React app could fetch() these exactly like it fetched GitHub.
