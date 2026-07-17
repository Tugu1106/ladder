// Exercise 19 — Social Media Analytics ⭐
// Instructions: 19-social-media-analytics.md
//
// Goal: { totalLikes: 350, topPost: "Sarah" }   — no sort()
//
//       Two different kinds of question: a TOTAL and a WINNER. reduce() does
//       both — same machine, different callbacks. One accumulates a number,
//       the other holds the best candidate so far.
//
//       topPost is the AUTHOR'S NAME, not the post object. Read the output.
//
//       To get the name, reduce to the whole POST and take .author at the end.
//       Accumulating just the likes number would give you 200 and no way back
//       to Sarah.
//
// Expected output:
//   { totalLikes: 350, topPost: 'Sarah' }

const posts = [
  { author: "Alex", likes: 100 },
  { author: "John", likes: 50 },
  { author: "Sarah", likes: 200 }
];

// --- your code below ---
