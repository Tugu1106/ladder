# Phase 4 — Async & APIs

**The big one.** This is where your apps stop using data you typed in the file,
and start pulling **real, live data from the internet.** APIs.

## Read these FIRST (before the drills)

1. **[what-is-an-api.md](./what-is-an-api.md)** — what an API even *is* (the
   restaurant analogy, request/response, JSON). The concept, in plain words.
2. **[async-cheatsheet.md](./async-cheatsheet.md)** — the syntax: promises,
   `async`/`await`, `fetch`, `.json()`, `try/catch`. Your reference.

Read both (10 minutes), then do the drills. They'll make total sense.

## Why two parts

You'll learn this in the right order — **fundamentals first, in plain Node**,
then **React**. Learning `fetch` and React at the same time is where people
drown. We separate them.

### Part 1 — Async fundamentals (plain Node) ← START HERE
Run with `node <file>` (your Node 22 has `fetch` built in). No React, no browser
— just the pure concepts.

- **01 promise-basics** — a value that arrives *later* (`.then()`)
- **02 async-await** — the modern way to read a promise (`await`)
- **03 first-fetch** — your first real API call
- **04 fetch-json** — read the data out (`.json()`, the two-`await` pattern)
- **05 fetch-error-handling** — `try/catch` for when the network fails
- **06 fetch-and-process** — fetch a list, then `map`/`filter` it (your DS skills!)

### Part 2 — Fetching in React ✅ (built)
Lives in your React project (reuses the Vite setup):
**`phase-03-react/src/api-drills/`**

- Read first: `react-fetch-cheatsheet.md` (the useEffect + fetch pattern)
- **api-01 fetch-on-load** — the core pattern (state + useEffect + fetch)
- **api-02 loading-state** — show "Loading..." while fetching
- **api-03 error-and-loading** — the full loading/error/data pattern
- **api-04 fetch-list** — fetch an array, render with map
- **api-05 refetch-on-change** — re-fetch when a value changes (the search pattern)
- **project-01 user-list** — a real user-list app (cards + loading + error)
- **project-02 github-search** — type a username, show their real GitHub profile 🚀

Run them with the drill runner: change the import in `src/App.jsx` to the file,
`npm run dev`, view at localhost:5174.

## The one big idea

```
Getting the data IN  = the only new part (fetch + async/await).
Using the data       = stuff you already know (objects, arrays, map, filter).
```

An API gives you back a plain JS object or array. Once it's in your hands, it's
just the data structures you mastered months ago. **This whole phase is really
just "how to get the data in."** Learn that, and the internet is yours.

## How to run (Part 1)

```
node 01-promise-basics.js
```
or press **Ctrl+Shift+B** with the file open. (Drills 03–06 need internet.)

Do them in order. Say **"review"** after a batch and I'll check them + mark
progress. When Part 1 is done, I'll set up Part 2 (React) in your React project.
