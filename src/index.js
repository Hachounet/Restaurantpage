import scss from "./style.scss"


import { displayLandingPage } from "./js/initial-page-load"
import { displayMenuPage } from "./js/menu-page-load";
import { displayAboutPage} from "./js/about-page-load"

import logo from "./imgs/logo.png"

function displayLogo() {
    const header = document.querySelector("header")
    const logoImg = new Image();
    logoImg.src = logo;
    header.appendChild(logoImg);

}


function dynamicContent() {
    const buttons = document.querySelectorAll("button")
    const content = document.getElementById("content")
    buttons.forEach(button => {
        button.addEventListener("focus", function() {

        if ( button.textContent === "Home") {
            content.innerHTML = "";
            displayLandingPage()
        }
        else if ( button.textContent === "Menu"){
            content.innerHTML = "";
            displayMenuPage()
        }
        else if ( button.textContent === "About") {
            content.innerHTML = "";
            displayAboutPage();
        }

    });
});

};

displayLogo();
displayLandingPage();
document.addEventListener("DOMContentLoaded", dynamicContent);