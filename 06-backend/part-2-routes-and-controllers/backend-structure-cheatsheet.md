# Structuring a Backend — Simple Cheatsheet

Your Notes API works — but it's **one big file**. Real apps split it up so each file
has **one job**. This is that split. No new *logic* — just *reorganizing* what you
already wrote.

## The problem with one file

Your `project-01-notes-api.js` mixes three different concerns in one place:
- **setup** (express, middleware, listen)
- **routing** (which URL → which handler)
- **logic** (find, push, filter, respond)

For 5 routes it's fine. For 50 routes across users, notes, posts, comments... it
becomes an unreadable 2000-line monster. So we separate the concerns into files.

## The three layers (you guessed this earlier!)

```
server.js         → SETUP. starts the app, plugs in routers, listens. THIN.
routes/           → the MENU. which method+path → which controller function. wiring only.
controllers/      → the LOGIC. the actual find/push/filter/respond. the real work.
```

| File | Job | Analogy |
| --- | --- | --- |
| `server.js` | boot the app, mount routers | the building's front desk |
| `routes/notes.routes.js` | map `/notes` URLs → functions | the menu (list of dishes) |
| `controllers/notes.controller.js` | do the actual work | the kitchen (cooking) |

## The new tool: `express.Router()`

A **Router** is a "mini-app" you build separately, then plug into the main app. It
lets a whole group of routes (all the `/notes` ones) live in their own file.

```js
// routes/notes.routes.js
import express from "express";
const router = express.Router();     // a mini-app just for notes

router.get("/", getAllNotes);        // wire path → controller function
router.post("/", createNote);

export default router;               // export the bundle
```

```js
// server.js
import notesRouter from "./routes/notes.routes.js";
app.use("/notes", notesRouter);      // "all /notes requests → handle in that router"
```

## ⚠️ The one gotcha: paths become RELATIVE

Once a router is mounted at `/notes`, the paths *inside* it are **relative to that**:

```js
app.use("/notes", notesRouter);   // mount point = /notes

// inside notes.routes.js:
router.get("/",    getAllNotes);  // → GET  /notes        (not "/notes")
router.get("/:id", getNote);      // → GET  /notes/:id
router.post("/",   createNote);   // → POST /notes
```

The `/notes` prefix is set **once** at mount time. Inside the router you write only
what comes *after* it. So `"/"` means "the /notes root," and `"/:id"` means "/notes/:id."
This trips everyone up once — don't repeat `/notes` inside the router.

## Controllers = your handlers, moved and named

A controller is just your handler function `(req, res) => {...}`, pulled out and
given a name so the router can reference it:

```js
// controllers/notes.controller.js
let notes = [];                      // the data lives here (for now)

export function getAllNotes(req, res) {
  res.json(notes);                   // ← the SAME logic from your one-file version
}

export function createNote(req, res) {
  const { title, body } = req.body;
  if (!title) return res.status(400).json({ error: "title required" });
  const newNote = { id: Date.now(), title, body: body || "" };
  notes.push(newNote);
  res.status(201).json(newNote);
}
// ...one export per endpoint
```

Nothing new inside — it's copy-paste from your working file. You're just **moving**
each handler's body into a named, exported function.

## The full flow (nothing changes for the user)

```
request: POST /notes
  → server.js: express.json() runs, then app.use("/notes", notesRouter) matches
     → notes.routes.js: router.post("/", createNote) matches
        → notes.controller.js: createNote(req, res) runs the logic
           → res.status(201).json(newNote)
```

Same request, same response — just split across 3 files, each doing one job.

## Why bother? (the payoff)

- **Find things fast:** "where's the create-note logic?" → `controllers/notes.controller.js`. Always.
- **server.js stays tiny:** glance at it, see every resource the app has (`/notes`, `/users`, ...).
- **Add a resource cleanly:** new `users.routes.js` + `users.controller.js`, one `app.use` line. Done.
- **Change logic without touching routing** (and vice versa).

## The mental model

```
server.js      = "boot + which routers exist"       (setup + wiring)
routes/*.js    = "which URL → which function"        (the map)
controllers/*  = "what each function actually does"  (the work)
```

**Data flows the same as always — request in, response out.** You've just given each
part of the journey its own room. Same house, organized closets.
