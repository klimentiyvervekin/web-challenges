export default function App() {
  return <Greeting name="Klim" />;
}

function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
