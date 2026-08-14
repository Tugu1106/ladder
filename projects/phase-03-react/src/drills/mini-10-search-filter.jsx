// Mini 10 — Search Filter
// Goal: a list of items + a search box that filters them as you type.
//       (This is your Phase-1 Live Search — the React way.)
// NEW idea: filter the array DURING render, then map the FILTERED result.
//   const shown = fruits.filter((f) =>
//     f.toLowerCase().includes(search.toLowerCase())
//   );
//   ...then map `shown`, not the original array.
// Build: a search state (controlled input); filter fruits; map the filtered list.

import { useState } from "react";

const fruits = ["Apple", "Banana", "Orange", "Mango", "Grape", "Strawberry"];

function Drill() {
  // search state; filter fruits by search; map the filtered list (with key)
}

export default Drill;
