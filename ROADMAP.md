# 🗺️ The Project Roadmap — Modern JS → React → Full-Stack

**The pace:** many small projects, each adding **one** new thing. Slow on purpose.
**How to use:** top to bottom, run the [HANDBOOK](./HANDBOOK.md) on every project.
Ask me for the next phase's detailed project list when you finish the current one.

---

## 📍 You are here

**Have (from the DS course + OOP Phase 1):** vanilla JS, arrays + array methods,
objects, callbacks, arrow functions, `map`/`filter`/`reduce`, spread `...`,
ternary, and OOP basics (constructors, prototypes, `this`).

**The two small gaps before React:** `destructuring` and `import`/`export`.

**Target:** full-stack apps — frontend + backend + database, maybe AI.
**Path:** frontend-first (React early), backend after.

---

## Why this order (the honest version)

Modern React needs: callbacks, arrow functions, `.map()`, spread, ternary
(**you have all 5**) + destructuring and modules (**the 2 gaps, tiny**). It does
**NOT** need constructors, prototypes, `this`, factory functions, or `class` —
those are legacy-React or not-React at all. So there's no big "advanced JS" wall
before React. Just DOM (so React isn't magic) + two small syntax pieces.

---

## The Phases

### Phase 1 — DOM Essentials  *(6 projects — in progress)*
**Learn:** make a page react — events, reading input, building/removing elements —
and **feel the pain** of manually syncing the screen with your data. That pain is
why React exists.
→ [phase-01-dom-and-events/README.md](./phase-01-dom-and-events/README.md)

### Phase 2 — Modern JS for React  *(short — the 2 real gaps)*
**Learn:** the only two JS pieces you're missing for React:
- **destructuring** — `const [a, b] = arr` and `const { x } = obj` (React uses this
  constantly — `const [count, setCount] = useState(0)`)
- **modules** — `export` / `import` to split code across files (React is all modules)
A quick refresher on `map`/spread/ternary *in a React-shaped context* too.
*Small — roughly a day. Then you're genuinely ready.*

### Phase 3 — React
**Learn:** the tool most frontend jobs use. Components, JSX, **state** (`useState`),
props, event handling, rendering lists with `.map()`, conditional rendering,
**effects** (`useEffect`), and routing.
**Starts by rebuilding the Phase-1 Shopping List in React** — so you feel, directly,
what the framework buys you. Closures finally click here, via `useState`.

### Phase 4 — Async & APIs  *(inside React)*
**Learn:** getting data from the internet — promises, `async`/`await`, `fetch`,
JSON, and loading/error/empty states — done the React way (`useEffect` + `fetch`).
Build weather / search / list apps that pull from real public APIs.

### Phase 5 — Backend: Node → Express → Databases
**Learn:** the server side. Node runtime + npm (leave the browser), then Express
(routing, REST, middleware, JSON APIs), then a database (schema/ER design, CRUD,
relationships). This is where "data model first" gets its teeth.

### Phase 6 — Full-Stack + Auth
**Learn:** frontend + backend + DB as one app. Wiring React to your own API, CORS,
and **authentication/authorization** — signup, login, password hashing,
JWT/sessions, protected routes. Plus deploying it live.

### Phase 7 — Professional & Scale  *(the "last mile")*
**Learn:** engineer-level tooling — TypeScript, testing, caching (Redis),
performance, CI/CD, Next.js / Nest.js, architecture patterns, AI integration.
The "scaling" topics from your hierarchy live HERE — solutions to problems the
earlier phases create. The end, not the start.

---

## The rhythm, one line

> **Design it → hit a wall → learn the one new tool → build it ugly → make it work
> → refine → commit → next.**

## 🧭 DSA — parallel track
One problem a day (LeetCode easy → medium), separate from all of this. Different
muscle. They converge on their own, later.
