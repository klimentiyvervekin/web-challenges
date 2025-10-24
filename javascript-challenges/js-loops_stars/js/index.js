console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // очищаем контейнер, чтобы не дублировались звёзды
  starContainer.innerHTML = "";

  // создаём 5 звёзд
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("img"); // создаём тег <img>
    star.src = "assets/star-empty.svg"; // путь к пустой звезде
    starContainer.append(star); // добавляем звезду в контейнер
  }
}

// вызываем функцию, чтобы увидеть звёзды
renderStars();
