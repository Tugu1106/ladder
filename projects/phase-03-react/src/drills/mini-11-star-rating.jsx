// Mini 11 — Star Rating
// Goal: 5 stars; click one to set the rating; stars up to it are "filled".
// NEW idea: map over a fixed count and STYLE each based on index vs state.
//   [1, 2, 3, 4, 5].map((star) => (
//     <span
//       key={star}
//       onClick={() => setRating(star)}
//       style={{ cursor: "pointer", color: star <= rating ? "gold" : "gray" }}
//     >
//       *
//     </span>
//   ))
// Build: rating state (0); render 5 clickable stars colored by (star <= rating).

import { useState } from "react";

function Drill() {
  // rating state; map [1..5] to clickable stars colored by comparison to rating
}

export default Drill;
