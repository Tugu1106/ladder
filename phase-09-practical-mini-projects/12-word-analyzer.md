# Project 12 — Word Analyzer

**Trains:** `split()` · turning text into data
**Difficulty:** ⭐

## What you're solving

Text into an array, then everything you already know applies.

`split(" ")` is the bridge. `"hello javascript world"` becomes
`["hello","javascript","world"]`, and suddenly it's a Phase 2 problem — count
them, find the longest. The hard part was never the analysis; it was getting from
text to a list.

That's a general move worth internalising. When data arrives in an awkward shape,
the first job is converting it into a shape your tools already understand.

## Starter data

```javascript
const text = "hello javascript world";
```

## Build these

**`countWords()`** → `3`

**`findLongestWord()`** → `"javascript"`

## Expected output

```javascript
3
javascript
```

## Toolbox

- 🎯 **Focus:** `.split(" ")` — turning text into an array your tools understand
- ✅ **Allowed:** `function` · `.split()` · `.length` · `.reduce()` · loops if needed
- ❌ **Avoid:** `split("")` (no space splits into *characters*, not words) — once
  split, it's a plain Phase 2/7 problem.

## Requirements

- Use `split(" ")` to break the text apart
- `countWords` returns a number
- `findLongestWord` returns the word, not its length

## Hint

<details>
<summary>Show hint</summary>

```javascript
function countWords() {
  return text.split(" ").length;
}

function findLongestWord() {
  return text.split(" ").reduce(
    (longest, word) => word.length > longest.length ? word : longest,
    ""
  );
}
```

`split(" ")` splits on spaces. `split("")` with no space splits into individual
characters — a different thing entirely.

The reduce is Phase 7's Exercise 10, on strings straight from the split.

Real text is messier: double spaces produce empty strings, and punctuation sticks
to words ("world." is 6 characters). `split(/\s+/)` handles the spacing. Not
needed here, but that's why real parsers are harder than they look.

</details>
