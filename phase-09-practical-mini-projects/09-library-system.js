// Project 9 — Library System
// Instructions: 09-library-system.md
//
// searchBook(title) is the first function here that takes a PARAMETER — a
// real step up. Everything so far read `books` from the outer scope and always
// did the same thing. This one behaves differently depending on what you pass.
//
// Decide what a MISS returns: undefined? null? The spec doesn't say, so choose
// deliberately and be consistent. "What happens when there's no match" is a
// question real code must answer, and forgetting is where crashes come from.
//
// find() does what filter(...)[0] does but stops at the first match.
// Phase 3's Ex 13 made you write it by hand with a loop and a break.
//
// Expected output:
//   [ { title: 'Book A', available: true } ]
//   { title: 'Book A', available: true }

const books = [
  { title: "Book A", available: true },
  { title: "Book B", available: false }
];

function getAvailableBooks() {
  // available: true
}

function searchBook(title) {
  // find a book by title — takes the title as a parameter
}

// console.log(getAvailableBooks());
// console.log(searchBook("Book A"));
// console.log(searchBook("Book Z"));   // your call: undefined? null?
