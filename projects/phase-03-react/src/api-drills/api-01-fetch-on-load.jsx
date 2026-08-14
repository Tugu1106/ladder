// API Drill 1 — Fetch on Load
// The core React fetch pattern. Fetch ONE todo when the component appears, and
// show its title.
//
// WHERE: fetch goes in useEffect.  WHERE the data lives: useState.
//
//   const [todo, setTodo] = useState(null);
//   useEffect(() => {
//     async function load() {                 // async fn INSIDE (effect can't be async)
//       const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//       const data = await res.json();
//       setTodo(data);                        // data into state → re-render
//     }
//     load();
//   }, []);                                    // [] = fetch once, on load
//
// Then show it — but todo is `null` at first (before the fetch finishes), so guard it:
//   if (!todo) return <p>Loading...</p>;
//   return <h2>{todo.title}</h2>;

import { useState, useEffect } from "react";

function Drill() {
  const [todo, setTodo] = useState(null);
  useEffect(() => {
    async function load() {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await res.json();
      setTodo(data);
    }
    load();
  }, []);
  if (!todo) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <p>Title: {todo.title}</p>
      <p>Done: {todo.completed ? "yes" : "no"}</p>
      <p>ID: {todo.id}</p>
    </div>
  );

  // 3. guard for null, then show todo.title
}

export default Drill;
