// Drill 14 — Controlled Input  (state + typing)
// Goal: a text box; whatever you type shows live below it.
//   const [text, setText] = useState("");
//   <input value={text} onChange={(e) => setText(e.target.value)} />
//   <p>You typed: {text}</p>
// e.target.value = the input's current text.
// This is your Phase-1 "Live Echo" — but the React way (state, not the DOM).

import { useState } from "react";

function Drill() {
  const [text, setText] = useState("");

  return (
    <>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <p>You typed: {text}</p>
    </>
  );
}

export default Drill;
