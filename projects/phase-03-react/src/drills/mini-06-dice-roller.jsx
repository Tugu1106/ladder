// Mini 06 — Dice Roller
// Goal: a button that "rolls" and shows a random number 1-6.
// NEW idea: Math.random() for randomness.
//   Math.floor(Math.random() * 6) + 1   -> a whole number from 1 to 6
// Build: a roll state, show it big, a Roll button that sets a new random 1-6.
// Bonus: keep a history array of past rolls (spread into an array).

import { useState } from "react";

function Drill() {
  const [number, setNumber] = useState();

  return (
    <div className="testClass">
      <div style={{ width: 150, height: 150, border: "1px solid black" }}>
        {number}
      </div>
      <button onClick={() => setNumber(Math.floor(Math.random() * 6) + 1)}>
        ROLL
      </button>
    </div>
  );
}

export default Drill;
