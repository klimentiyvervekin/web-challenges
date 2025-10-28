import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  function setPlusCount() {
    setCount(count + 1);
  }

  function setMinusCount() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button type="button" onClick={setMinusCount}>
          -
        </button>
        <button type="button" onClick={setPlusCount}>
          +
        </button>
      </div>
    </div>
  );
}
