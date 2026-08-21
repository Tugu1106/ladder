# Exercise 19 — Movie Database

**Trains:** formatting two fields into one display string
**Difficulty:** 🟢 Easy

## What you're solving

Objects to display strings, with punctuation that has to land exactly right.

Straightforward by now — worth doing quickly and cleanly as the warm-up before
the boss.

## Starter data

```javascript
const movies = [{title:"Interstellar",year:2014},{title:"Inception",year:2010},{title:"Avatar",year:2009}];
```

Create `["Interstellar (2014)","Inception (2010)","Avatar (2009)"]`.

## Expected output

```javascript
["Interstellar (2014)", "Inception (2010)", "Avatar (2009)"]
```

## Toolbox

- 🎯 **Focus:** formatting two fields into one display string with exact punctuation
- ✅ **Allowed:** `.map()` · template literals · `console.log()`
- ❌ **Not allowed:** `for` / `.forEach()` — the literal `(` and `)` sit outside
  the `${}`; `map()` also guarantees output order matches input order.

## Requirements

- Use `map()`
- Parentheses around the year, space before the opening one
- Order preserved

## Hint

<details>
<summary>Show hint</summary>

```javascript
const labels = movies.map(movie => `${movie.title} (${movie.year})`);
```

The parentheses in the output are literal characters sitting outside the `${}`.

`map()` never reorders — output position always matches input position. That
guarantee is why `map()` is safe to rely on.

</details>
