# Challenge 2 — Social Media Analytics ⭐⭐⭐⭐

**Trains:** nested reduce · statistics · derived metrics
**Difficulty:** ⭐⭐⭐⭐

## What you're solving

Posts nested inside users, and four questions of increasing subtlety.

The last one is the real challenge. **Engagement score** = `(likes + comments) / followers`
— a *ratio*, not a total. And ratios rank differently than raw numbers.

Alex has 1000 followers and 180 total interactions → 0.18. John has 500 followers
and 25 → 0.05. Alex wins both ways here. But imagine a user with 10 followers and
9 interactions: 0.9, ten times Alex's engagement, despite being 20× smaller.

That's why engagement rate exists as a metric — it measures how *interesting* an
account is, not how big. Big accounts routinely have terrible engagement. This is
a genuine analytics concept, not an arithmetic exercise.

## Starter data

```javascript
const users = [
  { name:"Alex", followers:1000, posts:[{likes:100,comments:20},{likes:50,comments:10}] },
  { name:"John", followers:500, posts:[{likes:20,comments:5}] }
];
```

## Tasks

1. User with most likes
2. Total platform likes
3. Average likes per post
4. Engagement score per user = `(likes + comments) / followers`

## Expected output

```javascript
Alex
170
56.666666666666664
[ { name: 'Alex', engagement: 0.18 }, { name: 'John', engagement: 0.05 } ]
```

## Toolbox

- 🎯 **Focus:** a derived *ratio* metric (engagement = interactions / followers)
- ✅ **Allowed:** `.map()` · `.filter()` · `.reduce()` · `.flatMap()`
- ❌ **Not allowed:** `for` / `while` loops — Task 3's denominator is post count
  (`flatMap` the posts), not user count; a ratio ranks differently than a total.

## Requirements

- No `for` loops
- Task 3 divides by **post count** (3), not user count (2)
- Task 4 sums both likes and comments per user before dividing

## Hint

<details>
<summary>Show hint</summary>

A helper for a user's likes:

```javascript
const userLikes = user => user.posts.reduce((sum, p) => sum + p.likes, 0);
```

**Task 1:**

```javascript
const mostLiked = users.reduce(
  (best, u) => userLikes(u) > userLikes(best) ? u : best
).name;
```

**Task 2** — Alex 150 + John 20 = 170:

```javascript
const totalLikes = users.reduce((sum, u) => sum + userLikes(u), 0);
```

**Task 3** — careful with the denominator. There are **3 posts** across 2 users:

```javascript
const allPosts = users.flatMap(u => u.posts);
const avgLikes = totalLikes / allPosts.length;      // 170 / 3
```

Dividing by `users.length` gives 85 — wrong. "Per post" means per post.

**Task 4:**

```javascript
const engagement = users.map(u => {
  const interactions = u.posts.reduce((sum, p) => sum + p.likes + p.comments, 0);
  return { name: u.name, engagement: interactions / u.followers };
});
```

Alex: (150 + 30) / 1000 = 0.18. John: (20 + 5) / 500 = 0.05.

170/3 prints as `56.666666666666664` — floating point being honest. `toFixed(1)`
if you want `56.7`, but only for display.

</details>
