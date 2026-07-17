// Challenge 7 — Discord Server Analytics ⭐⭐⭐⭐⭐
// Instructions: 07-discord-server-analytics.md
//
// Three levels: servers hold members, members hold message counts.
//
// You know the move by now — flatMap() to flatten servers into members, and
// then it's an ordinary Phase 7 problem. The nesting is intimidating right up
// until you flatten it, and then it isn't:
//
//   const allMembers = servers.flatMap(server => server.members);
//
// One flatMap, four ordinary one-liners. That's the whole technique for
// nested data: flatten to the level your question is about, then answer it
// normally.
//
//   1. most active user      -> Alex   (highest messages)
//   2. total members         -> 2
//   3. admin list            -> ["Alex"]
//   4. server activity score -> 600    (500 + 100)
//
// THE SUBTLE BIT is SCOPE. "Most active user" — across all servers, or per
// server? "Total members" — the sum across servers, or unique people? Someone
// in two servers is one person but two member entries. With one server you
// can't tell, and the spec doesn't say.
//
// Real analytics lives on this question. "Daily active users" is trivially
// easy and notoriously hard to define.

const servers = [
  {
    name: "Programming",
    members: [
      { username: "Alex", role: "admin", messages: 500 },
      { username: "John", role: "member", messages: 100 }
    ]
  }
];

// --- your code below ---
