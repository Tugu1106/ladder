# Exercise 19 — Social Media Analytics ⭐

**Trains:** a sum and a maximum in one report
**Difficulty:** ⭐⭐

## What you're solving

Two different kinds of question about the same data: a **total** and a **winner**.

`reduce()` does both, which is the point. Summing and finding a maximum look
unrelated, but they're the same machine with different callbacks — one accumulates
a number, the other holds the best candidate so far.

`topPost` is the **author's name**, not the post object. Read the expected output.

## Starter data

```javascript
const posts = [{author:"Alex",likes:100},{author:"John",likes:50},{author:"Sarah",likes:200}];
```

Find: total likes, most liked post.

### Expected

```javascript
{ totalLikes:350, topPost:"Sarah" }
```

## Expected output

```javascript
{ totalLikes: 350, topPost: 'Sarah' }
```

## Requirements

- `totalLikes` sums all three: 350
- `topPost` is the author name of the highest-liked post
- No `sort()` — use `reduce()`
- One object out

## Hint

<details>
<summary>Show hint</summary>

```javascript
const totalLikes = posts.reduce((sum, post) => sum + post.likes, 0);

const top = posts.reduce((best, post) => post.likes > best.likes ? post : best);

const report = { totalLikes, topPost: top.author };
```

100 + 50 + 200 = 350.

The second reduce holds the whole **post** as its accumulator, so `.author` is
available at the end. Holding just the likes number would give you `200` and no
way back to Sarah — Phase 7's Exercise 10 makes the same point.

`{ totalLikes, topPost: top.author }` — shorthand for the first, explicit for the
second since the names differ.

Sorting descending and taking `[0]` also works, but sorting is O(n log n) to
answer a question one pass can.

</details>
