// Drill 15 — Array State  (add to a list)
// Goal: an input + an Add button; each add puts the text into a list below.
//   const [items, setItems] = useState([]);
//   const [text, setText] = useState("");
//   add:  setItems([...items, text])   <-- SPREAD: make a NEW array, never push
//   show items with .map (+ key)
// Spread is from your DS course. In React you build a NEW array; you never
// mutate the old one. That's how React notices the change.

import { useState } from "react";

function Drill() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setItems([...items, text]);
          setText("");
        }}
      >
        Add
      </button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default Drill;
