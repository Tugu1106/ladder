# 🛠️ The Build Handbook

**Run this sequence every time you start a project — even a tiny one.**
It's the "pattern in an engineer's head" you said you were missing. It's not
talent; it's a worn groove. Follow it 10 times and it becomes yours.

> **The one rule that kills the freeze:**
> You never need to see the whole finished app. You only ever need
> **the smallest next thing that works.** The app emerges one slice at a time.

---

## The 7 phases

### 0 — Vision & Scope
- One sentence: **what + why + for whom.**
- Then the step everyone skips: write **what it does NOT do in v1.**
  Scope boundaries are what stop you drowning.
- *Example:* "A weather app: type a city, see its weather. v1 does NOT have
  saved cities, forecasts, or accounts."

### 1 — Specification
- Write features as **"As a user, I can ___."**
- Split them: **MVP (must-have for v1)** vs **later**.
- Define "done" for v1 concretely — one sentence.

### 2 — Design  ← *this is the "then what?" that used to stump you*
Do these in order. **The design scales to the project** (see the box below):

1. **Data model FIRST.** What are the nouns? Their fields? How do they relate?
   Everything hangs off this. A wrong data model is pain forever.
2. **Interface / contract.** The public surface, designed before the internals:
   - backend → the **API endpoints** (what each takes & returns)
   - modules → each module's **public methods**
3. **UI sketch** (if it has a UI) — rough wireframe, paper is fine.
4. **Tech choice + your ONE new thing** (see the golden rules).

> **📏 The design step SCALES — don't skip it, right-size it:**
> | Project type | "Data model" means… |
> | --- | --- |
> | Frontend-only (weather app) | sketch the **shape of the data** you care about (`{ city, temp, condition }`) |
> | Anything with a database | a real **ER diagram** — entities, fields, relationships (yes, the one uni taught — just on a napkin) |
>
> Your uni diagrams aren't useless. The *thinking* (model entities + relations)
> is the most important design skill there is. You just scale down the formality.

### 3 — Setup / Scaffolding
- `git init` (or create the GitHub repo)
- Init the project (`npm init`, install dependencies, framework scaffold)
- Get a bare **"hello world" running** — prove the pipeline works before features
- **THEN** a minimal folder structure

> ⚠️ **Trap:** do NOT design an elaborate folder tree upfront. Start almost flat.
> Structure **emerges** — split a file only when it gets uncomfortable. Juniors
> build cathedral folder trees for 200-line apps. Don't.

### 4 — Implementation (iterative)
- Build **vertical slices**: one feature end-to-end (data → logic → UI), *then* the next.
- **NOT** horizontal layers (all HTML, then all CSS, then all JS) — that's how you freeze.
- **Make it work UGLY first.** No styling, no edge cases. `console.log` if the UI isn't ready.
- **Commit after every working piece.**

### 5 — Refine
- Edge cases, input validation, error handling
- Styling / polish
- Refactor now that you can finally see the real shape

### 6 — Test & Deploy *(later concern)*
- Manual testing → automated tests → ship it

---

## 🏗️ Full-stack specifics (frontend + backend + DB)

**Design order:** data model / DB schema → API contract → *then* implement.

**Implementation order — the part that saves you:**
Do NOT build the whole backend, then the whole frontend (3 weeks of headless
backend = dead motivation). Build **vertical slices across the whole stack**:

```
one feature, e.g. "create a post":
  DB table  →  POST /posts endpoint  →  test with Postman/curl
     →  frontend form that calls it  →  see it appear
```

Within a slice: **backend before frontend** (the frontend needs something to
talk to). But slice-by-slice, not layer-by-layer.

*(AI integration, when it comes, is just one more API your backend calls — a
later slice, not a foundational worry.)*

---

## 🔑 The "I don't know the tool" loop — your official workflow

This is how you build things using tools you haven't learned yet:

1. **Design the step** with what you know (decompose it small — you can always do this).
2. **Name the wall:** "I need to run this only after the user stops typing" — even
   if you don't know it's called *debounce*.
3. **Ask Claude:** "what tool does this, and what's the syntax?" (or Google the shape).
4. **Write the code yourself.** Never paste. Type it, understand it.
5. **The test:** *Could I rewrite this tomorrow, with the docs but not Claude?*
   Yes → you learned it. No → you borrowed it. Do it again.

You do NOT need to know every tool before building. You decompose, hit walls,
learn one tool per wall, move on. **Project 1 you'll search 50 times. Project 10,
five times. That declining count IS "getting experienced."**

---

## ⭐ Golden rules of thumb

- **Data model first.** Always.
- **Interface before implementation.** Design the contract, then fill it.
- **Vertical slices, not horizontal layers.**
- **Ugly-working beats pretty-broken.**
- **Structure emerges — don't pre-build folder cathedrals.**
- **Commit after every working piece.**
- **One new tool per project — everything else on autopilot.** Reusing your known
  tools isn't failure; it's what frees your brain for the new thing.
- **Functional, not mastery.** Learn a new concept *just enough to make it work*,
  then gain fluency by using it across the next few projects.

---

## 🤝 How to use Claude without robbing yourself

| Use me as… | Not as… |
| --- | --- |
| **Navigator** — what to build / what tool a step needs | ❌ the one who writes your code |
| **Reviewer** — you write it, I run it & critique the idiom | |
| **Rubber duck** — explain your bug to me out loud | |
| **Explainer** — re-teach a concept the docs muddled | |
| **Unblocker** — stuck 45+ min? ask for a *hint*, not the answer | |

The compass for everything: **could you rewrite it from memory tomorrow?**
