// Project 12 — Word Analyzer
// Instructions: 12-word-analyzer.md
//
// split(" ") is the bridge: "hello javascript world" becomes
// ["hello","javascript","world"], and suddenly it's a Phase 2 problem.
// The hard part was never the analysis — it was getting from text to a list.
//
// A general move worth internalising: when data arrives in an awkward shape,
// first convert it into a shape your tools already understand.
//
// split(" ") splits on spaces. split("") with no space splits into individual
// characters — a different thing entirely.
//
// findLongestWord returns the WORD, not its length.
//
// Expected output:
//   3
//   javascript

const text = "hello javascript world";

function countWords() {
  return text.split(" ").length;
}

function findLongestWord() {
  return text
    .split(" ")
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      "",
    );
}

console.log(countWords()); // 3
console.log(findLongestWord()); // "javascript"
