// ✅ DONE — ran it, output correct.
//    Note: `inteligence` should be `intelligence` (two L's).
//    It works because you spelled it the same way in both places. That's the
//    trap: JavaScript never warns you, and player.stats.intelligence would
//    silently return undefined.
// Exercise 15 — Mini Boss ⭐
// Instructions: 15-object-boss.md
//
// Goal: build this object from scratch —
//
//   player
//       username    (string)
//       level       (number)
//       hp          (number)
//       mana        (number)
//       inventory   (no arrays yet — a number or string)
//       stats       (an object)
//           strength
//           agility
//           intelligence
//
// Then print: username, hp, intelligence  (in that order, one per line)
//
// Expected output (your values will differ):
//   TuguTheBrave
//   100
//   15

// --- your code below ---

const player = {
  username: "kazuna",
  level: 10,
  hp: 100,
  mana: 100,
  inventory: 100,
  stats: {
    strength: 75,
    agility: 125,
    inteligence: 139,
  },
};

console.log(player.username);
console.log(player.hp);
console.log(player.stats.inteligence);
