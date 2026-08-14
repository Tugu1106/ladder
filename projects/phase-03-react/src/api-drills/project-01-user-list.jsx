// PROJECT 1 — User List (with loading + error + cards)
// Your first real API-powered app. Fetch a list of users and show each as a card.
//
// API:  https://jsonplaceholder.typicode.com/users   (array of ~10 users)
//       each user: { id, name, email, phone, company: { name }, ... }
//
// BUILD IT (run the handbook in your head):
//   State:   users ([]),  loading (true),  error (null)
//   Effect:  on load, try/catch fetch → setUsers, catch → setError, finally → setLoading(false)
//   Render:  if loading → "Loading..."
//            if error   → the error
//            else       → map users to <UserCard user={u} /> (a small component!)
//
//   A UserCard could show: name, email, and company.name — in a styled div.
//   (Reuse your Phase-3 Card idea: a component that takes a user prop.)
//
// This combines EVERYTHING: fetch, useState, useEffect, loading/error states,
// map + key, props, a child component. A real little app.

import { useState, useEffect } from "react";

// function UserCard({ user }) { ... show name / email / company.name ... }

function UserCard({ user }) {
  return (
    <div className="card">
      <ul>
        <li>{user.name}</li>
        <li>{user.email}</li>
        <li>{user.company.name}</li>
      </ul>
    </div>
  );
}

function Drill() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
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

  return (
    <div>
      {users.map((u) => {
        return <UserCard key={u.id} user={u} />;
      })}
    </div>
  );

  // users / loading / error states
  // useEffect: fetch users on load, with try/catch/finally
  // conditional rendering: loading -> error -> the mapped list of <UserCard />
}

export default Drill;
