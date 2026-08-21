// useEffect Drill 1 — Run once on mount
// NEW HOOK: useEffect runs code AFTER the component renders.
//   useEffect(() => { ... }, []);   <- the empty [] means "run ONCE, on first render"
// Goal: log "Component mounted!" once when it appears, and show a heading.
// >>> Open the browser CONSOLE (F12). You'll see it log exactly once — even if
//     the component re-renders, the [] keeps it to a single run.

import { useEffect } from "react";

function Drill() {
  useEffect(() => {
    console.log("It works");
  }, []);
  return (
    <>
      <h1></h1>
    </>
  );
}

export default Drill;
