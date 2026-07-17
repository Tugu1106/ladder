# Project 3 — Todo Manager

**Trains:** filtering on a boolean, both directions
**Difficulty:** 🟢 Easy

## What you're solving

The todo list — the traditional first app, and a clean example of one field
answering two opposite questions.

`getCompletedTodos()` keeps `completed: true`. `countRemainingTodos()` keeps the
opposite. Same property, negated condition. That's Phase 6's Exercises 9 and 13
side by side.

Note the return types differ: one gives **titles**, the other a **count**. Read
each spec.

## Starter data

```javascript
const todos = [{title:"Study JS",completed:true},{title:"Workout",completed:false},{title:"Read",completed:true}];
```

## Build these

**`getCompletedTodos()`** → `["Study JS","Read"]`

**`countRemainingTodos()`** → `1`

## Expected output

```javascript
["Study JS", "Read"]
1
```

## Requirements

- `getCompletedTodos` returns titles — strings, not objects
- `countRemainingTodos` returns a number
- The property is `title`, not `name`

## Hint

<details>
<summary>Show hint</summary>

```javascript
function getCompletedTodos() {
  return todos
    .filter(todo => todo.completed)
    .map(todo => todo.title);
}

function countRemainingTodos() {
  return todos.filter(todo => !todo.completed).length;
}
```

`!todo.completed` for the unfinished ones, then `.length` — Phase 8's Exercise 4.

</details>
