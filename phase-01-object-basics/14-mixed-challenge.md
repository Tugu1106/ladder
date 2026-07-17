# Exercise 14 — Mixed Challenge

**Trains:** combining update, add, and delete on one object
**Difficulty:** 🟢 Easy

## What you're solving

Everything from Exercises 4, 5, and 6 in one go — on the same object, without
starting over.

The constraint "without creating a new object" is the real exercise. You're
practising **mutation**: reaching into something that already exists and
reshaping it, rather than building a replacement. That's how state gets updated
in most code you'll write before you learn immutable patterns.

## Starter data

Use whatever your `person` looks like by now.

Do all three, without creating a new object:

- change one property
- add one property
- delete one property

Print the final object.

## Expected output

Depends on your choices. The final object must show all three effects: one value
different, one key that wasn't there before, one key gone.

## Requirements

- Do not write a new object literal for `person`
- All three operations, on the same object
- Print the result once at the end

## Hint

<details>
<summary>Show hint</summary>

You already know all three lines — Exercise 4 (change), Exercise 5 (add),
Exercise 6 (delete). This is just putting them back to back.

</details>
