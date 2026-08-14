// Project 20 — Final Boss: Personal Life OS Data Engine ⭐⭐⭐⭐
// Instructions: 20-personal-life-os-boss.md
//
// Two genuine traps. Read carefully before coding.
//
// TRAP 1 — the percentage. 2 completed out of 3 is 66.666...%. The spec says
// "66%". Math.round(66.67) gives 67, NOT 66 — you need Math.floor() to
// truncate. And it's a STRING with a % on the end, not a number.
//
//   Math.floor((completed / habits.length) * 100) + "%"
//
// TRAP 2 — learning: 0. Look at the expected categories. Reading is NOT
// completed, yet `learning` still appears with a count of 0. So you can't
// filter to completed habits and group those — learning would vanish entirely.
//
// You need TWO things inside the reduce:
//   1. create the key for EVERY habit (even at 0)  <- keeps learning in
//   2. only increment for completed ones
//
// That's a real reporting problem. A dashboard showing "health: 1, career: 1"
// and silently omitting learning tells a different story than one showing
// "learning: 0". Missing and zero are not the same.
//
// Expected output:
//   {
//     completedHabits: 2,
//     completionRate: '66%',
//     categories: { health: 1, career: 1, learning: 0 }
//   }

const habits = [
  { name: "Workout", completed: true, category: "health" },
  { name: "Coding", completed: true, category: "career" },
  { name: "Reading", completed: false, category: "learning" }
];

function generateDashboard() {
  // returns { completedHabits, completionRate, categories }
}

// console.log(generateDashboard());
