import scss from "./style.scss"


import { displayLandingPage } from "./js/initial-page-load"
import { displayMenuPage } from "./js/menu-page-load";
import { displayAboutPage} from "./js/about-page-load"

import Basil from "./imgs/basil.png"
import coppapizza from "./imgs/coppapizza.png"
import logo from "./imgs/logo.png"
import mozza2 from "./imgs/mozza2.png"
import pepperonnipizza from "./imgs/pepperonnipizza.png"
import pizzaslice from "./imgs/pizzaslice.png"



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

displayLandingPage();
document.addEventListener("DOMContentLoaded", dynamicContent);