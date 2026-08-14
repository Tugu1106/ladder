# React Practice Pack

Lots of tiny drills + a few mini-projects, to burn in: **components, props,
destructuring, useState.** Write each one by hand — that's how it sticks.

## How to run a drill
1. Open the drill file, read the goal comment, fill in the component.
2. In `src/App.jsx`, change the import path to that drill's file.
3. Save — it shows in the browser (localhost:5174). `npm run dev` must be running.

Every drill default-exports a component, so in App.jsx you only change the path.

## The drills

**Components**
- 01 hello-component · 02 multiple-elements · 03 nested-components

**Props**
- 04 one-prop · 05 two-props · 06 prop-types · 07 list-with-map

**Destructuring**
- 08 destructure-props · 09 destructure-default

**useState**
- 10 counter · 11 counter-full · 12 toggle-visibility · 13 toggle-text
- 14 controlled-input · 15 array-state

**Mini projects — set 1** (components + props + useState)
- mini-01 profile-cards · mini-02 like-button · mini-03 todo-lite ✅

**Mini projects — set 2** (10 more, fun reps + one new idea each)
- mini-04 counter-step — two states + number input
- mini-05 color-box — state drives an inline style
- mini-06 dice-roller — `Math.random()`
- mini-07 char-counter — a **derived value** (compute, don't store) + a warning
- mini-08 tip-calculator — derived values from two inputs
- mini-09 temp-converter — derived value (C → F)
- mini-10 search-filter — filter the array during render (Live Search, React way)
- mini-11 star-rating — map a fixed count, style each by comparison to state
- mini-12 checklist — **update an item** in array state (the new array pattern)
- mini-13 contact-form — multiple inputs + real `<form onSubmit>`

## Level 2 — the last essentials (useEffect + lifting state)

**useEffect** (run code after render; the dependency array controls *when*)
- effect-01 on-mount — `[]` runs once (check the browser console, F12)
- effect-02 on-change — `[count]` runs when count changes
- effect-03 document-title — sync state to the browser TAB title (visible!)
- effect-04 timer — `setInterval` + **cleanup** (`return () => clearInterval(...)`)

**Lifting state up** (share state between components)
- lift-01 pass-down — parent's state → child via a prop
- lift-02 child-updates-parent — pass the setter down; child changes parent state
- lift-03 siblings — two children share one state that lives in their parent

After these you'll have all of React's essentials — then it's **Async & APIs**
(fetching real data with `useEffect` + `fetch`).

Do them in order. Say **"review"** after a batch and I'll check them + mark progress.
