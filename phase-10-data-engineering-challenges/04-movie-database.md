# Challenge 4 — Movie Database ⭐⭐⭐⭐

**Trains:** arrays inside objects · `includes()` on arrays · counting across nesting
**Difficulty:** ⭐⭐⭐⭐

## ⚠️ Note on the expected values

The spec shows `getGenreStatistics()` → `{"sci-fi":5,"drama":3}`, but the starter
data has **one movie**. Those numbers are illustrative — they show the *shape*,
not the answer for this data.

With one movie you'd get `{"sci-fi":1,"drama":1}`. Either add more movies to make
it interesting (recommended) or accept the small result.

## What you're solving

New wrinkle: `genres` and `actors` are **arrays inside each object**. One movie
has many genres; one genre has many movies. That's a many-to-many relationship,
and it changes how you search.

`findActorMovies("Matthew")` can't compare with `===` — `movie.actors` is a list,
not a value. You need `movie.actors.includes(actor)`, asking "is this name
anywhere in that array."

That's `includes()` on an **array**, not a string. Phase 6 used the string version
for substring search; this is exact membership. Same name, different method,
different job.

## Starter data

```javascript
const movies = [{ title:"Interstellar", rating:9, genres:["sci-fi","drama"], actors:["Matthew","Anne"] }];
```

Consider adding a couple more so the statistics mean something:

```javascript
const movies = [
  { title:"Interstellar", rating:9, genres:["sci-fi","drama"], actors:["Matthew","Anne"] },
  { title:"Dunkirk", rating:8, genres:["drama","war"], actors:["Tom","Harry"] },
  { title:"Arrival", rating:7, genres:["sci-fi"], actors:["Amy","Jeremy"] }
];
```

## Tasks

**`getTopRatedMovies()`** — rating > 8

**`getGenreStatistics()`** → how many movies per genre

**`findActorMovies(actor)`** → `findActorMovies("Matthew")` → `[Interstellar]`

## Expected output

With the three-movie data above:

```javascript
[{ title: 'Interstellar', rating: 9, ... }]
{ 'sci-fi': 2, drama: 2, war: 1 }
[{ title: 'Interstellar', ... }]
```

## Requirements

- No `for` loops
- `getTopRatedMovies` uses `> 8` strictly — an 8 does **not** qualify
- A movie in two genres counts in **both**
- `findActorMovies` takes the actor as a parameter

## Hint

<details>
<summary>Show hint</summary>

```javascript
function getTopRatedMovies() {
  return movies.filter(movie => movie.rating > 8);
}
```

`> 8` not `>=` — the spec says "rating > 8", so Dunkirk's 8 is out. Different from
every earlier `>= 8`; read the spec, not your memory.

Genre statistics — each movie contributes to **several** keys:

```javascript
function getGenreStatistics() {
  return movies
    .flatMap(movie => movie.genres)
    .reduce((stats, genre) => {
      stats[genre] = (stats[genre] || 0) + 1;
      return stats;
    }, {});
}
```

`flatMap` over `genres` turns `[["sci-fi","drama"],["drama","war"],["sci-fi"]]`
into `["sci-fi","drama","drama","war","sci-fi"]` — then it's Phase 7's plain
tally. Interstellar being in two genres is handled automatically, because it
contributed two entries.

```javascript
function findActorMovies(actor) {
  return movies.filter(movie => movie.actors.includes(actor));
}
```

`movie.actors.includes(actor)` — array membership, exact match, case-sensitive.

</details>
