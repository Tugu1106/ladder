// Drill 11 — Counter with +1 / -1 / Reset
// Goal: three buttons.
//   +1    -> setCount(count + 1)
//   -1    -> setCount(count - 1)
//   Reset -> setCount(0)

import { useState } from "react";

function Drill() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}

export default Drill;
