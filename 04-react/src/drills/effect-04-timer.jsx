// useEffect Drill 4 — A timer, with CLEANUP
// NEW: an effect can RETURN a cleanup function. React runs it before the next
//      effect and when the component leaves. Timers MUST be cleaned up.
//   useEffect(() => {
//     const id = setInterval(() => setSeconds((s) => s + 1), 1000);
//     return () => clearInterval(id);   // <- cleanup: stop the timer
//   }, []);
// Goal: a number that counts up by 1 every second, automatically.
// Note: setSeconds((s) => s + 1) uses the "updater" form — safest inside timers.

import { useState, useEffect } from "react";

function Drill() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <p>{seconds}</p>
    </>
  );
}

export default Drill;
