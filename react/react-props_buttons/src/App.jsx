export default function App() {
  return (
    <div>
      <Button color="green" disabled={false} text="Submit" />
      <Button color="red" disabled={true} text="Danger" />
      <Button color="blue" disabled={false} text="Click me!" />
    </div>
  );
}

function Button({ color, disabled, text }) {
  return (
    <button
      style={{ color: color }}
      disabled={disabled}
      onClick={() => console.log(`You clicked: ${text}`)}
    >
      {text}
    </button>
  );
}
