// useEffect Drill 2 — React to a state change
// NEW: the dependency array controls WHEN the effect runs.
//   useEffect(() => { ... }, [count]);   <- runs whenever `count` changes
// Goal: a counter + a button. Each time count changes, log "Count is now: X".
// >>> Watch the console: the effect fires only when count changes — not on
//     every render for no reason. That array is the "when".

import { useState, useEffect } from "react";

function Drill() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`Count changed to ${count}`);
  }, [count]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>{count}</p>
    </>
  );
}

export default Drill;
