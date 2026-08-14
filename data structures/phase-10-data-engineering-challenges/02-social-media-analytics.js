// Challenge 2 — Social Media Analytics ⭐⭐⭐⭐
// Instructions: 02-social-media-analytics.md
//
// Posts nested inside users. Four questions of increasing subtlety.
//
//   Task 1 — user with most likes -> Alex
//   Task 2 — total platform likes -> 170  (Alex 150 + John 20)
//   Task 3 — average likes per POST -> 170 / 3 = 56.666666666666664
//            CAREFUL: divide by POST count (3), not user count (2).
//            Dividing by users.length gives 85 — wrong.
//   Task 4 — engagement score per user = (likes + comments) / followers
//            Alex: (150 + 30) / 1000 = 0.18
//            John: (20 + 5) / 500  = 0.05
//
// Task 4 is the real challenge — it's a RATIO, not a total, and ratios rank
// differently than raw numbers. Alex wins both ways here. But imagine a user
// with 10 followers and 9 interactions: 0.9, ten times Alex's engagement,
// despite being 20x smaller.
//
// That's why engagement rate exists as a metric: it measures how INTERESTING
// an account is, not how big. Large accounts routinely have terrible
// engagement.

const users = [
  {
    name: "Alex",
    followers: 1000,
    posts: [
      { likes: 100, comments: 20 },
      { likes: 50, comments: 10 }
    ]
  },
  {
    name: "John",
    followers: 500,
    posts: [{ likes: 20, comments: 5 }]
  }
];

// --- Task 1: user with most likes ---


// --- Task 2: total platform likes ---


// --- Task 3: average likes per post ---


// --- Task 4: engagement score per user ---
