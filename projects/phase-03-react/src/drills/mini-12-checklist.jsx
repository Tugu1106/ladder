// Mini 12 — Checklist (toggle done)
// Goal: a list of tasks; click one to toggle it done (strike-through).
// NEW important pattern: UPDATING an item inside array state (not add/delete).
//   To flip one item's `done`, map to a NEW array where the matching item is
//   changed and the rest are copied unchanged:
//     setTasks(tasks.map((t) =>
//       t.id === id ? { ...t, done: !t.done } : t
//     ));
//   (spread the item, flip one field — like Phase-5 DS "increase salaries".)
//   strike-through style: { textDecoration: task.done ? "line-through" : "none" }
// Build: tasks state = a few preset {id, text, done}; map to rows; click toggles.

import { useState } from "react";

function Drill() {
  // tasks state ({id, text, done}); map to rows; click a task -> toggle its done
}

export default Drill;
