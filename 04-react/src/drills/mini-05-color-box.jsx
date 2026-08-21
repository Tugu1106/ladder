// Mini 05 — Color Box
// Goal: buttons that change a box's background color.
// NEW idea: STATE drives an inline STYLE.
//   const [color, setColor] = useState("white");
//   <div style={{ background: color, width: 150, height: 150 }} />
//   <button onClick={() => setColor("red")}>Red</button>  (etc.)
// Build: a color state, a box whose background = color, 3-4 color buttons.
// Bonus: a text input to type any color name or hex.

import { useState } from "react";

function Drill() {
  const [color, setColor] = useState("white");

  return (
    <>
      <div
        style={{
          background: color,
          width: 150,
          height: 150,
          border: "2px solid yellow",
        }}
      />
      <button onClick={() => setColor("red")}>red</button>
      <button onClick={() => setColor("green")}>green</button>
      <button onClick={() => setColor("blue")}>blue</button>
    </>
  );
}

export default Drill;
