// Lifting State Drill 2 — Child CHANGES the parent's state
// NEW idea: pass the SETTER (or a handler) down, so a child can change the
//           parent's state. State lives in the parent; the child triggers it.
//   Parent owns count. A <PlusButton onAdd={() => setCount(count + 1)} />
//   child calls onAdd when clicked.
// Goal: Parent holds count and displays it. A separate PlusButton child, given
//       an `onAdd` function prop, calls it on click to bump the parent's count.
//
//   function PlusButton({ onAdd }) {
//     return <button onClick={onAdd}>+1</button>;
//   }
// (This is how children "talk back up" to a parent — through function props.)

import { useState } from "react";

function PlusButton({ onAdd }) {
  // a button whose onClick calls onAdd
  return (
    <>
      <button onClick={onAdd}>+</button>
    </>
  );
}

function Drill() {
  // count state; show count; render <PlusButton onAdd={...} />

  const [count, setCount] = useState(0);
  return (
    <>
      <p>{count}</p>
      <PlusButton onAdd={() => setCount(count + 1)} />
    </>
  );
}

export default Drill;
