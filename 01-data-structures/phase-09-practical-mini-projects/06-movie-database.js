// Project 06 — Movie Database
// Instructions: 06-movie-database.md
//
// The average is where it gets interesting: (9+7+9)/3 = 8.333333333333334,
// and the spec wants 8.3. So you need toFixed(1), which rounds to one decimal.
//
// But toFixed() returns a STRING — "8.3", with quotes. Usually right, since
// this is a display value. Just know which you're holding: toFixed(1) + 1
// gives "8.31", not 9.3.
//
// Parentheses matter: (total / movies.length).toFixed(1)
// Without them you'd call toFixed on the length.
//
// getTopMovies returns whole objects — nothing says to pluck titles.
//
// Expected output:
//   [ { title: 'Interstellar', rating: 9 }, { title: 'Inception', rating: 9 } ]
//   8.3

const movies = [
  { title: "Interstellar", rating: 9 },
  { title: "Avatar", rating: 7 },
  { title: "Inception", rating: 9 },
];

function getTopMovies() {
  return movies.filter((movie) => movie.rating >= 8);
}

function getAverageRating() {
  return (
    movies.reduce((total, movie) => (total += movie.rating), 0) / movies.length
  ).toFixed(1);
}

console.log(getTopMovies());
console.log(getAverageRating()); // 8.3
