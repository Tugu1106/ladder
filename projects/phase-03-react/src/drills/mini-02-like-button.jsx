// Mini Project 2 — Like Button
// Goal: a button that toggles liked/not-liked AND counts total likes.
//   const [liked, setLiked] = useState(false);
//   const [count, setCount] = useState(0);
//   on click: flip liked, and adjust count (+1 when liking, -1 when un-liking)
//   show the count, and a label like  {liked ? "♥ Liked" : "♡ Like"}
// Combines: two useStates + boolean + ternary + event.

import { useState } from "react";

function Drill() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setLiked(!liked);
          setCount(liked ? count - 1 : count + 1);
        }}
      >
        {liked ? "♥ Liked" : "♡ Like"}
      </button>
      <p>{count}</p>
    </>
  );
}

export default Drill;
