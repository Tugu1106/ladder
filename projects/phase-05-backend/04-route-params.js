// DRILL 04 — Route Params (:id)
// How does /users/5 give you user #5? A route PARAM — a placeholder in the path.
// This is exactly how GitHub's /users/torvalds worked.
//
// GOAL:
//   GET /users        → the whole array
//   GET /users/:id    → just the ONE user with that id (or a "not found" message)
//
// RUN:  node 04-route-params.js
//   then try:  /users     /users/2     /users/999
//
// ---------------------------------------------------------------------------

import express from "express";

const app = express();
const PORT = 3000;

const users = [
  { id: 1, name: "Tugu" },
  { id: 2, name: "Ada" },
  { id: 3, name: "Linus" },
];

// TODO 1: GET "/users"  → res.json(users)


// TODO 2: GET "/users/:id"  → find and return the one user
//   const id = req.params.id;          // this is a STRING, e.g. "2"
//   const user = users.find(...);      // use your Phase-2 array skills!
//   ⚠️ id is a string ("2") but user.id is a number (2). Convert: Number(id)
//   if found  → res.json(user)
//   if not    → res.status(404).json({ error: "User not found" })


// TODO 3: app.listen(...)


// WHAT TO NOTICE:
// - ":id" is a placeholder — whatever's in that slot becomes req.params.id.
// - req.params values are ALWAYS strings. Compare carefully (Number(id) === user.id).
// - You just rebuilt the "get one specific thing" endpoint from the inside.
