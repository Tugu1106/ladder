# Exercise 17 — Movie Database

**Trains:** filter then map · reading the output shape
**Difficulty:** 🟢 Easy

## What you're solving

Filter on rating, return **titles** — the expected output is `["A","C"]`, strings,
which tells you a `map()` follows the filter.

Getting into the habit of reading the output shape first is worth more than it
sounds. `["A","C"]` means filter-then-map. `[{title:"A",...}]` would mean filter
alone. The shape dictates the pipeline.

## Starter data

```javascript
const movies = [{title:"A",rating:8},{title:"B",rating:5},{title:"C",rating:9}];
```

Find movies rating >= 8. Return: `["A","C"]`

## Expected output

```javascript
["A", "C"]
```

## Requirements

- `filter()` then `map()`
- `>= 8` — A's exactly-8 rating stays
- Strings out, not objects

## Hint

<details>
<summary>Show hint</summary>

```javascript
const top = movies
  .filter(movie => movie.rating >= 8)
  .map(movie => movie.title);
```

`>=` keeps A. With `>` you'd get `["C"]` — the boundary bug from Phase 6's
Exercise 15.

</details>
