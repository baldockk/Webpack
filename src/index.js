import './styles.css';
//Gets the initial page load and displays it right away
import homePageLoad from './home.js';
homePageLoad(); 

import menuPageLoad from './menu.js';
import aboutPageLoad from './about.js';

//Get the buttons in the navigational panel
const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");

//Get the div element so the HTML of it in the DOM can be cleared on every click
const div = document.getElementById("content");

function clearDiv() {
    div.innerHTML = "";
}

/*Hover event listeners*/
homeButton.addEventListener("mouseover", () => {
    homeButton.style.color = "white";
});

homeButton.addEventListener("mouseleave", () => {
    homeButton.style.color = "black";
});

menuButton.addEventListener("mouseover", () => {
    menuButton.style.color = "white";
});

menuButton.addEventListener("mouseleave", () => {
    menuButton.style.color = "black";
});

aboutButton.addEventListener("mouseover", () => {
    aboutButton.style.color = "white";
});

aboutButton.addEventListener("mouseleave", () => {
    aboutButton.style.color = "black";
});



/*Click event listeners*/
homeButton.addEventListener("click", () => {
    clearDiv();
    homePageLoad();
});

menuButton.addEventListener("click", () => {
    clearDiv();
    menuPageLoad();
});

aboutButton.addEventListener("click", () => {
    clearDiv();
    aboutPageLoad();
});