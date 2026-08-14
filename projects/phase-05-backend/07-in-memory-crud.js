// DRILL 07 — Full CRUD (the big one)
// Put it all together: Create, Read, Update, Delete on one resource.
// This is the shape of EVERY basic REST API.
//
// GOAL — five endpoints on "items":
//   GET    /items        → list all
//   GET    /items/:id    → get one (404 if missing)
//   POST   /items        → create one (from req.body)
//   PUT    /items/:id    → update one (404 if missing)
//   DELETE /items/:id    → delete one (404 if missing)
//
// RUN:  node 07-in-memory-crud.js
//   Test GET in the browser; POST/PUT/DELETE with curl or Thunder Client.
//
// ---------------------------------------------------------------------------

import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());   // remember why this is here!

let items = [
  { id: 1, name: "Notebook" },
  { id: 2, name: "Pen" },
];

// TODO 1: GET "/items"        → res.json(items)

// TODO 2: GET "/items/:id"    → find by Number(req.params.id)
//         found → res.json(item) ; missing → res.status(404).json({error:"..."})

// TODO 3: POST "/items"       → make { id: <new>, name: req.body.name },
//         push it, res.status(201).json(newItem)

// TODO 4: PUT "/items/:id"    → find the item; if missing → 404.
//         if found, update its fields from req.body (e.g. item.name = req.body.name),
//         then res.json(item)

// TODO 5: DELETE "/items/:id" → filter it out of the array (items = items.filter(...)),
//         then res.json({ deleted: true })  (or 404 if it wasn't there)


// TODO 6: app.listen(...)


// WHAT TO NOTICE:
// - This is a complete REST API. Every CRUD app (todo lists, blogs, shops) is this
//   pattern, just with more fields and real data.
// - GET/POST/PUT/DELETE map exactly to Read/Create/Update/Delete.
// - Notice how much is just array methods: find, push, filter, and reassigning.
//   The Express part is thin; the logic is JavaScript you already own.
