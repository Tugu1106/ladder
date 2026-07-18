# Challenge 7 — Discord Server Analytics ⭐⭐⭐⭐⭐

**Trains:** three-level nesting · aggregating across servers
**Difficulty:** ⭐⭐⭐⭐

## What you're solving

Three levels: servers hold members, members hold message counts. Every question
has to reach through the nesting.

By now you know the move — `flatMap()` to flatten servers into members, then it's
an ordinary Phase 7 problem. The nesting is intimidating right up until you
flatten it, and then it isn't.

The subtle bit is **scope**. "Most active user" — across all servers, or per
server? "Total members" — the sum across servers, or unique people? Someone in two
servers is one person but two member entries. With one server you can't tell, and
the spec doesn't say.

Real analytics lives on this question. "Daily active users" is trivially easy and
notoriously hard to define.

## Starter data

```javascript
const servers = [{ name:"Programming", members:[
  {username:"Alex",role:"admin",messages:500},
  {username:"John",role:"member",messages:100}
]}];
```

## Tasks

1. Most active user
2. Total members
3. Admin list
4. Server activity score = `sum(messages)`

## Expected output

```javascript
Alex
2
["Alex"]
600
```

## Toolbox

- 🎯 **Focus:** `.flatMap()` to collapse three-level nesting, then answer normally
- ✅ **Allowed:** `.flatMap()` · `.reduce()` · `.filter()` · `.map()`
- ❌ **Not allowed:** `for` / `while` loops — flatten servers→members once; then
  decide the *scope* of each question (across all servers vs. per server).

## Requirements

- No `for` loops
- Most active means highest `messages`
- Admins are `role === "admin"`
- Activity score sums all messages: 500 + 100 = 600

## Hint

<details>
<summary>Show hint</summary>

Flatten first and every task collapses:

```javascript
const allMembers = servers.flatMap(server => server.members);
```

```javascript
const mostActive = allMembers.reduce(
  (best, m) => m.messages > best.messages ? m : best
).username;

const totalMembers = allMembers.length;

const admins = allMembers
  .filter(m => m.role === "admin")
  .map(m => m.username);

const activityScore = allMembers.reduce((sum, m) => sum + m.messages, 0);
```

One `flatMap`, four ordinary one-liners. That's the whole technique for nested
data: flatten to the level your question is about, then answer it normally.

For **per-server** activity instead of overall, map over servers and reduce inside:

```javascript
const perServer = servers.map(server => ({
  name: server.name,
  score: server.members.reduce((sum, m) => sum + m.messages, 0)
}));
```

Which one is right depends on the question. That's yours to decide.

</details>
