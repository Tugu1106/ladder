// Drill 9 — Destructure with a Default
// Goal: Greeting defaults `name` to "Guest" when none is given:
//   function Greeting({ name = "Guest" }) { ... }
// Render one WITH a name, and one WITHOUT — watch the default kick in.

function Greeting({ name = "Guest" }) {
  return <p>Hi, {name}!</p>;
}

function Drill() {
  return (
    <>
      <Greeting name={"Tugu"} />
      <Greeting />
    </>
  );
}

export default Drill;
