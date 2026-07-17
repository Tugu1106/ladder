# Challenge 9 — GitHub Repository Analyzer ⭐⭐⭐⭐⭐

**Trains:** ranking · `sort()` · composite scores
**Difficulty:** ⭐⭐⭐⭐

## ⚠️ Note on the expected values

The spec shows the leaderboard as `[{name:"Alex",score:500}]` with one repo of 500
stars and Alex at 50 commits. Where `500` comes from isn't derivable — commits are
50, and stars belong to the repo, not to Alex. Treat it as **shape, not value**: a
sorted array of `{name, score}`.

Define the score yourself and say what you chose. That's part of the challenge.

## What you're solving

The first challenge needing **`sort()`** — a leaderboard is ordered, and none of
your other tools order things.

Three things about `sort()` that bite:

1. **It mutates.** `array.sort()` reorders the original in place *and* returns it.
   Unlike every method since Phase 5, this one damages its input. Copy first with
   `[...array]` if that matters.
2. **It's alphabetical by default.** `[10, 9, 100].sort()` gives `[10, 100, 9]`,
   because it converts to strings first. For numbers you must pass a comparator.
3. **The comparator reads backwards.** `(a, b) => b.score - a.score` sorts
   *descending*. Return negative to put `a` first, positive for `b`.

Also worth noticing: "most popular" is `stars + forks` — a **composite score**
folding two signals into one ranking. Real ranking systems do this constantly, and
the weighting is always arguable.

## Starter data

```javascript
const repositories = [{ name:"project-a", stars:500, forks:100, contributors:[{name:"Alex",commits:50}] }];
```

Add another so ranking means something:

```javascript
const repositories = [
  { name:"project-a", stars:500, forks:100, contributors:[{name:"Alex",commits:50},{name:"Sara",commits:30}] },
  { name:"project-b", stars:200, forks:900, contributors:[{name:"Alex",commits:20}] }
];
```

## Tasks

1. Most popular repository (`stars + forks`)
2. Most active contributor
3. Total commits
4. Developer leaderboard → `[{name, score}]`, sorted

## Expected output

With the two-repo data above, scoring by commits:

```javascript
project-b
Alex
100
[ { name: 'Alex', score: 70 }, { name: 'Sara', score: 30 } ]
```

## Requirements

- `sort()` is allowed here
- Most popular is `stars + forks` — project-b (1100) beats project-a (600)
- Alex appears in **both** repos — his commits must combine
- Leaderboard sorted highest first

## Hint

<details>
<summary>Show hint</summary>

Popularity — project-a is 600, project-b is 1100. Stars alone would pick
project-a; the composite flips it. That's the point of a composite:

```javascript
const mostPopular = repositories.reduce(
  (best, r) => r.stars + r.forks > best.stars + best.forks ? r : best
).name;
```

Alex being in **both** repos is the real trap. Flatten, then tally by name so his
50 and 20 combine into 70:

```javascript
const commitsByDev = repositories
  .flatMap(r => r.contributors)
  .reduce((tally, c) => {
    tally[c.name] = (tally[c.name] || 0) + c.commits;
    return tally;
  }, {});
// { Alex: 70, Sara: 30 }
```

Reducing over contributors without tallying by name would treat Alex-in-repo-a and
Alex-in-repo-b as two different people.

Total commits — 70 + 30 = 100:

```javascript
const totalCommits = Object.values(commitsByDev).reduce((a, b) => a + b, 0);
```

`Object.values()` gives an array of an object's values — the bridge from your
tally back to array methods.

The leaderboard:

```javascript
const leaderboard = Object.entries(commitsByDev)
  .map(([name, score]) => ({ name, score }))
  .sort((a, b) => b.score - a.score);
```

`Object.entries()` gives `[["Alex",70],["Sara",30]]`, and `([name, score])`
destructures each pair into two parameters. `b.score - a.score` is descending;
`a.score - b.score` would be ascending.

</details>
