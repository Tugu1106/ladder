// API Drill 2 — Loading State
// Same as Drill 1, but with an explicit `loading` state — show "Loading..."
// while the fetch is in flight, then the data when it arrives.
//
//   const [todo, setTodo] = useState(null);
//   const [loading, setLoading] = useState(true);   // start true — we're loading
//   useEffect(() => {
//     async function load() {
//       const res = await fetch(url);
//       const data = await res.json();
//       setTodo(data);
//       setLoading(false);                            // done loading
//     }
//     load();
//   }, []);
//
//   if (loading) return <p>Loading...</p>;
//   return <h2>{todo.title}</h2>;
//
// TIP: to actually SEE "Loading...", the fetch has to take a moment — it will,
// since it's a real network call. (You can also throttle in DevTools → Network.)

import { useState, useEffect } from "react";

function Drill() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function load() {
      const res = await fetch(url);
      const data = await res.json();
      setTodo(data);
      setLoading(false);
    }
    load();
  }, []);
  if (loading) return <p>Loading...</p>; // ← read loading, guard
  return <h2>{todo.title}</h2>;
}

export default Drill;
