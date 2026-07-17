// Project 16 — Social Media System ⭐
// Instructions: 16-social-media-system.md
//
// getMostLikedPost returns the POST OBJECT, not the author's name — read the
// function name. It says "post". Phase 8's Ex 19 asked for a name; this asks
// for the post. Nearly the same problem, different return shape, and the name
// tells you which.
//
// Naming is a real skill. getMostLikedPost() returning an author string would
// be a small lie, and small lies in function names cost hours later.
//
// Returning the whole post lets the caller take .author or .likes as they
// please. Generally: return the richest thing you have, let the caller narrow.
//
// Expected output:
//   { author: 'Alex', likes: 100 }
//   150

const posts = [
  { author: "Alex", likes: 100 },
  { author: "John", likes: 50 }
];

function getMostLikedPost() {
  // returns the whole post object
}

function getTotalLikes() {
  // 100 + 50 = 150
}

// console.log(getMostLikedPost());   // { author: 'Alex', likes: 100 }
// console.log(getTotalLikes());      // 150
