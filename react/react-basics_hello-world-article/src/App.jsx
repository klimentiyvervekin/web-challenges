import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World Component</h1>
      <p>
        This is a simple React component that displays Hello, World! on the
        screen.
      </p>
    </article>
  );
}
