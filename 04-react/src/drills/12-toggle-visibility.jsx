// Drill 12 — Toggle Show / Hide
// Goal: a button that shows and hides a paragraph.
//   const [visible, setVisible] = useState(true);
//   toggle:  setVisible(!visible)
//   show only when visible:  { visible && <p>Now you see me</p> }
// ({condition && <element>} renders the element ONLY if condition is true.)

import { useState } from "react";

function Drill() {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <button onClick={() => setVisible(!visible)}>Toggle</button>
      {visible && <p>Paragraph</p>}
    </>
  );
}

export default Drill;
