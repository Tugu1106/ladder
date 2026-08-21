# Phase 5 — Part 2: Structuring a Backend

You built the Notes API in **one file** and it works. Now you'll **refactor** it into
the clean multi-file structure real apps use — the split you *intuited* yourself a
while back (routes vs controllers vs server).

**Read in this order first:**
1. [../what-is-structuring-a-backend.md](../what-is-structuring-a-backend.md) — the big
   picture: what it is, why it matters, how it connects to what you already know.
2. [../backend-structure-cheatsheet.md](../backend-structure-cheatsheet.md) — the syntax
   (Router, controllers, relative paths, the flow).

## The target structure (already scaffolded for you)

```
notes-api-structured/
├─ server.js                        ← boot + mount router + listen (THIN)
├─ routes/
│   └─ notes.routes.js              ← path → controller function (WIRING)
└─ controllers/
    └─ notes.controller.js          ← the actual logic + the data (WORK)
```

Each file has TODO hints. You fill them by **moving** your working code — no new
logic, just reorganizing.

## The key idea

> Same code, three rooms: **server boots it, routes map it, controllers do it.**

Nothing about the *behavior* changes — the API responds exactly as before. You're
only splitting the one file into three, each with one job.

## Do it in this order (each step is small)

1. **Controllers first** (`controllers/notes.controller.js`)
   - Move your `let notes = []` here.
   - Turn each handler into a **named, exported** function:
     `app.post("/notes", (req,res)=>{...})` → `export function createNote(req, res) {...}`
   - The `(req, res) => {...}` body is *identical* — just paste it in.
   - Do all 5: `getAllNotes, getNote, createNote, updateNote, deleteNote`.

2. **Routes next** (`routes/notes.routes.js`)
   - `import` your 5 controller functions.
   - Wire each: `router.get("/", getAllNotes)`, `router.get("/:id", getNote)`, etc.
   - ⚠️ Paths are **relative** — `"/"` = /notes, `"/:id"` = /notes/:id. Don't write `/notes` here.
   - `export default router`.

3. **Server last** (`server.js`)
   - `import notesRouter from "./routes/notes.routes.js"`.
   - `app.use("/notes", notesRouter)` — the one place `/notes` is written.

## Run & test

```
cd notes-api-structured
node server.js
```
Then hit the **same endpoints** in Postman (`/notes`, `/notes/:id`, ...). If it
behaves exactly like your one-file version — **the refactor is correct.** Same
outside, cleaner inside.

## Why this matters

- **`notes` data lives in the controller** → when you add a real database (Phase 5b),
  *only the controller changes*. Routes and server never move. That's the power of
  separating layers.
- **server.js shows the whole app** at a glance — every resource, one line each.
- Adding `users` later = `users.routes.js` + `users.controller.js` + one `app.use`. Clean.

## Definition of done

All 5 endpoints work through the 3-file structure exactly as they did in one file.
Say **"review"** after each file (or when it's all wired) and I'll check it.

Then → **Phase 5b: a real database** (your data finally survives a restart). 🚀
