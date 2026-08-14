// DRILL 05 — Query Params (?q=...)
// The stuff after "?" in a URL = options/filters. Read with req.query.
//
// GOAL: a search endpoint that filters the users by name.
//   GET /search?q=a   → all users whose name contains "a"
//   GET /search       → (no q) → return all users, or ask for a query
//
// RUN:  node 05-query-params.js
//   then try:  /search?q=a     /search?q=tug     /search
//
// ---------------------------------------------------------------------------

import express from "express";

const app = express();
const PORT = 3000;

const users = [
  { id: 1, name: "Tugu" },
  { id: 2, name: "Ada" },
  { id: 3, name: "Linus" },
  { id: 4, name: "Grace" },
];

// TODO 1: GET "/search"
//   const q = req.query.q;             // /search?q=a  →  q = "a"
//   if there's no q → res.json(users)  (or a helpful message)
//   else → filter users whose name includes q (case-insensitive is nicer:
//          name.toLowerCase().includes(q.toLowerCase()) )  → res.json(result)
//   (this is just Phase-2 .filter() — the new part is reading req.query)


// TODO 2: app.listen(...)


// WHAT TO NOTICE:
// - Route param (:id) = WHICH item. Query param (?q=) = HOW to filter/search.
// - req.query.q is a string (or undefined if not provided — handle that).
// - This is literally how a search bar's backend works.
