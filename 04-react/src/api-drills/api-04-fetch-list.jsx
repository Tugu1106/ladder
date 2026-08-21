// API Drill 4 — Fetch a LIST + render it
// Fetch an ARRAY of users, store it in state, and render it with map (+ key).
// This is the todo/shopping-list rendering you know — but the data comes from
// the internet now.
//
//   const [users, setUsers] = useState([]);   // start as EMPTY array
//   const [loading, setLoading] = useState(true);
//
//   useEffect(() => {
//     async function load() {
//       const res = await fetch("https://jsonplaceholder.typicode.com/users");
//       const data = await res.json();          // an ARRAY of user objects
//       setUsers(data);
//       setLoading(false);
//     }
//     load();
//   }, []);
//
//   if (loading) return <p>Loading...</p>;
//   return (
//     <ul>
//       {users.map((u) => <li key={u.id}>{u.name}</li>)}
//     </ul>
//   );
//
// NOTE: start users as [] (not null) so users.map() is safe even before data loads.

import { useState, useEffect } from "react";

function Drill() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
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
  return (
    <>
      <ul>
        {users.map((u) => {
          return <li key={u.id}>{u.name}</li>;
        })}
      </ul>
    </>
  );
}

export default Drill;
