# Project 1 — Student Grade System ⭐

**Trains:** functions over data · arrays inside objects · reusing your own code
**Difficulty:** ⭐⭐

## What you're solving

Phase 9 changes the game. Until now you wrote expressions; now you write
**functions** — named, reusable, callable with different inputs.

That difference matters more than it looks. An expression answers one question
once. A function answers that question for any input, forever, and other code can
build on it. `getPassedStudents()` doesn't recalculate averages — it *calls*
`calculateAverage()`. Small functions composing into bigger ones is how real
programs are built.

Note the nesting: each student holds an **array** of grades. So `calculateAverage`
reduces over `student.grades`, not over `students`.

## Starter data

```javascript
const students = [
  {name:"Alex",grades:[80,90,70]},
  {name:"John",grades:[60,50,70]},
  {name:"Sarah",grades:[95,90,100]}
];
```

## Build these

**`calculateAverage(student)`** — takes one student, returns their average.

```javascript
calculateAverage(students[0])   // 80
```

**`getPassedStudents()`** — returns names of students averaging >= 70.

```javascript
getPassedStudents()             // ["Alex","Sarah"]
```

## Expected output

```javascript
80
["Alex", "Sarah"]
```

## Toolbox

- 🎯 **Focus:** functions that compose — `getPassedStudents()` *calls* `calculateAverage()`
- ✅ **Allowed:** `function` · `.filter()` · `.map()` · `.reduce()` · loops if needed
- ❌ **Avoid:** re-writing the average `reduce()` inside `getPassedStudents` — you
  already have that function; call it. Reduce over `student.grades`, not `students`.

## Requirements

- `calculateAverage` takes a student **object** and returns a number
- `getPassedStudents` must **call** `calculateAverage` — don't duplicate the maths
- Passing is `>= 70`

## Hint

<details>
<summary>Show hint</summary>

Check the averages first: Alex (80+90+70)/3 = 80 ✓. John (60+50+70)/3 = 60 ✗.
Sarah (95+90+100)/3 = 95 ✓.

```javascript
function calculateAverage(student) {
  const total = student.grades.reduce((sum, g) => sum + g, 0);
  return total / student.grades.length;
}

function getPassedStudents() {
  return students
    .filter(student => calculateAverage(student) >= 70)
    .map(student => student.name);
}
```

`calculateAverage(student) >= 70` inside the filter — that's the composition. If
you find yourself writing `.reduce()` again inside `getPassedStudents`, stop:
you already have that function.

`getPassedStudents()` reads `students` from the outer scope rather than taking a
parameter. That's what the spec asks for. Taking it as an argument would be
better design — worth thinking about why.

</details>
