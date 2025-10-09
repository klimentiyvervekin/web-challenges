console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

function createSecondPost() {
  const articleElement = document.createElement("article");
  articleElement.classList.add("post");

  const pElement = document.createElement("p");
  pElement.classList.add("post__content");
  pElement.textContent = "wazzzuuuuup";

  const footerElement = document.createElement("footer");
  footerElement.classList.add("post__footer");

  const spanElement = document.createElement("span");
  spanElement.classList.add("post__username");
  spanElement.textContent = "dinner dinner chicken winner";

  const buttonElement = document.createElement("button");
  buttonElement.classList.add("post__button");
  buttonElement.type = "button";
  buttonElement.textContent = "Like";
  buttonElement.addEventListener("click", handleLikeButtonClick);

  footerElement.append(spanElement, buttonElement);
  articleElement.append(pElement, footerElement);

  document.body.append(articleElement);
}

createSecondPost();

// Exercise:
// Use document.createElement() and append another social media post to the body.
