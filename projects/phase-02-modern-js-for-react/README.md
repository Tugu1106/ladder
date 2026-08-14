# Phase 2 — Modern JS for React (9 quick drills)

**The point:** you're missing exactly **two** things before React —
**destructuring** and **modules (`import`/`export`)**. Everything else React
needs (callbacks, `map`, spread, ternary) you already have. So this phase is
short and sharp: get these two into your fingers, then straight to React.

**Functional, not mastery.** Each drill is ~2 minutes. Do them, feel the syntax,
move on. You'll gain real fluency using them inside React.

## How to run

Plain Node — `node 01-array-destructuring.js`, or press **Ctrl+Shift+B**.
(The `package.json` here has `"type": "module"` so `import`/`export` just work.)

## The two gaps, and why React needs them

**Destructuring** — pulling values out of arrays/objects into variables:
```javascript
const [count, setCount] = useState(0);   // ← array destructuring (React, constantly)
function Welcome({ title }) { ... }       // ← object destructuring (React props)
```

**Modules** — splitting code across files:
```javascript
import { useState } from "react";         // ← named import
import App from "./App.js";                // ← default import
export default function App() { ... }      // ← default export
```

Every React file starts with lines like these. After these 9 drills, they'll
read like plain English.

## The drills

1. Array destructuring
2. Skip & rest
3. Object destructuring
4. Rename & default
5. Destructuring in function parameters (← React props)
6. Destructure a returned pair (← the `useState` shape)
7. Named exports & imports
8. Default export & import
9. Mixing default + named (the real-world import line)

Drills 7–9 use **two files each** (a helper you write exports in + a main file
you run). When one works, say **"review."** When all 9 are done — **React.**
