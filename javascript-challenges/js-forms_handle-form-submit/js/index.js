console.clear();

const form = document.querySelector('[data-js="form"]');
const firstNameInput = form.elements.firstName;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const fd = new FormData(form);
  const data = Object.fromEntries(fd.entries());

  console.log("form data:", data);

  form.reset();
  firstNameInput.focus();
});
