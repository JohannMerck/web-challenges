console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const buttondark = document.querySelector('[data-js="dark-mode-button"]');

const buttonlight = document.querySelector('[data-js="light-mode-button"]');

const buttontoggle = document.querySelector('[data-js="toggle-button"]');

buttondark.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

buttonlight.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

buttontoggle.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
