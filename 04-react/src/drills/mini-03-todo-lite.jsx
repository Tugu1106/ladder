// Mini Project 3 — Todo-Lite   (this IS your shopping list, the React way)
// Goal: add tasks to a list, and delete them.
//   items + text state
//   ADD:    setItems([...items, { id: Date.now(), text }])
//   DELETE: setItems(items.filter((item) => item.id !== idToRemove))
//   render with map + key; each item has its own delete button
//
// >>> Notice what you DON'T do: no createElement, no textContent, no reading
//     the DOM. You change the array; React redraws. Compare this to your
//     Phase-1 shopping list by hand. THIS is the payoff you were promised.

import { useState } from "react";

function Drill() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          setItems([...items, { id: Date.now(), text: text }]);
        }}
      >
        Add
      </button>

      <ul>
        {items.map((item, index) => {
          return (
            <li key={item.id}>
              {item.text}
              <button
                onClick={() => setItems(items.filter((i) => i.id !== item.id))}
              >
                remove
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Drill;
