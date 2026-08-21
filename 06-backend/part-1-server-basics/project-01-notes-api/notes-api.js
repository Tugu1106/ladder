import express from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

let notes = [];

app.get("/notes", (req, res) => {
  res.status(200).json(notes);
});

app.get("/notes/:id", (req, res) => {
  const id = req.params.id;
  const note = notes.find((n) => n.id === Number(id));
  if (!note) {
    return res.status(404).json({ error: "Note doesnt exist" });
  }
  res.status(200).json(note);
});

app.post("/notes", (req, res) => {
  const { title, body } = req.body;

  if (!title) {
    return res.status(400).json({ error: "title required" });
  }
  const newNote = { id: Date.now(), title, body: body || "" };
  notes.push(newNote);

  res.status(201).json(newNote);
});

app.put("/notes/:id", (req, res) => {
  const id = req.params.id;
  const note = notes.find((n) => n.id === Number(id));

  if (!note) {
    return res.status(404).json({ error: "This item does not exist" });
  }

  const { title, body } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title required" });
  }

  note.title = title;
  note.body = body;

  res.status(200).json(note);
});

app.delete("/notes/:id", (req, res) => {
  const id = req.params.id;
  const note = notes.find((n) => n.id === Number(id));
  if (!note) {
    return res.status(404).json({ error: "Note doesnt exist" });
  }
  notes = notes.filter((n) => n.id !== Number(id));
  res.status(200).json({ deleted: true, note });
});

app.listen(PORT, () => {
  console.log("Server is running");
});
