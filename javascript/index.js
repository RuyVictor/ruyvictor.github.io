const hamburguer = document.querySelector(".hamburger");
const menu = document.querySelector(".mobile-menu");

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle("is-active");
  menu.classList.toggle("active");
});

const options = document.querySelectorAll(".mobile-menu a");

options.forEach((item) =>
  item.addEventListener("click", () => {
    hamburguer.classList.toggle("is-active");
    menu.classList.toggle("active");
  })
);