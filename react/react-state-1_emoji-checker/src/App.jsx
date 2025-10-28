import "./styles.css";
import { useState } from "react";

export default function App() {
  const [inputCode, setInputCode] = useState("");
  const validCode = "🐡🐠🐋";

  function handleClick(emoji) {
    setInputCode(inputCode + emoji);
    console.log("Added:", emoji);
    console.log("Current code:", inputCode + emoji);
  }

  function handleReset() {
    setInputCode("");
    console.log("Reset Code!");
  }

  return (
    <div className="container">
      <div className="button-container">
        <button type="button" onClick={() => handleClick("🐡")}>
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button type="button" onClick={() => handleClick("🐋")}>
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button type="button" onClick={() => handleClick("🐠")}>
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>
      </div>

      <button type="button" onClick={handleReset}>
        Reset
      </button>

      {inputCode === validCode && <p>Valid code! 🎉</p>}
    </div>
  );
}
