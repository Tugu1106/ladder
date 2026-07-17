# Challenge 6 — Student Management System ⭐⭐⭐⭐

**Trains:** two levels of averaging · statistics
**Difficulty:** ⭐⭐⭐

## What you're solving

Averages of averages — and one subtlety that catches people.

The **class average** has two readings. Average of every student's average? Or
average of every grade, pooled together? They give different numbers whenever
students have different numbers of grades.

Say Alex has 3 grades averaging 90, and Bob has 1 grade of 50. Average of averages
is (90 + 50) / 2 = 70. Pooled, it's (90+80+100+50) / 4 = 80. Both are "the class
average," and they disagree by 10 points.

Neither is wrong — they answer different questions. "Average of averages" treats
every *student* equally. "Pooled" treats every *grade* equally. Real reporting bugs
come from picking one without noticing there was a choice.

Here all students have 3 grades, so both agree. Pick one anyway, and know why.

## Starter data

```javascript
const students = [{name:"Alex",grades:[90,80,100]}];
```

Add a couple so the statistics mean something:

```javascript
const students = [
  { name:"Alex", grades:[90,80,100] },
  { name:"Bob", grades:[50,60,40] },
  { name:"Sara", grades:[70,75,80] }
];
```

## Tasks

1. Student average
2. Top student
3. Failed students (average < 60)
4. Class average

## Expected output

With the three-student data above:

```javascript
90
Alex
["Bob"]
75
```

## Requirements

- No `for` loops
- Write `calculateAverage(student)` once and reuse it everywhere
- Failing is `< 60` strictly
- Say which class-average definition you used

## Hint

<details>
<summary>Show hint</summary>

Check: Alex (90+80+100)/3 = 90. Bob (50+60+40)/3 = 50. Sara (70+75+80)/3 = 75.

```javascript
const calculateAverage = student =>
  student.grades.reduce((sum, g) => sum + g, 0) / student.grades.length;

const topStudent = students.reduce(
  (best, s) => calculateAverage(s) > calculateAverage(best) ? s : best
).name;

const failed = students
  .filter(s => calculateAverage(s) < 60)
  .map(s => s.name);
```

Bob's 50 is the only one under 60.

Class average, as average-of-averages:

```javascript
const classAverage =
  students.reduce((sum, s) => sum + calculateAverage(s), 0) / students.length;
```

(90 + 50 + 75) / 3 = 71.67.

Pooled across all grades:

```javascript
const classAverage =
  students.flatMap(s => s.grades).reduce((a, b) => a + b, 0) /
  students.flatMap(s => s.grades).length;
```

(90+80+100+50+60+40+70+75+80) / 9 = 71.67 — same here, because everyone has three
grades. Give Bob one grade and watch them diverge.

Writing `calculateAverage` once and calling it four times is the real lesson.
Inlining the reduce each time would mean four places to fix.

</details>
