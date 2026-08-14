import { useState } from "react";

function Drill() {
  const [text, setText] = useState("");

  const remaining = 100 - text.length;

  return (
    <div>
      <textarea value={text} onChange={(e) => setText(e.target.value)} />

      <p>{text.length} / 100 characters</p>

      <p>{remaining} characters remaining</p>

      {remaining < 0 && <p style={{ color: "red" }}>Too long!</p>}
    </div>
  );
}

export default Drill;
