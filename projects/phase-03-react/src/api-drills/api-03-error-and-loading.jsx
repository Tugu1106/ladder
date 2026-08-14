// API Drill 3 — Loading + Error (the FULL real pattern)
// Three states: data, loading, error. This is what every real data component does.
//
//   const [todo, setTodo] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//
//   useEffect(() => {
//     async function load() {
//       try {
//         const res = await fetch(url);
//         if (!res.ok) throw new Error("Request failed: " + res.status);
//         const data = await res.json();
//         setTodo(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);       // stop loading whether it worked or failed
//       }
//     }
//     load();
//   }, []);
//
//   if (loading) return <p>Loading...</p>;
//   if (error)   return <p>Error: {error}</p>;
//   return <h2>{todo.title}</h2>;
//
// TEST the error path: change the URL to a broken one and you'll see "Error: ...".

import { useState, useEffect } from "react";

function Drill() {
  const url = "https://jsonplaceholder.typicode.com/todos/1";
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setTodo(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return <>{todo.title}</>;
}

export default Drill;
