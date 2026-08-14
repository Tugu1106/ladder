// Lifting State Drill 3 — Two SIBLINGS sharing one state
// NEW idea: the classic reason to lift state up — two children need the SAME
//           state, so it lives in their shared PARENT.
//   Parent owns count. <Display> shows it. <Controls> changes it.
//   Neither sibling owns the state; the parent does, and passes each what it needs.
// Goal:
//   - <Display count={count} />           -> shows the count
//   - <Controls onAdd={...} onReset={...} /> -> a +1 button and a Reset button
//   Parent holds count and wires both children up.
// This is THE pattern for shared state. You'll use it constantly.

import { useState } from "react";

function Display({ count }) {
  return (
    <>
      <p>{count}</p>
    </>
  );
}

function Controls({ onAdd, onReset }) {
  return (
    <>
      <button onClick={onAdd}>Add</button>
      <button onClick={onReset}>Reset</button>
    </>
  );
}

function Drill() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Display count={count} />
      <Controls onAdd={() => setCount(count + 1)} onReset={() => setCount(0)} />
    </>
  );
}

export default Drill;
