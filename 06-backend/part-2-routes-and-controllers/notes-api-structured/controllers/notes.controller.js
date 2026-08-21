// CONTROLLERS — the actual logic. One exported function per endpoint.
// This is where you MOVE the bodies of your handlers from project-01-notes-api.js.
// Nothing new — same find/push/filter/respond code, just named and exported.
//
// The data lives here for now (later, Phase 5b, this becomes a real database).
//
// ---------------------------------------------------------------------------

let notes = [];   // the "database" for now

// Each controller is your old handler, turned into a NAMED, EXPORTED function.
// The (req, res) => {...} body is IDENTICAL to what you already wrote — just
// pasted inside these named functions.

// TODO: write and export these 5 functions (move the logic from your one-file version):

// export function getAllNotes(req, res) {
//   ...res.json(notes)...
// }

// export function getNote(req, res) {
//   ...find by Number(req.params.id), 404 if missing, else res.json(note)...
// }

// export function createNote(req, res) {
//   ...destructure title/body, validate, build newNote, push, 201...
// }

// export function updateNote(req, res) {
//   ...find, 404, validate, mutate note.title/body, res.json(note)...
// }

// export function deleteNote(req, res) {
//   ...find, 404, notes = notes.filter(...), res.json({ deleted: true, note })...
// }

// WHAT TO NOTICE:
// - The logic is EXACTLY your project-01 code. You're only moving it into named,
//   exported functions so the router can reference them by name.
// - `notes` lives here now — the controller owns the data. When you switch to a
//   database later, ONLY this file changes; routes and server stay untouched.
// - `export function name(req, res) {}` — the router imports these names.
