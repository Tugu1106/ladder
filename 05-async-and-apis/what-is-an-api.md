# What Is an API? — Simple Explainer

## The one-line answer

**An API is a way for your program to ask another program for data (or to do
something), over the internet.**

When your weather app shows the temperature, it didn't *know* the temperature —
it **asked a weather company's server** for it, over the internet, through their
API. That "asking and getting data back" is the whole idea.

## The restaurant analogy (the classic one)

Imagine a restaurant:

- **You** = your app (the frontend)
- **The kitchen** = the server (where the data lives — you can't go in there)
- **The waiter** = the **API**
- **The menu** = the list of things you're allowed to ask for (the endpoints)

You don't walk into the kitchen and cook. You tell the **waiter** ("I'd like the
weather for London"), the waiter carries your **request** to the kitchen, and
brings back a **response** (the data). The **API is the waiter** — the messenger
between you and the server.

## The request → response cycle

Every API call is two steps:

```
YOUR APP  ── request ──▶  SERVER
YOUR APP  ◀── response ──  SERVER
```

1. **Request:** your app asks for something (usually by hitting a **URL**).
2. **Response:** the server sends back **data** (usually as **JSON**).

That's it. You send a request, you get data back.

## The URL (endpoint)

You ask the API by hitting a **URL** — called an **endpoint**. Each URL is a
different "thing you can ask for":

```
https://api.example.com/weather?city=London     → the weather for London
https://api.example.com/users                    → a list of users
https://api.example.com/users/5                  → the user with id 5
```

The URL *is* the question. Hit it, get data back.

## HTTP methods (the kind of request)

Requests come in types. You'll mostly use the first one for a long time:

| Method | Means | Example |
| --- | --- | --- |
| **GET** | "give me data" | get the weather, get a list of posts |
| **POST** | "create something" | submit a form, add a new post |
| **PUT/PATCH** | "update something" | edit a post |
| **DELETE** | "remove something" | delete a post |

**`GET` = read data.** That's 90% of what you'll do at first, and `fetch` does a
GET by default.

## JSON — the data format

APIs send data back as **JSON** (JavaScript Object Notation) — which looks
*exactly* like a JavaScript object/array, because it basically is:

```json
{
  "city": "London",
  "temp": 15,
  "condition": "cloudy"
}
```

Your code turns that JSON text into a real JavaScript object you can use
(`data.temp` → `15`). You already know how to work with objects and arrays — so
once the JSON is in, it's just the data-structures skills you already have.

## What "calling an API" looks like in code

The whole thing, in one sentence of code (you'll learn each piece):

```javascript
const response = await fetch("https://api.example.com/users");  // ask
const data = await response.json();                              // read the JSON
console.log(data);                                               // use it
```

- **`fetch(url)`** — send the request to that URL
- **`await`** — wait for the response (the internet is slow — more on this next)
- **`.json()`** — turn the response into a usable JS object/array

## Why it feels new: the data arrives LATER

Here's the one genuinely new idea: **the internet is slow.** When you call an API,
the data doesn't come back *instantly* — it takes time (milliseconds to seconds).
Your code has to **wait** for it without freezing the whole app.

That "waiting for something that finishes later" is called **asynchronous** code,
and it's handled with **promises** and **async/await** — which is exactly what the
next cheatsheet and drills teach. Master that, and APIs are yours.

---

## Free public APIs to practice with (no signup, no key)

- `https://jsonplaceholder.typicode.com/users` — fake users (great for learning)
- `https://jsonplaceholder.typicode.com/posts` — fake blog posts
- `https://jsonplaceholder.typicode.com/todos/1` — a single fake todo
- `https://api.github.com/users/torvalds` — a real GitHub profile

Open any of those in your browser right now — you'll see the raw JSON the API
sends back. That's exactly what your code will receive.
