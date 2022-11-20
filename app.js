const theBurger = document.getElementById("the-burger");
const menu = document.getElementById("top-menu");

theBurger.addEventListener("click", toggleMenu);

function toggleMenu() {
	menu.style.display = "block";
}
