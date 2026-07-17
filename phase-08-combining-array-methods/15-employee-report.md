# Exercise 15 — Employee Report

**Trains:** filter then sum · department reporting
**Difficulty:** 🟢 Easy

## What you're solving

Exercise 3's pipeline with a string condition — the payroll cost of one
department.

Straightforward, and worth noticing how ordinary it's become. Two months ago
"total the IT salaries" would have meant a loop, a counter, an `if`, and careful
thought. Now it's two chained methods and you barely pause.

## Starter data

```javascript
const employees = [{name:"Alex",department:"IT",salary:4000},{name:"John",department:"HR",salary:3000},{name:"Sarah",department:"IT",salary:5000}];
```

Find IT employees' total salary. Result: `9000`

## Expected output

```javascript
9000
```

## Requirements

- Filter on department, then sum salaries
- One number

## Hint

<details>
<summary>Show hint</summary>

```javascript
const itTotal = employees
  .filter(e => e.department === "IT")
  .reduce((sum, e) => sum + e.salary, 0);
```

4000 + 5000 = 9000. John's 3000 is HR and doesn't count.

No `map()` needed — reduce straight from the filtered objects.

</details>
