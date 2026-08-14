# Project 6 — Movie Database

**Trains:** filtering by rating · rounding for display
**Difficulty:** ⭐

## What you're solving

Top movies and an average — and the average is where it gets interesting.

(9 + 7 + 9) ÷ 3 = 8.333333333333334. The spec wants `8.3`. So you need
`toFixed(1)`, which rounds to one decimal place.

But `toFixed()` returns a **string**, not a number. `"8.3"`, with quotes. That's
usually right — this is a display value, and you've stopped doing arithmetic on
it. Just know which you're holding: `toFixed(1) + 1` gives `"8.31"`, not `9.3`.

Format at the end, never in the middle. Phase 8's Exercise 7 makes the same point.

## Starter data

```javascript
const movies = [{title:"Interstellar",rating:9},{title:"Avatar",rating:7},{title:"Inception",rating:9}];
```

## Build these

**`getTopMovies()`** — rating >= 8

**`getAverageRating()`** → `8.3`

## Expected output

```javascript
[
  { title: 'Interstellar', rating: 9 },
  { title: 'Inception', rating: 9 }
]
8.3
```

## Toolbox

- 🎯 **Focus:** rounding for display with `.toFixed(1)` (returns a *string*)
- ✅ **Allowed:** `function` · `.filter()` · `.reduce()` · `.toFixed()` · loops if needed
- ❌ **Avoid:** formatting mid-calculation — do the maths first, then `toFixed`;
  parenthesise `(total / movies.length).toFixed(1)`. Divide by `.length`, not `3`.

## Requirements

- `getTopMovies` uses `>= 8` — Avatar's 7 is out
- `getAverageRating` rounds to one decimal
- Divide by `.length`, not a hardcoded 3

## Hint

<details>
<summary>Show hint</summary>

```javascript
function getTopMovies() {
  return movies.filter(movie => movie.rating >= 8);
}

function getAverageRating() {
  const total = movies.reduce((sum, m) => sum + m.rating, 0);
  return (total / movies.length).toFixed(1);
}
```

Parentheses around the division — `total / movies.length.toFixed(1)` would call
`toFixed` on the length. Do the maths, then format the result.

`Number((total / movies.length).toFixed(1))` gives you back a real number if you
want one.

`getTopMovies` returns whole objects — nothing says to pluck titles.

</details>
