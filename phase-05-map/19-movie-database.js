// ✅ DONE — ran it, output correct.
// Exercise 19 — Movie Database
// Instructions: 19-movie-database.md
//
// Goal: create ["Interstellar (2014)", "Inception (2010)", "Avatar (2009)"]
//       Parentheses around the year, space before the opening one.
//
//       map() never reorders — output position always matches input position.
//       That guarantee is why map() is safe to rely on.
//
// Expected output:
//   [ 'Interstellar (2014)', 'Inception (2010)', 'Avatar (2009)' ]

const movies = [
  { title: "Interstellar", year: 2014 },
  { title: "Inception", year: 2010 },
  { title: "Avatar", year: 2009 },
];

// --- your code below ---

const movieDatabase = movies.map((movie) => `${movie.title} (${movie.year})`);
console.log(movieDatabase);
