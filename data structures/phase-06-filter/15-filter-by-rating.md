# Exercise 15 — Filter By Rating

**Trains:** an inclusive threshold
**Difficulty:** 🟢 Easy

## What you're solving

Another threshold — but this one has a boundary case **in the data**, which the
last few didn't.

Movie A has rating exactly 8, and the spec says `>= 8`. So A is kept. Use `>` and
you'd get only C, and the difference is visible in your output. That's the value
of a boundary in the test data: the mistake can't hide.

## Starter data

```javascript
const movies = [{title:"A",rating:8},{title:"B",rating:5},{title:"C",rating:9}];
```

Keep movies with rating >= 8.

## Expected output

```javascript
[
  { title: 'A', rating: 8 },
  { title: 'C', rating: 9 }
]
```

## Toolbox

- 🎯 **Focus:** an inclusive threshold with a boundary case *in the data* (`>= 8`)
- ✅ **Allowed:** `.filter()` · dot notation · comparison · `console.log()`
- ❌ **Not allowed:** `.map()` · loops — this time `>` visibly loses movie A, so
  the operator choice actually shows in the output.

## Requirements

- Use `filter()`
- `>=` — A's exactly-8 rating must survive
- Two movies in the result

## Hint

<details>
<summary>Show hint</summary>

```javascript
const top = movies.filter(movie => movie.rating >= 8);
```

If you get only `C`, you used `>`. This is the boundary bug from Exercises 4 and
6, finally with data that catches it.

</details>
