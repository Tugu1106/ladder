// DRILL 08 — Status Codes & Validation (polish)
// A good API doesn't just work — it tells the client HOW it went with status codes,
// and it rejects bad input instead of crashing.
//
// GOAL: a small "signup" endpoint that validates the body.
//   POST /signup
//     - no name given        → 400 Bad Request, { error: "name is required" }
//     - name too short (<2)  → 400 Bad Request, { error: "name too short" }
//     - valid                → 201 Created, the new user
//   GET /whoami/:id
//     - id not found         → 404 Not Found
//     - found                → 200 the user
//
// RUN:  node 08-status-and-errors.js
//
// ---------------------------------------------------------------------------

import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

let users = [{ id: 1, name: "Tugu" }];

// TODO 1: POST "/signup"
//   const name = req.body.name;
//   if (!name)            → res.status(400).json({ error: "name is required" })
//   if (name.length < 2)  → res.status(400).json({ error: "name too short" })
//   otherwise: create { id: Date.now(), name }, push, res.status(201).json(newUser)
//   ⚠️ after each early return, remember to `return` so code below doesn't also run
//      (sending two responses = crash). e.g.  return res.status(400).json(...)


// TODO 2: GET "/whoami/:id"
//   find by Number(req.params.id)
//   missing → res.status(404).json({ error: "not found" })
//   found   → res.json(user)   (200 is automatic)


// TODO 3: app.listen(...)


// WHAT TO NOTICE:
// - Status codes are how the frontend knows what happened. Remember Phase 4:
//   `if (!res.ok) throw...` — you were READING these codes. Now you SET them.
// - `return res.status(...)...` — the `return` matters. One response per request.
// - Validating input (checking req.body before trusting it) is a core backend job.
//   Never assume the client sent good data.
