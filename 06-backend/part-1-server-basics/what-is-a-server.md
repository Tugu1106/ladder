# What Is a Server? — Simple Explainer

## The one-line answer

**A server is just a program that sits and waits, and answers requests.**

That's it. It's not a special computer, not magic hardware. It's a **program you
write** that starts up, waits for someone to ask it something (a "request"), and
sends back an answer (a "response"). Then it waits for the next one.

## You were the customer — now you're the kitchen

Remember the restaurant analogy from Phase 4?

- **You (React app)** = the customer
- **The API** = the waiter
- **The kitchen/server** = where the data lives — *"you can't go in there"*

For months you've been the **customer**: calling `fetch("https://api.github.com/...")`
and getting data back. You never thought about who *answered* — the kitchen was a
mystery.

**Backend is you walking into the kitchen and becoming the cook.** Now *you* write
the program that receives the request and decides what to send back.

```
BEFORE (Phase 4)         NOW (Phase 5)
your app  ──request──▶    YOUR server receives it
your app  ◀─response──    YOUR server decides the answer & sends it
```

## What "a server runs" actually means

When you run `node 01-hello-server.js`, your program does this:

```
1. starts up
2. "listens" on a PORT (like 3000) — think of a port as a door number
3. sits there, waiting  ...
4. someone hits http://localhost:3000/  → your code runs → sends a response
5. goes back to waiting for the next request
```

The key mind-shift: a normal script **runs top-to-bottom and exits.** A server
**starts and then stays alive**, waiting. It doesn't finish — it *listens*. (You
stop it with Ctrl+C.)

## localhost and ports

- **`localhost`** = "this computer, right here." When you run a server on your
  laptop, it lives at `localhost`. Only you can reach it (for now).
- **A port** = a numbered door on your computer. `localhost:3000` means "knock on
  door 3000 of this computer." Your React dev server used port 5174; your backend
  will use 3000. Different doors, different programs.

```
http://localhost:3000/users
        └───┬───┘ └┬┘ └─┬─┘
        this PC   door  what you're asking for (the route)
```

## The request → response cycle (from the OTHER side)

In Phase 4 you *sent* requests. Now you *receive* them. Every time a request comes
in, your server gets two things:

- **`req`** (request) — info about what they asked: which URL, which method (GET/POST),
  any data they sent.
- **`res`** (response) — the tool you use to *answer*: `res.json(...)`, `res.send(...)`.

Your whole job as a backend dev, boiled down:

```
a request comes in (req)  →  your code decides what to do  →  you send back a response (res)
```

## Routes — the different questions your server can answer

A **route** is one "URL + method" your server knows how to answer. Your server is
basically a big switchboard:

```
GET  /users        → send back the list of users
GET  /users/5      → send back user #5
POST /users        → create a new user
DELETE /users/5    → delete user #5
```

Each of those is a route. You write one handler per route. The Phase 4 endpoints you
*called* (`/users`, `/users/5`) — those existed because someone wrote routes exactly
like these. Now you write your own.

## What is Express?

**Node** can make a server on its own, but it's clunky. **Express** is a small
library that makes writing routes easy and clean. It's the standard tool — the vast
majority of Node backends use it. Think of Express as "Node servers, but pleasant."

```javascript
import express from "express";
const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello from my server!");
});

app.listen(3000);   // start listening on door 3000
```

Four lines and you have a running server. That's the whole magic — and it's your
first drill.

## The mental model

```
node server.js
   → app starts, listens on port 3000
      → waits ...
         → request comes in:  GET /hello
            → matching route runs its handler(req, res)
               → res.send("Hello!")  → answer flies back
                  → waits for the next request ...
```

**You call APIs (Phase 4). You BUILD APIs (Phase 5).** Same cycle, other side of the
counter. Master this, and you can build the whole thing — frontend *and* the server
it talks to.
