import { Header } from "./js/Header.js";
import { CardList } from "./js/CardList.js";
import { cards } from "./js/cards.js";
import { handleFormSubmit } from "./js/handleFormSubmit.js";
import { Form } from "./js/Form.js";
import { Bookmark } from "./js/Bookmark.js";
import { Card } from "./js/Card.js";
import { App } from "./js/App.js";

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
}

Header();
CardList();
cards();
handleFormSubmit();
Form();
Bookmark();
Card();
App();
render();
