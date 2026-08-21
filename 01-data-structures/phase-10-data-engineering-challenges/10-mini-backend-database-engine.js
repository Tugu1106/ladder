// Challenge 10 — Mini Backend Database Engine ⭐⭐⭐⭐⭐⭐
// Instructions: 10-mini-backend-database-engine.md
//
// ⚠️  generateStatistics() -> {users:10, posts:50, ...} in the spec is SHAPE,
//     not values. Also: the original `posts` had no `id` field, yet
//     comments.postId refers to one — so the join was impossible. `id` is
//     added below, along with more rows so the queries mean something.
//
// The final boss, and a different KIND of problem from everything before.
//
// Until now, related data was NESTED — orders contained items. Here it's
// RELATIONAL: three flat lists connected by IDs. posts has a userId. comments
// has a postId. Nothing contains anything.
//
// That's how real databases store things, and it's the better design. Nesting
// duplicates data and makes updates a nightmare — change a user's name and
// you'd have to find every copy. IDs mean one source of truth.
//
// The cost is that you must JOIN. getUserProfile(1) walks two hops: find the
// user, find posts where userId === 1, then for each post find comments where
// postId === post.id. That filter-inside-map IS a SQL JOIN, by hand.
//
// deleteUser is the other side of that coin. Delete a user and their posts
// still exist, pointing at nobody. Their comments too. Those are ORPHANS, and
// preventing them is exactly what ON DELETE CASCADE does in a real database.
//
//   *** ORDER MATTERS IN deleteUser ***
//   Capture the post IDs BEFORE deleting the posts, or you'll have nothing
//   left to match comments against — and the comments survive as orphans.
//   That's the cascade bug, and it's why real databases make you declare this.
//
//   getUserProfile(id)     -> { name, posts: [{ title, likes, comments }] }
//   deleteUser(id)         -> no orphans. mutate or return-new? say which.
//   getMostPopularPost()   -> ranked by likes + comments.length
//                             Hello: 20 + 2 = 22.  Second: 40 + 1 = 41.
//                             Second wins despite Hello having more comments —
//                             so "a like and a comment are worth the same" is
//                             a decision you just made.
//   generateStatistics()   -> { users: 2, posts: 3, comments: 3,
//                               averageLikes: 21.666666666666668 }
//
// Build a helper first — you'll want it twice:
//   const commentsFor = postId => database.comments.filter(c => c.postId === postId);
//
// Take your time. This one is worth days, not hours. If you finish it — the
// join, the cascade, and the composite ranking — you have the core of what a
// backend actually does with data.

const database = {
  users: [
    { id: 1, name: "Alex" },
    { id: 2, name: "Sara" }
  ],
  posts: [
    { id: 1, userId: 1, title: "Hello", likes: 20 },
    { id: 2, userId: 1, title: "Second", likes: 40 },
    { id: 3, userId: 2, title: "Hi", likes: 5 }
  ],
  comments: [
    { postId: 1, text: "Nice" },
    { postId: 1, text: "Agreed" },
    { postId: 2, text: "Good one" }
  ]
};

function getUserProfile(id) {
  //
}

function deleteUser(id) {
  // capture post IDs BEFORE deleting the posts
}

function getMostPopularPost() {
  //
}

function generateStatistics() {
  //
}

// console.log(getUserProfile(1));
// console.log(getMostPopularPost());
// console.log(generateStatistics());
