// Challenge 9 — GitHub Repository Analyzer ⭐⭐⭐⭐⭐
// Instructions: 09-github-repository-analyzer.md
//
// ⚠️  The spec's leaderboard [{name:"Alex",score:500}] isn't derivable —
//     commits are 50 and stars belong to the REPO, not to Alex. Treat it as
//     SHAPE, not value: a sorted array of {name, score}. Define the score
//     yourself and say what you chose. A second repo is added below so ranking
//     means something.
//
// The first challenge needing sort(). Three things about it that bite:
//
//   1. IT MUTATES. array.sort() reorders the original in place AND returns it.
//      Unlike every method since Phase 5, this one damages its input.
//      Copy first with [...array] if that matters.
//
//   2. IT'S ALPHABETICAL BY DEFAULT. [10, 9, 100].sort() gives [10, 100, 9],
//      because it converts to strings. For numbers you must pass a comparator.
//
//   3. THE COMPARATOR READS BACKWARDS. (a, b) => b.score - a.score sorts
//      DESCENDING. Negative puts a first, positive puts b first.
//
//   1. most popular repo (stars + forks) -> project-b (1100 beats 600)
//      A COMPOSITE SCORE — stars alone would pick project-a. The composite
//      flips it. Real ranking systems do this, and the weights are arguable.
//   2. most active contributor -> Alex
//   3. total commits -> 100
//   4. developer leaderboard -> [{name:'Alex',score:70},{name:'Sara',score:30}]
//
// THE REAL TRAP: Alex is in BOTH repos. His 50 and 20 must COMBINE into 70.
// Flatten, then tally BY NAME — reducing over contributors without tallying
// would treat Alex-in-repo-a and Alex-in-repo-b as two different people.
//
// Object.values() and Object.entries() are the bridge from a tally object back
// to array methods. Object.entries() gives [["Alex",70],["Sara",30]], and
// ([name, score]) destructures each pair.

const repositories = [
  {
    name: "project-a",
    stars: 500,
    forks: 100,
    contributors: [{ name: "Alex", commits: 50 }, { name: "Sara", commits: 30 }]
  },
  {
    name: "project-b",
    stars: 200,
    forks: 900,
    contributors: [{ name: "Alex", commits: 20 }]
  }
];

// --- your code below ---
