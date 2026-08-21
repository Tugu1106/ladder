// DRILL 06 — POST & Request Body (creating data)
// So far you've only READ (GET). Now you CREATE (POST) — the client sends data,
// you add it. The data arrives in req.body.
//
// GOAL:
//   GET  /users        → the current list
//   POST /users        → add a new user from the JSON body, return it
//
// RUN:  node 06-post-and-body.js
//   GET is easy (browser). To POST, use the terminal:
//     curl -X POST http://localhost:3000/users \
//          -H "Content-Type: application/json" \
//          -d '{"name":"Grace"}'
//   (or a VS Code extension like Thunder Client / REST Client)
//
// ---------------------------------------------------------------------------

import express from "express";

const app = express();
const PORT = 3000;
app.use(express.json());

// ⚠️ THE #1 BEGINNER BUG: without this line, req.body is undefined on every POST.
// TODO 0: enable JSON body parsing — add this line right here:
//   app.use(express.json());

// A mutable array acts as our "database" (resets when the server restarts):
let users = [
  { id: 1, name: "Tugu" },
  { id: 2, name: "Ada" },
];

// TODO 1: GET "/users"  → res.json(users)

app.get("/users", (req, res) => {
  res.json(users);
});

// TODO 2: POST "/users"
//   const newUser = req.body;               // e.g. { name: "Grace" }
//   give it an id (simple way: Date.now(), or users.length + 1)
//   push it into users
//   res.status(201).json(newUser)           // 201 = Created
app.post("/users", (req, res) => {
  const newUser = { id: Date.now(), ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});
// TODO 3: app.listen(...)
app.listen(PORT, () => {
  console.log("server is running");
});
// WHAT TO NOTICE:
// - POST sends data in the BODY (not the URL). You read it with req.body.
// - express.json() is what turns that incoming JSON into a real object. No line,
//   no req.body. This trips up EVERYONE once — now you'll never forget.
// - Add a user via POST, then GET /users → it's there. You just wrote data.
//   (It vanishes on restart because it's only in memory. Databases fix that — later.)
