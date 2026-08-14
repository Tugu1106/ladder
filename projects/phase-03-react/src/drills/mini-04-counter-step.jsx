// Mini 04 — Counter with Step
// Goal: a counter PLUS a number input to set how much each click adds.
//       Set step to 5, click +, the count jumps by 5.
// NEW idea: two states working together (count + step), and a NUMBER input.
//   <input type="number" value={step}
//          onChange={(e) => setStep(Number(e.target.value))} />
//   Number(...) turns the input's string into a real number.
// Build: count state (0), step state (1); a +Step and a -Step button; show count.

import { useState } from "react";

function Drill() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  return (
    <>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <button onClick={() => setCount(count + step)}>Add</button>
      <p>{count}</p>
    </>
  );
}

export default Drill;
