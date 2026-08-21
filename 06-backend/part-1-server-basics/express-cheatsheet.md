# Express — Simple Cheatsheet

Your reference for the whole phase. You already know JS objects, arrays, and
`fetch`. Express just adds: **"how do I receive a request and send a response?"**

## The skeleton (every server starts like this)

```javascript
import express from "express";     // 1. bring in Express
const app = express();             // 2. make an app
const PORT = 3000;

// 3. ...your routes go here...

app.listen(PORT, () => {           // 4. start listening
  console.log(`Server running at http://localhost:${PORT}`);
});
```

Memorize this shape. Steps 1, 2, 4 never change — you only ever add **routes** in
the middle.

## A route = method + path + handler

```javascript
app.get("/hello", (req, res) => {
  res.send("Hi!");
});
//  │      │         │    │
//  │      │         │    └─ res: how you ANSWER
//  │      │         └────── req: info about the request
//  │      └──────────────── the path (URL)
//  └─────────────────────── the method (GET)
```

Read it as: **"when a GET request hits /hello, run this function."** The function
gets `req` (the question) and `res` (your way to answer).

## The HTTP methods (same ones from Phase 4)

```javascript
app.get("/items", handler);      // READ   — send data back
app.post("/items", handler);     // CREATE — make a new thing
app.put("/items/:id", handler);  // UPDATE — replace a thing
app.delete("/items/:id", handler);// DELETE — remove a thing
```

These four = **CRUD** (Create, Read, Update, Delete) — the four things every app
does to data. You *called* these in Phase 4; now you *define* them.

## Sending a response (`res`)

```javascript
res.send("plain text");           // send text/HTML
res.json({ name: "Tugu" });       // send JSON  ← you'll use this 95% of the time
res.status(404).json({ error: "Not found" });  // set a status code, then send
```

- **`res.json(...)`** turns your JS object/array into JSON and sends it. This is the
  backend version of what `.json()` unwrapped for you in Phase 4.
- **Always send exactly ONE response per request.** Sending two crashes.

## Reading from the request (`req`)

Three places data comes in — know which is which:

### 1. Route params — part of the URL path (`:id`)
```javascript
app.get("/users/:id", (req, res) => {
  const id = req.params.id;        // /users/5  →  id = "5"
  res.json({ requestedId: id });
});
```
Use for: "which specific thing?" — `/users/5`, `/posts/42`.

### 2. Query params — after the `?`
```javascript
app.get("/search", (req, res) => {
  const term = req.query.q;        // /search?q=cats  →  term = "cats"
  res.json({ searchedFor: term });
});
```
Use for: options/filters — `/search?q=cats&limit=10`.

### 3. Body — data sent WITH the request (POST/PUT)
```javascript
app.use(express.json());           // ⚠️ REQUIRED to read JSON bodies — add once, near the top

app.post("/users", (req, res) => {
  const newUser = req.body;        // the JSON they sent
  res.json({ created: newUser });
});
```
Use for: the actual data being created/updated (a new user, an edited post).

> **The #1 beginner bug:** forgetting `app.use(express.json())`. Without it,
> `req.body` is `undefined` on every POST. Add it once, right after `const app`.

## The three inputs, side by side

| Where | Looks like | Read with | Use for |
| --- | --- | --- | --- |
| **Route param** | `/users/:id` | `req.params.id` | which specific item |
| **Query param** | `/search?q=x` | `req.query.q` | filters, options |
| **Body** | JSON sent in POST/PUT | `req.body` | the data being sent |

## Status codes (what the number means)

Every response carries a number telling the client how it went:

| Code | Means | When |
| --- | --- | --- |
| **200** | OK | success (the default) |
| **201** | Created | after a successful POST |
| **400** | Bad Request | the client sent something wrong |
| **404** | Not Found | that thing doesn't exist |
| **500** | Server Error | your code crashed |

```javascript
res.status(201).json(newItem);              // created
res.status(404).json({ error: "No user" }); // not found
```

You saw `res.ok` and `res.status` in Phase 4 (the GitHub 404!). Now you're the one
*setting* them.

## Testing your server (no React needed)

- **GET routes:** just open the URL in your **browser** — `http://localhost:3000/users`.
- **POST/PUT/DELETE:** the browser only does GET, so use a tool:
  - **Thunder Client** or **REST Client** (VS Code extensions), or
  - the terminal: `curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"name":"Tugu"}'`

## The whole mental model

```
node server.js
   → app.listen(3000)  → SERVER IS LIVE, waiting ...
      → request:  GET /users/5
         → Express finds the matching route
            → your handler(req, res) runs
               → read req.params / req.query / req.body
                  → do your logic (find/add/change data)
                     → res.json(...)  → answer sent
```

Everything is: **match a route → read the request → send a response.** That's the
entire job. The rest is just JavaScript you already know.
