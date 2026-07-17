# Project 11 — Password Validator

**Trains:** combining boolean checks · strings without array methods
**Difficulty:** ⭐⭐

## What you're solving

A break from arrays. This is pure **boolean logic** — three conditions that must
all hold.

Three sub-problems. Length is easy (`.length >= 8`). "Contains a number" and
"contains an uppercase letter" are harder: you can't just look, you have to
*check every character*.

That's the interesting part. A string isn't an array, but it's close enough that
you can borrow array thinking — split it into characters and test them. Several
valid routes here, and comparing them teaches more than the answer does.

## Starter data

None — you write the function and test it yourself.

## Build this

**`validatePassword(password)`** → `true` / `false`

Rules — all three must hold:

- length >= 8
- contains a number
- contains an uppercase letter

```javascript
validatePassword("abc")         // false — too short, no number, no uppercase
validatePassword("abcdefgh")    // false — no number, no uppercase
validatePassword("abcdefg1")    // false — no uppercase
validatePassword("Abcdefg1")    // true
```

## Expected output

```javascript
false
false
false
true
```

## Requirements

- Returns a real boolean — `true`/`false`, not a string
- All three rules
- Test with the four cases above

## Hint

<details>
<summary>Show hint</summary>

`split("")` turns a string into an array of characters, and `some()` — "does at
least one item pass this test" — does the work:

```javascript
function validatePassword(password) {
  const longEnough = password.length >= 8;
  const hasNumber = password.split("").some(char => char >= "0" && char <= "9");
  const hasUpper = password.split("").some(char => char !== char.toLowerCase());

  return longEnough && hasNumber && hasUpper;
}
```

`char !== char.toLowerCase()` is a neat uppercase test — a character that changes
when lowercased must have been uppercase. Digits and symbols don't change, so
they correctly fail it.

Naming each check and combining with `&&` at the end reads far better than one
giant condition — and when it returns `false` you can log each part to see which
rule failed.

Regex does each check in one line (`/[0-9]/.test(password)`), and that's what
production code uses. Worth looking up once you've solved it the long way.

</details>
