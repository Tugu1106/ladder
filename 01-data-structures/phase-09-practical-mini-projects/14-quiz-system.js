// Project 14 — Quiz System
// Instructions: 14-quiz-system.md
//
// A function taking TWO arguments.
//
// THE TRAP: the stored answer is the number 4. If the user's input comes from
// a form or prompt(), it's the STRING "4". And 4 === "4" is FALSE — same value,
// different type, no match. Your quiz marks a correct answer wrong.
//
// This is the most common bug in beginner form handling. Decide deliberately:
// convert with Number(userAnswer) before comparing, or accept the risk.
//
// Avoid == (two equals). It converts types before comparing, but its rules are
// genuinely strange (0 == "" is true). Use === and convert explicitly, so the
// conversion is visible in the code rather than hidden in the operator.
//
// Expected output:
//   correct
//   wrong

const questions = [{ question: "2+2?", answer: 4 }];

function checkAnswer(question, userAnswer) {
  // returns "correct" or "wrong"
}

// console.log(checkAnswer(questions[0], 4));     // "correct"
// console.log(checkAnswer(questions[0], 5));     // "wrong"
// console.log(checkAnswer(questions[0], "4"));   // should this be correct?
