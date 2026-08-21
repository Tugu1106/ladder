// Challenge 4 — Movie Database ⭐⭐⭐⭐
// Instructions: 04-movie-database.md
//
// ⚠️  The spec shows getGenreStatistics() -> {"sci-fi":5,"drama":3}, but the
//     original data has ONE movie. Those numbers are illustrative — they show
//     the SHAPE, not the answer. The expanded data below makes it meaningful.
//
// NEW WRINKLE: genres and actors are ARRAYS inside each object. One movie has
// many genres; one genre has many movies. That's many-to-many, and it changes
// how you search.
//
// findActorMovies("Matthew") can't use === — movie.actors is a LIST, not a
// value. You need movie.actors.includes(actor): "is this name anywhere in
// that array". That's includes() on an ARRAY, not a string. Phase 6 used the
// string version for substring search; this is exact membership. Same name,
// different method, different job.
//
//   getTopRatedMovies()  -> rating > 8  (STRICT — an 8 does NOT qualify.
//                                        Different from every earlier >= 8.
//                                        Read the spec, not your memory.)
//   getGenreStatistics() -> { 'sci-fi': 2, drama: 2, war: 1 }
//                           A movie in two genres counts in BOTH — flatMap
//                           over genres, then it's a plain Phase 7 tally.
//   findActorMovies(actor)

const movies = [
  { title: "Interstellar", rating: 9, genres: ["sci-fi", "drama"], actors: ["Matthew", "Anne"] },
  { title: "Dunkirk", rating: 8, genres: ["drama", "war"], actors: ["Tom", "Harry"] },
  { title: "Arrival", rating: 7, genres: ["sci-fi"], actors: ["Amy", "Jeremy"] }
];

function getTopRatedMovies() {
  // rating > 8 — so Dunkirk's 8 is OUT
}

function getGenreStatistics() {
  // { 'sci-fi': 2, drama: 2, war: 1 }
}

function findActorMovies(actor) {
  // movies this actor appears in
}

// console.log(getTopRatedMovies());
// console.log(getGenreStatistics());
// console.log(findActorMovies("Matthew"));
