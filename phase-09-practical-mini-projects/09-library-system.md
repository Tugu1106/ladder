# Project 9 — Library System

**Trains:** a function that takes an argument
**Difficulty:** 🟢 Easy

## What you're solving

`searchBook("Book A")` is the first function here that takes a **parameter** —
and that's a real step up.

Every function so far read `books` from the outer scope and always did the same
thing. This one does something different depending on what you pass it. That's
what makes a function reusable rather than just a named block of code.

Decide what it returns when nothing matches. `undefined`? An empty array? `null`?
The spec doesn't say, so choose deliberately and be consistent — "what happens
when there's no match" is a question real code has to answer, and forgetting to
is where crashes come from.

## Starter data

```javascript
const books = [{title:"Book A",available:true},{title:"Book B",available:false}];
```

## Build these

**`getAvailableBooks()`** — books with `available: true`

**`searchBook(title)`** — find a book by title

```javascript
searchBook("Book A")   // { title: "Book A", available: true }
searchBook("Book Z")   // ← your call. undefined? null?
```

## Expected output

```javascript
[{ title: 'Book A', available: true }]
{ title: 'Book A', available: true }
```

## Requirements

- `searchBook` takes the title as a parameter — don't hardcode it
- Decide and document what a miss returns
- `getAvailableBooks` takes no arguments

## Hint

<details>
<summary>Show hint</summary>

```javascript
function getAvailableBooks() {
  return books.filter(book => book.available);
}

function searchBook(title) {
  return books.filter(book => book.title === title)[0];
}
```

`filter(...)[0]` gives the first match, or `undefined` if the array is empty —
a reasonable "not found".

`find()` does exactly this and stops at the first match instead of scanning
everything:

```javascript
function searchBook(title) {
  return books.find(book => book.title === title);
}
```

Phase 3's Exercise 13 made you write this by hand with a loop and a `break`.
`find()` is that, built in. Phase 10's rules allow it.

</details>
