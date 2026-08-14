# Project 16 — Social Media System ⭐

**Trains:** a maximum and a sum, as functions
**Difficulty:** ⭐

## What you're solving

Phase 8's Exercise 19, now packaged as named functions.

`getMostLikedPost()` returns the **post object**, not the author's name — read the
function name. It says "post". Phase 8 asked for `topPost: "Sarah"`, a name; this
asks for the post. Nearly the same problem, different return shape, and the name
tells you which.

Naming is a real skill. `getMostLikedPost()` returning an author string would be
a small lie, and small lies in function names cost hours later.

## Starter data

```javascript
const posts = [{author:"Alex",likes:100},{author:"John",likes:50}];
```

## Build these

**`getMostLikedPost()`** → the post object with the most likes

**`getTotalLikes()`** → `150`

## Expected output

```javascript
{ author: 'Alex', likes: 100 }
150
```

## Toolbox

- 🎯 **Focus:** a max and a sum as functions · returning the richest thing (the object)
- ✅ **Allowed:** `function` · `.reduce()` · ternary · comparison
- ❌ **Avoid:** `.sort()` · returning just the author — the name says "post", so
  return the whole post and let the caller narrow it.

## Requirements

- `getMostLikedPost` returns the whole post object
- `getTotalLikes` returns a number: 100 + 50 = 150
- No `sort()`

## Hint

<details>
<summary>Show hint</summary>

```javascript
function getMostLikedPost() {
  return posts.reduce((best, post) => post.likes > best.likes ? post : best);
}

function getTotalLikes() {
  return posts.reduce((sum, post) => sum + post.likes, 0);
}
```

The first reduce has **no initial value** — it uses `posts[0]` and starts from the
second post. Convenient, but it throws on an empty array. `posts[0]` as an
explicit seed is the safer habit.

Returning the whole post means the caller can take `.author` or `.likes` as they
please. Returning just the name would throw away information they might want —
generally, return the richest thing you have and let the caller narrow it.

</details>
