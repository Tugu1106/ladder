# useEffect — Simple Cheatsheet

## What is it? (one line)

**`useEffect` runs code *after* your component renders.** It's for talking to
the world *outside* React — fetching data, timers, the browser tab, etc.

## Why do you need it?

A component's only job is to **return JSX**. But sometimes you need to *do*
something extra: fetch data, start a timer, change the page title. That extra
stuff doesn't belong in the middle of building the UI — it belongs in an
**effect**, which runs *after* the UI is drawn.

## The syntax

```jsx
import { useState, useEffect } from "react";

useEffect(() => {
  // 👈 your code here — runs AFTER render
}, [/* dependencies */]);
```

Two parts:
1. **a function** — the code to run
2. **a dependency array `[ ]`** — controls **WHEN** it runs

## ⭐ The dependency array — the most important part

| You write | When the effect runs |
| --- | --- |
| `useEffect(fn, [])` | **once** — when the component first appears ("on mount") |
| `useEffect(fn, [count])` | when **`count`** changes (and the first time) |
| `useEffect(fn)` *(no array)* | after **every** render — ⚠️ rarely what you want |

**Rule of thumb:** put in the array every state/prop the effect *uses and should
react to.* `[]` = "just once." `[x]` = "whenever x changes."

## Cleanup (for timers, subscriptions)

**Return a function** from the effect. React runs it before the next effect and
when the component leaves. Timers **must** be cleaned up, or they pile up.

```jsx
useEffect(() => {
  const id = setInterval(() => console.log("tick"), 1000);

  return () => clearInterval(id);   // 👈 cleanup — stops the timer
}, []);
```

## Copy-me patterns

**Run once when the page loads (e.g. fetch data later):**
```jsx
useEffect(() => {
  console.log("component appeared");
}, []);
```

**React to a state change:**
```jsx
useEffect(() => {
  console.log("count changed to", count);
}, [count]);
```

**Sync to the browser tab title:**
```jsx
useEffect(() => {
  document.title = `Count: ${count}`;
}, [count]);
```

**A timer (with cleanup):**
```jsx
useEffect(() => {
  const id = setInterval(() => setSeconds((s) => s + 1), 1000);
  return () => clearInterval(id);
}, []);
```

## Rules (don't break these)

- ✅ Call `useEffect` at the **top** of your component — never inside a loop,
  `if`, or nested function.
- ✅ Always ask: **"what should this depend on?"** → that's your array.
- ❌ Don't leave the array off unless you truly mean "run every render."

## The mental model

```
component renders  →  screen shows  →  THEN the effect runs
       │
       └─ if a dependency changed since last time:
              run cleanup (if any)  →  run the effect again
```

**render first, effect after.** The effect reacts to what changed, decided by
the dependency array.

---

## How this connects to what's next

The #1 real use of `useEffect` is **fetching data from an API when a component
loads** — `useEffect(() => { fetch(...) }, [])`. That's your next topic (Async &
APIs). Master the dependency array here, and data-fetching will feel easy.

Drills for this: `effect-01` → `effect-04` in this folder.
