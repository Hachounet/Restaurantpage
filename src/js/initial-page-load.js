import Basil from "./imgs/basil.png"
import Pizzaslice from "./imgs/pizzaslice.png"

export function displayLandingPage(){

    const contentDiv = document.getElementById("content");
    const divPepp = document.createElement("div");
    const spanPepp = document.createElement("span");
    const pPepp = document.createElement("p");

    const divPizza = document.createElement("div")
    const imgPizza = new Image();
   

    const divBasil = document.createElement("div");
    const imgBasil = new Image();
  

    const divIngr = document.createElement("div");
    const pIngr = document.createElement("p");
    const spanIngr = document.createElement("span");

    divPepp.classList.add("text-content1");
    spanPepp.textContent = "Pepperonni";
    pPepp.innerHTML = "Life is all about " + spanPepp.outerHTML + ". It will always be.";

    divPepp.appendChild(pPepp)

    divPizza.setAttribute("id", "imgright")
    imgPizza.src = Pizzaslice;
    divPizza.appendChild(imgPizza)

    imgBasil.src = Basil;
    divBasil.setAttribute("id", "imgleft")
    divBasil.appendChild(imgBasil);

    divIngr.classList.add("text-content2");
    spanIngr.textContent = "we believe";
    pIngr.innerHTML = "At Tonyo's " + spanIngr.outerHTML + " in fresh and biological ingredients. Do you ?"
    divIngr.appendChild(pIngr);



    contentDiv.appendChild(divPepp);
    contentDiv.appendChild(divPizza);
    contentDiv.appendChild(divBasil);
    contentDiv.appendChild(divIngr);


}
