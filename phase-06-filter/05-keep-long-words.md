# Exercise 5 — Keep Long Words

**Trains:** filtering on a computed property
**Difficulty:** 🟢 Easy

## What you're solving

The condition isn't about the item itself but about something you **compute** from
it — a word's length rather than the word.

That's fine. `filter()` doesn't care how you arrive at your boolean, only that
you return one.

## Starter data

```javascript
const words = ["cat","elephant","dog","computer"];
```

Keep words longer than 5 characters.

Result: `["elephant","computer"]`

## Expected output

```javascript
["elephant", "computer"]
```

## Toolbox

- 🎯 **Focus:** filtering on a *computed* property (`word.length > 5`)
- ✅ **Allowed:** `.filter()` · `.length` · comparison · `console.log()`
- ❌ **Not allowed:** `.map()` (that returned the lengths in Phase 5) — here the
  length decides, but the *word* survives unchanged.

## Requirements

- Use `filter()`
- "Longer than 5" is strict — a 5-letter word is out
- The words themselves come back unchanged, not their lengths

## Hint

<details>
<summary>Show hint</summary>

```javascript
const long = words.filter(word => word.length > 5);
```

Contrast with Phase 5's Exercise 5, which mapped words to `[5,6,3]`. `map()`
returned the lengths; `filter()` uses the length to decide but returns the
**word**. Same property, completely different job.

</details>
