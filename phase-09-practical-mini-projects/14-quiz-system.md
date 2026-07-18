# Project 14 — Quiz System

**Trains:** two parameters · comparing across types
**Difficulty:** ⭐

## What you're solving

A function taking **two** arguments — the question and the user's answer.

The trap is `===`. The stored answer is the number `4`. If the user's input comes
from a form or `prompt()`, it's the **string** `"4"`. And `4 === "4"` is `false` —
same value, different type, no match. Your quiz marks a correct answer wrong.

This is the most common bug in beginner form handling, and it's why the exercise
exists. Decide deliberately: convert the input to a number before comparing, or
compare loosely and accept the risk.

## Starter data

```javascript
const questions = [{question:"2+2?",answer:4}];
```

## Build this

**`checkAnswer(question, userAnswer)`** → `"correct"` or `"wrong"`

```javascript
checkAnswer(questions[0], 4)     // "correct"
checkAnswer(questions[0], 5)     // "wrong"
checkAnswer(questions[0], "4")   // ← should this be correct?
```

## Expected output

```javascript
correct
wrong
```

## Toolbox

- 🎯 **Focus:** a two-argument function · comparing across types (`4` vs `"4"`)
- ✅ **Allowed:** `function` with two args · `===` · `Number()` · ternary
- ❌ **Avoid:** `==` (its coercion rules are genuinely strange) — use `===` and
  convert the input explicitly with `Number()`, so the conversion is visible.

## Requirements

- Takes a question **object** and the user's answer
- Returns the string `"correct"` or `"wrong"`
- Decide how to handle `"4"` vs `4` and be deliberate about it

## Hint

<details>
<summary>Show hint</summary>

```javascript
function checkAnswer(question, userAnswer) {
  return question.answer === userAnswer ? "correct" : "wrong";
}
```

That marks `"4"` wrong. If input might be a string, convert first:

```javascript
function checkAnswer(question, userAnswer) {
  return question.answer === Number(userAnswer) ? "correct" : "wrong";
}
```

`==` (two equals) would also match `4` and `"4"`, because it converts types before
comparing. Avoid it — its rules are genuinely strange (`0 == ""` is `true`,
`null == undefined` is `true`). Use `===` and convert explicitly, so the
conversion is visible in the code rather than hidden in the operator.

</details>
