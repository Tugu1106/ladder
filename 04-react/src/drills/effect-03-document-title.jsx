// useEffect Drill 3 — Sync something OUTSIDE React (the browser tab title)
// NEW: effects are for talking to the world outside your component — the
//      document, timers, the network. Here: the browser tab's title.
//   useEffect(() => { document.title = `Count: ${count}`; }, [count]);
// Goal: a counter; whenever count changes, update the TAB TITLE to match.
// >>> Look at your browser TAB (not the page) — the title number changes as
//     you click. That's an effect syncing React state to the outside world.

import { useState, useEffect } from "react";

function Drill() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
}

export default Drill;
