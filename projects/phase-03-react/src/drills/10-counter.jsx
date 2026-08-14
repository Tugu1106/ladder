// Drill 10 — Counter  (your first useState!)
// Goal: show a number and a +1 button. Clicking adds 1.
//   const [count, setCount] = useState(0);
//   <button onClick={() => setCount(count + 1)}>+1</button>
// Note the import line at the top.

import { useState } from "react";

function Drill() {
  const [count, setCount] = useState(5);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </>
  );
}

export default Drill;
