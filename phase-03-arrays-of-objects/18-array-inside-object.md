# Exercise 18 — Array Inside Object

**Trains:** arrays as property values · mixing brackets and dots
**Difficulty:** 🟢 Easy

## What you're solving

You've done objects inside arrays all phase. This is the reverse: an **array
inside an object**.

Which means the access chain mixes both notations — `student.skills[2]` is a dot
to reach the array, then brackets to reach a position in it. Real data nests both
ways, often in the same expression, and reading them left to right is the skill.

## Starter data

```javascript
const student = { name: "Tugu", skills: ["JavaScript","Git","React"] };
```

Print:

```javascript
React
```

## Expected output

```javascript
React
```

## Requirements

- One expression
- Print only that one skill

## Hint

<details>
<summary>Show hint</summary>

Read it left to right: `student` → `.skills` gets the array → `[2]` gets the
third item.

```javascript
student.skills[2]
```

Dots for names, brackets for positions. Every time.

</details>
