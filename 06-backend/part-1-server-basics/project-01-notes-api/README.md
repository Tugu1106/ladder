# PROJECT 1 — Notes API (build it from scratch)

Your first real project of Phase 5. No template, no TODOs — **you write the whole
file yourself**, from an empty `project-01-notes-api.js`. Everything you need is in
the 8 drills you just finished. This is those pieces, assembled into one clean API.

## What you're building

A REST API for **notes**. A note looks like:
```json
{ "id": 1, "title": "Buy milk", "body": "2 liters, oat" }
```
(Two fields this time — `title` and `body` — not just `name`. Slightly richer than the drills.)

## The endpoints (full CRUD + validation)

| Method | Path | Does | Success | Errors |
| --- | --- | --- | --- | --- |
| GET | `/notes` | list all notes | 200 + array | — |
| GET | `/notes/:id` | get one note | 200 + note | 404 if missing |
| POST | `/notes` | create a note | 201 + new note | 400 if no title |
| PUT | `/notes/:id` | update a note | 200 + updated | 404 if missing, 400 if no title |
| DELETE | `/notes/:id` | delete a note | 200 + `{ deleted: true }` | 404 if missing |

## Rules (your validation)

- **title is required.** On POST and PUT, if `req.body.title` is missing/empty →
  `400 { error: "title is required" }`.
- **body is optional.** If not sent, default it to an empty string `""`.
- Server owns the `id` (use `Date.now()` or a counter). The client never sends it.

## Remember your skeleton

Every single-note route (`GET /notes/:id`, `PUT`, `DELETE`) is:
```
find → if missing return 404 → do the thing → respond
```
And every create/update guards input first:
```
if (!title) return res.status(400)...   // guard clause + return
```

## How to start

1. Create an empty file: **`project-01-notes-api.js`** (in this folder — express is
   already installed here).
2. Set up the skeleton from memory: `import express`, `const app`, `express.json()`,
   a `let notes = [...]` starter array, your routes, `app.listen`.
3. Build the endpoints one at a time — run and test each in **Postman** (we'll set it
   up together) before moving to the next. GET first, then POST, then the rest.
4. Point `App.jsx`? No — this is backend only. Test with Postman/Thunder Client.

## Definition of done

All 6 endpoints work, validation fires correctly, and you can run this full flow in
Postman without a crash:
```
GET /notes            → starter notes
POST /notes           → create "Buy milk"      (201)
POST /notes  {}       → 400 title is required
GET /notes/<id>       → the note you made
PUT /notes/<id>       → change its title        (200)
DELETE /notes/<id>    → { deleted: true }        (200)
GET /notes/<id>       → 404 (it's gone)
```

## After it works

Once it's running clean, we do two things:
1. **Postman properly** — save all 6 requests as a "collection" you fire with one click.
2. **The refactor you asked about** — split this one file into `routes/` and
   `controllers/` by hand, so you *feel* why real apps separate them.

Build it from scratch. Lean on the drills. Say **"review"** whenever you want eyes on
it. This is you writing a real API with no scaffolding — the moment it clicks that you
own this. 🚀
