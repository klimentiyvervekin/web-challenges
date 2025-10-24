import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>save</Button>
      <Button>delete</Button>
      <Button>edit</Button>
      <Button>view</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children || "Click me"}
    </button>
  );
}
