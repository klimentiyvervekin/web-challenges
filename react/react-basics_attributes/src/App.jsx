import "./styles.css";

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">An Article</h2>
      <label htmlFor="myFirstInput">An input!</label>
      <input id="myFirstInput" className="article__input" type="text" />
      <a className="article__link" href="https://example.com">
        press the button
      </a>
    </article>
  );
}

export default function App() {
  return <Article />;
}
