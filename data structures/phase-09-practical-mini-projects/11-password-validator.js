// Project 11 — Password Validator
// Instructions: 11-password-validator.md
//
// A break from arrays — pure boolean logic. Three conditions, all must hold.
//
// Length is easy. "Contains a number" and "contains an uppercase letter" are
// harder: you can't just look, you have to check EVERY character.
//
// A string isn't an array, but split("") turns it into one — then some()
// ("does at least one item pass this test") does the work.
//
// Neat uppercase test:  char !== char.toLowerCase()
// A character that changes when lowercased must have been uppercase. Digits
// and symbols don't change, so they correctly fail it.
//
// Name each check and combine with && at the end — far better than one giant
// condition, and when it says false you can log each part to see which rule
// failed.
//
// Expected output:
//   false
//   false
//   false
//   true

// rules — all three must hold:
//   length >= 8
//   contains a number
//   contains an uppercase letter
// returns a real boolean

function validatePassword(password) {
  const longEnough = password.length >= 8;

  const hasNumber = password
    .split("")
    .some((char) => char >= "0" && char <= "9");

  const hasUpper = password
    .split("")
    .some((char) => char !== char.toLowerCase());

  return longEnough && hasNumber && hasUpper;
}

console.log(validatePassword("abc")); // false — short, no number, no upper
console.log(validatePassword("abcdefgh")); // false — no number, no upper
console.log(validatePassword("abcdefg1")); // false — no uppercase
console.log(validatePassword("Abcdefg1")); // true
