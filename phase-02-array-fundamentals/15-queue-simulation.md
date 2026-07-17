# Exercise 15 — Queue Simulation

**Trains:** combining `push()` and `shift()` · the queue pattern
**Difficulty:** 🟢 Easy → ⭐

## What you're solving

A **queue** is first-in, first-out — like a real line of people. Join at the
back, leave from the front. `push()` and `shift()` together give you exactly that.

This is a genuine data structure, not a toy. Print jobs, task runners, and
message brokers all work this way. You've had the two methods since Exercises 9
and 13; the insight is that *combining* them produces a behaviour neither has
alone.

## Starter data

```javascript
let queue = ["John", "Jane", "Bob"];
```

A person joins: `Alice`. A person leaves. Use `push` and `shift`.

## Expected output

```javascript
["Jane", "Bob", "Alice"]
```

## Requirements

- Use `push()` for joining and `shift()` for leaving
- John leaves because he was first in line — not because you picked him
- Both operations, then print once

## Hint

<details>
<summary>Show hint</summary>

Alice joins the back. The person who leaves is whoever is at the front — that's
John, and `shift()` finds him without you naming him.

Order doesn't matter for the final result here, but do both operations before
printing.

If you'd used `pop()` instead of `shift()`, Bob would leave — that's a **stack**
(last-in, first-out), a different structure entirely.

</details>
