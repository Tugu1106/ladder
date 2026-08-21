# Async & Fetch — Simple Cheatsheet

## The problem async solves

Some things take **time**: fetching data from the internet, timers. If your code
just *stopped and waited*, the whole app would freeze. So JavaScript does slow
things **asynchronously** — it starts them, keeps going, and deals with the result
**when it arrives later.**

The tricky part: **the result isn't there on the next line — it comes later.**
Promises and `async`/`await` are how you handle "later."

---

## 1. Promise — "a value that arrives later"

A **promise** is an IOU: "I don't have the value yet, but I promise to give it to
you when it's ready." A promise is always in one of three states:

```
pending    → still waiting
fulfilled  → done, here's the value      ✅
rejected   → failed, here's the error    ❌
```

`fetch()` returns a promise. So do many built-in things.

### Old way to read a promise: `.then()` / `.catch()`
```javascript
fetch(url)
  .then((response) => response.json())   // when it arrives, do this
  .then((data) => console.log(data))     // then this
  .catch((error) => console.log(error)); // if it fails, this
```
You'll *see* this style a lot, but you'll *write* the next one.

---

## 2. `async` / `await` — the modern, cleaner way

`await` means **"pause here until the promise resolves, then give me the value."**
It makes async code read like normal top-to-bottom code.

```javascript
async function getData() {
  const response = await fetch(url);     // wait for the response
  const data = await response.json();    // wait for the JSON
  console.log(data);                     // now use it
}
```

Two rules:
- **`await` only works inside an `async` function.** Mark the function `async`.
- **`await` pauses until the promise is done**, then hands you the value.

Same as the `.then()` version above — just written like normal sequential code.
This is what you'll use.

---

## 3. `fetch` — call an API

```javascript
const response = await fetch("https://api.example.com/users");
```

- `fetch(url)` sends a **GET** request to that URL (GET = "give me data").
- It returns a **promise** → so you `await` it.
- What you get back is a **Response** object — NOT the data yet. You have to read
  the JSON out of it (next step).

---

## 4. `.json()` — get the data out of the response

The response isn't your data — it's a wrapper. Pull the JSON out (also a promise,
so `await` it too):

```javascript
const response = await fetch(url);       // 1. get the response
const data = await response.json();      // 2. read the JSON into a JS object/array
```

**Two `await`s** — one for the fetch, one for the json. This trips everyone up
once: `fetch` gives you a Response; `.json()` gives you the actual data.

---

## 5. `try` / `catch` — handle failures

The network can fail (no internet, bad URL, server down). Wrap it so a failure
doesn't crash everything:

```javascript
async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Something went wrong:", error.message);
  }
}
```

`try` runs the risky code; `catch` runs if anything in the `try` fails. Same
`try/catch` you saw in Phase 1's `new.target` drill.

---

## ⭐ The whole fetch pattern (memorize this shape)

```javascript
async function loadUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);                 // an array of user objects — now use it!
  } catch (error) {
    console.log("Failed:", error.message);
  }
}

loadUsers();
```

Read it as: **"go get the response, wait; read the JSON, wait; use the data — and
if anything breaks, catch it."** Every API call you ever write is a version of
this shape.

---

## Quick reference

| Piece | What it does |
| --- | --- |
| **promise** | a value that arrives later (pending → fulfilled/rejected) |
| **`async function`** | a function that can use `await` inside it |
| **`await x`** | pause until promise `x` resolves, then return its value |
| **`fetch(url)`** | send a GET request; returns a promise for a Response |
| **`response.json()`** | read the JSON body into a JS object/array (a promise) |
| **`try { } catch (e) { }`** | run risky code; handle failure gracefully |

## The mental model

```
call fetch  →  (wait...)  →  get a Response  →  read .json()  →  (wait...)  →  DATA
     │                                                                          │
     └───────────────── if anything fails → catch the error ───────────────────┘
```

Once the DATA is in your hands, it's just a JS object or array — and you already
know how to `map`, `filter`, and read those. **The only new part is getting the
data in.** That's this whole phase.
