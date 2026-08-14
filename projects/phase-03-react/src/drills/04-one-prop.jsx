// Drill 4 — One Prop
// Goal: Greeting takes a `name` prop and returns "Hi, <name>!".
// Render it two or three times in Drill with different names.

function Greeting({ name }) {
  return <h1>Hi {name}</h1>;
}

function Drill() {
  return (
    <>
      <Greeting name={"Tuguone"} />
      <Greeting name={"Tugutwo"} />
      <Greeting name={"Tuguthree"} />
    </>
  );
}

export default Drill;
