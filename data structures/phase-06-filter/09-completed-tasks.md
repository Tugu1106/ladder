# Exercise 9 — Completed Tasks

**Trains:** boolean property with a different name
**Difficulty:** 🟢 Easy

## What you're solving

Exercise 7's pattern with `completed` instead of `active`.

The rep is checking that you recognise the *shape* — "a boolean field, pass it
through" — rather than having memorised a specific property name. This is the
todo-list filter, and you'll build it for real in Phase 9.

## Starter data

```javascript
const tasks = [{title:"Study",completed:true},{title:"Workout",completed:false},{title:"Code",completed:true}];
```

Keep completed tasks.

## Expected output

```javascript
[
  { title: 'Study', completed: true },
  { title: 'Code', completed: true }
]
```

## Toolbox

- 🎯 **Focus:** a boolean property under a different name (`task.completed`)
- ✅ **Allowed:** `.filter()` · dot notation · `!` (for the remaining ones) · `console.log()`
- ❌ **Not allowed:** `=== true` · `.map()` · loops — recognise the *shape* (a
  boolean field, pass it through) regardless of what it's called.

## Requirements

- Use `filter()`
- Pass the boolean through — no `=== true`
- The property is `title` here, not `name`

## Hint

<details>
<summary>Show hint</summary>

```javascript
const done = tasks.filter(task => task.completed);
```

For the remaining ones, `!task.completed` — that's Phase 9's `countRemainingTodos()`.

</details>
