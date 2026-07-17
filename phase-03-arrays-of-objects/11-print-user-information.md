# Exercise 11 — Print User Information

**Trains:** building a sentence from two properties · string concatenation
**Difficulty:** 🟢 Easy

## What you're solving

Until now you printed values raw. Here you **compose** them into readable text,
mixing fixed words with data pulled from each object.

Every user interface does this. The data says `{name:"John", age:20}`; the screen
says "John is 20 years old". Turning one into the other is the job.

## Starter data

```javascript
const users = [{name:"John",age:20},{name:"Jane",age:30}];
```

## Expected output

```javascript
John is 20 years old
Jane is 30 years old
```

## Requirements

- Use a loop
- Each line combines both properties with fixed text
- Watch the spaces — `John is20 years old` is wrong

## Hint

<details>
<summary>Show hint</summary>

Two ways. Concatenation with `+`:

```javascript
console.log(user.name + " is " + user.age + " years old");
```

Or a **template literal** — backticks, with `${}` around each value:

```javascript
console.log(`${user.name} is ${user.age} years old`);
```

Template literals are far easier to get spacing right in, and they're what you'll
see in modern code. Try both; prefer the second.

</details>
