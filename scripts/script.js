const button = document.getElementById("nav-button");
const links = document.getElementById("main-nav-list");

button.addEventListener("click", function () {
  links.classList.toggle("toggled");
});
