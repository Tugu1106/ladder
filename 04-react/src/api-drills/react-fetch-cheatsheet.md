# Fetching in React — Simple Cheatsheet

You already know `fetch` + `async/await` (Phase 4 Part 1). In React, the only
new questions are: **WHERE does the fetch go?** and **WHERE does the data live?**

## The answers

- **Where does the fetch go?** → inside **`useEffect`** (so it runs when the
  component loads, not on every render).
- **Where does the data live?** → in **`useState`** (so the UI re-renders when it
  arrives).

That's it. `fetch` gets the data in; `useState` holds it; `useEffect` triggers it.

## The core pattern

```jsx
import { useState, useEffect } from "react";

function Users() {
  const [users, setUsers] = useState([]);   // 1. state to HOLD the data

  useEffect(() => {                          // 2. run the fetch on load
    async function load() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);                        // 3. put the data INTO state → re-render
    }
    load();
  }, []);                                    // [] = fetch ONCE, on mount

  return (
    <ul>
      {users.map((u) => <li key={u.id}>{u.name}</li>)}   // 4. render from state
    </ul>
  );
}
```

Read it as: **state holds the data → useEffect fetches it on load → setState drops
it in → React re-renders → JSX shows it.**

## ⚠️ The one gotcha: useEffect's function can't be `async`

You CANNOT do `useEffect(async () => { ... })` directly (React complains).
Instead, **define an async function inside, then call it:**

```jsx
useEffect(() => {
  async function load() {          // ← async function INSIDE
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
  }
  load();                          // ← call it
}, []);
```

## The three states (loading / error / data)

Real fetches are slow and can fail. So you track THREE things:

```jsx
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  async function load() {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Request failed: " + res.status);
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);           // stop loading, success OR fail
    }
  }
  load();
}, []);

if (loading) return <p>Loading...</p>;      // show while waiting
if (error)   return <p>Error: {error}</p>;  // show if it failed
return <div>{/* show data */}</div>;        // show when ready
```

This is the **full, real pattern** every data component uses:
**loading → error → data**, decided by conditional rendering.

## Fetch when something CHANGES (dependency array)

`[]` fetches once. To re-fetch when a value changes, put it in the array:

```jsx
useEffect(() => {
  async function load() {
    const res = await fetch(`https://api.github.com/users/${username}`);
    setUser(await res.json());
  }
  load();
}, [username]);   // ← re-fetch whenever `username` changes
```

This is how a search works: `username` is state, and every time it changes, the
effect re-runs and fetches the new data. Same dependency-array rule you learned.

## Quick reference

| Piece | Job |
| --- | --- |
| `useState` | hold the fetched data (+ loading + error) |
| `useEffect(fn, [])` | run the fetch once, on load |
| `useEffect(fn, [x])` | re-fetch whenever `x` changes |
| async fn inside effect | because the effect itself can't be async |
| `setData(...)` | drop the data into state → triggers re-render |
| `if (loading) return ...` | conditional rendering for each state |

## The mental model

```
component loads
   → useEffect fires
      → fetch (await) ... data arrives later
         → setData(data)   → React RE-RENDERS
            → JSX shows the data
```

Everything you already know — `fetch`, `await`, `useState`, `useEffect`,
conditional rendering, `map` — combined. **No new concepts, just assembled.**
