const menubutton = document.querySelector("#menu-button");
const menuitems = document.querySelectorAll(".menu-item");
const colormode = document.querySelector("#color-mode");
const lightmode = document.querySelector(".lightmode-icon");
const darkmode = document.querySelector(".darkmode-icon");


// menuitems will be a Node List of the list items

menubutton.addEventListener("click", () => {
	menuitems.forEach((item) => item.classList.toggle("open"));
	menubutton.classList.toggle("close");
});

colormode.addEventListener("click", () => {
    document.querySelector("main").classList.toggle("color-mode");
    lightmode.classList.toggle("lightmode-icon-show");
    darkmode.classList.toggle("darkmode-icon-show");
});