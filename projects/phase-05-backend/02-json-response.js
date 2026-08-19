// DRILL 02 — Send JSON
// Real APIs don't send plain text — they send JSON (objects/arrays).
// This is the backend side of the `.json()` you used in Phase 4.
//
// GOAL: hit http://localhost:3000/me  and get back a JSON object.
//
// RUN:  node 02-json-response.js
//
// ---------------------------------------------------------------------------

import express from "express";

const app = express();
const PORT = 3000;
app.use(express.json());

// TODO 1: make a GET route at "/me" that sends back an object with res.json(...)
//   res.json({ name: "Tugu", learning: "backend", level: 5 })
//   → open the URL and you'll see real JSON, just like the APIs you called.

app.get("/me", (req, res) => {
  res.json({ name: "TUgu", learnig: "Backend", level: 5 });
});

// TODO 2: make a GET route at "/skills" that sends back an ARRAY with res.json(...)
//   res.json(["html", "css", "javascript", "react"])
//   → arrays are valid JSON too. This is what /users returned in Phase 4.

app.get("/skills", (req, res) => {
  res.json(["html", "css", "javascript"]);
});

// TODO 3: start the server (app.listen) with a console.log — same as drill 01.
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// WHAT TO NOTICE:
// - res.send(text) vs res.json(object). For APIs you almost always want res.json.
// - Express automatically turns your JS object/array into JSON text and sets the
//   right headers. You just hand it the data.
