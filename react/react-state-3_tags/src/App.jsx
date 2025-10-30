import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  // add tag
  function handleAddTag(newTag) {
    setTags((prev) => [...prev, newTag]);
  }

  // delete tag
  function handleDeleteTag(tagToDelete) {
    setTags((prev) => prev.filter((tag) => tag !== tagToDelete));
  }

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />

      <List tags={tags} onDeleteTag={handleDeleteTag} />
    </main>
  );
}
