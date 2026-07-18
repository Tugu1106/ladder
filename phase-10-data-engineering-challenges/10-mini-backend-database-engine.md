# Challenge 10 — Mini Backend Database Engine ⭐⭐⭐⭐⭐⭐

**Trains:** everything · relational joins · cascading deletes
**Difficulty:** ⭐⭐⭐⭐⭐⭐ Final Boss

## ⚠️ Note on the expected values

`generateStatistics()` → `{ users:10, posts:50, comments:200, averageLikes:30 }` is
**shape, not values** — the starter data has one of each. Your real numbers will be
`{ users:1, posts:1, comments:1, averageLikes:20 }` unless you add data.

## What you're solving

The final boss, and a genuinely different kind of problem from everything before.

Until now, related data was **nested** — orders contained items, users contained
posts. Here it's **relational**: three flat lists connected by IDs. `posts` has a
`userId`. `comments` has a `postId`. Nothing contains anything.

That's how real databases store things, and it's the better design. Nesting
duplicates data and makes updates a nightmare — change a user's name and you'd
have to find every copy of it. IDs mean one source of truth.

The cost is that you must **join** to get anything useful. `getUserProfile(1)`
walks two hops: find the user, find posts where `userId === 1`, then for each post
find comments where `postId === post.id`. That's a SQL `JOIN`, by hand.

`deleteUser(id)` is the other side of that coin. Delete a user and their posts
still exist, pointing at nobody. Their comments too. Those are **orphans**, and
preventing them is exactly what `ON DELETE CASCADE` does in a real database.
You're implementing it yourself.

Take your time. This one is worth days, not hours.

## Starter data

```javascript
const database = {
  users: [{ id:1, name:"Alex" }],
  posts: [{ userId:1, title:"Hello", likes:20 }],
  comments: [{ postId:1, text:"Nice" }]
};
```

**Note:** `posts` has no `id` field, yet `comments.postId` refers to one. Add `id`
to posts or the join can't work:

```javascript
const database = {
  users: [{ id:1, name:"Alex" }, { id:2, name:"Sara" }],
  posts: [
    { id:1, userId:1, title:"Hello", likes:20 },
    { id:2, userId:1, title:"Second", likes:40 },
    { id:3, userId:2, title:"Hi", likes:5 }
  ],
  comments: [
    { postId:1, text:"Nice" },
    { postId:1, text:"Agreed" },
    { postId:2, text:"Good one" }
  ]
};
```

## Build these

**`getUserProfile(id)`** → `{ name, posts:[{title, likes, comments}] }`

**`deleteUser(id)`** — removes the user, their posts, and those posts' comments

**`getMostPopularPost()`** — ranked by `likes + comments.length`

**`generateStatistics()`** → `{ users, posts, comments, averageLikes }`

## Expected output

With the expanded data:

```javascript
{
  name: 'Alex',
  posts: [
    { title: 'Hello', likes: 20, comments: [ 'Nice', 'Agreed' ] },
    { title: 'Second', likes: 40, comments: [ 'Good one' ] }
  ]
}
{ id: 2, userId: 1, title: 'Second', likes: 40 }
{ users: 2, posts: 3, comments: 3, averageLikes: 21.666666666666668 }
```

## Toolbox

- 🎯 **Focus:** relational joins by ID (filter-inside-map) · cascading deletes
- ✅ **Allowed:** `.find()` · `.filter()` · `.map()` · `.reduce()` · `.includes()`
- ❌ **Not allowed:** `for` / `while` loops — in `deleteUser`, capture the post IDs
  *before* deleting posts or comments become orphans; filters keep what `!==` matches.

## Requirements

- No `for` loops
- `getUserProfile` joins two levels
- `deleteUser` must leave **no orphans**
- `getMostPopularPost` combines likes with comment count
- Decide mutate vs. return-new for `deleteUser`, and say which

## Hint

<details>
<summary>Show hint</summary>

Build a comment-lookup helper first — you'll want it twice:

```javascript
const commentsFor = postId => database.comments.filter(c => c.postId === postId);
```

**getUserProfile** — two hops outward from the user:

```javascript
function getUserProfile(id) {
  const user = database.users.find(u => u.id === id);
  if (!user) return null;

  return {
    name: user.name,
    posts: database.posts
      .filter(post => post.userId === id)
      .map(post => ({
        title: post.title,
        likes: post.likes,
        comments: commentsFor(post.id).map(c => c.text)
      }))
  };
}
```

Filter posts by `userId`, then for each post filter comments by `postId`. That
filter-inside-map **is** the join.

**deleteUser** — order matters enormously. Capture the post IDs *before* deleting
the posts, or you'll have nothing left to match comments against:

```javascript
function deleteUser(id) {
  const postIds = database.posts
    .filter(p => p.userId === id)
    .map(p => p.id);                      // ← capture FIRST

  database.users = database.users.filter(u => u.id !== id);
  database.posts = database.posts.filter(p => p.userId !== id);
  database.comments = database.comments.filter(c => !postIds.includes(c.postId));
}
```

Delete the posts first and `postIds` comes back empty — the comments survive as
orphans pointing at posts that no longer exist. That's the cascade bug, and it's
why real databases make you declare this behaviour explicitly.

The filters keep what **doesn't** match (`!==`) — Phase 6's "remove means keep the
opposite", now with real consequences.

**getMostPopularPost:**

```javascript
function getMostPopularPost() {
  const score = post => post.likes + commentsFor(post.id).length;
  return database.posts.reduce((best, p) => score(p) > score(best) ? p : best);
}
```

Hello scores 20 + 2 = 22. Second scores 40 + 1 = 41. Second wins despite Hello
having more comments — so "a like and a comment are worth the same" is a decision
you just made. Weight them differently and the winner can change.

**generateStatistics:**

```javascript
function generateStatistics() {
  return {
    users: database.users.length,
    posts: database.posts.length,
    comments: database.comments.length,
    averageLikes:
      database.posts.reduce((sum, p) => sum + p.likes, 0) / database.posts.length
  };
}
```

(20 + 40 + 5) / 3 = 21.67.

If you finish this — the join, the cascade, and the composite ranking — you have
the core of what a backend actually does with data. That's the end of the course.

</details>
