# Exercise 9 — push()

**Trains:** `push()` · adding to the end without counting
**Difficulty:** 🟢 Easy

## What you're solving

This is the fix for Exercise 5's annoyance. `push()` adds to the end of an array
without you knowing or caring how long it is.

It's your first **array method** — a function that lives on the array itself and
operates on it. `push()` changes the original array in place; it does not hand
you a new one. That "mutates in place" behaviour is worth noting, because Phase 5's
`map()` does the exact opposite and the contrast is the whole lesson there.

## Starter data

```javascript
let animals = ["cat", "dog"];
```

Add `bird` using `push()`.

## Expected output

```javascript
["cat", "dog", "bird"]
```

## Requirements

- Use `push()` — no index assignment
- Print the array afterwards to see the change

## Hint

<details>
<summary>Show hint</summary>

```javascript
things.push("newValue");
```

Note you don't assign the result anywhere. `animals.push("bird")` modifies
`animals` directly. Writing `animals = animals.push("bird")` is a classic
beginner bug — it throws away your array and leaves you with a number.

</details>
