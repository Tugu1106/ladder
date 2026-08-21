// API Drill 5 — Re-fetch when something CHANGES (the search pattern)
// A number input picks a todo id (1..200). Whenever the id changes, re-fetch
// THAT todo. The magic: put `id` in the useEffect dependency array.
//
//   const [id, setId] = useState(1);
//   const [todo, setTodo] = useState(null);
//
//   useEffect(() => {
//     async function load() {
//       const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
//       setTodo(await res.json());
//     }
//     load();
//   }, [id]);                                   // ← re-fetch whenever id changes
//
//   return (
//     <>
//       <input type="number" value={id}
//              onChange={(e) => setId(Number(e.target.value))} />
//       {todo && <h3>{todo.title}</h3>}
//     </>
//   );
//
// >>> This is how live search works: a value is state, and every time it changes,
//     the effect re-runs and fetches fresh data. Same dependency-array rule.

import { useState, useEffect } from "react";

function Drill() {
  const [id, setId] = useState(1);
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${id}`,
        );
        const data = await res.json();
        setTodo(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);
  return (
    <>
      <input
        type="number"
        value={id}
        onChange={(e) => setId(Number(e.target.value))}
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {todo && <h3>{todo.title}</h3>}
    </>
  );
}

export default Drill;
