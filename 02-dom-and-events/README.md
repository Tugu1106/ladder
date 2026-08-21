# Phase 1 — DOM Essentials (6 projects)

**The point of this phase:** the *minimum* DOM you need so that React makes sense
instead of feeling like magic. You'll learn to make a page react to the user —
and, crucially, you'll **feel the pain** of manually keeping the screen in sync
with your data. That pain is the whole reason React exists. Once you've felt it,
React's "the UI updates itself" will feel like relief, and you'll actually
understand *why* it's good.

Six projects. Then straight to React, where the first thing you rebuild is
Project 6 — and feel the difference.

Each is 20–60 min and adds one thing. Go in order.

---

## 🖥️ How you run these (browser, not Node)

Each project is a folder with two files:

```
click-counter/
├── index.html      ← the page (loads script.js at the end)
└── script.js       ← your JavaScript
```

**Run + auto-reload:** install the **Live Server** VS Code extension once
(Extensions panel → search "Live Server" → Install). Right-click `index.html` →
**"Open with Live Server."** Opens in your browser, refreshes on every save.

**Debug:** in the browser press **F12** → **Console** tab. `console.log` prints
there, and DOM errors show up there.

---

## 🧠 The four moves (almost every project is these)

1. **Select** an element — `document.querySelector("#thing")`
2. **Listen** for an event — `el.addEventListener("click", () => { ... })`
3. **Change** something — `.textContent`, `.style.x`, `.classList`, `.value`
4. **Build / remove** elements — `createElement`, `.append`, `.remove`

Ask me for the exact syntax of any of these when you first hit it. **Design the
project first, hit the wall, then ask** — that's the handbook loop.

---

## The 6 projects

### 1 — Click Counter
A button and a number. Each click adds 1. (Add − and Reset buttons too if you want.)
🆕 `querySelector`, `addEventListener("click")`, updating `.textContent`, and
holding state in a variable.
✅ **Done:** clicking makes the number change.
💡 *This is the whole DOM loop in miniature: an event changes a variable, and you
update the screen to match. React automates that last step — remember this
project when you meet `useState`.*

### 2 — Live Echo
Type in a text box; the text appears live in a heading below as you type.
🆕 the `"input"` event + reading `.value`.
✅ **Done:** what you type mirrors instantly below.
💡 *In React this becomes a "controlled input" — same idea, less wiring.*

### 3 — Add to List
An input + button; each click adds what you typed as a new list item.
🆕 `document.createElement` + `.append`.
✅ **Done:** typing + clicking grows a real `<ul>`.
💡 *You're now building DOM by hand. Notice how manual it is — that's the point.*

### 4 — Delete from List
Each item gets a ✕ button that removes just that item.
🆕 attaching events to elements you created + `.remove()`.
✅ **Done:** any item can be deleted individually.
💡 *Keeping the screen matching your data is getting fiddly. Feel it.*

### 5 — Live Search Filter
A list + a search box that filters the visible items as you type.
🆕 combining the `"input"` event with your array `filter()` skill.
✅ **Done:** typing narrows the list. *(Your DS-course `filter` pays off here.)*

### 6 — ⭐ Shopping List (the boss)
Add items, delete them, mark done (strike-through), and show a live count of items
left.
🆕 nothing new — **combining** projects 1–5 and managing state in one small app.
✅ **Done:** a usable little app. You'll rebuild this exact thing in React next —
so keep it.
💡 *By the end you'll be manually re-syncing the DOM every time the data changes,
and it'll feel tedious. Hold onto that feeling. React deletes it — and now you'll
know exactly what it deleted and why that matters.*

---

## → After Project 6: React

Next phase is **React**, and Project 1 there is **the Shopping List, rebuilt.**
You'll do the same app with React's tools and feel — directly — what the
framework buys you. That contrast is worth more than any explanation.

## When you finish a project

Say **"review"** and show me — I'll read it, run it in my head / check the logic,
critique the idioms (naming, the loop-that-should-be-a-`map`, structure), and mark
progress. Same as the DS course.
