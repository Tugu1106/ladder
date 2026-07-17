// Project 13 — URL Analyzer
// Instructions: 13-url-analyzer.md
//
// Goal: { domain: "google.com", path: "users", id: 5 }
//
// The hardest string exercise here. Work out the plan on paper first:
//
//   "https://google.com/users?id=5"
//     split on "//"  -> ["https:", "google.com/users?id=5"]
//     split on "?"   -> ["google.com/users", "id=5"]
//     split on "/"   -> ["google.com", "users"]
//     split on "="   -> ["id", "5"]
//
// Each split narrows the target. That's parsing: chip away with a series of
// small, dumb operations until only the piece you want is left.
//
// `id` must be a NUMBER, but split() always gives strings — so Number("5").
// Without it, id + 1 would be "51" rather than 6.
//
// Real code uses `new URL(url)`, which handles ports, hashes and encoding.
// Learn the manual way first — the same thinking works on log lines, CSVs and
// file paths, where no built-in exists.
//
// Expected output:
//   { domain: 'google.com', path: 'users', id: 5 }

const url = "https://google.com/users?id=5";

// --- your code below ---
