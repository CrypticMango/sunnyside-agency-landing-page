const theBurger = document.getElementById("the-burger");
const menu = document.getElementById("top-menu");

const about = document.getElementById("about");
const services = document.getElementById("services");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");

theBurger.addEventListener("click", openMenu);

function openMenu() {
	menu.style.display = "block";
}

about.addEventListener("click", closeMenu);
services.addEventListener("click", closeMenu);
projects.addEventListener("click", closeMenu);
contact.addEventListener("click", closeMenu);

function closeMenu() {
	menu.style.display = "none";
}