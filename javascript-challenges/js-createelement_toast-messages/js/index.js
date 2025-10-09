console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  const newElement = document.createElement("li");
  newElement.classList.add("toast-container__message");
  newElement.textContent = "I am a toast message 2";
  toastContainer.append(newElement);
  // Exercise: Append a new entry to the toast messages container
});

clearButton.addEventListener("click", () => {
  const newElement = document.createElement("li");
  newElement.classList.add("toast-container__message");
  newElement.textContent = "I am a toast message 2";
  toastContainer.remove(newElement);
  // Exercise: Clear the stack of toast messages
});
