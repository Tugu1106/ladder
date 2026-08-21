// Drill 13 — ON / OFF Toggle
// Goal: one button that flips its label between "ON" and "OFF" each click.
//   const [isOn, setIsOn] = useState(false);
//   label:  {isOn ? "ON" : "OFF"}
//   click:  setIsOn(!isOn)

import { useState } from "react";

function Drill() {
  const [isOn, setIsOn] = useState(true);

  return (
    <>
      <button onClick={() => setIsOn(!isOn)}>{isOn ? "ON" : "OFF"}</button>
    </>
  );
}

export default Drill;
