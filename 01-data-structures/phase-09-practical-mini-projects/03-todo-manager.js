// Project 3 — Todo Manager
// Instructions: 03-todo-manager.md
//
// One field, two opposite questions: completed, and NOT completed.
//
// Note the return types differ — one gives TITLES, the other a COUNT.
// The property is `title`, not `name`.
//
// Expected output:
//   [ 'Study JS', 'Read' ]
//   1

const todos = [
  { title: "Study JS", completed: true },
  { title: "Workout", completed: false },
  { title: "Read", completed: true },
];

function getCompletedTodos() {
  return todos.filter((todo) => todo.completed).map((todo) => todo.title);
}

function countRemainingTodos() {
  return todos.length - getCompletedTodos(todos).length;
}

console.log(getCompletedTodos()); // ["Study JS","Read"]
console.log(countRemainingTodos()); // 1
